# Backend image for the PneumoDx FastAPI service.
# Build context is ./backend (see docker-compose.yml).

FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /code

# Install dependencies first for better layer caching.
COPY app/requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir -r /code/requirements.txt

# Copy the application package (so `app.main:app` is importable).
COPY app /code/app

EXPOSE 8000

# `app` is a package under /code; run the FastAPI entry point.
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
