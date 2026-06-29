"""Hospital schemas: registration request and read responses.

Hospital registration also creates the first admin user (see auth/user
schemas), matching the Register Hospital screen.
"""

from pydantic import BaseModel, EmailStr, Field

from app.schemas.common import ORMModel


class HospitalCreate(BaseModel):
    """Hospital details + admin account from the registration form."""

    hospital_name: str
    hospital_type: str | None = None
    registration_no: str
    city: str | None = None
    country: str | None = None
    # Administrator account
    admin_name: str
    admin_email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class HospitalRead(ORMModel):
    """Hospital details returned to clients."""

    id: str
    name: str
    type: str | None = None
    registration_no: str
    city: str | None = None
    country: str | None = None


class HospitalStats(BaseModel):
    """Dashboard counters for the Hospital Admin overview."""

    doctors_active: int
    patients_total: int
    reports_signed: int
    pending_signoff: int
