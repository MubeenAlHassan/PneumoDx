'use client'

import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner'

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    licenseId: '',
    hospital: '',
    email: '',
    password: '',
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.message('Doctor accounts are created by your hospital admin.', {
      description: 'Sign in if you already have credentials, or register your hospital first.',
    })
  }

  return (
    <div className="w-full max-w-md">
      <div className="card-panel p-8">
        <h2 className="text-[20px] font-semibold text-[#0F172A]">Register your hospital account</h2>
        <div className="mt-2 mb-7 h-px w-28 bg-[#E2E8F0]" aria-hidden="true" />

        <form onSubmit={handleSubmit} className="space-y-5" aria-label="Hospital registration form">
          <div>
            <label htmlFor="signup-fullName" className="field-label">
              Full Professional Name
            </label>
            <input
              id="signup-fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
              required
              placeholder="Dr. Ahmed Raza"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="signup-licenseId" className="field-label">
              PMDC / Medical License No.
            </label>
            <input
              id="signup-licenseId"
              type="text"
              name="licenseId"
              value={formData.licenseId}
              onChange={handleChange}
              required
              placeholder="PMDC-49281"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="signup-hospital" className="field-label">
              Hospital / Institution
            </label>
            <select
              id="signup-hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select hospital</option>
              <option value="city-medical">City Medical Centre</option>
              <option value="shifa">Shifa International</option>
              <option value="aku">Aga Khan University Hospital</option>
              <option value="pims">PIMS Islamabad</option>
            </select>
          </div>

          <div>
            <label htmlFor="signup-email" className="field-label">
              Work Email
            </label>
            <input
              id="signup-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              placeholder="dr.ahmed@citymed.pk"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="field-label">
              Password
            </label>
            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
                placeholder="••••••••••••"
                className="input-field pr-16"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] font-medium uppercase tracking-[0.05em] text-[#2563EB] hover:underline rounded-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <label htmlFor="signup-terms" className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="signup-terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded-sm accent-[#2563EB]"
            />
            <span className="text-[13px] leading-snug text-[#64748B]">
              I agree to the{' '}
              <Link href="#" className="text-[#2563EB] hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="text-[#2563EB] hover:underline">
                Data Handling Policy
              </Link>
              .
            </span>
          </label>

          <button type="submit" disabled={!formData.termsAccepted} className="btn-primary w-full">
            Create Account
            <span className="material-icons-round text-[18px]" aria-hidden="true">
              arrow_forward
            </span>
          </button>

          <p className="text-center text-[13px] text-[#64748B]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#2563EB] hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 border-t border-[#E2E8F0] pt-6 text-[12px] text-[#64748B]">
        <span className="material-icons-round text-[16px]" aria-hidden="true">
          lock
        </span>
        HIPAA-compliant · TLS 1.3 encrypted · Audit-logged
      </p>
    </div>
  )
}
