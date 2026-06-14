import Link from 'next/link'

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
            <img 
              alt="Chest X-ray" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWaTkPUEXErwkYIqoLxGjghCfLNU0PhfjCOybqCXaKZCNysChzeu_Bervd_GHxRzob-3gUQBkLC_wY1Qpim2JUQ2h0E1LspPKvn35Z64HR9HkDiEz_wjK95r7xNcIhY3bV_Gqx9ImvlREVvsptQ66hYtdK8qvrgx5FU26RQ-GaX2LF2IoETI_XjHB3mnHEskPEn3NtVfMmBbTp6eOpbIvX8W7SYwVTDDdbD40W6PGIjsYgOrOh0yZg9Fy7EQgXqD7b4apdC_Ss4-I"
            />
            <div className="absolute inset-0 bg-[#2563EB]/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></span>
              <span className="label-clinical text-white">Critical Anomaly</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h3 className="text-[18px] font-semibold text-[#0F172A] mb-2">Patient ID: <span className="mono-data text-[#2563EB]">#XR-8821</span></h3>
            <p className="text-[14px] text-[#64748B] mb-4 leading-relaxed">AI has detected consolidation in the lower right lobe with 92% confidence level. Immediate radiologist review required.</p>
            <Link href="/dashboard/analysis" className="btn-primary w-full h-10">
              Full Diagnosis
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
