import React, { useEffect, useRef, useState } from 'react'
import { Users, Eye } from 'lucide-react'
import {
  ref,
  onValue,
  onDisconnect,
  push,
  set,
  remove,
  runTransaction,
  serverTimestamp,
} from 'firebase/database'
import { db } from '../lib/firebase'

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

const LiveStats = () => {
  const [online, setOnline] = useState(null)
  const [totalVisits, setTotalVisits] = useState(null)

  // --- Compteur de visites total : +1 à chaque chargement de page ---
  useEffect(() => {
    const totalRef = ref(db, 'stats/totalVisits')

    // Incrémentation atomique (transaction) à chaque chargement.
    runTransaction(totalRef, (current) => (current || 0) + 1).catch((e) =>
      console.error('[LiveStats] incrément visites :', e)
    )

    // Écoute en temps réel : le total se met à jour même si d'autres
    // visiteurs arrivent pendant qu'on est sur la page.
    const unsub = onValue(
      totalRef,
      (snap) => {
        const v = snap.val()
        if (typeof v === 'number') setTotalVisits(v)
      },
      (e) => console.error('[LiveStats] lecture visites :', e)
    )

    return () => unsub()
  }, [])

  // --- Présence temps réel : nombre de visiteurs connectés à l'instant T ---
  useEffect(() => {
    const onlineRef = ref(db, 'online')
    const connectedRef = ref(db, '.info/connected')
    let myRef = null

    // Quand la connexion Firebase est établie, on s'inscrit dans /online
    // et on programme la suppression automatique à la déconnexion.
    const unsubConnected = onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        myRef = push(onlineRef)
        onDisconnect(myRef).remove()
        set(myRef, { ts: serverTimestamp() })
      }
    })

    // On compte le nombre de visiteurs présents en temps réel.
    const unsubOnline = onValue(
      onlineRef,
      (snap) => setOnline(snap.size),
      (e) => console.error('[LiveStats] présence :', e)
    )

    return () => {
      unsubConnected()
      unsubOnline()
      if (myRef) remove(myRef)
    }
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
