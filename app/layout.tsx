import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Missed Bladder Disease in Women",
    template: "%s | Missed Bladder Disease in Women",
  },
  description:
    "IC/BPS affects women 5-10x more than men, yet takes years to diagnose. A physician education initiative on the bladder conditions overlooked in women's health. Led by Dr. Sanjay Pandey.",
  keywords: [
    'missed bladder disease in women',
    'interstitial cystitis women',
    'bladder pain syndrome women',
    'women\'s bladder health India',
    'IC BPS women India',
    'Dr Sanjay Pandey',
    'women\'s pelvic health',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://missedbladderdisease.com',
    siteName: 'Missed Bladder Disease',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}

