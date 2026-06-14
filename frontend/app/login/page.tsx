import type { Metadata } from 'next'
import { ViewTransition } from 'react'
import { AuthAside } from '@/components/auth/auth-aside'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Sign In | PneumoScan',
  description: 'Secure login for medical professionals to access the PneumoScan diagnostic platform.',
}

export default function LoginPage() {
  return (
    <ViewTransition>
      <div className="grid min-h-screen lg:grid-cols-2 bg-[#F8FAFC]">
        <AuthAside
          heading="Certified diagnostics with"
          accent="physician authority."
          description="AI-assisted chest X-ray analysis with doctor sign-off and hospital co-certification — built for clinical accountability."
          points={[
            { icon: 'verified_user', title: 'HIPAA-aligned', copy: 'Encrypted storage and full audit trails.' },
            { icon: 'bolt', title: 'Rapid analysis', copy: 'Confidence scoring in 8–15 seconds.' },
            { icon: 'fact_check', title: 'Dual sign-off', copy: 'Doctor signature + hospital certification.' },
          ]}
        />
        <div className="flex items-center justify-center p-6 sm:p-10">
          <LoginForm />
        </div>
      </div>
    </ViewTransition>
  )
}
