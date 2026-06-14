'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
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
    <div className="w-full max-w-md">
      <div className="card-panel p-8">
        <h2 className="text-[20px] font-semibold text-[#0F172A]">Sign in to your account</h2>
        <div className="mt-2 mb-7 h-px w-28 bg-[#E2E8F0]" aria-hidden="true" />

        <form onSubmit={handleSubmit} className="space-y-5" aria-label="Sign in form">
          <div>
            <label htmlFor="login-email" className="field-label">
              Email / Medical ID
            </label>
            <input
              id="login-email"
              name="email"
              type="text"
              autoComplete="username"
              required
              placeholder="dr.ahmed@citymed.pk"
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="field-label">
              Password
            </label>
            <div className="relative">
              <input
                id="login-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
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

          <button type="submit" disabled={isLoading} aria-busy={isLoading} className="btn-primary w-full">
            {isLoading ? 'Signing in…' : 'Sign In to PneumoScan'}
          </button>

          <div className="flex items-center justify-between text-[13px]">
            <Link href="#" className="btn-ghost">
              Forgot password?
            </Link>
            <Link href="/register-hospital" className="btn-ghost">
              Register hospital
              <span className="material-icons-round text-[16px]" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3 py-1">
            <span className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
            <span className="mono-data text-[#64748B]">OR</span>
            <span className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 h-11 rounded-sm border border-[#E2E8F0] bg-transparent text-[14px] font-medium text-[#0F172A] transition-colors hover:border-[#2563EB]"
          >
            <span className="material-icons-round text-[18px]" aria-hidden="true">
              vpn_key
            </span>
            Sign in with Hospital SSO
          </button>
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
