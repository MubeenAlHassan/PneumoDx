'use client'

export function SignupHeader() {
  return (
    <header className="w-full max-w-6xl flex justify-between items-center mb-12">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-white">
          <span className="material-icons-round">biotech</span>
        </div>
        <span className="text-xl font-extrabold tracking-tight text-signup-primary font-display">
          PNEUMA<span className="text-slate-400 dark:text-slate-500">Dx</span>
        </span>
      </div>
      <div className="hidden md:block">
        <p className="text-sm text-slate-500 font-medium">Trusted by 2,400+ Medical Institutions</p>
      </div>
    </header>
  )
}
