"""Report lifecycle business logic.

Drives the report state machine: create draft -> doctor edits -> doctor signs
-> hospital certifies -> PDF generated. Enforces who can do what and when.
"""

from sqlalchemy.orm import Session


class ReportService:
    def __init__(self, db: Session):
        self.db = db

    def create_draft(self, scan_id, doctor_id):
        """Create a draft report (report_no) for an analysed scan."""
        ...

    def get_report(self, report_id):
        """Fetch full report detail."""
        ...

    def update_report(self, report_id, doctor_id, data):
        """Update report content; allowed only before the doctor signs."""
        ...

    def sign_report(self, report_id, doctor, pin):
        """Verify the PIN, hash the content, and apply the doctor signature."""
        ...

    def certify_report(self, report_id, admin, admin_notes):
        """Hospital co-sign: add second signature, certify, trigger PDF build."""
        ...

    def verify_report(self, report_no):
        """Public authenticity check by report number (no PHI exposed)."""
        ...
