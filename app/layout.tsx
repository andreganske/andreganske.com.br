import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: {
    default: 'Andre Ganske | AI Product Manager',
    template: '%s | Andre Ganske',
  },
  description: 'Senior Product Manager specializing in AI & Risk Intelligence, Anti-Fraud Systems, and Product-Led Growth. 15+ years building impactful products at scale. Explore AI projects, newsletter, and insights.',
  keywords: [
    'Product Manager',
    'AI Product Manager',
    'Product-Led Growth',
    'Risk Management',
    'Anti-Fraud',
    'Data-Driven Strategy',
    'AI Products',
    'Machine Learning',
    'Product Strategy',
    'Fraud Detection',
    'Continuous Discovery',
    'Agile',
    'Scrum',
    'Product Development',
  ],
  authors: [{ name: 'Andre Ganske', url: 'https://andreganske.com.br' }],
  creator: 'Andre Ganske',
  publisher: 'Andre Ganske',
  metadataBase: new URL('https://andreganske.com.br'),
  alternates: {
    canonical: 'https://andreganske.com.br',
    languages: {
      'en-US': 'https://andreganske.com.br',
      'pt-BR': 'https://andreganske.com.br',
    },
  },
  openGraph: {
    title: 'Andre Ganske | AI Product Manager',
    description: 'Senior Product Manager specializing in AI & Risk Intelligence, Anti-Fraud Systems, and Product-Led Growth with 15+ years in tech.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    url: 'https://andreganske.com.br',
    siteName: 'Andre Ganske Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andre Ganske | AI Product Manager',
    description: 'Senior Product Manager specializing in AI & Risk Intelligence, Anti-Fraud Systems, and Product-Led Growth',
    creator: '@andreganske',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://andreganske.com.br" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
