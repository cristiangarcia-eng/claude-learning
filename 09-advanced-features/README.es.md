# Funcionalidades Avanzadas

Esta lección cubre las funcionalidades avanzadas de Claude Code: planificacion de tareas, control de autonomia, entrada de voz, acceso remoto y gestion de sesiones.

---

## Modo de planificacion

El modo de planificacion le dice a Claude que cree un plan paso a paso para tu revision antes de hacer cualquier trabajo.

**Cuando usarlo:** Desglosar proyectos grandes, mapear estrategias de contenido, organizar analisis complejos.

**Como activarlo:**
```
/plan Create a competitive analysis for our Q3 product launch
```

O presiona `Shift+Tab` para cambiar al modo Plan. Presiona `Ctrl+G` para editar el plan en tu editor de texto.

### Ejemplo

```
You: /plan Create a go-to-market plan for our new feature

Claude:
## Phase 1: Research
1. Analyze competitor positioning
2. Review customer feedback data

## Phase 2: Messaging
3. Draft value propositions
4. Create positioning statements

## Phase 3: Materials
5. Outline sales deck content
6. Draft email announcement

Ready to proceed? (yes / no / modify plan)
```

---

## Extended Thinking

Le dice a Claude que dedique más tiempo razonando antes de responder. Produce respuestas más exhaustivas para preguntas complejas.

**Como activarlo:** `Option+T` (Mac) o `Alt+T` (Windows/Linux), o escribe `/effort high`.

| Nivel de esfuerzo | Mejor para |
|-------------------|-----------|
| `low` | Preguntas rapidas, busquedas simples |
| `medium` | Analisis y resumenes estandar |
| `high` | Analisis complejos, decisiones estrategicas |
| `max` | Evaluacion profunda multi-factor (solo Opus) |

---

## Auto Mode y modos de permisos

Los modos de permisos controlan cuanta libertad tiene Claude. Presiona `Shift+Tab` para alternar entre ellos.

| Modo | Qué puede hacer Claude | Mejor para |
|------|----------------------|-----------|
| `default` | Lee libremente; pregunta antes de otras acciones | Uso general |
| `acceptEdits` | Lee y edita libremente; pregunta antes de comandos | Trabajo enfocado |
| `plan` | Solo lectura; crea planes para revision | Investigacion |
| `auto` | Actua libremente con verificaciones de seguridad en segundo plano | Trabajo sin intervencion |

**Auto Mode** usa un clasificador de seguridad en segundo plano. Las acciones seguras (leer, editar archivos) proceden automaticamente; las riesgosas (enviar datos externamente, eliminaciones masivas) requieren tu aprobacion. Requiere un plan Team y Sonnet 4.6 u Opus 4.6.

---

## Dictado por voz

Habla tus solicitudes en lugar de escribirlas. Util para lluvia de ideas e instrucciones más largas.

```
/voice
```

Soporta push-to-talk con 20 idiomas. Configura la tecla de activacion via `/keybindings`.

---

## Control remoto

Continua una sesión de Claude Code desde tu telefono, tablet o cualquier navegador. Tu sesión permanece en tu computadora.

```bash
claude remote-control
```

Conectate via la URL impresa, un código QR (presiona `spacebar`), o encuentra tu sesión en claude.ai/code.

**Casos de uso:** Revisar informes desde una reunion, continuar tareas desde tu telefono, monitorear progreso remotamente.

---

## Sesiones web y aplicacion de escritorio

**Sesiones web:** Ejecuta Claude Code en tu navegador en claude.ai/code, o inicia una desde la terminal con `claude --remote "your task"`. Muevete entre web y terminal con `claude --teleport`.

**Aplicacion de escritorio:** Aplicacion independiente para macOS y Windows con vista visual de diff, sesiones paralelas, tareas programadas y conectores para Slack, Linear, Notion, Asana y Calendar. Transfiere una sesión de terminal con `/desktop`.

---

## Gestion de sesiones

Organiza tareas en conversaciones con nombre a las que puedes volver después.

| Comando | Qué hace |
|---------|---------|
| `claude -c` | Continuar la conversación más reciente |
| `claude -r "name"` | Reanudar una sesión con nombre |
| `claude -n "name"` | Iniciar una sesión con un nombre |
| `/rename name` | Renombrar la sesión actual |
| `/resume` | Explorar sesiones pasadas |
| `/fork` | Bifurcar para probar un enfoque diferente |

```bash
# Iniciar una sesion para un informe
claude -n "marketing-report"

# Volver despues
claude -r "marketing-report" "Add the competitive analysis section"

# Probar una direccion diferente sin perder el trabajo original
claude --resume marketing-report --fork-session "try shorter format"
```

---

## Funcionalidades interactivas

### Atajos de teclado

| Atajo | Qué hace |
|-------|---------|
| `Shift+Tab` | Cambiar modos de permisos |
| `Option+T` / `Alt+T` | Alternar extended thinking |
| `Option+P` / `Alt+P` | Cambiar modelo de IA |
| `Ctrl+C` | Cancelar operación actual |
| `Ctrl+R` | Buscar historial de comandos |
| `Ctrl+T` | Alternar lista de tareas |
| `Esc+Esc` | Deshacer última acción |

### Entrada multi-línea

Comienza con `\` y termina con `\end` para solicitudes más largas.

---

## Integración con Chrome

Conecta Claude Code a tu navegador Chrome con `claude --chrome` o `/chrome`. Claude puede leer paginas web, extraer datos e interactuar con aplicaciones autenticadas (Gmail, Google Docs, Notion). Solo funciona en sitios que permitas explicitamente.

---

## Lista de tareas y sugerencias de prompts

**Lista de tareas:** Presiona `Ctrl+T` para una lista de verificación persistente que sobrevive incluso cuando el historial de conversación se recorta.

**Sugerencias de prompts:** Sugerencias en gris aparecen debajo de tu entrada. Presiona `Tab` para aceptar, o sigue escribiendo para ignorar.

---

## Ejercicios prácticos

> **[Ejercicio 7: De Capturas de Pantalla a Especificacion](../11-exercises/07-screenshots-to-spec/)** — Usa el modo plan para estructurar una especificacion a partir de capturas de pantalla, luego ejecuta. Práctica el modo plan, entrada multimodal y extended thinking.
>
> **Tiempo:** 30 min | **Datos:** Tus propias capturas de pantalla (arrastra PNGs a la carpeta)

> **[Ejercicio 8: Priorizar del Caos](../11-exercises/08-prioritize-from-chaos/)** — Disena un framework de priorizacion en modo plan, luego evalua 60 ideas. Práctica ciclos de plan/ejecucion y refinamiento de planes.
>
> **Tiempo:** 40 min | **Datos:** CSV de 60 filas con ideas no estructuradas de 6 departamentos

## Recursos adicionales

- [Documentación de funcionalidades avanzadas](https://code.claude.com/docs/en)
- [Inicio rápido de la aplicacion de escritorio](https://code.claude.com/docs/en/desktop-quickstart)

---

*Parte de la serie de guias [Claude How To](../)*
