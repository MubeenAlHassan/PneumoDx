interface EmptyStateProps {
  icon: string
  title: string
  description: string
  action?: React.ReactNode
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] mb-4">
        <span className="material-icons-round text-[28px]" aria-hidden="true">{icon}</span>
      </span>
      <h3 className="text-[16px] font-semibold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-[14px] text-[#64748B] max-w-sm leading-relaxed mb-6">{description}</p>
      {action}
    </div>
  )
}
