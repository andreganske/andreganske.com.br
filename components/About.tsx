'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="space-y-8">
            {/* Origin & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8"
            >
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                I turn complex systems into products that make sense.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Over the past 15 years, I've helped companies bridge technology, human judgment, and risk intelligence —
                building tools that scale trust without losing nuance.
              </p>
            </motion.div>

            {/* Impact with Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-2xl p-8 border-2 border-accent-200 dark:border-accent-700/30"
            >
              <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
                At <span className="font-bold text-accent-700 dark:text-accent-400">Radar PX</span>, I led the creation of Brazil's first
                modular risk-intelligence platform for professional drivers.
              </p>
              <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed mb-6">
                The result:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">R$ 1.5 million saved in fraud-detection operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">20% reduction in risk exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">5,000+ CPF validations automated per month</span>
                </li>
              </ul>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                My work blends <span className="font-semibold text-slate-900 dark:text-white">product strategy</span>, <span className="font-semibold text-slate-900 dark:text-white">behavioral insight</span>, and <span className="font-semibold text-slate-900 dark:text-white">technical fluency</span> —
                ensuring AI doesn't just automate but augments decision-making.
              </p>
              <div className="border-l-4 border-accent-500 pl-6 py-2">
                <p className="text-lg italic text-slate-800 dark:text-slate-200 leading-relaxed mb-3">
                  "I believe that the best AI products don't replace humans; they honor complexity and enable trust."
                </p>
                <p className="text-lg italic text-slate-800 dark:text-slate-200 leading-relaxed">
                  "Automation should handle the repetitive and predictable, so people can focus on the meaningful and human."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
