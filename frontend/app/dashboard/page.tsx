import { ViewTransition } from 'react'
import { DashboardShell } from '@/components/dashboard/shell'
import { Header } from '@/components/dashboard/header'
import { StatCard } from '@/components/dashboard/stat-card'
import { FeaturedAnalysis } from '@/components/dashboard/featured-analysis'
import { PatientQueue } from '@/components/dashboard/patient-queue'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { RecentActivity } from '@/components/dashboard/recent-activity'

export const metadata = {
  title: 'Dashboard | PneumoScan',
  description: 'Manage and monitor pneumonia diagnostic cases with AI-powered insights.',
}

export default function DashboardPage() {
  return (
    <ViewTransition>
      <DashboardShell variant="doctor">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <StatCard icon="pending_actions" label="Pending · AI Ready" value="12" trend="+3 today" colSpan="lg:col-span-3" />
          <StatCard icon="rate_review" label="In Review" value="4" colSpan="lg:col-span-3" />

          <FeaturedAnalysis />

          <StatCard icon="draw" label="Awaiting My Sign" value="2" colSpan="lg:col-span-3" />
          <StatCard icon="task_alt" label="Total This Week" value="38" colSpan="lg:col-span-3" />

          <PatientQueue />
          <QuickActions />

          <RecentActivity />
        </div>
      </DashboardShell>
    </ViewTransition>
  )
}
