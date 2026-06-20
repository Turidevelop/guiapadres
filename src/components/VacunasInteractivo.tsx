'use client'

import { useMemo, useState } from 'react'
import styles from './VacunasInteractivo.module.css'
import { calendarioBase, ccaaList, type TramoEdad, type Vacuna } from '@/data/vacunas'

// Orden canónico de tramos de edad para fusionar base + extras
const ORDEN_EDADES = [
  'Recién nacido', '2 meses', '4 meses', '5 años', '6 meses', '11 meses',
  '12 meses', '15 meses', '3-4 años', '5 años', '6 años', '6-7 años',
  '6-8 años', '6-9 años', '6-11 años', '12 años', '14 años',
]

function edadIndex(edad: string): number {
  const i = ORDEN_EDADES.indexOf(edad)
  return i === -1 ? 999 : i
}

function parseColor(raw: string) {
  try {
    return JSON.parse(raw) as { bg: string; border: string; abrevColor: string; abrevBg: string }
  } catch {
    return { bg: '#eee', border: '#ccc', abrevColor: '#333', abrevBg: '#ddd' }
  }
}

export default function VacunasInteractivo() {
  // Murcia seleccionada por defecto
  const [seleccionadas, setSeleccionadas] = useState<string[]>(['murcia'])

  function toggle(id: string) {
    setSeleccionadas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  // Fusiona calendario base + las "extra" de las CCAA seleccionadas
  const calendario = useMemo(() => {
    const merged = new Map<string, Vacuna[]>()

    // 1. base
    for (const tramo of calendarioBase) {
      merged.set(tramo.edad, [...tramo.vacunas])
    }

    // 2. capas autonómicas
    for (const id of seleccionadas) {
      const ccaa = ccaaList.find((c) => c.id === id)
      if (!ccaa) continue
      for (const tramo of ccaa.extra) {
        const existing = merged.get(tramo.edad) ?? []
        // evita duplicar la misma vacuna (por abreviatura + nombre)
        const nuevos = tramo.vacunas.filter(
          (nv) => !existing.some((e) => e.abrev === nv.abrev && e.nombre === nv.nombre)
        )
        merged.set(tramo.edad, [...existing, ...nuevos])
      }
    }

    const result: TramoEdad[] = Array.from(merged.entries()).map(([edad, vacunas]) => ({
      edad,
      vacunas,
    }))
    result.sort((a, b) => edadIndex(a.edad) - edadIndex(b.edad))
    return result
  }, [seleccionadas])

  const notas = seleccionadas
    .map((id) => ccaaList.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => !!c && !!c.nota)

  return (
    <div>
      {/* Selector de CCAA */}
      <div className={styles.selector}>
        <div className={styles.selectorTitle}>
          Selecciona tu comunidad autónoma para ver sus vacunas adicionales sobre el calendario común:
        </div>
        <div className={styles.chips}>
          {ccaaList.map((ccaa) => {
            const active = seleccionadas.includes(ccaa.id)
            return (
              <button
                key={ccaa.id}
                className={`${styles.chip} ${active ? styles.chipActive : ''}`}
                onClick={() => toggle(ccaa.id)}
                aria-pressed={active}
              >
                {active ? '✓ ' : ''}{ccaa.nombre}
                {!ccaa.verificado && <span className={styles.chipApprox} title="Diferencias por confirmar en fuente oficial">*</span>}
              </button>
            )
          })}
        </div>
      </div>

      {/* Notas de las CCAA seleccionadas */}
      {notas.length > 0 && (
        <div className={styles.notas}>
          {notas.map((c) => (
            <div key={c.id} className={styles.nota}>
              <strong>{c.nombre}:</strong> {c.nota}
              {!c.verificado && (
                <span className={styles.notaWarn}> (diferencias no confirmadas al detalle — verifica en la web oficial de tu comunidad)</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tabla calendario */}
      <div className={styles.timeline}>
        {calendario.map((tramo) => (
          <div key={tramo.edad} className={styles.row}>
            <div className={styles.age}>{tramo.edad}</div>
            <div className={styles.chipsVacunas}>
              {tramo.vacunas.map((vac, i) => {
                const c = parseColor(vac.color)
                return (
                  <div
                    key={`${vac.abrev}-${i}`}
                    className={styles.vacChip}
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    <span
                      className={styles.vacAbrev}
                      style={{ color: c.abrevColor, background: c.abrevBg }}
                    >
                      {vac.abrev}
                    </span>
                    <span className={styles.vacNombre}>{vac.nombre}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.disclaimer}>
        ⚕️ Este calendario es orientativo y combina el calendario común del SNS con las diferencias
        autonómicas. Las comunidades marcadas con <strong>*</strong> tienen diferencias no confirmadas
        al detalle en esta web. Confirma siempre el calendario exacto con tu pediatra y con la fuente
        oficial de tu comunidad autónoma.
      </div>
    </div>
  )
}
