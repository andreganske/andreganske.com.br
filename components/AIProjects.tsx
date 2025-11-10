'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    name: 'Mind Bloom / Call Confidence',
    url: 'https://neurobloom.com.br',
    description:
      'AI micro-SaaS that helps sales professionals overcome cold-call anxiety through simulated coaching, tone analysis, and cognitive reframing.',
    detail:
      'Explores affective computing, emotion recognition, and behavioral reinforcement to improve confidence and communication performance.',
    icon: '🧠',
    maturity: 'Prototype',
    tags: ['Affective Computing', 'Behavioral Science', 'Coaching', 'Performance', 'Emotion Recognition'],
  },
  {
    name: 'Attractor',
    url: 'https://attractor.com.br',
    description:
      'AI-driven finance app for couples — aligning emotional and financial decision-making through shared transparency.',
    detail:
      'Applies behavioral economics, explainable AI, and relationship psychology to build trust around money decisions.',
    icon: '💰',
    maturity: 'Prototype',
    tags: ['FinTech', 'Behavioral Economics', 'Emotional Intelligence', 'Explainable AI', 'Ephemeral UI', 'Relationship Psychology'],
  },
  {
    name: 'Radar PX',
    url: '#',
    description:
      'Modular risk-intelligence platform integrating enrichment, cognitive profiling, and behavioral scoring to classify driver risk at scale.',
    detail:
      'Connects operational data with psychological insight to anticipate risk patterns before they happen — reducing fraud by 20% and saving R$1.5M/year through intelligent automation.',
    icon: '🎯',
    maturity: 'In-Production',
    tags: ['Risk Intelligence', 'Fraud Detection', 'Behavioral Analysis', 'ML Classification', 'Human-in-the-Loop', 'MCP Architecture', 'AI Workflow', 'Agentic AI'],
  },
  {
    name: 'Digha.app',
    url: 'https://digha.app',
    description:
      'AI-powered assistant for 1:1 meetings and self-reflection, designed to help teams turn conversations into measurable growth.',
    detail:
      'Built to transform leadership rituals into feedback loops — summarizing insights, tracking progress, and improving how managers listen and coach. Although discontinued, it proved how AI can nurture healthier teams.',
    icon: '💬',
    maturity: 'Failed',
    tags: ['Leadership', 'Reflection', 'AI Coaching', 'Psychological Safety', 'People Analytics', 'Behavioral Insight', 'Emotional Intelligence'],
  },
  {
    name: 'PM Fofo',
    url: 'https://chat.openai.com/g/g-683f92d35c948191a4c2d3739525f62d-pm-fofo',
    description:
      'LLM-based assistant that helps Product Managers translate messy discovery sessions into structured, shareable artifacts.',
    detail:
      'Automates the creation of RFCs, BDDs, and opportunity statements — freeing PMs to focus on insight and alignment instead of formatting.',
    icon: '📋',
    maturity: 'Beta',
    tags: ['LLM', 'Product Management', 'Documentation', 'Workflow Automation', 'Discovery'],
  },
  {
    name: 'Adalberto the C4',
    url: 'https://chatgpt.com/g/g-oUNbPrO0P-adalberto-do-c4',
    description:
      'Conversational AI specialized in software architecture, helping teams describe and visualize systems through the C4 modeling approach.',
    detail:
      'Acts as a concise, human-like software architect — guiding the creation of Context, Container, Component, and Code diagrams with clarity and consistency. Designed to make architecture communication accessible to both engineers and product stakeholders.',
    icon: '🏗️',
    maturity: 'Beta',
    tags: ['Software Architecture', 'C4 Model', 'System Design', 'LLM', 'Technical Documentation'],
  },
  {
    name: 'Adalberto the RFC',
    url: 'https://chat.openai.com/g/g-682e12d81c948191a4c2d3739525a55a-adalberto-the-rfc',
    description:
      'Conversational AI trained on real product documents to create RFCs and specs that sound human — not robotic.',
    detail:
      'Brings structure, empathy, and consistency to technical writing by learning from your tone, frameworks, and context.',
    icon: '🧾',
    maturity: 'Beta',
    tags: ['Product Writing', 'RFC', 'Specification', 'LLM', 'Documentation'],
  },
  {
    name: 'AI Research Playground',
    url: '#',
    description:
      'Internal R&D hub for prototyping AI capabilities in risk analysis, legal-text understanding, and human-in-the-loop model evaluation.',
    detail:
      'Serves as the incubation layer for next-generation features — bridging research and production through continuous experimentation.',
    icon: '🔬',
    maturity: 'Concept',
    tags: ['Research', 'NLP', 'Explainability', 'Risk Analysis', 'Human-in-the-Loop', 'MCP Architecture', 'Agentic AI'],
  },
  {
    name: 'RiskGPT',
    url: '#',
    description:
      'Specialized AI agent that interprets judicial and behavioral data to classify transport-related risks with contextual accuracy.',
    detail:
      'Enhances decision engine by extracting nuanced legal signals and explaining model reasoning in plain language for audit-ready insights.',
    icon: '⚖️',
    maturity: 'Private Beta',
    tags: ['Risk Intelligence', 'NLP', 'Decision Support', 'Explainability', 'Legal Data', 'Auditability'],
  },
  {
    name: 'FeatureGPT',
    url: '#',
    description:
      'AI writing companion that powers the "Feature ou Bug" newsletter — translating real product lessons into clear, narrative-driven insights.',
    detail:
      'Blends storytelling and strategy to turn data into meaning — helping PMs communicate outcomes, not outputs.',
    icon: '📝',
    maturity: 'Private Use',
    tags: ['Writing', 'Communication', 'Strategy', 'Storytelling', 'Thought Leadership'],
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
                        project.maturity === 'Beta' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        project.maturity === 'Private Beta' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                        project.maturity === 'Private Use' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' :
                        project.maturity === 'Failed' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
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
