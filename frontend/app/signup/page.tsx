import type { Metadata } from 'next'
import { ViewTransition } from 'react'
import { AuthAside } from '@/components/auth/auth-aside'
import { SignupForm } from '@/components/auth/signup-form'

export const metadata: Metadata = {
  title: 'Register Hospital | PneumoScan',
  description: 'Create your professional account to access the PneumoScan pneumonia detection platform.',
}

export default function SignupPage() {
  return (
    <ViewTransition>
      <div className="grid min-h-screen lg:grid-cols-2 bg-[#F8FAFC]">
        <AuthAside
          heading="Join the next generation of"
          accent="clinical AI diagnostics."
          description="Register your hospital and doctors to centralise X-ray records, standardise reporting, and ensure tamper-evident audit trails."
          points={[
            { icon: 'workspace_premium', title: 'Certified reports', copy: 'Tamper-evident PDF generation.' },
            { icon: 'groups', title: 'Role-based access', copy: 'Admin, doctor, radiologist, staff.' },
            { icon: 'shield', title: 'Audit-ready', copy: 'Full activity logs for compliance.' },
          ]}
        />
        <div className="flex items-center justify-center p-6 sm:p-10">
          <SignupForm />
        </div>
      </div>
    </ViewTransition>
  )
}
