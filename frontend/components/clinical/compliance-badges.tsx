const badges = [
  { icon: 'lock', label: 'HIPAA-aligned' },
  { icon: 'https', label: 'TLS 1.3' },
  { icon: 'history', label: 'Audit-logged' },
  { icon: 'admin_panel_settings', label: 'Role-based access' },
] as const

interface ComplianceBadgesProps {
  size?: 'sm' | 'md'
  className?: string
}

export function ComplianceBadges({ size = 'md', className = '' }: ComplianceBadgesProps) {
  const sizeClass =
    size === 'sm'
      ? 'text-[11px] px-2.5 py-1 gap-1.5'
      : 'text-[12px] px-3 py-1.5 gap-2'

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {badges.map((b) => (
        <span
          key={b.label}
          className={`inline-flex items-center rounded-full border border-[#E2E8F0] bg-white text-[#475569] font-medium ${sizeClass}`}
        >
          <span className="material-icons-round text-[#2563EB] text-[16px]" aria-hidden="true">
            {b.icon}
          </span>
          {b.label}
        </span>
      ))}
    </div>
  )
}
