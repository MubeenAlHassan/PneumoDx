"""Auth schemas: login request, token response, and token payload."""

from pydantic import BaseModel, EmailStr


class LoginRequest(BaseModel):
    """Credentials submitted to POST /auth/login."""

    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    """JWT pair returned after a successful login/refresh."""

    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class RefreshRequest(BaseModel):
    """Body for POST /auth/refresh."""

    refresh_token: str


class TokenPayload(BaseModel):
    """Decoded JWT claims (subject = user id, plus role)."""

    sub: str | None = None
    role: str | None = None
