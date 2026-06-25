"""Scan routes: upload + analyze, detail, heatmap, flag.

Upload is multipart/form-data (image + metadata). (Design spec 9.1 SCANS & AI.)
"""

from fastapi import APIRouter, Depends, File, Form, UploadFile
from fastapi.responses import Response
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.schemas.scan import FlagRequest, ScanRead

router = APIRouter(prefix="/scans", tags=["scans"])


@router.post("", response_model=ScanRead, status_code=201)
async def upload_scan(
    patient_id: str = Form(...),
    scan_type: str = Form("PA"),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Upload an X-ray, run AI analysis, and return the scan + result."""
    ...


@router.get("/{scan_id}", response_model=ScanRead)
def get_scan(
    scan_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_user)
):
    """Get a scan together with its AI analysis."""
    ...


@router.get("/{scan_id}/heatmap")
def get_heatmap(
    scan_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_user)
) -> Response:
    """Return the GradCAM heatmap image for a scan."""
    ...


@router.post("/{scan_id}/flag", response_model=ScanRead)
def flag_scan(
    scan_id: str,
    payload: FlagRequest,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Flag a scan for re-upload / re-analysis."""
    ...
