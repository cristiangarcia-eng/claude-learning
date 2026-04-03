# Inicio Rapido: Tu Primera Sesion

## Lo que necesitas

Antes de comenzar, asegurate de tener:

- Una terminal abierta (consulta [Conceptos Basicos de la Terminal](../00-terminal-basics/README.es.md) si nunca has usado una)
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

> **Otras opciones**: Tambien puedes usar la [aplicacion de escritorio](https://claude.com/download), la [extension de VS Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code), o [Claude Code en la web](https://claude.ai/code) — sin necesidad de terminal.

## Paso 2: Iniciar Claude Code

Navega a cualquier carpeta y escribe:

```bash
claude
```

La primera vez, se te pedira iniciar sesion. Sigue las instrucciones — se abrira tu navegador para autenticarte.

Una vez que inicies sesion, veras una pantalla de bienvenida con un cursor esperando tu entrada. ¡Ya estas dentro!

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

Claude leera tus archivos y te dara un resumen. No se necesita configuracion — simplemente funciona.

> **Le hablas a Claude como a un colega.** Sin sintaxis especial, sin lenguaje de programacion. Solo describe lo que quieres.

## Paso 4: Haz tu primer cambio

Pidele a Claude que haga algo:

```
crea un archivo llamado notes.md con un resumen de este proyecto
```

Claude:
1. Pensara en que escribir
2. Te mostrara los cambios propuestos
3. **Te pedira permiso** antes de hacer el cambio
4. Creara el archivo

> **Claude siempre pide permiso antes de cambiar cosas.** Tu mantienes el control. Nada sucede sin tu aprobacion.

## Paso 5: Usa Git con Claude

Si tu proyecto usa Git (la mayoria lo hace), Claude puede ayudar:

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

Estas son cosas que personas no tecnicas comunmente le piden a Claude:

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

### Encontrar informacion
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

| Que escribir | Que hace |
|-------------|-------------|
| `claude` | Iniciar una nueva sesion |
| `claude -c` | Continuar tu ultima conversacion |
| `claude -r` | Reanudar una conversacion anterior |
| `/help` | Ver todos los comandos disponibles |
| `/clear` | Empezar de cero (limpiar conversacion) |
| `Esc` | Detener a Claude a mitad de una accion |
| `exit` o `Ctrl+C` | Salir de Claude Code |

## ¿Que sigue?

Ahora que tuviste tu primera sesion, aprende:

- [Como funciona Claude Code](../00c-how-it-works/README.es.md) — entiende que sucede detras de escena
- [Mejores practicas](../00d-best-practices/README.es.md) — obtén mejores resultados de tus conversaciones
- [Flujos de trabajo practicos](../00e-workflows/README.es.md) — tareas reales para PMs, diseñadores y ventas
