"""Audit log ORM model.

Append-only trail of every significant action (see design spec 10.4). Stored in
its own table so Hospital Admins can review/export it. Never updated or deleted.
"""

import uuid

from sqlalchemy import Enum as SAEnum
from sqlalchemy import ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base
from app.core.enums import AuditAction, AuditResult, UserRole
from app.models.base import TimestampMixin, UUIDMixin


class AuditLog(UUIDMixin, TimestampMixin, Base):
    __tablename__ = "audit_logs"

    hospital_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("hospitals.id")
    )
    user_id: Mapped[uuid.UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"))
    user_role: Mapped[UserRole | None] = mapped_column(SAEnum(UserRole))

    action: Mapped[AuditAction] = mapped_column(SAEnum(AuditAction), nullable=False)
    resource_type: Mapped[str | None] = mapped_column(String(40))  # PATIENT | SCAN | REPORT
    resource_id: Mapped[str | None] = mapped_column(String(64))
    ip_address: Mapped[str | None] = mapped_column(String(64))  # last octet masked
    result: Mapped[AuditResult] = mapped_column(SAEnum(AuditResult), default=AuditResult.SUCCESS)
