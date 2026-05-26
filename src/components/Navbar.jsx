import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Button from './Button'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Pourquoi nous', href: '#pourquoi-nous' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            className="flex items-center gap-3 group"
            aria-label="Action Rénovation Alsace - Accueil"
          >
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? 'w-11 h-11' : 'w-12 h-12'
              }`}
            >
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  scrolled ? 'bg-white shadow-soft' : 'bg-white/95 shadow-lg'
                } group-hover:scale-110`}
              />
              <img
                src="/logo.png"
                alt="Logo Action Rénovation Alsace"
                className="relative w-full h-full object-contain p-1.5 group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-base md:text-lg font-extrabold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-navy-900' : 'text-white'
                }`}
              >
                Action Rénovation
              </span>
              <span
                className={`text-[0.65rem] md:text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-accent-500' : 'text-accent-400'
                }`}
              >
                Alsace
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                  scrolled
                    ? 'text-navy-700 hover:text-navy-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
            >
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-navy-900 hover:bg-navy-50'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" strokeWidth={2.2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
              onClick={closeMobile}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col pt-24 pb-8 px-6"
            >
              <div className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="px-4 py-3 text-lg font-semibold text-navy-800 hover:text-accent-500 hover:bg-navy-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="pt-6 border-t border-navy-100">
                <Button
                  href="#contact"
                  variant="primary"
                  fullWidth
                  icon={ArrowRight}
                  onClick={closeMobile}
                >
                  Devis Gratuit
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
