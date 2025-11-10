'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const experienceAreas = [
    { key: 'aiRisk', icon: '🎯' },
    { key: 'productStrategy', icon: '🏗️' },
    { key: 'teamLeadership', icon: '🚀' },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            {t('experience.title')}
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {experienceAreas.map((area, index) => (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border-l-4 border-accent-500 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl flex-shrink-0">{area.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t(`experience.${area.key}.title`)}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {t(`experience.${area.key}.items`).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-600 dark:text-accent-400 mt-1">•</span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
