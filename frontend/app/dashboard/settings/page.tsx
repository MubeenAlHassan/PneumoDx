import { ViewTransition } from 'react'
import { BackgroundShapes } from '@/components/dashboard/background-shapes'
import { Sidebar } from '@/components/dashboard/sidebar'

export const metadata = {
  title: 'Settings | PneumoScan AI',
  description: 'Manage account, notification, and security preferences.',
}

export default function SettingsPage() {
  const toggleItems = [
    {
      id: 'settings-2fa',
      title: 'Two-factor authentication',
      description: 'Recommended for medical accounts',
      enabled: true,
    },
    {
      id: 'settings-email-notifications',
      title: 'Email notifications',
      description: 'Get notified for urgent cases',
      enabled: true,
    },
    {
      id: 'settings-weekly-reports',
      title: 'Weekly reports',
      description: 'Send summary to your inbox',
      enabled: false,
    },
  ]

  return (
    <ViewTransition>
      <div className="flex h-screen overflow-hidden bg-pneumo-bg-light dark:bg-pneumo-bg-dark">
        <BackgroundShapes />
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 ml-20 lg:ml-24">
          <header className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-primary/10 text-pneumo-primary text-xs font-bold uppercase tracking-wider mb-4">
              Settings
            </span>
            <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">
              Profile & <span className="font-serif italic text-pneumo-primary">Preferences</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Control profile details, alerts, and security options.</p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <section className="p-6 rounded-3xl glass-panel border border-slate-200/60 dark:border-slate-800/60">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Profile</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="settings-profile-image" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Profile Image</label>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pneumo-primary/20" aria-hidden="true">
                      <img
                        alt=""
                        role="presentation"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhyVoNxLfqx1GuA5qFQ0QNb1ueno7vC-veibd0CQMZWhjW_CnVfJ5dzO46yTCxrbaRHz5J-ijCHhyPoTlUs2k70rsK6WIRYHx6eajoxDhywh1OYzmb7fgTaM5MJdZXuxpKZVv4ofwF9xOX8m4Mv1Dkwgb9riBzuf83HH50CmAvsZiIenfzjp5OG1XGgC-xw5eK7ySwlDcvlPZhVNzV6QMiybhLOJ3pyFnaQ283ej22_aX99W0CPg-vS39fmDVmOwOXksQcVI47vqo"
                        width={56}
                        height={56}
                      />
                    </div>
                    <input
                      id="settings-profile-image"
                      name="profileImage"
                      type="file"
                      accept="image/*"
                      className="block w-full text-sm text-slate-500 dark:text-slate-300 file:mr-4 file:h-10 file:rounded-xl file:border-0 file:bg-pneumo-primary file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-pneumo-primary/90"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="settings-full-name" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Full Name</label>
                  <input id="settings-full-name" name="fullName" autoComplete="name" className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 text-sm" defaultValue="Dr. Mubeen Hassan" />
                </div>
                <div>
                  <label htmlFor="settings-email" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Email</label>
                  <input id="settings-email" name="email" type="email" autoComplete="email" className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 text-sm" defaultValue="dr.mubeen@hospital.org" />
                </div>
                <div>
                  <label htmlFor="settings-hospital" className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Hospital</label>
                  <input id="settings-hospital" name="hospital" className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 text-sm" defaultValue="PneumoDx Teaching Hospital" />
                </div>
              </div>
            </section>

            <section className="p-6 rounded-3xl glass-panel border border-slate-200/60 dark:border-slate-800/60">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Security & Alerts</h2>
              <div className="space-y-4" role="group" aria-label="Security and notification preferences">
                {toggleItems.map((item) => (
                  <label
                    key={item.id}
                    htmlFor={item.id}
                    className="min-h-16 flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-900/30 cursor-pointer"
                  >
                    <div>
                      <p id={`${item.id}-label`} className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.title}</p>
                      <p id={`${item.id}-desc`} className="text-xs text-slate-500">{item.description}</p>
                    </div>
                    <span className="relative inline-flex items-center">
                      <input
                        id={item.id}
                        defaultChecked={item.enabled}
                        type="checkbox"
                        role="switch"
                        aria-labelledby={`${item.id}-label`}
                        aria-describedby={`${item.id}-desc`}
                        className="peer sr-only"
                      />
                      <span className="h-7 w-12 rounded-full bg-slate-300/80 dark:bg-slate-700 transition-colors peer-checked:bg-pneumo-primary peer-focus-visible:ring-2 peer-focus-visible:ring-pneumo-primary/50" aria-hidden="true" />
                      <span className="absolute left-1 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5 pointer-events-none" aria-hidden="true" />
                    </span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6">
            <button className="h-11 px-6 rounded-xl bg-pneumo-primary text-white font-semibold hover:bg-pneumo-primary/90 transition-colors">
              Save Settings
            </button>
          </div>
        </main>
      </div>
    </ViewTransition>
  )
}
