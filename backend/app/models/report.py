"""Report ORM model.

The clinical report a doctor composes on top of an AI analysis. Holds findings,
diagnosis, recommendations, lifecycle status, and links to its signatures.
"""

import uuid

from sqlalchemy import Enum as SAEnum
from sqlalchemy import ForeignKey, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.core.enums import DiagnosisAgreement, ReportStatus
from app.models.base import TimestampMixin, UUIDMixin


class Report(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "reports"

    scan_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("scans.id"), unique=True, nullable=False
    )
    patient_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("patients.id"), nullable=False
    )
    doctor_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )

    # Human-readable report number (e.g. CMC-2024-0612-001)
    report_no: Mapped[str] = mapped_column(String(64), unique=True, index=True, nullable=False)
    status: Mapped[ReportStatus] = mapped_column(
        SAEnum(ReportStatus), default=ReportStatus.PENDING
    )

    # Physician-authored content
    clinical_findings: Mapped[str | None] = mapped_column(Text)
    diagnosis_agreement: Mapped[DiagnosisAgreement | None] = mapped_column(
        SAEnum(DiagnosisAgreement)
    )
    icd_code: Mapped[str | None] = mapped_column(String(20))
    recommendations: Mapped[str | None] = mapped_column(Text)
    followup_instructions: Mapped[str | None] = mapped_column(Text)

    # Notes left by the hospital admin during co-sign (audit-only)
    admin_notes: Mapped[str | None] = mapped_column(Text)

    # Generated/sealed PDF path once certified
    pdf_path: Mapped[str | None] = mapped_column(String(512))

    scan: Mapped["Scan"] = relationship(back_populates="report")  # noqa: F821
    signatures: Mapped[list["Signature"]] = relationship(  # noqa: F821
        back_populates="report"
    )
