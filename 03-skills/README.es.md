# Skills — Capacidades Reutilizables para Claude

## ¿Qué son los Skills?

Los Skills son instrucciones reutilizables que Claude sigue automáticamente. En lugar de re-explicar la misma tarea en cada conversación, un Skill guarda las instrucciones una vez. Claude las usa cada vez que son relevantes.

Piensa en un skill como una receta. Escribes los pasos una vez, y Claude los sigue siempre — produciendo resultados consistentes.

| Beneficio | Ejemplo |
|---------|---------|
| **Ahorra tiempo** | Deja de re-escribir "formatea mis notas de reunión así" en cada sesión |
| **Mantén consistencia** | Cada informe de estado sigue la misma plantilla |
| **Comparte con tu equipo** | Todos usan las mismas guías de voz de marca |
| **Claude los activa automáticamente** | Claude detecta cuándo un skill es relevante y lo usa |

## Explora el Marketplace de Skills

Antes de crear tus propios skills, explora lo que ya existe. La comunidad ha creado cientos de skills listos para usar:

**[skillsmp.com](https://skillsmp.com/)**

Es como una tienda de aplicaciones para capacidades de Claude Code — navega por categoría, ve los más populares, e instala con un solo comando.

### Skills que vale la pena probar

Aquí hay algunos para empezar:

| Skill | Qué hace | Ideal para |
|-------|----------|-----------|
| **frontend-design** | Crea interfaces web pulidas y landing pages | PMs que quieren mockups rápidos |
| **pdf-generator** | Crea y rellena documentos PDF | Propuestas de venta, informes |
| **data-analyst** | Analiza datasets, encuentra patrones y crea visualizaciones | Sales ops, finanzas, cualquiera con CSVs |
| **simplify** | Revisa código por calidad y lo simplifica | Cualquiera revisando el output de Claude |

### Cómo instalar un skill

1. Ve a [skillsmp.com](https://skillsmp.com/) y encuentra un skill que te guste
2. Copia el comando de instalación (se muestra en la página del skill)
3. Pégalo en tu terminal de Claude Code
4. El skill está listo para usar inmediatamente

### Pruébalo ahora

Instala un skill del marketplace y pruébalo. Por ejemplo, después de instalar **frontend-design**, podrías pedirle a Claude:

> `Crea una landing page sencilla para una campaña DTC de Nike dirigida a corredores Gen Z`

Claude usará las instrucciones del skill para producir un resultado pulido — mucho mejor que preguntar sin el skill.

## Crea tus propios Skills

Una vez que hayas visto cómo son los skills, puedes crear los tuyos. Los skills son archivos de texto simples almacenados en `.claude/skills/`.

### Pídele a Claude que cree uno

La forma más fácil:

```
Crea un skill llamado "meeting-notes" que formatee notas de reunión en:
1. Resumen de la reunión (fecha, asistentes)
2. Decisiones clave
3. Puntos de acción (tarea, responsable, fecha límite)
4. Preguntas abiertas
```

Claude creará el archivo por ti en la ubicación correcta.

### Dónde viven los skills

| Ubicación | Quién puede usarlo |
|----------|---------------|
| `~/.claude/skills/mi-skill/SKILL.md` | Solo tú, en todos los proyectos |
| `.claude/skills/mi-skill/SKILL.md` | Todo tu equipo (compartido via la carpeta del proyecto) |

### Usando tus skills

Una vez creado, puedes usar un skill de tres formas:

- **Escribe el slash command**: `/meeting-notes` y luego pega tus notas
- **Menciónalo en tu prompt**: "Crea una landing page para la campaña DTC de Nike **usando el skill de frontend-design**" — esto asegura que Claude use el skill en vez de hacerlo por libre
- **Solo pídelo naturalmente**: "Aquí están mis notas de reunión de hoy, por favor organízalas" — Claude puede reconocer la solicitud y activar el skill automáticamente

> **Importante:** Claude no siempre activa los skills por su cuenta. Si instalas un skill como **frontend-design** y solo pides "crea una landing page," Claude podría hacerlo sin usar el skill — y el resultado no será tan bueno. Para asegurarte, **menciona el skill en tu prompt** o usa el slash command.

### Haz que un skill esté siempre activo en un proyecto

Si quieres que Claude **siempre** use un skill específico en un proyecto, añádelo a tu memoria de proyecto (`CLAUDE.md`). Abre el archivo desde Cursor o escribe en Claude Code:

```
! open CLAUDE.md
```

Añade una línea como:

```
Cuando crees cualquier interfaz frontend, usa siempre el skill frontend-design.
Cuando formatees notas de reunión, usa siempre el skill meeting-notes.
```

Así no tienes que acordarte de mencionar el skill cada vez — Claude lo usará automáticamente en cada conversación de ese proyecto.

## Ejemplo real: Skill de emails de venta

Este es un skill real usado por el equipo de ventas de una empresa de recruiting. Estandariza cómo el equipo escribe emails de outreach — tono consistente, siempre con datos, siempre con un cierre suave.

Así se ve el archivo `SKILL.md` (acortado para claridad):

```markdown
# Sales Emails Skill

## Cómo usar
Cuando necesites escribir un email de venta:
1. Identifica el tipo de email del catálogo (pregunta si no está claro)
2. Recopila los inputs necesarios para ese tipo
3. Identifica el idioma (según conversaciones previas; español por defecto)
4. Redacta el email siguiendo la estructura y tono de ese tipo

## Principios universales de tono
1. **Cálido y personal** — Primera persona del singular. Usa el nombre del
   contacto. Referencia la última conversación o contexto compartido.
2. **Basado en datos** — Siempre incluye números específicos: horas ahorradas,
   coste por proceso, oportunidad total. Los números generan credibilidad.
3. **Estructurado para lectores ocupados** — Empieza con contexto, usa
   resúmenes en viñetas, mantenlo escaneable.
4. **Cierre suave, nunca agresivo** — Propone un siguiente paso, no lo exijas.
5. **Seguro pero no arrogante** — Di claramente lo que puedes hacer.
   Ancla las afirmaciones en los datos del cliente, no en lenguaje de marketing.

## Tipos de email

### Tipo 1: Follow-up de Business Case
Cuando: Después de presentar un business case. Objetivo: enviar un resumen
que puedan circular internamente.

Inputs necesarios:
- Nombre del contacto y empresa
- Qué se discutió/acordó
- Números clave (horas ahorradas, coste/hora, tamaño del equipo, oportunidad total)
- Alcance del piloto propuesto (típico: 10-20% del volumen)

Estructura:
Subject: Business Case [Empresa] x [Tu Empresa]
- Saludo referenciando la reunión
- Viñetas de resumen con cálculos (horas x coste = ahorro)
- Propuesta de piloto (enmarcado colaborativo)
- CTA suave

### Tipo 2: Follow-up post-reunión
[...]

### Tipo 3: Propuesta de piloto
[...]

### Tipo 4: Intro en frío
[...]

## Checklist
Antes de entregar cualquier borrador:
- Es el saludo cálido y personal?
- Son todos los números específicos y los cálculos visibles?
- Es el CTA suave y claro (un solo siguiente paso)?
- Está en el idioma correcto?
- Suena personal, no como una plantilla?
```

Fíjate en lo que hace este skill efectivo:

- **Trigger claro** — le dice a Claude exactamente cuándo activarse
- **Principios universales** — reglas de tono que aplican a todos los tipos de email
- **Plantillas estructuradas** — cada tipo tiene inputs, estructura y guías
- **Un checklist** — control de calidad antes de entregar el resultado
- **Reglas de idioma** — maneja equipos bilingües de forma natural

El equipo de ventas no necesita explicar sus estandares de email cada vez. Solo dicen "escribe un email de follow-up a Maria de Acme sobre el piloto" y Claude produce un borrador que coincide con su voz, incluye los datos correctos, y sigue su formato.

## Consejos

| Haz | Evita |
|----|-------|
| Explora el marketplace antes de crear desde cero | Reinventar skills que ya existen |
| Mantén un skill enfocado en una sola tarea | Hacer un skill que intente hacer todo |
| Incluye ejemplos del resultado esperado en tu skill | Dejar que Claude adivine el formato |
| Comparte skills útiles con tu equipo | Guardarte flujos de trabajo útiles |

