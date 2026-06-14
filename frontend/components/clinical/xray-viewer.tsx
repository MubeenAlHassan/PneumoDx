'use client'

import { XRAY_IMAGE_SRC, type XrayViewMode } from '@/components/clinical/constants'

function ScanCorner({ className }: { className?: string }) {
  return (
    <span
      className={`absolute h-5 w-5 border-[#60A5FA]/70 ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}

export type XrayViewerVariant = 'hero' | 'dashboard' | 'report' | 'compact'

interface XrayViewerProps {
  src?: string
  viewMode?: XrayViewMode
  showHeatmap?: boolean
  showScanAnimation?: boolean
  showCorners?: boolean
  showZoneLabel?: boolean
  showProgress?: boolean
  variant?: XrayViewerVariant
  className?: string
  aspectClass?: string
  alt?: string
}

export function XrayViewer({
  src = XRAY_IMAGE_SRC,
  viewMode = 'heatmap',
  showHeatmap,
  showScanAnimation = false,
  showCorners = true,
  showZoneLabel = false,
  showProgress = false,
  variant = 'dashboard',
  className = '',
  aspectClass,
  alt = 'Chest X-ray, posteroanterior view',
}: XrayViewerProps) {
  const heatmapVisible =
    showHeatmap ?? (viewMode === 'heatmap' || viewMode === 'overlay')
  const overlayVisible = viewMode === 'overlay'

  const resolvedAspect =
    aspectClass ??
    (variant === 'hero'
      ? 'aspect-[4/5]'
      : variant === 'compact'
        ? 'aspect-[4/3]'
        : variant === 'report'
          ? 'aspect-[3/4] min-h-[200px]'
          : 'aspect-[4/5] min-h-[280px]')

  const padding = variant === 'compact' ? 'p-2' : variant === 'hero' ? 'p-3 sm:p-4' : 'p-3'

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0B1220] ${resolvedAspect} ${showScanAnimation ? 'animate-ring-pulse' : ''} ${className}`}
    >
      <img
        alt={alt}
        src={src}
        className={`absolute inset-0 h-full w-full object-contain object-center ${padding}`}
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-[#0B1220]/15 pointer-events-none"
        aria-hidden="true"
      />

      {overlayVisible && (
        <div className="absolute inset-0 bg-[#2563EB]/15 pointer-events-none" aria-hidden="true" />
      )}

      {heatmapVisible && (
        <div
          className={`absolute right-[14%] bottom-[20%] rounded-full pointer-events-none ${
            showScanAnimation ? 'animate-heatmap-pulse' : ''
          } ${variant === 'compact' ? 'h-16 w-16' : 'h-24 w-24 sm:h-28 sm:w-28'}`}
          style={{
            background:
              'radial-gradient(circle, rgba(239,68,68,0.5) 0%, rgba(37,99,235,0.25) 42%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      )}

      {showScanAnimation && (
        <div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#93C5FD] to-transparent animate-scan-sweep pointer-events-none"
          aria-hidden="true"
        />
      )}

      {showCorners && (
        <>
          <ScanCorner className="top-3 left-3 sm:top-4 sm:left-4 border-t-2 border-l-2 rounded-tl-sm" />
          <ScanCorner className="top-3 right-3 sm:top-4 sm:right-4 border-t-2 border-r-2 rounded-tr-sm" />
          <ScanCorner className="bottom-3 left-3 sm:bottom-4 sm:left-4 border-b-2 border-l-2 rounded-bl-sm" />
          <ScanCorner className="bottom-3 right-3 sm:bottom-4 sm:right-4 border-b-2 border-r-2 rounded-br-sm" />
        </>
      )}

      {showZoneLabel && heatmapVisible && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#EF4444] animate-pulse" aria-hidden="true" />
          <span className="label-clinical text-white">Right Lower Lobe</span>
        </div>
      )}

      {showProgress && (
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <div className="flex items-center justify-between text-[10px] text-white/75 mb-1.5">
            <span>GradCAM heatmap</span>
            <span className="mono-data">Step 3/5</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-full animate-confidence-fill" />
          </div>
        </div>
      )}
    </div>
  )
}

interface XrayViewToggleProps {
  view: XrayViewMode
  onChange: (view: XrayViewMode) => void
  compact?: boolean
}

export function XrayViewToggle({ view, onChange, compact }: XrayViewToggleProps) {
  const modes: { id: XrayViewMode; label: string }[] = compact
    ? [
        { id: 'original', label: 'Original' },
        { id: 'heatmap', label: 'Heatmap' },
      ]
    : [
        { id: 'original', label: 'Original' },
        { id: 'heatmap', label: 'Heatmap' },
        { id: 'overlay', label: 'Overlay' },
      ]

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="X-ray view mode">
      {modes.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => onChange(m.id)}
          className={`h-8 px-3 rounded-sm text-[13px] font-medium transition-colors border ${
            view === m.id
              ? 'bg-[#EFF6FF] text-[#2563EB] border-[#2563EB]'
              : 'bg-transparent text-[#64748B] border-[#E2E8F0] hover:text-[#0F172A]'
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
