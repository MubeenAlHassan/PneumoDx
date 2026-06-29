"""Data access for hospitals."""

from app.models.hospital import Hospital
from app.repositories.base import BaseRepository


class HospitalRepository(BaseRepository):
    model = Hospital

    def get_by_registration_no(self, registration_no: str):
        """Find a hospital by its unique registration number."""
        return (
            self.db.query(Hospital)
            .filter(Hospital.registration_no == registration_no)
            .first()
        )
