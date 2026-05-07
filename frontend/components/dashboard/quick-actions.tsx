'use client'

export function QuickActions() {
  return (
    <div className="lg:col-span-4 bento-card p-6 rounded-xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl border border-pneumo-primary/10 dark:border-slate-700/50">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Quick Actions</h3>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-4 bg-pneumo-primary/5 hover:bg-pneumo-primary/10 rounded-xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-pneumo-primary shadow-sm">
              <span className="material-icons">cloud_upload</span>
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-200">Upload New Scan</span>
          </div>
          <span className="material-icons text-slate-300 group-hover:text-pneumo-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
        <button className="w-full flex items-center justify-between p-4 bg-purple-500/5 hover:bg-purple-500/10 rounded-xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-purple-600 shadow-sm">
              <span className="material-icons">description</span>
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-200">Generate Report</span>
          </div>
          <span className="material-icons text-slate-300 group-hover:text-purple-600 transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
        <button className="w-full flex items-center justify-between p-4 bg-emerald-500/5 hover:bg-emerald-500/10 rounded-xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-emerald-600 shadow-sm">
              <span className="material-icons">send</span>
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-200">Consult Specialist</span>
          </div>
          <span className="material-icons text-slate-300 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>
      <div className="mt-8 p-6 bg-gradient-to-br from-pneumo-primary to-blue-600 rounded-xl text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="font-bold mb-2">Platform Update</h4>
          <p className="text-xs text-white/80 leading-relaxed mb-4">v2.4.0 is now live. Enhanced fluid detection models for pediatric cases.</p>
          <a className="text-xs font-bold underline hover:text-white/90 transition-colors" href="#">Read what's new</a>
        </div>
        <span className="material-icons absolute -bottom-4 -right-4 text-8xl text-white/10 rotate-12">auto_awesome</span>
      </div>
    </div>
  )
}
