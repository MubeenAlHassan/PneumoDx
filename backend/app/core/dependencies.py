"""Shared FastAPI dependencies for authentication and RBAC.

Provides get_current_user (decodes the JWT and loads the user) plus role-guard
factories used by routes to enforce the permission matrix from the design spec.
"""

from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db
from app.core.enums import UserRole

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_PREFIX}/auth/login")


def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    """Decode the bearer token and return the authenticated user model."""
    # TODO: decode token, load user from DB, raise 401 if invalid/inactive
    ...


def require_roles(*allowed_roles: UserRole):
    """Return a dependency that allows only the given roles (RBAC guard)."""

    def _guard(current_user=Depends(get_current_user)):
        # TODO: raise 403 if current_user.role not in allowed_roles
        ...

    return _guard
