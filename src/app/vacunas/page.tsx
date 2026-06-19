import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Calendario de vacunas',
  description: 'Calendario de vacunación infantil en España, con fechas, qué protegen y qué esperar tras cada dosis.',
}

const vacunas = [
  {
    edad: 'Recién nacido',
    vacunas: [{ nombre: 'Hepatitis B (1ª dosis)', abrev: 'HB', color: '#2196F3' }],
  },
  {
    edad: '2 meses',
    vacunas: [
      { nombre: 'Hexavalente (DTPa + Hib + VPI + HB)', abrev: '6en1', color: '#E91E63' },
      { nombre: 'Neumococo conjugada (1ª)', abrev: 'VNC', color: '#FF9800' },
      { nombre: 'Rotavirus (1ª)', abrev: 'RV', color: '#4CAF50' },
    ],
  },
  {
    edad: '4 meses',
    vacunas: [
      { nombre: 'Hexavalente (2ª dosis)', abrev: '6en1', color: '#E91E63' },
      { nombre: 'Neumococo conjugada (2ª)', abrev: 'VNC', color: '#FF9800' },
      { nombre: 'Rotavirus (2ª)', abrev: 'RV', color: '#4CAF50' },
      { nombre: 'Meningococo B (1ª)', abrev: 'MenB', color: '#673AB7' },
    ],
  },
  {
    edad: '6 meses',
    vacunas: [
      { nombre: 'Hexavalente (3ª dosis)', abrev: '6en1', color: '#E91E63' },
      { nombre: 'Meningococo B (2ª)', abrev: 'MenB', color: '#673AB7' },
    ],
  },
  {
    edad: '12 meses',
    vacunas: [
      { nombre: 'Triple vírica — Sarampión, Rubeola, Parotiditis (1ª)', abrev: 'SRP', color: '#009688' },
      { nombre: 'Neumococo conjugada (3ª — refuerzo)', abrev: 'VNC', color: '#FF9800' },
      { nombre: 'Meningococo C (1ª)', abrev: 'MenC', color: '#795548' },
      { nombre: 'Varicela (1ª)', abrev: 'Var', color: '#607D8B' },
    ],
  },
  {
    edad: '15 meses',
    vacunas: [
      { nombre: 'Meningococo B (3ª — refuerzo)', abrev: 'MenB', color: '#673AB7' },
    ],
  },
  {
    edad: '3 años',
    vacunas: [
      { nombre: 'Triple vírica (2ª dosis)', abrev: 'SRP', color: '#009688' },
      { nombre: 'Varicela (2ª dosis)', abrev: 'Var', color: '#607D8B' },
    ],
  },
  {
    edad: '6 años',
    vacunas: [
      { nombre: 'DTPa (refuerzo, 4ª dosis)', abrev: 'DTPa', color: '#E8602C' },
    ],
  },
]

export default function VacunasPage() {
  return (
    <div className="container--narrow" style={{ padding: '2.5rem 1.25rem' }}>
      <div className={styles.header}>
        <h1 className={styles.title}>Calendario de vacunas</h1>
        <p className={styles.subtitle}>
          Calendario oficial de España. Algunas CCAA añaden vacunas adicionales —
          consulta siempre con tu pediatra.
        </p>
      </div>

      <div className={styles.timeline}>
        {vacunas.map(({ edad, vacunas: vacs }) => (
          <div key={edad} className={styles.timelineRow}>
            <div className={styles.timelineAge}>
              <span>{edad}</span>
            </div>
            <div className={styles.timelineVacunas}>
              {vacs.map((v) => (
                <div
                  key={v.nombre}
                  className={styles.vacunaChip}
                  style={{ '--chip-color': v.color } as React.CSSProperties}
                >
                  <span className={styles.vacunaAbrev}>{v.abrev}</span>
                  <span className={styles.vacunaNombre}>{v.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.disclaimer}>
        <p>
          ⚕️ Este calendario es orientativo. Las vacunas financiadas pueden variar por comunidad autónoma.
          Tu pediatra te indicará el calendario exacto y cómo preparar al bebé para cada visita.
        </p>
      </div>
    </div>
  )
}
