export type NormalItem = {
  subtitle: string
  content: string[]
}

export type EstimulacionItem = {
  subtitle: string
  areas: {
    area: string
    descripcion: string
    ejemplos: string[]
  }[]
}

export type SectionItem = NormalItem | EstimulacionItem

export type Section = {
  id: string
  emoji: string
  title: string
  accent: string
  items: SectionItem[]
}

export const sections: Section[] = [
  {
    id: 'primeras-semanas',
    emoji: '🍼',
    title: 'Primeras semanas (0–4 semanas)',
    accent: '#2196F3',
    items: [
      {
        subtitle: '🕐 Ritmo de comida',
        content: [
          'Recién nacido come cada 2–3 horas (8–12 veces al día), incluso de noche.',
          'No hay horario fijo al principio — el bebé manda.',
          'Cada toma dura entre 10 y 45 minutos según si es pecho o biberón.',
          'Señales de hambre: chupeteo, llevarse las manos a la boca, girar la cabeza. El llanto es la última señal.',
        ],
      },
      {
        subtitle: '💤 Sueño',
        content: [
          'Duerme 16–18 horas al día, en ciclos cortos de 2–4 horas.',
          'Aún no distingue día de noche — esto se regula hacia las 6–12 semanas.',
          'Posición de sueño: siempre boca arriba (reduce riesgo de muerte súbita).',
          'Colecho con precauciones: sin almohadas, sin ropa suelta, sin bebedor/fumador.',
        ],
      },
      {
        subtitle: '👶 Cuidados básicos',
        content: [
          'El muñón del cordón umbilical cae entre los 7 y 21 días. Mantenlo seco y limpio.',
          'Baño 2–3 veces por semana es suficiente — la piel es muy sensible.',
          'Cambia el pañal cada 2–3 horas o al detectar suciedad.',
          'Mínimo 6 pañales mojados al día = señal de buena hidratación.',
        ],
      },
      {
        subtitle: '🚨 Señales de alerta urgente',
        content: [
          'Fiebre > 38°C en menores de 3 meses → urgencias inmediato.',
          'No come más de 3 horas seguidas o rechaza el pecho/biberón.',
          'Llanto inconsolable, color amarillento extremo (ictericia), dificultad al respirar.',
        ],
      },
      {
        subtitle: '🧩 Áreas en desarrollo',
        areas: [
          {
            area: '👁️ Visual',
            descripcion: 'Solo enfoca a 20–30 cm. Distingue luz/oscuridad y contraste alto.',
            ejemplos: [
              'Pon tu cara a 25 cm de la suya y muévela lentamente de lado a lado — te seguirá con la mirada.',
              'Usa un móvil colgante en blanco y negro sobre la cuna (patrones geométricos simples).',
              'Acerca un objeto rojo o de color vivo y muévelo lento — notarás que intenta seguirlo.',
            ],
          },
          {
            area: '👂 Auditivo',
            descripcion: 'Reconoce voces que oyó en el útero. Se calma con tu voz y con ritmos constantes.',
            ejemplos: [
              'Háblale en voz baja y tranquila mientras le cambias el pañal — explícale lo que estás haciendo.',
              'Pon música suave o sonidos de naturaleza (lluvia, olas) durante la siesta.',
              'Cántale la misma canción de cuna cada noche — creará una asociación de calma con el sueño.',
            ],
          },
          {
            area: '🤱 Táctil y vínculo',
            descripcion: 'El tacto es su sentido más desarrollado. El contacto físico regula su sistema nervioso.',
            ejemplos: [
              'Piel con piel diario al menos 20 minutos — tumbado sobre tu pecho, con ropa mínima.',
              'Masaje suave tras el baño: desde los pies hacia arriba, con aceite de almendras dulces.',
              'Envuélvelo en mantita (swaddle) si se pone muy nervioso — simula la presión del útero.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mes-1-3',
    emoji: '😊',
    title: '1 a 3 meses',
    accent: '#FF9800',
    items: [
      {
        subtitle: '🍼 Alimentación',
        content: [
          'Sigue siendo leche materna o fórmula exclusivamente.',
          'La frecuencia baja un poco: cada 3–4 horas aproximadamente.',
          'No introduzcas agua, jugos ni ningún otro alimento todavía.',
          'El bebé empieza a comer más en cada toma y deja más espacio entre ellas.',
        ],
      },
      {
        subtitle: '💤 Sueño',
        content: [
          'Empieza a diferenciar día y noche hacia las 6–8 semanas.',
          'Truco: durante el día interacción, luz y ruido; noche calmada, oscura y silenciosa.',
          'Pueden aparecer los primeros 4–5 horas seguidas de sueño nocturno.',
          'La rutina de sueño empieza aquí: baño → pañal → toma → canción → cama.',
        ],
      },
      {
        subtitle: '🧠 Hitos de desarrollo',
        content: [
          'Semana 4–6: primera sonrisa social (no solo gas, ¡es real!).',
          'Mes 2: sigue objetos con la vista, reacciona a voces conocidas.',
          'Mes 3: sostiene la cabeza brevemente en posición boca abajo (tummy time).',
          'Tummy time: 2–3 veces al día, empezando con 1–2 minutos.',
        ],
      },
      {
        subtitle: '📅 Pediatra',
        content: [
          'Revisiones obligatorias: al mes, a los 2 meses y a los 4 meses.',
          'Vacunas importantes a los 2 meses: Hexavalente + Neumococo + Rotavirus.',
        ],
      },
      {
        subtitle: '🧩 Áreas en desarrollo',
        areas: [
          {
            area: '😄 Social y emocional',
            descripcion: 'Aparece la primera sonrisa social. Empieza a reconocerte y a buscar tu cara activamente.',
            ejemplos: [
              'Sonríele exageradamente cuando te mire — imitará tu expresión y devolverá la sonrisa.',
              'Cuando llore, responde siempre: esto le enseña que el mundo es seguro y tú eres su base.',
              "Juega a esconderte detrás de tus manos y aparecer diciendo '¡aquí estoy!' — reacciona con agitación y alegría.",
            ],
          },
          {
            area: '🗣️ Lenguaje y comunicación',
            descripcion: "Empieza a emitir sonidos vocálicos ('aaah', 'ooh'). El llanto se vuelve más variado.",
            ejemplos: [
              "Imita los sonidos que hace: si dice 'aah', repítelo tú. Esto inicia un proto-diálogo.",
              'Lee en voz alta aunque no entienda — el tono, ritmo y musicalidad del lenguaje lo estimulan.',
              "Cuéntale lo que haces: 'ahora te voy a cambiar el pañal, ¿ves? aquí está la cremita...'",
            ],
          },
          {
            area: '💪 Motricidad gruesa',
            descripcion: 'Gana control de cuello progresivamente. El tummy time es la clave.',
            ejemplos: [
              'Tummy time en tu pecho: túmbate y ponlo sobre ti boca abajo — tu calor lo anima a levantar la cabeza.',
              'Delante de un espejo en el suelo durante el tummy time — le fascina ver "otro bebé".',
              'Sostenlo sentado con apoyo en tu regazo unos minutos para trabajar el tono del tronco.',
            ],
          },
          {
            area: '✋ Motricidad fina',
            descripcion: 'Cierra el puño por reflejo pero empieza a abrir la mano.',
            ejemplos: [
              'Pon tu dedo en su palma — lo agarrará. Luego abre suavemente su mano y masajéala.',
              'Acércale un sonajero a la mano para que lo toque aunque no lo agarre aún.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mes-4-6',
    emoji: '🌱',
    title: '4 a 6 meses',
    accent: '#4CAF50',
    items: [
      {
        subtitle: '🍽️ Alimentación',
        content: [
          'Hasta los 6 meses: leche exclusiva. La OMS recomienda esperar hasta el 6.º mes.',
          'Señales de preparación para sólidos: se sienta con apoyo, pierde el reflejo de extrusión, muestra interés por la comida.',
          'Si el pediatra lo autoriza, puede iniciar purés simples entre 4–6 meses.',
          'Primer puré: verduras suaves (calabacín, zanahoria, patata). Sin sal, sin azúcar.',
        ],
      },
      {
        subtitle: '💤 Sueño',
        content: [
          'El sueño nocturno puede alargarse a 6–8 horas.',
          'Aún hay 2–3 siestas al día.',
          'Empieza a establecerse una rutina más predecible.',
          'Regresión de sueño frecuente a los 4 meses — es normal, no dura siempre.',
        ],
      },
      {
        subtitle: '🧠 Hitos de desarrollo',
        content: [
          'Se ríe a carcajadas, reconoce su nombre, balbucea.',
          'Comienza a girarse solo boca arriba / boca abajo.',
          'Le interesan los objetos: los agarra, los lleva a la boca.',
          'Tummy time: ya aguanta más tiempo, fortalece cuello y espalda.',
        ],
      },
      {
        subtitle: '🧩 Áreas en desarrollo',
        areas: [
          {
            area: '✋ Motricidad fina',
            descripcion: 'Agarra objetos con toda la mano (agarre palmar). Transfiere de una mano a otra.',
            ejemplos: [
              'Dale sonajeros, aros de plástico o cucharas de madera — los agarrará, agitará y chupará.',
              'Pon objetos de distintas texturas en su mano: tela suave, pelota de goma, esponja.',
              "Juega a 'tira y afloja' suave con un pañuelo — desarrolla agarre y anticipación.",
            ],
          },
          {
            area: '👁️ Visual y exploración',
            descripcion: 'Visión casi igual que un adulto. Le fascinan los colores vivos y el movimiento.',
            ejemplos: [
              'Muéstrale libros de cartón con imágenes grandes y colores primarios.',
              'Cuelga un móvil con formas de colores sobre la zona de juego en el suelo.',
              'Llévalo frente al espejo: se mirará sin saber que es él, pero le encanta la "compañía".',
            ],
          },
          {
            area: '🗣️ Lenguaje',
            descripcion: "Balbucea combinando consonantes y vocales ('ba', 'da', 'ma'). Te imita si le sacas la lengua.",
            ejemplos: [
              'Repite sus balbuceos con entusiasmo — está aprendiendo que comunicarse tiene respuesta.',
              "Canta canciones con palmas como 'Palmas, palmitas' — conecta sonido, ritmo y movimiento.",
              'Cuéntale cuentos sencillos con mucha entonación — el drama vocal le mantiene atento.',
            ],
          },
          {
            area: '💪 Motricidad gruesa',
            descripcion: 'Empieza a rodar, empuja con los brazos en tummy time, soporta peso en las piernas.',
            ejemplos: [
              'Ponlo boca abajo con un rodillo o toalla enrollada bajo el pecho — le facilita levantar los brazos.',
              'Sostenlo de pie sobre tus piernas — le encanta "rebotar" y fortalecer las piernas.',
              'Anima el rodamiento: túmbalo de lado con un juguete fuera de su alcance.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mes-6-12',
    emoji: '🥕',
    title: '6 a 12 meses',
    accent: '#E91E63',
    items: [
      {
        subtitle: '🍽️ Inicio de sólidos (BLW o purés)',
        content: [
          'Dos métodos: BLW (Baby-Led Weaning) — trozos seguros; o purés progresivos.',
          'Orden típico: verduras → frutas → cereales sin gluten → con gluten → carne → legumbres → pescado.',
          'Introducir un alimento nuevo cada 3–5 días para detectar alergias.',
          'Huevo y pescado: a partir de los 8–9 meses (consultar pediatra).',
          'Miel: prohibida hasta los 12 meses (botulismo).',
          'Leche de vaca entera: no antes de los 12 meses.',
        ],
      },
      {
        subtitle: '💤 Sueño',
        content: [
          'Objetivo: dormir 10–12 horas de noche + 2 siestas al día.',
          'Muchos bebés aún se despiertan 1–2 veces por noche.',
          'Métodos de sueño (si necesitas ayuda): Ferber, Fading, No-Cry — habla con el pediatra.',
        ],
      },
      {
        subtitle: '🧠 Hitos de desarrollo',
        content: [
          '6–7 meses: se sienta sin apoyo.',
          '8–9 meses: gateo (algunos se lo saltan y van directo a caminar).',
          '9–10 meses: se pone de pie agarrándose.',
          "10–12 meses: primeros pasos y primeras palabras ('mamá', 'papá').",
          'Angustia de separación: muy normal a partir de los 8–9 meses.',
        ],
      },
      {
        subtitle: '🧩 Áreas en desarrollo',
        areas: [
          {
            area: '🧠 Cognitivo',
            descripcion: 'Entiende la permanencia del objeto. Anticipa acciones.',
            ejemplos: [
              'Esconde un juguete bajo un pañuelo delante de él y deja que lo busque — es el primer juego de lógica.',
              'Llena y vacía: dale un cubo y bloques pequeños. Meterlos y sacarlos le fascina.',
              "Señala cosas y ponles nombre: '¿ves? ¡el perro!' — conecta objeto, imagen y palabra.",
            ],
          },
          {
            area: '✋ Motricidad fina',
            descripcion: 'Desarrolla la pinza (dedo índice + pulgar). Señala con el dedo.',
            ejemplos: [
              'Dale trocitos de comida blanda en la bandeja — cogerlos uno a uno entrena la pinza.',
              'Libros de cartón con texturas para pasar páginas y tocar relieves.',
              'Apilador de aros o cubos encajables — comprende tamaño, orden y causa-efecto.',
            ],
          },
          {
            area: '💪 Motricidad gruesa',
            descripcion: 'Gateo, bipedestación, primeros pasos. El movimiento libre es esencial.',
            ejemplos: [
              'Crea un circuito en el suelo: cojines, rampas con mantas, cajas — que gatee por encima.',
              'Ponlo de pie junto al sofá con un juguete encima — se agarrará y se desplazará lateralmente.',
              'Empuja una silla ligera o un carrito de juguete para dar los primeros pasos con apoyo.',
            ],
          },
          {
            area: '🗣️ Lenguaje',
            descripcion: 'Comprende más de lo que expresa. Entiende "no", su nombre y órdenes simples.',
            ejemplos: [
              "Juega a señalar partes del cuerpo: '¿dónde está la nariz?' y muéstrasela en ti y en él.",
              "Lee cuentos con animales e imita los sonidos — 'la vaca hace muuu' activa la memoria fonética.",
              "Dale instrucciones simples: 'dame la pelota', 'toma el muñeco' — entiende antes de hablar.",
            ],
          },
          {
            area: '😄 Social',
            descripcion: 'Angustia de separación. Juego paralelo. Imita gestos y acciones.',
            ejemplos: [
              'Juega a dar palmas, decir adiós con la mano — las imita y luego las inicia él solo.',
              'Preséntale a otros bebés aunque no interactúen aún — el contacto social temprano importa.',
              'Deja que te vea hacer tareas: barrer, cocinar. Querrá imitarte — dale un trapo o cuchara de madera.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'anno-1-2',
    emoji: '🚶',
    title: '12 a 24 meses',
    accent: '#673AB7',
    items: [
      {
        subtitle: '🍽️ Alimentación',
        content: [
          'Come lo mismo que la familia (adaptado): comida triturada ya no es necesaria.',
          '3 comidas principales + 2 snacks.',
          'Leche de vaca entera: 1–2 vasos al día (aprox 500ml máximo).',
          'Es normal que coma poco o sea selectivo — fase muy común.',
          'Evitar: sal en exceso, azúcares añadidos, ultraprocesados.',
        ],
      },
      {
        subtitle: '💤 Sueño',
        content: [
          '10–12 horas nocturnas + 1 siesta al mediodía (1–2 horas).',
          'La siesta de la mañana desaparece alrededor de los 15–18 meses.',
          'Establece rutinas de sueño sólidas: cuento, canción, siempre a la misma hora.',
        ],
      },
      {
        subtitle: '🧠 Hitos de desarrollo',
        content: [
          'Primeras 10–20 palabras al año, frases de 2 palabras hacia los 2 años.',
          'Corre, trepa, lanza objetos.',
          'Empieza a imitar tareas del hogar.',
          'Las rabietas aparecen: son desarrollo normal, no manipulación.',
        ],
      },
      {
        subtitle: '🧩 Áreas en desarrollo',
        areas: [
          {
            area: '🗣️ Lenguaje explosivo',
            descripcion: 'Entre los 18 y 24 meses hay una explosión de vocabulario: puede pasar de 20 a 200+ palabras.',
            ejemplos: [
              "Habla con él en frases completas: 'vamos a ponernos el abrigo porque hace frío'.",
              'Nombra todo lo que veis en el parque, en el súper, por la calle — el contexto real acelera el vocabulario.',
              "Léele cuentos repetitivos ('el patito feo', 'los tres cerditos') — la repetición consolida palabras.",
              "Evita corregirle duramente: si dice 'bibo', repite tú 'sí, el biberón' sin énfasis en el error.",
            ],
          },
          {
            area: '🧠 Juego simbólico',
            descripcion: "Empieza el juego de 'hacer como si': da de comer al muñeco, habla por el teléfono de juguete.",
            ejemplos: [
              'Dale una cocinita o set de comida de juguete — inventad juntos comidas y cenas imaginarias.',
              'Juega a imitar oficios: mecánico, médico, cocinero — con materiales sencillos de casa.',
              'Puzzles de 2–4 piezas con imágenes grandes — razonamiento espacial y resolución de problemas.',
              'Construcción con bloques grandes (Duplo): torres, casas, trenes.',
            ],
          },
          {
            area: '😤 Emocional y rabietas',
            descripcion: 'Las rabietas son frustración que no sabe expresar. Son neurológicamente normales.',
            ejemplos: [
              "Nombra sus emociones: 'veo que estás muy enfadado porque no puedes tener eso'.",
              'No cedas a la rabieta pero tampoco la ignores: acompáñale con calma hasta que pase.',
              'Después de la rabieta, cuando esté calmado, dale un abrazo.',
              'Anticipa: si sabe que vais a salir del parque, avísale 5 minutos antes.',
            ],
          },
          {
            area: '💪 Motricidad gruesa',
            descripcion: 'Corre, sube escaleras con apoyo, lanza y patea pelotas, trepa.',
            ejemplos: [
              'Parque infantil varias veces por semana — tobogán, trepa, columpio activan el sistema vestibular.',
              'Jugar a la pelota: ruédala, lánzala, pateadla juntos.',
              'Caminar por terrenos variados: arena, hierba, grava — propiocepción y equilibrio.',
              'Baile libre en casa con música — coordinación, ritmo y diversión compartida.',
            ],
          },
          {
            area: '✋ Autonomía',
            descripcion: 'Quiere hacerlo todo solo. Aprovéchalo para construir autonomía desde pequeño.',
            ejemplos: [
              'Deja que intente comer solo aunque ensucie — la cucharita a los 12 meses, el tenedor a los 18.',
              'Que intente ponerse/quitarse los zapatos o calcetines él solo, aunque tarde más.',
              'Plastilina, pintura de dedos, garabatos con ceras — trabajan la pinza y la creatividad.',
            ],
          },
        ],
      },
    ],
  },
]
