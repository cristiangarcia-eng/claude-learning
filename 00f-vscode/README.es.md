# Visual Studio Code

## ¿Por que VS Code?

Para usar Claude Code, necesitas una terminal. *Podrias* abrir la terminal directamente (como vimos en [Conceptos Basicos de la Terminal](../00-terminal-basics/README.es.md)), pero hay una opcion mucho mejor: **usarla desde dentro de un editor de codigo**.

Visual Studio Code (VS Code) es un **editor gratuito** hecho por Microsoft que combina:
- Un **explorador de archivos** para ver todos los archivos de tu proyecto
- Un **editor de texto** para ver y editar cualquier archivo
- Una **terminal integrada** para ejecutar Claude Code

Todo en una ventana. En lugar de cambiar entre aplicaciones, tienes todo junto — puedes ver los archivos que Claude esta cambiando mientras hablas con el.

> **Esta es la forma recomendada de usar Claude Code.** La terminal sola funciona, pero VS Code te da el contexto visual que hace todo mas facil de seguir.

## Instalar VS Code

### Descargar

1. Ve a [code.visualstudio.com](https://code.visualstudio.com)
2. Haz clic en el boton grande de **Download**
3. Instalalo como cualquier otra aplicacion

Es gratuito y funciona en Mac, Windows y Linux.

### Primer inicio

Cuando abres VS Code por primera vez:
- Veras una pestaña de **Bienvenida** — puedes cerrarla
- La barra lateral izquierda tiene iconos para archivos, busqueda, extensiones, etc.
- La barra inferior muestra informacion util como el tipo de archivo actual

## La interfaz de un vistazo

```
┌──────────────────────────────────────────────┐
│  Barra de Menu (File, Edit, View...)         │
├────────┬─────────────────────────────────────┤
│        │                                     │
│  Barra │      Area del Editor                │
│  Late- │      (tus archivos se abren aqui)   │
│  ral   │                                     │
│  📁    │                                     │
│  🔍    │                                     │
│  🧩    │                                     │
│        │                                     │
├────────┴─────────────────────────────────────┤
│  Panel de Terminal (alternar con Ctrl+`)     │
└──────────────────────────────────────────────┘
```

### Los iconos de la barra lateral (de arriba a abajo)

| Icono | Nombre | Que hace |
|------|------|-------------|
| 📁 | Explorador | Navegar archivos y carpetas en tu proyecto |
| 🔍 | Busqueda | Encontrar texto en todos los archivos |
| 🔀 | Control de Codigo | Ver cambios en archivos (Git) |
| 🧩 | Extensiones | Instalar complementos como Claude Code |
| ▶️ | Ejecutar y Depurar | Ejecutar scripts (no lo necesitaras mucho) |

## Abrir un proyecto

### Opcion 1: Abrir una carpeta

1. Ve a **File > Open Folder** (o `Cmd+O` en Mac)
2. Selecciona la carpeta con tu proyecto
3. VS Code muestra todos los archivos en la barra lateral

### Opcion 2: Arrastrar y soltar

Arrastra una carpeta desde Finder/Explorador directamente a VS Code.

### Opcion 3: Desde la terminal

```bash
cd ~/Desktop/my-project
code .
```

El comando `code .` abre la carpeta actual en VS Code.

> **Consejo**: Si `code .` no funciona, abre VS Code, presiona `Cmd+Shift+P`, escribe "shell command", y selecciona **Install 'code' command in PATH**.

## Atajos de teclado esenciales

No necesitas memorizar todos estos. Empieza con los 5 principales.

### Los 5 atajos principales

| Atajo (Mac) | Atajo (Windows) | Que hace |
|----------------|--------------------|----|
| `Cmd+P` | `Ctrl+P` | **Apertura Rapida** — encontrar cualquier archivo por nombre |
| `Cmd+Shift+P` | `Ctrl+Shift+P` | **Paleta de Comandos** — buscar cualquier accion |
| `Cmd+F` | `Ctrl+F` | Buscar texto en el archivo actual |
| `Cmd+Shift+F` | `Ctrl+Shift+F` | Buscar texto en TODOS los archivos |
| `Cmd+S` | `Ctrl+S` | Guardar el archivo actual |


> **Consejo profesional**: La **Paleta de Comandos** (`Cmd+Shift+P`) es tu mejor amiga. Si no sabes como hacer algo, abrela y escribe lo que quieres. VS Code encontrara la accion por ti.

## Instalar la extension de Claude Code

Asi es como usas Claude Code dentro de VS Code en lugar de la terminal.

### Paso a paso

1. Haz clic en el icono de **Extensiones** en la barra lateral (🧩) o presiona `Cmd+Shift+X`
2. Busca **"Claude Code"**
3. Haz clic en **Install** en la de Anthropic
4. Despues de instalar, presiona `Cmd+Shift+P` y escribe **"Claude Code"**
5. Selecciona **Open in New Tab**

### Usar Claude Code en VS Code

Una vez que la extension esta abierta, obtienes:

- **Un panel de chat** donde hablas con Claude
- **Diffs en linea** — Claude muestra cambios en archivos lado a lado (lineas agregadas en verde, eliminadas en rojo)
- **Menciones con @** — escribe `@nombre-archivo` para referenciar archivos directamente
- **Historial de conversaciones** — tus sesiones se guardan

Funciona exactamente como la version de terminal, pero con una interfaz visual.

### Por que VS Code + Claude Code es genial para no desarrolladores

| Terminal | VS Code |
|----------|---------|
| Solo ves texto | Ves archivos, carpetas y cambios visualmente |
| Los cambios se describen en texto | Los cambios se muestran como diffs a color |
| Necesitas escribir comandos para abrir archivos | Haz clic para abrir cualquier archivo |
| Sin resaltado de sintaxis en la salida | El codigo esta colorizado y es facil de leer |

## Trabajar con archivos

### Crear un nuevo archivo

1. Haz clic derecho en la barra lateral del Explorador
2. Selecciona **New File**
3. Escribe el nombre del archivo y presiona Enter

O usa `Cmd+N` para un nuevo archivo sin titulo rapido.

### Editar archivos

- Haz clic en cualquier archivo en la barra lateral para abrirlo
- Haz tus cambios
- Presiona `Cmd+S` para guardar
- El punto en la pestaña significa **cambios sin guardar**

### Buscar en archivos

Presiona `Cmd+Shift+F` para abrir el panel de busqueda:

1. Escribe tu termino de busqueda
2. VS Code muestra cada coincidencia en todos los archivos
3. Haz clic en un resultado para saltar a ese archivo y linea

Esto es increiblemente util para encontrar cosas como:
- Donde aparece un texto especifico en tu sitio web
- Todas las menciones de un nombre de empresa, email o numero de telefono
- Donde esta implementada una funcionalidad especifica

## La terminal integrada

VS Code tiene una terminal integrada. Presiona `` Ctrl+` `` para alternarla.

Esto significa que puedes:
- Navegar archivos visualmente en la barra lateral
- Ejecutar comandos de terminal en la parte inferior
- Editar archivos en el area principal

Todo en una ventana. No necesitas cambiar entre aplicaciones.

## Configuraciones que vale la pena cambiar

Abre Configuracion con `Cmd+,` y busca estas:

| Configuracion | Valor recomendado | Por que |
|---------|-------------------|-----|
| Font Size | 14 o 16 | Mas legible |
| Word Wrap | On | Las lineas largas se ajustan en lugar de hacer scroll |
| Auto Save | afterDelay | Los archivos se guardan automaticamente |
| Theme | Tu preferencia | Prueba "Dark+" (predeterminado) o "GitHub Dark" |

## Extensiones que vale la pena instalar

Ademas de Claude Code, estas extensiones son utiles para no desarrolladores:

| Extension | Que hace |
|-----------|-------------|
| **Prettier** | Formatea automaticamente tus archivos para que se vean limpios |
| **Markdown Preview** | Vista previa de archivos .md como texto formateado |
| **GitLens** | Ver quien cambio que y cuando |

## Referencia rapida

| Quiero... | Como |
|-------------|-----|
| Abrir un proyecto | File > Open Folder |
| Encontrar un archivo | `Cmd+P` y escribir el nombre |
| Buscar texto en todos los archivos | `Cmd+Shift+F` |
| Abrir la terminal | `` Ctrl+` `` |
| Instalar una extension | Clic en 🧩, buscar, instalar |
| Ejecutar cualquier accion | `Cmd+Shift+P` (Paleta de Comandos) |
| Abrir Claude Code | `Cmd+Shift+P` > "Claude Code: Open" |

## Siguientes pasos

Ahora que tienes VS Code configurado:

- [Instala Claude Code](../00b-quickstart/README.es.md) y comienza tu primera sesion
- Intenta abrir un proyecto y pedirle a Claude que lo explique
- Usa `Cmd+Shift+F` para buscar algo, luego preguntale a Claude sobre lo que encontraste
