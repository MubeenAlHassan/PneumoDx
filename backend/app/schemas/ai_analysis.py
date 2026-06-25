"""AI analysis schemas.

AiAnalysisResult mirrors the ML service response (design spec 9.2) and is also
the shape persisted/returned alongside a scan.
"""

from datetime import datetime

from pydantic import BaseModel

from app.core.enums import AiLabel, Severity
from app.schemas.common import ORMModel


class ConfidenceBreakdown(BaseModel):
    """Per-class probabilities returned by the model."""

    pneumonia: float
    normal: float
    uncertain: float | None = None


class AiAnalysisRead(ORMModel):
    """Stored AI analysis returned with a scan/report."""

    id: str
    analysis_ref: str
    model_version: str | None = None
    label: AiLabel
    confidence: float
    severity: Severity | None = None
    lung_zone: str | None = None
    laterality: str | None = None
    pattern: str | None = None
    confidence_breakdown: ConfidenceBreakdown | None = None
    heatmap_path: str | None = None
    icd_suggestion: str | None = None
    processed_at: datetime | None = None
