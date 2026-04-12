# La Ventana de Contexto

Claude tiene una **ventana de contexto** — piensa en ella como la memoria a corto plazo de Claude para tu conversación actual. Es lo más importante que hay que entender si quieres que Claude se mantenga afilado.

## Qué es la ventana de contexto

Imagina que estás en una reunión con un colega brillante que recuerda todo lo que se ha dicho en la sala. Pero la sala solo tiene una pizarra, y la pizarra tiene un tamaño limitado. Cuando se llena, hay que borrar notas viejas para hacer sitio a las nuevas — y tu colega solo puede razonar sobre lo que está visible en la pizarra en ese momento.

Eso es la ventana de contexto. Es todo lo que Claude está "pensando activamente" ahora mismo.

Todo se escribe en la pizarra:

- **Tus mensajes** — cada pregunta, instrucción o corrección que has enviado
- **Archivos que Claude lee** — cada vez que Claude abre un archivo, su contenido entero va a la pizarra
- **Salidas de comandos** — si Claude ejecuta un comando, el resultado también se escribe
- **Las respuestas del propio Claude** — cada respuesta que da Claude ocupa espacio

Cuanto más lee y hace, más se llena la pizarra.

## Por qué importa: la calidad baja cuando se llena

Esta pizarra tiene un límite duro, y **a medida que se llena, Claude se vuelve peor en su trabajo**. No un poco — notablemente. Así se degrada más o menos:

| Contexto lleno | Qué pasa |
|----------------|----------|
| **Por debajo del 70%** | Afilado y preciso. Claude está en su mejor momento. |
| **Alrededor del 70%** | La calidad empieza a bajar. Las respuestas son menos precisas. |
| **Alrededor del 85%** | Errores frecuentes. Claude empieza a perder detalles importantes. |
| **Más del 90%** | Claude olvida partes clave de la conversación. La fiabilidad se hunde. |

Esto es contraintuitivo: uno pensaría que una conversación más larga le da a Claude *más* contexto y por tanto mejores respuestas. Es al revés. Después de cierto punto, más cosas en la pizarra significan que Claude tiene que hacer malabares con demasiadas cosas a la vez.

> **La idea clave:** una conversación nueva con una tarea enfocada casi siempre gana a una conversación larga y serpenteante. No trates a Claude como un único chat interminable.

## Mira cuánto hay lleno: el comando `/context`

Puedes ver cuánto has usado de la ventana en cualquier momento escribiendo `/context` en Claude Code. Verás algo así:

![El comando /context mostrando una cuadrícula rellena con un desglose por categoría](./images/context-command.png)

Pasan muchas cosas en esa captura, pero en realidad solo necesitas mirar dos:

- **La cuadrícula de la izquierda.** Cada cuadradito es un trozo de la ventana de contexto. Los rellenos = usados, los vacíos = todavía libres. Puedes ver de un vistazo cuánto tienes lleno — en este ejemplo, alrededor del **16%** lleno, que está perfectamente bien.
- **El porcentaje arriba.** Aquí pone `160.4k/1m tokens (16%)`. Ese es tu número titular. **Por debajo del 70% estás bien.** Por encima del 70% deberías empezar a pensar en `/clear` o `/compact`.

El desglose de la derecha muestra *qué* está ocupando espacio — tus mensajes, archivos que Claude ha leído, herramientas del sistema, skills, etc. Normalmente no necesitas meterte ahí, pero también es la mejor forma de **detectar cosas que te están comiendo el contexto en silencio**. Por ejemplo, un servidor MCP que no estás usando (los MCP los veremos en una lección más adelante) puede tranquilamente zamparse miles de tokens antes de que hayas enviado un solo mensaje — y puedes desactivarlo para recuperar ese espacio. Cuando notes que una categoría ocupa muchísimo más de lo que debería, `/context` es como la encuentras.

> **El único número que importa:** el porcentaje de arriba. Si está por debajo del 70%, sigue trabajando. Si va subiendo, es hora de actuar.

## Auto-compactación: Claude limpia por ti

La buena noticia: Claude no es pasivo con esto. Cuando tu conversación se alarga, Claude **comprime automáticamente** los mensajes más antiguos en resúmenes densos. La información importante se queda; el ida y vuelta verboso se reduce.

Esto pasa en silencio, en segundo plano — no necesitas hacer nada. A veces verás una pequeña nota diciendo que la conversación se auto-compactó, y Claude simplemente sigue.

## Tus dos herramientas principales: clear y compact

Cuando la auto-compactación no es suficiente, tienes dos comandos que te ponen en el asiento del conductor: `/clear` y `/compact`.

### Clear — empezar de cero

El comando `/clear` **borra la pizarra por completo** y empieza una conversación nueva desde cero. Úsalo cuando estés cambiando a una tarea totalmente diferente.

```
Tú: Resúmeme este PDF sobre las ventas del Q3
Claude: [hace el trabajo]
Tú: /clear
Tú: Ahora ayúdame a redactar un email para un cliente sobre el rediseño en Figma
```

Si te hubieras saltado el clear, el PDF de ventas seguiría en la pizarra ocupando espacio mientras hablas de Figma — desperdicio y potencialmente confuso.

### Compact — seguir trabajando pero liberar espacio

El comando `/compact` es el término medio. Le pide a Claude que resuma la conversación hasta ese momento en un resumen denso, liberando espacio **sin perder continuidad**. Úsalo cuando estés en medio de un trabajo real y no quieras empezar de nuevo, pero sientas que la conversación se está poniendo pesada.

Incluso puedes guiar el resumen:

```
/compact enfócate en las decisiones que tomamos sobre la estructura del informe
```

## Cuándo usar cuál

| Problema | Qué hacer |
|----------|-----------|
| Cambiar a un tema completamente nuevo | `/clear` |
| Misma tarea pero la conversación se alarga | `/compact` |
| Claude olvidó algo que dijiste antes | Recuérdaselo directamente, o `/clear` y empieza con mejor contexto |
| Claude parece confundido o perdido | `/clear` y reformula tu petición más claramente |

> **Regla general:** Si cambias de tema, `/clear`. Si profundizas en el mismo tema, `/compact`. En caso de duda, `/clear` — siempre es seguro.

## Puntos clave

1. **La ventana de contexto es la memoria a corto plazo de Claude** — todo lo que envías, cada archivo que Claude lee y cada respuesta ocupa espacio.
2. **La calidad baja cuando se llena la ventana** — a partir del 70% lo empezarás a notar.
3. **Escribe `/context`** para ver cuánto está llena.
4. **Usa `/clear` al cambiar de tema** — es el hábito de mayor impacto para trabajar con Claude.
5. **Usa `/compact` cuando estés a mitad de una tarea** y no quieras perder continuidad.
