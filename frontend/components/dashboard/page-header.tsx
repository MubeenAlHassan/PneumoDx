import Link from 'next/link'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  serifAccent?: string
  subtitle?: string
  backHref?: string
  backLabel?: string
  actions?: React.ReactNode
}

export function PageHeader({ eyebrow, title, serifAccent, subtitle, backHref, backLabel, actions }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {backHref && (
        <Link
          href={backHref}
          className="inline-flex items-center gap-1 text-[13px] text-[#64748B] hover:text-[#2563EB] transition-colors mb-4 rounded-sm"
        >
          <span className="material-icons-round text-[18px]" aria-hidden="true">
            arrow_back
          </span>
          {backLabel ?? 'Back'}
        </Link>
      )}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          {eyebrow && (
            <span className="label-clinical inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB] mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-[24px] font-semibold tracking-tight text-[#0F172A]">
            {title}
            {serifAccent && <span className="font-serif italic text-[#2563EB]"> {serifAccent}</span>}
          </h1>
          {subtitle && <p className="mt-2 text-[14px] text-[#64748B]">{subtitle}</p>}
        </div>
        {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
      </div>
    </header>
  )
}
