import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const metadata: Metadata = {
  title: 'Tummy time: por qué es tan importante y cómo hacerlo bien',
  description: 'El tiempo boca abajo es una de las mejores cosas que puedes hacer por tu bebé. Te explicamos cómo, cuándo y cuánto, con ejemplos prácticos.',
}

export default function Post() {
  return (
    <ArticleLayout
      title="Tummy time: por qué es tan importante y cómo hacerlo bien"
      tag="Estimulación"
      tagColor="#4CAF50"
      date="2024-06-10"
      readTime="5 min"
    >
      <p>
        Si lleváis poco tiempo leyendo sobre desarrollo infantil, seguramente habéis visto el término
        "tummy time" repetido por todas partes. Y con razón: es una de las prácticas con más impacto
        real en el desarrollo motor del bebé, y cuesta literalmente cero euros.
      </p>

      <h2>Qué es exactamente el tummy time</h2>
      <p>
        Tummy time significa, literalmente, "tiempo boca abajo". Consiste en colocar al bebé despierto
        y supervisado sobre su estómago, durante periodos cortos, varias veces al día. Suena simple
        porque lo es — pero el efecto acumulado es enorme.
      </p>

      <h2>Por qué importa tanto</h2>
      <p>
        Desde que las recomendaciones de sueño seguro establecieron que los bebés deben dormir siempre
        boca arriba (para reducir el riesgo de muerte súbita), los bebés pasan mucho menos tiempo boca
        abajo del que pasaban generaciones anteriores. Eso es bueno para el sueño seguro, pero significa
        que hay que compensar ese tiempo boca abajo durante las horas de juego.
      </p>
      <p>Boca abajo, el bebé entrena varias cosas a la vez:</p>
      <ul>
        <li><strong>Fuerza de cuello y espalda</strong> — necesaria para sostener la cabeza, sentarse y, más adelante, gatear.</li>
        <li><strong>Coordinación de brazos</strong> — empuja con los antebrazos para levantar el pecho, el primer paso hacia el gateo.</li>
        <li><strong>Prevención de plagiocefalia</strong> — la cabeza plana por pasar demasiado tiempo en la misma postura boca arriba.</li>
        <li><strong>Tolerancia y confianza</strong> — al principio puede resultarles incómodo, y aprender a gestionar esa incomodidad es parte del desarrollo.</li>
      </ul>

      <h2>Cuándo empezar</h2>
      <p>
        Se puede empezar desde el primer día en casa, incluso con el cordón umbilical aún sin caer.
        Las sesiones al principio son muy cortas — literalmente uno o dos minutos — y se van alargando
        a medida que el bebé tolera mejor la postura.
      </p>

      <table>
        <thead>
          <tr><th>Edad</th><th>Duración orientativa</th><th>Frecuencia</th></tr>
        </thead>
        <tbody>
          <tr><td>0–4 semanas</td><td>1–2 minutos</td><td>2–3 veces al día</td></tr>
          <tr><td>1–3 meses</td><td>3–5 minutos</td><td>3–4 veces al día</td></tr>
          <tr><td>4–6 meses</td><td>10–15 minutos</td><td>Varias veces, según tolerancia</td></tr>
        </tbody>
      </table>

      <h2>Cómo hacerlo bien, con ejemplos reales</h2>

      <h3>1. Sobre vuestro pecho</h3>
      <p>
        La forma más fácil de empezar. Tumbaos reclinados (en el sofá o la cama) y poned al bebé
        boca abajo sobre vuestro pecho, con la cabeza a la altura de vuestra cara. El calor corporal
        y vuestra voz lo tranquilizan, y de forma natural intentará levantar la cabeza para miraros.
      </p>

      <h3>2. En el suelo, con vosotros a su altura</h3>
      <p>
        Poned una manta o tapete en el suelo y tumbad al bebé boca abajo, con vosotros tumbados
        delante, cara a cara. El contacto visual es un gran motivador para que levante la cabeza
        e intente sostenerla.
      </p>

      <h3>3. Con un rodillo o toalla enrollada</h3>
      <p>
        A partir del segundo o tercer mes, colocar una toalla enrollada bajo el pecho del bebé
        (nunca bajo la cara) le ayuda a despegar más fácilmente los brazos del suelo, facilitando
        el ejercicio sin que se frustre tan rápido.
      </p>

      <h3>4. Frente a un espejo</h3>
      <p>
        Un espejo no irrompible colocado frente al bebé durante el tummy time añade un estímulo
        visual que mantiene su atención mucho más tiempo. A la mayoría les fascina ver "otro bebé".
      </p>

      <div className="callout">
        <p>
          <strong>Importante:</strong> el tummy time es siempre supervisado y con el bebé despierto.
          Nunca debe dormirse boca abajo — para dormir, siempre boca arriba.
        </p>
      </div>

      <h2>Qué hacer si el bebé lo odia</h2>
      <p>
        Es muy común que al principio proteste, llore o se frustre. Algunas estrategias que ayudan:
      </p>
      <ul>
        <li>Empezar con sesiones más cortas de las que creéis necesarias — incluso 30 segundos cuentan.</li>
        <li>Hacerlo justo después de cambiarle el pañal, cuando está despierto y de buen humor, nunca recién comido (puede vomitar) ni con hambre.</li>
        <li>Acompañarlo tumbándoos a su altura — la soledad boca abajo se tolera mucho peor que la compañía.</li>
        <li>Repartirlo en varias sesiones cortas al día en vez de una sola larga.</li>
      </ul>

      <h2>Señales de que va bien</h2>
      <p>
        No hace falta obsesionarse con cronómetros. Algunas señales de progreso real:
      </p>
      <ul>
        <li>Levanta la cabeza brevemente (incluso unos segundos cuentan al principio).</li>
        <li>Gira la cabeza de lado a lado.</li>
        <li>Apoya los antebrazos para elevar el pecho.</li>
        <li>Más adelante, empuja con las manos extendidas (el llamado "mini push-up").</li>
      </ul>
      <p>
        Si hacia los 4 meses el bebé sigue sin tolerar nada de tummy time o no muestra ningún
        progreso en el control de cuello, es buen momento para comentarlo con el pediatra — no
        para alarmarse, sino para asegurarse de que todo va a su ritmo.
      </p>
    </ArticleLayout>
  )
}
