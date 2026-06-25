"""Audit log read schema for the Hospital Admin audit screen."""

from datetime import datetime

from app.core.enums import AuditAction, AuditResult, UserRole
from app.schemas.common import ORMModel


class AuditLogRead(ORMModel):
    """A single audit trail entry."""

    id: str
    created_at: datetime
    user_id: str | None = None
    user_role: UserRole | None = None
    action: AuditAction
    resource_type: str | None = None
    resource_id: str | None = None
    ip_address: str | None = None
    result: AuditResult
