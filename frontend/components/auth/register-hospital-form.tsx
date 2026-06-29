'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { toast } from 'sonner'

import { useAuth } from '@/contexts/auth-context'
import { ApiError } from '@/lib/api/client'

export function RegisterHospitalForm() {
  const { registerHospital } = useAuth()
  const [agreed, setAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const password = String(formData.get('password') ?? '')
    const confirmPassword = String(formData.get('confirmPassword') ?? '')

    if (password !== confirmPassword) {
      toast.error('Passwords do not match. Re-enter them and try again.')
      return
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters.')
      return
    }

    setIsLoading(true)
    try {
      await registerHospital({
        hospital_name: String(formData.get('hospitalName') ?? '').trim(),
        hospital_type: String(formData.get('hospitalType') ?? '') || null,
        registration_no: String(formData.get('registrationNo') ?? '').trim(),
        city: String(formData.get('city') ?? '').trim() || null,
        country: String(formData.get('country') ?? '').trim() || null,
        admin_name: String(formData.get('adminName') ?? '').trim(),
        admin_email: String(formData.get('adminEmail') ?? '').trim(),
        password,
      })
      toast.success('Hospital account created. Welcome to PneumoScan.')
    } catch (error) {
      const message =
        error instanceof ApiError
          ? error.message
          : 'Unable to create the hospital account. Check your connection and try again.'
      toast.error(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-xl">
      <div className="card-panel p-8">
        <h2 className="text-[20px] font-semibold text-[#0F172A]">Register your hospital</h2>
        <p className="mt-1 text-[14px] text-[#64748B]">The first account becomes your Hospital Admin. Add doctors later.</p>
        <div className="mt-4 mb-7 h-px w-full bg-[#E2E8F0]" aria-hidden="true" />

        <form onSubmit={handleSubmit} className="space-y-6" aria-label="Hospital registration form">
          <fieldset className="space-y-5">
            <legend className="field-label mb-1">Hospital Details</legend>

            <div>
              <label htmlFor="hospital-name" className="field-label">Hospital Name</label>
              <input id="hospital-name" name="hospitalName" required className="input-field" placeholder="City Medical Centre" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="hospital-type" className="field-label">Type</label>
                <select id="hospital-type" name="hospitalType" className="input-field" defaultValue="">
                  <option value="" disabled>Select type</option>
                  <option>General Hospital</option>
                  <option>Teaching Hospital</option>
                  <option>Diagnostic Centre</option>
                  <option>Clinic</option>
                </select>
              </div>
              <div>
                <label htmlFor="hospital-reg" className="field-label">Registration No.</label>
                <input id="hospital-reg" name="registrationNo" required className="input-field" placeholder="CMC-REG-00219" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="hospital-city" className="field-label">City</label>
                <input id="hospital-city" name="city" required className="input-field" placeholder="Lahore" />
              </div>
              <div>
                <label htmlFor="hospital-country" className="field-label">Country</label>
                <input id="hospital-country" name="country" required className="input-field" placeholder="Pakistan" defaultValue="Pakistan" />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="field-label mb-1">Administrator Account</legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="admin-name" className="field-label">Admin Full Name</label>
                <input id="admin-name" name="adminName" autoComplete="name" required className="input-field" placeholder="H. Sadiq" />
              </div>
              <div>
                <label htmlFor="admin-email" className="field-label">Admin Work Email</label>
                <input id="admin-email" name="adminEmail" type="email" autoComplete="email" required className="input-field" placeholder="admin@citymed.pk" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="admin-password" className="field-label">Password</label>
                <input id="admin-password" name="password" type="password" autoComplete="new-password" required minLength={8} className="input-field" placeholder="••••••••••••" />
              </div>
              <div>
                <label htmlFor="admin-confirm" className="field-label">Confirm Password</label>
                <input id="admin-confirm" name="confirmPassword" type="password" autoComplete="new-password" required minLength={8} className="input-field" placeholder="••••••••••••" />
              </div>
            </div>
          </fieldset>

          <label htmlFor="hospital-terms" className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="hospital-terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded-sm accent-[#2563EB]"
            />
            <span className="text-[13px] leading-snug text-[#64748B]">
              I agree to the{' '}
              <Link href="#" className="text-[#2563EB] hover:underline">Terms of Service</Link> and{' '}
              <Link href="#" className="text-[#2563EB] hover:underline">Data Handling Policy</Link>.
            </span>
          </label>

          <button type="submit" disabled={!agreed || isLoading} aria-busy={isLoading} className="btn-primary w-full">
            {isLoading ? 'Creating account…' : 'Create Hospital Account'}
            <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
          </button>

          <p className="text-center text-[13px] text-[#64748B]">
            Already registered?{' '}
            <Link href="/login" className="text-[#2563EB] hover:underline">Sign in</Link>
          </p>
        </form>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 border-t border-[#E2E8F0] pt-6 text-[12px] text-[#64748B]">
        <span className="material-icons-round text-[16px]" aria-hidden="true">lock</span>
        HIPAA-compliant · TLS 1.3 encrypted · Audit-logged
      </p>
    </div>
  )
}
