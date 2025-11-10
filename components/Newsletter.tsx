'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const newsletterItems = [
    'Continuous value delivery and the ship or improve dilemma',
    'Decision-making in complex environments',
    'Experimentation, risk, and learning',
    'Product with SQL, AI, data, and continuous discovery',
    'Mistakes that became jokes and lessons',
  ]

  return (
    <section id="newsletter" className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(43,176,237,0.05),rgba(255,255,255,0))]" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
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
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-900/20 border border-accent-500/30">
              <svg className="w-5 h-5 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-accent-200 font-medium text-sm">Newsletter</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Feature or Bug
          </h2>
          <p className="text-xl text-slate-300 font-medium mb-2">
            Real product insights, no buzzwords.
          </p>
          <p className="text-base text-slate-400">
            Delivered twice a month • 1,000+ readers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10 border border-white/10"
        >
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Bi-weekly stories on product strategy, AI, and the psychology of decision-making —
            from real experiments inside Radar PX and beyond.
          </p>

          {/* Latest Issue Preview */}
          <div className="bg-accent-900/20 border border-accent-500/30 rounded-xl p-5 mb-8">
            <p className="text-xs text-accent-300 font-semibold mb-2 uppercase">Latest Issue</p>
            <h4 className="text-white font-bold mb-2">Continuous value delivery and the ship or improve dilemma</h4>
            <p className="text-slate-400 text-sm">
              When should you ship new features, and when should you improve what you have? A framework for balancing innovation and refinement.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">What to expect:</h3>
            <ul className="space-y-3">
              {newsletterItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <a
              href="https://featureoubug.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-semibold shadow-medium transition-all duration-300 group"
            >
              <span>Subscribe to Newsletter</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-slate-500 text-sm mt-4">
              Join readers getting biweekly insights on real PM work
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
