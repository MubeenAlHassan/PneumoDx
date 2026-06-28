## 4. Design Models

This chapter defines the architectural and deployment design of **PneumoDx**, a monorepo-based healthcare solution for AI-assisted pneumonia detection from chest X-ray images. The design aligns with the current repository structure:

- `frontend` (Next.js): presentation layer and user workflow orchestration.
- `backend` (FastAPI): API gateway, business services, security, and persistence orchestration.
- `ml-service` (Python/PyTorch): inference and explainability (Grad-CAM) processing.

The design emphasizes separation of concerns, role-based access control, auditability, and extensibility for future production hardening.

### 4.1 Component Diagram

**Diagram file:** `project-diagrams/04_01_component_diagram.drawio`

The component diagram models logical modules and their interactions.

#### 4.1.1 Component Overview

| Component | Layer | Responsibility |
|---|---|---|
| Next.js Frontend | Presentation | UI rendering, page routing, form handling, client-side interactions |
| FastAPI API Layer | Application | REST route exposure and request/response validation |
| Service Layer | Domain Logic | Workflow control for auth, patients, scans, reports, signatures, audit |
| Repository Layer | Data Access | ORM-backed PostgreSQL CRUD and query execution |
| PostgreSQL Database | Persistence | Structured storage for users, hospitals, patients, scans, reports, etc. |
| ML Service | AI Processing | Model inference, confidence scoring, Grad-CAM heatmap generation |
| File Storage Module | Infrastructure | Stores X-ray files, heatmaps, and generated report artifacts |

#### 4.1.2 Backend Internal Design

The backend is structured in a layered architecture that supports maintainability and clear ownership of logic:

1. **Routes (`api/v1/routes`)**  
   Accept HTTP requests and delegate processing to services.
2. **Services (`services`)**  
   Implement business workflows (e.g., scan upload -> AI call -> report lifecycle update).
3. **Repositories (`repositories`)**  
   Encapsulate persistence operations.
4. **Models/Schemas (`models`, `schemas`)**  
   Define relational entities and API contract types.
5. **Core (`core`)**  
   Provides configuration, DB setup, enums, dependencies, and security primitives.
6. **Middleware (`middleware`)**  
   Handles cross-cutting concerns such as exception handling and auditing hooks.

This layout enforces a flow:

**Request -> Route -> Service -> Repository -> Database -> Response**

#### 4.1.3 Cross-Component Interaction Pattern

- The frontend consumes backend REST endpoints under `/api/v1`.
- The backend delegates AI inference calls to the ML service.
- The backend persists all operational entities in PostgreSQL.
- Generated artifacts (upload files, heatmaps, PDFs) are handled by the storage utility layer.
- Admin and audit workflows remain within backend domain boundaries for security and consistency.

### 4.2 Deployment Diagram

**Diagram file:** `project-diagrams/04_02_deployment_diagram.drawio`

The deployment diagram represents runtime topology for local/containerized deployment and supports future cloud hosting extension.

#### 4.2.1 Deployment Nodes

| Node | Hosted Service | Port | Description |
|---|---|---|---|
| Client Node | Browser | N/A | End-user access for all roles |
| Frontend Container | Next.js app | 3000 | User-facing web UI |
| Backend Container | FastAPI app | 8000 | API and workflow engine |
| ML Container | Python inference service | 5000 | AI prediction and Grad-CAM |
| DB Container | PostgreSQL 16 | 5432 | Persistent relational storage |

#### 4.2.2 Communication Channels

- Browser -> Frontend: HTTPS/HTTP request-response.
- Frontend -> Backend: REST API over HTTP (`/api/v1/*`).
- Backend -> ML Service: internal service call for model prediction.
- Backend -> PostgreSQL: SQLAlchemy ORM connection for transactional operations.

#### 4.2.3 Operational Considerations

- Environment configuration is centralized through backend settings and container environment variables.
- The architecture supports horizontal scaling of stateless layers (`frontend`, `backend`, `ml-service`) with an externalized managed PostgreSQL in production.
- Security controls (JWT, RBAC) are enforced at backend boundaries.
- Audit logging supports governance and traceability in medical workflows.

---

## 5. Screenshots

This section documents key user interfaces and workflow screens.  
The original heading template has been adapted from recruitment-domain pages to PneumoDx’s clinical platform pages.

> **Recommendation for final report:**  
> For each screenshot, include:
> - Figure number and caption
> - Purpose of the screen
> - Key interaction and outcome

### 5.1 Registration and Login

Include screenshots of:

1. Hospital registration page (`/register-hospital`)
2. Professional signup page (`/signup`)
3. Login page (`/login`)

What to highlight:
- Role-oriented onboarding
- Secure credential input
- Terms/compliance UX cues
- Path to hospital initialization

### 5.2 Password Recovery and Account Settings

> Adapted from “Forget, Update Password and Delete Account”.

Current project state:
- “Forgot password” is currently present as a UI entry point in login but backend recovery flow is not fully implemented yet.
- Account and security preference management is represented in `/dashboard/settings`.

Include screenshots of:

1. Login page “Forgot password?” entry point
2. Settings/Profile page (`/dashboard/settings`)
3. Security & alerts controls from settings

Mention in report:
- Recovery and account deletion APIs are planned as future enhancements in the auth service roadmap.

### 5.3 Admin Pages

Include screenshots of:

1. Hospital Admin Dashboard (`/dashboard/admin`)
2. Doctor management page (`/dashboard/admin/doctors`)
3. Co-sign workflow page (`/dashboard/admin/cosign`)
4. Audit log page (`/dashboard/admin/audit`)

What to highlight:
- Doctor registration and governance
- Certification queue
- Detection statistics
- Audit trace visibility

### 5.4 Landing and Public Information Page

> Adapted from “Landing and Contact Page”.

Current project state:
- Dedicated contact page is not separated yet; public information is provided through the landing page sections.

Include screenshot of:

1. Main landing page (`/`)

Highlight:
- Value proposition
- Workflow and feature presentation
- Trust/compliance signals

### 5.5 Hospital Admin View

> Adapted from “Company View”.

Include screens demonstrating hospital-level controls:
- Admin dashboard KPIs
- Doctor management
- Co-sign and report certification queue
- Audit exports and oversight

### 5.6 Doctor and Clinical Staff View

> Adapted from “Applicant View”.

Include screenshots of:

1. Patient list and filters (`/dashboard/patients`)
2. New patient registration (`/dashboard/create`)
3. X-ray upload and metadata (`/dashboard/upload`)
4. AI analysis page (`/dashboard/analysis`)
5. Diagnostic history (`/dashboard/records`)
6. Report authoring/sign workflow (`/dashboard/report`)

Highlight:
- End-to-end diagnostic cycle
- AI-to-human review handoff
- Clinical accountability via sign-off

---

## 6. Test Cases

The following test cases validate major workflows across frontend, backend, and ML-service boundaries.  
Each case should be executed with preconditions, test data, expected output, and pass/fail evidence.

### 6.1 Test Case 1: User Authentication (Login)

**Objective:** Verify valid login returns authenticated session/tokens and navigates user to dashboard.  
**Preconditions:** Registered user exists.  
**Steps:**
1. Open login page.
2. Enter valid email and password.
3. Submit login form.
**Expected Result:**
- Authentication succeeds.
- Access token/refresh token lifecycle is initiated.
- User lands on dashboard according to role.
**Status in current implementation:** Route scaffold exists in backend (`POST /api/v1/auth/login`), frontend flow exists.

### 6.2 Test Case 2: Hospital Registration

**Objective:** Verify hospital onboarding creates tenant + initial admin account.  
**Preconditions:** Unique hospital registration number and admin email.
**Steps:**
1. Open hospital registration page.
2. Fill hospital and admin details.
3. Submit form.
**Expected Result:**
- Hospital record created.
- First user assigned `HOSPITAL_ADMIN`.
- New admin can access admin dashboard.
**Status in current implementation:** Backend route scaffold exists (`POST /api/v1/auth/register-hospital`).

### 6.3 Test Case 3: Patient Registration

**Objective:** Validate patient creation with MRN and clinical metadata.  
**Preconditions:** Authenticated clinical user.
**Steps:**
1. Open patient registration page.
2. Enter demographics and clinical details.
3. Submit form.
**Expected Result:**
- Patient record stored in DB.
- Unique MRN generated.
- Patient visible in patient list.
**Status in current implementation:** Backend routes exist (`POST /api/v1/patients`, `GET /api/v1/patients`), frontend form exists.

### 6.4 Test Case 4: X-Ray Upload and AI Analysis

**Objective:** Validate upload pipeline and AI inference integration.  
**Preconditions:** Existing patient and supported image file.
**Steps:**
1. Open upload page.
2. Upload X-ray with metadata.
3. Trigger AI analysis.
**Expected Result:**
- Scan record stored.
- ML service invoked.
- Prediction and heatmap returned.
- Scan status transitions to analyzed state.
**Status in current implementation:** Backend route scaffolds exist (`POST /api/v1/scans`, `GET /api/v1/scans/{id}`, `GET /api/v1/scans/{id}/heatmap`); ML service inference module exists.

### 6.5 Test Case 5: Report Draft and Doctor Sign-Off

**Objective:** Validate doctor review workflow and secure signing.  
**Preconditions:** Completed AI analysis for scan.
**Steps:**
1. Create draft report.
2. Enter findings, diagnosis, recommendations.
3. Sign with doctor PIN.
**Expected Result:**
- Report saved/updated.
- Signature record created with hash.
- Status transitions to `DOCTOR_SIGNED`.
**Status in current implementation:** Route scaffolds exist (`POST/PATCH /api/v1/reports`, `POST /api/v1/reports/{id}/sign`).

### 6.6 Test Case 6: Hospital Admin Co-Sign and Certification

**Objective:** Validate second-layer approval and certification controls.  
**Preconditions:** Report already doctor-signed.
**Steps:**
1. Admin opens co-sign queue.
2. Reviews report content.
3. Approves and certifies report.
**Expected Result:**
- Hospital signature added.
- Report status transitions to `CERTIFIED`.
- Final report artifact becomes downloadable.
**Status in current implementation:** Route scaffold exists (`POST /api/v1/reports/{id}/certify`), admin UI exists.

### 6.7 Test Case 7: Audit Logging and Reporting

**Objective:** Ensure key actions are traceable and exportable.  
**Preconditions:** Perform sequence of major actions (login, patient add, scan upload, sign, certify).
**Steps:**
1. Execute workflow actions.
2. Open admin audit page / call audit endpoints.
3. Export audit log.
**Expected Result:**
- Audit entries exist for major events.
- Entries include actor role, action, resource, and result.
- Export operation succeeds.
**Status in current implementation:** Route scaffolds exist (`GET /api/v1/hospital/audit-log`, `GET /api/v1/hospital/audit-log/export`).

---

## 7. Conclusion

PneumoDx demonstrates a clinically aligned AI-assisted diagnostic platform built with a modular monorepo architecture. The solution integrates a modern frontend, a layered backend API, and a dedicated ML inference service to support end-to-end pneumonia analysis workflows.

From an engineering perspective, the project establishes:

- A clean separation between presentation, domain logic, data access, and AI processing.
- A role-aware clinical workflow (admin, doctor, radiologist, staff) with explicit accountability checkpoints.
- A report lifecycle that supports draft, review, sign-off, certification, and auditable trace.
- A data model designed for healthcare governance and future compliance hardening.

For final production readiness, next improvements should focus on:

1. Completing unimplemented backend service logic and auth recovery endpoints.
2. Strengthening integration and automated testing.
3. Hardening deployment security and operational observability.
4. Extending interoperability and report verification tooling.

Overall, the project provides a robust and extensible foundation for real-world clinical decision-support systems in resource-constrained and high-throughput medical environments.

---

## Appendices

### Appendix A: Database Schema

This appendix summarizes key database tables and domain adaptation from the original template.

#### A.1 Table: `users`

Stores all authenticated platform users and role metadata.

Primary fields:
- `id`, `hospital_id`, `full_name`, `email`, `password_hash`
- `role`, `status`, `license_no`, `specialty`, `sign_pin_hash`
- `created_at`, `updated_at`

#### A.2 Table: `hospitals` (adapted from `companies`)

Stores tenant-level institutional records.

Primary fields:
- `id`, `name`, `type`, `registration_no`, `city`, `country`
- `created_at`, `updated_at`

#### A.3 Table: `patients` (adapted from `applicants`)

Stores patient identity, demographics, and intake details.

Primary fields:
- `id`, `hospital_id`, `mrn`, `first_name`, `last_name`
- `dob`, `gender`, `cnic`, `contact`
- `referring_doctor_id`, `ward`, `chief_complaint`, `priority`, `created_by`
- `created_at`, `updated_at`

#### A.4 Table: `scans` (adapted from `job_postings`)

Stores uploaded X-ray cases and processing state.

Primary fields:
- `id`, `patient_id`, `uploaded_by`, `file_path`
- `scan_type`, `scan_datetime`, `equipment`, `radiologist_notes`, `status`
- `created_at`, `updated_at`

#### A.5 Table: `reports` (adapted from `applications`)

Stores clinician-authored report content and lifecycle states.

Primary fields:
- `id`, `scan_id`, `patient_id`, `doctor_id`, `report_no`, `status`
- `clinical_findings`, `diagnosis_agreement`, `icd_code`, `recommendations`, `followup_instructions`
- `admin_notes`, `pdf_path`, `created_at`, `updated_at`

#### A.6 Table: `signatures` (adapted from `interviews`)

Stores digital signing events for doctor and hospital co-sign.

Primary fields:
- `id`, `report_id`, `signer_id`, `signature_type`, `signature_hash`, `signed_at`
- `created_at`, `updated_at`

#### A.7 Table: `ai_analyses` (adapted from `feedback`)

Stores ML-service output for a scan.

Primary fields:
- `id`, `scan_id`, `analysis_ref`, `model_version`
- `label`, `confidence`, `severity`, `lung_zone`, `laterality`, `pattern`
- `confidence_breakdown`, `heatmap_path`, `icd_suggestion`, `processed_at`
- `created_at`, `updated_at`

#### A.8 Entity Relationships Summary

- `hospitals` 1..* `users`
- `hospitals` 1..* `patients`
- `patients` 1..* `scans`
- `scans` 1..1 `ai_analyses`
- `scans` 1..1 `reports`
- `reports` 1..* `signatures`
- audit operations are tracked in `audit_logs`

### Appendix B: Glossary of Terms

| Term | Definition |
|---|---|
| AI Analysis | Automated inference process producing pneumonia prediction and metadata |
| Grad-CAM | Visual explanation heatmap highlighting image regions influencing prediction |
| MRN | Medical Record Number used to uniquely identify a patient case |
| RBAC | Role-Based Access Control for endpoint authorization |
| Doctor Sign-Off | Clinician confirmation step performed using a PIN-based signature flow |
| Co-Sign Certification | Hospital administrator approval that finalizes report governance state |
| Certified Report | Finalized report artifact after doctor + hospital approvals |
| Audit Trail | Append-only log of significant actions for compliance and traceability |
| Tenant | Isolated hospital-level data context within a multi-hospital platform |

### Appendix C: User Roles and Permissions Matrix

#### C.1 Role Descriptions

| Role | Responsibilities |
|---|---|
| Hospital Admin | Hospital onboarding, doctor management, report co-sign, audit oversight, stats review |
| Doctor | Clinical review, report authoring, diagnostic sign-off |
| Radiologist | Image upload, scan annotation, pre-review collaboration |
| Staff/Reception | Patient intake, basic case workflow support |

| Capability | Hospital Admin | Doctor | Radiologist | Staff |
|---|:---:|:---:|:---:|:---:|
| Register patient | ✅ | ✅ | ❌ | ✅ |
| Upload X-ray | ✅ | ✅ | ✅ | ❌ |
| View AI analysis | ✅ | ✅ | ✅ | ❌ |
| Create/update report | ❌ | ✅ | ✅ (if enabled) | ❌ |
| Doctor sign report | ❌ | ✅ | ❌ | ❌ |
| Co-sign/certify report | ✅ | ❌ | ❌ | ❌ |
| Manage doctors | ✅ | ❌ | ❌ | ❌ |
| View audit logs | ✅ | ❌ | ❌ | ❌ |

### Appendix D: REST API Endpoint Reference

Base path: `/api/v1`

#### D.1 Standard Response Format

For consistency, API responses should follow a predictable envelope:

```json
{
  "success": true,
  "message": "Optional human-readable summary",
  "data": {},
  "meta": {
    "page": 1,
    "page_size": 50,
    "total": 120
  }
}
```

Error envelope:

```json
{
  "success": false,
  "message": "Validation failed",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": []
  }
}
```

#### D.2 HTTP Status Code Reference

| Code | Meaning | Typical usage in PneumoDx |
|---|---|---|
| 200 | OK | Successful fetch/update operations |
| 201 | Created | Resource creation (patients, scans, reports, doctors) |
| 400 | Bad Request | Invalid payload, malformed request, unsupported file |
| 401 | Unauthorized | Missing/invalid authentication token |
| 403 | Forbidden | Role does not have permission |
| 404 | Not Found | Resource id does not exist |
| 409 | Conflict | Duplicate entity (e.g., registration conflict) |
| 422 | Unprocessable Entity | Validation errors from schema constraints |
| 500 | Internal Server Error | Unhandled server-side failures |
| 503 | Service Unavailable | ML service or dependency unavailable |

#### D.3 Endpoint Inventory (Current Backend Design)

**Auth**
- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/refresh`
- `POST /auth/register-hospital`

**Patients**
- `GET /patients`
- `POST /patients`
- `GET /patients/{patient_id}`
- `PATCH /patients/{patient_id}`

**Scans & AI**
- `POST /scans`
- `GET /scans/{scan_id}`
- `GET /scans/{scan_id}/heatmap`
- `POST /scans/{scan_id}/flag`

**Reports**
- `POST /reports`
- `GET /reports/{report_id}`
- `PATCH /reports/{report_id}`
- `POST /reports/{report_id}/sign`
- `POST /reports/{report_id}/certify`
- `GET /reports/{report_id}/pdf`
- `GET /reports/{report_no}/verify`

**Hospital Admin**
- `GET /hospital/doctors`
- `POST /hospital/doctors`
- `GET /hospital/audit-log`
- `GET /hospital/audit-log/export`
- `GET /hospital/stats`

