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

Una vez creado, puedes usar un skill de dos formas:

- **Escribe el comando**: `/meeting-notes` y luego pega tus notas
- **Solo pídelo naturalmente**: "Aquí están mis notas de reunión de hoy, por favor organízalas" — Claude reconoce la solicitud y activa el skill automáticamente

## Consejos

| Haz | Evita |
|----|-------|
| Explora el marketplace antes de crear desde cero | Reinventar skills que ya existen |
| Mantén un skill enfocado en una sola tarea | Hacer un skill que intente hacer todo |
| Incluye ejemplos del resultado esperado en tu skill | Dejar que Claude adivine el formato |
| Comparte skills útiles con tu equipo | Guardarte flujos de trabajo útiles |

