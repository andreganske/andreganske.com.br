import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andre Ganske | AI Product Manager',
  description: 'Senior Product Manager specializing in Risk & Anti-Fraud Intelligence, AI Gen & Data-Driven Strategy with 15+ years in tech.',
  keywords: ['Product Manager', 'AI PM', 'Product-Led Growth', 'Risk Management', 'Anti-Fraud', 'Data-Driven Strategy'],
  authors: [{ name: 'Andre Ganske' }],
  openGraph: {
    title: 'Andre Ganske | AI Product Manager',
    description: 'Senior Product Manager specializing in Risk & Anti-Fraud Intelligence, AI Gen & Data-Driven Strategy',
    type: 'website',
    url: 'https://andreganske.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
