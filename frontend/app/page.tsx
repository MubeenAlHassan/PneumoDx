import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { SocialProof } from '@/components/social-proof'
import { Features } from '@/components/features'
import { Workflow } from '@/components/workflow'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { BackgroundShapes } from '@/components/background-shapes'

export default function Page() {
  return (
    <div className="relative">
      <BackgroundShapes />
      <Navigation />
      <Hero />
      <SocialProof />
      <Features />
      <Workflow />
      <CTA />
      <Footer />
    </div>
  )
}
