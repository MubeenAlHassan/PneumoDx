'use client'

export function SignupSidebar() {
  return (
    <div className="lg:col-span-2 space-y-8">
      <h1 className="font-serif text-5xl md:text-6xl leading-tight text-slate-800 dark:text-white">
        Empowering <span className="italic text-pneumo-primary">Pneumonia</span> Detection.
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
        Join the next generation of diagnostics. Our AI-driven platform provides rapid, high-precision analysis for clinical efficiency.
      </p>
      <div className="flex flex-col gap-6 pt-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-signup-primary/10 rounded-lg flex items-center justify-center text-pneumo-primary flex-shrink-0">
            <span className="material-icons-round">verified_user</span>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-200">HIPAA Compliant</h4>
            <p className="text-sm text-slate-500">Industry-leading data security protocols.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-signup-primary/10 rounded-lg flex items-center justify-center text-pneumo-primary flex-shrink-0">
            <span className="material-icons-round">bolt</span>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-200">Instant Analysis</h4>
            <p className="text-sm text-slate-500">Results within 45 seconds of upload.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
