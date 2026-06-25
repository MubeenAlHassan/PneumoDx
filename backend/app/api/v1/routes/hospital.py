"""Hospital admin routes: doctors, audit log, dashboard stats.

Restricted to Hospital Admins via RBAC. (Design spec 9.1 HOSPITAL ADMIN.)
"""

from fastapi import APIRouter, Depends
from fastapi.responses import Response
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import require_roles
from app.core.enums import UserRole
from app.schemas.audit_log import AuditLogRead
from app.schemas.common import Page
from app.schemas.hospital import HospitalStats
from app.schemas.user import UserCreate, UserRead

router = APIRouter(prefix="/hospital", tags=["hospital-admin"])


@router.get("/doctors", response_model=list[UserRead])
def list_doctors(
    db: Session = Depends(get_db), admin=Depends(require_roles(UserRole.HOSPITAL_ADMIN))
):
    """List doctors registered under the hospital."""
    ...


@router.post("/doctors", response_model=UserRead, status_code=201)
def register_doctor(
    payload: UserCreate,
    db: Session = Depends(get_db),
    admin=Depends(require_roles(UserRole.HOSPITAL_ADMIN)),
):
    """Register a new doctor/staff account under the hospital."""
    ...


@router.get("/audit-log", response_model=Page[AuditLogRead])
def get_audit_log(
    page: int = 1,
    page_size: int = 50,
    db: Session = Depends(get_db),
    admin=Depends(require_roles(UserRole.HOSPITAL_ADMIN)),
):
    """Paginated audit trail for the hospital."""
    ...


@router.get("/audit-log/export")
def export_audit_log(
    db: Session = Depends(get_db), admin=Depends(require_roles(UserRole.HOSPITAL_ADMIN))
) -> Response:
    """Export the audit trail as CSV."""
    ...


@router.get("/stats", response_model=HospitalStats)
def get_stats(
    db: Session = Depends(get_db), admin=Depends(require_roles(UserRole.HOSPITAL_ADMIN))
):
    """Dashboard counters for the hospital overview."""
    ...
