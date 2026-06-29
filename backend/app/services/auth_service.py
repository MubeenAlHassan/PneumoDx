"""Authentication & hospital-onboarding business logic."""

import uuid

from fastapi import HTTPException, status
from jose import JWTError
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.enums import UserRole, UserStatus
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)
from app.models.hospital import Hospital
from app.models.user import User
from app.repositories.hospital_repository import HospitalRepository
from app.repositories.user_repository import UserRepository
from app.schemas.auth import TokenResponse
from app.schemas.hospital import HospitalCreate


class AuthService:
    def __init__(self, db: Session):
        self.db = db
        self.users = UserRepository(db)
        self.hospitals = HospitalRepository(db)

    def authenticate(self, email: str, password: str) -> User:
        """Verify credentials and return the user, or raise on failure."""
        user = self.users.get_by_email(email.strip().lower())
        if user is None or not verify_password(password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
            )
        if user.status != UserStatus.ACTIVE:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Account is not active",
            )
        return user

    def login(self, email: str, password: str) -> TokenResponse:
        """Authenticate and return an access/refresh token pair."""
        user = self.authenticate(email, password)
        return self._issue_tokens(user)

    def refresh(self, refresh_token: str) -> TokenResponse:
        """Validate a refresh token and issue a new access token."""
        try:
            payload = decode_token(refresh_token)
        except JWTError as exc:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired refresh token",
            ) from exc

        if payload.get("type") != "refresh":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token",
            )

        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token",
            )

        user = self.users.get(uuid.UUID(user_id))
        if user is None or user.status != UserStatus.ACTIVE:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User not found or inactive",
            )

        return self._issue_tokens(user)

    def register_hospital(self, data: HospitalCreate) -> TokenResponse:
        """Create a hospital and its first admin account; return tokens."""
        email = data.admin_email.strip().lower()

        if self.users.get_by_email(email):
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="An account with this email already exists",
            )
        if self.hospitals.get_by_registration_no(data.registration_no.strip()):
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="A hospital with this registration number already exists",
            )

        hospital = Hospital(
            name=data.hospital_name.strip(),
            type=data.hospital_type,
            registration_no=data.registration_no.strip(),
            city=data.city,
            country=data.country,
        )
        admin = User(
            hospital=hospital,
            full_name=data.admin_name.strip(),
            email=email,
            password_hash=hash_password(data.password),
            role=UserRole.HOSPITAL_ADMIN,
            status=UserStatus.ACTIVE,
        )

        self.db.add(hospital)
        self.db.add(admin)

        try:
            self.db.commit()
        except IntegrityError as exc:
            self.db.rollback()
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Hospital or admin account already exists",
            ) from exc

        self.db.refresh(admin)
        return self._issue_tokens(admin)

    def _issue_tokens(self, user: User) -> TokenResponse:
        access_token = create_access_token(str(user.id), user.role.value)
        refresh_token = create_refresh_token(str(user.id))
        return TokenResponse(access_token=access_token, refresh_token=refresh_token)
