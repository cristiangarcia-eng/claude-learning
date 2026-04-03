# Configurar Claude Code

## Lo que necesitas

Antes de comenzar, asegúrate de tener:

- **VS Code abierto** con una carpeta de proyecto (como la carpeta `nike-analysis` de las lecciones anteriores)
- Una [suscripción a Claude](https://claude.com/pricing) (Pro, Max o Teams)

## Paso 1: Instalar Claude Code

Abre la terminal dentro de VS Code (presiona `` Ctrl+` ``) y pega este comando:

**Mac / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

Eso es todo. Se instala automáticamente y se mantiene actualizado.

## Paso 2: Iniciar Claude Code

En la misma terminal de VS Code, escribe:

```bash
claude
```

La primera vez, se te pedirá iniciar sesión. Sigue las instrucciones — se abrirá tu navegador para autenticarte.

Una vez que inicies sesión, verás una pantalla de bienvenida con un cursor esperando tu entrada. ¡Ya estás dentro!

## Paso 3: Haz tu primera pregunta

Solo escribe en español normal. Prueba una de estas:

```
¿qué hace este proyecto?
```

```
¿qué archivos hay en esta carpeta?
```

```
explica qué tecnologías usa este proyecto
```

Claude leerá tus archivos y te dará un resumen. No se necesita configuración — simplemente funciona.

> **Le hablas a Claude como a un colega.** Sin sintaxis especial, sin lenguaje de programación. Solo describe lo que quieres.

## Paso 4: Haz tu primer cambio

Pídele a Claude que haga algo:

```
crea un archivo llamado resumen.md con un resumen de este proyecto
```

Claude:
1. Pensará en qué escribir
2. Te mostrará los cambios propuestos
3. **Te pedirá permiso** antes de hacer el cambio
4. Creará el archivo

Verás el nuevo archivo aparecer en la barra lateral de VS Code inmediatamente.

> **Claude siempre pide permiso antes de cambiar cosas.** Tú mantienes el control. Nada sucede sin tu aprobación.

## Paso 5: Prueba tareas comunes

Estas son cosas que personas no técnicas comúnmente le piden a Claude:

### Entender un proyecto
```
explica este proyecto como si fuera un product manager
```

```
¿cuáles son los archivos principales y qué hace cada uno?
```

### Encontrar información
```
¿cuáles son las mayores amenazas de Nike según el análisis?
```

```
resume los datos de ventas por región
```

### Hacer cambios
```
agrega una sección sobre la estrategia digital de Nike al análisis competitivo
```

```
crea un resumen de los ingresos trimestrales listo para gráficos
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

**Siguiente paso**: [Entiende cómo funciona Claude Code detrás de escena →](../00c-how-it-works/README.es.md)
