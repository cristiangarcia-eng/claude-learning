# Uso del CLI para el trabajo diario

Los comandos esenciales de Claude Code para el uso diario. No se requiere experiencia en programación.

---

## Iniciando Claude Code

Abre tu terminal y escribe:

```bash
claude
```

Esto inicia una conversación interactiva. Tambien puedes comenzar con una solicitud específica:

```bash
claude "Summarize the documents in this folder"
```

---

## Atajos de teclado

| Atajo | Qué hace |
|-------|---------|
| `Shift+Tab` | Cambiar modos de permisos |
| `Option+T` / `Alt+T` | Alternar extended thinking |
| `Option+P` / `Alt+P` | Cambiar modelo de IA |
| `Ctrl+C` | Detener operación actual |
| `Ctrl+L` | Limpiar pantalla |
| `Ctrl+R` | Buscar comandos anteriores |
| `Ctrl+T` | Mostrar/ocultar lista de tareas |
| `Esc+Esc` | Deshacer último cambio |
| `Up/Down arrows` | Navegar comandos anteriores |
| `Tab` | Aceptar sugerencia de autocompletado |

---

## Gestion de sesiones

Las sesiones guardan tus conversaciones para que puedas volver a ellas después.

| Comando | Qué hace |
|---------|---------|
| `claude -n "name"` | Iniciar una sesión con nombre |
| `claude -c` | Continuar la conversación más reciente |
| `claude -r "name"` | Reanudar una sesión con nombre |
| `claude -r "name" "request"` | Reanudar y agregar una nueva solicitud |
| `/resume` | Explorar sesiones pasadas interactivamente |
| `/rename new-name` | Renombrar la sesión actual |
| `/fork` | Bifurcar para probar un enfoque diferente |

### Ejemplo: Multiples proyectos

```bash
claude -n "quarterly-report"       # Iniciar una sesion de informe
claude -n "budget-review"          # Iniciar una sesion de presupuesto
claude -r "quarterly-report"       # Volver al informe
```

### Bifurcacion

Prueba un enfoque diferente sin perder tu trabajo actual:

```bash
claude --resume quarterly-report --fork-session "try shorter version"
```

---

## Eligiendo un modelo

| Modelo | Mejor para | Comando |
|--------|-----------|---------|
| **Sonnet** (por defecto) | Tareas cotidianas | `claude --model sonnet` |
| **Opus** | Analisis complejos, pensamiento profundo | `claude --model opus` |
| **Haiku** | Respuestas rapidas, el más veloz | `claude --model haiku` |

Cambia durante una sesión con `Option+P` (Mac) o `Alt+P` (Windows/Linux).

---

## Slash Commands útiles

| Comando | Qué hace |
|---------|---------|
| `/help` | Mostrar todos los comandos disponibles |
| `/plan your request` | Planificar antes de actuar |
| `/effort high` | Establecer profundidad de pensamiento |
| `/voice` | Dictado por voz |
| `/mcp` | Verificar herramientas conectadas |

---

## Consejos

- **Nombra las sesiones** con `-n "name"` para poder encontrarlas después.
- **Usa `/plan`** para tareas complejas para que Claude muestre su enfoque primero.
- **Escribe `/help`** si olvidas algun comando.
- **Bifurca libremente** -- la sesión original siempre se preserva.

---

## Ejercicio practico

> **[Ejercicio 9: Auditoria de carpeta](../11-exercises/exercise-09-folder-audit/)** — Usa `claude -p`, piping y salida JSON para construir un script reutilizable de auditoria de carpeta. Práctica el modo print, enviar contenido a Claude via piping y scripting con salida estructurada.
>
> **Tiempo:** 30 min | **Datos:** Audita la carpeta de ejercicios misma (¡meta!)

## Recursos adicionales

- [Referencia oficial del CLI](https://code.claude.com/docs/en/cli-reference)
- [Funcionalidades avanzadas](../09-advanced-features/README.es.md)

---

*Parte de la serie de guias [Claude How To](../)*
