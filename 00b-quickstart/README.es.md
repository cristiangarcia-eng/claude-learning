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

Una vez que inicies sesión, verás una pantalla de bienvenida con un cursor esperando tu entrada. ¡Ya estás dentro!

## Paso 3: Haz tu primera pregunta

¿Recuerdas los archivos de Nike que exploraste en VS Code? Ahora preguntémosle a Claude sobre ellos. Solo escribe en español normal:

```
resume el análisis competitivo
```

```
¿cuáles son las principales fortalezas y amenazas de Nike?
```

```
analiza los datos de ventas y dime qué región creció más
```

Claude leerá los archivos y te dará una respuesta detallada. No se necesita configuración — simplemente funciona.

> **Le hablas a Claude como a un colega.** Sin sintaxis especial, sin lenguaje de programación. Solo describe lo que quieres.

## Paso 4: Haz tu primer cambio

Ahora pídele a Claude que modifique uno de los archivos:

```
agrega una sección sobre la estrategia digital de Nike al análisis competitivo
```

Claude:
1. Pensará en qué escribir
2. Te mostrará los cambios propuestos
3. **Te pedirá permiso** antes de hacer el cambio
4. Editará el archivo

Verás los cambios aparecer en VS Code inmediatamente — el archivo se actualiza en tiempo real.

> **Claude siempre pide permiso antes de cambiar cosas.** Tú mantienes el control. Nada sucede sin tu aprobación.

## Paso 5: Prueba más tareas

Aquí hay más cosas que puedes pedirle a Claude sobre el proyecto de Nike:

### Analizar datos
```
lee el CSV de ventas y crea una tabla resumen por región con ingresos totales y crecimiento promedio
```

```
¿qué trimestre tuvo el mejor rendimiento general?
```

### Extraer insights
```
basándote en las notas de reunión y el análisis competitivo, ¿qué debería priorizar Nike el próximo trimestre?
```

```
escribe 3 puntos clave que pueda compartir con mi equipo sobre los mayores riesgos de Nike
```

### Crear contenido nuevo
```
crea un resumen ejecutivo de una página combinando el análisis competitivo y los datos de ventas
```

```
redacta un email para el equipo resumiendo los hallazgos clave del análisis de Nike
```

## Comandos esenciales para recordar

| Qué escribir | Qué hace |
|-------------|-------------|
| `claude` | Iniciar una nueva sesión |
| `claude -c` | Continuar tu última conversación |
| `/help` | Ver todos los comandos disponibles |
| `/clear` | Empezar de cero (limpiar conversación) |
| `Esc` | Detener a Claude a mitad de una acción |
| `exit` o `Ctrl+C` | Salir de Claude Code |

## ¿Qué sigue?

**Siguiente paso**: [Entiende cómo funciona Claude Code detrás de escena →](../00c-how-it-works/README.es.md)
