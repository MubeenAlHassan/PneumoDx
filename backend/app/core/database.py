"""Database setup for SQLAlchemy + PostgreSQL.

Defines the engine, session factory, declarative Base, and the get_db FastAPI
dependency that yields a request-scoped session and closes it afterwards.
"""

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from app.core.config import settings

# Engine bound to the PostgreSQL DATABASE_URL.
engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True)

# Session factory used to create per-request database sessions.
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)


class Base(DeclarativeBase):
    """Declarative base class that all ORM models inherit from."""

    pass


def get_db() -> Generator[Session, None, None]:
    """FastAPI dependency: yield a DB session and ensure it is closed."""

    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
