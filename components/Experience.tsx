'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'AI & Risk Intelligence',
    items: [
      'Leading AI-powered risk and anti-fraud product initiatives',
      'Building intelligent systems for fraud detection and prevention',
      'Implementing ML models for risk assessment at scale',
    ]
  },
  {
    title: 'Product Strategy & Delivery',
    items: [
      'End-to-end product development from discovery to delivery',
      'Product-Led Growth strategies and continuous discovery',
      'Data-driven decision making and metric definition',
    ]
  },
  {
    title: 'Team Leadership',
    items: [
      'Cross-functional team collaboration and alignment',
      'Mentoring and developing product talent',
      'Building high-performing, autonomous teams',
    ]
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Experience & Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {exp.title}
                </h3>
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 dark:text-accent-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">
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
