'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            {t('about.title')}
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('about.p1')}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('about.p2')}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('about.p3')}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {t('about.p4')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
