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

Puedes cerrarla — no la necesitaremos.

## La barra lateral: tu explorador de archivos

Por ahora, lo único que necesitas conocer es el **Explorador** — el primer icono en la barra lateral izquierda (parece dos archivos superpuestos). Aquí es donde verás todos los archivos y carpetas de tu proyecto, igual que Finder en Mac o Explorador de Archivos en Windows.

Exploraremos los otros iconos de la barra lateral más adelante en el curso.

## Tu primer proyecto

Abramos un proyecto real para que veas Cursor en acción.

### Descarga el proyecto de práctica

1. [Descarga esta carpeta](https://github.com/cristiangarcia-eng/claude-learning/raw/main/resources/nike-analysis.zip) a tu Escritorio
2. Descomprímela — obtendrás una carpeta llamada `nike-analysis`

Es un análisis competitivo sencillo de Nike con algunos archivos dentro.

### Ábrelo en Cursor

1. Ve a **File > Open Folder** (o `Cmd+O` en Mac)
2. Navega a tu **Escritorio** y selecciona la carpeta `nike-analysis`
3. Haz clic en **Open**

Deberías ver los archivos aparecer en el Explorador a la izquierda. Haz clic en cualquier archivo para abrirlo — ¡eso es todo!

### Qué hay dentro

Echa un vistazo a los archivos del proyecto. Verás tres tipos diferentes que son muy comunes cuando trabajas con Claude:

- **`competitive-analysis.md`** — un archivo Markdown. Este es el formato más importante que usarás con Claude. Markdown (`.md`) es texto plano con formato simple (títulos con `#`, negrita con `**`, tablas con `|`). Claude lee y escribe Markdown constantemente.
- **`notes.txt`** — un archivo de texto simple. Notas de reuniones, listas de tareas, ideas sueltas — cualquier texto plano funciona.
- **`sales-data.csv`** — un archivo CSV (valores separados por comas). Así se ven los datos de una hoja de cálculo en texto. Claude puede leer, analizar y transformar CSVs por ti.

Haz clic en cada uno para ver cómo se ve dentro de Cursor.

## Guardar archivos

Cuando editas un archivo, notarás que aparece un **punto** en la pestaña junto al nombre del archivo. Ese punto significa que tienes **cambios sin guardar**.

Para guardar: presiona `Cmd+S` (Mac) o `Ctrl+S` (Windows).

> **Consejo**: Ve a **File > Auto Save** y actívalo. Ahora tus archivos se guardan automáticamente — no más preocupaciones por perder cambios.

## La terminal integrada

Cursor tiene una terminal integrada. La forma más fácil de abrirla es presionando **Cmd+J** (Mac) o **Ctrl+J** (Windows).

También puedes hacer clic en el **icono de terminal** en la parte superior derecha de la ventana:

![Icono de terminal en Cursor](/cursor-terminal-icon.png)

Esto significa que puedes:
- Navegar archivos visualmente en la barra lateral
- Editar archivos en el área principal
- Hablar con Claude en la terminal de abajo

Todo en una ventana. Usaremos esta terminal en la siguiente lección para iniciar Claude Code.
