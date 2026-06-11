'use client'

import Link from 'next/link'
import React, { FormEvent, useState } from 'react'

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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="lg:col-span-3">
      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-5" aria-label="Doctor registration form">
        <div className="col-span-12 glass-panel rounded-xl p-6 shadow-xl shadow-signup-primary/5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-pneumo-primary mb-4 flex items-center gap-2 font-display">
            <span className="material-icons-round text-sm" aria-hidden="true">person</span>
            Practitioner Identity
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="signup-fullName" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 font-display">
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
                placeholder="Dr. Sarah Jenkins"
                className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="signup-licenseId" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 font-display">
                Medical License ID
              </label>
              <input
                id="signup-licenseId"
                type="text"
                name="licenseId"
                value={formData.licenseId}
                onChange={handleChange}
                required
                placeholder="MD-123-456-789"
                className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pneumo-primary mb-4 flex items-center gap-2 font-display">
              <span className="material-icons-round text-sm" aria-hidden="true">apartment</span>
              Workplace
            </h2>
            <div>
              <label htmlFor="signup-hospital" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 font-display">
                Primary Affiliation
              </label>
              <select
                id="signup-hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                required
                className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
              >
                <option value="">Select Hospital</option>
                <option value="mayo">Mayo Clinic</option>
                <option value="cleveland">Cleveland Clinic</option>
                <option value="hopkins">Johns Hopkins Hospital</option>
                <option value="mgh">Massachusetts General Hospital</option>
              </select>
              <p className="text-xs text-slate-500 mt-2 leading-tight">
                Can&apos;t find your hospital?{' '}
                <a href="#" className="text-pneumo-primary hover:underline font-semibold">
                  Register your institution.
                </a>
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pneumo-primary mb-4 flex items-center gap-2 font-display">
              <span className="material-icons-round text-sm" aria-hidden="true">lock</span>
              Secure Credentials
            </h2>
            <div className="grid md:grid-cols-1 gap-4">
              <div>
                <label htmlFor="signup-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 font-display">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pneumo-primary transition-colors" aria-hidden="true">
                    alternate_email
                  </span>
                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    placeholder="sarah.j@hospital.org"
                    className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg pl-11 px-4 py-3 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 font-display">
                  Password
                </label>
                <div className="relative group">
                  <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pneumo-primary transition-colors" aria-hidden="true">
                    lock_open
                  </span>
                  <input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg pl-12 px-4 py-3 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-md"
                  >
                    <span className="material-icons-round text-xl" aria-hidden="true">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-center gap-2 text-sm font-medium font-display">
            <span className="text-slate-500">Already have a professional account?</span>
            <Link href="/login" className="text-pneumo-primary hover:underline">
              Login
            </Link>
          </div>
        </div>

        <div className="col-span-12 flex flex-col md:flex-row items-center justify-between gap-6 glass-panel rounded-xl p-6 border-signup-primary/20">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="signup-terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-5 h-5 rounded text-pneumo-primary border-slate-300 focus:ring-signup-primary bg-white/50"
            />
            <label htmlFor="signup-terms" className="text-sm text-slate-600 dark:text-slate-400 leading-snug cursor-pointer">
              I agree to the{' '}
              <a href="#" className="text-pneumo-primary font-semibold hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-pneumo-primary font-semibold hover:underline">
                Data Handling Policy
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            disabled={!formData.termsAccepted}
            className="w-full md:w-auto bg-pneumo-primary hover:bg-pneumo-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-10 rounded-lg transition-all shadow-lg shadow-signup-primary/25 flex items-center justify-center gap-2 group font-display submit"
          >
            Create Account
            <span className="material-icons-round group-hover:translate-x-1 transition-transform" aria-hidden="true">
              arrow_forward
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}
