import type { Metadata } from 'next'
import EquipmentChecklist from '@/components/EquipmentChecklist'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Lista de la compra',
  description: 'Checklist interactiva de todo lo que necesita tu bebé, organizada por categorías: alimentación, ropa, higiene, descanso, pañales, transporte, seguridad y juego.',
}

export default function EquipamientoPage() {
  return (
    <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
      <div className={styles.header}>
        <h1 className={styles.title}>Todo lo que necesita tu bebé</h1>
        <p className={styles.subtitle}>
          Marcad lo que ya tengáis — la lista guarda vuestro progreso en este dispositivo.
          No hace falta comprarlo todo antes del parto.
        </p>
      </div>

      <EquipmentChecklist />
    </div>
  )
}
