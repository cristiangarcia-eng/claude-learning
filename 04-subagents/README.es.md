# Subagentes
**La capa de delegación**

Los Skills automatizan *cómo* Claude hace una tarea. MCP le da a Claude acceso a datos externos. Pero ¿qué pasa cuando una tarea es demasiado grande o compleja para una sola conversación? Le pides a Claude que investigue un competidor, y el análisis llena tu chat de hallazgos intermedios. O necesitas trabajo profundo mientras tú sigues avanzando en otra cosa.

> **Los Skills son recetas que Claude sigue. Los Subagentes son especialistas que Claude contrata.**

Ya conoces los Skills — instrucciones que Claude sigue directamente. Los Subagentes son diferentes: en vez de seguir instrucciones él mismo, Claude **lanza un asistente separado** para manejar una tarea específica.

La distinción clave:

La distinción clave:

| | Skill | Subagente |
|---|---|---|
| **Qué es** | Instrucciones que Claude sigue | Un asistente separado al que Claude delega |
| **Analogía** | Le das una receta a un colega | Le delegas una tarea a un especialista |
| **Contexto** | Trabaja en tu conversación | Trabaja en su propio espacio separado |
| **Ideal para** | Formato, plantillas, output consistente | Investigación, análisis, tareas grandes que requieren foco |
| **Ejemplo** | "Formatea estas notas como informe" | "Investiga todo sobre la estrategia DTC de Nike y vuelve con un briefing" |

### ¿Cuándo usar cuál?

**Usa un Skill cuando:**
- Quieres que Claude siga un formato o plantilla específica
- La tarea es directa y ocurre en la conversación actual
- Quieres output consistente cada vez (notas de reunión, voz de marca, etc.)

**Usa un Subagente cuando:**
- La tarea requiere investigación o análisis profundo
- Quieres que se haga en segundo plano mientras sigues trabajando
- La tarea es lo suficientemente compleja como para desordenar tu conversación principal
- Quieres una perspectiva de especialista (analista de competencia, revisor de contenido, etc.)

Piénsalo así: un Skill es como una receta que Claude sigue. Un Subagente es como llamar a un especialista que se va, hace el trabajo, y vuelve con un informe.

## Cómo funcionan los subagentes

1. Le pides a Claude algo complejo
2. Claude delega la tarea a un subagente
3. El subagente trabaja en su propio espacio — no desordenará tu conversación
4. El subagente vuelve con sus hallazgos
5. Claude te presenta los resultados

No necesitas gestionar esto. Claude maneja la delegación automáticamente.

## Pruébalo: crea un analista de competencia

Vamos a crear un subagente para tu proyecto de Nike. En Claude Code, pide:

```
Crea un subagente llamado "competitor-analyst" que analice
competidores a partir de los documentos disponibles. Debe perfilar
cada competidor (qué hacen, fortalezas, debilidades, precios),
mapear el panorama, y recomendar ángulos de posicionamiento.
Guárdalo en .claude/agents/
```

Claude creará el archivo por ti. Ahora prueba usarlo:

> `Analiza Adidas y New Balance como competidores basándote en nuestros archivos. Dame una tabla comparativa y recomendaciones de posicionamiento.`

Claude delegará esto a tu subagente competitor-analyst, que trabajará los archivos metódicamente y volverá con resultados estructurados.

### Ejecútalo en segundo plano

Para tareas más largas, puedes enviar el subagente a trabajar en segundo plano mientras sigues chateando con Claude. Presiona **Ctrl+B** mientras está trabajando, y Claude te notificará cuando termine.

## Ideas prácticas de subagentes

| Subagente | Qué hace | Cuándo usarlo |
|----------|----------|---------------|
| **research-analyst** | Investigación profunda sobre cualquier tema, produce informes estructurados | "Investiga tendencias de trabajo remoto para nuestra planificación de Q3" |
| **content-reviewer** | Revisa documentos por claridad, tono y precisión | "Revisa este post del blog antes de publicar" |
| **sales-proposal** | Estructura propuestas con enfoque en el cliente | "Ayúdame a escribir una propuesta para la cuenta de Nike" |
| **weekly-reporter** | Resume la actividad del proyecto en un informe de estado | "¿Qué pasó en este proyecto esta semana?" |

## Crear subagentes

Hay tres formas:

1. **Pídele a Claude** (la más fácil): "Crea un subagente llamado research-analyst que..."
2. **Usa `/agents`**: Menú interactivo para crear, ver, editar y eliminar subagentes
3. **Crea el archivo manualmente**: Agrega un archivo `.md` a `.claude/agents/`

### Dónde viven

| Ubicación | Quién puede usarlo |
|----------|---------------|
| `.claude/agents/` en tu proyecto | Todo tu equipo |
| `~/.claude/agents/` en tu carpeta personal | Solo tú, en todos los proyectos |

## Consejos

- **Empieza con un subagente** y ve cómo funciona antes de crear más
- **Dale a cada agente un solo foco** — un investigador, un revisor, un redactor de propuestas. No uno que haga todo.
- **Usa el modo de segundo plano** para tareas pesadas y sigue trabajando
- **Skills para formato, subagentes para pensar** — si necesitas aplicar una plantilla, usa un Skill. Si necesitas un análisis, usa un Subagente.

