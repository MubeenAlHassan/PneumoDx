import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { SocialProof } from '@/components/social-proof'
import { Features } from '@/components/features'
import { Workflow } from '@/components/workflow'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { BackgroundShapes } from '@/components/background-shapes'
import { LandingContentSections } from '@/components/landing-content-sections'

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <BackgroundShapes />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <SocialProof />
        <Features />
        <Workflow />
        <LandingContentSections />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
