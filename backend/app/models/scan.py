"""Scan ORM model.

Represents an uploaded chest X-ray plus its capture metadata. A scan moves
through ScanStatus as the AI pipeline runs and owns one AI analysis result.
"""

import uuid
from datetime import datetime

from sqlalchemy import DateTime
from sqlalchemy import Enum as SAEnum
from sqlalchemy import ForeignKey, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.core.enums import ScanStatus, ScanType
from app.models.base import TimestampMixin, UUIDMixin


class Scan(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "scans"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("patients.id"), nullable=False
    )
    uploaded_by: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )

    # Stored object path/reference to the uploaded X-ray (not a public URL)
    file_path: Mapped[str] = mapped_column(String(512), nullable=False)
    scan_type: Mapped[ScanType] = mapped_column(SAEnum(ScanType), default=ScanType.PA)
    scan_datetime: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    equipment: Mapped[str | None] = mapped_column(String(255))
    radiologist_notes: Mapped[str | None] = mapped_column(Text)

    status: Mapped[ScanStatus] = mapped_column(SAEnum(ScanStatus), default=ScanStatus.UPLOADED)

    patient: Mapped["Patient"] = relationship(back_populates="scans")  # noqa: F821
    analysis: Mapped["AiAnalysis | None"] = relationship(  # noqa: F821
        back_populates="scan", uselist=False
    )
    report: Mapped["Report | None"] = relationship(  # noqa: F821
        back_populates="scan", uselist=False
    )
