"""Scan upload + AI analysis orchestration.

Coordinates: store the uploaded file, call the ML client, persist the analysis,
move the scan/report through the lifecycle, and write audit entries.
"""

from sqlalchemy.orm import Session

from app.services.ml_client import MLClient


class ScanService:
    def __init__(self, db: Session, ml_client: MLClient | None = None):
        self.db = db
        self.ml_client = ml_client or MLClient()

    async def upload_and_analyze(self, uploaded_by, metadata, file):
        """Validate + store the X-ray, run AI analysis, and save the result."""
        ...

    def get_scan(self, scan_id):
        """Return a scan with its AI analysis (if ready)."""
        ...

    def get_heatmap(self, scan_id):
        """Return the GradCAM heatmap image for a scan."""
        ...

    def flag_for_reanalysis(self, scan_id, reason, user):
        """Flag a scan, reset its report to PENDING, and notify for re-upload."""
        ...
