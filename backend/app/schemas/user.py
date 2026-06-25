"""User schemas: doctor registration, profile read, and PIN management."""

from pydantic import BaseModel, EmailStr

from app.core.enums import UserRole, UserStatus
from app.schemas.common import ORMModel


class UserCreate(BaseModel):
    """Payload for an admin registering a new doctor/staff member."""

    full_name: str
    email: EmailStr
    password: str
    role: UserRole = UserRole.DOCTOR
    license_no: str | None = None
    specialty: str | None = None


class UserUpdate(BaseModel):
    """Mutable fields for updating a user (status, specialty, etc.)."""

    full_name: str | None = None
    specialty: str | None = None
    status: UserStatus | None = None


class UserRead(ORMModel):
    """Public-facing user representation."""

    id: str
    full_name: str
    email: EmailStr
    role: UserRole
    status: UserStatus
    license_no: str | None = None
    specialty: str | None = None


class SetPinRequest(BaseModel):
    """Body for a doctor setting/updating their signing PIN."""

    pin: str
