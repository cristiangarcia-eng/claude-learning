# Modelos

Claude Code no es una sola IA. Es una **familia de modelos**, cada uno con fortalezas, velocidades y costes diferentes. Y por encima de elegir un modelo, hay una segunda palanca — **cuánto piensa** — que marca una gran diferencia en la calidad de las respuestas que obtienes.

Esta lección cubre las dos cosas: qué modelo usar, y cómo ajustar el nivel de esfuerzo. La versión corta está al principio por si quieres saltártelo.

> **Versión corta:** Usa **Opus 4.6** con `/effort max` durante todo el curso. Es la configuración de mayor calidad y es la que asumimos en cada lección.

## Los modelos principales

Piénsalo como un equipo donde cada miembro es bueno, pero especializado de forma diferente:

| Modelo | Para qué es mejor | Velocidad | Coste |
|--------|-------------------|-----------|-------|
| **Haiku 4.5** | Preguntas rápidas, buscar un dato, tareas ligeras y veloces | El más rápido | El más barato |
| **Sonnet 4.6** | Trabajo del día a día, tareas balanceadas, la mayoría de la escritura | Rápido | Medio |
| **Opus 4.6** | Análisis complejo, documentos largos, las tareas más difíciles | Más lento | El más caro |

Un modelo mental útil:

- **Haiku** es el becario. Genial cuando la tarea es simple y quieres una respuesta ya.
- **Sonnet** es el senior sólido. Maneja la mayor parte del trabajo real sin despeinarse.
- **Opus** es el especialista al que llamas cuando el problema de verdad importa. Es más lento y más caro, pero piensa con más cuidado y detecta cosas que los otros pasan por alto.

## Nuestra recomendación: Opus 4.6

Para este curso — y para la mayor parte del trabajo serio que vamos a hacer con Claude Code — recomendamos fuertemente **Opus 4.6**. El salto de calidad sobre Sonnet es real y notable, especialmente en:

- Analizar documentos largos (informes, contratos, investigación)
- Cualquier tarea que requiera razonamiento de varios pasos
- Cualquier cosa donde equivocarse saldría caro de rehacer

Puedes ver qué modelo estás usando en la parte inferior de la pantalla de Claude Code, y cambiarlo cuando quieras con:

```
/model
```

Esto abre un menú donde puedes elegir Haiku, Sonnet u Opus. El cambio tiene efecto inmediatamente.

## Pronto: Mhytos

Anthropic ha anunciado un nuevo modelo de próxima generación llamado **Mhytos** — todavía no ha salido, pero se espera pronto. Cuando esté disponible, actualizaremos esta lección con para qué es bueno y si debería reemplazar a Opus 4.6 como la recomendación por defecto.

Por ahora: **Opus 4.6 sigue siendo la mejor opción**. No esperes a Mhytos — empieza a trabajar con lo que hay disponible hoy.

## El nivel de "esfuerzo" (effort)

Una vez has elegido un modelo, hay una segunda palanca: **cuánto piensa el modelo antes de responder**. Esto se llama el **nivel de esfuerzo** (effort level).

Más esfuerzo = el modelo tarda más, usa más tokens y razona con más cuidado antes de producir una respuesta. Menos esfuerzo = más rápido y más barato, pero más superficial. En cualquier cosa no trivial, la diferencia entre esfuerzo bajo y máximo es dramática — es la diferencia entre una respuesta de superficie y una genuinamente reflexiva.

Lo configuras con un solo comando dentro de Claude Code:

| Comando | Qué hace |
|---------|----------|
| `/effort low` | Pensamiento rápido y superficial. Bien para consultas rápidas y preguntas simples. |
| `/effort medium` | El predeterminado. Balanceado — suficiente para la mayoría de las cosas. |
| `/effort max` | Razonamiento profundo. El modelo se toma más tiempo y produce respuestas notablemente mejores. |

### Nuestra recomendación: `/effort max`

Combinado con Opus 4.6, `/effort max` es la configuración que da los mejores resultados — y es la que vamos a asumir durante todo el curso. **Si solo recuerdas una cosa de esta lección, recuerda ejecutar `/effort max` al empezar una tarea seria.**

> **Ojo:** `max` solo funciona con **Opus 4.6**. Si estás en Sonnet o Haiku y pruebas `/effort max`, te dará un error. Cambia a Opus primero con `/model`.

> **Truco:** `/effort max` se reinicia cada vez que empiezas una sesión nueva, así que tendrías que volver a escribirlo cada vez. Hay una forma de dejarlo fijo para no tener que pensar en ello nunca más — lo cubrimos en la lección [Hacks](/es/lessons/hacks) al final del curso.

### El trade-off: Opus + esfuerzo máximo consume muchos más tokens

Hay una pega honesta con toda esta recomendación. **Opus 4.6 con `/effort max` consume muchísimos más tokens que cualquier otra combinación** — Opus por sí solo ya piensa más y produce respuestas más ricas, y el esfuerzo `max` le apila encima todavía más razonamiento interno. Los dos juntos son la configuración más cara que Claude Code puede correr. En la práctica, eso significa:

- Te comerás tu cuota mensual de tokens más rápido.
- Para tareas simples donde Sonnet o `/effort medium` habrían bastado, estás pagando de más.
- En sesiones muy largas, puedes llegar al límite antes que con una configuración más ligera.

Así que la recomendación honesta es: **por defecto Opus 4.6 + `/effort max` para trabajo de verdad, pero no lo desperdicies en trivialidades**. ¿Buscar un dato simple, hacer una pregunta de una línea, una consulta rápida? Baja a Haiku o Sonnet con `/model`, o baja el esfuerzo a low. Reserva la configuración pesada para las tareas donde la calidad de verdad importa.

Las técnicas para mantener el consumo de tokens bajo control las cubrimos en la lección [Optimizar Tokens](/es/lessons/optimize-tokens) — la versión corta es: usa `/clear` entre tareas, y elige el modelo + esfuerzo adecuados para cada trabajo.

## Puntos clave

1. **Claude Code tiene tres modelos principales** — Haiku (rápido/barato), Sonnet (balanceado), Opus (el más capaz).
2. **Usa Opus 4.6** para este curso y para cualquier trabajo serio.
3. **Cambia de modelo** con `/model`.
4. **El esfuerzo controla cuánto piensa el modelo** antes de responder — `/effort low`, `/effort medium` o `/effort max`.
5. **`/effort max` solo funciona con Opus 4.6** y da la mejor calidad.
6. **Mhytos está en camino** — actualizaremos esta lección cuando se lance.
