"""Application configuration.

Loads environment variables (DATABASE_URL, ML_SERVICE_URL, JWT secrets, file
storage paths, CORS origins) into a single typed Settings object that the rest
of the app imports. Values come from the environment / .env file.
"""

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Central settings object; populated from environment variables."""

    # App metadata
    PROJECT_NAME: str = "PneumoDx API"
    API_V1_PREFIX: str = "/api/v1"

    # Database (PostgreSQL) connection string
    DATABASE_URL: str = "postgresql://postgres:password@db:5432/appdb"

    # External ML microservice base URL (pneumonia detection + GradCAM)
    ML_SERVICE_URL: str = "http://ml-services:5000"

    # JWT / auth settings
    JWT_SECRET_KEY: str = "change-me"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 8 * 60  # 8-hour access token
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30  # 30-day sliding refresh window

    # Local/object storage location for uploaded X-rays, heatmaps, and PDFs
    STORAGE_DIR: str = "./storage"

    # Allowed CORS origins (the Next.js frontend)
    CORS_ORIGINS: list[str] = ["http://localhost:3000"]

    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True, extra="ignore")


@lru_cache
def get_settings() -> Settings:
    """Return a cached Settings instance so the env is parsed only once."""

    return Settings()


settings = get_settings()
