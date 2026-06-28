## 3. Analysis Models

This section presents the analysis models of the PneumoDx monorepo solution, which is composed of three coordinated modules:

- `frontend` (Next.js): role-based web client for hospital staff, doctors, radiologists, and hospital administrators.
- `backend` (FastAPI): API gateway and core business layer, including authentication, patient workflow, report lifecycle, and audit operations.
- `ml-service` (Python): AI inference and explainability service for chest X-ray prediction and Grad-CAM heatmap generation.

The analysis models in this chapter are aligned with the implemented backend architecture and the planned feature flow used by the frontend.

### 3.1 Use Case Diagram

Diagram file: `project-diagrams/03_01_use_case_diagram.drawio`

#### 3.1.1 Description

The use-case model identifies key actors and the system services they consume.

Primary actors:
- Hospital Admin
- Doctor
- Radiologist
- Staff/Reception

Primary system use-cases:
- Register hospital and create first admin account
- Authenticate user (login, refresh, logout)
- Register and manage patients
- Upload chest X-ray and run AI analysis
- Review AI findings and heatmap
- Create and update clinical report
- Doctor sign-off with PIN
- Admin co-sign and certify report
- Download final report PDF
- View audit logs and hospital statistics
- Flag scan for re-analysis

The use cases reflect a medically accountable workflow in which AI provides a decision-support layer while final responsibility remains with authorized medical personnel.

### 3.2 Class Diagram

#### 3.2.1 Description

The class model follows the layered architecture used in the backend and represents the major domain entities and their associations.

Core domain classes:
- `Hospital`
- `User`
- `Patient`
- `Scan`
- `AiAnalysis`
- `Report`
- `Signature`
- `AuditLog`

Key relationships:
- One `Hospital` has many `User` records and many `Patient` records.
- One `Patient` has many `Scan` records.
- One `Scan` has zero or one `AiAnalysis`.
- One `Scan` has zero or one `Report`.
- One `Report` can contain multiple `Signature` records (doctor + hospital certification).
- `AuditLog` stores append-only operational traces for accountability and compliance.

Supporting types:
- Enums for user roles, scan status, report status, AI labels, and audit actions.
- Shared mixins for UUID primary keys and timestamps.

#### 3.2.2 Diagram

Diagram file: `project-diagrams/03_02_class_diagram.drawio`

### 3.3 Sequence Diagram

Diagram file: `project-diagrams/03_03_sequence_diagram.drawio`

#### 3.3.1 Description

The sequence model describes the primary runtime interaction for pneumonia detection and report certification:

1. A user initiates actions from the `frontend` (Next.js).
2. The `backend` validates identity and role through JWT-based security.
3. Patient and scan metadata are persisted in PostgreSQL.
4. Backend forwards X-ray input to `ml-service`.
5. `ml-service` returns prediction, confidence details, and heatmap reference.
6. Backend stores AI analysis and exposes results to frontend.
7. Doctor reviews findings, updates report, and signs with PIN.
8. Hospital admin co-signs and certifies report.
9. Final report artifact is made available for download and verification.
10. Audit events are appended for traceability.

This sequence ensures controlled responsibility transfer and provides a formal clinical workflow over AI-generated output.

### 3.4 Entity Relationship Diagram

Diagram file: `project-diagrams/03_04_erd.drawio`

#### 3.4.1 Description

The ER model represents a PostgreSQL-backed relational design that supports:
- Multi-hospital tenancy
- Role-based user governance
- Patient-centric diagnostic workflow
- AI-result persistence
- Report signing and certification lifecycle
- Immutable audit trail

The schema is normalized around identifiers and foreign keys, with UUID primary keys and timestamp columns across entities.

#### 3.4.2 Diagram

Diagram file: `project-diagrams/03_04_erd.drawio`

#### 3.4.3 Database Table Definitions

Note: The provided heading template was adapted from a recruitment-domain structure to the medical diagnostic domain of PneumoDx.

##### 3.4.3.1 Users Table

Purpose: Stores authenticated actors (hospital admins, doctors, radiologists, staff) and their role/security profile.

Columns:
- `id` (UUID, PK)
- `hospital_id` (UUID, FK -> `hospitals.id`, not null)
- `full_name` (varchar(255), not null)
- `email` (varchar(255), unique, indexed, not null)
- `password_hash` (varchar(255), not null)
- `role` (enum: `HOSPITAL_ADMIN`, `DOCTOR`, `RADIOLOGIST`, `STAFF`, `SYSTEM`)
- `status` (enum: `ACTIVE`, `INACTIVE`, `SUSPENDED`)
- `license_no` (varchar(100), nullable)
- `specialty` (varchar(120), nullable)
- `sign_pin_hash` (varchar(255), nullable)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

##### 3.4.3.2 Hospitals Table (Adjusted from “Companies”)

Purpose: Stores tenant-level hospital/institution profile.

Columns:
- `id` (UUID, PK)
- `name` (varchar(255), not null)
- `type` (varchar(100), nullable)
- `registration_no` (varchar(100), unique, not null)
- `city` (varchar(120), nullable)
- `country` (varchar(120), nullable)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

##### 3.4.3.3 Patients Table (Adjusted from “Applicants”)

Purpose: Stores patient demographic and clinical intake details.

Columns:
- `id` (UUID, PK)
- `hospital_id` (UUID, FK -> `hospitals.id`, not null)
- `mrn` (varchar(50), unique, indexed, not null)
- `first_name` (varchar(120), not null)
- `last_name` (varchar(120), not null)
- `dob` (date, nullable)
- `gender` (enum: `MALE`, `FEMALE`, `OTHER`, nullable)
- `cnic` (varchar(40), nullable)
- `contact` (varchar(40), nullable)
- `referring_doctor_id` (UUID, FK -> `users.id`, nullable)
- `ward` (varchar(120), nullable)
- `chief_complaint` (text, nullable)
- `priority` (enum: `ROUTINE`, `URGENT`, `EMERGENCY`)
- `created_by` (UUID, FK -> `users.id`, nullable)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

##### 3.4.3.4 Scans Table (Adjusted from “Job Postings”)

Purpose: Stores uploaded X-ray records and scan-level metadata.

Columns:
- `id` (UUID, PK)
- `patient_id` (UUID, FK -> `patients.id`, not null)
- `uploaded_by` (UUID, FK -> `users.id`, nullable)
- `file_path` (varchar(512), not null)
- `scan_type` (enum: `PA`, `AP`, `LATERAL`)
- `scan_datetime` (timestamp with timezone, nullable)
- `equipment` (varchar(255), nullable)
- `radiologist_notes` (text, nullable)
- `status` (enum: `UPLOADED`, `PROCESSING`, `ANALYZED`, `FAILED`, `FLAGGED`)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

##### 3.4.3.5 Reports Table (Adjusted from “Applications”)

Purpose: Stores physician-authored report content and lifecycle state.

Columns:
- `id` (UUID, PK)
- `scan_id` (UUID, FK -> `scans.id`, unique, not null)
- `patient_id` (UUID, FK -> `patients.id`, not null)
- `doctor_id` (UUID, FK -> `users.id`, nullable)
- `report_no` (varchar(64), unique, indexed, not null)
- `status` (enum: `PENDING`, `AI_READY`, `IN_REVIEW`, `FLAGGED`, `DOCTOR_SIGNED`, `CERTIFIED`, `DELIVERED`)
- `clinical_findings` (text, nullable)
- `diagnosis_agreement` (enum: `CONFIRM`, `PARTIAL`, `DISAGREE`, nullable)
- `icd_code` (varchar(20), nullable)
- `recommendations` (text, nullable)
- `followup_instructions` (text, nullable)
- `admin_notes` (text, nullable)
- `pdf_path` (varchar(512), nullable)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

##### 3.4.3.6 Signatures Table (Adjusted from “Interviews”)

Purpose: Stores doctor sign-off and hospital co-sign events with content hash.

Columns:
- `id` (UUID, PK)
- `report_id` (UUID, FK -> `reports.id`, not null)
- `signer_id` (UUID, FK -> `users.id`, not null)
- `signature_type` (enum: `DOCTOR`, `HOSPITAL`)
- `signature_hash` (varchar(128), not null)
- `signed_at` (timestamp with timezone, nullable)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

##### 3.4.3.7 AI Analyses Table (Adjusted from “Feedback”)

Purpose: Persists AI inference output linked to a scan.

Columns:
- `id` (UUID, PK)
- `scan_id` (UUID, FK -> `scans.id`, unique, not null)
- `analysis_ref` (varchar(64), unique, not null)
- `model_version` (varchar(100), nullable)
- `label` (enum: `PNEUMONIA_DETECTED`, `SUSPECTED`, `NORMAL`)
- `confidence` (float, not null)
- `severity` (enum: `MILD`, `MODERATE`, `SEVERE`, nullable)
- `lung_zone` (varchar(80), nullable)
- `laterality` (varchar(40), nullable)
- `pattern` (varchar(80), nullable)
- `confidence_breakdown` (JSONB, nullable)
- `heatmap_path` (varchar(512), nullable)
- `icd_suggestion` (varchar(20), nullable)
- `processed_at` (timestamp with timezone, nullable)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

##### 3.4.3.8 Audit Logs Table (Additional PneumoDx Table)

Purpose: Captures append-only security and compliance events.

Columns:
- `id` (UUID, PK)
- `hospital_id` (UUID, FK -> `hospitals.id`, nullable)
- `user_id` (UUID, FK -> `users.id`, nullable)
- `user_role` (enum: `HOSPITAL_ADMIN`, `DOCTOR`, `RADIOLOGIST`, `STAFF`, `SYSTEM`, nullable)
- `action` (enum: `LOGIN`, `LOGOUT`, `PATIENT_REGISTERED`, `SCAN_UPLOADED`, `AI_COMPLETE`, `REPORT_SIGNED`, `REPORT_CERTIFIED`, `PDF_EXPORTED`, `FLAG_RAISED`, `RE_ANALYSIS_REQUESTED`)
- `resource_type` (varchar(40), nullable)
- `resource_id` (varchar(64), nullable)
- `ip_address` (varchar(64), nullable)
- `result` (enum: `SUCCESS`, `FAILURE`)
- `created_at` (timestamp with timezone)
- `updated_at` (timestamp with timezone)

