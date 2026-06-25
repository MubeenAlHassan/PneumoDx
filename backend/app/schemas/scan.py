"""Scan schemas: upload metadata, flag request, and read responses.

The actual image arrives as multipart/form-data (UploadFile); these models
describe the accompanying metadata and the returned scan + AI result.
"""

from datetime import datetime

from pydantic import BaseModel

from app.core.enums import ScanStatus, ScanType
from app.schemas.ai_analysis import AiAnalysisRead
from app.schemas.common import ORMModel


class ScanMetadata(BaseModel):
    """Metadata submitted with an X-ray upload."""

    patient_id: str
    scan_type: ScanType = ScanType.PA
    scan_datetime: datetime | None = None
    equipment: str | None = None
    radiologist_notes: str | None = None


class FlagRequest(BaseModel):
    """Reason payload for flagging a scan for re-analysis."""

    reason: str  # e.g. "Poor image quality"


class ScanRead(ORMModel):
    """Scan record returned to clients, including its AI analysis if ready."""

    id: str
    patient_id: str
    scan_type: ScanType
    scan_datetime: datetime | None = None
    equipment: str | None = None
    radiologist_notes: str | None = None
    status: ScanStatus
    analysis: AiAnalysisRead | None = None
