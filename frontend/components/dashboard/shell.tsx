import { BottomNav } from '@/components/dashboard/bottom-nav'
import { Sidebar } from '@/components/dashboard/sidebar'

interface DashboardShellProps {
  children: React.ReactNode
  variant?: 'doctor' | 'admin'
}

export function DashboardShell({ children, variant = 'doctor' }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar variant={variant} />
      <main className="lg:ml-[240px] min-h-screen p-6 lg:p-8 pb-24 lg:pb-8">
        <div className="max-w-[1280px] mx-auto">{children}</div>
      </main>
      <BottomNav variant={variant} />
    </div>
  )
}
