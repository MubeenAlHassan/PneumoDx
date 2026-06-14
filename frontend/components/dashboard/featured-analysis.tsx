import Link from 'next/link'
import { XrayViewer } from '@/components/clinical/xray-viewer'

export function FeaturedAnalysis() {
  return (
    <div className="lg:col-span-6 lg:row-span-2 p-6 rounded-md relative overflow-hidden group bg-[#FFFFFF] border border-[#E2E8F0]">
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <span className="label-clinical bg-[#EFF6FF] text-[#2563EB] px-3 py-1 rounded-full border border-[#BFDBFE]">AI Heatmap Focus</span>
          <button type="button" aria-label="View analysis in fullscreen" className="text-[#64748B] hover:text-[#2563EB] transition-colors rounded-sm p-1">
            <span className="material-icons-round" aria-hidden="true">fullscreen</span>
          </button>
        </div>
        <div className="flex-1 flex gap-6">
          <div className="w-1/2 rounded-lg overflow-hidden relative border border-[#E2E8F0]">
            <XrayViewer viewMode="heatmap" variant="compact" showCorners={false} showZoneLabel />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h3 className="text-[18px] font-semibold text-[#0F172A] mb-2">
              Patient ID: <span className="mono-data text-[#2563EB]">MRN-20240612</span>
            </h3>
            <p className="text-[14px] text-[#64748B] mb-4 leading-relaxed">
              AI has detected consolidation in the lower right lobe with 94.2% confidence level. Immediate radiologist review required.
            </p>
            <Link href="/dashboard/analysis" className="btn-primary w-full h-10">
              Full Diagnosis
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
