# Extra: Archivos Ocultos y Rutas del Sistema

## Por qué esto importa

Claude Code almacena toda su configuración en **carpetas ocultas**. Si no sabes que existen, te sentiras perdido cada vez que el curso diga "edita `.claude/settings.json`" o "pon tu skill en `~/.claude/skills/`."

Esta guía te da el mapa mental.

## ¿Qué son los archivos ocultos?

Cualquier archivo o carpeta cuyo nombre empiece con un **punto** (`.`) está oculto por defecto. Tu computadora los oculta para mantener las cosas limpias — generalmente son archivos de configuración que no necesitas ver a diario.

```
my-project/
├── index.html          ← Visible (archivo normal)
├── styles.css          ← Visible (archivo normal)
├── .claude/            ← OCULTO (empieza con un punto)
│   └── settings.json
└── .git/               ← OCULTO (empieza con un punto)
    └── (internos de git)
```

Oculto no significa secreto o peligroso. Solo significa "no se muestra por defecto."

## Cómo ver archivos ocultos

### En la terminal

El `ls` regular los oculta. Agrega la bandera `-a`:

```bash
ls          # Muestra: index.html  styles.css
ls -a       # Muestra: .  ..  .claude  .git  index.html  styles.css
```

El `-a` significa "all" (todos) — incluyendo archivos ocultos.

> **Consejo**: `ls -la` muestra archivos ocultos en un formato de lista detallado (con tamaños y fechas).

### En VS Code

VS Code muestra archivos ocultos por defecto en la barra lateral. Pero si no ves `.claude/`:

1. Abre la Configuración de VS Code (Cmd+, en Mac, Ctrl+, en Windows)
2. Busca "exclude"
3. Busca `files.exclude` — elimina cualquier patrón que oculte `.claude`

### En Finder de Mac

Presiona **Cmd + Shift + .** (punto) para alternar archivos ocultos.

### En el Explorador de Windows

1. Haz clic en **Ver** en la barra de herramientas
2. Marca **Elementos ocultos**

## Los dos lugares donde Claude Code almacena archivos

Claude Code usa dos ubicaciones principales. Entender la diferencia es fundamental:

```
TU CARPETA DE INICIO (~/)                TU CARPETA DE PROYECTO (./my-project/)
├── .claude/                             ├── .claude/
│   ├── CLAUDE.md       ← Tus          │   ├── CLAUDE.md       ← Estandares
│   │                     preferencias  │   │                     del proyecto
│   │                     personales    │   │
│   ├── settings.json   ← Tu config    │   ├── settings.json   ← Config del
│   │                     global        │   │                     proyecto
│   ├── skills/         ← Tus skills   │   ├── skills/         ← Skills del
│   │   └── my-skill/     personales   │   │   └── team-skill/   proyecto
│   │       └── SKILL.md                │   │       └── SKILL.md
│   ├── agents/         ← Tus agentes  │   ├── agents/         ← Agentes del
│   │   └── my-agent/     personales   │   │   └── team-agent/   proyecto
│   │       └── AGENT.md                │   │       └── AGENT.md
│   └── rules/          ← Tus reglas   │   ├── rules/          ← Reglas del
│       └── my-rule.md    personales   │   │   └── team-rule.md  proyecto
│                                        │   └── commands/       ← Comandos del
│                                        │       └── cmd.md        proyecto
└── (otros archivos...)                  └── (tus archivos del proyecto...)
```

### La diferencia clave

| Ubicación | Simbolo | A quien afecta | ¿Se sube a Git? | Ejemplo de uso |
|----------|--------|---------------|-------------------|-------------|
| **Carpeta de inicio** `~/.claude/` | `~` | Solo a ti, en todos los proyectos | No | Tus preferencias personales, estilo |
| **Carpeta del proyecto** `.claude/` | `.` | A todos en este proyecto | Si (generalmente) | Estandares del equipo, skills compartidos |

### ¿Qué significa `~`?

La tilde `~` es un atajo para **tu carpeta de inicio**:

| SO | `~` significa... | Ejemplo |
|----|-------------|---------|
| Mac | `/Users/tunombre` | `~/.claude/` = `/Users/maria/.claude/` |
| Linux | `/home/tunombre` | `~/.claude/` = `/home/maria/.claude/` |
| Windows | `C:\Users\tunombre` | `~/.claude/` = `C:\Users\maria\.claude\` |

Siempre puedes verificar con:

```bash
echo ~
# /Users/maria
```

### ¿Qué significa `.`?

Un punto solo `.` significa **la carpeta actual** (donde sea que estés ahora):

```bash
pwd
# /Users/maria/my-project

ls .claude/
# Muestra .claude/ dentro de my-project
```

## Mapa completo de archivos de Claude Code

Aqui está cada ubicación que usa Claude Code, organizada por propósito:

### Archivos de memoria (Lección 02)

```
~/.claude/CLAUDE.md              → Tus preferencias personales (todos los proyectos)
./CLAUDE.md                      → Memoria del proyecto (raiz del proyecto)
./.claude/CLAUDE.md              → Memoria del proyecto (ubicacion alternativa)
./CLAUDE.local.md                → Tus ajustes locales (no compartidos)
./src/CLAUDE.md                  → Memoria especifica del directorio
```

**Regla**: Lo específico gana sobre lo general. La memoria del proyecto anula la personal. La memoria del directorio anula la del proyecto.

### Archivos de configuración (Lección 06)

```
~/.claude/settings.json          → Tu configuracion global y hooks
./.claude/settings.json          → Configuracion del proyecto y hooks (compartida)
./.claude/settings.local.json    → Tu configuracion local (no compartida)
```

### Skills (Lección 03)

```
~/.claude/skills/name/SKILL.md   → Tus skills personales
./.claude/skills/name/SKILL.md   → Skills del proyecto (compartidos con el equipo)
```

### Subagentes (Lección 04)

```
~/.claude/agents/name/AGENT.md   → Tus agentes personales
./.claude/agents/name/AGENT.md   → Agentes del proyecto (compartidos con el equipo)
```

### Reglas (Lección 02)

```
~/.claude/rules/name.md          → Tus reglas personales
./.claude/rules/name.md          → Reglas del proyecto (compartidas con el equipo)
```

### Comandos (Lección 01)

```
./.claude/commands/name.md       → Comandos slash del proyecto
```

## Puntos comunes de confusion

### "Guarde el archivo pero nada cambio"

Puede que lo hayas guardado en la ubicación equivocada. Verifica:

```bash
# ¿Estoy en la carpeta correcta?
pwd

# ¿Existe el archivo donde creo que esta?
ls -la .claude/
```

### "Mi skill funciona en mi máquina pero no en la de mi compañero"

Probablemente lo guardaste en `~/.claude/skills/` (personal) en lugar de `.claude/skills/` (proyecto). Muevelo:

```bash
# Mover de personal a proyecto
mv ~/.claude/skills/my-skill .claude/skills/my-skill
```

Luego haz commit a Git para que tu equipo también lo tenga.

### "Veo dos archivos CLAUDE.md — ¿cual edito?"

| Archivo | Cuando editarlo |
|------|-------------|
| `~/.claude/CLAUDE.md` | Tu estilo personal (aplica en todas partes) |
| `./CLAUDE.md` o `./.claude/CLAUDE.md` | Estandares del proyecto (aplica solo a este proyecto) |

En caso de duda: edita el del **proyecto** (`.claude/CLAUDE.md`).

### "¿Dónde puso Claude la memoria automática?"

Las memorias generadas automaticamente van a una ubicación especial:

```bash
ls ~/.claude/projects/
```

Cada proyecto tiene su propia subcarpeta con archivos de memoria que Claude crea automaticamente.

## Referencia rápida de navegación

```bash
# Ir a tu configuracion personal de Claude
cd ~/.claude

# Ir a la configuracion de Claude de tu proyecto
cd .claude          # (desde dentro de la carpeta del proyecto)

# Ver todo en tu configuracion personal
ls -la ~/.claude/

# Ver todo en la configuracion de tu proyecto
ls -la .claude/

# Encontrar todos los archivos CLAUDE.md en tu proyecto
find . -name "CLAUDE.md"
```

## Lista de verificación: ¿Puedes responder esto?

Antes de continuar, asegúrate de poder responder:

- [ ] ¿Qué hace que un archivo sea "oculto"? → Empieza con un punto (`.`)
- [ ] ¿Cómo ves archivos ocultos en la terminal? → `ls -a`
- [ ] ¿Qué significa `~`? → Tu carpeta de inicio
- [ ] ¿Dónde se guardan las configuraciones personales? → `~/.claude/`
- [ ] ¿Dónde se guardan las configuraciones del proyecto? → `.claude/` (dentro del proyecto)
- [ ] Si un skill funciona para ti pero no para tu equipo, ¿que paso? → Esta en `~/` en lugar de `./`

**Siguiente paso**: [Volver a la lección de Memoria →](README.es.md)
