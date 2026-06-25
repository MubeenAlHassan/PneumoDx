"""Audit logging business logic."""

from sqlalchemy.orm import Session


class AuditService:
    def __init__(self, db: Session):
        self.db = db

    def log(self, *, user, action, resource_type=None, resource_id=None, ip=None, result=None):
        """Append an audit entry for a significant action."""
        ...

    def list_logs(self, hospital_id, page, page_size):
        """Return a paginated audit trail for the admin screen."""
        ...

    def export_csv(self, hospital_id):
        """Produce a CSV export of the hospital's audit log."""
        ...
