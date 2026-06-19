import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Alimentación',
  description: 'Guía de introducción de alimentos para bebés: cuándo, cómo y qué nunca dar.',
}

const alimentos = [
  { mes: '6 m', alimento: 'Verduras', ejemplos: 'Calabacín, zanahoria, patata, boniato', ok: true },
  { mes: '6 m', alimento: 'Frutas', ejemplos: 'Manzana, pera, plátano, melocotón', ok: true },
  { mes: '6 m', alimento: 'Cereales sin gluten', ejemplos: 'Arroz, maíz, mijo', ok: true },
  { mes: '7 m', alimento: 'Cereales con gluten', ejemplos: 'Avena, trigo, cebada', ok: true },
  { mes: '8 m', alimento: 'Carne', ejemplos: 'Pollo, pavo, ternera (bien cocida)', ok: true },
  { mes: '8 m', alimento: 'Legumbres', ejemplos: 'Lentejas, garbanzos, judías (bien cocidas)', ok: true },
  { mes: '9 m', alimento: 'Huevo', ejemplos: 'Bien cocinado (yema y clara), siempre completo', ok: true },
  { mes: '9 m', alimento: 'Pescado blanco', ejemplos: 'Merluza, lenguado, bacalao (sin espinas)', ok: true },
  { mes: '10 m', alimento: 'Pescado azul', ejemplos: 'Salmón, sardina (sin espinas, con moderación)', ok: true },
  { mes: '12 m', alimento: 'Leche de vaca', ejemplos: 'Entera (no semidesnatada). Máx. 500ml/día', ok: true },
  { mes: '12 m+', alimento: 'Derivados lácteos enteros', ejemplos: 'Yogur natural, queso fresco', ok: true },
]

const prohibidos = [
  { alimento: 'Miel', razon: 'Riesgo de botulismo infantil hasta los 12 meses' },
  { alimento: 'Sal añadida', razon: 'Los riñones del bebé no están preparados para procesarla' },
  { alimento: 'Azúcar añadido', razon: 'Interfiere con el desarrollo del gusto natural' },
  { alimento: 'Leche de vaca entera (bebida)', razon: 'No antes de los 12 meses como bebida principal' },
  { alimento: 'Frutos secos enteros', razon: 'Riesgo de atragantamiento hasta los 3–4 años (molidos sí)' },
  { alimento: 'Embutidos y fiambres', razon: 'Exceso de sal, nitratos y grasas saturadas' },
  { alimento: 'Zumos (incluso naturales)', razon: 'Azúcares libres sin fibra. La fruta mejor entera' },
  { alimento: 'Bebidas vegetales (avena, almendra...)', razon: 'No son nutricionalmente equivalentes a la leche materna ni fórmula' },
]

export default function AlimentacionPage() {
  return (
    <div className="container--narrow" style={{ padding: '2.5rem 1.25rem' }}>
      <div className={styles.header}>
        <h1 className={styles.title}>Introducción de alimentos</h1>
        <p className={styles.subtitle}>
          Cuándo introducir cada alimento, en qué orden y qué nunca debes dar antes de tiempo.
          Basado en las guías de la AEP y la OMS.
        </p>
      </div>

      <h2 className={styles.sectionTitle}>📅 Orden de introducción</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Edad</th>
              <th>Alimento</th>
              <th>Ejemplos</th>
            </tr>
          </thead>
          <tbody>
            {alimentos.map((row, i) => (
              <tr key={i}>
                <td><span className={styles.mesChip}>{row.mes}</span></td>
                <td className={styles.alimentoNombre}>{row.alimento}</td>
                <td className={styles.alimentoEjemplos}>{row.ejemplos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>🚫 Nunca antes de los 12 meses</h2>
      <div className={styles.prohibidos}>
        {prohibidos.map(({ alimento, razon }) => (
          <div key={alimento} className={styles.prohibidoCard}>
            <span className={styles.prohibidoNombre}>{alimento}</span>
            <span className={styles.prohibidoRazon}>{razon}</span>
          </div>
        ))}
      </div>

      <div className={styles.disclaimer}>
        <p>
          ⚕️ Introduce un alimento nuevo cada 3–5 días para detectar posibles alergias.
          Si hay historia familiar de alergias alimentarias, consulta con el pediatra antes de introducir huevo, pescado o frutos secos.
        </p>
      </div>
    </div>
  )
}
