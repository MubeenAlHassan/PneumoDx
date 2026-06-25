"""Certified PDF report generation.

Renders the final, sealed radiology report (patient info, AI result, physician
report, signatures/seal) to a tamper-evident PDF once a report is certified.
"""


class PDFService:
    def generate_report_pdf(self, report) -> str:
        """Render the certified report to a PDF and return its stored path."""
        # TODO: build PDF (e.g. WeasyPrint/ReportLab) and persist to storage
        ...
