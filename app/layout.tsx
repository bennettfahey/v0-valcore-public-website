import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Valcore | Group Purchasing Power for Growing Companies',
  description:
    'Save up to 40% on indirect spend with free access to 100+ pre-negotiated supplier contracts from Grainger, Staples, CDW, UPS, Sherwin-Williams and more. Free membership, no risk. Get your savings analysis today.',
  generator: 'v0.app',
  keywords: 'group purchasing organization, GPO, indirect spend savings, procurement savings, supplier contracts, Grainger, Staples, CDW, UPS, MRO savings, office supply savings, shipping discounts, Valcore',
  authors: [{ name: 'Valcore' }],
  robots: 'index, follow',
  metadataBase: new URL('https://valcoregpo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Valcore | Strategic Purchasing Power for Your Business',
    description: 'Join 100+ pre-negotiated vendor contracts. Save up to 40% on office supplies, MRO, shipping, technology, and more. Free for members.',
    url: 'https://valcoregpo.com',
    siteName: 'Valcore',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valcore - Group Purchasing Power',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valcore | Strategic Purchasing Power for Your Business',
    description: 'Join 100+ pre-negotiated vendor contracts. Save up to 40% on office supplies, MRO, shipping, technology, and more. Free for members.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Valcore',
  url: 'https://valcoregpo.com',
  description: 'Group Purchasing Organization helping businesses save up to 40% on indirect spend through pre-negotiated supplier contracts',
  industry: 'Group Purchasing / Procurement',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
