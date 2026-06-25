'use client'

import Link from 'next/link'

export function LandingMission() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] mb-6">Our mission</p>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-[#0F172A] leading-[1.12] mb-8">
          PneumoScan exists so hospitals don&apos;t have to choose between{' '}
          <span className="font-serif italic text-[#2563EB]">speed and accountability.</span>
        </h2>
        <blockquote className="text-[17px] md:text-[18px] text-[#475569] leading-relaxed mb-8">
          &ldquo;AI can flag pneumonia in seconds — but patients deserve a signed report, not a probability score.
          We built PneumoScan to bridge that gap with clinician authority at every step.&rdquo;
        </blockquote>
        <p className="text-[14px] font-semibold text-[#0F172A] mb-1">PneumoScan Clinical Team</p>
        <p className="text-[13px] text-[#64748B] mb-10">Final Year Project · Premium Clinical Interface</p>
        <Link href="/register-hospital" className="btn-primary h-12 px-8 text-[15px] inline-flex">
          Register Your Hospital
          <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
        </Link>
        <p className="mt-3 text-[13px] text-[#64748B]">No credit card required · Demo environment</p>
      </div>
    </section>
  )
}
