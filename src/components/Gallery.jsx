import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from 'lucide-react'

const photos = [
  {
    src: '/photos/Salle_de_bain.jpg',
    category: 'salle-de-bain',
    title: 'Salle de bain contemporaine',
    desc: 'Miroir LED, double vasque, faïence grand format',
  },
  {
    src: '/photos/Douche.jpg',
    category: 'salle-de-bain',
    title: 'Douche italienne sur mesure',
    desc: 'Effet pierre, banquette intégrée, éclairage LED',
  },
  {
    src: '/photos/salle_de_bain1.jpg',
    category: 'salle-de-bain',
    title: 'Salle de bain haut de gamme',
    desc: 'Finitions soignées, agencement optimisé',
  },
  {
    src: '/photos/salle_de_bain2.jpg',
    category: 'salle-de-bain',
    title: 'Aménagement complet',
    desc: 'Plomberie, carrelage, finitions',
  },
  {
    src: '/photos/salle_de_bain3.jpg',
    category: 'salle-de-bain',
    title: 'Espace bien-être',
    desc: 'Pose de carrelage grand format',
  },
  {
    src: '/photos/bainoire.jpg',
    category: 'salle-de-bain',
    title: 'Pose baignoire',
    desc: 'Installation et habillage sur mesure',
  },
  {
    src: '/photos/salle_de_bain_carrelage.jpg',
    category: 'carrelage',
    title: 'Carrelage salle de bain',
    desc: 'Pose technique mur & sol',
  },
  {
    src: '/photos/carrelage_douche.jpg',
    category: 'carrelage',
    title: 'Carrelage zone douche',
    desc: 'Étanchéité et finitions parfaites',
  },
  {
    src: '/photos/carrelage_escaliers.jpg',
    category: 'carrelage',
    title: 'Carrelage escaliers extérieurs',
    desc: 'Nez de marche aluminium, antidérapant',
  },
  {
    src: '/photos/escaliers.jpg',
    category: 'carrelage',
    title: 'Escaliers carrelés',
    desc: 'Travail de précision sur chaque marche',
  },
  {
    src: '/photos/escaliers2.jpg',
    category: 'carrelage',
    title: 'Réalisation escaliers',
    desc: 'Finitions haut de gamme',
  },
  {
    src: '/photos/salon_cuisine1.jpg',
    category: 'renovation',
    title: 'Rénovation salon-cuisine',
    desc: 'Décloisonnement et reprise complète',
  },
  {
    src: '/photos/salon_cuisine2.jpg',
    category: 'renovation',
    title: 'Pose placo & isolation',
    desc: 'Cloisons, plafonds, doublages',
  },
  {
    src: '/photos/salon_cuisine3.jpg',
    category: 'renovation',
    title: 'Préparation pièce de vie',
    desc: 'Avant la phase finitions',
  },
  {
    src: '/photos/mur_salon.jpg',
    category: 'renovation',
    title: 'Création mur de salon',
    desc: 'Plâtrerie sur mesure',
  },
  {
    src: '/photos/mur_salon2.jpg',
    category: 'renovation',
    title: 'Aménagement intérieur',
    desc: 'Cloisons et niches décoratives',
  },
  {
    src: '/photos/terrasse.jpg',
    category: 'exterieur',
    title: 'Terrasse extérieure',
    desc: 'Pose dalles et structure',
  },
  {
    src: '/photos/terrasse_etage.jpg',
    category: 'exterieur',
    title: 'Terrasse étage',
    desc: 'Étanchéité et revêtement',
  },
  {
    src: '/photos/toilette.jpg',
    category: 'salle-de-bain',
    title: 'WC suspendu',
    desc: 'Habillage et carrelage',
  },
  {
    src: '/photos/WC.jpg',
    category: 'salle-de-bain',
    title: 'Toilettes design',
    desc: 'Aménagement complet',
  },
]

const categories = [
  { id: 'tous', label: 'Tous les projets', count: photos.length },
  {
    id: 'salle-de-bain',
    label: 'Salle de bain',
    count: photos.filter((p) => p.category === 'salle-de-bain').length,
  },
  {
    id: 'carrelage',
    label: 'Carrelage',
    count: photos.filter((p) => p.category === 'carrelage').length,
  },
  {
    id: 'renovation',
    label: 'Rénovation intérieure',
    count: photos.filter((p) => p.category === 'renovation').length,
  },
  {
    id: 'exterieur',
    label: 'Extérieur',
    count: photos.filter((p) => p.category === 'exterieur').length,
  },
]

const Gallery = () => {
  const [active, setActive] = useState('tous')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    active === 'tous' ? photos : photos.filter((p) => p.category === active)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1))
  }, [filtered.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1))
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxIndex, closeLightbox, prev, next])

  return (
    <section
      id="realisations"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-accent-50 border border-accent-200 rounded-full">
            <Camera className="w-4 h-4 text-accent-600" strokeWidth={2.5} />
            <span className="text-xs font-bold text-accent-700 tracking-widest uppercase">
              Nos réalisations
            </span>
          </div>
          <h2 className="heading-lg text-navy-900 text-balance mb-5">
            Des chantiers{' '}
            <span className="text-accent-500">qui parlent</span> pour nous
          </h2>
          <p className="text-lg text-navy-600 text-balance">
            Découvrez quelques-unes de nos réalisations en Alsace : salles de
            bain, carrelage, rénovation intérieure et aménagements extérieurs.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-4 md:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
                active === cat.id
                  ? 'bg-navy-900 border-navy-900 text-white shadow-lg'
                  : 'bg-white border-navy-200 text-navy-700 hover:border-navy-900 hover:text-navy-900'
              }`}
            >
              <span className="flex items-center gap-2">
                {cat.label}
                <span
                  className={`px-2 py-0.5 text-xs rounded-full font-bold ${
                    active === cat.id
                      ? 'bg-accent-500 text-white'
                      : 'bg-navy-100 text-navy-700'
                  }`}
                >
                  {cat.count}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Photo grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.button
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  layout: { duration: 0.5, type: 'spring', bounce: 0.15 },
                }}
                whileHover={{ y: -4 }}
                onClick={() => openLightbox(i)}
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl bg-navy-100 shadow-soft hover:shadow-card transition-shadow ${
                  // Vary heights for organic feel
                  i % 7 === 0 || i % 7 === 3
                    ? 'aspect-[3/4] md:row-span-2 md:aspect-[3/4]'
                    : 'aspect-square'
                }`}
                aria-label={`Voir ${photo.title} en grand`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-sm md:text-base font-bold mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    {photo.desc}
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2
                    className="w-4 h-4 text-navy-900"
                    strokeWidth={2.5}
                  />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-accent-500" strokeWidth={2.2} />
            <span className="text-sm font-medium text-navy-700">
              Vous aimez nos réalisations ?
            </span>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-lg font-semibold text-accent-600 hover:text-accent-700 underline underline-offset-4 decoration-2 decoration-accent-300 hover:decoration-accent-600 transition-all"
            >
              Concrétisons votre projet →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-sm p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-h-[75vh] w-auto rounded-xl shadow-2xl object-contain"
              />
              <div className="mt-4 text-center text-white max-w-2xl px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="text-sm text-white/70">
                  {filtered[lightboxIndex].desc}
                </p>
                <p className="mt-3 text-xs text-white/50">
                  {lightboxIndex + 1} / {filtered.length} · Utilisez ← → pour
                  naviguer
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
