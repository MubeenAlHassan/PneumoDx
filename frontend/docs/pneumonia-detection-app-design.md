# PneumoScan — Pneumonia Detection Application
### Design Specification Document · v1.0

> AI-powered chest X-ray analysis with doctor sign-off, hospital report management, and structured clinical workflow.

---

## Table of Contents

- [1. Overview](#1-overview)
- [2. Design Principles](#2-design-principles)
- [3. Design System](#3-design-system)
- [4. User Roles](#4-user-roles)
- [5. Application Architecture](#5-application-architecture)
- [6. Screen Designs](#6-screen-designs)
  - [6.1 Authentication](#61-authentication)
  - [6.2 Dashboard](#62-dashboard)
  - [6.3 Patient Management](#63-patient-management)
  - [6.4 X-Ray Upload & AI Analysis](#64-x-ray-upload--ai-analysis)
  - [6.5 AI Analysis Report View](#65-ai-analysis-report-view)
  - [6.6 Doctor Review & Sign-Off](#66-doctor-review--sign-off)
  - [6.7 Final Report](#67-final-report)
  - [6.8 Hospital Admin Panel](#68-hospital-admin-panel)
- [7. User Flows](#7-user-flows)
- [8. Component Library](#8-component-library)
- [9. API Contracts](#9-api-contracts)
- [10. Security & Compliance](#10-security--compliance)

---

## 1. Overview

**PneumoScan** is a clinical-grade web application that enables hospitals and licensed doctors to detect pneumonia from chest X-rays using AI, generate structured diagnostic reports, and apply legally binding digital signatures. It bridges AI automation with physician accountability.

### Core Value Proposition

| User | Problem Solved |
|---|---|
| **Doctor** | Automates first-pass analysis; structures reporting workflow; enables remote sign-off |
| **Hospital** | Centralises X-ray records; ensures audit trails; standardises reporting across departments |
| **Patient** | Faster turnaround on results; certified reports with physician authority |

### Key Capabilities

- Upload chest X-rays (DICOM / JPEG / PNG)
- AI analysis with confidence scoring and heatmap overlay
- Structured report builder with physician notes
- Dual-tier sign-off (Doctor + Hospital Administrator)
- Tamper-evident PDF report generation
- Role-based access, audit logs, and HIPAA-aligned data handling

---

## 2. Design Principles

### 2.1 Premium Clarity — Calm, Human, Trustworthy

The interface should feel like a premium medical instrument: calm, spacious, and reassuring. Clinical precision is paired with warmth — clean white surfaces, gentle depth, soft rounded corners, and smooth motion lower cognitive load and patient anxiety. Generous white space is the default. Decoration is welcome when it builds trust, adds depth, or guides the eye (subtle blue gradients, soft shadows, light glows) — but never visual noise.

### 2.2 Trust Signals at Every Step

The interface must communicate that this is a certified, signed medical tool. Signatures, timestamps, physician credentials, and hospital seals are first-class UI elements — not afterthoughts.

### 2.3 Progressive Disclosure

AI results surface first in summary; full heatmap and model metadata are one click away. Report forms start collapsed; fields expand on interaction. Dense medical data is layered, not dumped.

### 2.4 Zero-Ambiguity Actions

Every CTA is a verb that completes a sentence: **Submit for Review**, **Sign Report**, **Approve & Certify**, **Flag for Re-analysis**. Nothing says "Submit" or "OK."

### 2.5 Error States are Clinical

A failed AI analysis does not show a generic error icon. It shows what failed, what the doctor should do next, and what the patient status becomes in the interim. Failure states are actionable.

---

## 3. Design System

### 3.1 Color Palette

```
╔══════════════════════════════════════════════════════════════════╗
║  PALETTE — PneumoScan · Clear Blue & White                       ║
╠══════════════════════════════════════════════════════════════════╣
║  CORE COLORS                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║  Canvas White      #FFFFFF   ████  Cards, panels, sidebar        ║
║  Mist              #F8FAFC   ████  Page background, inset fields  ║
║  Cloud Border      #E2E8F0   ████  Card borders, dividers        ║
║  Primary Blue      #2563EB   ████  Primary buttons, links        ║
║  Blue Hover        #1D4ED8   ████  Hover / pressed primary       ║
║  Sky Tint          #EFF6FF   ████  Active nav, soft fills, glows  ║
║  Ink               #0F172A   ████  Primary text                  ║
╠══════════════════════════════════════════════════════════════════╣
║  SEMANTIC COLORS                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  Emerald           #10B981   ████  Normal / Clear / Approved     ║
║  Amber             #F59E0B   ████  Suspected / Pending Review    ║
║  Red               #EF4444   ████  Pneumonia Detected / Urgent   ║
║  Slate Muted       #64748B   ████  Secondary text, metadata      ║
╚══════════════════════════════════════════════════════════════════╝
```

**Usage Rules**

- `#2563EB` (Primary Blue) is the single interactive accent: buttons, links, selected nav, focus. Hover deepens to `#1D4ED8`. Use a soft `#EFF6FF` tint for selected/active backgrounds.
- `#EF4444` (Red) is reserved for positive pneumonia findings and urgent flags — not for minor validation.
- The app rests on white cards (`#FFFFFF`) floating on a `#F8FAFC` mist canvas, separated by hairline `#E2E8F0` borders and soft, blue-tinted shadows. This creates calm depth without harsh contrast.
- Semantic badges use a light tint of their color (e.g. `#EFF6FF` for AI Ready) with a slightly stronger text/border — soft pastel chips, never heavy blocks.
- Premium accents (hero panels, the auth side panel) may use a smooth blue gradient `#2563EB → #1D4ED8` with white text and a faint radial glow.

### 3.2 Typography

```
Display / Report Titles    →  IBM Plex Serif, Bold, 28–36px
                              (gives weight and clinical authority to report headings)

Section Headers            →  Inter, SemiBold, 18–22px
                              (clean, readable, modern system font)

Body / Physician Notes     →  Inter, Regular, 14–16px, line-height 1.6

Data / IDs / Timestamps    →  JetBrains Mono, Regular, 12–13px
                              (monospace keeps patient IDs and timestamps scannable)

Labels / Tags              →  Inter, Medium, 11px, letter-spacing 0.05em, uppercase
```

**Type Scale**

| Token | Size | Weight | Use Case |
|---|---|---|---|
| `display-xl` | 36px | Bold (700) | Report title on exported PDF |
| `heading-lg` | 24px | SemiBold (600) | Page section title |
| `heading-md` | 18px | SemiBold (600) | Card headers |
| `body-lg` | 16px | Regular (400) | Physician notes, form content |
| `body-sm` | 14px | Regular (400) | Supporting copy |
| `label` | 11px | Medium (500) | Status tags, form labels |
| `mono` | 13px | Regular (400) | Patient IDs, timestamps |

### 3.3 Spacing & Grid

```
Base unit: 4px

xs  = 4px
sm  = 8px
md  = 16px
lg  = 24px
xl  = 32px
2xl = 48px
3xl = 64px

Layout grid: 12-column, 24px gutters, max-width 1280px
Content areas: Left sidebar (240px) + Main content (fluid)
```

### 3.4 Elevation & Shadow

Soft, blue-tinted shadows create premium depth — never harsh black drop shadows.

```
Level 0 (flat)    →  No shadow. Inline fields, table rows.
Level 1 (card)    →  0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.06)
Level 2 (raised)  →  0 8px 24px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.05)
Level 3 (modal)   →  0 24px 60px rgba(15,23,42,0.16) + backdrop blur 8px
Focus glow        →  0 0 0 4px rgba(37,99,235,0.15)
```

### 3.5 Border Radius

Rounded, smooth geometry throughout for a soft, human feel.

```
sm   = 8px    → Input fields, table cells, small badges
md   = 12px   → Buttons, secondary cards, dropdowns
lg   = 16px   → Cards, modals, panels
xl   = 24px   → Hero panels, feature cards, X-ray viewer
full = 9999px → Status pills, avatars, nav bar
```

---

## 4. User Roles

### 4.1 Role Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      PneumoScan Users                           │
├─────────────────┬───────────────────────────────────────────────┤
│  HOSPITAL ADMIN │  DOCTOR                                        │
│                 │                                                │
│  • Manages      │  • Reviews AI analysis                         │
│    hospital     │  • Adds clinical notes                         │
│    profile &    │  • Signs reports digitally                     │
│    branding     │  • Requests re-analysis                        │
│  • Registers    │  • Views patient history                       │
│    doctors      │                                                │
│  • Approves &   │  RADIOLOGIST (Optional Role)                   │
│    co-signs     │  • Uploads X-rays                              │
│    reports      │  • Annotates scans                             │
│  • Views audit  │  • Submits to assigned doctor                  │
│    logs         │                                                │
│  • Exports data │  RECEPTIONIST / STAFF                          │
│                 │  • Registers patients                          │
│                 │  • Assigns scans to doctors                    │
│                 │  • Prints / shares final reports               │
└─────────────────┴───────────────────────────────────────────────┘
```

### 4.2 Permission Matrix

| Feature | Hospital Admin | Doctor | Radiologist | Staff |
|---|:---:|:---:|:---:|:---:|
| Register patients | ✅ | ✅ | ❌ | ✅ |
| Upload X-rays | ✅ | ✅ | ✅ | ❌ |
| View AI analysis | ✅ | ✅ | ✅ | ❌ |
| Add clinical notes | ❌ | ✅ | ✅ | ❌ |
| Sign report (Doctor) | ❌ | ✅ | ❌ | ❌ |
| Co-sign & certify (Hospital) | ✅ | ❌ | ❌ | ❌ |
| Export final PDF | ✅ | ✅ | ❌ | ✅ |
| Register doctors | ✅ | ❌ | ❌ | ❌ |
| View audit logs | ✅ | ❌ | ❌ | ❌ |
| Manage hospital profile | ✅ | ❌ | ❌ | ❌ |

---

## 5. Application Architecture

### 5.1 High-Level System Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         PneumoScan Platform                          │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│   ┌─────────────┐    ┌──────────────┐    ┌────────────────────────┐  │
│   │  Web Client  │    │  Mobile App  │    │  Report PDF Viewer     │  │
│   │  (React)     │    │  (React      │    │  (Signed, read-only)   │  │
│   └──────┬───────┘    │  Native)     │    └────────────────────────┘  │
│          │            └──────┬───────┘                                │
│          └──────────────────┤                                         │
│                             ▼                                         │
│   ┌─────────────────────────────────────────────┐                    │
│   │              API Gateway (REST / JWT)         │                    │
│   └──────┬───────────────┬──────────────┬────────┘                   │
│          │               │              │                             │
│          ▼               ▼              ▼                             │
│   ┌────────────┐  ┌──────────────┐  ┌──────────────────────────────┐ │
│   │  Auth      │  │  Report &    │  │  AI Analysis Service          │ │
│   │  Service   │  │  Patient     │  │                              │ │
│   │            │  │  Service     │  │  ┌──────────────────────┐   │ │
│   │  JWT Auth  │  │              │  │  │  CNN Model           │   │ │
│   │  Role RBAC │  │  CRUD ops    │  │  │  (ResNet-50 fine-    │   │ │
│   │  2FA       │  │  PDF builder │  │  │   tuned on CheXpert) │   │ │
│   └────────────┘  │  Signatures  │  │  └──────────────────────┘   │ │
│                   └──────────────┘  │  ┌──────────────────────┐   │ │
│                                     │  │  GradCAM Heatmap     │   │ │
│   ┌──────────────┐  ┌─────────────┐ │  │  Generator           │   │ │
│   │  PostgreSQL  │  │  File Store  │ │  └──────────────────────┘   │ │
│   │  (Patients,  │  │  (X-rays,   │ │  ┌──────────────────────┐   │ │
│   │   Reports,   │  │   PDFs,     │ └──│  Confidence Score    │   │ │
│   │   Audit Log) │  │   Signatures)│    │  + Severity Stage    │   │ │
│   └──────────────┘  └─────────────┘    └──────────────────────┘   │ │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

### 5.2 Report Lifecycle State Machine

```
                  Patient Registered
                         │
                         ▼
                  ┌─────────────┐
                  │   PENDING   │  X-ray uploaded, awaiting AI
                  └──────┬──────┘
                         │  AI analysis complete
                         ▼
                  ┌─────────────┐
                  │  AI READY   │  Results ready, doctor not yet assigned
                  └──────┬──────┘
                         │  Doctor assigned & opens case
                         ▼
                  ┌─────────────┐
                  │ IN REVIEW   │  Doctor reviewing AI results & writing notes
                  └──────┬──────┘
                    ┌────┴────┐
                    │         │
                    ▼         ▼
             ┌──────────┐  ┌──────────────┐
             │ FLAGGED  │  │DOCTOR SIGNED │  Doctor applies digital signature
             │(re-upload│  └──────┬───────┘
             │ needed)  │         │ Hospital Admin co-signs
             └──────────┘         ▼
                           ┌─────────────┐
                           │  CERTIFIED  │  Report sealed, PDF generated
                           └──────┬──────┘
                                  │
                                  ▼
                           ┌─────────────┐
                           │  DELIVERED  │  Report shared with patient/referral
                           └─────────────┘
```

---

## 6. Screen Designs

### 6.1 Authentication

#### Login Screen

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                        ┌───────────────┐                         │
│                        │  🫁 PneumoScan │                        │
│                        └───────────────┘                         │
│             AI-Powered Pneumonia Detection Platform               │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                                                              │ │
│  │   Sign in to your account                                   │ │
│  │   ────────────────────────                                   │ │
│  │                                                              │ │
│  │   Email / Medical ID                                         │ │
│  │   ┌──────────────────────────────────────────────────────┐  │ │
│  │   │  dr.ahmed@citymed.pk                                  │  │ │
│  │   └──────────────────────────────────────────────────────┘  │ │
│  │                                                              │ │
│  │   Password                                                   │ │
│  │   ┌──────────────────────────────────────────────────────┐  │ │
│  │   │  ●●●●●●●●●●●●                              [Show]   │  │ │
│  │   └──────────────────────────────────────────────────────┘  │ │
│  │                                                              │ │
│  │   ┌──────────────────────────────────────────────────────┐  │ │
│  │   │           Sign In to PneumoScan                       │  │ │ ← Vivid Violet #7C3AED, full-width
│  │   └──────────────────────────────────────────────────────┘  │ │
│  │                                                              │ │
│  │   Forgot password?                    Register hospital →    │ │
│  │                                                              │ │
│  │   ──────────────── OR ──────────────────                    │ │
│  │                                                              │ │
│  │   [🔐 Sign in with Hospital SSO]                             │ │
│  │                                                              │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│   🔒 HIPAA-compliant · TLS 1.3 encrypted · Audit-logged          │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Design Notes**

- Full-bleed left panel (desktop): a smooth Primary Blue gradient `#2563EB → #1D4ED8` with a faint lung X-ray at ~6% opacity and a soft white radial glow in the upper corner. White wordmark and supporting copy sit on top.
- Right panel: white `#FFFFFF` card on the `#F8FAFC` mist canvas, centered vertically, hairline border `1px solid #E2E8F0`, Level 1 shadow, `border-radius: 16px`.
- Input fields: background `#F8FAFC`, border `#E2E8F0`, focus border `#2563EB` with a 4px blue glow `(box-shadow: 0 0 0 4px rgba(37,99,235,0.15))`, radius 8px.
- Input text: Ink `#0F172A`, placeholder: Slate Muted `#64748B`.
- Primary button: Primary Blue `#2563EB` bg, white text, hover deepens to `#1D4ED8`, radius 12px.
- "Forgot password" and "Register hospital" links: Primary Blue `#2563EB`, underline on hover.
- SSO button: white bg, border `#E2E8F0`, text Ink, hover border lifts to `#2563EB`.
- Trust line at bottom: Slate Muted `#64748B` text, `border-top: 1px solid #E2E8F0`.
- Logo wordmark: IBM Plex Serif; lung icon tinted Primary Blue `#2563EB`.

#### Register Hospital Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  [ Blue gradient panel ]  │   Register your hospital              │
│   🫁 PneumoScan           │   ───────────────────────             │
│   Onboard your team       │                                       │
│   to certified AI         │   Hospital Name                       │
│   diagnostics.            │   ┌─────────────────────────────────┐ │
│                           │   │  City Medical Centre            │ │
│   ✓ Centralised records   │   └─────────────────────────────────┘ │
│   ✓ Audit-ready trails    │   Type            Registration No.    │
│   ✓ Doctor + admin roles  │   ┌──────────┐    ┌────────────────┐  │
│                           │   └──────────┘    └────────────────┘  │
│                           │   City             Country            │
│                           │   Admin Full Name  Admin Work Email   │
│                           │   Password         Confirm Password   │
│                           │   ☐ I agree to Terms & Data Policy     │
│                           │   ┌─────────────────────────────────┐ │
│                           │   │   Create Hospital Account        │ │
│                           │   └─────────────────────────────────┘ │
│                           │   Already registered?  Sign in        │
└─────────────────────────────────────────────────────────────────┘
```

**Design Notes**

- Same split layout and tokens as Login. The right card carries the hospital onboarding form, grouped into **Hospital Details** and **Administrator Account**.
- The first registered user becomes the **Hospital Admin**; doctors are added later from the Admin Panel.
- Reuses the shared form-field, button, and card styles. Submitting routes to the Hospital Admin overview.

---

### 6.2 Dashboard

#### Doctor Dashboard

```
┌────────────────────────────────────────────────────────────────────┐
│ 🫁 PneumoScan          ●  City Medical Centre       Dr. Ahmed  ▾   │  ← Deep Space #0C0A18 nav bar, Vivid Violet #7C3AED active indicators
├──────────────┬─────────────────────────────────────────────────────┤
│              │                                                       │
│  Navigation  │   Good morning, Dr. Ahmed            Sunday, 14 Jun │
│  ──────────  │                                                       │
│              │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  📊 Dashboard│  │ 12       │ │ 4        │ │ 2        │ │ 38      │ │
│              │  │ Pending  │ │ In Review│ │ Awaiting │ │ Total   │ │
│  👥 Patients │  │ AI Ready │ │          │ │ My Sign  │ │ This Wk │ │
│              │  └──────────┘ └──────────┘ └──────────┘ └─────────┘ │
│  🫁 Scans    │                                                       │
│              │  Cases Requiring Your Attention                       │
│  📄 Reports  │  ─────────────────────────────────────              │
│              │  ┌──────────────────────────────────────────────────┐│
│  ✍️  Sign    │  │ Patient          Status        AI Result  Action  ││
│              │  ├──────────────────────────────────────────────────┤│
│  ⚙️  Settings│  │ Ayesha Raza      ● AI Ready    ⚠ Suspected  Review││
│              │  │ MRN-20240612                    82% conf.         ││
│  ──────────  │  ├──────────────────────────────────────────────────┤│
│              │  │ Tariq Mehmood    ● In Review   🔴 Detected  Continue││
│  Hospital    │  │ MRN-20240609                    96% conf.         ││
│  City Medical│  ├──────────────────────────────────────────────────┤│
│  Centre      │  │ Sara Iqbal       ● AI Ready    ✅ Clear     Review││
│              │  │ MRN-20240611                    91% conf.         ││
│  License:    │  └──────────────────────────────────────────────────┘│
│  PMDC-49281  │                                                       │
│              │  Recent Activity                                       │
│              │  ┌──────────────────────────────────────────────────┐│
│              │  │  ✅  MRN-20240605 · Report certified  · 2h ago   ││
│              │  │  ✍️   MRN-20240604 · Signed · Sent for approval  ││
│              │  │  🤖  MRN-20240603 · AI analysis complete          ││
│              │  └──────────────────────────────────────────────────┘│
│              │                                                       │
└──────────────┴───────────────────────────────────────────────────────┘
```

#### Hospital Admin Dashboard

```
┌────────────────────────────────────────────────────────────────────┐
│ 🫁 PneumoScan       ●  City Medical Centre     Admin: H. Sadiq  ▾  │
├──────────────┬─────────────────────────────────────────────────────┤
│              │                                                       │
│  🏥 Overview │   Hospital Overview                     Export ▾     │
│  👨‍⚕️ Doctors  │                                                       │
│  👥 Patients │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  📄 Reports  │  │ 8        │ │ 147      │ │ 23       │ │ 12      │ │
│  📋 Audit Log│  │ Doctors  │ │ Patients │ │ Reports  │ │ Pending │ │
│  ⚙️ Hospital  │  │ Active   │ │ Total    │ │ Signed   │ │ Sign-off│ │
│     Profile  │  └──────────┘ └──────────┘ └──────────┘ └─────────┘ │
│  🔑 Access   │                                                       │
│              │  Reports Awaiting Hospital Co-Sign                    │
│              │  ┌──────────────────────────────────────────────────┐│
│              │  │ Patient        Doctor         Signed     Action   ││
│              │  ├──────────────────────────────────────────────────┤│
│              │  │ Tariq Mehmood  Dr. Ahmed      2h ago     Co-sign ││
│              │  │ Fatima Noor    Dr. Khan        5h ago     Co-sign ││
│              │  └──────────────────────────────────────────────────┘│
│              │                                                       │
│              │  Detection Stats — Last 30 Days                       │
│              │  ┌──────────────────────────────────────────────────┐│
│              │  │  Pneumonia Detected  ████████████░░░░  62 cases  ││
│              │  │  Suspected           ████░░░░░░░░░░░░  18 cases  ││
│              │  │  Clear / Normal      ██████████████░░  67 cases  ││
│              │  └──────────────────────────────────────────────────┘│
│              │                                                       │
└──────────────┴───────────────────────────────────────────────────────┘
```

---

### 6.3 Patient Management

#### Patient Registration Form

```
┌──────────────────────────────────────────────────────────────────┐
│  ← Back to Patients         Register New Patient                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Patient Information                                               │
│  ─────────────────────────────────────────────────────────────── │
│                                                                    │
│   First Name                    Last Name                         │
│   ┌──────────────────────┐      ┌──────────────────────┐         │
│   │  Ayesha               │      │  Raza                 │        │
│   └──────────────────────┘      └──────────────────────┘         │
│                                                                    │
│   Date of Birth                 Gender                            │
│   ┌──────────────────────┐      ┌──────────────────────┐         │
│   │  DD / MM / YYYY      │      │  Female            ▾  │         │
│   └──────────────────────┘      └──────────────────────┘         │
│                                                                    │
│   CNIC / National ID (optional)  Contact Number                  │
│   ┌──────────────────────┐      ┌──────────────────────┐         │
│   │  35202-XXXXXXX-X     │      │  +92 300 XXXXXXX     │         │
│   └──────────────────────┘      └──────────────────────┘         │
│                                                                    │
│  Clinical Details                                                  │
│  ─────────────────────────────────────────────────────────────── │
│                                                                    │
│   Referring Doctor              Ward / Department                 │
│   ┌──────────────────────┐      ┌──────────────────────┐         │
│   │  Dr. Ahmed        ▾  │      │  Pulmonology       ▾  │         │
│   └──────────────────────┘      └──────────────────────┘         │
│                                                                    │
│   Chief Complaint / Symptoms                                       │
│   ┌─────────────────────────────────────────────────────────┐    │
│   │  Persistent cough, fever for 5 days, low oxygen satu-   │    │
│   │  ration. No prior TB history.                            │    │
│   └─────────────────────────────────────────────────────────┘    │
│                                                                    │
│   Priority                                                         │
│   ◉ Routine   ○ Urgent   ○ Emergency                              │
│                                                                    │
│   ┌────────────────────┐  ┌────────────────────────────────┐     │
│   │  Save as Draft     │  │  Register Patient & Upload Scan │     │
│   └────────────────────┘  └────────────────────────────────┘     │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

### 6.4 X-Ray Upload & AI Analysis

#### Upload Interface

```
┌──────────────────────────────────────────────────────────────────┐
│  Patient: Ayesha Raza · MRN-20240612 · Pulmonology               │
│  ← Patient Details          Upload Chest X-Ray                   │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Upload X-Ray Image                                               │
│  ─────────────────────────────────────────────────────────────── │
│                                                                    │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                                                             │   │
│  │                                                             │   │
│  │           ┌──────────────────────────────┐                 │   │
│  │           │                              │                 │   │
│  │           │         📤                   │                 │   │
│  │           │   Drop DICOM, JPEG, or PNG   │                 │   │
│  │           │   file here, or              │                 │   │
│  │           │   [Choose File]              │                 │   │
│  │           │                              │                 │   │
│  │           └──────────────────────────────┘                 │   │
│  │                                                             │   │
│  │   Accepted: .dcm · .jpg · .png · Max 50MB per file         │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                    │
│  Scan Metadata                                                     │
│  ─────────────────────────────────────────────────────────────── │
│                                                                    │
│   Scan Date & Time              Scan Type                         │
│   ┌──────────────────────┐      ┌──────────────────────┐         │
│   │  14/06/2024  09:30   │      │  PA (Posteroanterior)│▾│        │
│   └──────────────────────┘      └──────────────────────┘         │
│                                                                    │
│   Equipment / Machine ID (optional)                               │
│   ┌──────────────────────────────────────────────────────┐       │
│   │  Siemens YSIO Max · Serial: SIE-2024-00821            │       │
│   └──────────────────────────────────────────────────────┘       │
│                                                                    │
│   Radiologist Notes (optional)                                    │
│   ┌──────────────────────────────────────────────────────┐       │
│   │  Increased opacity in the right lower lobe noted      │       │
│   │  on initial visual review.                            │       │
│   └──────────────────────────────────────────────────────┘       │
│                                                                    │
│        ┌────────────────────────────────────────────────┐        │
│        │      Upload & Run AI Analysis                   │        │  ← Primary teal button
│        └────────────────────────────────────────────────┘        │
│                                                                    │
│  ℹ️  Analysis typically completes in 8–15 seconds.                │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

#### Processing State

```
┌──────────────────────────────────────────────────────────────────┐
│  Patient: Ayesha Raza · MRN-20240612                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│                                                                    │
│              ┌─────────────────────────────────────┐             │
│              │                                       │             │
│              │           🫁                          │             │
│              │                                       │             │
│              │   AI Model Running Analysis...        │             │
│              │                                       │             │
│              │   ████████████████████░░░░░  78%     │             │
│              │                                       │             │
│              │   ✅ Pre-processing image             │             │
│              │   ✅ Running CNN inference            │             │
│              │   ⏳ Generating confidence map        │             │
│              │   ○  Building GradCAM heatmap         │             │
│              │   ○  Compiling result report          │             │
│              │                                       │             │
│              │   Estimated: ~5 seconds remaining     │             │
│              │                                       │             │
│              └─────────────────────────────────────┘             │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

### 6.5 AI Analysis Report View

#### Analysis Results — Pneumonia Detected

```
┌──────────────────────────────────────────────────────────────────────┐
│  Patient: Ayesha Raza · MRN-20240612        ← Back    Send to Dr. → │
├────────────────────────────┬─────────────────────────────────────────┤
│                            │                                          │
│  X-RAY VIEWER              │  AI ANALYSIS RESULTS                     │
│                            │  ──────────────────────────────────────  │
│  ┌──────────────────────┐  │                                          │
│  │                      │  │  ┌─────────────────────────────────────┐ │
│  │                      │  │  │ 🔴  PNEUMONIA DETECTED               │ │
│  │   [Chest X-Ray       │  │  │     Confidence: 94.2%               │ │ ← Red badge, bold
│  │    Image Display]    │  │  └─────────────────────────────────────┘ │
│  │                      │  │                                          │
│  │  Heat zones overlay  │  │  Severity Assessment                     │
│  │  in amber/red show   │  │  ─────────────────────────────────────  │
│  │  areas of concern    │  │  Severity:   ● ● ● ○ ○  Moderate        │
│  │                      │  │  Lung Zone:  Right Lower Lobe           │
│  │                      │  │  Laterality: Unilateral                 │
│  └──────────────────────┘  │  Pattern:    Consolidation              │
│                            │                                          │
│  View:                     │  Confidence Breakdown                    │
│  [Original] [Heatmap]      │  ┌─────────────────────────────────────┐ │
│  [Side-by-side]            │  │  Pneumonia        ████████████  94%  │ │
│                            │  │  Normal / Clear   ██░░░░░░░░░   4%  │ │
│  Zoom:  [–] 100% [+]       │  │  Uncertain        ░░░░░░░░░░░   2%  │ │
│  Rotate: ↺ ↻               │  └─────────────────────────────────────┘ │
│                            │                                          │
│  Download DICOM            │  Model Information                       │
│                            │  Model: PneumoNet v2.4 (ResNet-50)       │
│                            │  Trained on: CheXpert + NIH ChestX-ray14 │
│                            │  Analysis ID: AI-2024-06-14-0821         │
│                            │  Processed at: 09:42:11 PKT              │
│                            │                                          │
│                            │  ⚠️  This AI result is a clinical aid.   │
│                            │  Physician review and sign-off required. │
│                            │                                          │
│                            │  ┌─────────────────────────────────────┐ │
│                            │  │   Proceed to Doctor Review →         │ │ ← Teal, full-width
│                            │  └─────────────────────────────────────┘ │
│                            │                                          │
│                            │  [⚑ Flag for Re-analysis]               │
│                            │                                          │
└────────────────────────────┴──────────────────────────────────────────┘
```

---

### 6.6 Doctor Review & Sign-Off

#### Report Composition Screen

```
┌──────────────────────────────────────────────────────────────────────┐
│  MRN-20240612 · Ayesha Raza  ── Doctor Review & Report              │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌───────────────────────────────┐   ┌─────────────────────────────┐ │
│  │  PATIENT SUMMARY              │   │  AI RESULT SUMMARY          │ │
│  │  Name:  Ayesha Raza           │   │  🔴 Pneumonia Detected      │ │
│  │  Age:   34 years              │   │  Confidence: 94.2%          │ │
│  │  MRN:   MRN-20240612          │   │  Zone: Right Lower Lobe     │ │
│  │  Ward:  Pulmonology           │   │  Severity: Moderate         │ │
│  │  Scan:  14/06/2024 09:30      │   │                             │ │
│  └───────────────────────────────┘   └─────────────────────────────┘ │
│                                                                       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  CLINICAL REPORT — DR. AHMED RAZA, MBBS, FCPS (PULMONOLOGY)         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                                       │
│  Clinical Findings                                                    │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Chest X-Ray (PA view) shows increased opacity and consoli-     │ │
│  │  dation in the right lower lobe consistent with lobar pneu-     │ │
│  │  monia. Air bronchograms are visible. No pleural effusion.      │ │
│  │  Left lung field appears clear.                                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  Diagnosis                                                            │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  ● Confirm AI Finding     ○ Partial Agreement     ○ Disagree   │ │
│  │                                                                   │ │
│  │  ICD-10 Code:  J18.1  — Lobar Pneumonia, Unspecified           │ │
│  │  ┌──────────────────────────────────────────────────────────┐   │ │
│  │  │  J18.1 - Lobar pneumonia, unspecified organism        ▾  │   │ │
│  │  └──────────────────────────────────────────────────────────┘   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  Recommendations                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  1. Initiate empirical antibiotic therapy (Amoxicillin-         │ │
│  │     Clavulanate) pending sputum culture results.                │ │
│  │  2. Monitor oxygen saturation. Consider supplemental O2.        │ │
│  │  3. Follow-up chest X-ray in 4–6 weeks post-treatment.          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  Follow-Up Instructions                                               │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Return immediately if: worsening breathlessness, SpO2 drops   │ │
│  │  below 92%, high fever persists beyond 72h of antibiotics.      │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  DIGITAL SIGNATURE                                                   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │                                                                   │ │
│  │   By signing, you confirm that:                                  │ │
│  │   ✓ You have reviewed the X-ray and AI analysis                  │ │
│  │   ✓ The clinical findings above are accurate to your judgment    │ │
│  │   ✓ This report will be sent for hospital co-sign certification  │ │
│  │                                                                   │ │
│  │   Enter your PIN to sign                                          │ │
│  │   ┌──────────┐                                                    │ │
│  │   │  ● ● ● ● │                                                    │ │
│  │   └──────────┘                                                    │ │
│  │                                                                   │ │
│  │   ┌─────────────────────────────────────────────────────────┐   │ │
│  │   │   ✍️  Sign Report — Dr. Ahmed Raza                       │   │ │
│  │   └─────────────────────────────────────────────────────────┘   │ │
│  │                                                                   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

#### Hospital Admin Co-Sign Screen

```
┌──────────────────────────────────────────────────────────────────────┐
│  MRN-20240612 · Ayesha Raza  ── Hospital Co-Sign & Certification    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Report submitted by: Dr. Ahmed Raza · Signed 14/06/2024 10:15 PKT  │
│  Signature verified: ✅ VALID · Hash: 4f82...a91c                    │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  REPORT PREVIEW (read-only once doctor signed)                   │ │
│  │                                                                   │ │
│  │  [Full report content rendered here — not editable]              │ │
│  │                                                                   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  Administrator Notes (optional — appears in audit log only)          │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Reviewed and approved for release. No discrepancies.            │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌──────────────────────┐   ┌───────────────────────────────────┐   │
│  │  ⚑ Return to Doctor  │   │  🏥 Certify & Generate Report PDF  │   │
│  └──────────────────────┘   └───────────────────────────────────┘   │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

---

### 6.7 Final Report

#### Generated PDF Report — Visual Layout

```
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║  ████████████████████████████████████████████████████████████████   ║  ← Navy header band
║  █                                                              █   ║
║  █   🏥 CITY MEDICAL CENTRE                   🫁 PneumoScan   █   ║
║  █   Lahore, Punjab, Pakistan                 AI Report v1     █   ║
║  ████████████████████████████████████████████████████████████████   ║
║                                                                      ║
║  RADIOLOGY REPORT — CHEST X-RAY (PA VIEW)                           ║
║  ──────────────────────────────────────────────────────────────────  ║
║                                                                      ║
║  PATIENT INFORMATION              REPORT INFORMATION                 ║
║  ──────────────────────────────   ──────────────────────────────     ║
║  Name:     Ayesha Raza            Report No: CMC-2024-0612-001       ║
║  MRN:      MRN-20240612           Report Date: 14 June 2024          ║
║  DOB:      12/03/1990             Scan Date:   14 June 2024 09:30    ║
║  Age:      34 years               Department:  Pulmonology            ║
║  Gender:   Female                 Scan Type:   PA (Posteroanterior)  ║
║                                                                      ║
║  ──────────────────────────────────────────────────────────────────  ║
║  AI ANALYSIS RESULT                                                   ║
║  ──────────────────────────────────────────────────────────────────  ║
║                                                                      ║
║  ┌─────────────────────────┐    AI Model: PneumoNet v2.4             ║
║  │                         │    Result:   Pneumonia Detected         ║
║  │  [X-Ray Image]  [Heatmap│    Confidence: 94.2%                    ║
║  │                         │    Severity: Moderate                   ║
║  └─────────────────────────┘    Zone: Right Lower Lobe               ║
║                                                                      ║
║  ──────────────────────────────────────────────────────────────────  ║
║  PHYSICIAN REPORT — DR. AHMED RAZA, MBBS, FCPS (Pulmonology)        ║
║  PMDC No.: 49281 · City Medical Centre                               ║
║  ──────────────────────────────────────────────────────────────────  ║
║                                                                      ║
║  Clinical Findings:                                                   ║
║  Chest X-Ray (PA view) shows increased opacity and consolidation in  ║
║  the right lower lobe consistent with lobar pneumonia. Air broncho-  ║
║  grams are visible. No pleural effusion. Left lung field appears     ║
║  clear.                                                              ║
║                                                                      ║
║  Diagnosis: J18.1 — Lobar Pneumonia, Unspecified                     ║
║                                                                      ║
║  Recommendations:                                                     ║
║  1. Initiate empirical antibiotic therapy pending sputum culture.    ║
║  2. Monitor oxygen saturation. Consider supplemental O2.             ║
║  3. Follow-up chest X-ray in 4–6 weeks post-treatment.               ║
║                                                                      ║
║  ──────────────────────────────────────────────────────────────────  ║
║  SIGNATURES & CERTIFICATION                                           ║
║  ──────────────────────────────────────────────────────────────────  ║
║                                                                      ║
║  Doctor Signature                 Hospital Certification             ║
║                                                                      ║
║  ________________________         ████████████████████████           ║
║  Dr. Ahmed Raza                   [Hospital Seal]                    ║
║  MBBS, FCPS (Pulmonology)                                            ║
║  PMDC No.: 49281                  Certified by:                      ║
║  Signed: 14/06/2024 10:15 PKT     H. Sadiq, Hospital Admin          ║
║  Sig Hash: 4f82b1...a91c PKI      Certified: 14/06/2024 11:00 PKT   ║
║                                   Cert Hash: 9a21f4...b33d           ║
║                                                                      ║
║  ──────────────────────────────────────────────────────────────────  ║
║  ⚠️  This report is generated with AI assistance. Final clinical     ║
║  interpretation and responsibility rests with the signing physician. ║
║  Verify report authenticity at: verify.pneumoscan.pk/CMC-2024-0612  ║
║  ──────────────────────────────────────────────────────────────────  ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

### 6.8 Hospital Admin Panel

#### Doctor Management

```
┌──────────────────────────────────────────────────────────────────────┐
│  Hospital Profile  /  Manage Doctors                                  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  [ + Register New Doctor ]                              🔍 Search    │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │  Doctor            Specialty       PMDC No.   Reports  Status    ││
│  ├──────────────────────────────────────────────────────────────────┤│
│  │  Dr. Ahmed Raza    Pulmonology     49281       38       ● Active  ││
│  │  Dr. Sara Khan     Radiology       52104       22       ● Active  ││
│  │  Dr. Imran Ali     General Med     41892       15       ○ Inactive││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

#### Audit Log

```
┌──────────────────────────────────────────────────────────────────────┐
│  Audit Log                                  Filter ▾   Export CSV    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  TIME (PKT)          USER               ACTION                       │
│  ────────────────────────────────────────────────────────────────── │
│  14/06/24 11:00      H. Sadiq (Admin)   Co-signed report CMC-2024-0612│
│  14/06/24 10:15      Dr. Ahmed Raza     Signed report CMC-2024-0612   │
│  14/06/24 09:42      AI System          Analysis complete MRN-20240612│
│  14/06/24 09:30      Dr. Ahmed Raza     X-ray uploaded MRN-20240612   │
│  14/06/24 09:15      Reception (Nadia)  Patient registered MRN-20240612│
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 7. User Flows

### 7.1 Standard Diagnostic Flow (PA View)

```
Staff / Receptionist          Doctor                 Hospital Admin          AI System
        │                       │                         │                      │
        │ Register Patient       │                         │                      │
        │──────────────────────>│                         │                      │
        │                       │ Upload X-Ray            │                      │
        │                       │──────────────────────────────────────────────>│
        │                       │                         │                      │ Run CNN
        │                       │                         │                      │ Analysis
        │                       │                         │                      │ Generate
        │                       │<─────────────────────────────────────────────│ Heatmap
        │                       │ Review AI result        │                      │
        │                       │ Write clinical notes    │                      │
        │                       │ Add diagnosis (ICD-10)  │                      │
        │                       │ Enter PIN → Sign Report │                      │
        │                       │──────────────────────>│                       │
        │                       │                       │ Receive signed report  │
        │                       │                       │ Review content         │
        │                       │                       │ Co-sign & Certify      │
        │                       │                       │ Generate PDF           │
        │                       │<─────────────────────│                        │
        │ Print / Share Report   │                       │                        │
        │<──────────────────────│                       │                        │
        │                       │                       │                        │
```

### 7.2 Re-Analysis Flow

```
Doctor finds X-ray quality poor or AI result implausible
        │
        ▼
  Click "Flag for Re-analysis"
        │
        ▼
  Select reason:
  ◉ Poor image quality
  ○ Clinical presentation inconsistent
  ○ Wrong scan region detected
        │
        ▼
  Case returns to PENDING state
  Radiologist/Staff notified to re-upload
        │
        ▼
  New X-ray uploaded → AI re-runs
        │
        ▼
  Doctor notified → review cycle restarts
```

---

## 8. Component Library

### 8.1 Status Badges

```
● AI READY         background: #EFF6FF  text: #1D4ED8  border: #BFDBFE
● IN REVIEW        background: #FFFBEB  text: #B45309  border: #FDE68A
● DOCTOR SIGNED    background: #ECFDF5  text: #047857  border: #A7F3D0
● CERTIFIED        background: #2563EB  text: #FFFFFF  border: none
● FLAGGED          background: #FEF2F2  text: #B91C1C  border: #FECACA
```

### 8.2 AI Result Indicators

```
🔴 Pneumonia Detected   bg: #FEF2F2   icon: filled red circle   text: #B91C1C   border: #FECACA
⚠️  Suspected            bg: #FFFBEB   icon: warning triangle     text: #B45309   border: #FDE68A
✅ Clear / Normal       bg: #ECFDF5   icon: checkmark circle    text: #047857   border: #A7F3D0
```

### 8.3 Button Hierarchy

```
Primary Action    →  bg: #2563EB (Primary Blue)  text: white   hover: #1D4ED8
Secondary Action  →  bg: white   text: #2563EB   border: #BFDBFE   hover bg: #EFF6FF
Danger Action     →  bg: #EF4444                 text: white   hover: #DC2626
Ghost / Link      →  no bg  text: #2563EB  underline on hover
Disabled          →  bg: #F1F5F9        text: #94A3B8  cursor: not-allowed
```

### 8.4 Form Fields

```
Default:  border: 1px solid #E2E8F0   bg: #F8FAFC   focus: border #2563EB + 4px blue glow
Error:    border: 1px solid #EF4444   bg: #FEF2F2   icon: ⚠️ inline
Success:  border: 1px solid #10B981   bg: #ECFDF5   icon: ✅ inline
```

### 8.5 Cards

```
┌──────────────────────────────────┐
│  [Label — 11px uppercase navy]   │
│                                  │
│  Card Title — 18px SemiBold      │
│                                  │
│  Body text 14px / line-height    │
│  1.6 / color: #374151            │
│                                  │
│  [Action Link]                   │
└──────────────────────────────────┘

border: 1px solid #E2E8F0
border-radius: 16px
padding: 24px
shadow: Level 1 (soft, blue-tinted)
```

---

## 9. API Contracts

### 9.1 Key Endpoints

```
AUTH
  POST   /api/v1/auth/login             Login, return JWT
  POST   /api/v1/auth/logout            Invalidate session
  POST   /api/v1/auth/refresh           Refresh JWT token

PATIENTS
  GET    /api/v1/patients               List patients (paginated, filtered)
  POST   /api/v1/patients               Register new patient
  GET    /api/v1/patients/:id           Get patient detail
  PATCH  /api/v1/patients/:id           Update patient info

SCANS & AI
  POST   /api/v1/scans                  Upload X-ray, trigger AI analysis
  GET    /api/v1/scans/:id              Get scan + AI result
  GET    /api/v1/scans/:id/heatmap      Get GradCAM heatmap image
  POST   /api/v1/scans/:id/flag         Flag scan for re-upload

REPORTS
  POST   /api/v1/reports               Create draft report
  GET    /api/v1/reports/:id            Get report detail
  PATCH  /api/v1/reports/:id           Update report (doctor only, pre-sign)
  POST   /api/v1/reports/:id/sign       Doctor signs (PIN required)
  POST   /api/v1/reports/:id/certify    Admin co-signs & certifies
  GET    /api/v1/reports/:id/pdf        Download certified PDF
  GET    /api/v1/reports/:id/verify     Public verification endpoint

HOSPITAL ADMIN
  GET    /api/v1/hospital/doctors       List registered doctors
  POST   /api/v1/hospital/doctors       Register doctor
  GET    /api/v1/hospital/audit-log     Get audit log (paginated)
  GET    /api/v1/hospital/stats         Dashboard stats
```

### 9.2 AI Analysis Response Schema

```json
{
  "analysis_id": "AI-2024-06-14-0821",
  "scan_id": "SCN-2024-0612-001",
  "model_version": "PneumoNet v2.4",
  "processed_at": "2024-06-14T04:42:11Z",
  "result": {
    "label": "PNEUMONIA_DETECTED",
    "confidence": 0.942,
    "severity": "MODERATE",
    "lung_zone": "RIGHT_LOWER_LOBE",
    "laterality": "UNILATERAL",
    "pattern": "CONSOLIDATION"
  },
  "confidence_breakdown": {
    "pneumonia": 0.942,
    "normal": 0.041,
    "uncertain": 0.017
  },
  "heatmap_url": "/api/v1/scans/SCN-2024-0612-001/heatmap",
  "icd_suggestion": "J18.1"
}
```

---

## 10. Security & Compliance

### 10.1 Authentication & Access Control

- JWT tokens with 8-hour expiry; refresh tokens with 30-day sliding window
- 2FA mandatory for Hospital Admin accounts
- PIN-based signing (4-6 digit, bcrypt-hashed, rate-limited to 5 attempts)
- RBAC enforced at API gateway layer — role validated on every request
- Session invalidated on role change or account suspension

### 10.2 Data Protection

- All data at rest: AES-256 encryption (X-rays, reports, signatures)
- All data in transit: TLS 1.3 minimum
- X-ray files stored in isolated object storage (not public CDN)
- Patient PII separated from diagnostic data at DB level
- Data residency: configurable per hospital (in-country storage option)

### 10.3 Digital Signature Integrity

- Doctor signatures use PKI key pairs (private key stored in HSM or secure enclave)
- Signature includes: doctor ID, timestamp, report content hash (SHA-256)
- Hospital co-sign adds second signature layer
- Final PDF is sealed: any modification invalidates hash chain
- Public verify endpoint allows third parties to confirm report authenticity without access to patient data

### 10.4 Audit Trail

Every action is logged with:

```
{
  timestamp_utc:  ISO 8601
  user_id:        UUID
  user_role:      DOCTOR | ADMIN | STAFF | SYSTEM
  action:         enum (PATIENT_REGISTERED | SCAN_UPLOADED | AI_COMPLETE
                        | REPORT_SIGNED | REPORT_CERTIFIED | PDF_EXPORTED
                        | LOGIN | LOGOUT | FLAG_RAISED | RE_ANALYSIS_REQUESTED)
  resource_type:  PATIENT | SCAN | REPORT
  resource_id:    UUID
  ip_address:     masked last octet
  result:         SUCCESS | FAILURE
}
```

Audit logs are append-only, stored in a separate DB schema, and exportable by Hospital Admin as CSV or signed PDF.

### 10.5 Compliance Considerations

| Regulation | Measure |
|---|---|
| HIPAA (US) | Data minimisation, access controls, audit logs, breach notification workflow |
| PMDC (Pakistan) | Doctor credentials verified against PMDC registry at registration |
| ISO 13485 | AI model versioning, traceability per report, performance monitoring |
| GDPR (if applicable) | Right to erasure workflow (de-identify, not delete, for medical records) |

---

## Appendix A — Responsive Behaviour

| Breakpoint | Layout |
|---|---|
| Desktop (≥1280px) | Sidebar nav + main content split |
| Tablet (768–1279px) | Collapsible sidebar, stacked content |
| Mobile (< 768px) | Bottom navigation bar, full-width cards, X-ray viewer fullscreen |

## Appendix B — Accessibility

- WCAG 2.1 AA compliance target
- All status colours paired with icons (never colour-only signalling)
- Focus ring: 4px blue glow `rgba(37,99,235,0.15)` (or 2px `#2563EB` outline) on all interactive elements
- Keyboard navigation for all primary flows (upload, review, sign)
- `prefers-reduced-motion` respected: analysis spinner becomes progress text
- ARIA labels on X-ray viewer controls

## Appendix C — Technology Recommendations

| Layer | Recommended Stack |
|---|---|
| Frontend | React 18 + TypeScript + Tailwind CSS |
| Backend API | Django REST Framework (Python) |
| AI Service | PyTorch + FastAPI (microservice) |
| AI Model | Fine-tuned ResNet-50 / DenseNet-121 on CheXpert |
| Heatmap | GradCAM via `pytorch-grad-cam` |
| PDF Generation | WeasyPrint or ReportLab (server-side signed PDF) |
| Database | PostgreSQL 15 |
| File Storage | AWS S3 / MinIO (self-hosted) with server-side encryption |
| Signing | PKI via OpenSSL / AWS KMS |
| Auth | Django Allauth + SimpleJWT |

---

*PneumoScan Design Specification · v1.0 · Prepared June 2024*
*This document is a living design reference. All wireframes are schematic — final implementation may vary.*