# Auditoría de Gaps de Conocimiento para Usuarios No Técnicos

> Auditoría del curso Claude Code How-To Guide v2.2.0 — Abril 2026

## Resumen Ejecutivo

Este documento identifica los **gaps de conocimiento** que enfrentaría una persona no técnica al usar Claude Code por primera vez, basado en un análisis exhaustivo de las 10 lecciones del curso, los 6 módulos fundacionales y todo el material complementario.

**Veredicto general**: El curso es sólido (8.5/10) para usuarios no técnicos, con excelente estructura y ejemplos por rol. Sin embargo, existen gaps concretos que pueden frustrar o bloquear a un principiante absoluto.

---

## Gaps Críticos (Bloqueantes)

Estos gaps pueden **impedir que el usuario avance** si no se resuelven primero.

### 1. Comprensión de Git y Control de Versiones

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | 00b-quickstart (mención superficial), Lección 08 (Checkpoints) |
| **El problema** | Git se menciona como complemento a checkpoints, pero no se enseña qué es un commit, un branch, ni cómo funciona el versionado |
| **Impacto** | El usuario no entiende qué hace `/commit`, no puede usar checkpoints con confianza, ni entiende las advertencias sobre "cambios no trackeados" |
| **Recomendación** | Añadir un módulo `00g-git-basics/` con: qué es un repositorio, commit, branch, y los 5 comandos esenciales (`git status`, `add`, `commit`, `log`, `diff`) |

### 2. Sintaxis JSON para Configuración

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 05 (MCP), Lección 06 (Hooks), Lección 07 (Plugins) |
| **El problema** | Hooks, MCP y plugins requieren editar archivos JSON (`settings.json`). No hay ningún primer de sintaxis JSON |
| **Impacto** | Un error de sintaxis (coma faltante, comilla sin cerrar) rompe toda la configuración sin un mensaje de error claro |
| **Recomendación** | Añadir una guía rápida de JSON: estructura básica, errores comunes, y cómo validar JSON antes de guardar |

### 3. Archivos Ocultos y Rutas del Sistema

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 02 (Memory), Lección 03 (Skills), toda la configuración |
| **El problema** | El curso usa extensivamente `.claude/`, `~/.claude/`, `.claude/rules/` — carpetas ocultas que no aparecen en el explorador de archivos por defecto |
| **Impacto** | El usuario no encuentra dónde puso sus archivos, no sabe que `~` significa su carpeta de usuario, ni entiende la diferencia entre `.claude/` (proyecto) y `~/.claude/` (global) |
| **Recomendación** | Explicar qué son archivos/carpetas ocultos, cómo verlos (VS Code y terminal), y un diagrama claro de dónde vive cada archivo |

---

## Gaps Moderados (Causan Confusión)

Estos gaps **no bloquean** pero generan frustración y errores frecuentes.

### 4. Conceptos de API y Autenticación

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 05 (MCP) — conexión a Slack, Notion, Google Calendar, etc. |
| **El problema** | MCP requiere tokens de API, OAuth, credenciales. El curso muestra `claude mcp add` pero no explica qué es un token ni cómo obtenerlo de cada servicio |
| **Impacto** | El usuario no puede conectar herramientas externas sin ayuda, y puede exponer credenciales sin saberlo |
| **Recomendación** | Guía paso a paso para obtener tokens de los 3-4 servicios más comunes, con capturas de pantalla y advertencias de seguridad |

### 5. Modelo Mental de "Eventos" (Event-Driven)

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 06 (Hooks) — 25 tipos de eventos |
| **El problema** | Los hooks usan terminología de programación: `SessionStart`, `PreToolUse`, `PostToolUse`. No se explica qué es un "evento" ni el concepto de "antes/después de una acción" |
| **Impacto** | El usuario memoriza eventos sin entender el patrón, no puede crear hooks propios ni depurar los existentes |
| **Recomendación** | Añadir analogía del mundo real: "Un hook es como una alarma: cuando ocurre X (el evento), se ejecuta Y (la acción). Como una alarma de incendios que activa los rociadores." |

### 6. Cuándo Usar Qué Feature

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Transversal a todo el curso |
| **El problema** | El curso enseña 10 features individualmente, pero no hay un árbol de decisión claro: ¿Cuándo uso un Skill vs. un Hook vs. un Subagent vs. Memory? |
| **Impacto** | Parálisis de elección. El usuario aprende todo pero no sabe qué aplicar a su caso concreto |
| **Recomendación** | Añadir un diagrama de decisión tipo flowchart: "¿Necesitas que se repita automáticamente? → Hook. ¿Necesitas que Claude recuerde siempre? → Memory. ¿Necesitas instrucciones especializadas? → Skill." |

### 7. Modos de Permisos y Seguridad

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 09 (Advanced Features) — 6 modos de permisos |
| **El problema** | 6 modos de permisos sin una guía clara de riesgo. `bypassPermissions` suena conveniente pero es peligroso. No hay advertencias claras sobre las consecuencias |
| **Impacto** | El usuario puede dar permisos excesivos sin entender el riesgo (borrar archivos, ejecutar comandos destructivos) |
| **Recomendación** | Tabla de riesgo con colores (verde/amarillo/rojo) y escenarios concretos de qué puede salir mal en cada modo |

---

## Gaps Menores (Optimizaciones)

Estos gaps son **friction points** que ralentizan pero no bloquean.

### 8. Sintaxis YAML en Frontmatter

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 03 (Skills), Lección 04 (Subagents) |
| **El problema** | Skills y subagents usan YAML en el encabezado (`name:`, `description:`, `model:`). No se explica la sintaxis |
| **Impacto** | Bajo — los usuarios generalmente copian y pegan plantillas. Pero cuando quieren modificar, la indentación YAML los confunde |

### 9. Gestión de la Ventana de Contexto

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | 00c-how-it-works (mención), Lección 08 (Checkpoints) |
| **El problema** | El concepto de "ventana de contexto" se explica, pero no hay señales claras de cuándo se está agotando ni qué hacer |
| **Impacto** | Claude empieza a "olvidar" cosas y el usuario no entiende por qué |

### 10. Patrones Glob y Regex

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 02 (Memory exclusions), Lección 06 (Hook matchers) |
| **El problema** | Se usan patrones como `*.md`, `**/*.ts` sin explicar la sintaxis |
| **Impacto** | Bajo — la mayoría de usuarios copian ejemplos existentes |

### 11. Diferencia entre Terminal, Shell y CLI

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | 00-terminal-basics, Lección 10 (CLI) |
| **El problema** | Se usan los tres términos intercambiablemente. Para un no técnico, son conceptos distintos que necesitan clarificación |
| **Impacto** | Confusión leve al buscar ayuda o leer documentación externa |

### 12. Python/Shell Scripting en Hooks

| Aspecto | Detalle |
|---------|---------|
| **Dónde aparece** | Lección 06 (Hooks) |
| **El problema** | Algunos ejemplos de hooks usan Python. Sin conocimiento de programación, estos ejemplos son inaccesibles |
| **Impacto** | Bajo — hay alternativas con shell scripts simples y hooks de tipo "prompt" que no requieren código |

---

## Matriz de Impacto

```
                    ALTA FRECUENCIA          BAJA FRECUENCIA
                 ┌─────────────────────┬─────────────────────┐
  ALTO IMPACTO   │ 1. Git basics       │ 4. API/Auth         │
                 │ 2. JSON syntax      │ 5. Eventos          │
                 │ 3. Archivos ocultos │ 7. Permisos         │
                 ├─────────────────────┼─────────────────────┤
  BAJO IMPACTO   │ 6. Qué feature usar │ 8. YAML             │
                 │ 9. Contexto window  │ 10. Glob/Regex      │
                 │ 11. Terminal vs CLI │ 12. Python en hooks  │
                 └─────────────────────┴─────────────────────┘
```

---

## Plan de Acción Recomendado

### Prioridad 1 — Resolver antes del primer uso
- [x] Crear módulo `00g-git-basics/` con los 5 comandos esenciales
- [x] Crear guía de JSON como extra en `06-hooks/EXTRA-JSON-ESSENTIALS.md`
- [x] Crear guía de archivos ocultos como extra en `02-memory/EXTRA-HIDDEN-FILES.md`

### Prioridad 2 — Resolver antes de lecciones intermedias
- [ ] Crear guía de obtención de tokens API para MCP (`docs/api-tokens-guide.md`)
- [ ] Añadir analogías de eventos en Lección 06
- [ ] Crear flowchart de decisión "¿Qué feature necesito?" en `docs/`
- [ ] Añadir tabla de riesgo de permisos en Lección 09

### Prioridad 3 — Mejoras incrementales
- [ ] Mini-primer de YAML en Lección 03
- [ ] Señales de agotamiento de contexto en 00c-how-it-works
- [ ] Glosario de términos (terminal, shell, CLI, API, token, etc.)

---

## Fortalezas del Curso (Lo que ya hace bien)

1. **Módulos fundacionales dedicados** — 00-terminal-basics existe y es efectivo
2. **Ejemplos por rol** — PM, diseñador, ventas, marketing tienen workflows propios
3. **Progresión clara** — 3 niveles (principiante → intermedio → avanzado)
4. **Plantillas copy-paste** — 100+ archivos listos para usar
5. **Auto-evaluación integrada** — `/self-assessment` y `/lesson-quiz`
6. **Estimaciones de tiempo** — Cada lección indica duración esperada
7. **Ejercicios prácticos** — Cada lección incluye práctica hands-on
8. **Diagramas visuales** — Mermaid charts para conceptos complejos
9. **Enfoque no-developer explícito** — El curso está diseñado para no técnicos
10. **Mantenimiento activo** — Sincronizado con versiones de Claude Code

---

*Auditoría realizada el 3 de abril de 2026*
*Basada en el análisis de 100+ archivos del repositorio claude-learning*
