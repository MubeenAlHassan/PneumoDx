"""Report schemas: create draft, doctor update/sign, admin certify, and read."""

from datetime import datetime

from pydantic import BaseModel

from app.core.enums import DiagnosisAgreement, ReportStatus, SignatureType
from app.schemas.common import ORMModel


class ReportCreate(BaseModel):
    """Create a draft report for an analysed scan."""

    scan_id: str


class ReportUpdate(BaseModel):
    """Doctor-editable report content (allowed only before signing)."""

    clinical_findings: str | None = None
    diagnosis_agreement: DiagnosisAgreement | None = None
    icd_code: str | None = None
    recommendations: str | None = None
    followup_instructions: str | None = None


class SignRequest(BaseModel):
    """Doctor sign-off: requires the signing PIN."""

    pin: str


class CertifyRequest(BaseModel):
    """Hospital admin co-sign + certification with optional notes."""

    admin_notes: str | None = None


class SignatureRead(ORMModel):
    """A single signature event on a report."""

    id: str
    signature_type: SignatureType
    signature_hash: str
    signed_at: datetime | None = None


class ReportRead(ORMModel):
    """Full report detail returned to clients."""

    id: str
    report_no: str
    scan_id: str
    patient_id: str
    doctor_id: str | None = None
    status: ReportStatus
    clinical_findings: str | None = None
    diagnosis_agreement: DiagnosisAgreement | None = None
    icd_code: str | None = None
    recommendations: str | None = None
    followup_instructions: str | None = None
    pdf_path: str | None = None
    signatures: list[SignatureRead] = []


class VerifyResponse(BaseModel):
    """Public report-authenticity verification result."""

    report_no: str
    valid: bool
    certified_at: datetime | None = None
    hospital_name: str | None = None
