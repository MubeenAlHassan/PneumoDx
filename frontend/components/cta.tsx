'use client'

import Link from 'next/link'

export function CTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 my-28">
      <div className="rounded-2xl p-12 md:p-16 text-center text-white relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] shadow-blue-glow">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
            Ready to evolve your clinical <span className="text-white/80">standards?</span>
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join care teams using PneumoScan to reduce turnaround time and deliver clinician-certified reports with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/register-hospital" className="inline-flex items-center justify-center gap-2 bg-white text-pneumo-primary h-12 px-6 rounded-md font-semibold text-[15px] hover:bg-slate-50 transition-colors shadow-xl">
              Register Hospital
              <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
            <Link href="/dashboard/report/preview" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-white/40 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors">
              View Sample Report
            </Link>
            <Link href="/login" className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-white/20 text-white/90 font-semibold text-[15px] hover:bg-white/10 transition-colors">
              Doctor Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
