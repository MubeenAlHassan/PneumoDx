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
            iconBgColor="bg-blue-50 dark:bg-blue-900/20"
            iconColor="text-pneumo-primary"
            label="Total Scans Analyzed"
            value="1,284"
            trend="+12%"
            trendColor="emerald"
            colSpan="lg:col-span-3"
          />
          
          <StatCard 
            icon="psychology"
            iconBgColor="bg-purple-50 dark:bg-purple-900/20"
            iconColor="text-purple-600"
            label="AI Detection Avg."
            value="99.4%"
            colSpan="lg:col-span-3"
          />

          {/* Featured Analysis */}
          <FeaturedAnalysis />

          {/* More Stat Cards */}
          <StatCard 
            icon="pending_actions"
            iconBgColor="bg-amber-50 dark:bg-amber-900/20"
            iconColor="text-amber-600"
            label="Pending Reviews"
            value="14 Cases"
            colSpan="lg:col-span-3"
          />
          
          <StatCard 
            icon="task_alt"
            iconBgColor="bg-emerald-50 dark:bg-emerald-900/20"
            iconColor="text-emerald-600"
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
  )
}
