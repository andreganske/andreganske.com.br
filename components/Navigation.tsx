'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { nameKey: 'nav.about', href: '#about' },
    { nameKey: 'nav.experience', href: '#experience' },
    { nameKey: 'nav.skills', href: '#skills' },
    { nameKey: 'nav.aiProjects', href: '#ai-projects' },
    { nameKey: 'nav.newsletter', href: '#newsletter' },
    { nameKey: 'nav.contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AG
          </motion.a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.nameKey}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item.nameKey)}
              </motion.a>
            ))}
            <LanguageSwitcher />
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-medium shadow-lg hover:shadow-glow transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.letsTalk')}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
