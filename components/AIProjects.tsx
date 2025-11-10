'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    name: 'Mind Bloom / Call Confidence',
    url: 'https://neurobloom.com.br',
    description: 'AI micro-SaaS that helps sales professionals overcome cold-call anxiety through simulated coaching and tone analysis.',
    detail: 'Explores affective computing and emotional feedback for performance.',
    icon: '🧠',
    maturity: 'Prototype',
    tags: ['Affective Computing', 'Coaching', 'Performance'],
  },
  {
    name: 'Attractor',
    url: 'https://attractor.com.br',
    description: 'AI-driven finance app for couples — aligning emotional and financial decision-making.',
    detail: 'Applies behavioral economics and explainable AI to shared investments.',
    icon: '💰',
    maturity: 'Prototype',
    tags: ['Behavioral Economics', 'FinTech', 'Explainable AI'],
  },
  {
    name: 'Radar PX / Person Check',
    url: '#',
    description: 'Modular risk-intelligence platform integrating enrichment, cognitive profiling, and behavioral scoring to classify driver risk.',
    detail: 'Reduced fraud costs by 20%, automated 5,000+ validations/month.',
    icon: '🎯',
    maturity: 'In-Production',
    tags: ['Risk Intelligence', 'Fraud Detection', 'ML Classification'],
  },
  {
    name: 'PM Fofo & Adalberto (RFC/BDD)',
    url: 'https://chatgpt.com/g/g-683f92d35c948191a4c2d3739525f62d-pm-fofo',
    description: 'LLM-based assistants that turn discovery into structured documentation (RFCs, BDDs).',
    detail: 'Automates the boring, amplifies clarity and context.',
    icon: '📋',
    maturity: 'In-Production',
    tags: ['LLM', 'Documentation', 'Discovery'],
  },
  {
    name: 'AI Research Playground',
    url: '#',
    description: 'Prototype hub exploring risk signal extraction from legal texts and human-in-the-loop evaluation loops.',
    detail: 'Where new capabilities are born before they become production.',
    icon: '🔬',
    maturity: 'Concept',
    tags: ['Research', 'NLP', 'Human-in-the-Loop'],
  },
]

export default function AIProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="ai-projects" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-500/30">
              <svg className="w-5 h-5 text-accent-700 dark:text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-accent-700 dark:text-accent-200 font-medium text-sm">{t('aiProjects.badge')}</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('aiProjects.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('aiProjects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <a
                href={project.url}
                target={project.url !== '#' ? '_blank' : undefined}
                rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
                className="block h-full group"
              >
                <div className="h-full bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover-lift hover:border-accent-400 dark:hover:border-accent-500 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                          {project.name}
                        </h3>
                        {project.url !== '#' && (
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </div>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-3 ${
                        project.maturity === 'In-Production' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                        project.maturity === 'Prototype' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                        'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {project.maturity}
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 mb-2 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <p className="text-slate-500 dark:text-slate-500 mb-4 leading-relaxed text-sm italic">
                        → {project.detail}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded text-xs font-medium border border-accent-200 dark:border-accent-700/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400">
            {t('aiProjects.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
