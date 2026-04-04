# Ejercicio 8: Priorizar desde el caos

**Tiempo:** 40 minutos | **Nivel:** Avanzado
**Módulo:** [09-advanced-features](../../09-advanced-features/) -- Plan mode para flujos de trabajo complejos
**Habilidad:** Usar Plan Mode para diseñar un marco de puntuación y luego ejecutarlo

## Objetivo

Aprenderás a usar **Plan Mode** para construir un marco de priorización para un conjunto grande de ideas sin estructura. En lugar de lanzarte directamente a puntuar, primero diseñarás el *sistema* de puntuación — y luego dejarás que Claude lo aplique de forma consistente a los 60 elementos.

Esta es una habilidad que PMs, estrategas y líderes de equipo usan constantemente: convertir un backlog desordenado en una lista de prioridades clara y defendible.

## Escenario

Eres Product Manager en **Orbit Task Manager**, una herramienta ficticia de gestión de proyectos para equipos medianos. Durante el último mes, recopilaste feedback de toda la empresa — ventas, ingeniería, customer success, marketing y finanzas. El resultado: 60 ideas en bruto en una hoja de cálculo. Algunas son solicitudes detalladas, otras son deseos de una línea, y algunas están en español (Orbit tiene un equipo en Madrid). Ninguna está puntuada, categorizada ni priorizada.

Tu VP de Producto te pidió presentar una recomendación de roadmap priorizado para el viernes. Necesitas pasar del caos a una lista clara y defendible.

Los datos en bruto están en `data/raw_ideas.csv`.

## Lo que aprenderás

- Cómo usar Plan Mode para diseñar un marco antes de aplicarlo
- Cómo refinar un plan de forma colaborativa con Claude
- Cómo pasar de insumos desordenados a resultados puntuados y ordenados
- Por qué planificar el enfoque primero evita retrabajo innecesario

## Instrucciones paso a paso

### Parte 1: Explorar los datos

1. Abre Claude Code en la carpeta de este ejercicio.
2. Pídele a Claude que lea los datos y te dé un resumen rápido:

   ```
   Read data/raw_ideas.csv and give me a quick overview:
   - How many items?
   - Who submitted them and from which departments?
   - What languages are represented?
   - Any obvious duplicates or themes?
   ```

### Parte 2: Planificar el marco de priorización

3. **Entra en Plan Mode** presionando `Shift+Tab` dos veces (o escribe `/plan`).

4. Pídele a Claude que diseñe el enfoque:

   ```
   I need to prioritize these 60 ideas for a roadmap presentation.
   Before doing anything, plan the approach:

   - What categories or themes emerge from the data?
   - Propose a scoring framework -- what dimensions should we score on?
     What scale? What weights?
   - How should we handle duplicates and near-duplicates?
   - What should the final deliverable look like?

   Don't execute yet. Just show me the plan.
   ```

5. **Refina el plan.** Aquí es donde tu criterio importa. Orienta a Claude hacia un marco que se ajuste a tu contexto:

   ```
   Good start. A few changes to the framework:
   - Use three scoring dimensions: Business Impact, User Impact, and Effort
   - Weight them: 40% Business Impact, 35% User Impact, 25% Effort
   - Score each dimension 1-5
   - For "Effort," a LOWER score means MORE effort (so high scores = easy wins)
   - Also tag each item with a category: Revenue, Retention, UX, Infrastructure, or Growth
   - Translate any non-English items to English during cleanup
   ```

6. Revisa el plan revisado de Claude. Haz un ajuste más si es necesario, luego confirma.

### Parte 3: Ejecutar la puntuación

7. **Sal de Plan Mode** y dile a Claude que ejecute el plan:

   ```
   Execute the plan now:
   1. Clean and translate all 60 items
   2. Merge duplicates (note which ones were merged)
   3. Categorize each item
   4. Score each item using the framework we designed
   5. Calculate weighted priority scores
   6. Sort by priority score, highest first
   Save the result as data/prioritized_ideas.csv
   ```

8. **Genera el resumen ejecutivo.** Pídele a Claude:

   ```
   Write an executive summary as prioritization_report.md:
   - Top 10 items with their scores and a one-line justification for each
   - Quick Wins: high impact + low effort (top-right quadrant)
   - Big Bets: high impact + high effort (top-left quadrant)
   - Deprioritized: items to defer or cut, with reasoning
   - Include a simple text-based 2x2 matrix (Impact vs Effort)
   - End with "Framework Notes" explaining how items were scored
   ```

### Parte 4: Iterar sobre el marco

9. Si no estás de acuerdo con cómo se puntuaron ciertos elementos, vuelve a Plan Mode para ajustar el marco — no cambies manualmente las puntuaciones individuales:

   ```
   /plan Some of the compliance and security items (like SSO and audit logs)
   are scoring too low. I think we need a fourth dimension: "Strategic
   Necessity" for items that are table-stakes for enterprise sales.
   How would adding this change the framework and the results?
   ```

10. Vuelve a ejecutar la puntuación con el marco actualizado y compara los resultados.

## Conexión con el Módulo 09 (Funcionalidades avanzadas)

| Funcionalidad avanzada | Cómo la usaste |
|-----------------|----------------|
| **Plan Mode** | Diseñaste el marco de puntuación antes de aplicarlo |
| **Refinamiento del plan** | Ajustaste dimensiones, pesos y categorías |
| **De plan a ejecución** | Aplicaste el marco de forma consistente a los 60 elementos |
| **Planificación iterativa** | Volviste a Plan Mode para ajustar cuando los resultados no se sentían bien |

## Criterios de éxito

- [ ] Usaste Plan Mode para diseñar el marco de priorización primero
- [ ] El plan se refinó al menos una vez antes de la ejecución
- [ ] Los 60 elementos están limpios, categorizados y puntuados
- [ ] Los duplicados fueron identificados y fusionados
- [ ] Un resumen ejecutivo identifica las prioridades principales, victorias rápidas y elementos a descartar
- [ ] El marco de puntuación está documentado para que otros puedan entenderlo y cuestionarlo

## Lo que aprendiste

**Plan Mode previene el error más común en la priorización: lanzarse a puntuar antes de que el marco esté bien definido.** Si tus dimensiones de puntuación o pesos están mal, entonces las 60 puntuaciones están mal. Cinco minutos diseñando el sistema en Plan Mode te ahorran una hora de retrabajo. Esto aplica a cualquier tarea con una fase de diseño: marcos de puntuación, estructuras de análisis, esquemas de informes, planes de migración.
