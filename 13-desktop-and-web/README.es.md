# App de Escritorio y Sesiones Web

Usa Claude Code más allá de la terminal — en una app independiente o directamente en tu navegador.

## App de Escritorio

Una app independiente para macOS y Windows con interfaz visual.

**Descargar:** [claude.com/download](https://claude.com/download)

### Qué agrega sobre la terminal

| Funcionalidad | Terminal | App de Escritorio |
|---------|----------|-------------|
| Ver cambios en archivos | Diffs de texto | Diffs visuales lado a lado |
| Múltiples sesiones | Múltiples ventanas de terminal | Pestañas en una ventana |
| Tareas programadas | Manual | Programador integrado |
| Conectores | Configuración manual | Slack, Linear, Notion, Asana, Calendar |

### Transferir una sesión desde la terminal

Si empezaste en la terminal y quieres cambiar a la App de Escritorio:

```
/desktop
```

Tu conversación completa y contexto se transfieren.

## Sesiones Web

Ejecuta Claude Code en tu navegador en [claude.ai/code](https://claude.ai/code) — sin instalación necesaria.

### Cuándo usar la web

- Estás en una computadora sin Claude Code instalado
- Quieres iniciar una tarea larga y revisarla después
- Necesitas trabajar desde tu teléfono o tablet

### Iniciar una sesión web desde la terminal

```bash
claude --remote "Analiza los datos de ventas de Q3 y crea un resumen"
```

Claude empieza a trabajar en una máquina en la nube. Revisa el progreso en claude.ai/code.

### Mover entre web y terminal

```bash
claude --teleport
```

Esto trae una sesión web a tu terminal local — útil cuando empezaste una tarea en la web y quieres continuar localmente.

## Tareas Programadas

Configura tareas recurrentes que se ejecutan automáticamente:

```
/schedule
```

Ejemplos de tareas programadas:
- "Cada lunes por la mañana, resume los cambios de la semana pasada"
- "Cada día a las 9am, revisa si hay nuevo feedback de clientes"
- "Cada viernes, genera un informe de estado semanal"

Las tareas se ejecutan en la infraestructura en la nube de Anthropic — funcionan incluso cuando tu computadora está apagada.

> **Consejo**: La App de Escritorio es la mejor experiencia para no desarrolladores. Los diffs visuales hacen mucho más fácil revisar cambios que leer texto en la terminal.

