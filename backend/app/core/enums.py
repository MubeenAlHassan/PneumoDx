"""Domain-wide enumerations shared across models, schemas, and services.

These mirror the values described in the frontend design spec (roles,
report lifecycle state machine, AI result labels, and audit actions).
"""

from enum import Enum


class UserRole(str, Enum):
    """Roles that determine RBAC permissions across the platform."""

    HOSPITAL_ADMIN = "HOSPITAL_ADMIN"
    DOCTOR = "DOCTOR"
    RADIOLOGIST = "RADIOLOGIST"
    STAFF = "STAFF"
    SYSTEM = "SYSTEM"


class UserStatus(str, Enum):
    """Account activation status used by the admin doctor-management screen."""

    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    SUSPENDED = "SUSPENDED"


class Gender(str, Enum):
    """Patient gender options from the registration form."""

    MALE = "MALE"
    FEMALE = "FEMALE"
    OTHER = "OTHER"


class Priority(str, Enum):
    """Case priority captured at patient registration."""

    ROUTINE = "ROUTINE"
    URGENT = "URGENT"
    EMERGENCY = "EMERGENCY"


class ScanType(str, Enum):
    """Chest X-ray projection types from the upload form."""

    PA = "PA"
    AP = "AP"
    LATERAL = "LATERAL"


class ScanStatus(str, Enum):
    """Lifecycle of an uploaded scan as the AI pipeline runs."""

    UPLOADED = "UPLOADED"
    PROCESSING = "PROCESSING"
    ANALYZED = "ANALYZED"
    FAILED = "FAILED"
    FLAGGED = "FLAGGED"


class AiLabel(str, Enum):
    """Top-level AI classification result."""

    PNEUMONIA_DETECTED = "PNEUMONIA_DETECTED"
    SUSPECTED = "SUSPECTED"
    NORMAL = "NORMAL"


class Severity(str, Enum):
    """Severity grading attached to a positive/suspected finding."""

    MILD = "MILD"
    MODERATE = "MODERATE"
    SEVERE = "SEVERE"


class ReportStatus(str, Enum):
    """Report lifecycle state machine (see design spec section 5.2)."""

    PENDING = "PENDING"
    AI_READY = "AI_READY"
    IN_REVIEW = "IN_REVIEW"
    FLAGGED = "FLAGGED"
    DOCTOR_SIGNED = "DOCTOR_SIGNED"
    CERTIFIED = "CERTIFIED"
    DELIVERED = "DELIVERED"


class DiagnosisAgreement(str, Enum):
    """Doctor's stance on the AI finding during review."""

    CONFIRM = "CONFIRM"
    PARTIAL = "PARTIAL"
    DISAGREE = "DISAGREE"


class SignatureType(str, Enum):
    """Distinguishes the doctor signature from the hospital co-sign."""

    DOCTOR = "DOCTOR"
    HOSPITAL = "HOSPITAL"


class AuditAction(str, Enum):
    """Append-only audit trail action types (see design spec section 10.4)."""

    LOGIN = "LOGIN"
    LOGOUT = "LOGOUT"
    PATIENT_REGISTERED = "PATIENT_REGISTERED"
    SCAN_UPLOADED = "SCAN_UPLOADED"
    AI_COMPLETE = "AI_COMPLETE"
    REPORT_SIGNED = "REPORT_SIGNED"
    REPORT_CERTIFIED = "REPORT_CERTIFIED"
    PDF_EXPORTED = "PDF_EXPORTED"
    FLAG_RAISED = "FLAG_RAISED"
    RE_ANALYSIS_REQUESTED = "RE_ANALYSIS_REQUESTED"


class AuditResult(str, Enum):
    """Outcome recorded for each audited action."""

    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"
