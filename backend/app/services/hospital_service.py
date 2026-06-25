"""Hospital admin business logic: doctor management and dashboard stats."""

from sqlalchemy.orm import Session


class HospitalService:
    def __init__(self, db: Session):
        self.db = db

    def list_doctors(self, hospital_id):
        """List doctors registered under the hospital."""
        ...

    def register_doctor(self, hospital_id, data):
        """Create a new doctor/staff account under the hospital."""
        ...

    def get_stats(self, hospital_id):
        """Aggregate counters for the admin overview dashboard."""
        ...
