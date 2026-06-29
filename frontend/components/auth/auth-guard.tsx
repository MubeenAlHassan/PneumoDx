'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { useAuth } from '@/contexts/auth-context'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, role } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      router.replace('/login')
      return
    }

    if (role === 'HOSPITAL_ADMIN' && pathname === '/dashboard') {
      router.replace('/dashboard/admin')
      return
    }

    if (role && role !== 'HOSPITAL_ADMIN' && pathname.startsWith('/dashboard/admin')) {
      router.replace('/dashboard')
    }
  }, [isAuthenticated, isLoading, pathname, role, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] text-[#64748B] text-[14px]">
        Loading session…
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
