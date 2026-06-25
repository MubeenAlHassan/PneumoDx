"""Input validation helpers (e.g. allowed X-ray file types/size)."""

from fastapi import UploadFile

# Accepted upload formats per the upload screen (.dcm / .jpg / .png).
ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "application/dicom"}
MAX_UPLOAD_BYTES = 50 * 1024 * 1024  # 50 MB


def validate_xray_file(file: UploadFile) -> None:
    """Reject unsupported file types or oversized uploads (raise 400)."""
    ...
