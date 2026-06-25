"""Patient schemas: registration, update, and read responses."""

from datetime import date

from pydantic import BaseModel

from app.core.enums import Gender, Priority
from app.schemas.common import ORMModel


class PatientCreate(BaseModel):
    """Patient registration payload (from the Register Patient form)."""

    first_name: str
    last_name: str
    dob: date | None = None
    gender: Gender | None = None
    cnic: str | None = None
    contact: str | None = None
    referring_doctor_id: str | None = None
    ward: str | None = None
    chief_complaint: str | None = None
    priority: Priority = Priority.ROUTINE


class PatientUpdate(BaseModel):
    """Editable patient fields."""

    contact: str | None = None
    ward: str | None = None
    chief_complaint: str | None = None
    priority: Priority | None = None


class PatientRead(ORMModel):
    """Patient detail returned to clients."""

    id: str
    mrn: str
    first_name: str
    last_name: str
    dob: date | None = None
    gender: Gender | None = None
    cnic: str | None = None
    contact: str | None = None
    ward: str | None = None
    chief_complaint: str | None = None
    priority: Priority
