"""Data access for scans and their AI analyses."""

from app.models.ai_analysis import AiAnalysis
from app.models.scan import Scan
from app.repositories.base import BaseRepository


class ScanRepository(BaseRepository):
    model = Scan

    def list_for_patient(self, patient_id):
        """All scans for a given patient (history)."""
        ...

    def save_analysis(self, analysis_in: dict) -> AiAnalysis:
        """Persist the AI analysis result returned by the ML service."""
        ...
