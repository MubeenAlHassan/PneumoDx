import type { Metadata } from 'next'
import { ViewTransition } from 'react'
import { AuthAside } from '@/components/auth/auth-aside'
import { RegisterHospitalForm } from '@/components/auth/register-hospital-form'

export const metadata: Metadata = {
  title: 'Register Hospital | PneumoScan',
  description: 'Onboard your hospital and create the administrator account for the PneumoScan platform.',
}

export default function RegisterHospitalPage() {
  return (
    <ViewTransition>
      <div className="grid min-h-screen lg:grid-cols-2 bg-[#F8FAFC]">
        <AuthAside
          heading="Onboard your team to"
          accent="certified AI diagnostics."
          description="Centralise X-ray records, standardise reporting across departments, and keep a tamper-evident audit trail for every case."
          points={[
            { icon: 'corporate_fare', title: 'Hospital-wide control', copy: 'One workspace for all departments.' },
            { icon: 'groups', title: 'Role-based access', copy: 'Admin, doctor, radiologist, staff.' },
            { icon: 'workspace_premium', title: 'Certified reports', copy: 'Dual sign-off with tamper-evident PDFs.' },
          ]}
        />
        <div className="flex items-center justify-center p-6 sm:p-10">
          <RegisterHospitalForm />
        </div>
      </div>
    </ViewTransition>
  )
}
