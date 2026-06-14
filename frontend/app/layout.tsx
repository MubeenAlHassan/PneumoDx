import React, { ViewTransition } from "react"
import type { Metadata } from 'next'
import { IBM_Plex_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import { NavigationGuard } from '@/components/navigation-guard'
import { Providers } from '@/components/providers'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
  weight: ['400', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
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
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
        <Providers>
          <ViewTransition>
            <NavigationGuard />
            {children}
          </ViewTransition>
        </Providers>
      </body>
    </html>
  )
}
