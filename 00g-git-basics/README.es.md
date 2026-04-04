# Extra: Conceptos Básicos de Git

## ¿Qué es Git?

Git es una **máquina del tiempo para tus archivos**. Guarda capturas de tu proyecto para que siempre puedas volver a una version anterior.

Piensa en ello así:

- **Sin Git**: Guardas `reporte-v1.docx`, `reporte-v2.docx`, `reporte-FINAL.docx`, `reporte-FINAL-FINAL.docx`
- **Con Git**: Guardas `reporte.docx` y Git recuerda cada version automaticamente

> Claude Code usa Git detrás de escena. No necesitas convertirte en un experto en Git — solo entender estos conceptos básicos para saber que está haciendo Claude cuando menciona "commits" o "branches."

## Los 5 conceptos que necesitas

### 1. Repositorio (repo)

Un **repositorio** es simplemente una carpeta que Git está vigilando. Cuando ejecutas `git init` o clonas un proyecto, esa carpeta se convierte en un repo.

Piensa en ello como: **una carpeta con memoria**.

```
my-project/          ← Este es tu repo
├── .git/            ← La memoria de Git (carpeta oculta, no la toques)
├── index.html
└── styles.css
```

### 2. Commit

Un **commit** es una captura — un momento guardado en el tiempo. Cada commit tiene:

- **Qué cambió** (que archivos fueron modificados)
- **Un mensaje** (una nota corta explicando por que)
- **Una marca de tiempo** (cuando sucedio)

Piensa en ello como: **presionar "Guardar" con una nota adhesiva adjunta**.

```
Commit 1: "Add homepage layout"
Commit 2: "Fix broken link in navigation"
Commit 3: "Update contact email"
```

### 3. Staging (el "carrito de compras")

Antes de hacer commit, necesitas **preparar (stage)** tus cambios — decirle a Git que cambios incluir en la captura.

Piensa en ello como: **poner artículos en un carrito de compras antes de pagar**.

```
Cambiaste 3 archivos:
  ✏️  index.html      → preparado (se guardara)
  ✏️  styles.css      → preparado (se guardara)
  ✏️  notes.txt       → NO preparado (no se guardara aun)
```

### 4. Branch

Un **branch** es una copia separada de tu proyecto donde puedes hacer cambios sin afectar el original.

Piensa en ello como: **un cuaderno de "¿que pasaria si?"**. Escribes en el cuaderno, y si te gusta el resultado, lo fusionas de vuelta a la version principal. Si no, lo descartas.

```
main (la version real)
  └── my-experiment (tu cuaderno de "¿que pasaria si?")
        ├── cambio de color del encabezado
        └── nueva seccion agregada
```

### 5. Status

**Status** te dice que está pasando ahora mismo — que cambio, que está preparado y que Git aun no conoce.

Piensa en ello como: **preguntar "¿que cambie desde la última vez?"**

## Los 5 comandos que necesitas

Solo necesitas cinco comandos. Esto es lo que hacen:

### `git status` — "¿Qué cambio?"

```bash
git status
```

Esto te muestra:
- Archivos que modificaste (en rojo = no preparados)
- Archivos listos para commit (en verde = preparados)
- Nuevos archivos que Git aun no conoce

**Usalo seguido.** Es tu tablero de control. Nunca cambia nada.

### `git add` — "Quiero guardar estos cambios"

```bash
git add index.html          # Preparar un archivo especifico
git add index.html styles.css   # Preparar multiples archivos
```

Esto mueve archivos al área de preparacion (el "carrito de compras").

> **Consejo del curso**: Evita `git add .` (que prepara todo). Se específico sobre lo que estas guardando — esto previene hacer commit accidentalmente de archivos con contraseñas o secretos.

### `git commit` — "Guardar está captura"

```bash
git commit -m "Fix broken link in navigation"
```

Esto crea una captura permanente con tu mensaje. La bandera `-m` te permite escribir el mensaje en línea.

**Buenos mensajes de commit** explican **por que**, no que:
- ❌ "Changed index.html"
- ✅ "Fix broken link in navigation bar"

### `git log` — "Muéstrame el historial"

```bash
git log --oneline
```

Esto muestra una lista de todos los commits anteriores:

```
a3f9c21 Fix broken link in navigation
b7e2d14 Add homepage layout
c1a8f03 Initial project setup
```

Las letras/numeros al inicio son IDs unicos para cada captura. La bandera `--oneline` lo mantiene compacto.

### `git diff` — "¿Qué cambio exactamente?"

```bash
git diff
```

Esto muestra las lineas especificas que cambiaron en tus archivos:

```diff
- <a href="old-link.html">Contact</a>
+ <a href="contact.html">Contact</a>
```

Las lineas que empiezan con `-` fueron eliminadas. Las lineas que empiezan con `+` fueron agregadas.

## Como Claude Code usa Git

Cuando trabajas con Claude Code, esto es lo que sucede detrás de escena:

| Cuando tu... | Claude hace... | Concepto de Git |
|------------|---------------|-------------|
| Le pides a Claude hacer cambios | Edita archivos en tu repo | Archivos modificados |
| Usas `/commit` | Crea un commit con un mensaje | Commit |
| Usas checkpoints (Esc+Esc) | Revierte a un estado anterior | Como volver atras en el historial |
| Ves "uncommitted changes" | Archivos cambiados pero no guardados como captura | Se necesita staging |

### Lo que Claude podria decir (y que significa)

| Claude dice... | Significa... |
|---------------|-------------|
| "I'll commit these changes" | "Guardare una captura del estado actual" |
| "There are uncommitted changes" | "Hay archivos que cambiaron desde el último punto de guardado" |
| "Let me check the git log" | "Dejame ver el historial de cambios" |
| "I'll create a branch" | "Trabajare en una copia separada para no romper nada" |
| "I'll push to remote" | "Subire los cambios a GitHub (la nube)" |

## Un ejemplo real

Aqui está un flujo de trabajo completo, paso a paso:

```bash
# 1. Ver que esta pasando
git status
# → muestra: index.html modificado, styles.css modificado

# 2. Ver que cambio
git diff
# → muestra las lineas exactas que cambiaron

# 3. Preparar los archivos que quieres guardar
git add index.html styles.css

# 4. Guardar la captura con un mensaje
git commit -m "Update homepage layout and fix styling"

# 5. Verificar que el commit se guardo
git log --oneline
# → muestra tu nuevo commit arriba
```

## Errores comunes

### "Nothing to commit, working tree clean"

**¡Buenas noticias!** Esto significa que todos tus cambios están guardados. No hay nada nuevo para hacer commit.

### "Changes not staged for commit"

Modificaste archivos pero no les hiciste `git add` aun. Ejecuta `git add nombre-archivo` primero, luego `git commit`.

### "Please tell me who you are"

Git quiere saber tu nombre y email (para el historial de commits). Ejecuta:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Solo necesitas hacer esto una vez.

### "Merge conflict"

Dos cambios ocurrieron en la misma línea. No entres en pánico — dile a Claude "there's a merge conflict" y te ayudara a resolverlo.

## Lo que NO necesitas aprender aun

No necesitas saber sobre:

- `git rebase` — Reescritura avanzada del historial
- `git cherry-pick` — Movimiento avanzado de commits
- `git stash` — Almacenamiento temporal
- `git bisect` — Herramienta de búsqueda de bugs

Estas son herramientas avanzadas. Claude las maneja por ti si es necesario.

## Tarjeta de referencia rápida

| Comando | Qué hace | Analogia |
|---------|-------------|---------|
| `git status` | Mostrar que cambio | "¿Qué es diferente?" |
| `git add archivo` | Preparar un archivo | "Poner en el carrito de compras" |
| `git commit -m "msg"` | Guardar una captura | "Guardar + nota adhesiva" |
| `git log --oneline` | Mostrar historial | "Mostrar mi historial de guardados" |
| `git diff` | Mostrar cambios línea por línea | "Muéstrame exactamente que cambio" |

