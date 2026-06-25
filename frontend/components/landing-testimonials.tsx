'use client'

import { LandingSectionHeader } from '@/components/landing-section-header'

const testimonials = [
  {
    name: 'Dr. Ahmed Raza',
    role: 'Pulmonology · City Medical Centre',
    quote:
      'After years of disconnected imaging tools, we finally have AI analysis and physician sign-off in one accountable workflow.',
  },
  {
    name: 'H. Sadiq',
    role: 'Hospital Administrator',
    quote:
      'Dual certification with audit logs gives our compliance team confidence. Reports feel like legal documents, not dashboards.',
  },
  {
    name: 'Ayesha Raza',
    role: 'Demo Case · MRN-20240612',
    quote:
      'The heatmap overlay helped our team validate the AI focus zone in seconds — not hours of back-and-forth.',
  },
]

const memberAvatars = ['AR', 'HS', 'CM', 'TI', 'SI']

export function LandingTestimonials() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <LandingSectionHeader
          eyebrow="Hear from care teams"
          title="Who chose to invest in"
          titleAccent="better diagnostics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-[#E2E8F0] bg-white/80 backdrop-blur-sm p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB] text-[13px] font-bold">
                  {t.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0F172A]">{t.name}</p>
                  <p className="text-[12px] text-[#64748B]">{t.role}</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-[#10B981]">
                  <span className="material-icons-round text-[14px]" aria-hidden="true">verified</span>
                  Verified
                </span>
              </div>
              <p className="text-[15px] text-[#475569] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {memberAvatars.map((initials) => (
              <div
                key={initials}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#DBEAFE] text-[11px] font-bold text-[#2563EB]"
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#64748B]">
            <span className="font-semibold text-[#0F172A]">450+</span> demo cases processed in validation
          </p>
        </div>
      </div>
    </section>
  )
}
