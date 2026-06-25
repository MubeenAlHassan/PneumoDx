"""AI analysis ORM model.

Persists the result returned by the ML microservice for a scan: label,
confidence, severity/localisation, the per-class breakdown, heatmap path, and
the suggested ICD code (mirrors the AI response schema in design spec 9.2).
"""

import uuid
from datetime import datetime

from sqlalchemy import DateTime
from sqlalchemy import Enum as SAEnum
from sqlalchemy import Float, ForeignKey, String
from sqlalchemy.dialects.postgresql import JSONB, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.core.enums import AiLabel, Severity
from app.models.base import TimestampMixin, UUIDMixin


class AiAnalysis(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "ai_analyses"

    scan_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("scans.id"), unique=True, nullable=False
    )

    # Human-readable analysis id (e.g. AI-2024-06-14-0821)
    analysis_ref: Mapped[str] = mapped_column(String(64), unique=True, nullable=False)
    model_version: Mapped[str | None] = mapped_column(String(100))

    label: Mapped[AiLabel] = mapped_column(SAEnum(AiLabel), nullable=False)
    confidence: Mapped[float] = mapped_column(Float, nullable=False)
    severity: Mapped[Severity | None] = mapped_column(SAEnum(Severity))
    lung_zone: Mapped[str | None] = mapped_column(String(80))
    laterality: Mapped[str | None] = mapped_column(String(40))
    pattern: Mapped[str | None] = mapped_column(String(80))

    # Per-class probabilities {"pneumonia": .., "normal": .., "uncertain": ..}
    confidence_breakdown: Mapped[dict | None] = mapped_column(JSONB)

    heatmap_path: Mapped[str | None] = mapped_column(String(512))
    icd_suggestion: Mapped[str | None] = mapped_column(String(20))

    processed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))

    scan: Mapped["Scan"] = relationship(back_populates="analysis")  # noqa: F821
