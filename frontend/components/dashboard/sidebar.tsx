'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { href: string; icon: string; title: string }
type Variant = 'doctor' | 'admin'

const doctorNav: NavItem[] = [
  { href: '/dashboard', icon: 'dashboard', title: 'Dashboard' },
  { href: '/dashboard/patients', icon: 'groups', title: 'Patients' },
  { href: '/dashboard/create', icon: 'person_add', title: 'Register Patient' },
  { href: '/dashboard/records', icon: 'image', title: 'Scans' },
  { href: '/dashboard/report', icon: 'description', title: 'Reports' },
]

const adminNav: NavItem[] = [
  { href: '/dashboard/admin', icon: 'corporate_fare', title: 'Overview' },
  { href: '/dashboard/admin/doctors', icon: 'badge', title: 'Doctors' },
  { href: '/dashboard/patients', icon: 'groups', title: 'Patients' },
  { href: '/dashboard/admin/cosign', icon: 'verified', title: 'Co-Sign Reports' },
  { href: '/dashboard/admin/audit', icon: 'history', title: 'Audit Log' },
]

const exactRoots = ['/dashboard', '/dashboard/admin']

export function Sidebar({ variant = 'doctor' }: { variant?: Variant }) {
  const pathname = usePathname()
  const navItems = variant === 'admin' ? adminNav : doctorNav
  const profile =
    variant === 'admin'
      ? { name: 'H. Sadiq', role: 'Hospital Admin' }
      : { name: 'Dr. Mubeen', role: 'Settings' }

  const isActive = (href: string) =>
    exactRoots.includes(href) ? pathname === href : pathname === href || pathname?.startsWith(`${href}/`)

  return (
    <aside
      className="w-[240px] hidden lg:flex flex-col py-6 px-4 bg-[#FFFFFF] border-r border-[#E2E8F0] z-10 fixed left-0 top-0 h-screen overflow-y-auto custom-scrollbar"
      aria-label="Dashboard navigation"
    >
      <div className="px-3 pb-6 border-b border-[#E2E8F0]">
        <Link href={variant === 'admin' ? '/dashboard/admin' : '/dashboard'} className="flex items-center gap-2 rounded-md">
          <span className="material-icons-round text-[#2563EB]" aria-hidden="true">
            coronavirus
          </span>
          <span className="font-serif text-[#0F172A] font-semibold text-[18px]">PneumoScan</span>
        </Link>
        <p className="mt-1 text-[#64748B] mono-data">City Medical Centre</p>
      </div>

      <nav className="flex flex-col gap-1.5 flex-1 pt-6" aria-label="Main">
        {navItems.map((item) => {
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              className={`h-10 px-3 rounded-md transition-colors flex items-center gap-2.5 text-[14px] ${
                active
                  ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
              }`}
              href={item.href}
              aria-current={active ? 'page' : undefined}
            >
              <span className="material-icons-round text-[20px]" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.title}</span>
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-[#E2E8F0] mb-2">
        <p className="field-label mb-1">Hospital</p>
        <p className="text-[13px] text-[#0F172A]">City Medical Centre</p>
        <p className="mono-data text-[#64748B]">License: PMDC-49281</p>
      </div>

      <div>
        <Link
          href="/dashboard/settings"
          aria-label="Profile and settings"
          aria-current={pathname === '/dashboard/settings' ? 'page' : undefined}
          className="flex items-center gap-3 p-2 rounded-md border border-[#E2E8F0] hover:border-[#2563EB] transition-colors"
        >
          <img
            alt=""
            role="presentation"
            className="w-9 h-9 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhyVoNxLfqx1GuA5qFQ0QNb1ueno7vC-veibd0CQMZWhjW_CnVfJ5dzO46yTCxrbaRHz5J-ijCHhyPoTlUs2k70rsK6WIRYHx6eajoxDhywh1OYzmb7fgTaM5MJdZXuxpKZVv4ofwF9xOX8m4Mv1Dkwgb9riBzuf83HH50CmAvsZiIenfzjp5OG1XGgC-xw5eK7ySwlDcvlPZhVNzV6QMiybhLOJ3pyFnaQ283ej22_aX99W0CPg-vS39fmDVmOwOXksQcVI47vqo"
            width={40}
            height={40}
          />
          <div className="min-w-0">
            <p className="text-[#0F172A] text-[13px] font-medium truncate">{profile.name}</p>
            <p className="text-[#64748B] text-[11px] uppercase tracking-[0.05em]">{profile.role}</p>
          </div>
        </Link>
      </div>
    </aside>
  )
}
