export function LoginSidebar() {
  return (
    <div className="md:col-span-5 flex flex-col gap-6">
      <div className="glass-panel rounded-xl p-8 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="font-serif text-4xl font-semibold text-slate-900 dark:text-white leading-tight mb-4">
            Precision Care <br />
            for Pulmonary Health.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Access your dashboard to analyze chest X-rays with our proprietary neural networks. 99.2% accuracy in early pneumonia detection.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-white/20">
            <div className="w-12 h-12 rounded-full bg-pneumo-primary/10 flex items-center justify-center text-pneumo-primary">
              <span className="material-icons-round">verified_user</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">HIPAA Compliant</p>
              <p className="text-xs text-slate-500">Enterprise Grade Security</p>
            </div>
          </div>
        </div>
      </div>
      <div className="glass-panel rounded-xl p-6 bg-pneumo-primary/5 border-pneumo-primary/10">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-pneumo-primary uppercase tracking-widest">System Status</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-slate-600 dark:text-slate-400">All services operational</span>
          </div>
        </div>
      </div>
    </div>
  )
}
