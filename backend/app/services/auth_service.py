"""Authentication & hospital-onboarding business logic.

Handles login (verify credentials -> issue JWTs), token refresh, and hospital
registration (creates the hospital plus its first Hospital Admin user).
"""

from sqlalchemy.orm import Session


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def authenticate(self, email: str, password: str):
        """Verify credentials and return the user, or raise on failure."""
        ...

    def login(self, email: str, password: str):
        """Authenticate and return an access/refresh token pair."""
        ...

    def refresh(self, refresh_token: str):
        """Validate a refresh token and issue a new access token."""
        ...

    def register_hospital(self, data):
        """Create a hospital and its first admin account; return tokens."""
        ...
