"""v1 API router aggregator.

Combines every route module under a single router that main.py mounts at the
API_V1_PREFIX. Add new v1 routers here.
"""

from fastapi import APIRouter

from app.api.v1.routes import auth, hospital, patients, reports, scans

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(patients.router)
api_router.include_router(scans.router)
api_router.include_router(reports.router)
api_router.include_router(hospital.router)
