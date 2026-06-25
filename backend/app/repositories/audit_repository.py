"""Data access for the append-only audit log."""

from app.models.audit_log import AuditLog
from app.repositories.base import BaseRepository


class AuditRepository(BaseRepository):
    model = AuditLog

    def record(self, entry_in: dict) -> AuditLog:
        """Append a new audit entry (never updated/deleted)."""
        ...

    def list_for_hospital(self, hospital_id, skip: int = 0, limit: int = 50):
        """Paginated audit trail for the admin audit screen / CSV export."""
        ...
