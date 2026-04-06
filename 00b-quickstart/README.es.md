# Configurar Claude Code

## Lo que necesitas

Antes de comenzar, asegúrate de tener:

- **VS Code abierto** con la carpeta `nike-analysis` (la que descargaste en la [lección de VS Code](../00f-vscode/README.es.md))
- Una [suscripción a Claude](https://claude.com/pricing) (Pro, Max o Teams)

## Paso 1: Instalar Claude Code

Abre la terminal dentro de VS Code (haz clic en el icono de terminal o presiona `` Ctrl+` ``) y pega este comando:

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

Eso es todo. Se instala automáticamente y se mantiene actualizado.

> **¿Problemas al instalar? No te preocupes.** A veces tu ordenador necesita una actualizacion, o le falta algun software del que Claude Code depende (como Node.js). Esto es normal. Si ves errores durante la instalacion, simplemente copia lo que muestra la terminal y pegalo en [claude.ai](https://claude.ai) (el chat del navegador). Describe lo que intentabas hacer y Claude te guiara para solucionarlo. Con un par de mensajes de ida y vuelta, normalmente se resuelve.

### Recomendado: eliminar el parpadeo de pantalla

La terminal de Claude Code puede parpadear mientras trabaja. Para solucionarlo, ejecuta esto una sola vez:

**Mac / Linux:**
```bash
echo 'export CLAUDE_CODE_NO_FLICKER=1' >> ~/.zshrc && source ~/.zshrc
```

**Windows PowerShell:**
```powershell
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_NO_FLICKER', '1', 'User')
```

Esto hace que la terminal sea mucho más fluida — solo necesitas hacerlo una vez.

## Paso 2: Navega a tu proyecto

En la misma terminal de VS Code, navega al proyecto de Nike en tu Escritorio:

```bash
cd ~/Desktop/nike-analysis
```

Ahora inicia Claude Code:

```bash
claude
```

La primera vez, se te pedirá iniciar sesión. Sigue las instrucciones — se abrirá tu navegador para autenticarte.

Una vez que inicies sesión, verás una pantalla como esta — con los archivos de Nike a la izquierda y Claude listo para conversar en la parte inferior:

![Claude Code corriendo en VS Code con el proyecto Nike](/claude-code-running.png)

¡Ya estás dentro! Ese cursor en la parte inferior es donde escribes tus solicitudes.

## Paso 3: Haz tu primera pregunta

¿Recuerdas los archivos de Nike que exploraste en VS Code? Ahora preguntémosle a Claude sobre ellos. Solo escribe en español normal. Prueba cualquiera de estas:

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

Elige la opción 2, y verás el archivo actualizarse en VS Code inmediatamente.

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

## Comandos esenciales para recordar

| Qué escribir | Qué hace |
|-------------|-------------|
| `claude` | Iniciar una nueva sesión |
| `claude -c` | Continuar tu última conversación |
| `/help` | Ver todos los comandos disponibles |
| `/clear` | Empezar de cero (limpiar conversación) |
| `Esc` | Detener a Claude a mitad de una acción |
| `exit` o `Ctrl+C` | Salir de Claude Code |

## Consejo avanzado: Ejecuta varias sesiones en paralelo

No estás limitado a una sola conversación con Claude a la vez. En VS Code, puedes abrir múltiples terminales — cada una ejecutando su propia sesión de Claude Code con su propio hilo de conversación.

**Cómo hacerlo:**

1. Haz clic en el icono **+** del panel de terminal (o presiona `` Ctrl+Shift+` ``) para abrir una nueva terminal
2. Escribe `claude` en la nueva terminal para iniciar una segunda sesión
3. Repite tantas veces como quieras

Ahora puedes tener a Claude trabajando en tres cosas a la vez:
- **Terminal 1**: Analizando tus datos de ventas
- **Terminal 2**: Reescribiendo el análisis competitivo
- **Terminal 3**: Redactando un email de resumen

Cada sesión es independiente — no se interfieren entre sí. Esta es una de las mayores ganancias de productividad con Claude Code: mientras Claude trabaja en una tarea grande en una terminal, puedes empezar otra cosa en otra.

> **Piénsalo como tener varios asistentes en vez de uno.** Cada terminal es su propio especialista trabajando en su propia tarea.

## Organiza tus proyectos

Antes de crear más proyectos, configura una estructura de carpetas simple. Esto mantiene todo ordenado y ayuda a Claude a trabajar mejor — funciona mejor cuando cada proyecto tiene su propia carpeta enfocada.

### Crea una carpeta de proyectos

Elige un solo lugar para todo tu trabajo con Claude. Recomendamos una carpeta `Projects`:

```bash
mkdir ~/Projects
```

Luego mueve el proyecto de Nike ahí:

```bash
mv ~/Desktop/nike-analysis ~/Projects/nike-analysis
```

De ahora en adelante, abre `~/Projects` en VS Code y verás todos tus proyectos en la barra lateral.

### Estructura dentro de cada proyecto

Cada proyecto debería seguir el mismo patrón simple:

```
~/Projects/
├── nike-analysis/
│   ├── CLAUDE.md          ← memoria del proyecto (se crea con /init)
│   ├── data/              ← archivos que le das a Claude (CSVs, PDFs, exports)
│   ├── output/            ← archivos que Claude crea (informes, resúmenes)
│   └── notes/             ← notas de reunión, investigación, contexto
├── q4-planning/
│   ├── CLAUDE.md
│   ├── data/
│   └── output/
└── client-acme/
    ├── CLAUDE.md
    ├── data/
    └── output/
```

### Las reglas

1. **Una carpeta por proyecto** — Claude funciona mejor con contexto enfocado. No mezcles archivos de Nike con archivos de planificación de Q4.
2. **`data/`** para inputs — todo lo que quieras que Claude lea (hojas de cálculo, documentos, exports)
3. **`output/`** para resultados — todo lo que Claude crea para ti (informes, análisis, borradores)
4. **No crees `CLAUDE.md` a mano** — ejecuta `/init` cuando empieces a trabajar en una carpeta nueva. Claude escaneará tus archivos y escribirá la memoria por ti.

### Empezar un proyecto nuevo

Cada vez que empieces algo nuevo:

```bash
mkdir ~/Projects/mi-nuevo-proyecto
mkdir ~/Projects/mi-nuevo-proyecto/data
mkdir ~/Projects/mi-nuevo-proyecto/output
```

Abre la carpeta en VS Code, inicia Claude Code y ejecuta `/init`. Eso es todo — ya puedes trabajar.

> **El beneficio se acumula.** Después de unas semanas, tendrás una biblioteca ordenada de proyectos, cada uno con su propia memoria. Puedes saltar entre cualquiera de ellos y Claude sabe el contexto inmediatamente.

## ¿Qué sigue?

