"""ORM models package.

Importing this package registers every model on the shared Base metadata so
Alembic autogeneration and Base.metadata.create_all() can see all tables.
"""

from app.models.ai_analysis import AiAnalysis
from app.models.audit_log import AuditLog
from app.models.hospital import Hospital
from app.models.patient import Patient
from app.models.report import Report
from app.models.scan import Scan
from app.models.signature import Signature
from app.models.user import User

__all__ = [
    "Hospital",
    "User",
    "Patient",
    "Scan",
    "AiAnalysis",
    "Report",
    "Signature",
    "AuditLog",
]
