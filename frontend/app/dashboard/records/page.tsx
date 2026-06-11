import { BackgroundShapes } from '@/components/dashboard/background-shapes'
import { Sidebar } from '@/components/dashboard/sidebar'

const records = [
  { id: '#XR-0012', patient: 'Sarah Mitchell', date: '2026-06-11', result: 'Positive', confidence: '94%' },
  { id: '#XR-0013', patient: 'Robert Klose', date: '2026-06-11', result: 'Negative', confidence: '91%' },
  { id: '#XR-0014', patient: 'Elena Lopez', date: '2026-06-10', result: 'Review Required', confidence: '67%' },
  { id: '#XR-0015', patient: 'Aisha Khan', date: '2026-06-10', result: 'Positive', confidence: '89%' },
]

export const metadata = {
  title: 'Records | PneumoScan AI',
  description: 'Browse and manage analyzed scan records.',
}

export default function RecordsPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-pneumo-bg-light dark:bg-pneumo-bg-dark">
      <BackgroundShapes />
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 lg:p-10 ml-20 lg:ml-24">
        <header className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-primary/10 text-pneumo-primary text-xs font-bold uppercase tracking-wider mb-4">
            Records
          </span>
          <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">
            Diagnostic <span className="font-serif italic text-pneumo-primary">History</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Review historical scan results and filter cases for follow-up.</p>
        </header>

        <section className="rounded-3xl overflow-hidden glass-panel border border-slate-200/60 dark:border-slate-800/60">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Recent Analysis Records</p>
            <button className="h-10 px-4 rounded-xl bg-pneumo-primary text-white text-sm font-semibold hover:bg-pneumo-primary/90 transition-colors">
              Export CSV
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-50 dark:border-slate-800">
                  <th className="px-6 py-3.5 font-bold">Record ID</th>
                  <th className="px-6 py-3.5 font-bold">Patient</th>
                  <th className="px-6 py-3.5 font-bold">Date</th>
                  <th className="px-6 py-3.5 font-bold">Result</th>
                  <th className="px-6 py-3.5 font-bold">Confidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {records.map((record) => (
                  <tr key={record.id} className="hover:bg-pneumo-primary/5 transition-colors">
                    <td className="px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100">{record.id}</td>
                    <td className="px-6 py-3.5 text-sm text-slate-600 dark:text-slate-300">{record.patient}</td>
                    <td className="px-6 py-3.5 text-sm text-slate-500">{record.date}</td>
                    <td className="px-6 py-3.5 text-sm text-slate-600 dark:text-slate-300">{record.result}</td>
                    <td className="px-6 py-3.5 text-sm font-semibold text-pneumo-primary">{record.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
