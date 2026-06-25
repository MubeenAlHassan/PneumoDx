'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PneumoScanLogo } from '@/components/brand/pneumoscan-logo'

const links = [
  { href: '#technology', label: 'Features' },
  { href: '#workflow', label: 'How it works' },
  { href: '#results', label: 'Results' },
  { href: '#faq', label: 'FAQ' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 md:pt-5 pointer-events-none">
      <nav
        className={`nav-liquid-glass pointer-events-auto mx-auto max-w-5xl transition-all duration-500 ${
          scrolled ? 'nav-liquid-glass-scrolled' : ''
        }`}
        aria-label="Main navigation"
      >
        {/* Liquid color blob inside glass */}
        <div className="nav-liquid-blob" aria-hidden="true" />
        <div className="nav-liquid-blob nav-liquid-blob-secondary" aria-hidden="true" />
        <div className="nav-liquid-shine" aria-hidden="true" />

        <div className="relative flex h-[58px] md:h-[62px] items-center justify-between gap-4 px-3 md:px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2.5 pl-1">
            <span className="nav-liquid-logo flex h-9 w-9 items-center justify-center rounded-xl">
              <PneumoScanLogo className="h-6 w-6" variant="light" />
            </span>
            <span className="font-serif text-[18px] font-semibold tracking-tight text-[#0F172A]">
              Pneumo<span className="text-[#2563EB]">Scan</span>
            </span>
          </Link>

          <div className="nav-liquid-links hidden md:flex items-center gap-0.5 rounded-full p-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-liquid-link px-3.5 py-2 rounded-full text-[13px] font-medium text-[#475569]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 pr-0.5">
            <Link href="/login" className="nav-liquid-signin hidden sm:inline-flex items-center h-9 px-4 rounded-full text-[13px] font-semibold text-[#0F172A]">
              Sign in
            </Link>
            <Link href="/register-hospital" className="nav-liquid-cta inline-flex items-center gap-1 h-9 px-4 md:px-5 rounded-full text-[13px] font-semibold text-white">
              Start Free
              <span className="material-icons-round text-[16px]" aria-hidden="true">arrow_forward</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full nav-liquid-icon-btn text-[#0F172A]"
            >
              <span className="material-icons-round text-[20px]" aria-hidden="true">{open ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="nav-liquid-mobile relative border-t border-white/40 px-3 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="nav-liquid-link block px-4 py-3 rounded-2xl text-[14px] font-medium text-[#475569]"
                >
                  {l.label}
                </a>
              ))}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="nav-liquid-link block px-4 py-3 rounded-2xl text-[14px] font-medium text-[#475569] sm:hidden"
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
