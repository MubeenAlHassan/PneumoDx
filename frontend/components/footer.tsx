'use client'

import { PneumoScanLogo } from '@/components/brand/pneumoscan-logo'

export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="footer-glass relative overflow-hidden rounded-t-[28px] sm:rounded-t-[40px]">
        {/* Top pattern band */}
        <div className="footer-pattern-band absolute inset-x-0 top-0 h-28 pointer-events-none" aria-hidden="true" />
        <div className="footer-pattern-dots absolute inset-x-0 top-0 h-full pointer-events-none opacity-[0.45]" aria-hidden="true" />

        {/* Soft corner accents */}
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#EFF6FF]/60 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-8 right-[12%] h-32 w-32 rounded-full border border-[#2563EB]/10 pointer-events-none" aria-hidden="true" />

        <div className="relative pt-16 sm:pt-20 pb-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-blue-glow">
                <PneumoScanLogo className="h-6 w-6" variant="light" />
              </div>
              <span className="font-serif font-semibold tracking-tight text-lg text-[#0F172A]">
                Pneumo<span className="text-pneumo-primary">Scan</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              AI-powered pneumonia detection platform for certified hospital reporting workflows.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#api">
                  API Docs
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#integrations">
                  Integrations
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#changelog">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6">Clinical</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#papers">
                  White Papers
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#datasets">
                  Datasets
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#ethics">
                  Ethics AI
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#compliance">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#careers">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#newsroom">
                  Newsroom
                </a>
              </li>
              <li>
                <a className="hover:text-pneumo-primary transition-colors" href="#support">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 PneumoScan. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-pneumo-primary transition-colors" href="#privacy">
              Privacy Policy
            </a>
            <a className="hover:text-pneumo-primary transition-colors" href="#terms">
              Terms of Service
            </a>
            <a className="hover:text-pneumo-primary transition-colors" href="#cookies">
              Cookie Policy
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
