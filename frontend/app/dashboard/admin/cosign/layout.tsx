import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hospital Co-Sign | PneumoScan',
  description: 'Review and certify a doctor-signed diagnostic report.',
}

export default function CoSignLayout({ children }: { children: React.ReactNode }) {
  return children
}
