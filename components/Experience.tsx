'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const focusAreas = [
  {
    title: 'AI & Risk Intelligence',
    description: 'Designing ML-driven risk engines that classify, enrich, and validate thousands of professionals automatically.',
    icon: '🎯',
  },
  {
    title: 'Product Strategy & Systems Design',
    description: 'Translating complex ecosystems (PX Academy, Radar PX, Motorista PX) into modular, ISO-31000-aligned products.',
    icon: '🏗️',
  },
  {
    title: 'Human-in-the-Loop Decisioning',
    description: 'Combining cognitive insight with human feedback loops to keep automation explainable.',
    icon: '🤝',
  },
  {
    title: 'Data & Behavioral Analysis',
    description: 'Leveraging telematics and behavioral data to anticipate operational risk.',
    icon: '📊',
  },
  {
    title: 'Leadership & Execution',
    description: 'Aligning cross-functional teams to deliver technically sound, strategically meaningful products.',
    icon: '🚀',
  },
]

const skillCategories = [
  {
    title: 'Product Management',
    skills: ['Discovery', 'Roadmapping', 'OKRs', 'Opportunity Mapping', 'KPI Design'],
  },
  {
    title: 'AI & Data',
    skills: ['Data Modeling', 'Prompt Engineering', 'Risk Modeling', 'SQL/Python Analytics', 'ML Orchestration'],
  },
  {
    title: 'Technical',
    skills: ['API Design', 'Micro-services', 'Event-driven Architecture', 'Identity Systems'],
  },
  {
    title: 'Leadership',
    skills: ['Team Topologies', 'Discovery Culture', 'Narrative-driven Communication'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Focus & Expertise
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Focus Areas - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-accent-500">→</span> Focus Areas
              </h3>
              <div className="space-y-6">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border-accent-500 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0">{area.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          {area.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills & Expertise - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-accent-500">→</span> Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white dark:bg-slate-900 p-5 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-lg text-sm font-medium border border-accent-200 dark:border-accent-700/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Featured Skills Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 p-5 rounded-xl border border-accent-200 dark:border-accent-700/30"
              >
                <p className="text-sm font-semibold text-accent-700 dark:text-accent-400 mb-3">
                  Featured Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {['LLM Integration', 'Discovery', 'Risk Models', 'Metrics Design'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-accent-500 text-white rounded-lg text-sm font-bold shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
