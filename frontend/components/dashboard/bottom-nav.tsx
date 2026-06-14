'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const doctorLinks = [
  { href: '/dashboard/upload', icon: 'cloud_upload', label: 'Upload' },
  { href: '/dashboard/patients', icon: 'groups', label: 'Patients' },
  { href: '/dashboard/analysis', icon: 'psychology', label: 'Analysis' },
  { href: '/dashboard/report', icon: 'description', label: 'Report' },
]

const adminLinks = [
  { href: '/dashboard/admin', icon: 'dashboard', label: 'Overview' },
  { href: '/dashboard/admin/cosign', icon: 'draw', label: 'Co-sign' },
  { href: '/dashboard/admin/doctors', icon: 'medical_services', label: 'Doctors' },
  { href: '/dashboard/admin/audit', icon: 'history', label: 'Audit' },
]

interface BottomNavProps {
  variant?: 'doctor' | 'admin'
}

export function BottomNav({ variant = 'doctor' }: BottomNavProps) {
  const pathname = usePathname()
  const links = variant === 'admin' ? adminLinks : doctorLinks

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[#E2E8F0] bg-white/95 backdrop-blur-md safe-area-pb"
      aria-label="Mobile dashboard navigation"
    >
      <div className="flex items-stretch justify-around px-2 py-2">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg py-2 px-1 text-[10px] font-medium transition-colors ${
                active ? 'text-[#2563EB]' : 'text-[#64748B]'
              }`}
            >
              <span className="material-icons-round text-[22px]" aria-hidden="true">{link.icon}</span>
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
