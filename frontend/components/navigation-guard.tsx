'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/navigation'

export function NavigationGuard() {
  const pathname = usePathname()

  const hideOn = ['/dashboard', '/login', '/signup', '/register-hospital']
  if (pathname && hideOn.some((p) => pathname.startsWith(p))) {
    return null
  }

  return <Navigation />
}
