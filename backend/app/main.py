"""FastAPI application entry point.

Creates the app, configures CORS for the Next.js frontend, registers
middleware/exception handlers, and mounts the versioned (v1) API router.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.api import api_router
from app.core.config import settings
from app.middleware.audit_middleware import register_audit_middleware
from app.middleware.error_handler import register_exception_handlers

app = FastAPI(title=settings.PROJECT_NAME)

# Allow the frontend origin(s) to call the API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cross-cutting concerns.
register_exception_handlers(app)
register_audit_middleware(app)

# Mount versioned API.
app.include_router(api_router, prefix=settings.API_V1_PREFIX)


@app.get("/health", tags=["health"])
def health_check():
    """Liveness probe used by Docker/compose and uptime checks."""
    return {"status": "ok"}
