# Ejercicio 7: De notas sueltas a un spec estructurado

**Tiempo:** 30 minutos | **Nivel:** Avanzado
**Módulo:** [09-advanced-features](../../09-advanced-features/) -- Plan mode
**Habilidad:** Usar Plan Mode para estructurar un documento complejo antes de escribirlo

## Objetivo

Aprenderás a usar **Plan Mode** en Claude Code para convertir notas desordenadas y sin estructura en un spec de producto pulido. Plan Mode te permite colaborar con Claude en el *enfoque* antes de que empiece a escribir — así obtienes la estructura correcta, no solo una salida rápida.

Esta es una habilidad fundamental para PMs, disenadores y cualquier persona que necesite producir documentos estructurados a partir de insumos desordenados.

## Escenario

Eres Product Manager en **Orbit**, una empresa ficticia de gestión de tareas. Tu equipo acaba de hacer una sesión de brainstorming para una nueva funcionalidad llamada **"Focus Blocks"** — una función de bloques de tiempo que permite a los usuarios programar sesiones de trabajo profundo y silenciar notificaciones automáticamente. Tomaste notas rápidas durante la reunión y ahora necesitas convertirlas en un spec formal que ingeniería, diseno y liderazgo puedan revisar.

Tus notas están en el archivo `notes/brainstorm-notes.txt`.

## Lo que aprenderás

- Cómo activar Plan Mode y por qué es importante para documentos complejos
- Cómo revisar y refinar el plan de Claude antes de que empiece a escribir
- Cómo pasar del plan a la ejecución de forma controlada
- Cuándo Plan Mode es más efectivo que lanzarte directo a un prompt

## Instrucciones paso a paso

### Parte 1: Revisar las notas

1. Abre Claude Code en la carpeta de este ejercicio.
2. Revisa el archivo `notes/brainstorm-notes.txt` para entender con qué estás trabajando. Son notas desordenadas y del mundo real — frases incompletas, preguntas e ideas a medio cocinar.

### Parte 2: Activar Plan Mode y crear el plan

3. **Entra en Plan Mode** presionando `Shift+Tab` dos veces (o escribe `/plan`). Verás que el indicador de modo cambia.

4. Dale a Claude este prompt:

   ```
   I have rough brainstorm notes in notes/brainstorm-notes.txt for a new
   feature called "Focus Blocks" in our task management app. I need to
   turn these into a structured product spec.

   Before writing anything:
   - Read the notes carefully
   - Propose a document structure (sections, order, what to cover)
   - Identify what is clear vs. what is ambiguous or missing
   - Flag questions I should answer before you write the full spec
   ```

5. **Revisa el plan de Claude.** Este es el momento clave. Claude propondrá una estructura y señalará vacíos. Léelo con atención y da retroalimentación:

   ```
   Good structure. A few adjustments:
   - Add a "User Stories" section with 3-4 stories for different personas
   - Add an "Open Questions" section at the end instead of inline
   - The spec audience is engineering AND design, so include both
     technical considerations and UX notes
   - Skip the competitive analysis section, we will do that separately
   ```

6. Claude revisará el plan. Revísalo una vez más. Cuando estés conforme, avanza.

### Parte 3: Ejecutar el plan

7. **Sal de Plan Mode** presionando `Shift+Tab` dos veces (o escribe `/plan` de nuevo para alternarlo). Luego dile a Claude:

   ```
   The plan looks good. Now write the full spec following your plan.
   Save it as output/focus-blocks-spec.md
   ```

8. **Itera sobre el resultado.** Revisa el spec y pídele a Claude que mejore secciones específicas:

   ```
   The "Success Metrics" section is too vague. Make the metrics more
   specific and measurable. For example, instead of "increased
   productivity" give me a concrete KPI we could track.
   ```

### Parte 4: Reflexionar

9. Piensa en cómo fue este proceso comparado con simplemente pedirle a Claude "escríbeme un spec a partir de estas notas" sin planificar. ¿Qué fue diferente?

## Conexión con el Módulo 09 (Funcionalidades avanzadas)

| Funcionalidad avanzada | Cómo la usaste |
|-----------------|----------------|
| **Plan Mode** (`/plan` o Shift+Tab+Tab) | Estructuraste el spec antes de escribirlo |
| **Refinamiento del plan** | Ajustaste el plan basándote en tu criterio |
| **Flujo de plan a ejecución** | Pasaste del plan aprobado al resultado final |

## Criterios de éxito

- [ ] Activaste Plan Mode y viste a Claude proponer una estructura de documento
- [ ] Refinaste el plan al menos una vez antes de pedirle a Claude que escribiera
- [ ] Se generó un spec estructurado a partir de las notas
- [ ] El spec incluye secciones como User Stories, Success Metrics y Open Questions
- [ ] Iteraste sobre al menos una sección después del primer borrador

## Lo que aprendiste

**Plan Mode es para cualquier tarea donde acertar con la estructura importa más que empezar rápido.** Specs, propuestas, informes, análisis — planifica primero, ejecuta después. Cinco minutos definiendo el enfoque te ahorran recibir un documento pulido con la estructura equivocada. Esto es especialmente valioso cuando tu insumo es desordenado o incompleto.
