const activity = [
  { icon: 'verified', tint: 'text-[#10B981]', text: 'MRN-20240605 · Report certified', time: '2h ago' },
  { icon: 'draw', tint: 'text-[#2563EB]', text: 'MRN-20240604 · Signed · Sent for approval', time: '3h ago' },
  { icon: 'smart_toy', tint: 'text-[#F59E0B]', text: 'MRN-20240603 · AI analysis complete', time: '5h ago' },
  { icon: 'person_add', tint: 'text-[#64748B]', text: 'MRN-20240602 · Patient registered', time: 'Yesterday' },
]

export function RecentActivity() {
  return (
    <div className="lg:col-span-12 card-panel p-6">
      <h3 className="text-[18px] font-semibold text-[#0F172A] mb-5">Recent Activity</h3>
      <ul className="divide-y divide-[#E2E8F0]">
        {activity.map((a, i) => (
          <li key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <span className={`flex h-8 w-8 items-center justify-center rounded-sm bg-[#EFF6FF] border border-[#E2E8F0] ${a.tint}`}>
              <span className="material-icons-round text-[18px]" aria-hidden="true">
                {a.icon}
              </span>
            </span>
            <span className="flex-1 text-[14px] text-[#0F172A]">{a.text}</span>
            <span className="mono-data text-[#64748B]">{a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
