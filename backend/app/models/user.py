"""User ORM model (doctors, radiologists, staff, hospital admins).

Stores credentials, role for RBAC, professional license details, and the
hashed signing PIN used when a doctor signs a report.
"""

import uuid

from sqlalchemy import Enum as SAEnum
from sqlalchemy import ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.core.enums import UserRole, UserStatus
from app.models.base import TimestampMixin, UUIDMixin


class User(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "users"

    hospital_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("hospitals.id"), nullable=False
    )

    full_name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)

    role: Mapped[UserRole] = mapped_column(SAEnum(UserRole), default=UserRole.DOCTOR)
    status: Mapped[UserStatus] = mapped_column(SAEnum(UserStatus), default=UserStatus.ACTIVE)

    # Professional details (doctors/radiologists)
    license_no: Mapped[str | None] = mapped_column(String(100))  # e.g. PMDC number
    specialty: Mapped[str | None] = mapped_column(String(120))

    # Hashed PIN used for report sign-off
    sign_pin_hash: Mapped[str | None] = mapped_column(String(255))

    hospital: Mapped["Hospital"] = relationship(back_populates="users")  # noqa: F821
