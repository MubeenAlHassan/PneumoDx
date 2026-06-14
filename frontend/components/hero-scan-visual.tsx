'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { XrayViewMode } from '@/components/clinical/constants'
import { XrayViewer, XrayViewToggle } from '@/components/clinical/xray-viewer'

function MetricRow({ label, value, tone = 'default' }: { label: string; value: string; tone?: 'default' | 'alert' | 'success' }) {
  const valueClass =
    tone === 'alert' ? 'text-[#EF4444]' : tone === 'success' ? 'text-[#10B981]' : 'text-[#0F172A]'

  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-[#E2E8F0]/80 last:border-0">
      <span className="text-[11px] text-[#64748B] font-medium">{label}</span>
      <span className={`text-[12px] font-semibold mono-data ${valueClass}`}>{value}</span>
    </div>
  )
}

export function HeroScanVisual() {
  const [view, setView] = useState<XrayViewMode>('heatmap')

  return (
    <div className="relative w-full max-w-full">
      <div
        className="absolute -inset-4 sm:-inset-6 rounded-[32px] bg-gradient-to-br from-[#2563EB]/20 via-[#EFF6FF]/40 to-transparent blur-2xl opacity-80 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-2xl bg-[#E2E8F0]/50 border border-[#E2E8F0] pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute -left-2 sm:-left-4 top-10 z-30 hidden md:flex items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white/95 px-3.5 py-2.5 shadow-soft-2 animate-float-gentle backdrop-blur-sm"
        aria-hidden="true"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFF6FF]">
          <span className="material-icons-round text-[18px] text-[#2563EB]">psychology</span>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#64748B] font-medium">AI Confidence</p>
          <p className="text-[14px] font-semibold text-[#0F172A] mono-data">94.2%</p>
        </div>
      </div>

      <div
        className="absolute -right-2 sm:-right-3 bottom-20 z-30 hidden md:flex items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white/95 px-3.5 py-2.5 shadow-soft-2 animate-float-gentle-delayed backdrop-blur-sm"
        aria-hidden="true"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
          <span className="material-icons-round text-[18px] text-[#10B981]">verified</span>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-[#64748B] font-medium">Status</p>
          <p className="text-[13px] font-semibold text-[#0F172A]">Ready for Review</p>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-soft-2">
        <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-4 py-3 text-white">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15">
              <span className="material-icons-round text-[18px]">medical_services</span>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/80">PneumoScan Viewer</p>
              <p className="text-[13px] font-medium truncate mono-data">Case · MRN-20240612</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-[#93C5FD] animate-pulse" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_132px] items-stretch">
          <div className="relative min-w-0 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <span className="label-clinical text-[#64748B]">Chest PA · AI Overlay</span>
              <XrayViewToggle view={view} onChange={setView} compact />
            </div>

            <div className="relative">
              <XrayViewer
                viewMode={view}
                variant="hero"
                showScanAnimation
                showProgress
              />
              <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-[#EF4444]/95 px-3 py-1 text-[10px] font-semibold text-white shadow-lg whitespace-nowrap pointer-events-none">
                <span className="material-icons-round text-[12px]" aria-hidden="true">priority_high</span>
                Opacity · 99.2%
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#F8FAFC] lg:min-h-0">
            <div className="px-3 py-2.5 border-b border-[#E2E8F0]">
              <p className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[#64748B]">Findings</p>
            </div>
            <div className="flex-1 px-3 py-1">
              <MetricRow label="Pattern" value="Consolidation" tone="alert" />
              <MetricRow label="Zone" value="RLL" />
              <MetricRow label="Severity" value="Moderate" tone="alert" />
              <MetricRow label="Model" value="v2.4.1" />
              <MetricRow label="Latency" value="11.2s" tone="success" />
            </div>
            <div className="p-3 border-t border-[#E2E8F0] space-y-2">
              <span className="badge-status badge-ai-ready w-full justify-center">
                <span aria-hidden="true">●</span>
                AI Ready
              </span>
              <Link
                href="/dashboard/report/preview"
                className="block w-full rounded-lg bg-[#2563EB] px-3 py-2 text-[11px] font-semibold text-white shadow-soft-1 hover:bg-[#1D4ED8] transition-colors text-center"
              >
                View Sample Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
