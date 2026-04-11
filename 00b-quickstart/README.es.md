# Instalar y Abrir Claude Code

## Lo que necesitas

Antes de comenzar, asegúrate de tener:

- **Cursor abierto** con la carpeta `nike-analysis` (la que descargaste en la [lección de Cursor](../00f-cursor/))
- Una [suscripción a Claude](https://claude.com/pricing) (Pro, Max o Teams)

## Paso 1: Instalar Claude Code

Abre la terminal dentro de Cursor (**Cmd+J** en Mac, **Ctrl+J** en Windows) y pega este comando:

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

Eso es todo. Se instala automáticamente y se mantiene actualizado.

> **Importante: cierra Cursor del todo y vuelve a abrirlo** después de instalar. No basta con abrir una terminal nueva — Cursor tiene que releer las variables de entorno. Tras reabrir, escribe `claude` y debería arrancar.

> **¿Problemas al instalar? No te preocupes.** Si ves errores, copia lo que muestra la terminal y pégalo en [claude.ai](https://claude.ai) (el chat del navegador). Describe lo que intentabas hacer y Claude te guiará.
>
> ⚠️ **Aviso importante sobre lo que te sugiera claude.ai:** el chat del navegador a veces recomienda instalar Claude Code con `npm install -g @anthropic-ai/claude-code`. **No lo hagas en Windows** — esa ruta depende de Node.js, del PATH, y acaba en "command not found". Si te lo sugiere, ignóralo y repite el comando `irm https://claude.ai/install.ps1 | iex` de arriba, que es el instalador oficial y no necesita Node. En Mac/Linux, usa siempre `curl ... install.sh | bash`.

## Paso 2: Abrir Claude Code

Ya deberías tener la carpeta `nike-analysis` abierta en Cursor desde la [lección anterior](../00f-cursor/). Si no, ábrela ahora: **File → Open Folder → Escritorio → nike-analysis**.

La terminal es simplemente el **panel inferior** de Cursor — piensa en ella como una ventana de chat que está en la parte de abajo de tu editor. Ábrela con **Cmd+J** (Mac) o **Ctrl+J** (Windows) y escribe:

```
claude
```

![Escribiendo claude en la terminal](./images/cursor-type-claude.png)

La primera vez, se te pedirá iniciar sesión. Sigue las instrucciones — se abrirá tu navegador para autenticarte.

> **Importante:** en la terminal no puedes hacer clic con el ratón para elegir opciones. Usa las **flechas del teclado** (arriba/abajo) para moverte entre opciones y **Enter** para confirmar.

Una vez que inicies sesión, verás los archivos de Nike a la izquierda y Claude listo para conversar en la parte inferior:

![Claude Code corriendo en Cursor con el proyecto Nike](/claude-code-running.png)

¡Ya estás dentro! Ese cursor en la parte inferior es donde escribes tus solicitudes.

## Paso 3: Haz tu primera pregunta

¿Recuerdas los archivos de Nike que exploraste en Cursor? Ahora preguntémosle a Claude sobre ellos. Solo escribe en español normal. Prueba cualquiera de estas:

> `resume el análisis competitivo`

> `¿cuáles son las principales fortalezas y amenazas de Nike?`

> `analiza los datos de ventas y dime qué región creció más`

Claude leerá los archivos y te dará una respuesta detallada. No se necesita configuración — simplemente funciona.

> **Le hablas a Claude como a un colega.** Sin sintaxis especial, sin lenguaje de programación. Solo describe lo que quieres.

## Paso 4: Haz tu primer cambio

Ahora pídele a Claude que modifique uno de los archivos:

> `agrega una sección sobre la estrategia digital de Nike al análisis competitivo`

Claude pensará en qué escribir, luego te mostrará los cambios propuestos y te pedirá permiso:

![Claude pidiendo permiso para editar un archivo](/claude-code-permission.png)

Verás tres opciones:
1. **Yes** — aprobar solo este cambio
2. **Yes, allow all edits during this session (shift+tab)** — aprobar este cambio y dejar que Claude haga ediciones similares sin preguntar de nuevo. **Esta es la opción recomendada** — mantiene el flujo sin interrupciones.
3. **No** — rechazar el cambio

Elige la opción 2, y verás el archivo actualizarse en Cursor inmediatamente.

> **Claude siempre pide permiso antes de cambiar cosas.** Tú mantienes el control. Si quieres detener a Claude en cualquier momento, presiona `Esc`.

## Paso 5: Prueba más tareas

Aquí hay más cosas que puedes pedirle a Claude sobre el proyecto de Nike:

### Analizar datos

> `lee el CSV de ventas y crea una tabla resumen por región con ingresos totales y crecimiento promedio`

> `¿qué trimestre tuvo el mejor rendimiento general?`

### Extraer insights

> `basándote en las notas de reunión y el análisis competitivo, ¿qué debería priorizar Nike el próximo trimestre?`

> `escribe 3 puntos clave que pueda compartir con mi equipo sobre los mayores riesgos de Nike`

### Crear contenido nuevo

> `crea un resumen ejecutivo de una página combinando el análisis competitivo y los datos de ventas`

> `redacta un email para el equipo resumiendo los hallazgos clave del análisis de Nike`

## Cuando algo sale mal

**¿La terminal muestra un error que no entiendes?**

No te preocupes. Solo selecciona el texto del error, cópialo, y pégalo directamente a Claude:

> `Me salió este error: [pega el error]. ¿Qué significa y cómo lo arreglo?`

Claude te explicará qué pasó y te guiará para solucionarlo. También puedes pegar errores en [claude.ai](https://claude.ai) (el chat del navegador) o en la [App de Escritorio](https://claude.com/download).

**¿Claude no arranca?**

Si escribes `claude` y ves "command not found", vuelve al Paso 1 y asegúrate de que la instalación se completó. Recuerda cerrar y reabrir Cursor después de instalar.

**¿Se cerró el panel?**

Presiona **Cmd + J** (Mac) o **Ctrl + J** (Windows) de nuevo para reabrirlo. Claude seguirá ejecutándose.

## Comandos y atajos esenciales

| Qué escribir | Qué hace |
|-------------|-------------|
| `claude` | Iniciar una nueva sesión |
| `claude -c` | Continuar tu última conversación |
| `/help` | Ver todos los comandos disponibles |
| `Esc` | Detener a Claude a mitad de una acción |
| `exit` o `Ctrl+C` | Salir de Claude Code |
| **Cmd/Ctrl + J** | Abrir o cerrar el panel de terminal |
| **Flecha arriba** | Mostrar tu mensaje anterior |

## Consejo avanzado: Ejecuta varias sesiones en paralelo

No estás limitado a una sola conversación con Claude a la vez. En Cursor, puedes abrir múltiples terminales — cada una ejecutando su propia sesión de Claude Code con su propio hilo de conversación.

**Cómo hacerlo:**

1. Haz clic en el icono **+** del panel de terminal para abrir una nueva terminal

![El icono + para crear una nueva terminal](./images/cursor-new-terminal.png)

2. Escribe `claude` en la nueva terminal para iniciar una segunda sesión
3. Repite tantas veces como quieras

![Varias sesiones de Claude ejecutándose en paralelo](./images/cursor-multiple-sessions.png)

Ahora puedes tener a Claude trabajando en tres cosas a la vez:
- **Terminal 1**: Analizando tus datos de ventas
- **Terminal 2**: Reescribiendo el análisis competitivo
- **Terminal 3**: Redactando un email de resumen

Cada sesión es independiente — no se interfieren entre sí. Esta es una de las mayores ganancias de productividad con Claude Code: mientras Claude trabaja en una tarea grande en una terminal, puedes empezar otra cosa en otra.

> **Piénsalo como tener varios asistentes en vez de uno.** Cada terminal es su propio especialista trabajando en su propia tarea.

## Organiza tu espacio de trabajo

Antes de crear más proyectos, configura una estructura de carpetas simple. Esto mantiene todo ordenado y ayuda a Claude a trabajar mejor — funciona mejor cuando cada proyecto tiene su propia carpeta enfocada.

### Paso 1: Crea la carpeta principal

Crea una carpeta llamada **`Claude`** en tu Escritorio:

- **Mac**: clic derecho en el Escritorio → Nueva carpeta → nómbrala `Claude`
- **Windows**: clic derecho en el Escritorio → Nuevo → Carpeta → nómbrala `Claude`

### Paso 2: Crea la estructura dentro

Abre la carpeta `Claude` y crea dos carpetas dentro de la misma forma (clic derecho → Nueva carpeta):

- `projects`
- `resources`

Luego mueve la carpeta `nike-analysis` de tu Escritorio a `projects/` (simplemente arrastra y suelta).

### Paso 3: Ábrelo en Cursor

Abre la carpeta `Claude` en Cursor (**File → Open Folder** → busca tu Escritorio → selecciona `Claude`). Verás todo organizado en la barra lateral.

### La estructura

Así debería verse tu espacio de trabajo con el tiempo:

```
~/Desktop/Claude/
├── projects/                    ← una carpeta por proyecto
│   ├── nike-analysis/
│   │   ├── competitive-analysis.md
│   │   ├── notes.txt
│   │   └── sales-data.csv
│   ├── q4-planning/
│   └── client-acme/
└── resources/                   ← compartido entre todos los proyectos
    ├── brand-guidelines.md
    └── competitor-list.csv
```

**`projects/`** es donde vive tu trabajo. Cada proyecto tiene su propia carpeta — pon tus archivos y los resultados de Claude juntos ahí.

**`resources/`** es para material de referencia que aplica a varios proyectos — guías de marca, listas de precios, datos de competidores. Cuando Claude necesite esta info, puedes decirle: "revisa la carpeta resources para nuestras guías de marca."

### Las reglas

1. **Una carpeta por proyecto** — Claude funciona mejor con contexto enfocado. No mezcles archivos de Nike con archivos de planificación de Q4.
2. **`resources/`** para material compartido — cosas que no pertenecen a un solo proyecto.

### Empezar un proyecto nuevo

Cada vez que empieces algo nuevo, crea una carpeta dentro de `projects/`. Simplemente usa Finder (Mac) o Explorador de Archivos (Windows):

1. Abre `Escritorio/Claude/projects/`
2. Crea una nueva carpeta con el nombre de tu proyecto (ej. `mi-nuevo-proyecto`)
3. Mete tus archivos dentro

Abre la carpeta del proyecto en Cursor (**File → Open Folder**), abre el panel de terminal (**Cmd+J** / **Ctrl+J**), escribe `claude`, y listo.

> **El beneficio se acumula.** Después de unas semanas, tendrás una biblioteca ordenada de proyectos. Puedes saltar entre cualquiera de ellos y Claude retoma justo donde lo dejaste.

> **Más adelante en el curso** aprenderás a darle memoria a cada proyecto para que Claude recuerde el contexto entre sesiones.

## ¿Qué sigue?
