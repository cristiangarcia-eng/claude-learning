# Funcionalidades Avanzadas

Esta leccion cubre las funcionalidades avanzadas de Claude Code: planificacion de tareas, control de autonomia, entrada de voz, acceso remoto y gestion de sesiones.

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

Le dice a Claude que dedique mas tiempo razonando antes de responder. Produce respuestas mas exhaustivas para preguntas complejas.

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

| Modo | Que puede hacer Claude | Mejor para |
|------|----------------------|-----------|
| `default` | Lee libremente; pregunta antes de otras acciones | Uso general |
| `acceptEdits` | Lee y edita libremente; pregunta antes de comandos | Trabajo enfocado |
| `plan` | Solo lectura; crea planes para revision | Investigacion |
| `auto` | Actua libremente con verificaciones de seguridad en segundo plano | Trabajo sin intervencion |

**Auto Mode** usa un clasificador de seguridad en segundo plano. Las acciones seguras (leer, editar archivos) proceden automaticamente; las riesgosas (enviar datos externamente, eliminaciones masivas) requieren tu aprobacion. Requiere un plan Team y Sonnet 4.6 u Opus 4.6.

---

## Dictado por voz

Habla tus solicitudes en lugar de escribirlas. Util para lluvia de ideas e instrucciones mas largas.

```
/voice
```

Soporta push-to-talk con 20 idiomas. Configura la tecla de activacion via `/keybindings`.

---

## Control remoto

Continua una sesion de Claude Code desde tu telefono, tablet o cualquier navegador. Tu sesion permanece en tu computadora.

```bash
claude remote-control
```

Conectate via la URL impresa, un codigo QR (presiona `spacebar`), o encuentra tu sesion en claude.ai/code.

**Casos de uso:** Revisar informes desde una reunion, continuar tareas desde tu telefono, monitorear progreso remotamente.

---

## Sesiones web y aplicacion de escritorio

**Sesiones web:** Ejecuta Claude Code en tu navegador en claude.ai/code, o inicia una desde la terminal con `claude --remote "your task"`. Muevete entre web y terminal con `claude --teleport`.

**Aplicacion de escritorio:** Aplicacion independiente para macOS y Windows con vista visual de diff, sesiones paralelas, tareas programadas y conectores para Slack, Linear, Notion, Asana y Calendar. Transfiere una sesion de terminal con `/desktop`.

---

## Gestion de sesiones

Organiza tareas en conversaciones con nombre a las que puedes volver despues.

| Comando | Que hace |
|---------|---------|
| `claude -c` | Continuar la conversacion mas reciente |
| `claude -r "name"` | Reanudar una sesion con nombre |
| `claude -n "name"` | Iniciar una sesion con un nombre |
| `/rename name` | Renombrar la sesion actual |
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

| Atajo | Que hace |
|-------|---------|
| `Shift+Tab` | Cambiar modos de permisos |
| `Option+T` / `Alt+T` | Alternar extended thinking |
| `Option+P` / `Alt+P` | Cambiar modelo de IA |
| `Ctrl+C` | Cancelar operacion actual |
| `Ctrl+R` | Buscar historial de comandos |
| `Ctrl+T` | Alternar lista de tareas |
| `Esc+Esc` | Deshacer ultima accion |

### Entrada multi-linea

Comienza con `\` y termina con `\end` para solicitudes mas largas.

---

## Integracion con Chrome

Conecta Claude Code a tu navegador Chrome con `claude --chrome` o `/chrome`. Claude puede leer paginas web, extraer datos e interactuar con aplicaciones autenticadas (Gmail, Google Docs, Notion). Solo funciona en sitios que permitas explicitamente.

---

## Lista de tareas y sugerencias de prompts

**Lista de tareas:** Presiona `Ctrl+T` para una lista de verificacion persistente que sobrevive incluso cuando el historial de conversacion se recorta.

**Sugerencias de prompts:** Sugerencias en gris aparecen debajo de tu entrada. Presiona `Tab` para aceptar, o sigue escribiendo para ignorar.

---

## Ejercicios practicos

> **[Ejercicio 7: De Capturas de Pantalla a Especificacion](../11-exercises/exercise-07-screenshots-to-spec/)** — Usa el modo plan para estructurar una especificacion a partir de capturas de pantalla, luego ejecuta. Practica el modo plan, entrada multimodal y extended thinking.
>
> **Tiempo:** 30 min | **Datos:** Tus propias capturas de pantalla (arrastra PNGs a la carpeta)

> **[Ejercicio 8: Priorizar del Caos](../11-exercises/exercise-08-prioritize-from-chaos/)** — Disena un framework de priorizacion en modo plan, luego evalua 60 ideas. Practica ciclos de plan/ejecucion y refinamiento de planes.
>
> **Tiempo:** 40 min | **Datos:** CSV de 60 filas con ideas no estructuradas de 6 departamentos

## Recursos adicionales

- [Documentacion de funcionalidades avanzadas](https://code.claude.com/docs/en)
- [Inicio rapido de la aplicacion de escritorio](https://code.claude.com/docs/en/desktop-quickstart)

---

*Parte de la serie de guias [Claude How To](../)*
