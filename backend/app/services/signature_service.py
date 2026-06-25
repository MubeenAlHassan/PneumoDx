"""Digital signature helpers.

Builds the SHA-256 content hash for a report and records signature rows. Kept
separate from ReportService so signing/verification logic is reusable.
"""

from sqlalchemy.orm import Session


class SignatureService:
    def __init__(self, db: Session):
        self.db = db

    def compute_content_hash(self, report) -> str:
        """Produce a deterministic SHA-256 hash of the report content."""
        ...

    def create_signature(self, report, signer, signature_type):
        """Persist a signature row with its content hash and timestamp."""
        ...

    def verify_signature(self, signature, report) -> bool:
        """Re-hash the report and confirm it matches the stored signature."""
        ...
