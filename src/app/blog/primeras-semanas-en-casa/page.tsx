import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const metadata: Metadata = {
  title: 'Las primeras semanas en casa: lo que nadie te cuenta',
  description: 'Guía honesta sobre cómo sobrevivir (y disfrutar) las primeras semanas con tu recién nacido. Sin idealizar, con consejos reales.',
}

export default function Post() {
  return (
    <ArticleLayout
      title="Las primeras semanas en casa: lo que nadie te cuenta"
      tag="Recién nacido"
      tagColor="#2196F3"
      date="2024-06-01"
      readTime="6 min"
    >
      <p>
        Nadie os prepara del todo para esto. Todo el mundo os habla del parto, de los pañales,
        de cuántos biberones comprar — pero casi nadie cuenta cómo se siente realmente la primera
        semana en casa con un recién nacido. Vamos a intentarlo, sin filtros.
      </p>

      <h2>El primer día es el más raro de todos</h2>
      <p>
        Llegáis a casa con una persona diminuta que depende de vosotros al cien por cien, y lo más
        probable es que sintáis una mezcla extraña de euforia, terror y un cansancio que no se parece
        a nada que hayáis sentido antes. Es completamente normal. No significa que algo vaya mal,
        significa que estáis viviendo uno de los cambios más grandes que existen.
      </p>
      <p>
        Si en las primeras 24 horas en casa sentís que no sabéis lo que estáis haciendo, es porque
        nadie lo sabe del todo al principio. Se aprende sobre la marcha, con el bebé delante, no antes.
      </p>

      <h2>El sueño deja de existir como lo conocíais</h2>
      <p>
        Un recién nacido come cada 2–3 horas, también de noche, porque su estómago es diminuto y
        necesita repostar constantemente. Esto significa que vuestro sueño se fragmenta en bloques
        de 2–3 horas, no en una noche completa.
      </p>
      <div className="callout">
        <p>
          <strong>Truco real:</strong> dormid cuando el bebé duerma, no cuando "toca". Olvidaos de
          aprovechar esas horas para limpiar la casa o adelantar tareas — el sueño es más valioso
          que un salón ordenado en estas semanas.
        </p>
      </div>
      <p>
        Si estáis dos en casa, turnaos en los despertares nocturnos siempre que sea posible. Una
        persona se ocupa de una toma mientras la otra duerme, y al turno siguiente cambiáis. No es
        perfecto, pero reparte el desgaste.
      </p>

      <h2>El llanto no significa que algo va mal</h2>
      <p>
        Un recién nacido llora porque es su único lenguaje. Hambre, sueño, frío, calor, un pañal
        sucio, ganas de brazos — todo se traduce en llanto. No hay una forma "correcta" de
        interpretarlo a la primera, y eso está bien.
      </p>
      <p>
        Con el tiempo empezaréis a distinguir matices: el llanto de hambre suena diferente al de
        sueño. Pero las primeras semanas son de prueba y error, y eso no os hace malos padres.
      </p>

      <h2>El cuerpo (y la mente) también necesitan recuperarse</h2>
      <p>
        Esto aplica a quien ha dado a luz, pero también al otro progenitor. El parto es una
        recuperación física real que lleva semanas, y la adaptación emocional a ser padres afecta
        a los dos. El llamado "baby blues" —tristeza, irritabilidad o ansiedad en los primeros días—
        puede aparecer en cualquiera de los dos, no es exclusivo de la madre.
      </p>
      <p>
        Si esa sensación de bajón dura más de dos semanas, se intensifica, o interfiere con el día
        a día, merece la pena hablarlo con un profesional de salud. Pedir ayuda en esto no es un
        fracaso, es lo más sensato que se puede hacer.
      </p>

      <h2>Las visitas pueden esperar</h2>
      <p>
        Es muy habitual sentir presión social para recibir visitas de familiares y amigos desde el
        primer día. No pasa nada por decir que no, o por limitar las visitas a momentos concretos.
        Las primeras semanas son para vosotros tres (o más), para encontrar un ritmo mínimo antes
        de gestionar también las expectativas de los demás.
      </p>
      <blockquote>
        <p>
          Una frase que ayuda mucho: "os avisamos cuando estemos listos para recibir visitas". No
          hace falta justificarlo más.
        </p>
      </blockquote>

      <h2>Lo que sí podéis controlar</h2>
      <p>
        No podéis controlar cuánto duerme el bebé ni cuándo llora. Pero sí podéis controlar algunas
        cosas pequeñas que ayudan:
      </p>
      <ul>
        <li>Tener comida fácil preparada con antelación (congelada o para calentar) — cocinar en estas semanas cuesta más de lo que parece.</li>
        <li>Aceptar ayuda concreta cuando alguien la ofrezca: "trae la compra" es más útil que "avísame si necesitas algo".</li>
        <li>Reducir el listón de lo que es "un buen día" — sobrevivir con el bebé alimentado y descansando ya es un éxito.</li>
        <li>Salir a la calle aunque sea diez minutos al día — el cambio de aire ayuda más de lo que parece, tanto al bebé como a vosotros.</li>
      </ul>

      <h2>Esto pasa, y pasa rápido</h2>
      <p>
        Las primeras semanas son intensas, pero también son cortas en comparación con todo lo que
        viene después. Hacia la sexta semana, muchas familias empiezan a notar que el bebé distingue
        mejor el día de la noche, que las tomas se espacian un poco, y que algo parecido a una rutina
        empieza a aparecer.
      </p>
      <p>
        No hace falta disfrutar cada segundo — hay segundos agotadores que no se disfrutan, y está
        bien admitirlo. Pero entre el caos también hay momentos diminutos que merecen la pena:
        la primera vez que os mira fijamente, el peso de su cuerpo dormido sobre el vuestro, el
        silencio de la casa por la noche cuando por fin todos duermen.
      </p>
    </ArticleLayout>
  )
}
