import { ViewTransition } from 'react'
import { BackgroundShapes } from '@/components/dashboard/background-shapes'
import { Sidebar } from '@/components/dashboard/sidebar'

export const metadata = {
  title: 'Create Case | PneumoScan AI',
  description: 'Create patient records and upload X-ray scans for AI analysis.',
}

export default function CreatePage() {
  return (
    <ViewTransition>
      <div className="flex h-screen overflow-hidden bg-pneumo-bg-light dark:bg-pneumo-bg-dark">
        <BackgroundShapes />
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 ml-20 lg:ml-24">
          <header className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-primary/10 text-pneumo-primary text-xs font-bold uppercase tracking-wider mb-4">
              Create
            </span>
            <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">
              New Patient <span className="font-serif italic text-pneumo-primary">Case</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Capture patient details and attach chest X-ray scans for analysis.</p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <section className="p-6 rounded-3xl glass-panel border border-slate-200/60 dark:border-slate-800/60">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Patient Record</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="create-patient-name" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Patient Name</label>
                  <input id="create-patient-name" name="patientName" className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 text-sm" placeholder="Enter full name" />
                </div>
                <div>
                  <label htmlFor="create-patient-id" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Patient ID</label>
                  <input id="create-patient-id" name="patientId" className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 text-sm" placeholder="e.g. PN-2026-1004" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="create-patient-age" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Age</label>
                    <input id="create-patient-age" name="age" type="number" min={0} className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 text-sm" placeholder="Age" />
                  </div>
                  <div>
                    <label htmlFor="create-patient-gender" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Gender</label>
                    <select id="create-patient-gender" name="gender" className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 text-sm">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="create-clinical-notes" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Clinical Notes</label>
                  <textarea id="create-clinical-notes" name="clinicalNotes" className="w-full min-h-28 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 py-3 text-sm resize-none" placeholder="Symptoms, history, and observations..." />
                </div>
              </div>
            </section>

            <section className="p-6 rounded-3xl glass-panel border border-slate-200/60 dark:border-slate-800/60">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">X-ray Upload</h2>
              <div className="space-y-4">
                <label htmlFor="create-xray-upload" className="block rounded-2xl border border-dashed border-pneumo-primary/40 bg-pneumo-primary/5 p-8 text-center cursor-pointer hover:bg-pneumo-primary/10 transition-colors">
                  <span className="inline-flex h-12 w-12 rounded-xl bg-white dark:bg-slate-900 items-center justify-center text-pneumo-primary mb-4">
                    <span className="material-icons-round" aria-hidden="true">cloud_upload</span>
                  </span>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">Drop X-ray image here or click to upload</p>
                  <p className="text-xs text-slate-500">Supported: PNG, JPG, DICOM (max 20MB)</p>
                  <input id="create-xray-upload" name="xray" type="file" accept="image/*,.dcm" className="sr-only" />
                </label>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-900/30 p-4">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Analysis Options</p>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300" role="group" aria-label="Analysis options">
                    <label htmlFor="create-severity-score" className="min-h-14 flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 cursor-pointer">
                      <span id="create-severity-score-label" className="font-medium text-slate-700 dark:text-slate-200">Run pneumonia severity score</span>
                      <span className="relative inline-flex items-center">
                        <input id="create-severity-score" defaultChecked type="checkbox" role="switch" aria-labelledby="create-severity-score-label" className="peer sr-only" />
                        <span className="h-7 w-12 rounded-full bg-slate-300/80 dark:bg-slate-700 transition-colors peer-checked:bg-pneumo-primary peer-focus-visible:ring-2 peer-focus-visible:ring-pneumo-primary/50" aria-hidden="true" />
                        <span className="absolute left-1 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5 pointer-events-none" aria-hidden="true" />
                      </span>
                    </label>
                    <label htmlFor="create-heatmap" className="min-h-14 flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 cursor-pointer">
                      <span id="create-heatmap-label" className="font-medium text-slate-700 dark:text-slate-200">Generate heatmap explanation</span>
                      <span className="relative inline-flex items-center">
                        <input id="create-heatmap" defaultChecked type="checkbox" role="switch" aria-labelledby="create-heatmap-label" className="peer sr-only" />
                        <span className="h-7 w-12 rounded-full bg-slate-300/80 dark:bg-slate-700 transition-colors peer-checked:bg-pneumo-primary peer-focus-visible:ring-2 peer-focus-visible:ring-pneumo-primary/50" aria-hidden="true" />
                        <span className="absolute left-1 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5 pointer-events-none" aria-hidden="true" />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="h-11 px-6 rounded-xl bg-pneumo-primary text-white font-semibold hover:bg-pneumo-primary/90 transition-colors">
              Save Case
            </button>
            <button className="h-11 px-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
              Save and Analyze
            </button>
          </div>
        </main>
      </div>
    </ViewTransition>
  )
}
