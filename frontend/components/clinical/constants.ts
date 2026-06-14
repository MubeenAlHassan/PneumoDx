export const XRAY_IMAGE_SRC = '/images/chest-xray-demo.png'

export const DEMO_CASE = {
  patientName: 'Ayesha Raza',
  mrn: 'MRN-20240612',
  dob: '12/03/1990',
  age: '34 years',
  gender: 'Female',
  ward: 'Pulmonology',
  reportNo: 'CMC-2024-0612-001',
  reportDate: '14 June 2024',
  scanDate: '14 June 2024 09:30',
  scanType: 'PA (Posteroanterior)',
  hospitalName: 'City Medical Centre',
  hospitalLocation: 'Lahore, Punjab, Pakistan',
  physicianName: 'Dr. Ahmed Raza',
  physicianCredentials: 'MBBS, FCPS (Pulmonology)',
  pmdcNo: '49281',
  adminName: 'H. Sadiq',
  signedAt: '14/06/2024 10:15 PKT',
  certifiedAt: '14/06/2024 11:00 PKT',
  sigHash: '4f82b1…a91c PKI',
  certHash: '9a21f4…b33d',
  verifyUrl: 'verify.pneumoscan.pk/CMC-2024-0612',
  confidence: '94.2%',
  zone: 'Right Lower Lobe',
  severity: 'Moderate',
  pattern: 'Consolidation',
  model: 'PneumoNet v2.4',
  diagnosis: 'J18.1 — Lobar Pneumonia, Unspecified',
  findings:
    'Chest X-Ray (PA view) shows increased opacity and consolidation in the right lower lobe consistent with lobar pneumonia. Air bronchograms are visible. No pleural effusion. Left lung field appears clear.',
  recommendations: [
    'Initiate empirical antibiotic therapy pending sputum culture.',
    'Monitor oxygen saturation. Consider supplemental O2.',
    'Follow-up chest X-ray in 4–6 weeks post-treatment.',
  ],
} as const

export type XrayViewMode = 'original' | 'heatmap' | 'overlay'

export const XRAY_VIEW_MODES: { id: XrayViewMode; label: string }[] = [
  { id: 'original', label: 'Original' },
  { id: 'heatmap', label: 'Heatmap' },
  { id: 'overlay', label: 'Overlay' },
]
