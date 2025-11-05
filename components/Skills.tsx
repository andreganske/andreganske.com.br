'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Product Management',
    skills: [
      'Product Strategy',
      'User Research & Discovery',
      'Product-Led Growth',
      'Roadmap Planning',
      'Stakeholder Management',
      'Agile/Scrum',
    ]
  },
  {
    title: 'AI & Data',
    skills: [
      'AI/ML Product Development',
      'Risk Modeling',
      'Data-Driven Decision Making',
      'A/B Testing',
      'Analytics & Metrics',
      'Fraud Detection Systems',
    ]
  },
  {
    title: 'Technical',
    skills: [
      'API Design',
      'System Architecture',
      'SQL & Data Analysis',
      'Technical Documentation',
      'Integration Strategy',
      'Performance Optimization',
    ]
  },
  {
    title: 'Leadership',
    skills: [
      'Team Building',
      'Cross-functional Collaboration',
      'Mentoring',
      'Strategic Communication',
      'Conflict Resolution',
      'Change Management',
    ]
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
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
