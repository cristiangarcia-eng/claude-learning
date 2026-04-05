<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../resources/logos/claude-howto-logo-dark.svg">
  <img alt="Claude How To" src="../resources/logos/claude-howto-logo.svg">
</picture>

# Hooks

Los hooks son scripts automatizados que se ejecutan en respuesta a eventos específicos durante las sesiones de Claude Code. Permiten automatización, validación, gestión de permisos y flujos de trabajo personalizados.

## Descripción general

Los hooks son acciones automatizadas (comandos de shell, webhooks HTTP, prompts LLM o evaluaciones de subagentes) que se ejecutan automáticamente cuando ocurren eventos específicos en Claude Code. Reciben entrada JSON y comunican resultados mediante códigos de salida y salida JSON.

> **¿Nunca editaste un archivo JSON?** Los hooks se configuran en formato JSON. Si no estás familiarizado con la sintaxis JSON, lee primero la guía [Extra: JSON Esencial](EXTRA-JSON-ESSENTIALS.es.md) (15 min) — te ahorrará mucha frustración con errores de sintaxis.

**Características principales:**
- Automatización basada en eventos
- Entrada/salida basada en JSON
- Soporte para tipos de hook: command, prompt, HTTP y agent
- Coincidencia de patrones para hooks específicos de herramientas

## Configuración

Los hooks se configuran en archivos de ajustes con una estructura específica:

- `~/.claude/settings.json` - Ajustes de usuario (todos los proyectos)
- `.claude/settings.json` - Ajustes de proyecto (compartible, se puede confirmar en git)
- `.claude/settings.local.json` - Ajustes locales del proyecto (no se confirma en git)
- Política administrada - Ajustes para toda la organización
- Plugin `hooks/hooks.json` - Hooks con alcance de plugin
- Frontmatter de Skill/Agent - Hooks con tiempo de vida del componente

### Estructura básica de configuración

```json
{
  "hooks": {
    "EventName": [
      {
        "matcher": "ToolPattern",
        "hooks": [
          {
            "type": "command",
            "command": "your-command-here",
            "timeout": 60
          }
        ]
      }
    ]
  }
}
```

**Campos principales:**

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `matcher` | Patrón para coincidir con nombres de herramientas (distingue mayúsculas/minúsculas) | `"Write"`, `"Edit\|Write"`, `"*"` |
| `hooks` | Arreglo de definiciones de hooks | `[{ "type": "command", ... }]` |
| `type` | Tipo de hook: `"command"` (bash), `"prompt"` (LLM), `"http"` (webhook) o `"agent"` (subagente) | `"command"` |
| `command` | Comando de shell a ejecutar | `"$CLAUDE_PROJECT_DIR/.claude/hooks/format.sh"` |
| `timeout` | Tiempo de espera opcional en segundos (por defecto 60) | `30` |
| `once` | Si es `true`, ejecuta el hook solo una vez por sesión | `true` |

### Patrones de matcher

| Patrón | Descripción | Ejemplo |
|--------|-------------|---------|
| Cadena exacta | Coincide con una herramienta específica | `"Write"` |
| Patrón regex | Coincide con múltiples herramientas | `"Edit\|Write"` |
| Comodín | Coincide con todas las herramientas | `"*"` o `""` |
| Herramientas MCP | Patrón de servidor y herramienta | `"mcp__memory__.*"` |

## Tipos de hook

Claude Code admite cuatro tipos de hook:

### Hooks de comando (Command)

El tipo de hook predeterminado. Ejecuta un comando de shell y se comunica mediante JSON en stdin/stdout y códigos de salida.

```json
{
  "type": "command",
  "command": "python3 \"$CLAUDE_PROJECT_DIR/.claude/hooks/validate.py\"",
  "timeout": 60
}
```

### Hooks HTTP

> Agregado en v2.1.63.

Endpoints de webhook remotos que reciben la misma entrada JSON que los hooks de comando. Los hooks HTTP envían un POST con JSON a la URL y reciben una respuesta JSON. Los hooks HTTP se enrutan a través del sandbox cuando el sandboxing está habilitado. La interpolación de variables de entorno en URLs requiere una lista explícita de `allowedEnvVars` por seguridad.

```json
{
  "hooks": {
    "PostToolUse": [{
      "type": "http",
      "url": "https://my-webhook.example.com/hook",
      "matcher": "Write"
    }]
  }
}
```

**Propiedades principales:**
- `"type": "http"` -- identifica esto como un hook HTTP
- `"url"` -- la URL del endpoint de webhook
- Se enruta a través del sandbox cuando el sandbox está habilitado
- Requiere una lista explícita de `allowedEnvVars` para cualquier interpolación de variables de entorno en la URL

### Hooks de prompt (Prompt)

Prompts evaluados por LLM donde el contenido del hook es un prompt que Claude evalúa. Se usan principalmente con los eventos `Stop` y `SubagentStop` para verificación inteligente de completitud de tareas.

```json
{
  "type": "prompt",
  "prompt": "Evaluate if Claude completed all requested tasks.",
  "timeout": 30
}
```

El LLM evalúa el prompt y devuelve una decisión estructurada (ver [Hooks basados en prompt](#hooks-basados-en-prompt) para más detalles).

### Hooks de agente (Agent)

Hooks de verificación basados en subagentes que lanzan un agente dedicado para evaluar condiciones o realizar verificaciones complejas. A diferencia de los hooks de prompt (evaluación LLM de un solo turno), los hooks de agente pueden usar herramientas y realizar razonamiento en múltiples pasos.

```json
{
  "type": "agent",
  "prompt": "Verify the code changes follow our architecture guidelines. Check the relevant design docs and compare.",
  "timeout": 120
}
```

**Propiedades principales:**
- `"type": "agent"` -- identifica esto como un hook de agente
- `"prompt"` -- la descripción de la tarea para el subagente
- El agente puede usar herramientas (Read, Grep, Bash, etc.) para realizar su evaluación
- Devuelve una decisión estructurada similar a los hooks de prompt

## Eventos de hook

Claude Code admite **25 eventos de hook**:

| Evento | Cuándo se activa | Entrada del matcher | Puede bloquear | Uso común |
|--------|-----------------|---------------------|----------------|-----------|
| **SessionStart** | La sesión comienza/se reanuda/se limpia/se compacta | startup/resume/clear/compact | No | Configuración del entorno |
| **InstructionsLoaded** | Después de cargar CLAUDE.md o archivo de reglas | (ninguno) | No | Modificar/filtrar instrucciones |
| **UserPromptSubmit** | El usuario envía un prompt | (ninguno) | Sí | Validar prompts |
| **PreToolUse** | Antes de la ejecución de herramientas | Nombre de herramienta | Sí (allow/deny/ask) | Validar, modificar entradas |
| **PermissionRequest** | Se muestra el diálogo de permisos | Nombre de herramienta | Sí | Aprobar/denegar automáticamente |
| **PostToolUse** | Después de que la herramienta tiene éxito | Nombre de herramienta | No | Agregar contexto, retroalimentación |
| **PostToolUseFailure** | Falla la ejecución de la herramienta | Nombre de herramienta | No | Manejo de errores, registro |
| **Notification** | Se envía una notificación | Tipo de notificación | No | Notificaciones personalizadas |
| **SubagentStart** | Se lanza un subagente | Nombre del tipo de agente | No | Configuración del subagente |
| **SubagentStop** | El subagente termina | Nombre del tipo de agente | Sí | Validación del subagente |
| **Stop** | Claude termina de responder | (ninguno) | Sí | Verificación de completitud de tarea |
| **StopFailure** | Error de API termina el turno | (ninguno) | No | Recuperación de errores, registro |
| **TeammateIdle** | Compañero del equipo de agentes inactivo | (ninguno) | Sí | Coordinación de compañeros |
| **TaskCompleted** | Tarea marcada como completada | (ninguno) | Sí | Acciones posteriores a la tarea |
| **TaskCreated** | Tarea creada mediante TaskCreate | (ninguno) | No | Seguimiento de tareas, registro |
| **ConfigChange** | El archivo de configuración cambia | (ninguno) | Sí (excepto política) | Reaccionar a actualizaciones de configuración |
| **CwdChanged** | Cambia el directorio de trabajo | (ninguno) | No | Configuración específica del directorio |
| **FileChanged** | Cambia un archivo vigilado | (ninguno) | No | Monitoreo de archivos, reconstrucción |
| **PreCompact** | Antes de la compactación del contexto | manual/auto | No | Acciones previas a la compactación |
| **PostCompact** | Después de completar la compactación | (ninguno) | No | Acciones posteriores a la compactación |
| **WorktreeCreate** | Se está creando un worktree | (ninguno) | Sí (retorno de ruta) | Inicialización del worktree |
| **WorktreeRemove** | Se está eliminando un worktree | (ninguno) | No | Limpieza del worktree |
| **Elicitation** | El servidor MCP solicita entrada del usuario | (ninguno) | Sí | Validación de entrada |
| **ElicitationResult** | El usuario responde a una elicitación | (ninguno) | Sí | Procesamiento de respuesta |
| **SessionEnd** | La sesión termina | (ninguno) | No | Limpieza, registro final |


### PreToolUse

Se ejecuta después de que Claude crea los parámetros de herramienta y antes del procesamiento. Úsalo para validar o modificar las entradas de las herramientas.

**Configuración:**
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/validate-bash.py"
          }
        ]
      }
    ]
  }
}
```

**Matchers comunes:** `Task`, `Bash`, `Glob`, `Grep`, `Read`, `Edit`, `Write`, `WebFetch`, `WebSearch`

**Control de salida:**
- `permissionDecision`: `"allow"`, `"deny"` o `"ask"`
- `permissionDecisionReason`: Explicación de la decisión
- `updatedInput`: Parámetros de entrada de la herramienta modificados

### PostToolUse

Se ejecuta inmediatamente después de que la herramienta completa su ejecución. Úsalo para verificación, registro o para proporcionar contexto de vuelta a Claude.

**Configuración:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/security-scan.py"
          }
        ]
      }
    ]
  }
}
```

**Control de salida:**
- La decisión `"block"` solicita a Claude retroalimentación
- `additionalContext`: Contexto agregado para Claude

### UserPromptSubmit

Se ejecuta cuando el usuario envía un prompt, antes de que Claude lo procese.

**Configuración:**
```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/validate-prompt.py"
          }
        ]
      }
    ]
  }
}
```

**Control de salida:**
- `decision`: `"block"` para evitar el procesamiento
- `reason`: Explicación si se bloqueó
- `additionalContext`: Contexto agregado al prompt

### Stop y SubagentStop

Se ejecutan cuando Claude termina de responder (Stop) o cuando un subagente completa su ejecución (SubagentStop). Admiten evaluación basada en prompt para verificación inteligente de completitud de tareas.

**Campo de entrada adicional:** Tanto los hooks de `Stop` como los de `SubagentStop` reciben un campo `last_assistant_message` en su entrada JSON, que contiene el mensaje final de Claude o del subagente antes de detenerse. Esto es útil para evaluar la completitud de la tarea.

**Configuración:**
```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Evaluate if Claude completed all requested tasks.",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

### SubagentStart

Se ejecuta cuando un subagente comienza su ejecución. La entrada del matcher es el nombre del tipo de agente, lo que permite que los hooks apunten a tipos de subagentes específicos.

**Configuración:**
```json
{
  "hooks": {
    "SubagentStart": [
      {
        "matcher": "code-review",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/subagent-init.sh"
          }
        ]
      }
    ]
  }
}
```

### SessionStart

Se ejecuta cuando la sesión comienza o se reanuda. Puede persistir variables de entorno.

**Matchers:** `startup`, `resume`, `clear`, `compact`

**Característica especial:** Usa `CLAUDE_ENV_FILE` para persistir variables de entorno (también disponible en los hooks `CwdChanged` y `FileChanged`):

```bash
#!/bin/bash
if [ -n "$CLAUDE_ENV_FILE" ]; then
  echo 'export NODE_ENV=development' >> "$CLAUDE_ENV_FILE"
fi
exit 0
```

### SessionEnd

Se ejecuta cuando la sesión termina para realizar limpieza o registro final. No puede bloquear la terminación.

**Valores del campo reason:**
- `clear` - El usuario limpió la sesión
- `logout` - El usuario cerró sesión
- `prompt_input_exit` - El usuario salió mediante la entrada de prompt
- `other` - Otro motivo

**Configuración:**
```json
{
  "hooks": {
    "SessionEnd": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR/.claude/hooks/session-cleanup.sh\""
          }
        ]
      }
    ]
  }
}
```

### Evento Notification

Matchers actualizados para eventos de notificación:
- `permission_prompt` - Notificación de solicitud de permisos
- `idle_prompt` - Notificación de estado inactivo
- `auth_success` - Éxito de autenticación
- `elicitation_dialog` - Diálogo mostrado al usuario

## Hooks con alcance de componente

Los hooks pueden adjuntarse a componentes específicos (skills, agentes, comandos) en su frontmatter:

**En SKILL.md, agent.md o command.md:**

```yaml
---
name: secure-operations
description: Perform operations with security checks
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/check.sh"
          once: true  # Only run once per session
---
```

**Eventos admitidos para hooks de componente:** `PreToolUse`, `PostToolUse`, `Stop`

Esto permite definir hooks directamente en el componente que los usa, manteniendo el código relacionado junto.

### Hooks en frontmatter de subagente

Cuando se define un hook de `Stop` en el frontmatter de un subagente, se convierte automáticamente en un hook de `SubagentStop` con alcance a ese subagente. Esto garantiza que el hook de stop solo se active cuando ese subagente específico complete su ejecución, en lugar de cuando la sesión principal se detenga.

```yaml
---
name: code-review-agent
description: Automated code review subagent
hooks:
  Stop:
    - hooks:
        - type: prompt
          prompt: "Verify the code review is thorough and complete."
  # The above Stop hook auto-converts to SubagentStop for this subagent
---
```

## Evento PermissionRequest

Maneja solicitudes de permisos con formato de salida personalizado:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PermissionRequest",
    "decision": {
      "behavior": "allow|deny",
      "updatedInput": {},
      "message": "Custom message",
      "interrupt": false
    }
  }
}
```

## Entrada y salida de hooks

### Entrada JSON (via stdin)

Todos los hooks reciben entrada JSON via stdin:

```json
{
  "session_id": "abc123",
  "transcript_path": "/path/to/transcript.jsonl",
  "cwd": "/current/working/directory",
  "permission_mode": "default",
  "hook_event_name": "PreToolUse",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.js",
    "content": "..."
  },
  "tool_use_id": "toolu_01ABC123...",
  "agent_id": "agent-abc123",
  "agent_type": "main",
  "worktree": "/path/to/worktree"
}
```

**Campos comunes:**

| Campo | Descripción |
|-------|-------------|
| `session_id` | Identificador único de la sesión |
| `transcript_path` | Ruta al archivo de transcripción de la conversación |
| `cwd` | Directorio de trabajo actual |
| `hook_event_name` | Nombre del evento que activó el hook |
| `agent_id` | Identificador del agente que ejecuta este hook |
| `agent_type` | Tipo de agente (`"main"`, nombre del tipo de subagente, etc.) |
| `worktree` | Ruta al git worktree, si el agente está ejecutando en uno |

### Códigos de salida

| Código de salida | Significado | Comportamiento |
|-----------------|-------------|----------------|
| **0** | Éxito | Continuar, parsear JSON en stdout |
| **2** | Error bloqueante | Bloquear operación, stderr se muestra como error |
| **Otro** | Error no bloqueante | Continuar, stderr se muestra en modo verboso |

### Salida JSON (stdout, código de salida 0)

```json
{
  "continue": true,
  "stopReason": "Optional message if stopping",
  "suppressOutput": false,
  "systemMessage": "Optional warning message",
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "allow",
    "permissionDecisionReason": "File is in allowed directory",
    "updatedInput": {
      "file_path": "/modified/path.js"
    }
  }
}
```

## Variables de entorno

| Variable | Disponibilidad | Descripción |
|----------|---------------|-------------|
| `CLAUDE_PROJECT_DIR` | Todos los hooks | Ruta absoluta a la raíz del proyecto |
| `CLAUDE_ENV_FILE` | SessionStart, CwdChanged, FileChanged | Ruta de archivo para persistir variables de entorno |
| `CLAUDE_CODE_REMOTE` | Todos los hooks | `"true"` si se ejecuta en entornos remotos |
| `${CLAUDE_PLUGIN_ROOT}` | Hooks de plugin | Ruta al directorio del plugin |
| `${CLAUDE_PLUGIN_DATA}` | Hooks de plugin | Ruta al directorio de datos del plugin |
| `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` | Hooks SessionEnd | Tiempo de espera configurable en milisegundos para hooks SessionEnd (sobreescribe el valor predeterminado) |

## Hooks basados en prompt

Para los eventos `Stop` y `SubagentStop`, puedes usar evaluación basada en LLM:

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Review if all tasks are complete. Return your decision.",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

**Esquema de respuesta del LLM:**
```json
{
  "decision": "approve",
  "reason": "All tasks completed successfully",
  "continue": false,
  "stopReason": "Task complete"
}
```

## Ejemplos

### Ejemplo 1: Validador de comandos Bash (PreToolUse)

**Archivo:** `.claude/hooks/validate-bash.py`

```python
#!/usr/bin/env python3
import json
import sys
import re

BLOCKED_PATTERNS = [
    (r"\brm\s+-rf\s+/", "Blocking dangerous rm -rf / command"),
    (r"\bsudo\s+rm", "Blocking sudo rm command"),
]

def main():
    input_data = json.load(sys.stdin)

    tool_name = input_data.get("tool_name", "")
    if tool_name != "Bash":
        sys.exit(0)

    command = input_data.get("tool_input", {}).get("command", "")

    for pattern, message in BLOCKED_PATTERNS:
        if re.search(pattern, command):
            print(message, file=sys.stderr)
            sys.exit(2)  # Exit 2 = blocking error

    sys.exit(0)

if __name__ == "__main__":
    main()
```

**Configuración:**
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$CLAUDE_PROJECT_DIR/.claude/hooks/validate-bash.py\""
          }
        ]
      }
    ]
  }
}
```

### Ejemplo 2: Escáner de seguridad (PostToolUse)

**Archivo:** `.claude/hooks/security-scan.py`

```python
#!/usr/bin/env python3
import json
import sys
import re

SECRET_PATTERNS = [
    (r"password\s*=\s*['\"][^'\"]+['\"]", "Potential hardcoded password"),
    (r"api[_-]?key\s*=\s*['\"][^'\"]+['\"]", "Potential hardcoded API key"),
]

def main():
    input_data = json.load(sys.stdin)

    tool_name = input_data.get("tool_name", "")
    if tool_name not in ["Write", "Edit"]:
        sys.exit(0)

    tool_input = input_data.get("tool_input", {})
    content = tool_input.get("content", "") or tool_input.get("new_string", "")
    file_path = tool_input.get("file_path", "")

    warnings = []
    for pattern, message in SECRET_PATTERNS:
        if re.search(pattern, content, re.IGNORECASE):
            warnings.append(message)

    if warnings:
        output = {
            "hookSpecificOutput": {
                "hookEventName": "PostToolUse",
                "additionalContext": f"Security warnings for {file_path}: " + "; ".join(warnings)
            }
        }
        print(json.dumps(output))

    sys.exit(0)

if __name__ == "__main__":
    main()
```

### Ejemplo 3: Auto-formato de código (PostToolUse)

**Archivo:** `.claude/hooks/format-code.sh`

```bash
#!/bin/bash

# Read JSON from stdin
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | python3 -c "import sys, json; print(json.load(sys.stdin).get('tool_name', ''))")
FILE_PATH=$(echo "$INPUT" | python3 -c "import sys, json; print(json.load(sys.stdin).get('tool_input', {}).get('file_path', ''))")

if [ "$TOOL_NAME" != "Write" ] && [ "$TOOL_NAME" != "Edit" ]; then
    exit 0
fi

# Format based on file extension
case "$FILE_PATH" in
    *.js|*.jsx|*.ts|*.tsx|*.json)
        command -v prettier &>/dev/null && prettier --write "$FILE_PATH" 2>/dev/null
        ;;
    *.py)
        command -v black &>/dev/null && black "$FILE_PATH" 2>/dev/null
        ;;
    *.go)
        command -v gofmt &>/dev/null && gofmt -w "$FILE_PATH" 2>/dev/null
        ;;
esac

exit 0
```

### Ejemplo 4: Validador de prompts (UserPromptSubmit)

**Archivo:** `.claude/hooks/validate-prompt.py`

```python
#!/usr/bin/env python3
import json
import sys
import re

BLOCKED_PATTERNS = [
    (r"delete\s+(all\s+)?database", "Dangerous: database deletion"),
    (r"rm\s+-rf\s+/", "Dangerous: root deletion"),
]

def main():
    input_data = json.load(sys.stdin)
    prompt = input_data.get("user_prompt", "") or input_data.get("prompt", "")

    for pattern, message in BLOCKED_PATTERNS:
        if re.search(pattern, prompt, re.IGNORECASE):
            output = {
                "decision": "block",
                "reason": f"Blocked: {message}"
            }
            print(json.dumps(output))
            sys.exit(0)

    sys.exit(0)

if __name__ == "__main__":
    main()
```

### Ejemplo 5: Hook Stop inteligente (basado en prompt)

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Review if Claude completed all requested tasks. Check: 1) Were all files created/modified? 2) Were there unresolved errors? If incomplete, explain what's missing.",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

### Ejemplo 6: Rastreador de uso de contexto (par de hooks)

Rastrea el consumo de tokens por solicitud usando los hooks `UserPromptSubmit` (pre-mensaje) y `Stop` (post-respuesta) juntos.

**Archivo:** `.claude/hooks/context-tracker.py`

```python
#!/usr/bin/env python3
"""
Context Usage Tracker - Tracks token consumption per request.

Uses UserPromptSubmit as "pre-message" hook and Stop as "post-response" hook
to calculate the delta in token usage for each request.

Token Counting Methods:
1. Character estimation (default): ~4 chars per token, no dependencies
2. tiktoken (optional): More accurate (~90-95%), requires: pip install tiktoken
"""
import json
import os
import sys
import tempfile

# Configuration
CONTEXT_LIMIT = 128000  # Claude's context window (adjust for your model)
USE_TIKTOKEN = False    # Set True if tiktoken is installed for better accuracy


def get_state_file(session_id: str) -> str:
    """Get temp file path for storing pre-message token count, isolated by session."""
    return os.path.join(tempfile.gettempdir(), f"claude-context-{session_id}.json")


def count_tokens(text: str) -> int:
    """
    Count tokens in text.

    Uses tiktoken with p50k_base encoding if available (~90-95% accuracy),
    otherwise falls back to character estimation (~80-90% accuracy).
    """
    if USE_TIKTOKEN:
        try:
            import tiktoken
            enc = tiktoken.get_encoding("p50k_base")
            return len(enc.encode(text))
        except ImportError:
            pass  # Fall back to estimation

    # Character-based estimation: ~4 characters per token for English
    return len(text) // 4


def read_transcript(transcript_path: str) -> str:
    """Read and concatenate all content from transcript file."""
    if not transcript_path or not os.path.exists(transcript_path):
        return ""

    content = []
    with open(transcript_path, "r") as f:
        for line in f:
            try:
                entry = json.loads(line.strip())
                # Extract text content from various message formats
                if "message" in entry:
                    msg = entry["message"]
                    if isinstance(msg.get("content"), str):
                        content.append(msg["content"])
                    elif isinstance(msg.get("content"), list):
                        for block in msg["content"]:
                            if isinstance(block, dict) and block.get("type") == "text":
                                content.append(block.get("text", ""))
            except json.JSONDecodeError:
                continue

    return "\n".join(content)


def handle_user_prompt_submit(data: dict) -> None:
    """Pre-message hook: Save current token count before request."""
    session_id = data.get("session_id", "unknown")
    transcript_path = data.get("transcript_path", "")

    transcript_content = read_transcript(transcript_path)
    current_tokens = count_tokens(transcript_content)

    # Save to temp file for later comparison
    state_file = get_state_file(session_id)
    with open(state_file, "w") as f:
        json.dump({"pre_tokens": current_tokens}, f)


def handle_stop(data: dict) -> None:
    """Post-response hook: Calculate and report token delta."""
    session_id = data.get("session_id", "unknown")
    transcript_path = data.get("transcript_path", "")

    transcript_content = read_transcript(transcript_path)
    current_tokens = count_tokens(transcript_content)

    # Load pre-message count
    state_file = get_state_file(session_id)
    pre_tokens = 0
    if os.path.exists(state_file):
        try:
            with open(state_file, "r") as f:
                state = json.load(f)
                pre_tokens = state.get("pre_tokens", 0)
        except (json.JSONDecodeError, IOError):
            pass

    # Calculate delta
    delta_tokens = current_tokens - pre_tokens
    remaining = CONTEXT_LIMIT - current_tokens
    percentage = (current_tokens / CONTEXT_LIMIT) * 100

    # Report usage
    method = "tiktoken" if USE_TIKTOKEN else "estimated"
    print(f"Context ({method}): ~{current_tokens:,} tokens ({percentage:.1f}% used, ~{remaining:,} remaining)", file=sys.stderr)
    if delta_tokens > 0:
        print(f"This request: ~{delta_tokens:,} tokens", file=sys.stderr)


def main():
    data = json.load(sys.stdin)
    event = data.get("hook_event_name", "")

    if event == "UserPromptSubmit":
        handle_user_prompt_submit(data)
    elif event == "Stop":
        handle_stop(data)

    sys.exit(0)


if __name__ == "__main__":
    main()
```

**Configuración:**
```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$CLAUDE_PROJECT_DIR/.claude/hooks/context-tracker.py\""
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$CLAUDE_PROJECT_DIR/.claude/hooks/context-tracker.py\""
          }
        ]
      }
    ]
  }
}
```

**Cómo funciona:**
1. `UserPromptSubmit` se activa antes de que tu prompt sea procesado — guarda el conteo de tokens actual
2. `Stop` se activa después de que Claude responde — calcula el delta e informa el uso
3. Cada sesión está aislada mediante `session_id` en el nombre del archivo temporal

**Métodos de conteo de tokens:**

| Método | Precisión | Dependencias | Velocidad |
|--------|-----------|--------------|-----------|
| Estimación por caracteres | ~80-90% | Ninguna | <1ms |
| tiktoken (p50k_base) | ~90-95% | `pip install tiktoken` | <10ms |

> **Nota:** Anthropic no ha lanzado un tokenizador offline oficial. Ambos métodos son aproximaciones. La transcripción incluye prompts del usuario, respuestas de Claude y salidas de herramientas, pero NO prompts del sistema ni contexto interno.

### Ejemplo 7: Script de configuración de permisos en modo auto (configuración única)

Un script de configuración que se ejecuta una sola vez y agrega ~67 reglas de permisos seguras en `~/.claude/settings.json`, equivalentes a la línea base del modo auto de Claude Code — sin ningún hook, sin recordar elecciones futuras. Ejecútalo una vez; es seguro volver a ejecutarlo (omite reglas ya presentes).

**Archivo:** `09-advanced-features/setup-auto-mode-permissions.py`

```bash
# Preview what would be added
python3 09-advanced-features/setup-auto-mode-permissions.py --dry-run

# Apply
python3 09-advanced-features/setup-auto-mode-permissions.py
```

**Qué se agrega:**

| Categoría | Ejemplos |
|-----------|---------|
| Herramientas integradas | `Read(*)`, `Edit(*)`, `Write(*)`, `Glob(*)`, `Grep(*)`, `Agent(*)`, `WebSearch(*)` |
| Git lectura | `Bash(git status:*)`, `Bash(git log:*)`, `Bash(git diff:*)` |
| Git escritura (local) | `Bash(git add:*)`, `Bash(git commit:*)`, `Bash(git checkout:*)` |
| Gestores de paquetes | `Bash(npm install:*)`, `Bash(pip install:*)`, `Bash(cargo build:*)` |
| Build y pruebas | `Bash(make:*)`, `Bash(pytest:*)`, `Bash(go test:*)` |
| Shell común | `Bash(ls:*)`, `Bash(cat:*)`, `Bash(find:*)`, `Bash(cp:*)`, `Bash(mv:*)` |
| GitHub CLI | `Bash(gh pr view:*)`, `Bash(gh pr create:*)`, `Bash(gh issue list:*)` |

**Qué se excluye intencionalmente** (este script nunca lo agrega):
- `rm -rf`, `sudo`, force push, `git reset --hard`
- `DROP TABLE`, `kubectl delete`, `terraform destroy`
- `npm publish`, `curl | bash`, despliegues a producción

## Hooks de plugin

Los plugins pueden incluir hooks en su archivo `hooks/hooks.json`:

**Archivo:** `plugins/hooks/hooks.json`

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PLUGIN_ROOT}/scripts/validate.sh"
          }
        ]
      }
    ]
  }
}
```

**Variables de entorno en hooks de plugin:**
- `${CLAUDE_PLUGIN_ROOT}` - Ruta al directorio del plugin
- `${CLAUDE_PLUGIN_DATA}` - Ruta al directorio de datos del plugin

Esto permite que los plugins incluyan hooks personalizados de validación y automatización.

## Hooks para herramientas MCP

Las herramientas MCP siguen el patrón `mcp__<server>__<tool>`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "mcp__memory__.*",
        "hooks": [
          {
            "type": "command",
            "command": "echo '{\"systemMessage\": \"Memory operation logged\"}'"
          }
        ]
      }
    ]
  }
}
```

## Consideraciones de seguridad

### Descargo de responsabilidad

**ÚSALO BAJO TU PROPIO RIESGO**: Los hooks ejecutan comandos de shell arbitrarios. Eres el único responsable de:
- Los comandos que configures
- Los permisos de acceso/modificación de archivos
- La posible pérdida de datos o daño al sistema
- Probar los hooks en entornos seguros antes de usarlos en producción

### Notas de seguridad

- **Se requiere confianza en el workspace:** Los comandos de salida de hook `statusLine` y `fileSuggestion` ahora requieren que se acepte la confianza del workspace antes de que tengan efecto.
- **Hooks HTTP y variables de entorno:** Los hooks HTTP requieren una lista explícita de `allowedEnvVars` para usar interpolación de variables de entorno en URLs. Esto evita la filtración accidental de variables de entorno sensibles a endpoints remotos.
- **Jerarquía de ajustes administrados:** El ajuste `disableAllHooks` ahora respeta la jerarquía de ajustes administrados, lo que significa que los ajustes a nivel de organización pueden imponer la deshabilitación de hooks que los usuarios individuales no pueden anular.

### Buenas prácticas

| Hacer | No hacer |
|-------|----------|
| Validar y sanear todas las entradas | Confiar ciegamente en los datos de entrada |
| Comillas en variables de shell: `"$VAR"` | Usar sin comillas: `$VAR` |
| Bloquear traversal de rutas (`..`) | Permitir rutas arbitrarias |
| Usar rutas absolutas con `$CLAUDE_PROJECT_DIR` | Codificar rutas fijas |
| Omitir archivos sensibles (`.env`, `.git/`, claves) | Procesar todos los archivos |
| Probar hooks de forma aislada primero | Desplegar hooks sin probar |
| Usar `allowedEnvVars` explícito para hooks HTTP | Exponer todas las variables de entorno a webhooks |

## Depuración

### Habilitar modo de depuración

Ejecuta Claude con la bandera de depuración para obtener registros detallados de hooks:

```bash
claude --debug
```

### Modo verboso

Usa `Ctrl+O` en Claude Code para habilitar el modo verboso y ver el progreso de ejecución de hooks.

### Probar hooks de forma independiente

```bash
# Test with sample JSON input
echo '{"tool_name": "Bash", "tool_input": {"command": "ls -la"}}' | python3 .claude/hooks/validate-bash.py

# Check exit code
echo $?
```

## Ejemplo de configuración completa

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$CLAUDE_PROJECT_DIR/.claude/hooks/validate-bash.py\"",
            "timeout": 10
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR/.claude/hooks/format-code.sh\"",
            "timeout": 30
          },
          {
            "type": "command",
            "command": "python3 \"$CLAUDE_PROJECT_DIR/.claude/hooks/security-scan.py\"",
            "timeout": 10
          }
        ]
      }
    ],
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$CLAUDE_PROJECT_DIR/.claude/hooks/validate-prompt.py\""
          }
        ]
      }
    ],
    "SessionStart": [
      {
        "matcher": "startup",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR/.claude/hooks/session-init.sh\""
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Verify all tasks are complete before stopping.",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

## Detalles de ejecución de hooks

| Aspecto | Comportamiento |
|---------|----------------|
| **Timeout** | 60 segundos por defecto, configurable por comando |
| **Paralelización** | Todos los hooks coincidentes se ejecutan en paralelo |
| **Deduplicación** | Los comandos de hook idénticos se deduplicán |
| **Entorno** | Se ejecuta en el directorio actual con el entorno de Claude Code |

## Solución de problemas

### El hook no se ejecuta
- Verifica que la sintaxis de configuración JSON sea correcta
- Comprueba que el patrón del matcher coincida con el nombre de la herramienta
- Asegúrate de que el script exista y sea ejecutable: `chmod +x script.sh`
- Ejecuta `claude --debug` para ver los registros de ejecución de hooks
- Verifica que el hook lea JSON desde stdin (no desde argumentos de comando)

### El hook bloquea inesperadamente
- Prueba el hook con JSON de muestra: `echo '{"tool_name": "Write", ...}' | ./hook.py`
- Verifica el código de salida: debe ser 0 para permitir, 2 para bloquear
- Comprueba la salida stderr (se muestra cuando el código de salida es 2)

### Errores de parseo JSON
- Siempre leer desde stdin, no desde argumentos de comando
- Usar parseo JSON apropiado (no manipulación de cadenas)
- Manejar los campos faltantes de forma elegante

## Instalación

### Paso 1: Crear el directorio de hooks
```bash
mkdir -p ~/.claude/hooks
```

### Paso 2: Copiar los hooks de ejemplo
```bash
cp 06-hooks/*.sh ~/.claude/hooks/
chmod +x ~/.claude/hooks/*.sh
```

### Paso 3: Configurar en los ajustes
Edita `~/.claude/settings.json` o `.claude/settings.json` con la configuración de hooks mostrada arriba.

## Conceptos relacionados

- **[Checkpoints y Rewind](../08-checkpoints/)** - Guardar y restaurar el estado de la conversación
- **[Slash Commands](../01-slash-commands/)** - Crear comandos slash personalizados
- **[Skills](../03-skills/)** - Capacidades autónomas reutilizables
- **[Subagentes](../04-subagents/)** - Ejecución de tareas delegadas
- **[Plugins](../07-plugins/)** - Paquetes de extensión empaquetados
- **[Características avanzadas](../09-advanced-features/)** - Explorar las capacidades avanzadas de Claude Code

## Ejercicio práctico

> **[Ejercicio 6: Evaluar y controlar calidad de una salida IA](../11-exercises/06-evaluate-ai-output/)** — Evalúa 20 textos generados por IA en cuanto a calidad y luego construye un hook PostToolUse que compruebe automáticamente la calidad de la salida. Practicarás scripts de hooks, configuración de settings.json, matchers y códigos de salida.
>
> **Tiempo:** 40 min | **Datos:** 20 salidas de IA con fallas intencionales para detectar

## Recursos adicionales

- **[Documentación oficial de Hooks](https://code.claude.com/docs/en/hooks)** - Referencia completa de hooks
- **[Referencia de CLI](https://code.claude.com/docs/en/cli-reference)** - Documentación de la interfaz de línea de comandos
- **[Guía de Memoria](../02-memory/)** - Configuración de contexto persistente
