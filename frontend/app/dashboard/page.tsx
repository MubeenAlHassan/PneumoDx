import { ViewTransition } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { BackgroundShapes } from '@/components/dashboard/background-shapes'
import { Header } from '@/components/dashboard/header'
import { StatCard } from '@/components/dashboard/stat-card'
import { FeaturedAnalysis } from '@/components/dashboard/featured-analysis'
import { PatientQueue } from '@/components/dashboard/patient-queue'
import { QuickActions } from '@/components/dashboard/quick-actions'

export const metadata = {
  title: 'Dashboard | PneumoScan AI',
  description: 'Manage and monitor pneumonia diagnostic cases with AI-powered insights.',
}

export default function DashboardPage() {
  return (
    <ViewTransition>
      <div className="flex h-screen overflow-hidden bg-pneumo-bg-light dark:bg-pneumo-bg-dark">
        <BackgroundShapes />
        <Sidebar />
        <main className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 ml-20 lg:ml-24">
          <Header />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Stat Cards */}
            <StatCard 
              icon="analytics"
              label="Total Scans Analyzed"
              value="1,284"
              trend="+12%"
              colSpan="lg:col-span-3"
            />
            
            <StatCard 
              icon="psychology"
              label="AI Detection Avg."
              value="99.4%"
              colSpan="lg:col-span-3"
            />

            {/* Featured Analysis */}
            <FeaturedAnalysis />

            {/* More Stat Cards */}
            <StatCard 
              icon="pending_actions"
              label="Pending Reviews"
              value="14 Cases"
              colSpan="lg:col-span-3"
            />
            
            <StatCard 
              icon="task_alt"
              label="Weekly Completion"
              value="88%"
              colSpan="lg:col-span-3"
            />

            {/* Patient Queue */}
            <PatientQueue />

            {/* Quick Actions */}
            <QuickActions />
          </div>
        </main>
      </div>
    </ViewTransition>
  )
}
