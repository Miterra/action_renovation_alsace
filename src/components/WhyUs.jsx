import React from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  MapPin,
  ClipboardCheck,
  ArrowRight,
  Award,
} from 'lucide-react'
import Button from './Button'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Devis 100% gratuit',
    description:
      'Estimation détaillée et transparente, sans aucun engagement. Vous savez exactement à quoi vous attendre avant le début des travaux.',
    highlight: 'Sans engagement',
  },
  {
    icon: MapPin,
    title: 'Expertise de proximité',
    description:
      'Basés à Hœnheim, nous connaissons parfaitement les spécificités du bâti alsacien et intervenons rapidement sur Strasbourg et ses environs.',
    highlight: 'Strasbourg & environs',
  },
  {
    icon: ClipboardCheck,
    title: 'Travail soigné, délais respectés',
    description:
      'Un savoir-faire artisanal au service de la qualité. Chaque chantier est piloté avec rigueur pour livrer dans les temps, sans compromis sur la finition.',
    highlight: 'Qualité & rigueur',
  },
]

const stats = [
  { value: '100%', label: 'Devis gratuit' },
  { value: 'A-Z', label: 'Accompagnement' },
  { value: '7j/7', label: 'Disponibilité' },
  { value: '67', label: 'Bas-Rhin & alentours' },
]

const WhyUs = () => {
  return (
    <section
      id="pourquoi-nous"
      className="section-padding bg-navy-950 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Award
              className="w-4 h-4 text-accent-400"
              strokeWidth={2.5}
            />
            <span className="text-xs font-bold text-white/90 tracking-widest uppercase">
              Pourquoi nous choisir
            </span>
          </div>
          <h2 className="heading-lg text-balance mb-5">
            La{' '}
            <span className="gradient-text">confiance</span>{' '}
            d'une équipe à l'écoute, le sérieux d'un artisan.
          </h2>
          <p className="text-lg text-white/70 text-balance">
            Trois engagements forts qui font la différence sur chacun de nos
            chantiers, du premier rendez-vous à la livraison finale.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: 'easeOut',
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-400/40 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10"
              >
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center font-extrabold text-white text-lg shadow-cta rotate-6 group-hover:rotate-0 transition-transform">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 bg-accent-500/40 blur-xl rounded-full" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                    <Icon
                      className="w-8 h-8 text-accent-400"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Highlight pill */}
                <span className="inline-block px-3 py-1 mb-3 bg-accent-500/15 border border-accent-400/30 rounded-full text-xs font-semibold text-accent-200">
                  {reason.highlight}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl font-semibold text-white mb-1">
                Prêt à concrétiser votre projet ?
              </p>
              <p className="text-sm text-white/70">
                Recevez votre devis personnalisé sous 48h.
              </p>
            </div>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Obtenir mon devis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs
