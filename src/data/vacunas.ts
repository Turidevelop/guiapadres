// ────────────────────────────────────────────────────────────────
// CALENDARIO VACUNAL — datos
//
// FUENTES:
// - Base común: Calendario Común de Vacunación a lo largo de toda la
//   vida del CISNS, recomendado para 2026 (aprobado 12-dic-2025).
// - Murcia: Orden de 13 de octubre de 2025 de la Consejería de Salud
//   (BORM nº 253, 31-oct-2025), Anexo 1.
// - Diferencias de otras CCAA: recopilación AEP/CAV-AEP 2026 y notas
//   públicas de cada comunidad. Donde no hay confirmación oficial al
//   detalle de la dosis, se marca como aproximado y se remite a la
//   fuente autonómica.
//
// IMPORTANTE: este calendario es ORIENTATIVO y puede cambiar. Cada
// familia debe confirmar con su pediatra y con la fuente oficial de
// su comunidad autónoma.
// ────────────────────────────────────────────────────────────────

export type Vacuna = {
  abrev: string
  nombre: string
  color: string
}

export type TramoEdad = {
  edad: string
  vacunas: Vacuna[]
}

// Paleta por familia de vacuna (consistente en toda la tabla)
const C = {
  hb:   { bg: '#EBF4FC', border: '#b3d4f0', abrevColor: '#1565C0', abrevBg: '#bbdefb' },
  hexa: { bg: '#fce4ec', border: '#f48fb1', abrevColor: '#880e4f', abrevBg: '#f8bbd0' },
  vnc:  { bg: '#fff3e0', border: '#ffcc80', abrevColor: '#e65100', abrevBg: '#ffe0b2' },
  rv:   { bg: '#e8f5e9', border: '#a5d6a7', abrevColor: '#1b5e20', abrevBg: '#c8e6c9' },
  menb: { bg: '#ede7f6', border: '#ce93d8', abrevColor: '#4a148c', abrevBg: '#e1bee7' },
  srp:  { bg: '#e0f2f1', border: '#80cbc4', abrevColor: '#004d40', abrevBg: '#b2dfdb' },
  var:  { bg: '#e8f5e9', border: '#a5d6a7', abrevColor: '#1b5e20', abrevBg: '#c8e6c9' },
  menc: { bg: '#efebe9', border: '#bcaaa4', abrevColor: '#3e2723', abrevBg: '#d7ccc8' },
  acwy: { bg: '#e3f2fd', border: '#90caf9', abrevColor: '#0d47a1', abrevBg: '#bbdefb' },
  dtpa: { bg: '#fbe9e7', border: '#ffab91', abrevColor: '#bf360c', abrevBg: '#ffccbc' },
  vph:  { bg: '#f3e5f5', border: '#ce93d8', abrevColor: '#6a1b9a', abrevBg: '#e1bee7' },
  gripe:{ bg: '#e1f5fe', border: '#81d4fa', abrevColor: '#01579b', abrevBg: '#b3e5fc' },
  hepa: { bg: '#fff8e1', border: '#ffe082', abrevColor: '#ff6f00', abrevBg: '#ffecb3' },
  vrs:  { bg: '#e0f7fa', border: '#80deea', abrevColor: '#006064', abrevBg: '#b2ebf2' },
}

function v(abrev: string, nombre: string, c: typeof C[keyof typeof C]): Vacuna {
  return { abrev, nombre, color: JSON.stringify(c) }
}

// ── CALENDARIO COMÚN ESPAÑOL (base, siempre visible) ────────────
export const calendarioBase: TramoEdad[] = [
  {
    edad: 'Recién nacido',
    vacunas: [v('HB', 'Hepatitis B (1ª dosis)', C.hb)],
  },
  {
    edad: '2 meses',
    vacunas: [
      v('6en1', 'Hexavalente — DTPa + Hib + VPI + HB (1ª)', C.hexa),
      v('VNC', 'Neumococo conjugada (1ª)', C.vnc),
      v('MenB', 'Meningococo B (1ª)', C.menb),
      v('RV', 'Rotavirus (1ª)', C.rv),
    ],
  },
  {
    edad: '4 meses',
    vacunas: [
      v('6en1', 'Hexavalente (2ª)', C.hexa),
      v('VNC', 'Neumococo conjugada (2ª)', C.vnc),
      v('MenB', 'Meningococo B (2ª)', C.menb),
      v('RV', 'Rotavirus (2ª)', C.rv),
    ],
  },
  {
    edad: '11 meses',
    vacunas: [
      v('6en1', 'Hexavalente (3ª — refuerzo)', C.hexa),
      v('VNC', 'Neumococo conjugada (3ª — refuerzo)', C.vnc),
      v('MenB', 'Meningococo B (3ª — refuerzo)', C.menb),
    ],
  },
  {
    edad: '12 meses',
    vacunas: [
      v('SRP', 'Triple vírica — Sarampión, Rubeola, Parotiditis (1ª)', C.srp),
      v('MenC/ACWY', 'Meningococo C o ACWY', C.menc),
    ],
  },
  {
    edad: '15 meses',
    vacunas: [v('Var', 'Varicela (1ª)', C.var)],
  },
  {
    edad: '3-4 años',
    vacunas: [
      v('SRP', 'Triple vírica (2ª)', C.srp),
      v('Var', 'Varicela (2ª)', C.var),
    ],
  },
  {
    edad: '6 años',
    vacunas: [
      v('DTPa/Tdpa', 'Difteria, tétanos, tosferina + Polio (refuerzo)', C.dtpa),
    ],
  },
  {
    edad: '12 años',
    vacunas: [
      v('VPH', 'Virus del papiloma humano (todos los sexos)', C.vph),
      v('MenACWY', 'Meningococo ACWY', C.acwy),
    ],
  },
  {
    edad: '14 años',
    vacunas: [v('Tdpa', 'Difteria, tétanos, tosferina (baja carga)', C.dtpa)],
  },
]

// ── DIFERENCIAS AUTONÓMICAS ─────────────────────────────────────
// Cada CCAA añade tramos extra o vacunas adicionales sobre la base.
// `extra` se fusiona con el calendario base por tramo de edad.

export type DiferenciaCCAA = {
  id: string
  nombre: string
  verificado: boolean // true si hay fuente oficial al detalle
  nota?: string
  extra: TramoEdad[]
}

export const ccaaList: DiferenciaCCAA[] = [
  {
    id: 'murcia',
    nombre: 'Región de Murcia',
    verificado: true,
    nota: 'Fuente: Orden 13-oct-2025, BORM nº 253. Incluye nirsevimab (VRS) en lactantes, gripe hasta los 9 años y hepatitis A.',
    extra: [
      {
        edad: 'Recién nacido',
        vacunas: [v('VRS', 'Nirsevimab (anticuerpo VRS) — temporada', C.vrs)],
      },
      {
        edad: '6 meses',
        vacunas: [v('Gripe', 'Gripe (desde 6 meses, campaña estacional)', C.gripe)],
      },
      {
        edad: '12 meses',
        vacunas: [v('HepA', 'Hepatitis A (1ª)', C.hepa)],
      },
      {
        edad: '15 meses',
        vacunas: [v('HepA', 'Hepatitis A (2ª)', C.hepa)],
      },
      {
        edad: '6-9 años',
        vacunas: [v('Gripe', 'Gripe anual hasta los 9 años (escolar)', C.gripe)],
      },
    ],
  },
  {
    id: 'galicia',
    nombre: 'Galicia',
    verificado: true,
    nota: 'Gripe infantil ampliada hasta los 11 años. Rotavirus y hepatitis A sistemáticos.',
    extra: [
      { edad: '12 meses', vacunas: [v('HepA', 'Hepatitis A (1ª)', C.hepa)] },
      { edad: '15 meses', vacunas: [v('HepA', 'Hepatitis A (2ª)', C.hepa)] },
      { edad: '6-11 años', vacunas: [v('Gripe', 'Gripe anual hasta los 11 años', C.gripe)] },
    ],
  },
  {
    id: 'rioja',
    nombre: 'La Rioja',
    verificado: true,
    nota: 'Gripe infantil ampliada hasta los 11 años incluidos.',
    extra: [
      { edad: '6-11 años', vacunas: [v('Gripe', 'Gripe anual hasta los 11 años', C.gripe)] },
    ],
  },
  {
    id: 'castillaleon',
    nombre: 'Castilla y León',
    verificado: true,
    nota: 'Gripe infantil ampliada hasta los 8 años. Hepatitis A sistemática.',
    extra: [
      { edad: '12 meses', vacunas: [v('HepA', 'Hepatitis A (1ª)', C.hepa)] },
      { edad: '15 meses', vacunas: [v('HepA', 'Hepatitis A (2ª)', C.hepa)] },
      { edad: '6-8 años', vacunas: [v('Gripe', 'Gripe anual hasta los 8 años', C.gripe)] },
    ],
  },
  {
    id: 'aragon',
    nombre: 'Aragón',
    verificado: true,
    nota: 'Gripe infantil ampliada hasta los 7 años.',
    extra: [
      { edad: '6-7 años', vacunas: [v('Gripe', 'Gripe anual hasta los 7 años', C.gripe)] },
    ],
  },
  {
    id: 'baleares',
    nombre: 'Islas Baleares',
    verificado: true,
    nota: 'Gripe infantil ampliada hasta los 6 años.',
    extra: [
      { edad: '6 años', vacunas: [v('Gripe', 'Gripe anual hasta los 6 años', C.gripe)] },
    ],
  },
  {
    id: 'canarias',
    nombre: 'Canarias',
    verificado: true,
    nota: 'Gripe infantil ampliada hasta los 5 años.',
    extra: [
      { edad: '5 años', vacunas: [v('Gripe', 'Gripe anual hasta los 5 años', C.gripe)] },
    ],
  },
  {
    id: 'valenciana',
    nombre: 'Comunidad Valenciana',
    verificado: true,
    nota: 'Gripe infantil ampliada hasta los 5 años. Hepatitis A sistemática.',
    extra: [
      { edad: '12 meses', vacunas: [v('HepA', 'Hepatitis A (1ª)', C.hepa)] },
      { edad: '15 meses', vacunas: [v('HepA', 'Hepatitis A (2ª)', C.hepa)] },
      { edad: '5 años', vacunas: [v('Gripe', 'Gripe anual hasta los 5 años', C.gripe)] },
    ],
  },
  {
    id: 'andalucia',
    nombre: 'Andalucía',
    verificado: false,
    nota: 'Una de las primeras en gripe infantil universal. Confirma edades y hepatitis A en la web oficial de la Junta.',
    extra: [],
  },
  {
    id: 'madrid',
    nombre: 'Comunidad de Madrid',
    verificado: false,
    nota: 'Consulta el documento técnico de vacunación 2026 de la Comunidad de Madrid para diferencias específicas.',
    extra: [],
  },
  {
    id: 'cataluna',
    nombre: 'Cataluña',
    verificado: false,
    nota: 'Calendario propio con algunas particularidades (p. ej. pauta y edades de VPH). Confirma en Canal Salut.',
    extra: [],
  },
  {
    id: 'paisvasco',
    nombre: 'País Vasco',
    verificado: false,
    nota: 'Consulta Osakidetza para diferencias específicas de su calendario.',
    extra: [],
  },
  {
    id: 'asturias',
    nombre: 'Asturias',
    verificado: false,
    nota: 'Consulta el Principado de Asturias para diferencias específicas.',
    extra: [],
  },
  {
    id: 'cantabria',
    nombre: 'Cantabria',
    verificado: false,
    nota: 'Consulta el Gobierno de Cantabria para diferencias específicas.',
    extra: [],
  },
  {
    id: 'navarra',
    nombre: 'Navarra',
    verificado: false,
    nota: 'Consulta el Gobierno de Navarra para diferencias específicas.',
    extra: [],
  },
  {
    id: 'castillamancha',
    nombre: 'Castilla-La Mancha',
    verificado: false,
    nota: 'Consulta el SESCAM para diferencias específicas.',
    extra: [],
  },
  {
    id: 'extremadura',
    nombre: 'Extremadura',
    verificado: false,
    nota: 'Consulta el SES para diferencias específicas.',
    extra: [],
  },
  {
    id: 'ceuta',
    nombre: 'Ceuta',
    verificado: false,
    nota: 'Gestión directa del Ministerio de Sanidad/INGESA. Consulta la fuente oficial.',
    extra: [],
  },
  {
    id: 'melilla',
    nombre: 'Melilla',
    verificado: false,
    nota: 'Gestión directa del Ministerio de Sanidad/INGESA. Consulta la fuente oficial.',
    extra: [],
  },
]
