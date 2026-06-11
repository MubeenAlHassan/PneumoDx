'use client'

import Link from 'next/link'

export function QuickActions() {
  return (
    <div className="lg:col-span-4 bento-card p-6 rounded-3xl glass-panel border border-slate-200/60 dark:border-slate-800/60">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Quick Actions</h3>
      <div className="space-y-4">
        <button className="w-full h-16 flex items-center justify-between px-4 bg-pneumo-primary/5 hover:bg-pneumo-primary/10 rounded-2xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-pneumo-primary shadow-sm">
              <span className="material-icons-round">cloud_upload</span>
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Upload New Scan</span>
          </div>
          <span className="material-icons-round text-slate-300 group-hover:text-pneumo-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
        <button className="w-full h-16 flex items-center justify-between px-4 bg-pneumo-primary/5 hover:bg-pneumo-primary/10 rounded-2xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-pneumo-primary shadow-sm">
              <span className="material-icons-round">description</span>
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Generate Report</span>
          </div>
          <span className="material-icons-round text-slate-300 group-hover:text-pneumo-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
        <Link href="/dashboard/records" className="w-full h-16 flex items-center justify-between px-4 bg-pneumo-primary/5 hover:bg-pneumo-primary/10 rounded-2xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-pneumo-primary shadow-sm">
              <span className="material-icons-round">send</span>
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Open Records</span>
          </div>
          <span className="material-icons-round text-slate-300 group-hover:text-pneumo-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Link>
      </div>
      <div className="mt-8 p-6 bg-gradient-to-br from-pneumo-primary to-blue-500 rounded-2xl text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="font-bold mb-2">Platform Update</h4>
          <p className="text-xs text-white/80 leading-relaxed mb-4">v2.4.0 is now live. Enhanced fluid detection models for pediatric cases.</p>
          <a className="text-xs font-bold underline hover:text-white/90 transition-colors" href="#">Read what's new</a>
        </div>
        <span className="material-icons-round absolute -bottom-4 -right-4 text-8xl text-white/10 rotate-12">auto_awesome</span>
      </div>
    </div>
  )
}
