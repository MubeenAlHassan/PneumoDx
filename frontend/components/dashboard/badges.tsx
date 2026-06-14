export type ReportStatus = 'ai-ready' | 'in-review' | 'signed' | 'certified' | 'flagged'
export type AiResult = 'detected' | 'suspected' | 'clear'

const statusConfig: Record<ReportStatus, { label: string; className: string }> = {
  'ai-ready': { label: 'AI Ready', className: 'badge-ai-ready' },
  'in-review': { label: 'In Review', className: 'badge-in-review' },
  signed: { label: 'Doctor Signed', className: 'badge-signed' },
  certified: { label: 'Certified', className: 'badge-certified' },
  flagged: { label: 'Flagged', className: 'badge-flagged' },
}

export function StatusBadge({ status, label }: { status: ReportStatus; label?: string }) {
  const cfg = statusConfig[status]
  return (
    <span className={`badge-status ${cfg.className}`}>
      <span aria-hidden="true">●</span>
      {label ?? cfg.label}
    </span>
  )
}

const aiConfig: Record<AiResult, { label: string; className: string; icon: string }> = {
  detected: { label: 'Pneumonia Detected', className: 'ai-detected', icon: 'error' },
  suspected: { label: 'Suspected', className: 'ai-suspected', icon: 'warning' },
  clear: { label: 'Clear / Normal', className: 'ai-clear', icon: 'check_circle' },
}

export function AiResultBadge({ result, confidence }: { result: AiResult; confidence?: number }) {
  const cfg = aiConfig[result]
  return (
    <span className={`ai-result ${cfg.className}`}>
      <span className="material-icons-round text-[18px]" aria-hidden="true">
        {cfg.icon}
      </span>
      {cfg.label}
      {typeof confidence === 'number' && <span className="mono-data opacity-80">{confidence}%</span>}
    </span>
  )
}
