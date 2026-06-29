'use client'

import { BottomNav } from '@/components/dashboard/bottom-nav'
import { Sidebar } from '@/components/dashboard/sidebar'
import { useAuth } from '@/contexts/auth-context'

interface DashboardShellProps {
  children: React.ReactNode
  variant?: 'doctor' | 'admin'
}

export function DashboardShell({ children, variant }: DashboardShellProps) {
  const { role } = useAuth()

  // Hospital admins always get the admin nav, including on shared routes like /dashboard/patients.
  const resolvedVariant =
    role === 'HOSPITAL_ADMIN' ? 'admin' : (variant ?? 'doctor')

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar variant={resolvedVariant} />
      <main className="lg:ml-[240px] min-h-screen p-6 lg:p-8 pb-24 lg:pb-8">
        <div className="max-w-[1280px] mx-auto">{children}</div>
      </main>
      <BottomNav variant={resolvedVariant} />
    </div>
  )
}
