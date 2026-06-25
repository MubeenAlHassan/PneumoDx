"""Auth routes: login, logout, refresh, and hospital registration.

Thin HTTP layer — delegates to AuthService. (Design spec 9.1 AUTH section.)
"""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.auth import LoginRequest, RefreshRequest, TokenResponse
from app.schemas.hospital import HospitalCreate

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    """Authenticate a user and return access + refresh tokens."""
    ...


@router.post("/logout")
def logout(db: Session = Depends(get_db)):
    """Invalidate the current session/refresh token."""
    ...


@router.post("/refresh", response_model=TokenResponse)
def refresh(payload: RefreshRequest, db: Session = Depends(get_db)):
    """Exchange a valid refresh token for a new access token."""
    ...


@router.post("/register-hospital", response_model=TokenResponse)
def register_hospital(payload: HospitalCreate, db: Session = Depends(get_db)):
    """Register a hospital and its first admin account."""
    ...
