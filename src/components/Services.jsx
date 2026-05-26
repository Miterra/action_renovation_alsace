import React from 'react'
import { motion } from 'framer-motion'
import {
  Hammer,
  Home,
  LayoutGrid,
  Sparkles,
  Paintbrush,
  Layers,
} from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: Layers,
    title: 'Plâtrerie & Isolation',
    description:
      'Pose de cloisons, faux plafonds et isolation thermique/phonique pour un intérieur confortable et performant.',
    features: [
      'Cloisons et doublages',
      'Isolation thermique & phonique',
      'Plafonds suspendus',
    ],
  },
  {
    icon: Home,
    title: 'Rénovation Intérieure',
    description:
      'De la rénovation partielle à la rénovation globale, nous transformons vos espaces selon vos besoins.',
    features: [
      'Rénovation complète',
      'Aménagement combles',
      'Cuisine & salle de bain',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Carrelage & Revêtements',
    description:
      'Pose soignée de carrelage, faïence et revêtements de sol pour sublimer chaque pièce de votre habitat.',
    features: [
      'Carrelage sol & mur',
      'Faïence salle de bain',
      'Parquet & stratifié',
    ],
  },
  {
    icon: Hammer,
    title: 'Plaquiste & Cloisons',
    description:
      'Création de cloisons sèches, ossature métallique et tous travaux de plaquiste réalisés avec précision.',
    features: [
      'Cloisons placo',
      'Ossatures métalliques',
      'Bandes & finitions',
    ],
  },
  {
    icon: Paintbrush,
    title: 'Aménagement sur-mesure',
    description:
      'Conseil et réalisation d\'aménagements personnalisés pour optimiser chaque mètre carré de votre intérieur.',
    features: [
      'Conception sur mesure',
      'Optimisation d\'espace',
      'Solutions personnalisées',
    ],
  },
  {
    icon: Sparkles,
    title: 'Accompagnement A à Z',
    description:
      'Un interlocuteur unique pour piloter votre projet : du devis aux finitions, en passant par la coordination.',
    features: [
      'Conseil personnalisé',
      'Suivi de chantier',
      'Respect des délais',
    ],
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-white to-navy-50/50 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-50 rounded-bl-full opacity-50 -z-10" />

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-accent-50 border border-accent-200 rounded-full">
            <span className="w-2 h-2 bg-accent-500 rounded-full" />
            <span className="text-xs font-bold text-accent-700 tracking-widest uppercase">
              Nos prestations
            </span>
          </div>
          <h2 className="heading-lg text-navy-900 text-balance mb-5">
            Un savoir-faire complet pour{' '}
            <span className="text-accent-500">tous vos chantiers</span>
          </h2>
          <p className="text-lg text-navy-600 text-balance">
            De la plâtrerie au carrelage, nous maîtrisons l'ensemble du second
            œuvre pour vous livrer une rénovation impeccable et durable.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-700 mb-2">
            Un projet spécifique ou une question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-accent-600 hover:text-accent-700 font-semibold underline underline-offset-4 decoration-2 decoration-accent-300 hover:decoration-accent-600 transition-all"
          >
            Parlons-en autour d'un devis gratuit →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
