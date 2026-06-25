"""Data access for reports and signatures."""

from app.models.report import Report
from app.models.signature import Signature
from app.repositories.base import BaseRepository


class ReportRepository(BaseRepository):
    model = Report

    def get_by_report_no(self, report_no: str):
        """Find a report by its human-readable number (verification)."""
        ...

    def list_by_status(self, hospital_id, status, skip: int = 0, limit: int = 50):
        """List reports filtered by lifecycle status (e.g. co-sign queue)."""
        ...

    def add_signature(self, signature_in: dict) -> Signature:
        """Record a doctor signature or hospital co-sign on a report."""
        ...

    def count_signed(self, hospital_id) -> int:
        """Count signed reports for the hospital stats card."""
        ...
