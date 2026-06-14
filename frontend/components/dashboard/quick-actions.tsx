'use client'

import Link from 'next/link'

export function QuickActions() {
  return (
    <div className="lg:col-span-4 p-6 rounded-md bg-[#FFFFFF] border border-[#E2E8F0]">
      <h3 className="text-[18px] font-semibold text-[#0F172A] mb-6">Quick Actions</h3>
      <div className="space-y-4">
        {[
          { href: '/dashboard/upload', icon: 'cloud_upload', label: 'Upload New Scan' },
          { href: '/dashboard/report', icon: 'description', label: 'Generate Report' },
          { href: '/dashboard/records', icon: 'folder_open', label: 'Open Records' },
        ].map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="w-full h-12 flex items-center justify-between px-4 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-sm transition-all group border border-[#E2E8F0]"
          >
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-sm bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] border border-[#E2E8F0]">
                <span className="material-icons-round" aria-hidden="true">{action.icon}</span>
              </div>
              <span className="text-[14px] font-medium text-[#0F172A]">{action.label}</span>
            </div>
            <span className="material-icons-round text-[#64748B] group-hover:text-[#2563EB] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
          </Link>
        ))}
      </div>
      <div className="mt-8 p-6 rounded-lg text-white relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] shadow-blue-glow">
        <div className="relative z-10">
          <h4 className="text-[18px] font-semibold mb-2 text-white">Platform Update</h4>
          <p className="text-[14px] text-white/80 leading-relaxed mb-4">v2.4.0 is now live. Enhanced fluid detection models for pediatric cases.</p>
          <a className="text-[11px] uppercase tracking-[0.05em] font-semibold text-white hover:underline transition-colors" href="#">Read Release Notes</a>
        </div>
        <span className="material-icons-round absolute -bottom-4 -right-4 text-8xl text-white/15 rotate-12" aria-hidden="true">auto_awesome</span>
      </div>
    </div>
  )
}
