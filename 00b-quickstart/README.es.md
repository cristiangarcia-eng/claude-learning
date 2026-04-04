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

## ¿Qué sigue?

