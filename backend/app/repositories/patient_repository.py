"""Data access for patients."""

from app.models.patient import Patient
from app.repositories.base import BaseRepository


class PatientRepository(BaseRepository):
    model = Patient

    def get_by_mrn(self, mrn: str):
        """Find a patient by MRN."""
        ...

    def search(self, hospital_id, query: str, skip: int = 0, limit: int = 50):
        """Filter/search patients within a hospital (paginated list)."""
        ...

    def count_for_hospital(self, hospital_id) -> int:
        """Total patient count for the hospital stats card."""
        ...
