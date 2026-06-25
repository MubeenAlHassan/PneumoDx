"""Patient routes: list, register, detail, update. (Design spec 9.1 PATIENTS.)"""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.schemas.common import Page
from app.schemas.patient import PatientCreate, PatientRead, PatientUpdate

router = APIRouter(prefix="/patients", tags=["patients"])


@router.get("", response_model=Page[PatientRead])
def list_patients(
    q: str | None = None,
    page: int = 1,
    page_size: int = 50,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """List patients (paginated, optional search) for the user's hospital."""
    ...


@router.post("", response_model=PatientRead, status_code=201)
def register_patient(
    payload: PatientCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Register a new patient (generates an MRN)."""
    ...


@router.get("/{patient_id}", response_model=PatientRead)
def get_patient(
    patient_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_user)
):
    """Get a single patient's details."""
    ...


@router.patch("/{patient_id}", response_model=PatientRead)
def update_patient(
    patient_id: str,
    payload: PatientUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Update editable patient fields."""
    ...
