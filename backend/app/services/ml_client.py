"""HTTP client for the ML microservice.

Wraps calls to ML_SERVICE_URL so the rest of the backend stays decoupled from
the model service. Sends the X-ray image and returns the parsed prediction +
GradCAM heatmap reference (per design spec 9.2).
"""

import httpx

from app.core.config import settings


class MLClient:
    def __init__(self, base_url: str | None = None):
        self.base_url = base_url or settings.ML_SERVICE_URL

    async def predict(self, image_bytes: bytes, filename: str) -> dict:
        """POST the image to the ML service and return the prediction dict."""
        # TODO: httpx multipart POST to f"{self.base_url}/predict"; parse result
        ...

    async def get_heatmap(self, analysis_ref: str) -> bytes:
        """Fetch the GradCAM heatmap image generated for an analysis."""
        # TODO: httpx GET heatmap bytes
        ...
