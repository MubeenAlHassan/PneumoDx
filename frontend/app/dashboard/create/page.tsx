import { ViewTransition } from 'react'
import Link from 'next/link'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'

export const metadata = {
  title: 'Register Patient | PneumoScan',
  description: 'Register a new patient and capture clinical details before scan upload.',
}

const priorities = [
  { id: 'routine', label: 'Routine', defaultChecked: true },
  { id: 'urgent', label: 'Urgent', defaultChecked: false },
  { id: 'emergency', label: 'Emergency', defaultChecked: false },
]

export default function CreatePage() {
  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="Patient Management"
          title="Register New"
          serifAccent="Patient"
          subtitle="Capture demographic and clinical details to open a new case."
          backHref="/dashboard/patients"
          backLabel="Back to Patients"
        />

        <form className="space-y-6">
          <section className="card-panel p-6">
            <h2 className="text-[18px] font-semibold text-[#0F172A]">Patient Information</h2>
            <div className="mt-1 mb-6 h-px bg-[#E2E8F0]" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="first-name" className="field-label">First Name</label>
                <input id="first-name" name="firstName" className="input-field" placeholder="Ayesha" />
              </div>
              <div>
                <label htmlFor="last-name" className="field-label">Last Name</label>
                <input id="last-name" name="lastName" className="input-field" placeholder="Raza" />
              </div>
              <div>
                <label htmlFor="dob" className="field-label">Date of Birth</label>
                <input id="dob" name="dob" type="date" className="input-field" />
              </div>
              <div>
                <label htmlFor="gender" className="field-label">Gender</label>
                <select id="gender" name="gender" className="input-field" defaultValue="">
                  <option value="" disabled>Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="cnic" className="field-label">CNIC / National ID (optional)</label>
                <input id="cnic" name="cnic" className="input-field" placeholder="35202-XXXXXXX-X" />
              </div>
              <div>
                <label htmlFor="contact" className="field-label">Contact Number</label>
                <input id="contact" name="contact" type="tel" className="input-field" placeholder="+92 300 XXXXXXX" />
              </div>
            </div>
          </section>

          <section className="card-panel p-6">
            <h2 className="text-[18px] font-semibold text-[#0F172A]">Clinical Details</h2>
            <div className="mt-1 mb-6 h-px bg-[#E2E8F0]" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="referring-doctor" className="field-label">Referring Doctor</label>
                <select id="referring-doctor" name="referringDoctor" className="input-field" defaultValue="">
                  <option value="" disabled>Select doctor</option>
                  <option>Dr. Ahmed Raza</option>
                  <option>Dr. Sara Khan</option>
                  <option>Dr. Imran Ali</option>
                </select>
              </div>
              <div>
                <label htmlFor="ward" className="field-label">Ward / Department</label>
                <select id="ward" name="ward" className="input-field" defaultValue="">
                  <option value="" disabled>Select department</option>
                  <option>Pulmonology</option>
                  <option>Radiology</option>
                  <option>General Medicine</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="complaint" className="field-label">Chief Complaint / Symptoms</label>
              <textarea
                id="complaint"
                name="complaint"
                rows={3}
                className="input-field"
                placeholder="Persistent cough, fever for 5 days, low oxygen saturation. No prior TB history."
              />
            </div>

            <div className="mt-6">
              <span className="field-label">Priority</span>
              <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Priority">
                {priorities.map((p) => (
                  <label
                    key={p.id}
                    htmlFor={`priority-${p.id}`}
                    className="flex items-center gap-2.5 h-11 px-4 rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] cursor-pointer text-[14px] text-[#0F172A] has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF6FF] transition-colors"
                  >
                    <input
                      id={`priority-${p.id}`}
                      type="radio"
                      name="priority"
                      defaultChecked={p.defaultChecked}
                      className="h-4 w-4 accent-[#2563EB]"
                    />
                    {p.label}
                  </label>
                ))}
              </div>
            </div>
          </section>

          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn-secondary">Save as Draft</button>
            <Link href="/dashboard/upload" className="btn-primary">
              Register Patient &amp; Upload Scan
              <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </form>
      </DashboardShell>
    </ViewTransition>
  )
}
