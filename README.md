# Guía de Padres

Web informativa para padres primerizos. Next.js 14 App Router + CSS Modules.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: CSS Modules + variables globales (sin Tailwind)
- **Contenido**: datos en `src/data/` + MDX para el blog
- **Package manager**: pnpm
- **Deploy**: Vercel

## Arrancar en local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz (nav + footer)
│   ├── page.tsx            # Landing /
│   ├── guia/               # Guía interactiva por etapas
│   ├── alimentacion/       # Tabla de introducción de alimentos
│   ├── vacunas/            # Calendario de vacunación
│   ├── blog/               # Listado + artículos MDX
│   └── foro/               # Página foro (integración Discourse)
├── components/
│   └── GuiaInteractiva.tsx # Componente interactivo principal
├── data/
│   └── guia.ts             # ← Fuente de verdad del contenido de la guía
└── styles/
    └── globals.css         # Design tokens + reset
```

## Añadir contenido

### Nueva sección en la guía
Edita `src/data/guia.ts` — es el único archivo que necesitas tocar.

### Nuevo artículo en el blog
1. Crea `src/app/blog/mi-articulo/page.mdx`
2. Añade el frontmatter:
```mdx
---
title: 'Título del artículo'
date: '2024-07-01'
excerpt: 'Breve descripción...'
tag: 'Estimulación'
---

# Contenido en Markdown...
```

### Nueva página
Crea una carpeta en `src/app/mi-pagina/` con `page.tsx` y `page.module.css`.
Añade el enlace en `src/app/layout.tsx` → array `navLinks`.

## Foro (Discourse)

El foro se desplegará en `foro.guiapadres.es` usando Discourse en Docker.
Ver `src/app/foro/page.tsx` para las opciones de integración (redirect, iframe, API).

Despliegue recomendado: OCI Ampere A1 con Docker Compose + Traefik (mismo stack que ESS).

## Deploy en Vercel

```bash
# Conecta el repo en vercel.com o:
npx vercel
```

Variables de entorno necesarias (cuando haya foro):
```
NEXT_PUBLIC_FORUM_URL=https://foro.guiapadres.es
```
