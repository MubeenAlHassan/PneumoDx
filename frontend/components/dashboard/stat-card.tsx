interface StatCardProps {
  icon: string
  label: string
  value: string
  trend?: string
  colSpan?: string
}

export function StatCard({ icon, label, value, trend, colSpan = 'lg:col-span-3' }: StatCardProps) {
  return (
    <div className={`${colSpan} bento-card p-6 rounded-3xl flex flex-col justify-between min-h-[170px] glass-panel border border-slate-200/60 dark:border-slate-800/60 hover:shadow-lg hover:shadow-pneumo-primary/10 transition-all`}>
      <div className="flex justify-between items-start mb-5">
        <div className="h-11 w-11 bg-pneumo-primary/10 text-pneumo-primary rounded-xl flex items-center justify-center">
          <span className="material-icons-round">{icon}</span>
        </div>
        {trend && (
          <span className="text-[11px] font-bold text-pneumo-primary bg-pneumo-primary/10 px-2.5 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{label}</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</h2>
      </div>
    </div>
  )
}
