"""Generic repository base with common CRUD helpers.

Concrete repositories subclass this and bind a specific ORM model so the
service layer can do data access without writing raw queries everywhere.
"""

from sqlalchemy.orm import Session


class BaseRepository:
    """Holds the DB session and the bound model for a repository."""

    model = None  # set by subclasses to an ORM model class

    def __init__(self, db: Session):
        self.db = db

    def get(self, id):
        """Fetch a single row by primary key (or None)."""
        ...

    def list(self, skip: int = 0, limit: int = 50):
        """Return a page of rows."""
        ...

    def create(self, obj_in: dict):
        """Insert a new row from a dict of column values."""
        ...

    def update(self, db_obj, obj_in: dict):
        """Apply changes to an existing row and persist."""
        ...

    def delete(self, db_obj):
        """Delete a row (used sparingly; medical records prefer soft-delete)."""
        ...
