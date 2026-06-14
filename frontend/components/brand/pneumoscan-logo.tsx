interface PneumoScanLogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export function PneumoScanLogo({ className = 'h-9 w-9', variant = 'default' }: PneumoScanLogoProps) {
  const fill = variant === 'light' ? 'currentColor' : '#2563EB'
  const stroke = variant === 'light' ? 'currentColor' : '#1D4ED8'

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="28" height="28" rx="8" fill={fill} fillOpacity={variant === 'light' ? 0.2 : 0.12} />
      <path
        d="M16 8c-3.5 0-6 2.8-6 6.5 0 2.2 1.1 4.1 2.8 5.2-.9 1.2-1.4 2.6-1.4 4.1 0 3.6 2.1 6.2 4.6 6.2s4.6-2.6 4.6-6.2c0-1.5-.5-2.9-1.4-4.1 1.7-1.1 2.8-3 2.8-5.2C22 10.8 19.5 8 16 8z"
        fill={fill}
        fillOpacity={variant === 'light' ? 0.95 : 1}
      />
      <path
        d="M8 22h16"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 3"
        opacity={variant === 'light' ? 0.9 : 0.7}
      />
      <circle cx="16" cy="22" r="1.5" fill={variant === 'light' ? 'white' : '#60A5FA'} />
    </svg>
  )
}
