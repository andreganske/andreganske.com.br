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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
              I enjoy turning complex problems into solutions that create real value —
              for people, for the business, and for the team.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
              I've been working in tech for over 15 years, building a background that
              combines product strategy, technical knowledge, and hands-on entrepreneurial
              experience. As a Product Manager, I've led end-to-end product development:
              from user discovery to delivery and continuous improvement at scale.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
              I thrive in environments where I can build with clarity, autonomy, and purpose.
              I enjoy working with collaborative teams that value open communication,
              thoughtful decision-making, and consistent delivery.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium">
              If you believe in meaningful products and strong, aligned teams — let's connect.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
