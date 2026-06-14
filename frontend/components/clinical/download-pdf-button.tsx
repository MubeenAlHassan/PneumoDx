'use client'

import { toast } from 'sonner'

export function DownloadPdfButton() {
  return (
    <button
      type="button"
      className="btn-primary"
      onClick={() => toast.success('PDF download started', { description: 'CMC-2024-0612-001 · demo mode' })}
    >
      <span className="material-icons-round text-[18px]" aria-hidden="true">download</span>
      Download PDF
    </button>
  )
}
