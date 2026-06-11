'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard')
    }, 900)
  }

  return (
    <div className="md:col-span-3">
      <div className="glass-panel rounded-xl p-10 shadow-xl shadow-pneumo-primary/5">
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-pneumo-primary mb-4 flex items-center gap-2 font-display"><span className="material-icons-round text-sm">medical_services</span>Doctor Login</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Please enter your medical credentials to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Medical ID / Email
            </label>
            <div className="relative group">
              <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pneumo-primary transition-colors">
                alternate_email
              </span>
              <input
                type="email"
                placeholder="dr.mubeen@hospital.org"
                className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-pneumo-primary/20 focus:border-pneumo-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
              <Link href="#" className="text-xs font-semibold text-pneumo-primary hover:underline transition-all">
                Forgot?
              </Link>
            </div>
            <div className="relative group">
              <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pneumo-primary transition-colors">
                lock_open
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-pneumo-primary/20 focus:border-pneumo-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <span className="material-icons-round text-xl">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-3 px-1">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-pneumo-primary focus:ring-pneumo-primary cursor-pointer"
            />
            <label htmlFor="remember" className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
              Trust this workstation for 30 days
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pneumo-primary to-blue-500 hover:to-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg shadow-pneumo-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>{isLoading ? 'Signing in...' : 'Sign In to Dashboard'}</span>
            {!isLoading && <span className="material-icons-round">arrow_forward</span>}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            New to the platform?{' '}
            <Link href="/signup" className="text-pneumo-primary hover:underline gap-1">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
