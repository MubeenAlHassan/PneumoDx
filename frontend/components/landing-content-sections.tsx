'use client'

import { LandingSectionHeader } from '@/components/landing-section-header'

const trialMilestones = [
  {
    phase: 'Phase 1',
    title: 'Dataset Validation',
    detail: 'Baseline model validated on public CXR datasets with balanced normal and pneumonia classes.',
  },
  {
    phase: 'Phase 2',
    title: 'Retrospective Review',
    detail:
      'Model outputs compared with radiology reports to evaluate sensitivity, specificity, and false-positive trends.',
  },
  {
    phase: 'Phase 3',
    title: 'Pilot Deployment',
    detail:
      'Clinical simulation workflow introduced for supervised use in academic and hospital training environments.',
  },
]

const securityControls = [
  'End-to-end encryption for data in transit and encrypted storage at rest.',
  'Role-based access controls for clinicians, admins, and researchers.',
  'Audit logs for image uploads, model inferences, and report access events.',
  'De-identification workflow for educational and research export pipelines.',
]

const resources = [
  {
    icon: 'description',
    title: 'Technical Documentation',
    description: 'Architecture notes, model metrics, and API references for developers and integrators.',
  },
  {
    icon: 'menu_book',
    title: 'Clinical Reading List',
    description: 'Curated guidelines and peer-reviewed literature supporting AI-assisted pneumonia screening.',
  },
  {
    icon: 'school',
    title: 'Student & Research Kit',
    description: 'Presentation assets, demo scripts, and dataset preparation guides for final year project defense.',
  },
]

export function LandingContentSections() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-28 space-y-20 md:space-y-24">
      <section id="trials" className="scroll-mt-32">
        <LandingSectionHeader
          eyebrow="Clinical validation"
          title="Structured evaluation"
          titleAccent="roadmap."
          description="The project follows a staged validation approach to measure reliability, identify bias, and verify readiness for supervised clinical use."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trialMilestones.map((trial) => (
            <article key={trial.phase} className="card-panel rounded-xl p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-pneumo-primary mb-3">{trial.phase}</p>
              <h3 className="text-xl font-bold mb-2">{trial.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{trial.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="security" className="scroll-mt-32">
        <LandingSectionHeader
          eyebrow="Security"
          title="Privacy-first"
          titleAccent="by design."
          description="Clinical imaging data is sensitive. PneumoDx is designed around practical healthcare security controls and transparent governance practices."
          align="left"
        />
        <div className="rounded-2xl p-8 md:p-10 border border-blue-200/60 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] shadow-blue-glow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityControls.map((control) => (
              <div key={control} className="rounded-xl border border-white/20 bg-white/10 p-5">
                <p className="text-sm text-white/90 leading-relaxed">{control}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="scroll-mt-32">
        <LandingSectionHeader
          eyebrow="Resources"
          title="Everything needed to adopt"
          titleAccent="and present."
          description="Centralized materials help clinicians, developers, and students understand the system, reproduce outcomes, and onboard quickly."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resources.map((resource) => (
            <article key={resource.title} className="card-panel rounded-xl p-7 bento-card">
              <div className="w-11 h-11 bg-pneumo-primary/10 text-pneumo-primary rounded-xl flex items-center justify-center mb-4">
                <span className="material-icons-round">{resource.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{resource.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
