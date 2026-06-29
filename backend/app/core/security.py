"""Security primitives: password hashing, JWT tokens, and signing PINs."""

from datetime import UTC, datetime, timedelta

import bcrypt
from jose import JWTError, jwt

from app.core.config import settings


def hash_password(plain_password: str) -> str:
    """Hash a plaintext password (bcrypt) for storage."""
    return bcrypt.hashpw(plain_password.encode(), bcrypt.gensalt()).decode()


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Check a plaintext password against its stored hash."""
    return bcrypt.checkpw(plain_password.encode(), hashed_password.encode())


def hash_pin(plain_pin: str) -> str:
    """Hash a doctor's 4-6 digit signing PIN (bcrypt, rate-limited at use)."""
    return bcrypt.hashpw(plain_pin.encode(), bcrypt.gensalt()).decode()


def verify_pin(plain_pin: str, hashed_pin: str) -> bool:
    """Verify a signing PIN entered during report sign-off."""
    return bcrypt.checkpw(plain_pin.encode(), hashed_pin.encode())


def create_access_token(subject: str, role: str, expires_delta: timedelta | None = None) -> str:
    """Create a short-lived JWT access token carrying the user id and role."""
    expire = datetime.now(UTC) + (
        expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    payload = {
        "sub": subject,
        "role": role,
        "type": "access",
        "exp": expire,
    }
    return jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def create_refresh_token(subject: str) -> str:
    """Create a long-lived refresh token for the sliding refresh window."""
    expire = datetime.now(UTC) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS)
    payload = {
        "sub": subject,
        "type": "refresh",
        "exp": expire,
    }
    return jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def decode_token(token: str) -> dict:
    """Decode and validate a JWT, returning its claims (raises JWTError on invalid)."""
    return jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
