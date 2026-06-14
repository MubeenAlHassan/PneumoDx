'use client'

const technologyHighlights = [
  {
    icon: 'memory',
    title: 'CNN-Powered Classification',
    description:
      'A convolutional neural network is trained on chest X-ray datasets to classify pneumonia risk with clinically interpretable confidence scores.',
  },
  {
    icon: 'visibility',
    title: 'Explainable Heatmaps',
    description:
      'Grad-CAM style overlays mark regions that influenced predictions so radiologists can quickly validate model focus areas.',
  },
  {
    icon: 'speed',
    title: 'Real-Time Workflow',
    description:
      'Optimized inference keeps turnaround low for emergency triage, helping teams prioritize severe cases first.',
  },
]

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

function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <div className="mb-10 md:mb-12">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-primary/10 text-pneumo-primary text-xs font-bold uppercase tracking-wider">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-3">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">{description}</p>
    </div>
  )
}

export function LandingContentSections() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 space-y-24 md:space-y-28">
      <section id="technology" className="scroll-mt-32">
        <SectionHeader
          badge="Technology"
          title="Built for explainable AI diagnostics"
          description="PneumoScan combines deep learning, fast inference, and transparent visual outputs to support clinical decisions rather than replace human expertise."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {technologyHighlights.map((item) => (
            <article
              key={item.title}
              className="glass-panel rounded-3xl border border-slate-200/60 dark:border-slate-800/60 p-7 bento-card"
            >
              <div className="w-11 h-11 bg-pneumo-primary/10 text-pneumo-primary rounded-xl flex items-center justify-center mb-4">
                <span className="material-icons-round">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="trials" className="scroll-mt-32">
        <SectionHeader
          badge="Clinical Trials"
          title="Structured evaluation roadmap"
          description="The project follows a staged validation approach to measure reliability, identify bias, and verify readiness for supervised clinical use."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trialMilestones.map((trial) => (
            <article
              key={trial.phase}
              className="glass-panel rounded-3xl border border-slate-200/60 dark:border-slate-800/60 p-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-pneumo-primary mb-3">{trial.phase}</p>
              <h3 className="text-xl font-bold mb-2">{trial.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{trial.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="security" className="scroll-mt-32">
        <SectionHeader
          badge="Security"
          title="Privacy-first by design"
          description="Clinical imaging data is sensitive. PneumoDx is designed around practical healthcare security controls and transparent governance practices."
        />
        <div className="bg-slate-900 dark:bg-slate-950 rounded-[2rem] p-8 md:p-10 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityControls.map((control) => (
              <div key={control} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-200 leading-relaxed">{control}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="scroll-mt-32">
        <SectionHeader
          badge="Resources"
          title="Everything needed to adopt and present"
          description="Centralized materials help clinicians, developers, and students understand the system, reproduce outcomes, and onboard quickly."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="glass-panel rounded-3xl border border-slate-200/60 dark:border-slate-800/60 p-7 bento-card"
            >
              <div className="w-11 h-11 bg-pneumo-primary/10 text-pneumo-primary rounded-xl flex items-center justify-center mb-4">
                <span className="material-icons-round">{resource.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{resource.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
