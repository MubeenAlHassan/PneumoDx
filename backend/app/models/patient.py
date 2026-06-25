"""Patient ORM model.

Captures demographic and clinical intake details from the patient registration
form. Each patient belongs to a hospital and can have many scans/reports.
"""

import uuid
from datetime import date

from sqlalchemy import Date
from sqlalchemy import Enum as SAEnum
from sqlalchemy import ForeignKey, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.core.enums import Gender, Priority
from app.models.base import TimestampMixin, UUIDMixin


class Patient(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "patients"

    hospital_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("hospitals.id"), nullable=False
    )

    # Human-readable medical record number (e.g. MRN-20240612)
    mrn: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)

    first_name: Mapped[str] = mapped_column(String(120), nullable=False)
    last_name: Mapped[str] = mapped_column(String(120), nullable=False)
    dob: Mapped[date | None] = mapped_column(Date)
    gender: Mapped[Gender | None] = mapped_column(SAEnum(Gender))
    cnic: Mapped[str | None] = mapped_column(String(40))
    contact: Mapped[str | None] = mapped_column(String(40))

    # Clinical intake
    referring_doctor_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )
    ward: Mapped[str | None] = mapped_column(String(120))
    chief_complaint: Mapped[str | None] = mapped_column(Text)
    priority: Mapped[Priority] = mapped_column(SAEnum(Priority), default=Priority.ROUTINE)

    created_by: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )

    hospital: Mapped["Hospital"] = relationship(back_populates="patients")  # noqa: F821
    scans: Mapped[list["Scan"]] = relationship(back_populates="patient")  # noqa: F821
