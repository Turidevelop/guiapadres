import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Guía de Padres — Todo lo que necesitas saber',
}

const features = [
  {
    href: '/guia',
    emoji: '📅',
    title: 'Guía por etapas',
    desc: 'De 0 a 24 meses: sueño, comida, desarrollo y estimulación semana a semana.',
    color: '#2B7FBF',
  },
  {
    href: '/alimentacion',
    emoji: '🥕',
    title: 'Alimentación',
    desc: 'Cuándo introducir cada alimento, qué está prohibido y cómo hacer BLW con seguridad.',
    color: '#E8602C',
  },
  {
    href: '/equipamiento',
    emoji: '🧸',
    title: 'Lista de la compra',
    desc: 'Checklist interactiva de todo lo que necesita tu bebé, por categorías.',
    color: '#3B82C4',
  },
  {
    href: '/vacunas',
    emoji: '💉',
    title: 'Calendario de vacunas',
    desc: 'Todas las vacunas del calendario español con fechas, para qué sirven y qué esperar.',
    color: '#4CAF50',
  },
  {
    href: '/blog',
    emoji: '📝',
    title: 'Blog',
    desc: 'Artículos prácticos escritos por padres para padres. Sin tecnicismos innecesarios.',
    color: '#FF9800',
  },
  {
    href: '/foro',
    emoji: '💬',
    title: 'Foro de la comunidad',
    desc: 'Pregunta, comparte y ayuda a otros padres. Próximamente.',
    color: '#673AB7',
    soon: true,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container--narrow ${styles.heroInner}`}>
          <span className={styles.heroEyebrow}>Para padres primerizos 👋</span>
          <h1 className={styles.heroTitle}>
            La guía que ojalá<br />
            <span className={styles.heroAccent}>hubieras tenido desde el día 1</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Todo lo que necesitas saber sobre tu bebé — etapas, alimentación, estimulación y vacunas —
            organizado de forma clara, sin agobios y en español.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/guia" className={styles.ctaPrimary}>
              Ver la guía completa →
            </Link>
            <Link href="/foro" className={styles.ctaSecondary}>
              Únete a la comunidad
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.grid}>
            {features.map(({ href, emoji, title, desc, color, soon }) => (
              <Link
                key={href}
                href={href}
                className={styles.card}
                style={{ '--card-accent': color } as React.CSSProperties}
              >
                <span className={styles.cardEmoji}>{emoji}</span>
                <div>
                  <h2 className={styles.cardTitle}>
                    {title}
                    {soon && <span className={styles.cardBadge}>Próximamente</span>}
                  </h2>
                  <p className={styles.cardDesc}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className={styles.trust}>
        <div className="container--narrow">
          <p className={styles.trustText}>
            ⚕️ Todo el contenido está basado en guías de la <strong>OMS</strong>, la{' '}
            <strong>AEP (Asociación Española de Pediatría)</strong> y consenso médico actualizado.
            Este sitio no sustituye al pediatra.
          </p>
        </div>
      </section>
    </>
  )
}
