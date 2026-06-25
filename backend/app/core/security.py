"""Security primitives: password hashing, JWT tokens, and signing PINs.

Centralises all cryptography-adjacent helpers so routes/services never deal
with raw hashing or token logic directly. Implementations to be filled in.
"""

from datetime import timedelta


def hash_password(plain_password: str) -> str:
    """Hash a plaintext password (bcrypt) for storage."""
    # TODO: implement with passlib CryptContext
    ...


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Check a plaintext password against its stored hash."""
    # TODO: implement with passlib CryptContext
    ...


def hash_pin(plain_pin: str) -> str:
    """Hash a doctor's 4-6 digit signing PIN (bcrypt, rate-limited at use)."""
    # TODO: implement
    ...


def verify_pin(plain_pin: str, hashed_pin: str) -> bool:
    """Verify a signing PIN entered during report sign-off."""
    # TODO: implement
    ...


def create_access_token(subject: str, role: str, expires_delta: timedelta | None = None) -> str:
    """Create a short-lived JWT access token carrying the user id and role."""
    # TODO: encode claims (sub, role, exp) with JWT_SECRET_KEY
    ...


def create_refresh_token(subject: str) -> str:
    """Create a long-lived refresh token for the sliding refresh window."""
    # TODO: implement
    ...


def decode_token(token: str) -> dict:
    """Decode and validate a JWT, returning its claims (raises on invalid)."""
    # TODO: implement
    ...
