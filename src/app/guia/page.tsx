import type { Metadata } from 'next'
import GuiaInteractiva from '@/components/GuiaInteractiva'

export const metadata: Metadata = {
  title: 'Guía por etapas',
  description: 'Todo sobre el desarrollo de tu bebé de 0 a 24 meses: sueño, alimentación, estimulación y hitos por etapa.',
}

export default function GuiaPage() {
  return (
    <div style={{ padding: '2rem 0' }}>
      <GuiaInteractiva />
    </div>
  )
}
