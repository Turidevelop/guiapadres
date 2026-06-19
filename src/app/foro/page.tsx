import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Foro de la comunidad',
  description: 'Pregunta, comparte y ayuda a otros padres primerizos.',
}

export default function ForoPage() {
  return (
    <div className="container--narrow" style={{ padding: '2.5rem 1.25rem' }}>
      <div className={styles.hero}>
        <span className={styles.emoji}>💬</span>
        <h1 className={styles.title}>Foro de la comunidad</h1>
        <p className={styles.subtitle}>
          Un espacio para preguntar, compartir y ayudarse entre padres.
          Sin juicios, con empatía y siempre recordando que cada familia es única.
        </p>
      </div>

      {/* 
        INTEGRACIÓN DISCOURSE
        ─────────────────────
        Opción A — Redirigir al foro Discourse externo:
          Sustituir este bloque por:
          redirect('https://foro.guiapadres.com')

        Opción B — Embed con iframe (Discourse lo soporta):
          <iframe
            src="https://foro.guiapadres.com"
            style={{ width: '100%', height: '80vh', border: 'none' }}
            title="Foro de la comunidad"
          />

        Opción C — Integración profunda via Discourse API:
          Fetch de categorías/posts recientes y mostrarlos aquí
          con link "Ver más" al foro completo.
          API docs: https://docs.discourse.org
      */}

      <div className={styles.comingSoonBox}>
        <div className={styles.comingSoonIcon}>🚧</div>
        <h2 className={styles.comingSoonTitle}>Próximamente</h2>
        <p className={styles.comingSoonText}>
          El foro está en camino. Se desplegará en{' '}
          <code>foro.guiapadres.com</code> usando Discourse — open source,
          sin publicidad y moderado por padres voluntarios.
        </p>
        <div className={styles.comingSoonFeatures}>
          <span>✅ Login con Google</span>
          <span>✅ Categorías por etapa</span>
          <span>✅ Búsqueda de dudas anteriores</span>
          <span>✅ Notificaciones por email</span>
          <span>✅ App móvil nativa</span>
          <span>✅ Sin publicidad</span>
        </div>
      </div>

      <div className={styles.categories}>
        <h2 className={styles.categoriesTitle}>Categorías planificadas</h2>
        {[
          { emoji: '🍼', label: '0–6 meses', desc: 'Sueño, tomas, llanto, desarrollo inicial' },
          { emoji: '🌱', label: '6–12 meses', desc: 'Sólidos, gateo, primeras palabras' },
          { emoji: '🚶', label: '1–2 años', desc: 'Rabietas, autonomía, lenguaje' },
          { emoji: '🍽️', label: 'Alimentación', desc: 'BLW, purés, alergias, selectividad' },
          { emoji: '💤', label: 'Sueño', desc: 'Rutinas, métodos, regresiones' },
          { emoji: '❓', label: 'Dudas generales', desc: 'Todo lo que no encaja en otro sitio' },
        ].map(({ emoji, label, desc }) => (
          <div key={label} className={styles.categoryCard}>
            <span className={styles.categoryEmoji}>{emoji}</span>
            <div>
              <div className={styles.categoryLabel}>{label}</div>
              <div className={styles.categoryDesc}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.disclaimer}>
        <p>
          ⚕️ El foro es de ayuda mutua entre padres y <strong>no sustituye al pediatra</strong>.
          Para dudas médicas urgentes, contacta siempre con tu profesional de salud.
        </p>
      </div>
    </div>
  )
}
