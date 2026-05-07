interface StatCardProps {
  icon: string
  iconBgColor: string
  iconColor: string
  label: string
  value: string
  trend?: string
  trendColor?: string
  colSpan?: string
}

export function StatCard({ icon, iconBgColor, iconColor, label, value, trend, trendColor = 'emerald', colSpan = 'lg:col-span-3' }: StatCardProps) {
  return (
    <div className={`${colSpan} bento-card p-6 rounded-xl flex flex-col justify-between bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl border border-pneumo-primary/10 dark:border-slate-700/50 hover:shadow-lg hover:shadow-pneumo-primary/10 transition-all`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 ${iconBgColor} rounded-lg flex items-center justify-center`}>
          <span className={`material-icons ${iconColor}`}>{icon}</span>
        </div>
        {trend && (
          <span className={`text-xs font-bold text-${trendColor}-500 bg-${trendColor}-50 dark:bg-${trendColor}-500/10 px-2 py-1 rounded-full`}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{label}</p>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">{value}</h2>
      </div>
    </div>
  )
}
