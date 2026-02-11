'use client'

export function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Rapid Ingestion',
      description: 'Upload chest X-ray images in System or standard formats for processing.',
      icon: 'upload_file',
    },
    {
      number: '02',
      title: 'Neural Inference',
      description: 'A convolutional neural network analyzes images for pneumonia-related patterns.',
      icon: 'psychology',
    },
    {
      number: '03',
      title: 'Expert Validation',
      description: 'Predictions are visualized with heatmaps to highlight affected regions for radiologist reference.',
      icon: 'fact_check',
    },
    {
      number: '04',
      title: 'Final Report',
      description: 'Automated reports summarize findings; can be exported for research or educational purposes.',
      icon: 'description',
    },
  ]

  return (
    <section className="bg-white dark:bg-slate-900/50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-medium mb-4">
            The <span className="font-serif italic">Fluid</span> Workflow
          </h2>
          <p className="text-slate-500">How we turn clinical data into diagnostic clarity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Decorative SVG line */}
          <svg className="hidden md:block absolute top-10 left-[10%] w-[80%] h-1" fill="none" viewBox="0 0 1000 2" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H1000" stroke="url(#paint0_linear)" strokeDasharray="10 10" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="0" x2="1000" y1="0.5" y2="0.5">
                <stop stopColor="#13a4ec" stopOpacity="0" />
                <stop offset="0.5" stopColor="#13a4ec" />
                <stop offset="1" stopColor="#13a4ec" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-pneumo-bg-light dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 mb-6 group-hover:border-pneumo-primary transition-colors">
                <span className="material-icons-round text-pneumo-primary text-3xl">{step.icon}</span>
              </div>
              <span className="text-xs font-bold text-pneumo-primary uppercase tracking-widest mb-2">Step {step.number}</span>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-slate-500 px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
