import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, features, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-8 border border-navy-100 hover:border-accent-200 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mb-6 inline-flex">
        <div className="absolute inset-0 bg-accent-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-800 group-hover:from-accent-500 group-hover:to-accent-600 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-950 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-navy-600 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Features list */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-navy-700"
            >
              <span className="w-1.5 h-1.5 mt-1.5 bg-accent-500 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Footer arrow */}
      <div className="pt-4 border-t border-navy-100 flex items-center justify-between">
        <span className="text-sm font-semibold text-navy-900">
          En savoir plus
        </span>
        <div className="w-8 h-8 rounded-full bg-navy-50 group-hover:bg-accent-500 flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight
            className="w-4 h-4 text-navy-900 group-hover:text-white transition-colors"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </motion.article>
  )
}

export default ServiceCard
