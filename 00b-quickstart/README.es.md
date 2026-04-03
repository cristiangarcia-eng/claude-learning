# Inicio Rápido: Tu Primera Sesion

## Lo que necesitas

Antes de comenzar, asegúrate de tener:

- Una terminal abierta (consulta [Conceptos Básicos de la Terminal](../00-terminal-basics/README.es.md) si nunca has usado una)
- Una [suscripcion a Claude](https://claude.com/pricing) (Pro, Max o Teams)

## Paso 1: Instalar Claude Code

Abre tu terminal y pega este comando:

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

Eso es todo. Se instala automaticamente y se mantiene actualizado.

> **Otras opciones**: Tambien puedes usar la [aplicacion de escritorio](https://claude.com/download), la [extensión de VS Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code), o [Claude Code en la web](https://claude.ai/code) — sin necesidad de terminal.

## Paso 2: Iniciar Claude Code

Navega a cualquier carpeta y escribe:

```bash
claude
```

La primera vez, se te pedirá iniciar sesión. Sigue las instrucciones — se abrira tu navegador para autenticarte.

Una vez que inicies sesión, verás una pantalla de bienvenida con un cursor esperando tu entrada. ¡Ya estas dentro!

## Paso 3: Haz tu primera pregunta

Solo escribe en español normal. Prueba una de estas:

```
¿que hace este proyecto?
```

```
¿que archivos hay en esta carpeta?
```

```
explica que tecnologias usa este proyecto
```

Claude leera tus archivos y te dará un resumen. No se necesita configuración — simplemente funciona.

> **Le hablas a Claude como a un colega.** Sin sintaxis especial, sin lenguaje de programación. Solo describe lo que quieres.

## Paso 4: Haz tu primer cambio

Pidele a Claude que haga algo:

```
crea un archivo llamado notes.md con un resumen de este proyecto
```

Claude:
1. Pensara en que escribir
2. Te mostrara los cambios propuestos
3. **Te pedirá permiso** antes de hacer el cambio
4. Creara el archivo

> **Claude siempre pide permiso antes de cambiar cosas.** Tu mantienes el control. Nada sucede sin tu aprobacion.

## Paso 5: Usa Git con Claude

Si tu proyecto usa Git (la mayoría lo hace), Claude puede ayudar:

```
¿que archivos han cambiado recientemente?
```

```
haz commit de mis cambios con un mensaje descriptivo
```

```
muestrame los ultimos 5 cambios hechos a este proyecto
```

¿No sabes que es Git? Es una herramienta que rastrea cada cambio en un proyecto, como "Control de Cambios" en Google Docs pero para todos tus archivos.

## Paso 6: Prueba tareas comunes

Estas son cosas que personas no tecnicas comúnmente le piden a Claude:

### Entender un codebase
```
explica este proyecto como si fuera un product manager
```

```
¿cuales son las funcionalidades principales de esta aplicacion?
```

```
dibuja un diagrama de como se conectan las diferentes partes
```

### Encontrar información
```
¿donde esta definida la pagina de precios?
```

```
encuentra todo el texto que los usuarios ven en la pagina de checkout
```

```
¿que eventos de analytics se estan rastreando?
```

### Hacer cambios simples
```
cambia el nombre de la empresa de "Acme" a "Nova" en todas partes
```

```
actualiza el año de copyright a 2026 en el footer
```

```
agrega una nueva entrada de FAQ sobre la politica de reembolsos
```

### Analizar datos
```
lee el archivo CSV en /data y resume las metricas clave
```

```
¿cuantos usuarios se registraron el mes pasado segun los logs?
```

## Comandos esenciales para recordar

| Qué escribir | Qué hace |
|-------------|-------------|
| `claude` | Iniciar una nueva sesión |
| `claude -c` | Continuar tu última conversación |
| `claude -r` | Reanudar una conversación anterior |
| `/help` | Ver todos los comandos disponibles |
| `/clear` | Empezar de cero (limpiar conversación) |
| `Esc` | Detener a Claude a mitad de una acción |
| `exit` o `Ctrl+C` | Salir de Claude Code |

## ¿Qué sigue?

Ahora que tuviste tu primera sesión, aprende:

- [Cómo funciona Claude Code](../00c-how-it-works/README.es.md) — entiende que sucede detrás de escena
- [Mejores practicas](../00d-best-practices/README.es.md) — obtén mejores resultados de tus conversaciones
- [Flujos de trabajo prácticos](../00e-workflows/README.es.md) — tareas reales para PMs, diseñadores y ventas
