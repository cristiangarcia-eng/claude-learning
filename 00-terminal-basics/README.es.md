# Conceptos Básicos de la Terminal

## ¿Qué es una terminal?

Una terminal (también llamada "línea de comandos" o "shell") es una forma basada en texto para comunicarte con tu computadora. En lugar de hacer clic en botones e iconos, escribes comandos.

Piensa en ello como enviarle mensajes de texto a tu computadora en vez de tocar aplicaciones.

> No necesitas convertirte en un experto en la terminal. Solo necesitas saber lo suficiente para iniciar Claude Code y navegar a tus archivos.

## Abrir la terminal

### En Mac

1. Presiona **Cmd + Espacio** para abrir Spotlight
2. Escribe **Terminal**
3. Presiona **Enter**

Verás una ventana con un cursor parpadeante. Esa es tu terminal.

### En Windows

1. Presiona **Win + R**
2. Escribe **cmd** o **powershell**
3. Presiona **Enter**

O busca "Terminal" en el menú Inicio.

## Tus primeros comandos

Cuando abres la terminal, estas "dentro" de una carpeta en tu computadora — igual que tener una ventana de Finder o Explorador abierta. Estos son los comandos básicos que necesitas:

### Ver donde estas: `pwd`

```bash
pwd
```

Esto muestra la **carpeta actual** en la que te encuentras. Por ejemplo:

```
/Users/maria/Documents
```

Piensa en ello como "¿Dónde estoy ahora mismo?"

### Ver que hay en está carpeta: `ls`

```bash
ls
```

Esto **lista** todos los archivos y carpetas en tu ubicación actual. Como abrir una carpeta en Finder.

### Moverte a otra carpeta: `cd`

```bash
cd Documents
```

Esto **cambia de directorio** — te mueve a la carpeta `Documents`.

Algunos patrones útiles:

| Comando | Qué hace |
|---------|-------------|
| `cd Documents` | Entrar a la carpeta Documents |
| `cd ..` | Regresar un nivel (a la carpeta padre) |
| `cd ~` | Ir a tu carpeta de inicio |
| `cd ~/Desktop` | Ir a tu Escritorio |

### Crear una carpeta: `mkdir`

```bash
mkdir my-project
```

Esto **crea un directorio** (carpeta) llamado `my-project`.

## Un flujo de trabajo típico

Así se ve una sesión real. Abres la terminal y:

```bash
# Ver donde estas
pwd
# /Users/maria

# Ir a tu Escritorio
cd ~/Desktop

# Crear una nueva carpeta para tu proyecto
mkdir my-first-project

# Entrar a esa carpeta
cd my-first-project

# ¡Ahora estas listo para iniciar Claude Code!
claude
```

## Errores comunes (y como solucionarlos)

### "command not found"

```
zsh: command not found: claud
```

Probablemente tienes un **error de escritura**. Revisa la ortografia. Es `claude`, no `claud`.

### "No such file or directory"

```
cd: no such file or directory: Docments
```

El nombre de la carpeta está mal. Usa `ls` para ver los nombres reales de las carpetas, luego intenta de nuevo.

### "Permission denied"

Intenta agregar `sudo` antes del comando (te pedirá tu contraseña):

```bash
sudo your-command-here
```

### Estoy perdido — ¿donde estoy?

Solo escribe `pwd` para ver tu ubicación actual. Siempre puedes volver al inicio con `cd ~`.

## Atajos de teclado que ahorran tiempo

| Atajo | Qué hace |
|----------|-------------|
| **Tab** | Autocompleta nombres de archivos y carpetas |
| **Flecha arriba** | Muestra tu comando anterior |
| **Ctrl + C** | Cancela el comando actual |
| **Ctrl + L** | Limpia la pantalla |

> **Consejo profesional**: Empieza a escribir un nombre de carpeta y presiona **Tab** — la terminal lo completará por ti. ¡No necesitas escribir el nombre completo!

## Eso es todo lo que necesitas

En serio — `pwd`, `ls`, `cd` y `mkdir` son los unicos comandos que necesitas para empezar con Claude Code. Una vez que Claude está corriendo, le hablas en español simple, no con comandos de terminal.

**Siguiente paso**: [Instala Claude Code y comienza tu primera sesión →](../00b-quickstart/README.es.md)
