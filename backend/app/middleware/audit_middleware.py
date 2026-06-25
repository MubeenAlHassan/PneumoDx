"""Request logging / audit middleware.

Lightweight middleware that can capture request context (user, IP, path) to
support the audit trail and basic request logging. Sensitive actions are also
audited explicitly in the service layer.
"""

from fastapi import FastAPI


def register_audit_middleware(app: FastAPI) -> None:
    """Attach the audit/logging middleware to the FastAPI instance."""
    # TODO: add a middleware that records request metadata for auditing
    ...
