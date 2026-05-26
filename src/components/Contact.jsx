import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import Button from './Button'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

// formsubmit.co endpoint — la première soumission déclenche un mail
// de validation à confirmer sur action.renovation67@gmail.com.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/action.renovation67@gmail.com'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: '19 Avenue du Ried',
    subValue: '67800 Hœnheim',
    href: 'https://www.google.com/maps/search/?api=1&query=19+Avenue+du+Ried+67800+Hoenheim',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '06 62 40 21 44',
    subValue: 'Lun. - Sam. : 8h - 19h',
    href: 'tel:+33662402144',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'action.renovation67@gmail.com',
    subValue: 'Réponse sous 24h',
    href: 'mailto:action.renovation67@gmail.com',
  },
]

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `Nouvelle demande de devis — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setStatus('success')
      setForm(initialForm)

      setTimeout(() => setStatus('idle'), 6000)
    } catch (error) {
      console.error('[Action Rénovation Alsace] Erreur envoi :', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-navy-50/50 to-white relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-100 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-accent-50 border border-accent-200 rounded-full">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-accent-700 tracking-widest uppercase">
              Devis gratuit
            </span>
          </div>
          <h2 className="heading-lg text-navy-900 text-balance mb-5">
            Parlons de votre{' '}
            <span className="text-accent-500">projet</span>.
          </h2>
          <p className="text-lg text-navy-600 text-balance">
            Décrivez-nous votre besoin, nous revenons vers vous avec un devis
            détaillé sous 48h. Sans engagement et 100% gratuit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-card p-6 md:p-10 border border-navy-100"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                Demande de devis
              </h3>
              <p className="text-sm text-navy-600 mb-6">
                Remplissez ce formulaire, c'est rapide.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <FormField
                  label="Nom complet"
                  name="name"
                  type="text"
                  icon={User}
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Téléphone"
                  name="phone"
                  type="tel"
                  icon={Phone}
                  placeholder="06 12 34 56 78"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <FormField
                label="Email"
                name="email"
                type="email"
                icon={Mail}
                placeholder="jean.dupont@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="mb-5"
              />

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Votre projet
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 text-navy-400 pointer-events-none">
                    <MessageSquare className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet : type de travaux, superficie, échéance, contraintes..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-navy-50/50 border border-navy-200 rounded-xl text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                icon={
                  status === 'success'
                    ? CheckCircle2
                    : status === 'error'
                    ? AlertCircle
                    : Send
                }
                disabled={status === 'submitting' || status === 'success'}
                className={status === 'submitting' ? 'opacity-70 cursor-wait' : ''}
              >
                {status === 'success'
                  ? 'Demande envoyée !'
                  : status === 'submitting'
                  ? 'Envoi en cours...'
                  : status === 'error'
                  ? 'Erreur, réessayer'
                  : 'Envoyer ma demande'}
              </Button>

              {/* Status message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                  role="status"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.2}
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-green-900">
                      Merci pour votre demande !
                    </p>
                    <p className="text-green-700">
                      Nous vous recontactons sous 24h ouvrées.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                  role="alert"
                >
                  <AlertCircle
                    className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2.2}
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-red-900">
                      Une erreur est survenue.
                    </p>
                    <p className="text-red-700">
                      Contactez-nous directement au{' '}
                      <a
                        href="tel:+33662402144"
                        className="font-bold underline"
                      >
                        06 62 40 21 44
                      </a>
                      .
                    </p>
                  </div>
                </motion.div>
              )}

              <p className="text-xs text-navy-500 text-center mt-4">
                En soumettant ce formulaire, vous acceptez d'être recontacté
                par notre équipe.
              </p>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-navy-950 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-500/20 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold mb-2 relative">
                Coordonnées
              </h3>
              <p className="text-white/70 text-sm mb-8 relative">
                Une question urgente ? Contactez-nous directement.
              </p>

              <div className="space-y-5 relative">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.label === 'Adresse' ? '_blank' : undefined}
                      rel={
                        info.label === 'Adresse'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 group-hover:bg-accent-500 group-hover:border-accent-500 flex items-center justify-center transition-all duration-300">
                        <Icon
                          className="w-5 h-5 text-white"
                          strokeWidth={2.2}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          {info.label}
                        </div>
                        <div className="text-white font-medium group-hover:text-accent-300 transition-colors break-words">
                          {info.value}
                        </div>
                        <div className="text-xs text-white/60 mt-0.5">
                          {info.subValue}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick call card */}
            <a
              href="tel:+33662402144"
              className="block bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl p-8 text-white shadow-cta hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <h4 className="text-lg font-bold">Appel direct</h4>
              </div>
              <p className="text-white/95 text-sm leading-relaxed mb-3">
                Pour les urgences ou demandes rapides :
              </p>
              <div className="text-2xl font-extrabold tracking-tight">
                06 62 40 21 44
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-white/80">
                <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
                Lun. - Sam. : 8h - 19h
              </div>
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

const FormField = ({
  label,
  name,
  type,
  icon: Icon,
  placeholder,
  value,
  onChange,
  required,
  className = '',
}) => (
  <div className={className}>
    <label
      htmlFor={name}
      className="block text-sm font-semibold text-navy-900 mb-2"
    >
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute top-1/2 -translate-y-1/2 left-3.5 text-navy-400 pointer-events-none">
          <Icon className="w-5 h-5" strokeWidth={2} />
        </div>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full ${
          Icon ? 'pl-11' : 'pl-4'
        } pr-4 py-3.5 bg-navy-50/50 border border-navy-200 rounded-xl text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all`}
      />
    </div>
  </div>
)

export default Contact
