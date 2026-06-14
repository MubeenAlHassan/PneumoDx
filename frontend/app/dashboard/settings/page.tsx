import { ViewTransition } from 'react'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { ComplianceBadges } from '@/components/clinical/compliance-badges'

export const metadata = {
  title: 'Settings | PneumoScan',
  description: 'Manage account, notification, and security preferences.',
}

const toggleItems = [
  { id: 'settings-2fa', title: 'Two-factor authentication', description: 'Recommended for medical accounts', enabled: true },
  { id: 'settings-email-notifications', title: 'Email notifications', description: 'Get notified for urgent cases', enabled: true },
  { id: 'settings-weekly-reports', title: 'Weekly reports', description: 'Send summary to your inbox', enabled: false },
]

export default function SettingsPage() {
  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="Settings"
          title="Profile &"
          serifAccent="Preferences"
          subtitle="Control profile details, alerts, and security options."
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <section className="card-panel p-6">
            <h2 className="text-[18px] font-semibold text-[#0F172A] mb-6">Profile</h2>
            <div className="space-y-5">
              <div>
                <label htmlFor="settings-profile-image" className="field-label">
                  Profile Image
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E2E8F0]" aria-hidden="true">
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
                    className="block w-full text-[13px] text-[#64748B] file:mr-4 file:h-10 file:rounded-sm file:border-0 file:bg-[#2563EB] file:px-4 file:text-[13px] file:font-medium file:text-white hover:file:bg-[#1D4ED8] file:cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="settings-full-name" className="field-label">
                  Full Name
                </label>
                <input id="settings-full-name" name="fullName" autoComplete="name" className="input-field" defaultValue="Dr. Mubeen Hassan" />
              </div>
              <div>
                <label htmlFor="settings-email" className="field-label">
                  Email
                </label>
                <input id="settings-email" name="email" type="email" autoComplete="email" className="input-field" defaultValue="dr.mubeen@citymed.pk" />
              </div>
              <div>
                <label htmlFor="settings-hospital" className="field-label">
                  Hospital
                </label>
                <input id="settings-hospital" name="hospital" className="input-field" defaultValue="City Medical Centre" />
              </div>
            </div>
          </section>

          <section className="card-panel p-6">
            <h2 className="text-[18px] font-semibold text-[#0F172A] mb-6">Security &amp; Alerts</h2>
            <div className="space-y-3" role="group" aria-label="Security and notification preferences">
              {toggleItems.map((item) => (
                <label
                  key={item.id}
                  htmlFor={item.id}
                  className="flex items-center justify-between gap-4 p-4 rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] cursor-pointer"
                >
                  <div>
                    <p id={`${item.id}-label`} className="text-[14px] font-medium text-[#0F172A]">
                      {item.title}
                    </p>
                    <p id={`${item.id}-desc`} className="text-[13px] text-[#64748B]">
                      {item.description}
                    </p>
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
                    <span className="h-6 w-11 rounded-full bg-[#E2E8F0] transition-colors peer-checked:bg-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB]/50" aria-hidden="true" />
                    <span className="absolute left-1 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5 pointer-events-none" aria-hidden="true" />
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
              <p className="label-clinical text-[#64748B] mb-3">Compliance</p>
              <ComplianceBadges />
            </div>
          </section>
        </div>

        <div className="mt-6">
          <button className="btn-primary">Save Settings</button>
        </div>
      </DashboardShell>
    </ViewTransition>
  )
}
