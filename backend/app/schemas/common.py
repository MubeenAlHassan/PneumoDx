"""Shared schema building blocks (ORM base config + pagination wrapper)."""

from typing import Generic, TypeVar

from pydantic import BaseModel, ConfigDict

T = TypeVar("T")


class ORMModel(BaseModel):
    """Base schema that reads attributes off ORM objects."""

    model_config = ConfigDict(from_attributes=True)


class Page(BaseModel, Generic[T]):
    """Generic paginated list response."""

    items: list[T]
    total: int
    page: int
    page_size: int
