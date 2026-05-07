import React, { ViewTransition } from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navigation } from '@/components/navigation'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['italic', 'normal'],
})

export const metadata: Metadata = {
  title: 'PneumoScan AI | Advanced Medical Diagnostics',
  description: 'Harnessing fluid-neural architectures to detect pneumonia indicators with 99.4% sensitivity. Empowers clinicians with real-time, explainable diagnostic insights.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-x-hidden">
        <ViewTransition>
          <Navigation />
          {children}
        </ViewTransition>
      </body>
    </html>
  )
}
