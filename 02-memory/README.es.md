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

### Paso 1: Activa el comando `code` en VS Code

Antes de empezar, asegurate de que puedes abrir archivos desde la terminal usando VS Code. Esto hace que editar archivos de memoria sea mucho mas comodo:

1. Abre VS Code
2. Presiona `Cmd+Shift+P` (Mac) o `Ctrl+Shift+P` (Windows)
3. Escribe **"Shell Command: Install 'code' command in PATH"** y seleccionalo
4. Listo — ahora puedes abrir cualquier archivo desde la terminal con `code nombre-archivo`

Solo necesitas hacer esto una vez.

### Paso 2: Configura tu User memory

En vez de usar el comando `/memory` (que abre un editor pequeño en la terminal), abre el archivo directamente en VS Code donde es mucho mas comodo editarlo:

```bash
code ~/.claude/CLAUDE.md
```

Esto abre tu archivo de User memory en una pestana completa de VS Code. Agrega algo asi:

```
Soy product manager.
Prefiero las respuestas en español.
Mantén los resúmenes en menos de 200 palabras.
Usa bullet points en vez de párrafos largos.
Siempre explica las cosas en lenguaje simple, no técnico.
```

Guarda el archivo (`Cmd+S`) y listo.

### Paso 3: Configura tu Project memory

Para la memoria de proyecto, la mejor practica es: **cada vez que empieces a trabajar en una carpeta de proyecto nueva, ejecuta `/init` como tu primer comando.** Claude escaneara tus archivos, entendera el proyecto, y creara un `CLAUDE.md` automaticamente.

1. Abre Claude Code en tu carpeta de proyecto
2. Escribe `/init`
3. Claude lee tus archivos y genera un `CLAUDE.md` con el contexto del proyecto

Eso es todo. Claude descubre de que trata el proyecto, cuales son los archivos clave, y escribe la memoria por ti.

Puedes revisar y editar lo que Claude genero:

```bash
code CLAUDE.md
```

Por ejemplo, para el proyecto de Nike, Claude podria generar algo asi:

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

Revisalo, ajusta lo que falte, guarda y listo.

> **Hazlo un habito.** Cada vez que abras una carpeta de proyecto nueva, ejecuta `/init` primero. Te toma 30 segundos y Claude empieza cada conversacion sabiendo en que estas trabajando.

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

**Mantenla concisa.** Claude lee todo tu archivo de memoria al inicio de cada conversación. **Mantenla por debajo de 150-200 instrucciones** — más allá de eso, Claude empieza a ignorar reglas. Una memoria enfocada y bien organizada funciona mucho mejor que una larga.

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

