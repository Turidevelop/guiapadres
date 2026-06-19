export type ChecklistCategory = {
  id: string
  emoji: string
  title: string
  color: string
  items: string[]
}

export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'alimentacion',
    emoji: '🍼',
    title: 'Alimentación',
    color: '#4A9B6F',
    items: [
      'Cojines de lactancia',
      'Biberones (4-6)',
      'Esterilizador',
      'Fórmula infantil',
      'Extractor de leche',
      'Cepillo para biberones',
      'Dispensador de fórmula',
      'Bolsas para almacenar leche',
    ],
  },
  {
    id: 'ropa',
    emoji: '👕',
    title: 'Ropa',
    color: '#C2185B',
    items: [
      'Bodies (6-8)',
      'Pijamas o enterizos (6-8)',
      'Pantalones (4-6)',
      'Camisetas (4-6)',
      'Calcetines (4-6 pares)',
      'Manoplas (2-3 pares)',
      'Gorros (2-3)',
      'Chamarra o suéter',
      'Ropa de salida',
    ],
  },
  {
    id: 'higiene',
    emoji: '🛁',
    title: 'Higiene',
    color: '#D97706',
    items: [
      'Bañera para bebé',
      'Termómetro para agua',
      'Shampoo para bebé',
      'Jabón líquido suave',
      'Loción hidratante',
      'Crema para pañal',
      'Toallitas húmedas',
      'Cepillo para cabello',
      'Cortaúñas',
      'Aspirador nasal',
      'Termómetro corporal',
    ],
  },
  {
    id: 'descanso',
    emoji: '🌙',
    title: 'Descanso',
    color: '#6D3FC0',
    items: [
      'Cuna o moisés',
      'Colchón firme con sábanas ajustables (2-3)',
      'Saco de dormir o arrullo (2-3)',
      'Cojín o cuña antirreflujo (opcional)',
      'Cobijas ligeras',
      'Monitor para bebé',
    ],
  },
  {
    id: 'panales',
    emoji: '🧷',
    title: 'Pañales y cambio',
    color: '#3B82C4',
    items: [
      'Pañales (recién nacido)',
      'Toallitas húmedas',
      'Crema para pañal',
      'Cambiador portátil',
      'Cubiertas para cambiador',
      'Contenedor de pañales',
      'Bolsas para pañales',
      'Ropa de cambio (4-6)',
    ],
  },
  {
    id: 'transporte',
    emoji: '🚼',
    title: 'Salida y transporte',
    color: '#4A9B6F',
    items: [
      'Carriola',
      'Portabebé o fular',
      'Silla de auto (portabebé)',
      'Bolsa pañalera',
      'Cubierta para lluvia',
      'Mosquitero',
    ],
  },
  {
    id: 'seguridad',
    emoji: '🛡️',
    title: 'Salud y seguridad',
    color: '#E8602C',
    items: [
      'Kit de primeros auxilios',
      'Suero fisiológico',
      'Gasas y algodón',
      'Tijeras de punta redonda',
      'Medicamentos (bajo indicación)',
      'Protector de enchufes',
      'Seguro para cajones y puertas',
    ],
  },
  {
    id: 'juego',
    emoji: '🧸',
    title: 'Juego y estimulación',
    color: '#D97706',
    items: [
      'Manta o tapete de juego',
      'Móviles para cuna',
      'Sonajeros',
      'Libros de tela',
      'Juguetes sensoriales',
    ],
  },
]

export const checklistExtras = [
  { emoji: '💡', label: 'Luz nocturna' },
  { emoji: '💧', label: 'Humidificador' },
  { emoji: '📻', label: 'Máquina de ruido blanco' },
  { emoji: '🧺', label: 'Organizadores de closet' },
  { emoji: '🗑️', label: 'Cesto para ropa sucia' },
  { emoji: '🪑', label: 'Silla mecedora o glider' },
]

export const checklistTips = [
  'No necesitáis comprar todo antes del parto.',
  'Priorizad lo esencial y lo demás se puede ir comprando después.',
  'Cada bebé es diferente — enfocaos en lo que realmente usaréis.',
  'Pedid recomendaciones a otros padres antes de comprar (¡para eso está el foro!).',
]
