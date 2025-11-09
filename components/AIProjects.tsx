'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    name: 'NeuroBloom',
    url: 'https://neurobloom.com.br',
    description: 'AI-first app to help people overcome cold-call anxiety and prepare for conversations more effectively',
    icon: '🧠',
    tags: ['Mental Health', 'AI Coach', 'Communication'],
  },
  {
    name: 'Attractor',
    url: 'https://attractor.com.br',
    description: 'AI-first financial app for couples using open finance and ephemeral UI to improve their relationship with money',
    icon: '💰',
    tags: ['FinTech', 'Open Finance', 'Relationships'],
  },
  {
    name: 'PM Fofo',
    url: 'https://chatgpt.com/g/g-683f92d35c948191a4c2d3739525f62d-pm-fofo',
    description: 'Ajuda PMs a estruturar iniciativas com discovery e foco em outcomes',
    icon: '🎯',
    tags: ['Product Management', 'GPT', 'Discovery'],
  },
  {
    name: 'Adalberto da RFC',
    url: 'https://chatgpt.com/g/g-676345be2de88191b10d7e0e3a52d76b-adalberto-da-rfc',
    description: 'Cria e revisa RFCs tecnicas com clareza e colaboracao',
    icon: '📋',
    tags: ['Technical Writing', 'RFC', 'Collaboration'],
  },
  {
    name: 'Adalberto do BDD',
    url: 'https://chatgpt.com/g/g-67325832e5108190b2ac528183c0134a-adalberto-do-bdd',
    description: 'Technical specification expert using BDD principles',
    icon: '🔧',
    tags: ['BDD', 'Testing', 'Specifications'],
  },
]

export default function AIProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
              <span className="text-accent-700 dark:text-accent-200 font-medium text-sm">AI Explorations</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Building with AI
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Exploring the intersection of AI and product innovation through hands-on projects
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
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                          {project.name}
                        </h3>
                        {project.url !== '#' && (
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium border border-accent-200 dark:border-accent-700/30"
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
            Each project is an experiment in applying AI to solve real-world problems,
            from mental health and financial wellness to technical documentation and testing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
