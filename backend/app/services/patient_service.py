"""Patient management business logic."""

from sqlalchemy.orm import Session


class PatientService:
    def __init__(self, db: Session):
        self.db = db

    def register_patient(self, hospital_id, created_by, data):
        """Generate an MRN, create the patient, and write an audit entry."""
        ...

    def list_patients(self, hospital_id, query, page, page_size):
        """Return a paginated/filtered list of patients."""
        ...

    def get_patient(self, patient_id):
        """Fetch a single patient by id."""
        ...

    def update_patient(self, patient_id, data):
        """Update editable patient fields."""
        ...
