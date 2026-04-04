# Trabaja con tu Voz

Uno de los mayores impulsos de productividad con Claude Code es **no escribir nada**. En lugar de redactar tus solicitudes, simplemente dilas en voz alta.

Esto es especialmente poderoso para personas no técnicas — puedes describir lo que quieres en lenguaje natural y conversacional sin preocuparte por el formato o la sintaxis.

## La forma recomendada: Wispr Flow

Recomendamos instalar **Wispr Flow** — una aplicación de voz a texto que funciona en cualquier lugar de tu computadora. No es solo para Claude Code — puedes usarla en cualquier app: Slack, email, Google Docs, tu navegador, donde sea.

### ¿Por qué Wispr Flow?

| Característica | Wispr Flow | Voz integrada |
|---------|-----------|----------------|
| Funciona en todos lados | Cualquier app de tu computadora | Solo dentro de Claude Code |
| Velocidad | Tiempo real, muy rápido | Ligero retraso |
| Precisión | Excelente, aprende tu estilo | Buena |
| Formato | Agrega puntuación automáticamente | Básico |
| Siempre disponible | Cualquier campo de texto, cualquier app | Solo cuando Claude está abierto |

### Cómo configurarlo

1. Descarga **Wispr Flow** desde [wisprflow.ai](https://www.wisprflow.ai)
2. Instálalo y ábrelo
3. Mantén presionada la **tecla de atajo** (te muestra cuál durante la configuración)
4. Empieza a hablar — tus palabras aparecen como texto donde esté tu cursor
5. Suelta la tecla cuando termines

Eso es todo. Ahora puedes "escribir" hablando en cualquier app.

### Usar Wispr Flow con Claude Code

Abre Claude Code en tu terminal de VS Code, luego:

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

## Alternativa: la voz integrada de Claude

Si prefieres no instalar Wispr Flow, Claude Code tiene su propia función de voz:

```
/voice
```

Esto activa pulsar-para-hablar directamente dentro de Claude Code. Mantén presionada la tecla, habla y suelta.

La diferencia es que `/voice` solo funciona dentro de Claude Code, mientras que Wispr Flow funciona en todas las apps de tu computadora. Para la mayoría de personas, Wispr Flow es la mejor opción porque lo usarás en todos lados — no solo con Claude.

> **Nota para hispanohablantes**: El `/voice` integrado de Claude está optimizado para inglés. Si hablas en español u otros idiomas, la precisión de la transcripción baja bastante. Wispr Flow maneja múltiples idiomas mucho mejor, lo cual es otra razón por la que lo recomendamos.

## Consejos para la entrada por voz

- **Habla con naturalidad** — no intentes "sonar técnico". Solo describe lo que quieres como se lo dirías a un colega
- **Sé específico** — "Cambia el título principal a Bienvenido a Nova" funciona mejor que "Haz el título diferente"
- **Usa pausas** — Wispr Flow maneja las pausas naturales bien, tómate tu tiempo
- **Corrige sobre la marcha** — si transcribe algo mal, simplemente corrígelo antes de presionar Enter

> **Esto lo cambia todo.** Una vez que te acostumbras a la entrada por voz, volver a escribir se siente dolorosamente lento. La mayoría de personas que lo prueban nunca vuelven atrás.

