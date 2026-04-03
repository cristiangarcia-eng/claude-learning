# Subagents -- Asistentes de IA Especializados

## ¿Qué son los Subagents?

Los subagents son asistentes de IA especializados a los que Claude puede delegar tareas. Cada subagent tiene un área de enfoque específica, trabaja en su propio espacio separado y devuelve los resultados a la conversación principal.

Piensa en ello como tener un equipo de especialistas. En lugar de que una persona haga todo, le entregas tareas especificas al experto adecuado: un investigador profundiza en los datos, un revisor de contenido verifica tu escritura y un analista de competencia escanea el mercado. Cada uno trabaja de forma independiente y reporta los resultados.

## ¿Por qué usar Subagents?

| Beneficio | Qué significa para ti |
|-----------|----------------------|
| **Experiencia especializada** | Cada subagent está afinado para un tipo de trabajo específico |
| **Mantiene tu conversación limpia** | La investigacion compleja sucede en segundo plano, sin saturar tu chat |
| **Trabajo en paralelo** | Multiples subagents pueden trabajar en diferentes partes de un proyecto al mismo tiempo |
| **Reutilizable** | Configura un subagent una vez, usalo en muchos proyectos |

## Cómo funcionan los Subagents

1. Le pides algo a Claude (o Claude reconoce la necesidad)
2. Claude delega la tarea al subagent adecuado
3. El subagent trabaja en su propio contexto, separado de tu conversación
4. El subagent devuelve sus hallazgos a Claude
5. Claude te presenta los resultados

No necesitas administrar este proceso. Claude maneja la delegacion automaticamente basandose en las descripciones de subagents que hayas configurado.

## Donde viven los archivos de Subagents

| Ubicación | Alcance |
|-----------|---------|
| `.claude/agents/` en tu proyecto | Disponible para todo tu equipo |
| `~/.claude/agents/` en tu carpeta personal | Disponible solo para ti, en todos los proyectos |

## Creando un Subagent

Un subagent es un solo archivo markdown con un encabezado y una descripción del rol del agente.

### Formato básico

```
---
name: your-agent-name
description: What this agent does and when to use it
---

Your agent's instructions go here. Describe its role, what it should
focus on, and how it should present its findings.
```

### Campos requeridos

| Campo | Qué hace |
|-------|---------|
| `name` | El identificador del agente (minusculas, solo guiones) |
| `description` | Le dice a Claude cuando usar este agente. Incluye palabras clave que coincidan con solicitudes naturales |

### Campos opcionales

| Campo | Qué hace |
|-------|---------|
| `model` | Que modelo de Claude usar: `haiku` (rápido), `sonnet` (balanceado), `opus` (exhaustivo) |
| `memory` | Establecer en `user` o `project` para que el agente recuerde cosas entre sesiones |
| `background` | Establecer en `true` para ejecutar el agente en segundo plano mientras sigues trabajando |

## Ejemplos prácticos de Subagents

Aqui hay cinco agentes adecuados para roles no tecnicos. Cada uno muestra el contenido completo del archivo.

### Analista de investigacion (`.claude/agents/research-analyst.md`)

```
---
name: research-analyst
description: Conduct in-depth research and produce structured reports. Use when asked to research a topic, investigate a question, or prepare a briefing.
---

You are a research analyst. Search available files and documents,
then present findings as: Executive Summary (3-5 sentences),
Key Findings (numbered with evidence), Analysis, Recommendations,
and Sources/Gaps. Flag assumptions clearly.
```

### Revisor de contenido (`.claude/agents/content-reviewer.md`)

```
---
name: content-reviewer
description: Review documents for quality, clarity, and consistency. Use when asked to review, proofread, or provide feedback on written materials.
---

Evaluate content on four dimensions: Clarity (main message clear,
jargon-free), Structure (logical flow, good headings), Accuracy
(facts consistent, claims supported), Impact (achieves purpose,
clear call to action). Rate each: Strong / Adequate / Needs Work.
```

### Retroalimentación de diseno (`.claude/agents/design-feedback.md`)

```
---
name: design-feedback
description: Provide structured feedback on designs, mockups, and wireframes. Use when the user shares a design or asks for design critique.
---

Evaluate designs on: First Impressions, Usability (clear purpose,
findable elements, visual hierarchy), Consistency (colors, fonts,
spacing, brand alignment), Accessibility (readable text, target
sizes). Prioritize as Must Fix / Should Improve / Nice to Have.
Be specific -- say what to change and why.
```

### Propuesta de ventas (`.claude/agents/sales-proposal.md`)

```
---
name: sales-proposal
description: Help create and improve sales proposals and pitch materials. Use when working on proposals, pitch outlines, or client-facing sales documents.
---

Structure new proposals as: Client situation, Proposed solution,
Proof points, Investment (framed as value), Timeline, Next steps.
For reviews, check: leads with client problem (not product),
clear value prop, quantified benefits, justified pricing,
specific ask. Use "you/your" more than "we/our".
```

### Analisis de competencia (`.claude/agents/competitor-analysis.md`)

```
---
name: competitor-analysis
description: Analyze competitors and market positioning from available documents. Use when asked about competitors, market landscape, or comparative analysis.
---

Review available documents for competitor mentions. For each
competitor, profile: what they do, target audience, strengths,
weaknesses, pricing model. Then map the competitive landscape:
overlaps, differentiators, market gaps. Produce a comparison
table and recommend positioning angles. Flag assumptions.
```

## Usando Subagents

**Automático**: Claude delega al subagent adecuado cuando tu solicitud coincide con su descripción. Simplemente pregunta de forma natural -- "Investiga las tendencias en herramientas de trabajo remoto para la planificacion del Q3" -- y Claude usa el agente `research-analyst` si existe uno.

**Explicito**: Pide un agente específico por nombre: "Usa el agente content-reviewer para revisar este borrador de blog."

**En segundo plano**: Establece `background: true` para que el agente trabaje mientras continuas tu conversación. Presiona `Ctrl+B` para enviar un agente en ejecucion al segundo plano.

**Memoria persistente**: Establece `memory: user` o `memory: project` para que un agente recuerde hallazgos entre sesiones.

## Configurando Subagents

Hay tres maneras de crear un subagent:

1. **Pidele a Claude** (lo más fácil): "Create a new subagent called weekly-reporter that summarizes project activity. Save it to .claude/agents/"
2. **Usa /agents**: Escribe `/agents` para un menú interactivo para crear, ver, editar y eliminar subagents
3. **Crea el archivo manualmente**: Agrega un archivo `.md` a `.claude/agents/` (equipo) o `~/.claude/agents/` (personal)

## Consejos

| Hacer | Evitar |
|-------|--------|
| Dale a cada agente un enfoque claro y unico | Hacer un agente que haga todo |
| Escribe descripciones detalladas con palabras clave | Descripciones vagas que Claude no puede asociar a solicitudes |
| Comienza con 2-3 agentes y agrega más según sea necesario | Crear una docena de agentes antes de probar alguno |
| Usa `memory` para agentes que construyen conocimiento con el tiempo | Esperar que los agentes recuerden cosas sin configurar `memory` |
| Comparte agentes útiles con tu equipo via la carpeta del proyecto | Mantener agentes útiles solo en tu carpeta personal |

## Solución de problemas

**Claude no usa mi agente**: Verifica que el campo `description` contenga palabras clave que coincidan con como pides ayuda. Intenta solicitar el agente por nombre para verificar que funciona.

**El agente no aparece**: Confirma que el archivo está en `.claude/agents/` (no en `.claude/skills/`). Ejecuta `/agents` para ver todos los agentes disponibles.

**El agente da resultados inconsistentes**: Agrega instrucciones más especificas al system prompt. Incluye ejemplos del formato de salida que esperas.

## Ejercicio practico

> **[Ejercicio 5: Extraer Insights de Conversaciones](../11-exercises/exercise-05-conversation-analysis/)** — Analiza 100 conversaciones, luego crea un subagent reutilizable `data-analyst`. Practicaras archivos de agentes, restricciones de herramientas, prioridades y formatos de salida estructurados.
>
> **Tiempo:** 45 min | **Datos:** 100 conversaciones en JSON con patrones por descubrir

## Guias relacionadas

- [Slash Commands](../01-slash-commands/) -- Atajos incorporados
- [Skills](../03-skills/README.es.md) -- Instrucciones reutilizables de tareas
- [Memoria](../02-memory/README.es.md) -- Contexto persistente con CLAUDE.md

## Recursos adicionales

- [Documentación oficial de Subagents](https://code.claude.com/docs/en/sub-agents)

---

*Parte de la serie de guias [Claude How To](../)*
