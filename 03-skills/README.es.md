# Skills -- Capacidades Reutilizables para Claude

## ¿Qué son los Skills?

Los skills son instrucciones reutilizables que escribes una vez y usas una y otra vez. En lugar de re-explicar la misma tarea a Claude en cada conversación, guardas las instrucciones como un Skill. Claude entonces sigue esas instrucciones automaticamente cuando son relevantes, o cuando invocas el skill por nombre.

Piensa en un skill como una receta. Escribes los pasos una vez, y cualquier persona de tu equipo puede usarla para obtener resultados consistentes.

## ¿Por qué usar Skills?

| Beneficio | Ejemplo |
|-----------|---------|
| **Ahorrar tiempo** | Deja de volver a escribir "formatea mis notas de reunion así" en cada sesión |
| **Mantener consistencia** | Cada informe de estado sigue la misma plantilla |
| **Compartir con tu equipo** | Todos usan las mismas guias de voz de marca |
| **Claude los activa automaticamente** | Claude detecta cuando un skill es relevante y lo usa |

## Donde viven los Skills

Los skills son archivos almacenados en una carpeta `.claude/skills/`. Cada skill tiene su propio directorio con un archivo `SKILL.md` adentro.

| Ubicación | Quien puede usarlo |
|-----------|-------------------|
| `~/.claude/skills/my-skill/SKILL.md` | Solo tu, en todos los proyectos |
| `.claude/skills/my-skill/SKILL.md` | Todo tu equipo (compartido via la carpeta del proyecto) |

## Creando tu primer Skill

### Paso 1: Crear la carpeta

Pidele a Claude que la cree por ti:

```
Create a skill called "meeting-notes" in my project's .claude/skills/ folder
```

O hazlo manualmente -- crea un archivo en `.claude/skills/meeting-notes/SKILL.md`.

### Paso 2: Escribir el archivo SKILL.md

Un archivo de skill tiene dos partes: una sección de encabezado con metadatos y las instrucciones.

```
---
name: meeting-notes
description: Format raw meeting notes into a structured summary. Use when the user shares meeting notes or asks to organize notes.
---

# Meeting Notes Formatter

When the user provides meeting notes, organize them into this format:

## Meeting Summary
- Date:
- Attendees:
- Duration:

## Key Decisions
- List each decision made

## Action Items
- [ ] Task -- Owner -- Due date

## Open Questions
- List unresolved items for follow-up

## Notes
- Keep the original detail but improve clarity
- Flag any items that seem time-sensitive
```

### Paso 3: Usarlo

Puedes usar un skill de dos maneras:

- **Escribe el comando**: `/meeting-notes` y luego pega tus notas
- **Simplemente pregunta de forma natural**: "Aqui están mis notas de la reunion de hoy, por favor organizalas" -- Claude reconoce la solicitud y activa el skill automaticamente

## Referencia del formato SKILL.md

La sección de encabezado (entre los marcadores `---`) le dice a Claude sobre el skill:

| Campo | Qué hace | Requerido |
|-------|---------|-----------|
| `name` | El nombre del comando (se convierte en `/name`) | Si |
| `description` | Le dice a Claude que hace este skill y cuando usarlo | Si |
| `disable-model-invocation` | Establecer en `true` si solo tu debes activar este skill, no Claude automaticamente | No |

La descripción es el campo más importante. Escribela para que Claude sepa exactamente cuando activar el skill. Incluye palabras clave que coincidan con como las personas piden ayuda naturalmente.

**Descripción debil**: "Helps with content"

**Descripción fuerte**: "Review blog posts and marketing copy for brand voice consistency. Use when the user asks to check content, review copy, or ensure brand alignment."

## Ejemplos prácticos de Skills

Aqui hay cuatro skills adecuados para roles no tecnicos. Cada uno muestra el contenido completo del SKILL.md.

### Skill de revision de contenido

```
---
name: content-review
description: Review written content for clarity, tone, and completeness. Use when the user asks to review, proofread, or check a document, email, or blog post.
---

Review the provided content against these criteria:
- **Clarity**: Main point obvious? Sentences concise? Jargon avoided?
- **Tone**: Appropriate for the audience? Consistent throughout?
- **Structure**: Logical flow? Headers and bullets for scannability?
- **Completeness**: Claims supported? Dates and names accurate?

Rate each category: Strong / Needs Work / Missing.
Provide specific suggestions with examples.
```

### Skill de voz de marca

```
---
name: brand-voice
description: Ensure content matches brand voice guidelines. Use when creating marketing copy, customer emails, or public-facing content.
---

Apply these voice rules to all content:
- Friendly but professional -- like a knowledgeable colleague
- Use "you" when addressing readers, active voice throughout
- Keep sentences under 20 words, lead with benefits
- Avoid: "leverage", "synergy", "disrupt", "best-in-class"
- Use sentence case for headings, one idea per paragraph
```

### Skill de analista de investigacion

```
---
name: research-analyst
description: Conduct structured research and produce an analysis report. Use when the user asks to research a topic, analyze a market, or gather information.
---

Follow this process:
1. Clarify scope: What question? What audience? What decisions?
2. Search available files and documents for relevant information
3. Produce the report with these sections:
   - Executive Summary (3-5 sentences)
   - Key Findings (numbered, with evidence)
   - Analysis (what findings mean in context)
   - Recommendations (specific next steps)
   - Information Gaps (what we could not determine)
```

### Skill de notas de reunion

```
---
name: meeting-notes
description: Format raw meeting notes into structured summaries. Use when the user shares meeting notes, transcripts, or asks to organize notes.
---

Organize notes into: Meeting Summary (date, attendees), Decisions Made,
Action Items (task / owner / due date / priority as a table), Discussion
Summary, and Parking Lot (deferred items).
Flag items with no owner as "TBD". Flag missing due dates. Keep factual.

## Marketplace de Skills

No tienes que crear cada skill desde cero. Hay un marketplace comunitario con skills listos para usar que puedes instalar con un solo clic:

**[skillsmp.com](https://skillsmp.com/)**

Explora los skills más populares, ordenados por likes, e instala los que se ajusten a tu flujo de trabajo. Es como una tienda de aplicaciones para las capacidades de Claude Code.

### Como instalar un skill del marketplace

1. Ve a [skillsmp.com](https://skillsmp.com/)
2. Explora o busca un skill
3. Sigue las instrucciones de instalación (generalmente un solo comando)
4. El skill está listo para usar inmediatamente

> **Pruebalo ahora**: Visita el marketplace e instala uno de los skills con más likes. Es una excelente manera de ver lo que es posible antes de crear los tuyos propios.

## Administrando tus Skills

**Ver lo que está disponible**: Escribe `/` en Claude Code y explora, o pregunta "What skills are available?" **Editar un skill**: Abre el archivo SKILL.md en cualquier editor de texto y reinicia Claude Code. **Compartir con tu equipo**: Pon los skills en la carpeta `.claude/skills/` de tu proyecto y haz commit al control de versiones.

## Consejos

| Hacer | Evitar |
|-------|--------|
| Escribir descripciones especificas con palabras clave de activacion | Descripciones vagas como "helps with stuff" |
| Mantener un skill enfocado en una sola tarea | Hacer un skill que intente hacer todo |
| Incluir ejemplos del resultado esperado | Dejar que Claude adivine el formato |
| Probar tu skill con un escenario real | Asumir que funciona sin probarlo |
| Compartir skills útiles con tu equipo | Guardar flujos de trabajo útiles solo para ti |

## Solución de problemas

**Claude no usa mi skill automaticamente**: La descripción probablemente no coincide con como estas preguntando. Agrega más palabras clave que coincidan con solicitudes naturales.

**El skill no aparece**: Verifica que el archivo este en `.claude/skills/your-skill/SKILL.md` (no solo en `.claude/skills/SKILL.md`). Reinicia Claude Code.

**El skill se activa cuando no lo quiero**: Agrega `disable-model-invocation: true` al encabezado. Entonces solo tu puedes activarlo con `/skill-name`.

## Ejercicio practico

> **[Ejercicio 3: Investigar y Estructurar un Panorama](../11-exercises/exercise-03-research-landscape/)** — Haz un analisis competitivo, luego convierte tu proceso de investigacion en un skill de activacion automática. Practicaras la creacion de archivos SKILL.md con descripciones ricas en palabras clave, plantillas y auto-invocacion.
>
> **Tiempo:** 30 min | **Datos:** Ejemplo de salida mostrando como se ve una buena investigacion

## Guias relacionadas

- [Slash Commands](../01-slash-commands/) -- Atajos incorporados
- [Memoria](../02-memory/README.es.md) -- Contexto persistente con CLAUDE.md
- [Subagents](../04-subagents/README.es.md) -- Asistentes de IA especializados

## Recursos adicionales

- [Documentación oficial de Skills](https://code.claude.com/docs/en/skills)

---

*Parte de la serie de guias [Claude How To](../)*
