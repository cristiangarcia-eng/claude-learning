# Cursor

## ¿Por qué Cursor?

Cursor es donde harás todo en este curso. Es un **editor de código gratuito** que combina:
- Un **explorador de archivos** para ver todos los archivos de tu proyecto
- Un **editor de texto** para ver y editar cualquier archivo
- Una **terminal integrada** para ejecutar Claude Code

Todo en una ventana. En lugar de cambiar entre aplicaciones, tienes todo junto — puedes ver los archivos que Claude está cambiando mientras hablas con él.

> **Este es tu entorno de trabajo para todo el curso.** Usaremos Cursor para todo — editar archivos, usar la terminal y hablar con Claude.

## Instalar Cursor

### Descargar

1. Ve a [cursor.com](https://www.cursor.com)
2. Haz clic en el botón de **Download**
3. Instálalo como cualquier otra aplicación

Es gratuito y funciona en Mac, Windows y Linux.

### Primer inicio

Cuando abres Cursor por primera vez, verás una pantalla de bienvenida:

![Pantalla de bienvenida de Cursor](/cursor-welcome.png)

Haz clic en **Open project** y selecciona tu carpeta de Escritorio (o cualquier carpeta que prefieras). Esto le dice a Cursor dónde trabajar — piensa en ello como elegir en qué mesa sentarte.

Una vez que abras una carpeta, verás el **Explorador** en la barra lateral izquierda (parece dos archivos superpuestos). Aquí es donde aparecen todos los archivos y carpetas de tu proyecto, igual que Finder en Mac o Explorador de Archivos en Windows.

### Descarga el proyecto de práctica

1. [Descarga esta carpeta](https://github.com/cristiangarcia-eng/claude-learning/raw/main/resources/nike-analysis.zip) a tu Escritorio
2. Descomprímela — obtendrás una carpeta llamada `nike-analysis`

Es un análisis competitivo sencillo de Nike con algunos archivos dentro.

> **Antes de continuar**, asegúrate de que la carpeta `nike-analysis` descomprimida está en tu Escritorio. Los siguientes pasos asumen que está ahí.

### Un recorrido rápido

Aquí tienes el resto de la lección en video — puedes verlo primero y luego repasar los pasos de abajo, o saltártelo e ir directo a las instrucciones.

<video src="https://qcc2s6imrfok5tgt.public.blob.vercel-storage.com/lessons/cursor/Cursor-basics.mp4" controls playsinline preload="metadata" class="my-4 max-w-full rounded-lg"></video>

*PD: Puedes ponerme a 1.5x, no me voy a ofender.*

### Ábrelo en Cursor

1. Ve a **File > Open Folder** (o `Cmd+O` en Mac)

![File > Open Folder en Cursor](./images/cursor-open-folder.png)
2. Navega a tu **Escritorio** y selecciona la carpeta `nike-analysis`
3. Haz clic en **Open**

Deberías ver los archivos aparecer en el Explorador a la izquierda. Haz clic en cualquier archivo para abrirlo — ¡eso es todo!

![Proyecto Nike abierto en Cursor](./images/cursor-nike-project.png)

> **Atención**: es posible que también veas una ventana de chat a la derecha. Ese es el agente de IA integrado de Cursor — no lo vamos a usar en este curso, así que puedes cerrarlo sin problema.

### Qué hay dentro

Echa un vistazo a los archivos del proyecto. Verás tres tipos diferentes que son muy comunes cuando trabajas con Claude:

- **`competitive-analysis.md`** — un archivo Markdown. Este es el formato más importante que usarás con Claude. Markdown (`.md`) es texto plano con formato simple (títulos con `#`, negrita con `**`, tablas con `|`). Claude lee y escribe Markdown constantemente.
- **`notes.txt`** — un archivo de texto simple. Notas de reuniones, listas de tareas, ideas sueltas — cualquier texto plano funciona.
- **`sales-data.csv`** — un archivo CSV (valores separados por comas). Así se ven los datos de una hoja de cálculo en texto. Claude puede leer, analizar y transformar CSVs por ti.

Haz clic en cada uno para ver cómo se ve dentro de Cursor.

## Guardar archivos

Cuando editas un archivo, notarás que aparece un **punto** en la pestaña junto al nombre del archivo. Ese punto significa que tienes **cambios sin guardar**.

![Punto indicando cambios sin guardar en la pestaña](./images/cursor-unsaved-dot.png)

Para guardar: presiona `Cmd+S` (Mac) o `Ctrl+S` (Windows).

> **Consejo**: Ve a **File > Auto Save** y actívalo. Ahora tus archivos se guardan automáticamente — no más preocupaciones por perder cambios.

## La terminal integrada

Cursor tiene una terminal integrada. La forma más fácil de abrirla es presionando **Cmd+J** (Mac) o **Ctrl+J** (Windows).

![Cursor sin terminal abierta](./images/cursor-no-terminal.png)

También puedes hacer clic en el **icono de terminal** en la parte superior derecha de la ventana:

![Icono de terminal en Cursor](/cursor-terminal-icon.png)

Esto significa que puedes:
- Navegar archivos visualmente en la barra lateral
- Editar archivos en el área principal
- Hablar con Claude en la terminal de abajo

Todo en una ventana. Usaremos esta terminal en la siguiente lección para iniciar Claude Code.
