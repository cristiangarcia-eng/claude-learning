# Funcionalidades Avanzadas

Esta lección cubre las funcionalidades avanzadas de Claude Code: planificación de tareas, control de autonomía, entrada de voz, acceso remoto y gestión de sesiones.

---

## Modo de planificación

El modo de planificación le dice a Claude que cree un plan paso a paso para tu revisión antes de hacer cualquier trabajo.

**Cuando usarlo:** Desglosar proyectos grandes, mapear estrategias de contenido, organizar análisis complejos.

**Cómo activarlo:**
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

**Cómo activarlo:** `Option+T` (Mac) o `Alt+T` (Windows/Linux), o escribe `/effort high`.

| Nivel de esfuerzo | Mejor para |
|-------------------|-----------|
| `low` | Preguntas rápidas, búsquedas simples |
| `medium` | Analisis y resúmenes estándar |
| `high` | Analisis complejos, decisiones estratégicas |
| `max` | Evaluación profunda multi-factor (solo Opus 4.6) |

> **Recomendación:** Claude tiende a ponerte en `medium` por defecto para ahorrar tokens. Recomendamos mantener siempre el nivel en `max`. Para que persista, añade `export CLAUDE_CODE_EFFORT_LEVEL=max` a tu `.zshrc`/`.bashrc`, o pon `"effortLevel": "max"` en tu archivo de settings. El comando `/effort max` funciona por sesión pero no persiste entre sesiones (a diferencia de `low`, `medium` y `high` que sí persisten). Nota: `max` solo está disponible en Opus 4.6.

---

## Auto Mode y modos de permisos

Los modos de permisos controlan cuánta libertad tiene Claude. Presiona `Shift+Tab` para alternar entre ellos.

| Modo | Qué puede hacer Claude | Mejor para |
|------|----------------------|-----------|
| `default` | Lee libremente; pregunta antes de otras acciones | Uso general |
| `acceptEdits` | Lee y edita libremente; pregunta antes de comandos | Trabajo enfocado |
| `plan` | Solo lectura; crea planes para revisión | Investigación |
| `auto` | Actua libremente con verificaciones de seguridad en segundo plano | Trabajo sin intervención |

**Auto Mode** usa un clasificador de seguridad en segundo plano. Las acciones seguras (leer, editar archivos) proceden automáticamente; las riesgosas (enviar datos externamente, eliminaciones masivas) requieren tu aprobacion. Requiere un plan Team y Sonnet 4.6 u Opus 4.6.

### YOLO Mode: `--dangerously-skip-permissions`

Existe un modo más allá de Auto Mode: el infame **YOLO mode**. Se activa lanzando Claude Code así:

```bash
claude --dangerously-skip-permissions
```

Esto desactiva **todas** las confirmaciones de permisos. Claude puede leer, escribir, ejecutar comandos y borrar archivos sin preguntarte nada. Cero interrupciones, cero red de seguridad.

**¿Cuándo tiene sentido?**
- En entornos aislados (contenedores Docker, máquinas virtuales desechables)
- En pipelines de CI/CD donde no hay un humano para aprobar
- Cuando estás 100% seguro de que el proyecto no contiene nada que no puedas recrear

**¿Cuándo NO usarlo?**
- En tu máquina personal con archivos reales
- En producción o con acceso a bases de datos
- Cuando el proyecto tiene acceso a credenciales o APIs externas

![Claude Code emocionado en una montaña rusa mientras el developer lo mira aterrorizado con --dangerously-skip-permissions](./images/yolo-mode-meme.png)

> **Historia real:** En octubre de 2025, un desarrollador usó YOLO mode en un proyecto de firmware. Claude ejecutó `rm -rf /` y borró todos los archivos del usuario. En diciembre, otro pidió "limpiar paquetes" y Claude eliminó su directorio home completo. La bandera se llama `--dangerously-skip-permissions` por una razón — el "dangerously" no es decorativo.

Si quieres la velocidad de YOLO mode sin el riesgo, usa **Auto Mode** en su lugar — tiene la misma fluidez pero con un clasificador de seguridad que bloquea las acciones destructivas.

---

## Dictado por voz

Habla tus solicitudes en lugar de escribirlas. Útil para lluvia de ideas e instrucciones más largas.

```
/voice
```

Soporta push-to-talk con 20 idiomas. Configura la tecla de activación via `/keybindings`.

---

## Control remoto

Continua una sesión de Claude Code desde tu teléfono, tablet o cualquier navegador. Tu sesión permanece en tu computadora.

```bash
claude remote-control
```

Conéctate via la URL impresa, un código QR (presiona `spacebar`), o encuentra tu sesión en claude.ai/code.

**Casos de uso:** Revisar informes desde una reunión, continuar tareas desde tu teléfono, monitorear progreso remotamente.

---

## Sesiones web y aplicación de escritorio

**Sesiones web:** Ejecuta Claude Code en tu navegador en claude.ai/code, o inicia una desde la terminal con `claude --remote "your task"`. Muevete entre web y terminal con `claude --teleport`.

**Aplicacion de escritorio:** Aplicacion independiente para macOS y Windows con vista visual de diff, sesiones paralelas, tareas programadas y conectores para Slack, Linear, Notion, Asana y Calendar. Transfiere una sesión de terminal con `/desktop`.

---

## Gestión de sesiones

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
# Iniciar una sesión para un informe
claude -n "marketing-report"

# Volver despues
claude -r "marketing-report" "Add the competitive analysis section"

# Probar una dirección diferente sin perder el trabajo original
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

Conecta Claude Code a tu navegador Chrome con `claude --chrome` o `/chrome`. Claude puede leer páginas web, extraer datos e interactuar con aplicaciones autenticadas (Gmail, Google Docs, Notion). Solo funciona en sitios que permitas explicitamente.

---

## Lista de tareas y sugerencias de prompts

**Lista de tareas:** Presiona `Ctrl+T` para una lista de verificación persistente que sobrevive incluso cuando el historial de conversación se recorta.

**Sugerencias de prompts:** Sugerencias en gris aparecen debajo de tu entrada. Presiona `Tab` para aceptar, o sigue escribiendo para ignorar.

---

## Ejercicios prácticos

> **[Ejercicio 7: De Capturas de Pantalla a Especificación](../11-exercises/07-screenshots-to-spec/)** — Usa el modo plan para estructurar una especificación a partir de capturas de pantalla, luego ejecuta. Práctica el modo plan, entrada multimodal y extended thinking.
>
> **Tiempo:** 30 min | **Datos:** Tus propias capturas de pantalla (arrastra PNGs a la carpeta)

> **[Ejercicio 8: Priorizar del Caos](../11-exercises/08-prioritize-from-chaos/)** — Disena un framework de priorización en modo plan, luego evalua 60 ideas. Práctica ciclos de plan/ejecución y refinamiento de planes.
>
> **Tiempo:** 40 min | **Datos:** CSV de 60 filas con ideas no estructuradas de 6 departamentos

## Recursos adicionales

- [Documentación de funcionalidades avanzadas](https://code.claude.com/docs/en)
- [Inicio rápido de la aplicación de escritorio](https://code.claude.com/docs/en/desktop-quickstart)

---

*Parte de la serie de guías [Claude How To](../)*
