"""Generic repository base with common CRUD helpers."""

from sqlalchemy.orm import Session


class BaseRepository:
    """Holds the DB session and the bound model for a repository."""

    model = None  # set by subclasses to an ORM model class

    def __init__(self, db: Session):
        self.db = db

    def get(self, id):
        """Fetch a single row by primary key (or None)."""
        return self.db.get(self.model, id)

    def list(self, skip: int = 0, limit: int = 50):
        """Return a page of rows."""
        return self.db.query(self.model).offset(skip).limit(limit).all()

    def create(self, obj_in: dict):
        """Insert a new row from a dict of column values."""
        obj = self.model(**obj_in)
        self.db.add(obj)
        self.db.commit()
        self.db.refresh(obj)
        return obj

    def update(self, db_obj, obj_in: dict):
        """Apply changes to an existing row and persist."""
        for field, value in obj_in.items():
            setattr(db_obj, field, value)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj

    def delete(self, db_obj):
        """Delete a row (used sparingly; medical records prefer soft-delete)."""
        self.db.delete(db_obj)
        self.db.commit()
