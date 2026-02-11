'use client'

export function Hero() {
  return (
    <header className="relative pt-44 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-primary/10 text-pneumo-primary text-xs font-bold uppercase tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-pneumo-primary animate-pulse" />
            Next-Gen Diagnostics
          </div>
          <h1 className="text-6xl md:text-8xl leading-[1.1] font-medium tracking-tight">
            Transforming <span className="font-serif italic text-pneumo-primary">Radiology</span>
            <br />
            <span className="text-slate-400 dark:text-slate-500 font-light">Instant Detection.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Harnessing Convolutional neural network architectures to detect pneumonia indicators with 99.4% sensitivity. Empowers clinicians with real-time, explainable diagnostic insights.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-pneumo-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-pneumo-primary/25 flex items-center gap-2 group hover:opacity-90 transition-opacity">
              Get Started{' '}
              <span className="material-icons-round transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              View Sample Scan
            </button>
          </div>
        </div>

        {/* Hero Diagnostic Mockup */}
        <div className="lg:w-2/5 relative">
          <div className="relative z-10 p-4 glass-panel rounded-3xl shadow-2xl rotate-3">
            <div className="bg-slate-900 rounded-2xl overflow-hidden relative aspect-square">
              <img
                alt="Chest X-ray diagnostic scan"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3WM2C9Ox1hzkfvVE-D7psir64t8ZSJP5vY3-he4qr5FGhL2RESLAB87MWu9KLT4WTwCoLG8bgUON_5j651pCmCHBFOgPrNm06MdVuDR5W2X-c5ODQ_RX9-x6Lf5yeElHQ4zS1CrmTbE0Zvde5Y9AKZGJlSRHO8Kqd8qHw25hbqoC-tkRizqwXbgrUh8sIbcie1qGH8JqFfOZzDVJPUPd8mEUOF3vIfQpissYw_RbUCYOy_NsO90UnC0Ap6AaSWjOtIE7n1MTTMbw"
              />
              <div className="absolute inset-0 border-2 border-pneumo-primary/40 m-12 rounded-xl animate-pulse">
                <div className="absolute top-0 right-0 bg-pneumo-primary text-white px-2 py-1 text-[10px] rounded-bl-lg font-bold">
                  POSITIVE 99.2%
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-pneumo-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between px-2">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Patient ID</p>
                <p className="text-sm font-semibold">PX-9920-A</p>
              </div>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="w-2 h-2 rounded-full bg-pneumo-primary" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-pneumo-lavender/30 rounded-full -z-10 blur-2xl" />
        </div>
      </div>
    </header>
  )
}
