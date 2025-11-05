'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{t('footer.aiGenerated')}</span>
          </div>
          <p className="text-slate-500 text-sm">
            {(t('footer.copyright') || 'Copyright {year} Andre Ganske. All rights reserved.').replace('{year}', year.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}
