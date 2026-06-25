"""Global exception handling.

Registers handlers that turn domain/HTTP exceptions into consistent JSON error
responses (the frontend expects clear, actionable error states).
"""

from fastapi import FastAPI


def register_exception_handlers(app: FastAPI) -> None:
    """Attach app-wide exception handlers to the FastAPI instance."""
    # TODO: handle HTTPException, validation errors, and unexpected errors
    ...
