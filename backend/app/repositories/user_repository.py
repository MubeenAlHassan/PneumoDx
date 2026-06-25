"""Data access for users and their credentials/PINs."""

from app.models.user import User
from app.repositories.base import BaseRepository


class UserRepository(BaseRepository):
    model = User

    def get_by_email(self, email: str):
        """Look up a user by email (used during login)."""
        ...

    def list_doctors(self, hospital_id):
        """List doctors belonging to a hospital (admin doctor screen)."""
        ...

    def count_active_doctors(self, hospital_id) -> int:
        """Count active doctors for the hospital stats card."""
        ...
