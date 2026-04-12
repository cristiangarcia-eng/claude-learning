# Trabaja con tu Voz

> **Esta es posiblemente la lección más importante de todo el curso.**

*¿Por qué narices metemos una lección de hablar con la voz en un curso de IA?*

Porque si hay algo que determina si la IA te da resultados buenos o mediocres, es una sola cosa: **el contexto que le das**. Con diferencia, es el factor más importante. Más que saber el prompt perfecto, más que conocer trucos avanzados — lo que marca la diferencia es que la IA entienda bien tu situación.

Y aquí está el descubrimiento clave: **la voz mejora el contexto de forma brutal**.

Cuando escribes, tiendes a resumir, a simplificar, a ir directo al grano. Te saltas detalles que parecen obvios. El resultado es un prompt corto y vago que produce respuestas genéricas.

Cuando hablas, pasa lo contrario. Naturalmente cuentas más cosas: el problema que tienes, cómo habías pensado solucionarlo, qué has probado ya, el contexto del proyecto, por qué importa... Toda esa información adicional es exactamente lo que la IA necesita para darte una respuesta realmente útil.

### La regla de oro

**Cuéntale tus problemas a la IA como se los contarías a un colega.** Hazlo de forma estructurada o desestructurada, como te venga a la cabeza, pero habla en vez de escribir:

- Cuéntale el problema que intentas resolver
- Cuéntale las opciones que habías considerado
- Cuéntale el contexto del proyecto — quién lo va a usar, qué restricciones hay
- Cuéntale qué has probado ya y por qué no funcionó

No necesitas organizar tus pensamientos. Eso es trabajo de la IA.

> **Hazlo en el idioma donde te sientas más cómodo.** Si piensas mejor en español, habla en español. Si mezclas idiomas, mezcla idiomas. Lo que importa es que te expreses con naturalidad y profundidad — no el idioma.

### Lo que debes evitar siempre

**Nunca des respuestas vagas a la IA.** Esto es igual de importante al hablar que al escribir:

- ❌ *"Hazme algo para la web"* → ✅ *"Necesito una sección de precios para nuestra web, con tres planes: básico a 29, pro a 59 y enterprise personalizado. El público son PMs de empresas medianas."*
- ❌ *"Arregla esto"* → ✅ *"El formulario de contacto no envía el email. Creo que el problema está en la API porque el botón sí responde al click pero no pasa nada después."*
- ❌ *"Mejora el texto"* → ✅ *"El texto de la landing suena muy técnico. Nuestros clientes son directores de marketing que no saben de código. Hazlo más accesible pero sin perder credibilidad."*

La vaguedad es el enemigo de los buenos resultados. La voz te ayuda a evitarla porque cuando hablas, naturalmente das más contexto.

## La forma recomendada: Wispr Flow

Recomendamos instalar **Wispr Flow** — una aplicación de voz a texto que funciona en cualquier lugar de tu computadora. No es solo para Claude Code — puedes usarla en cualquier app: Slack, email, Google Docs, tu navegador, donde sea.

Mantienes presionada una tecla, hablas, sueltas, y tus palabras aparecen como texto donde esté tu cursor. Es rápido, preciso, aprende tu estilo y añade puntuación automáticamente. Una vez que lo pruebas, es difícil volver atrás.

### Cómo configurarlo

1. Descarga **Wispr Flow** desde [wisprflow.ai](https://www.wisprflow.ai)
2. Instálalo y ábrelo
3. Mantén presionada la **tecla de atajo** (te muestra cuál durante la configuración)
4. Empieza a hablar — tus palabras aparecen como texto donde esté tu cursor
5. Suelta la tecla cuando termines

Eso es todo. Ahora puedes "escribir" hablando en cualquier app.

### Usar Wispr Flow con Claude Code

Abre Claude Code en tu terminal de Cursor, luego:

1. Haz clic en el área de entrada
2. Mantén presionada la tecla de atajo de Wispr Flow
3. Di lo que quieres: *"Encuentra todas las páginas de nuestro sitio web que mencionan el nombre antiguo de la empresa y muéstrame una lista"*
4. Suelta la tecla — tus palabras aparecen como texto
5. Presiona Enter para enviar a Claude

Se siente como tener una conversación. Tú hablas, Claude escucha y trabaja.

### Ejemplos de prompts que puedes decir en voz alta

> "Lee la página principal y dime si el mensaje es claro para una audiencia no técnica"

> "Encuentra la sección de precios y cambia el precio mensual de 49 a 59 dólares"

> "Compara nuestra página principal con esta URL del competidor y dime qué hacen mejor"

> "Crea un resumen de todos los cambios hechos esta semana que pueda compartir con mi equipo en Slack"

## Alternativa open source: Handy

Wispr Flow es de pago — aunque su tier gratuito da para mucho. Si prefieres una alternativa totalmente gratuita y open source, echa un vistazo a **Handy**: [handy.computer](https://handy.computer/).

Handy funciona con la misma idea que Wispr Flow (pulsar-para-hablar en cualquier app de tu computadora), pero es software libre y corre localmente en tu máquina usando modelos Whisper. La precisión es algo menor que Wispr Flow y el formato automático es más básico, pero para muchos casos de uso es más que suficiente — y es 100% gratis.

## Alternativa: la voz integrada de Claude

Claude Code también tiene su propia función de voz integrada:

```
/voice
```

Esto activa pulsar-para-hablar directamente dentro de Claude Code. Mantén presionada la tecla, habla y suelta.

La diferencia es que `/voice` solo funciona dentro de Claude Code, mientras que Wispr Flow y Handy funcionan en todas las apps de tu computadora. Por eso, para la mayoría de personas, una herramienta del sistema (Wispr Flow o Handy) es la mejor opción — la usarás en todos lados, no solo con Claude.

> **Nota para hispanohablantes**: El `/voice` integrado de Claude está optimizado para inglés. Si hablas en español u otros idiomas, la precisión de la transcripción baja bastante. Wispr Flow y Handy manejan múltiples idiomas mucho mejor, lo cual es otra razón por la que recomendamos usar una de esas dos.

### Comparación rápida

Ahora que conoces las tres opciones, así es como se comparan:

| Característica | Wispr Flow | Handy | Voz integrada (`/voice`) |
|---|---|---|---|
| Funciona en todos lados | ✅ Cualquier app | ✅ Cualquier app | ❌ Solo Claude Code |
| Precio | De pago (tier gratuito generoso) | Gratis y open source | Gratis |
| Precisión | Excelente, aprende tu estilo | Buena (Whisper local) | Buena en inglés, peor en otros idiomas |
| Formato automático | Puntuación inteligente | Básico | Básico |
| Idiomas no ingleses | Muy bueno | Bueno | Flojo |

## Voice dumps: el contexto que nunca escribirías

En vez de pasar 20 minutos escribiendo un brief detallado, prueba un **voice dump** — simplemente habla durante 2-3 minutos seguidos, contando todo lo que la IA necesita saber.

La magia del voice dump es que **incluyes contexto que nunca te molestarías en escribir** — la queja del equipo la última vez, la restricción que nadie documentó, la razón real por la que el proyecto importa.

> **Los voice dumps son 3x más rápidos que escribir** y producen mejores resultados porque la IA recibe el contexto completo, no la versión resumida.


