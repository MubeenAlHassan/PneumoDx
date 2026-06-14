import { ViewTransition } from 'react'
import Link from 'next/link'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { DownloadPdfButton } from '@/components/clinical/download-pdf-button'
import { ReportPreviewDocument } from '@/components/clinical/report-preview-document'

export const metadata = {
  title: 'Certified Report Preview | PneumoScan',
  description: 'Preview the tamper-evident certified PDF report layout.',
}

export default function ReportPreviewPage() {
  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="Final Report"
          title="Certified PDF"
          serifAccent="Preview"
          subtitle="CMC-2024-0612-001 · Ayesha Raza · MRN-20240612"
          backHref="/dashboard/report"
          backLabel="Back to Report"
          actions={<DownloadPdfButton />}
        />

        <div className="max-w-4xl mx-auto">
          <ReportPreviewDocument certified />
        </div>

        <p className="mt-6 text-center text-[13px] text-[#64748B]">
          This preview matches the exported PDF layout.{' '}
          <Link href="/dashboard/admin/cosign" className="text-[#2563EB] hover:underline">
            View co-sign workflow
          </Link>
        </p>
      </DashboardShell>
    </ViewTransition>
  )
}
