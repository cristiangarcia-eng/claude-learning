# Memoria

## Por qué importa la memoria

Cada vez que inicias una conversación nueva con Claude, empieza desde cero — no sabe quién eres, en qué estás trabajando, ni cómo te gustan las cosas. Tendrías que explicar todo de nuevo.

**La memoria soluciona esto.** Es un archivo de texto simple que Claude lee al inicio de cada conversación. Tú escribes lo que Claude debe saber, y lo recuerda — automáticamente, cada vez.

## Dos tipos de memoria

Cuando escribes `/memory` en Claude Code, verás dos opciones:

![El menú de /memory en Claude Code](/claude-memory-menu.png)

### 1. User memory — sobre ti

**Dónde vive:** `~/.claude/CLAUDE.md` (en tu carpeta personal)

Te sigue a todas partes, en todos los proyectos. Pon aquí cosas que siempre son verdad sobre ti:

- Tu rol y a qué te dedicas
- Tu idioma preferido
- Cómo te gustan las respuestas formateadas
- Cosas que Claude siempre debe hacer (o nunca hacer)

### 2. Project memory — sobre el proyecto

**Dónde vive:** `./CLAUDE.md` (dentro de la carpeta del proyecto)

Solo aplica al proyecto actual. Se queda con la carpeta. Pon aquí cosas como:

- De qué trata el proyecto
- Archivos clave y qué contienen
- Terminología y nombres
- Reglas específicas de este proyecto

## Configurando tu memoria

Vamos a configurar ambos tipos usando el proyecto de Nike con el que has estado trabajando.

### Paso 1: Configura tu User memory

Abre Claude Code en tu carpeta `nike-analysis`, escribe `/memory` y selecciona **User memory** (opción 1). Se abrirá un archivo — agrega algo así:

```
Soy product manager.
Prefiero las respuestas en español.
Mantén los resúmenes en menos de 200 palabras.
Usa bullet points en vez de párrafos largos.
Siempre explica las cosas en lenguaje simple, no técnico.
```

Guarda el archivo (`Cmd+S`) y ciérralo.

### Paso 2: Configura tu Project memory

Escribe `/memory` de nuevo y selecciona **Project memory** (opción 2). Agrega algo así:

```
Este es un proyecto de análisis competitivo de Nike.

Archivos clave:
- competitive-analysis.md — el informe principal con fortalezas, debilidades, oportunidades y amenazas
- sales-data.csv — ingresos trimestrales por región (North America, EMEA, Greater China, APLA)
- notes.txt — notas de reunión de la revisión de estrategia de marca del 15 de marzo

Contexto importante:
- Estamos evaluando la posición de Nike frente a Adidas y New Balance
- El enfoque está en la estrategia DTC y la transformación digital
- La recuperación en China es una preocupación clave del equipo
```

Guarda y cierra.

### Paso 3: Ve la diferencia

Ahora inicia una conversación nueva (`/clear`) y pregunta:

> `¿En qué deberíamos enfocarnos para el próximo trimestre?`

Sin memoria, Claude no tendría idea de qué significa "deberíamos" ni de qué proyecto estás hablando. Con memoria, sabe que eres un PM trabajando en un análisis competitivo de Nike, y te da una respuesta relevante y enfocada.

## Adiciones rápidas a la memoria

No siempre necesitas abrir el archivo de memoria. Durante una conversación, puedes agregar notas rápidas con `#`:

> `# Al analizar datos de ventas, siempre comparar el crecimiento año contra año`

> `# Nuestro año fiscal empieza en junio, no en enero`

Claude las agregará a tu memoria de proyecto automáticamente.

## Consejos para una buena memoria

**Mantenla concisa.** Claude lee todo tu archivo de memoria al inicio de cada conversación. Una memoria enfocada y bien organizada funciona mejor que una larga.

**Actualízala regularmente.** A medida que tu proyecto evoluciona, actualiza la memoria. Elimina cosas que ya no son verdad. Agrega nuevo contexto conforme lo aprendes.

**Sé específico.** "Me gustan las respuestas cortas" está bien. "Mantén los resúmenes en menos de 200 palabras y usa bullet points" es mejor.

| Buenas entradas de memoria | Entradas menos útiles |
|---|---|
| "Nuestra fecha límite de Q4 es el 30 de marzo" | "Tenemos una fecha límite" |
| "Compara todos los competidores contra Nike como referencia" | "Haz buen análisis" |
| "Las cifras de ingresos están en millones de USD" | "Ten cuidado con los números" |

## Lo que la memoria NO es

La memoria **no** es un historial de conversaciones. Claude no recuerda de qué hablaste ayer. La memoria es un conjunto de instrucciones y contexto que Claude lee de nuevo cada vez.

Piensa en ella como un documento de briefing que le entregas a un nuevo miembro del equipo en su primer día — no ha estado en tus reuniones, pero si el briefing es bueno, puede ponerse al día rápidamente.

**Siguiente paso**: [Aprende a experimentar sin miedo con los checkpoints →](../08-checkpoints/README.es.md)
