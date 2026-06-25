"""Hospital (tenant) ORM model.

Each hospital is the top-level account created at registration; its first user
becomes the Hospital Admin and all users/patients/reports belong to it.
"""

from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.base import TimestampMixin, UUIDMixin


class Hospital(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "hospitals"

    name: Mapped[str] = mapped_column(String(255), nullable=False)
    type: Mapped[str | None] = mapped_column(String(100))  # General/Teaching/Diagnostic/Clinic
    registration_no: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    city: Mapped[str | None] = mapped_column(String(120))
    country: Mapped[str | None] = mapped_column(String(120))

    # Relationships
    users: Mapped[list["User"]] = relationship(back_populates="hospital")  # noqa: F821
    patients: Mapped[list["Patient"]] = relationship(back_populates="hospital")  # noqa: F821
