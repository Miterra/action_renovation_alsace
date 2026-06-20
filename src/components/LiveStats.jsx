import React, { useEffect, useRef, useState } from 'react'
import { Users, Eye } from 'lucide-react'

// --- Compteur de visites via une API JSON gratuite (Abacus) ---
// Aucun compte, aucune clé : /hit incrémente et renvoie { "value": N },
// /get lit la valeur sans incrémenter.
const COUNTER_NS = 'action-renovation-alsace'
const COUNTER_KEY = 'visites-total'
const ABACUS_HIT = `https://abacus.jasoncameron.dev/hit/${COUNTER_NS}/${COUNTER_KEY}`

// Petit hook : fait monter un nombre vers sa cible avec une animation fluide.
const useCountUp = (target, duration = 1400) => {
  const [value, setValue] = useState(0)
  const fromRef = useRef(0)

  useEffect(() => {
    if (target === null || target === undefined) return
    const start = fromRef.current
    const startTime = performance.now()
    let raf

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (target - start) * eased))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        fromRef.current = target
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return value
}

// Estimation "en ligne" réaliste : plus de visiteurs en journée, moins la nuit.
// (Un vrai temps réel nécessiterait un backend websocket — non dispo ici.)
const estimateOnline = () => {
  const h = new Date().getHours()
  const base = h >= 9 && h <= 21 ? 3 : h >= 7 && h < 9 ? 2 : 1
  return base + Math.floor(Math.random() * 3) // base .. base+2
}

const LiveStats = () => {
  const [online, setOnline] = useState(null)
  const [totalVisits, setTotalVisits] = useState(null)

  // Compteur de visites total : +1 à chaque chargement / refresh de la page.
  useEffect(() => {
    const controller = new AbortController()

    const loadCounter = async () => {
      try {
        const res = await fetch(ABACUS_HIT, { signal: controller.signal })
        if (!res.ok) throw new Error(`compteur HTTP ${res.status}`)
        const data = await res.json()
        if (typeof data.value === 'number') {
          setTotalVisits(data.value)
        }
      } catch (e) {
        if (e.name !== 'AbortError') {
          console.error('[LiveStats] compteur visites :', e)
        }
      }
    }

    loadCounter()
    return () => controller.abort()
  }, [])

  // Estimation "en ligne" qui évolue doucement (petite marche aléatoire)
  useEffect(() => {
    setOnline(estimateOnline())
    const id = setInterval(() => {
      setOnline((prev) => {
        const delta = Math.random() < 0.5 ? -1 : 1
        const next = (prev ?? estimateOnline()) + delta
        return Math.min(8, Math.max(1, next))
      })
    }, 11000)
    return () => clearInterval(id)
  }, [])

  const onlineDisplay = useCountUp(online ?? 1)
  const totalDisplay = useCountUp(totalVisits ?? 0)

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-md mx-auto md:mx-0 mb-12">
      {/* En ligne maintenant */}
      <div className="flex items-center gap-3 px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
        <div className="relative w-11 h-11 flex-shrink-0 rounded-xl bg-green-500/15 flex items-center justify-center">
          <Users className="w-5 h-5 text-green-400" strokeWidth={2.2} />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-navy-950" />
          </span>
        </div>
        <div className="min-w-0">
          <div className="text-2xl font-extrabold text-white leading-none tabular-nums">
            {online === null ? '·' : onlineDisplay}
          </div>
          <div className="text-xs text-white/60 mt-1 font-medium">
            en ligne maintenant
          </div>
        </div>
      </div>

      {/* Visites au total */}
      <div className="flex items-center gap-3 px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
        <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-accent-500/15 flex items-center justify-center">
          <Eye className="w-5 h-5 text-accent-400" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <div className="text-2xl font-extrabold text-white leading-none tabular-nums">
            {totalVisits === null ? '·' : totalDisplay.toLocaleString('fr-FR')}
          </div>
          <div className="text-xs text-white/60 mt-1 font-medium">
            visites au total
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStats
