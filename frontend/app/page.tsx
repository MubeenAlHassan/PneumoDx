import { Hero } from '@/components/hero'
import { LandingComparison } from '@/components/landing-comparison'
import { Workflow } from '@/components/workflow'
import { Features } from '@/components/features'
import { LandingStats } from '@/components/landing-stats'
import { LandingTestimonials } from '@/components/landing-testimonials'
import { LandingContentSections } from '@/components/landing-content-sections'
import { LandingFaq } from '@/components/landing-faq'
import { LandingMission } from '@/components/landing-mission'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { BackgroundShapes } from '@/components/background-shapes'

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <BackgroundShapes />
      <div className="relative z-10">
        <Hero />
        <LandingComparison />
        <Workflow />
        <Features />
        <LandingStats />
        <LandingTestimonials />
        <LandingContentSections />
        <LandingFaq />
        <LandingMission />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
