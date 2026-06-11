'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()
  const navItems = [
    { href: '/dashboard/create', icon: 'add_box', title: 'Create new patient case' },
    { href: '/dashboard', icon: 'dashboard', title: 'Dashboard overview' },
    { href: '/dashboard/records', icon: 'folder_open', title: 'Scan records' },
  ]

  return (
    <aside className="w-20 lg:w-24 flex flex-col items-center py-8 glass-panel border-r border-slate-200/60 dark:border-slate-800/60 z-10 fixed left-0 h-screen overflow-hidden" aria-label="Dashboard navigation">
      <nav className="flex flex-col gap-8 flex-1" aria-label="Main">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              className={`p-3 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-pneumo-primary/50 ${
                isActive
                  ? 'bg-pneumo-primary/10 text-pneumo-primary hover:bg-pneumo-primary/20 border border-pneumo-primary/20'
                  : 'text-slate-400 hover:text-pneumo-primary'
              }`}
              href={item.href}
              aria-label={item.title}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="material-icons-round" aria-hidden="true">{item.icon}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto">
        <Link
          href="/dashboard/settings"
          aria-label="Profile and settings"
          aria-current={pathname === '/dashboard/settings' ? 'page' : undefined}
          className="block w-10 h-10 rounded-full overflow-hidden border-2 border-pneumo-primary/20 hover:border-pneumo-primary transition-colors focus-visible:ring-2 focus-visible:ring-pneumo-primary/50"
        >
          <img
            alt=""
            role="presentation"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhyVoNxLfqx1GuA5qFQ0QNb1ueno7vC-veibd0CQMZWhjW_CnVfJ5dzO46yTCxrbaRHz5J-ijCHhyPoTlUs2k70rsK6WIRYHx6eajoxDhywh1OYzmb7fgTaM5MJdZXuxpKZVv4ofwF9xOX8m4Mv1Dkwgb9riBzuf83HH50CmAvsZiIenfzjp5OG1XGgC-xw5eK7ySwlDcvlPZhVNzV6QMiybhLOJ3pyFnaQ283ej22_aX99W0CPg-vS39fmDVmOwOXksQcVI47vqo"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </aside>
  )
}
