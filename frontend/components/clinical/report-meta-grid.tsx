interface MetaField {
  label: string
  value: string
  mono?: boolean
}

interface ReportMetaGridProps {
  title?: string
  columns: MetaField[][]
}

export function ReportMetaGrid({ title, columns }: ReportMetaGridProps) {
  return (
    <div>
      {title && <p className="label-clinical text-[#64748B] mb-3">{title}</p>}
      <div className={`grid grid-cols-1 gap-6 ${columns.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {columns.map((col, i) => (
          <dl key={i} className="space-y-2 text-[14px]">
            {col.map((field) => (
              <div key={field.label} className="flex items-start justify-between gap-4">
                <dt className="text-[#64748B] shrink-0">{field.label}</dt>
                <dd className={`text-[#0F172A] text-right ${field.mono ? 'mono-data' : ''}`}>{field.value}</dd>
              </div>
            ))}
          </dl>
        ))}
      </div>
    </div>
  )
}
