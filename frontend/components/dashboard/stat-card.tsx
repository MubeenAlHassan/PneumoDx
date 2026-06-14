interface StatCardProps {
  icon: string
  label: string
  value: string
  trend?: string
  colSpan?: string
}

export function StatCard({ icon, label, value, trend, colSpan = 'lg:col-span-3' }: StatCardProps) {
  return (
    <div className={`${colSpan} p-6 rounded-md flex flex-col justify-between min-h-[152px] bg-[#FFFFFF] border border-[#E2E8F0]`}>
      <div className="flex justify-between items-start mb-5">
        <div className="h-10 w-10 bg-[#EFF6FF] text-[#2563EB] rounded-sm flex items-center justify-center border border-[#E2E8F0]">
          <span className="material-icons-round" aria-hidden="true">{icon}</span>
        </div>
        {trend && (
          <span className="badge-status badge-ai-ready">
            <span aria-hidden="true">●</span> {trend}
          </span>
        )}
      </div>
      <div>
        <p className="label-clinical text-[#64748B] mb-2">{label}</p>
        <h2 className="text-[24px] font-semibold tracking-tight text-[#0F172A]">{value}</h2>
      </div>
    </div>
  )
}
