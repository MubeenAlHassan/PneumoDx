'use client'

import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-[#0F172A] leading-[1.08] mb-6">
          Diagnosis is urgent.
          <br />
          <span className="font-serif italic text-[#2563EB]">Make sure your reports keep up.</span>
        </h2>
        <p className="text-[17px] text-[#64748B] max-w-2xl mx-auto mb-8 leading-relaxed">
          Join care teams using PneumoScan to reduce turnaround time and deliver clinician-certified reports with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/register-hospital" className="btn-primary h-12 px-8 text-[15px] inline-flex">
            Start Free
            <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
          <Link href="/dashboard/report/preview" className="btn-secondary h-12 px-8 text-[15px] inline-flex">
            View Sample Report
          </Link>
        </div>
        <p className="mt-4 text-[13px] text-[#64748B]">No credit card required · Demo environment</p>
      </div>
    </section>
  )
}
