'use client'

import { useEffect, useState } from 'react'
import styles from './EquipmentChecklist.module.css'
import { checklistCategories, checklistExtras, checklistTips } from '@/data/checklist'

const STORAGE_KEY = 'somospadres_checklist'

type CheckedMap = Record<string, boolean>

function loadChecked(): CheckedMap {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export default function EquipmentChecklist() {
  const [checked, setChecked] = useState<CheckedMap>({})
  const [hydrated, setHydrated] = useState(false)

  // Load from localStorage only after mount (avoids SSR/client mismatch)
  useEffect(() => {
    setChecked(loadChecked())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
    } catch {
      // localStorage unavailable — fail silently, state still works in-session
    }
  }, [checked, hydrated])

  const total = checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0)
  const done = Object.values(checked).filter(Boolean).length
  const percent = total ? (done / total) * 100 : 0

  function toggle(itemId: string) {
    setChecked((prev) => ({ ...prev, [itemId]: !prev[itemId] }))
  }

  function reset() {
    if (!window.confirm('¿Reiniciar toda la lista? Se desmarcarán todos los elementos.')) return
    setChecked({})
  }

  return (
    <div>
      <div className={styles.progress}>
        <span className={styles.progressText}>{done} / {total} marcados</span>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className={styles.grid}>
        {checklistCategories.map((cat) => (
          <div
            key={cat.id}
            className={styles.card}
            style={{ '--cat-color': cat.color } as React.CSSProperties}
          >
            <div className={styles.cardHead}>
              <span className={styles.cardEmoji}>{cat.emoji}</span>
              <span className={styles.cardTitle}>{cat.title}</span>
            </div>
            <div className={styles.items}>
              {cat.items.map((item, i) => {
                const itemId = `${cat.id}-${i}`
                return (
                  <div key={itemId} className={styles.item}>
                    <input
                      type="checkbox"
                      id={itemId}
                      checked={!!checked[itemId]}
                      onChange={() => toggle(itemId)}
                    />
                    <label
                      htmlFor={itemId}
                      className={checked[itemId] ? styles.labelChecked : undefined}
                    >
                      {item}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.extras}>
        <div className={styles.extrasTitle}>✨ Extras que pueden hacer vuestro día a día más fácil</div>
        <div className={styles.extrasGrid}>
          {checklistExtras.map((extra) => (
            <span key={extra.label} className={styles.extraChip}>
              {extra.emoji} {extra.label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.tips}>
        <div className={styles.tipsTitle}>💜 Tips importantes</div>
        <ul>
          {checklistTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>

      <button className={styles.resetBtn} onClick={reset}>
        Reiniciar lista
      </button>
    </div>
  )
}
