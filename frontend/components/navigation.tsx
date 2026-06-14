'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PneumoScanLogo } from '@/components/brand/pneumoscan-logo'

const links = [
  { href: '#technology', label: 'Technology' },
  { href: '#workflow', label: 'How it works' },
  { href: '#security', label: 'Security' },
  { href: '#resources', label: 'Resources' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50">
      <div
        className={`rounded-full pl-5 pr-3 py-2.5 flex items-center justify-between border transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-[#E2E8F0] shadow-soft-1'
            : 'bg-white/70 backdrop-blur-md border-white/60'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 rounded-full">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-blue-glow">
            <PneumoScanLogo className="h-6 w-6" variant="light" />
          </span>
          <span className="font-serif text-[19px] font-semibold tracking-tight text-[#0F172A]">
            Pneumo<span className="text-[#2563EB]">Scan</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-[14px] font-medium text-[#475569]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 rounded-full hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center h-10 px-4 rounded-full text-[14px] font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-[#2563EB] text-white text-[14px] font-semibold hover:bg-[#1D4ED8] transition-colors shadow-blue-glow"
          >
            Get Started
            <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-[#0F172A] hover:bg-[#F1F5F9]"
          >
            <span className="material-icons-round" aria-hidden="true">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 rounded-2xl bg-white border border-[#E2E8F0] shadow-soft-2 p-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-[14px] font-medium text-[#475569] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
