import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos prácticos para padres primerizos.',
}

// Artículos reales en src/app/blog/[slug]/page.tsx
// Este índice lista metadata para las cards — si se añaden más artículos,
// añadir aquí su entrada correspondiente
const posts = [
  {
    slug: 'primeras-semanas-en-casa',
    title: 'Las primeras semanas en casa: lo que nadie te cuenta',
    excerpt: 'Guía honesta sobre cómo sobrevivir (y disfrutar) las primeras semanas con tu recién nacido.',
    date: '2024-06-01',
    readTime: '6 min',
    tag: 'Recién nacido',
  },
  {
    slug: 'tummy-time-guia-completa',
    title: 'Tummy time: por qué es tan importante y cómo hacerlo bien',
    excerpt: 'El tiempo boca abajo es una de las mejores cosas que puedes hacer por tu bebé. Te explicamos cómo, cuándo y cuánto.',
    date: '2024-06-10',
    readTime: '5 min',
    tag: 'Estimulación',
  },
  {
    slug: 'blw-vs-pures',
    title: 'BLW vs purés: ¿cuál es mejor para mi bebé?',
    excerpt: 'Comparativa honesta de los dos métodos de introducción de sólidos. Sin dogmas, con evidencia.',
    date: '2024-06-18',
    readTime: '8 min',
    tag: 'Alimentación',
  },
]

const tagColors: Record<string, string> = {
  'Recién nacido': '#2196F3',
  Estimulación:   '#4CAF50',
  Alimentación:   '#E8602C',
}

export default function BlogPage() {
  return (
    <div className="container--narrow" style={{ padding: '2.5rem 1.25rem' }}>
      <div className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Artículos prácticos escritos para padres, sin tecnicismos y con evidencia real.
        </p>
      </div>

      <div className={styles.posts}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span
                className={styles.postTag}
                style={{ '--tag-color': tagColors[post.tag] ?? '#888' } as React.CSSProperties}
              >
                {post.tag}
              </span>
              <span className={styles.postDate}>{post.date} · {post.readTime} lectura</span>
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <span className={styles.postReadMore}>Leer artículo →</span>
          </Link>
        ))}
      </div>

      <div className={styles.comingSoon}>
        <p>✍️ ¿Tienes una duda que quieras resolver? Pregunta en el <Link href="/foro" style={{ color: 'var(--color-accent)' }}>foro</Link>.</p>
      </div>
    </div>
  )
}
