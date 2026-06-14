'use client'

export function Features() {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl mb-4">
          Clinical intelligence for <span className="font-serif italic text-pneumo-primary">modern</span> healthcare.
        </h2>
        <p className="text-slate-500 max-w-xl">
          Developed for academic purposes using publicly available datasets, peer-reviewed research, and global clinical guidelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Large Card: Real-time Analysis */}
        <div className="md:col-span-2 md:row-span-2 bento-card glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-pneumo-primary/10 text-pneumo-primary rounded-xl flex items-center justify-center mb-6">
              <span className="material-icons-round">bolt</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Sub-Second Processing</h3>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Our edge-computing infrastructure processes images in less than 400ms, enabling real-time diagnostic
              triage.
            </p>
          </div>
          <div className="mt-8 bg-pneumo-primary/5 rounded-2xl h-48 border border-pneumo-primary/10 overflow-hidden relative">
            <div className="absolute inset-0 flex items-end px-4 gap-2">
              <div className="w-full bg-pneumo-primary/20 h-[40%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/30 h-[65%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/40 h-[50%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/50 h-[85%] rounded-t-lg animate-pulse" />
              <div className="w-full bg-pneumo-primary/20 h-[30%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/60 h-[75%] rounded-t-lg" />
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-pneumo-primary font-bold">LIVE ACTIVITY</div>
          </div>
        </div>

        {/* Small Card: Accuracy */}
        <div className="md:col-span-1 md:row-span-1 bento-card glass-panel rounded-3xl p-8 flex flex-col justify-center text-center">
          <span className="text-5xl font-serif italic text-pneumo-primary mb-2">99.4%</span>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Accuracy Rate</span>
        </div>

        {/* Medium Card: Security */}
        <div className="md:col-span-1 md:row-span-2 bento-card bg-pneumo-primary rounded-3xl p-8 flex flex-col justify-between text-white">
          <div>
            <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
              <span className="material-icons-round">security</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Security & Privacy Principles</h3>
            <p className="text-white text-sm leading-relaxed">Designed with healthcare data privacy best practices, including encryption, access control, and secure data handling aligned with GDPR and HIPAA principles.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] border border-white/20 px-2 py-1 rounded">Data Encryption</span>
            <span className="text-[10px] border border-white/20 px-2 py-1 rounded">Secure Access Control</span>
            <span className="text-[10px] border border-white/20 px-2 py-1 rounded">Privacy-First Design</span>
          </div>
        </div>

        {/* Small Card: Integration */}
        <div className="md:col-span-1 md:row-span-1 bento-card glass-panel rounded-3xl p-8 flex items-center gap-4">
          <div className="w-10 h-10 bg-pneumo-lavender text-pneumo-primary rounded-full flex items-center justify-center shrink-0">
            <span className="material-icons-round text-sm">settings_input_component</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">API Integration</h4>
            <p className="text-xs text-slate-500 leading-relaxed">External systems.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
