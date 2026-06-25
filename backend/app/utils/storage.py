"""File storage helpers for X-rays, heatmaps, and generated PDFs.

Abstracts where binary artefacts live (local STORAGE_DIR now, object storage
like S3/MinIO later) so services only deal with logical paths.
"""

from fastapi import UploadFile


def save_upload(file: UploadFile, subdir: str) -> str:
    """Persist an uploaded file and return its stored path/reference."""
    ...


def save_bytes(data: bytes, filename: str, subdir: str) -> str:
    """Persist raw bytes (e.g. a heatmap or PDF) and return its path."""
    ...


def load_file(path: str) -> bytes:
    """Read a stored artefact back into memory."""
    ...
