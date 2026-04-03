# Conceptos Básicos de la Terminal

## ¿Qué es una terminal?

Una terminal (también llamada "línea de comandos" o "shell") es una forma basada en texto para comunicarte con tu computadora. En lugar de hacer clic en botones e iconos, escribes comandos.

Piensa en ello como enviarle mensajes de texto a tu computadora en vez de tocar aplicaciones.

> No necesitas convertirte en un experto en la terminal. Solo necesitas 4 comandos para navegar tus archivos.

## Abrir la terminal en VS Code

Ya tienes VS Code instalado de la lección anterior. La terminal está integrada:

1. Abre **VS Code**
2. Presiona `` Ctrl+` `` (la tecla de acento grave, junto al número 1)
3. Un panel de terminal aparece en la parte inferior

Eso es todo — verás un cursor parpadeante listo para comandos. No necesitas abrir una aplicación separada.

## Tus primeros comandos

Cuando abres la terminal, estás "dentro" de una carpeta en tu computadora — igual que tener una ventana de Finder o Explorador abierta. Estos son los comandos básicos que necesitas:

### Ver dónde estás: `pwd`

```bash
pwd
```

Esto muestra la **carpeta actual** en la que te encuentras. Por ejemplo:

```
/Users/maria/Documents
```

Piensa en ello como "¿Dónde estoy ahora mismo?"

### Ver qué hay en esta carpeta: `ls`

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

Así se ve una sesión real. Abre la terminal en VS Code (`` Ctrl+` ``) y prueba:

```bash
# Ver dónde estás
pwd
# /Users/maria

# Ir a tu Escritorio
cd ~/Desktop

# Crear una nueva carpeta para tu proyecto
mkdir mi-primer-proyecto

# Entrar a esa carpeta
cd mi-primer-proyecto

# Ver qué hay dentro (nada todavía — ¡es nueva!)
ls
```

## Errores comunes (y cómo solucionarlos)

### "No such file or directory"

```
cd: no such file or directory: Docments
```

El nombre de la carpeta está mal. Usa `ls` para ver los nombres reales de las carpetas, luego intenta de nuevo.

### "Permission denied"

Intenta agregar `sudo` antes del comando (te pedirá tu contraseña):

```bash
sudo tu-comando-aqui
```

### Estoy perdido — ¿dónde estoy?

Solo escribe `pwd` para ver tu ubicación actual. Siempre puedes volver al inicio con `cd ~`.

## Atajos de teclado que ahorran tiempo

| Atajo | Qué hace |
|----------|-------------|
| **Tab** | Autocompleta nombres de archivos y carpetas |
| **Flecha arriba** | Muestra tu comando anterior |
| **Ctrl + C** | Cancela el comando actual |
| **Ctrl + L** | Limpia la pantalla |

> **Consejo**: Empieza a escribir un nombre de carpeta y presiona **Tab** — la terminal lo completará por ti. ¡No necesitas escribir el nombre completo!

## Eso es todo lo que necesitas

En serio — `pwd`, `ls`, `cd` y `mkdir` son los únicos comandos que necesitarás. Una vez que Claude Code esté corriendo, le hablas en español simple, no con comandos de terminal.

**Siguiente paso**: [Configura la entrada por voz para trabajar sin escribir →](../00g-voice-input/README.es.md)
