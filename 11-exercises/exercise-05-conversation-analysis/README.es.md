# Ejercicio 5: Analizar conversaciones de soporte al cliente

**Tiempo:** 45 minutos | **Nivel:** Intermedio
**Módulo:** [04-subagents](../../04-subagents/) — Delegar tareas especializadas a agentes
**Habilidad:** Crear un subagent reutilizable de análisis de datos para tareas de análisis recurrentes

## Objetivo

Aprenderás a crear un **subagent** — un agente especializado de Claude Code al que puedes delegar tareas una y otra vez. Primero harás el análisis de forma manual para entender cómo luce un "buen análisis". Luego codificarás ese conocimiento en un subagent reutilizable que podrá encargarse de tareas de análisis similares en el futuro.

Esta es una habilidad clave para usuarios de negocio: en lugar de repetir el mismo trabajo analítico cada semana o mes, construyes un especialista una vez y le delegas para siempre.

## Escenario

Eres Customer Success Manager en **Orbit Task Manager**, una herramienta ficticia de gestión de proyectos. Tu equipo registra cada conversación de soporte al cliente — chat en vivo y correo electrónico — en un archivo JSON. Tu VP de Experiencia del Cliente te ha pedido encontrar patrones: ¿Qué problemas surgen con más frecuencia? ¿Qué canales funcionan mejor? ¿Dónde están más frustrados los clientes? ¿En qué deberían enfocarse los equipos de producto y soporte?

## Lo que tienes

Un archivo JSON en `data/conversations.json` con 40 conversaciones de soporte al cliente. Cada conversación incluye:
- **customer** — el nombre del cliente
- **plan** — Free, Pro o Team
- **channel** — live_chat o email
- **category** — billing, bug_report, feature_question o how_to
- **satisfaction_score** — de 1 a 5
- **resolution** — resolved, escalated o unresolved
- **messages** — el hilo completo de la conversación

## Preparación

Este ejercicio usa archivos de datos incluidos en el repositorio del curso. Si aún no lo has hecho, clona el repo y navega a este ejercicio:

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
cd ~/Desktop/claude-learning/11-exercises/exercise-05-conversation-analysis
```

Si ya clonaste el repo, solo navega a la carpeta del ejercicio:

```bash
cd ~/Desktop/claude-learning/11-exercises/exercise-05-conversation-analysis
```

## Instrucciones paso a paso

### Parte 1: Hacer el análisis manualmente (15 minutos)

Antes de construir un subagent, necesitas entender cómo se ve un buen análisis para estos datos.

**Paso 1.** Pídele a Claude que explore los datos:

```
Read data/conversations.json and give me an overview:
- How many conversations total?
- Distribution by category (billing, bug_report, etc.)
- Distribution by channel (live_chat vs email)
- Distribution by plan (Free, Pro, Team)
- Distribution by resolution (resolved, escalated, unresolved)
- Average satisfaction score overall
```

**Paso 2.** Pídele a Claude que profundice en los patrones de satisfacción:

```
Now analyze what factors correlate with low satisfaction scores
(1 or 2 out of 5):
- Which categories have the lowest average satisfaction?
- Does channel affect satisfaction (live_chat vs email)?
- Does plan level affect satisfaction?
- What do the low-satisfaction conversations have in common?
Show the results as tables.
```

**Paso 3.** Pídele a Claude que extraiga hallazgos accionables del contenido real de las conversaciones:

```
Read through the message content in conversations with
satisfaction scores of 1 or 2. What are the top complaints
or frustrations? Group them into themes and suggest specific
actions the support or product team could take.
Save this as a markdown file called manual_analysis.md
```

### Parte 2: Crear un subagent de análisis de datos (20 minutos)

Ahora que sabes cómo se ve un buen análisis, codifícalo en un subagent reutilizable.

**Paso 4.** Pídele a Claude que te ayude a construir el subagent:

```
Help me create a subagent called "data-analyst" that I can
delegate data analysis tasks to. Based on the analysis I just
did manually, the subagent should:

- Be an expert at exploratory data analysis for business users
- Have access to: Read, Bash, Glob, Grep tools
- Follow this process every time:
  1. Explore the data structure and summarize what it contains
  2. Calculate key distributions and counts
  3. Look for patterns and correlations
  4. Identify outliers and anomalies
  5. Write plain-English insights with specific recommendations
- Always save its output as a markdown report
- Write for a non-technical audience (no jargon)
- Be able to handle CSV and JSON files

Save the agent definition at .claude/agents/data-analyst.md
```

**Paso 5.** Prueba tu subagent delegándole el mismo análisis:

```
@data-analyst Analyze data/conversations.json. Focus on finding
patterns that explain customer satisfaction. Save the report
as satisfaction_report.md
```

Compara la salida del subagent con tu análisis manual de la Parte 1. ¿Cubrió el mismo terreno? ¿Encontró algo que se te escapó?

### Parte 3: Refinar y reutilizar (10 minutos)

**Paso 6.** Con base en los resultados, mejora tu subagent:

```
Update the data-analyst subagent based on what I've learned:
- The report should always include a "Top 3 Actions" section
  at the very top (busy executives read this first)
- It should flag any data quality issues it finds
- It should compare segments (e.g., Free vs Pro vs Team)
  whenever the data allows it
Update .claude/agents/data-analyst.md with these improvements.
```

**Paso 7.** Piensa en qué otros contextos podrías usar este subagent. No se limita a datos de soporte — podrías delegarle análisis de encuestas, datos de ventas, métricas de uso o cualquier conjunto de datos estructurado.

## Lo que los subagents te permiten hacer aquí

| Concepto de subagent | Cómo lo usaste |
|---|---|
| **Archivo de agente** (`.claude/agents/`) | Creaste `data-analyst.md` con experiencia e instrucciones |
| **Restricción de herramientas** | Solo Read, Bash, Glob, Grep — herramientas seguras y de solo lectura |
| **Proceso estructurado** | El agente sigue los mismos pasos de análisis cada vez |
| **Delegación** (`@data-analyst`) | Delegas el análisis en lugar de hacerlo tú |
| **Reutilización** | El mismo agente funciona con cualquier conjunto de datos, no solo este |

## Lista de verificación

- [ ] Exploraste los datos de soporte y encontraste patrones de satisfacción
- [ ] Existe un informe `manual_analysis.md` con hallazgos
- [ ] Existe `.claude/agents/data-analyst.md` con un proceso definido
- [ ] Delegar a `@data-analyst` produce un informe útil
- [ ] El informe del subagent incluye recomendaciones accionables

## Lo que aprendiste

Los subagents son especialistas que construyes una vez y a los que delegas para siempre. La primera vez que haces una tarea, aprendes cómo se ve un "buen resultado" haciéndolo manualmente. La segunda vez, codificas ese conocimiento en una definición de agente. A partir de ahí, delegas — y el agente sigue el mismo proceso de calidad cada vez, liberándote para trabajo de mayor valor. Esto es especialmente poderoso para tareas de análisis recurrentes como informes semanales, revisiones mensuales o revisiones trimestrales.
