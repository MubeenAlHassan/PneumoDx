"""Signature ORM model.

One row per signing event on a report: the doctor's signature and the hospital
admin's co-sign. Stores the content hash for tamper-evidence/verification.
"""

import uuid
from datetime import datetime

from sqlalchemy import DateTime
from sqlalchemy import Enum as SAEnum
from sqlalchemy import ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.core.enums import SignatureType
from app.models.base import TimestampMixin, UUIDMixin


class Signature(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "signatures"

    report_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("reports.id"), nullable=False
    )
    signer_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id"), nullable=False
    )

    signature_type: Mapped[SignatureType] = mapped_column(SAEnum(SignatureType), nullable=False)
    # SHA-256 hash of the report content at signing time
    signature_hash: Mapped[str] = mapped_column(String(128), nullable=False)
    signed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))

    report: Mapped["Report"] = relationship(back_populates="signatures")  # noqa: F821
