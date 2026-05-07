'use client'

import React from "react"

import { FormEvent, useState } from 'react'

export function SignupForm() {
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
    // Handle form submission here
  }

  return (
    <div className="lg:col-span-3">
      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
        {/* Personal Info Card */}
        <div className="col-span-12 md:col-span-7 glass-panel rounded-xl p-6 shadow-xl shadow-signup-primary/5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-pneumo-primary mb-4 flex items-center gap-2 font-display">
            <span className="material-icons-round text-sm">person</span> Practitioner Identity
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 font-display">
                Full Professional Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Dr. Sarah Jenkins"
                className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 font-display">
                Medical License ID
              </label>
              <input
                type="text"
                name="licenseId"
                value={formData.licenseId}
                onChange={handleChange}
                placeholder="MD-123-456-789"
                className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Hospital Image Card */}
        <div className="col-span-12 md:col-span-5 glass-panel rounded-xl overflow-hidden relative group shadow-xl shadow-signup-primary/5">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop"
            alt="Modern high-tech hospital corridor with blue lighting"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-signup-primary/20 mix-blend-multiply" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-full text-xs font-bold text-pneumo-primary uppercase font-display">
              Innovation Center
            </span>
          </div>
        </div>

        {/* Workplace Card */}
        <div className="col-span-12 md:col-span-5 glass-panel rounded-xl p-6 shadow-xl shadow-signup-primary/5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-pneumo-primary mb-4 flex items-center gap-2 font-display">
            <span className="material-icons-round text-sm">apartment</span> Workplace
          </h3>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 font-display">
              Primary Affiliation
            </label>
            <select
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
            >
              <option>Select Hospital</option>
              <option>Mayo Clinic</option>
              <option>Cleveland Clinic</option>
              <option>Johns Hopkins Hospital</option>
              <option>Massachusetts General Hospital</option>
            </select>
            <p className="text-xs text-slate-500 mt-2 leading-tight">
              Can't find your hospital?{' '}
              <a href="#" className="text-pneumo-primary hover:underline font-semibold">
                Register your institution.
              </a>
            </p>
          </div>
        </div>

        {/* Credentials Card */}
        <div className="col-span-12 md:col-span-7 glass-panel rounded-xl p-6 shadow-xl shadow-signup-primary/5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-pneumo-primary mb-4 flex items-center gap-2 font-display">
            <span className="material-icons-round text-sm">lock</span> Secure Credentials
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 font-display">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah.j@hospital.org"
                className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 font-display">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-signup-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="col-span-12 flex flex-col md:flex-row items-center justify-between gap-6 glass-panel rounded-xl p-6 border-signup-primary/20">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-5 h-5 rounded text-pneumo-primary border-slate-300 focus:ring-signup-primary bg-white/50"
            />
            <label className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
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
            <span className="material-icons-round group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </form>

      {/* Bottom Nav */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium font-display">
        <span className="text-slate-500">Already have a professional account?</span>
        <a href="/login" className="text-pneumo-primary hover:underline flex items-center gap-1">
          Login
          <span className="material-icons-round text-sm">login</span>
        </a>
      </div>
    </div>
  )
}
