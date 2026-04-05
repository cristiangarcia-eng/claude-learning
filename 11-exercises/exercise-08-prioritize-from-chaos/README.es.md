# Ejercicio 8: Priorizar desde el caos

**Tiempo:** 45 minutos | **Nivel:** Avanzado
**Módulo:** [09-advanced-features](../../09-advanced-features/) -- Plan mode para flujos de trabajo complejos
**Habilidad:** Usar Plan Mode para diseñar, fallar, rediseñar y tener éxito — el ciclo de iteración

## Objetivo

El Ejercicio 7 te enseñó a usar Plan Mode para estructurar un documento antes de escribirlo. Este ejercicio enseña el **verdadero poder del Plan Mode: iterar cuando tu primer enfoque falla.**

Diseñarás un marco de puntuación, lo aplicarás, descubrirás que produce resultados malos, volverás a Plan Mode para arreglar el marco y lo re-aplicarás. Así funciona la priorización en el mundo real — el primer marco nunca es el correcto.

Esta es una habilidad que PMs, estrategas y líderes de equipo usan constantemente: convertir un backlog desordenado en una lista de prioridades clara y defendible.

## Escenario

Eres Product Manager en **Orbit Task Manager**, una herramienta ficticia de gestión de proyectos para equipos medianos. Durante el último mes, recopilaste feedback de toda la empresa — ventas, ingeniería, customer success, marketing y finanzas. El resultado: 60 ideas en bruto en una hoja de cálculo. Algunas son solicitudes detalladas, otras son deseos de una línea, y algunas están en español (Orbit tiene un equipo en Madrid). Ninguna está puntuada, categorizada ni priorizada.

Tu VP de Producto te pidió presentar una recomendación de roadmap priorizado para el viernes. Necesitas pasar del caos a una lista clara y defendible.

Los datos en bruto están en `data/raw_ideas.csv`.

## Lo que aprenderás

- Cómo el verdadero valor de Plan Mode aparece en el **segundo paso**, no en el primero
- Cómo detectar un marco defectuoso por sus resultados (no por el marco en sí)
- Cómo ajustar el diseño de un plan basándote en evidencia, no en intuición
- Por qué iterar sobre el sistema es mejor que corregir puntuaciones individuales a mano

## Preparación

Este ejercicio usa archivos de datos incluidos en el repositorio del curso. Si aún no lo has hecho, clona el repo y navega a este ejercicio:

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git
cd claude-learning/11-exercises/exercise-08-prioritize-from-chaos
```

Si ya clonaste el repo, solo navega a la carpeta del ejercicio:

```bash
cd claude-learning/11-exercises/exercise-08-prioritize-from-chaos
```

## Instrucciones paso a paso

### Parte 1: Explorar los datos (5 minutos)

1. Abre Claude Code en la carpeta de este ejercicio.
2. Pídele a Claude que lea los datos y te dé un resumen rápido:

   ```
   Read data/raw_ideas.csv and give me a quick overview:
   - How many items?
   - Who submitted them and from which departments?
   - What languages are represented?
   - Any obvious duplicates or themes?
   ```

Presta atención a los temas. Verás una mezcla: solicitudes de funcionalidades, mejoras de rendimiento, requisitos de cumplimiento (SSO, registros de auditoría, GDPR), mejoras de UX e integraciones. **Recuerda esto — importa más adelante.**

### Parte 2: Diseñar framework v1 (10 minutos)

3. **Entra en Plan Mode** presionando `Shift+Tab` dos veces (o escribe `/plan`).

4. Pídele a Claude que diseñe un enfoque simple de puntuación:

   ```
   I need to prioritize these 60 ideas for a roadmap presentation.
   Before doing anything, plan the approach:

   - What categories or themes emerge from the data?
   - Propose a scoring framework with three dimensions:
     Business Impact, User Impact, and Effort
   - Weight them: 40% Business Impact, 35% User Impact, 25% Effort
   - Score each dimension 1-5
   - For "Effort," a LOWER score means MORE effort (so high scores = easy wins)
   - Also tag each item with a category: Revenue, Retention, UX, Infrastructure, or Growth
   - Translate any non-English items to English during cleanup

   Don't execute yet. Just show me the plan.
   ```

5. Revisa el plan brevemente. Debería verse razonable. **Apruébalo y sal de Plan Mode.**

### Parte 3: Ejecutar v1 y encontrar el fallo (10 minutos)

6. Dile a Claude que aplique el marco:

   ```
   Execute the plan now:
   1. Clean and translate all 60 items
   2. Merge duplicates (note which ones were merged)
   3. Categorize each item
   4. Score each item using the framework we designed
   5. Calculate weighted priority scores
   6. Sort by priority score, highest first
   Save the result as data/prioritized_v1.csv
   ```

7. **Ahora mira los resultados de forma crítica.** Este es el momento clave. Pídele a Claude:

   ```
   Show me the bottom 15 items in prioritized_v1.csv (lowest priority).
   Also show me where SSO, audit logs, GDPR compliance, and any
   security-related items landed. What are their scores?
   ```

   **Deberías notar el problema:** los elementos de cumplimiento y seguridad (SSO, registros de auditoría, GDPR) puntuaron bajo. Tienen bajo "User Impact" (solo unos pocos prospects enterprise los necesitan) y bajo "Business Impact" en el sentido tradicional. Pero cualquier PM sabe: sin SSO ni registros de auditoría, no puedes vender a empresas. Son requisitos mínimos, no nice-to-haves.

   **Este es el fallo.** El marco no tiene forma de expresar "este elemento es obligatorio para un segmento de mercado." Tres dimensiones no son suficientes.

### Parte 4: Rediseñar el marco en Plan Mode (10 minutos)

8. **Vuelve a Plan Mode.** Este es el paso más importante:

   ```
   /plan The framework has a blind spot. Compliance and security items
   (SSO, audit logs, GDPR) scored near the bottom, but they are
   table-stakes for enterprise sales — without them, we lose deals.

   The three dimensions (Business Impact, User Impact, Effort) can't
   capture "strategic necessity" — items that don't excite users but
   block revenue.

   Redesign the framework:
   - Add a 4th dimension: "Strategic Necessity" (1 = nice-to-have,
     5 = blocks a market segment or regulatory requirement)
   - Re-weight: Business Impact 30%, User Impact 25%, Effort 20%,
     Strategic Necessity 25%
   - Define clear criteria for what makes a 4 or 5 on Strategic
     Necessity (enterprise blockers, regulatory, platform risk)
   - Show how this changes the scoring for SSO, audit logs, and GDPR
   ```

9. Revisa el marco revisado. ¿Tiene sentido? Ajusta si es necesario, luego aprueba.

### Parte 5: Ejecutar v2 y comparar (10 minutos)

10. Sal de Plan Mode y re-puntúa todo:

    ```
    Re-score all items using the updated 4-dimension framework.
    Save as data/prioritized_v2.csv

    Then write a comparison report as prioritization_report.md:
    - Top 10 items in v2 with scores and one-line justification each
    - Items that moved UP significantly from v1 to v2 (and why)
    - Items that moved DOWN significantly (and why)
    - Quick Wins: high impact + low effort
    - Big Bets: high impact + high effort
    - Deprioritized: items to defer, with reasoning
    - Include a text-based 2x2 matrix (Impact vs Effort)
    - End with "Framework Notes" explaining v1 vs v2 and why you changed
    ```

11. **Comprueba el resultado.** SSO, registros de auditoría y GDPR deberían estar ahora en el tercio superior. El ranking debería sentirse más defendible. Si no es así, itera una vez más — ese es todo el punto.

## Conexión con el Módulo 09 (Funcionalidades avanzadas)

| Funcionalidad avanzada | Cómo la usaste |
|-----------------|----------------|
| **Plan Mode (v1)** | Diseñaste el marco de puntuación inicial |
| **Brecha de ejecución** | Descubriste que el marco fallaba con elementos de cumplimiento |
| **Plan Mode (v2)** | Rediseñaste con 4ª dimensión basándote en evidencia |
| **Comparación de planes** | Comparaste resultados v1 vs v2 para validar la mejora |
| **Planificación iterativa** | El poder está en el ciclo, no en el primer intento |

## Criterios de éxito

- [ ] Usaste Plan Mode para diseñar el framework v1
- [ ] Ejecutaste v1 y `data/prioritized_v1.csv` existe
- [ ] Identificaste el fallo específico: elementos de cumplimiento/seguridad puntuaron demasiado bajo
- [ ] Volviste a Plan Mode para rediseñar con la 4ª dimensión (Necesidad Estratégica)
- [ ] Ejecutaste v2 y `data/prioritized_v2.csv` existe
- [ ] `prioritization_report.md` compara v1 vs v2 y documenta por qué cambió el marco
- [ ] El marco de puntuación está documentado para que otros puedan entenderlo y cuestionarlo

## Lo que aprendiste

**El verdadero poder del Plan Mode no está en el primer plan — está en el segundo.** Cualquiera puede diseñar un marco que se vea razonable en papel. Lo difícil es descubrir que falla cuando se aplica a datos reales, diagnosticar *por qué* falla (no solo que "no se siente bien"), y rediseñar basándote en evidencia. El punto ciego del cumplimiento es una trampa real que atrapa a equipos todo el tiempo: los marcos de puntuación centrados en el usuario sistemáticamente infravaloran elementos que los usuarios nunca piden pero que habilitan segmentos de mercado enteros. Este ejercicio te entrenó para usar Plan Mode como un ciclo de diseño, no como un planificador de un solo uso.
