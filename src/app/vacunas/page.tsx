import type { Metadata } from 'next'
import VacunasInteractivo from '@/components/VacunasInteractivo'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Calendario de vacunas',
  description: 'Calendario de vacunación infantil en España con filtro por comunidad autónoma. Base del calendario común del SNS más las diferencias de cada CCAA.',
}

export default function VacunasPage() {
  return (
    <div className="container--narrow" style={{ padding: '2.5rem 1.25rem' }}>
      <div className={styles.header}>
        <h1 className={styles.title}>Calendario de vacunas</h1>
        <p className={styles.subtitle}>
          Parte del calendario común del Sistema Nacional de Salud y añade las vacunas
          adicionales de tu comunidad autónoma. Por defecto se muestra la Región de Murcia.
        </p>
      </div>

      <VacunasInteractivo />
    </div>
  )
}
