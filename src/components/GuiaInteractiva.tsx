'use client'

import { useState } from 'react'
import styles from './GuiaInteractiva.module.css'
import { sections } from '@/data/guia'

export default function GuiaInteractiva() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className={`container--narrow ${styles.wrapper}`}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Guía por etapas</h1>
        <p className={styles.pageSubtitle}>
          De 0 a 24 meses — alimentación, sueño, desarrollo y cómo estimular a tu bebé
        </p>
      </div>

      {sections.map((section) => {
        const isOpen = activeSection === section.id
        return (
          <div
            key={section.id}
            className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}
            style={{ '--accent': section.accent } as React.CSSProperties}
          >
            <button
              className={styles.cardHeader}
              onClick={() => setActiveSection(isOpen ? null : section.id)}
              aria-expanded={isOpen}
            >
              <div className={styles.cardHeaderLeft}>
                <span className={styles.cardEmoji}>{section.emoji}</span>
                <span className={styles.cardTitle}>{section.title}</span>
              </div>
              <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>▾</span>
            </button>

            {isOpen && (
              <div className={styles.cardBody}>
                {section.items.map((item, i) => {
                  if ('areas' in item) {
                    return (
                      <div key={i} className={styles.estimulacion}>
                        <div className={styles.estimulacionHeader}>
                          <span>{item.subtitle} — Cómo estimularlo</span>
                        </div>
                        {item.areas.map((area, k) => (
                          <div key={k} className={styles.areaCard}>
                            <div className={styles.areaTitle}>{area.area}</div>
                            <div className={styles.areaDesc}>{area.descripcion}</div>
                            <ul className={styles.areaList}>
                              {area.ejemplos.map((ej, m) => (
                                <li key={m}>{ej}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <div key={i} className={styles.section}>
                      <h3 className={styles.sectionTitle}>{item.subtitle}</h3>
                      <ul className={styles.sectionList}>
                        {item.content.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      <div className={styles.disclaimer}>
        <p>
          <strong>Recuerda:</strong> Ninguna guía sustituye al pediatra. Cada bebé tiene su propio ritmo.
        </p>
      </div>
    </div>
  )
}
