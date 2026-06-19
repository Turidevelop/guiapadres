import type { Metadata } from 'next'
import Link from 'next/link'
import '@/styles/globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Guía de Padres',
    default: 'Guía de Padres — Todo lo que necesitas saber',
  },
  description:
    'Guía práctica para padres primerizos: etapas de desarrollo, alimentación, estimulación, vacunas y comunidad.',
  openGraph: {
    siteName: 'Guía de Padres',
    locale: 'es_ES',
    type: 'website',
  },
}

const navLinks = [
  { href: '/guia',         label: 'Guía por etapas' },
  { href: '/alimentacion', label: 'Alimentación' },
  { href: '/equipamiento', label: 'Lista de la compra' },
  { href: '/vacunas',      label: 'Vacunas' },
  { href: '/blog',         label: 'Blog' },
  { href: '/foro',         label: '💬 Foro' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className={styles.header}>
          <div className={`container ${styles.headerInner}`}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>👨‍👶</span>
              <span className={styles.logoText}>Guía de Padres</span>
            </Link>
            <nav className={styles.nav} aria-label="Navegación principal">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className={styles.navLink}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
          <div className={`container ${styles.footerInner}`}>
            <p className={styles.footerText}>
              👨‍👶 <strong>Guía de Padres</strong> — Hecho con amor para familias primerizas
            </p>
            <p className={styles.footerDisclaimer}>
              Este sitio es informativo y no sustituye al pediatra. Consulta siempre a tu profesional de salud.
            </p>
            <p className={styles.footerCredit}>
              Construido con Next.js · Un proyecto de{' '}
              <a href="https://turidev.es" target="_blank" rel="noopener noreferrer">
                Turidev
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
