import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Wrench,
  Star,
  CheckCircle2,
  ChevronDown,
  MapPin,
} from 'lucide-react'
import Button from './Button'

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-navy-950"
    >
      {/* Background visual layers */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Decorative gradients */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-navy-500/30 rounded-full blur-3xl" />

      {/* Construction photo placeholder using CSS */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"><defs><linearGradient id=\"g\" x1=\"0%25\" y1=\"0%25\" x2=\"100%25\" y2=\"100%25\"><stop offset=\"0%25\" stop-color=\"%23f97316\"/><stop offset=\"100%25\" stop-color=\"%230f2742\"/></linearGradient></defs><rect fill=\"url(%23g)\" width=\"1200\" height=\"800\"/></svg>')",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <MapPin className="w-4 h-4 text-accent-400" strokeWidth={2.5} />
              <span className="text-sm font-medium text-white/90">
                Basés à Hœnheim · Intervention à Strasbourg & environs
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl text-balance mb-6"
            >
              Vos projets de rénovation à{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Strasbourg</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 8 Q 50 0, 100 6 T 200 4"
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              prennent vie.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed text-balance"
            >
              Plâtrerie, isolation, plaquiste, aménagement intérieur et
              carrelage. Une équipe d'artisans qui vous accompagne de A à Z,
              avec un savoir-faire reconnu et un devis 100% gratuit.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10"
            >
              {[
                'Devis 100% gratuit',
                'Artisans qualifiés',
                'Intervention rapide',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-400 flex-shrink-0"
                    strokeWidth={2.2}
                  />
                  <span className="text-sm md:text-base text-white/90 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                Demander un devis gratuit
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                icon={Wrench}
                iconPosition="left"
              >
                Nos Services
              </Button>
            </motion.div>
          </div>

          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-4 z-20 bg-white rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Star
                      className="w-6 h-6 text-accent-500 fill-accent-500"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-navy-900 leading-none">
                      100%
                    </div>
                    <div className="text-xs text-navy-600 font-medium mt-1">
                      Satisfaction client
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-2 z-20 bg-white rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                    <Wrench
                      className="w-6 h-6 text-navy-900"
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-navy-900 leading-none">
                      A à Z
                    </div>
                    <div className="text-xs text-navy-600 font-medium mt-1">
                      Accompagnement
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Central decorative card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent rounded-3xl" />
                <div className="relative text-center">
                  <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-2xl rotate-6">
                    <Wrench
                      className="w-14 h-14 text-white -rotate-6"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="text-white/90 text-sm font-semibold tracking-widest uppercase mb-2">
                    Action Rénovation
                  </div>
                  <div className="text-white text-3xl font-extrabold">
                    Alsace
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-accent-500/20 border border-accent-400/30 rounded-full">
                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-accent-200">
                      Disponible 7j/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors hidden md:flex flex-col items-center gap-2"
        aria-label="Voir nos services"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" strokeWidth={2} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
