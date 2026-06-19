import Link from 'next/link'
import styles from './ArticleLayout.module.css'

type ArticleLayoutProps = {
  title: string
  tag: string
  tagColor: string
  date: string
  readTime: string
  children: React.ReactNode
}

export default function ArticleLayout({ title, tag, tagColor, date, readTime, children }: ArticleLayoutProps) {
  return (
    <article className="container--narrow" style={{ padding: '2.5rem 1.25rem 4rem' }}>
      <Link href="/blog" className={styles.back}>← Volver al blog</Link>

      <header className={styles.header}>
        <span className={styles.tag} style={{ '--tag-color': tagColor } as React.CSSProperties}>
          {tag}
        </span>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.meta}>{date} · {readTime} de lectura</span>
      </header>

      <div className={styles.body}>
        {children}
      </div>

      <div className={styles.footer}>
        <p>
          ⚕️ Este artículo es informativo y no sustituye al pediatra. Cada bebé tiene su propio ritmo —
          consultad siempre con vuestro profesional de salud ante cualquier duda.
        </p>
        <p className={styles.footerCta}>
          ¿Tienes una duda relacionada? <Link href="/foro">Pregunta en el foro</Link> — pronto disponible.
        </p>
      </div>
    </article>
  )
}
