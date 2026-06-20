import React from 'react'
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import LiveStats from './LiveStats'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      <div className="container-custom relative">
        {/* Main content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#accueil"
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="Logo Action Rénovation Alsace"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  Action Rénovation
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-400">
                  Alsace
                </span>
              </div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-md">
              Entreprise de chantier et rénovation globale à Strasbourg. Plâtrerie,
              isolation, plaquiste, aménagement intérieur et carrelage —
              un savoir-faire artisanal au service de vos projets.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
              <span className="text-xs text-white/60">SIREN :</span>
              <span className="text-xs font-bold text-white">880 980 800</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-accent-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Services', href: '#services' },
                { label: 'Réalisations', href: '#realisations' },
                { label: 'Pourquoi nous', href: '#pourquoi-nous' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-accent-500 rounded-full group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-accent-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=19+Avenue+du+Ried+67800+Hoenheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors group"
                >
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-400"
                    strokeWidth={2.2}
                  />
                  <span>
                    19 Avenue du Ried
                    <br />
                    67800 Hœnheim
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33662402144"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone
                    className="w-4 h-4 flex-shrink-0 text-accent-400"
                    strokeWidth={2.2}
                  />
                  06 62 40 21 44
                </a>
              </li>
              <li>
                <a
                  href="mailto:action.renovation67@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  <Mail
                    className="w-4 h-4 flex-shrink-0 text-accent-400"
                    strokeWidth={2.2}
                  />
                  action.renovation67@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compteurs temps réel */}
        <LiveStats />

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-xs text-white/60">
            <p>
              © {currentYear} Action Rénovation Alsace. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-accent-400 transition-colors"
              >
                Mentions légales
              </a>
              <span className="text-white/30">·</span>
              <a
                href="#"
                className="hover:text-accent-400 transition-colors"
              >
                Politique de confidentialité
              </a>
              <span className="text-white/30">·</span>
              <a
                href="#"
                className="hover:text-accent-400 transition-colors"
              >
                CGV
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-accent-500 hover:bg-accent-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-cta"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
