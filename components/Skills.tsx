'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const skillCategories = [
    'productManagement',
    'aiData',
    'technical',
    'leadership',
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            {t('skills.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {t(`skills.${category}.title`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t(`skills.${category}.items`).map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-sm border border-accent-200 dark:border-accent-700/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
