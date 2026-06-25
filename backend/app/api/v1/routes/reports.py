"""Report routes: draft, detail, update, sign, certify, PDF, verify.

Implements the report lifecycle endpoints. (Design spec 9.1 REPORTS.)
"""

from fastapi import APIRouter, Depends
from fastapi.responses import Response
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.schemas.report import (
    CertifyRequest,
    ReportCreate,
    ReportRead,
    ReportUpdate,
    SignRequest,
    VerifyResponse,
)

router = APIRouter(prefix="/reports", tags=["reports"])


@router.post("", response_model=ReportRead, status_code=201)
def create_report(
    payload: ReportCreate, db: Session = Depends(get_db), current_user=Depends(get_current_user)
):
    """Create a draft report for an analysed scan."""
    ...


@router.get("/{report_id}", response_model=ReportRead)
def get_report(
    report_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_user)
):
    """Get full report detail."""
    ...


@router.patch("/{report_id}", response_model=ReportRead)
def update_report(
    report_id: str,
    payload: ReportUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Update report content (doctor only, before signing)."""
    ...


@router.post("/{report_id}/sign", response_model=ReportRead)
def sign_report(
    report_id: str,
    payload: SignRequest,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Doctor signs the report (PIN required)."""
    ...


@router.post("/{report_id}/certify", response_model=ReportRead)
def certify_report(
    report_id: str,
    payload: CertifyRequest,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Hospital admin co-signs and certifies the report."""
    ...


@router.get("/{report_id}/pdf")
def download_pdf(
    report_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_user)
) -> Response:
    """Download the certified, sealed PDF report."""
    ...


@router.get("/{report_no}/verify", response_model=VerifyResponse)
def verify_report(report_no: str, db: Session = Depends(get_db)):
    """Public endpoint to verify report authenticity (no PHI)."""
    ...
