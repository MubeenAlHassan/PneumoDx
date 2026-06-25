"""Human-readable identifier generators.

Produces MRNs, scan analysis references, and report numbers in the formats used
across the UI (e.g. MRN-20240612, AI-2024-06-14-0821, CMC-2024-0612-001).
"""


def generate_mrn() -> str:
    """Generate a unique medical record number (MRN-YYYYMMDD + sequence)."""
    ...


def generate_analysis_ref() -> str:
    """Generate an AI analysis reference (AI-YYYY-MM-DD-NNNN)."""
    ...


def generate_report_no(hospital_code: str) -> str:
    """Generate a report number scoped to a hospital (CODE-YYYY-MMDD-NNN)."""
    ...
