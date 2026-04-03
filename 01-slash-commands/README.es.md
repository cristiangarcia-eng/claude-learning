# Comandos Slash

## ¿Que Son los Comandos Slash?

Los comandos slash son atajos que escribes en Claude Code para controlar su comportamiento. Piensa en ellos como opciones de menu -- escribes `/` seguido de un nombre de comando, y Claude realiza una accion especifica.

No necesitas conocimientos tecnicos para usarlos. Si puedes escribir una barra diagonal, puedes usar comandos slash.

## Primeros Pasos

Abre Claude Code y escribe `/` para ver una lista de comandos disponibles. Empieza a escribir letras despues de la barra para filtrar la lista. Presiona Enter para ejecutar el que quieras.

## Comandos Esenciales para el Uso Diario

Estos son los comandos que usaras con mas frecuencia.

| Comando | Que Hace |
|---------|-------------|
| `/help` | Muestra una lista de todos los comandos disponibles y que hacen |
| `/clear` | Limpia la conversacion actual y empieza de cero |
| `/memory` | Abre tu archivo CLAUDE.md donde Claude almacena notas que debe recordar |
| `/init` | Crea un archivo CLAUDE.md para un nuevo proyecto para que Claude conozca el contexto |
| `/config` | Abre tu menu de configuracion |
| `/compact` | Resume la conversacion hasta el momento para liberar espacio |
| `/model` | Te permite cambiar entre diferentes modelos de Claude (Sonnet, Opus, Haiku) |

## Guia Comando por Comando

### /help -- Tu Punto de Partida

Cuando tengas dudas, escribe `/help`. Muestra cada comando disponible para ti, incluyendo cualquiera personalizado que tu equipo haya configurado.

### /clear -- Empezar de Cero

Usa `/clear` cuando quieras comenzar un nuevo tema. Limpia la conversacion para que Claude no se confunda con el contexto anterior. Alias: `/reset`, `/new`.

### /memory -- Enseñale a Claude Sobre Tu Trabajo

El comando `/memory` abre un archivo llamado CLAUDE.md. Todo lo que escribas aqui, Claude lo lee al inicio de cada conversacion. Cosas buenas para poner en tu archivo de memoria:

- Tu rol y en que trabajas
- Estilo o tono de escritura preferido
- Nombres de proyectos y que significan
- Terminologia especifica de tu empresa

**Ejemplo de archivo de memoria:**
```
I am a product manager at Acme Corp.
Our main product is called "Launchpad" -- a project management tool.
When I ask for summaries, keep them under 200 words.
I prefer bullet points over paragraphs.
```

### /init -- Configurar un Nuevo Proyecto

Cuando empiezas a trabajar en una nueva carpeta, ejecuta `/init` para crear un archivo CLAUDE.md. Claude te hara preguntas sobre el proyecto y generara un archivo de memoria inicial.

### /config -- Ajustar Tu Configuracion

Abre el panel de configuracion donde puedes cambiar preferencias como tu modelo predeterminado, permisos y opciones de visualizacion.

### /compact -- Liberar Espacio

Las conversaciones largas consumen la ventana de contexto de Claude (su memoria de trabajo). Cuando las cosas se alargan, ejecuta `/compact` para que Claude resuma la conversacion hasta el momento. Puedes agregar instrucciones de enfoque:

```
/compact focus on the Q3 marketing plan discussion
```

### /model -- Cambiar Modelos

Usa `/model` para elegir que version de Claude quieres:

| Modelo | Mejor Para |
|-------|----------|
| **Haiku** | Preguntas rapidas, consultas simples |
| **Sonnet** | Tareas cotidianas, buen balance de velocidad y calidad |
| **Opus** | Analisis complejo, documentos largos, escritura con matices |

## Mas Comandos Utiles

Mas alla de lo esencial, vale la pena conocer estos comandos.

| Comando | Que Hace |
|---------|-------------|
| `/cost` | Muestra cuantos tokens has usado en esta sesion |
| `/copy` | Copia la ultima respuesta de Claude a tu portapapeles |
| `/export` | Guarda la conversacion en un archivo |
| `/resume` | Retoma una conversacion anterior donde la dejaste |
| `/voice` | Activa pulsar-para-hablar para que puedas hablar en vez de escribir |
| `/rename` | Dale un nombre a tu sesion para encontrarla despues |
| `/branch` | Divide la conversacion en una nueva sesion para explorar una direccion diferente |
| `/context` | Muestra cuanta memoria de trabajo de Claude se ha usado |
| `/schedule` | Crea una tarea recurrente que se ejecuta en un horario |
| `/effort` | Establece cuanto esfuerzo de pensamiento pone Claude en las respuestas (low, medium, high) |
| `/plan` | Pide a Claude crear un plan antes de tomar accion |

## Ejemplos Practicos para No Desarrolladores

### Buscar en Archivos

Tienes una carpeta llena de reportes y necesitas encontrar informacion especifica:

```
Find all mentions of "Q3 revenue" in the files in this folder
```

Claude buscara en tus documentos y extraera las secciones relevantes.

### Obtener Resumenes

Recibiste un PDF largo o documento y necesitas los puntos clave:

```
Summarize the main findings from the attached report.
Focus on action items and deadlines.
```

Usa `/compact focus on action items` si la conversacion se alarga.

### Organizar Informacion

Necesitas convertir notas desordenadas en algo estructurado:

```
Here are my meeting notes from today. Please organize them into:
1. Decisions made
2. Action items with owners
3. Open questions
```

### Comparar Opciones

Estas evaluando proveedores o tomando una decision:

```
I have three vendor proposals in this folder.
Create a comparison table covering price, features, and timeline.
```

## Comandos Personalizados (Skills)

Tu equipo puede crear comandos slash personalizados adaptados a sus flujos de trabajo. Estos se llaman Skills y viven en una carpeta `.claude/skills/`. Por ejemplo, tu equipo podria configurar:

- `/meeting-notes` -- Formatea notas sin procesar en una plantilla estandar
- `/weekly-update` -- Genera un reporte de estado a partir de la actividad reciente
- `/brand-check` -- Revisa contenido contra tus lineamientos de marca

Para ver que comandos personalizados estan disponibles, escribe `/` y desplazate por la lista, o preguntale a Claude:

```
What skills are available?
```

Para detalles sobre como crear los tuyos, consulta la [Guia de Skills](../03-skills/README.es.md).

## Consejos

| Haz | Evita |
|----|-------|
| Usa `/clear` al cambiar de tema | Dejar que las conversaciones se alarguen demasiado sin compactar |
| Agrega tus preferencias a `/memory` | Re-explicar tu rol en cada conversacion |
| Usa `/compact` cuando Claude parezca olvidar contexto | Asumir que Claude recuerda sesiones anteriores |
| Prueba `/voice` para preguntas rapidas | Escribir pasajes largos cuando podrias dictarlos |
| Usa `/export` para guardar conversaciones importantes | Perder una conversacion util al cerrar la ventana |

## Solucion de Problemas

**Claude no reconoce un comando**: Asegurate de escribir el `/` al principio. Revisa la ortografia. Ejecuta `/help` para ver la lista completa.

**Claude olvido de que estabamos hablando**: La conversacion puede estar muy larga. Ejecuta `/compact` para resumir y liberar espacio.

**Quiero que Claude recuerde algo permanentemente**: Usa `/memory` para agregarlo a tu archivo CLAUDE.md. Todo lo que este ahi persiste entre sesiones.

**Faltan comandos personalizados**: Pregunta a tu equipo si han configurado skills en el proyecto. Verifica que estes en la carpeta correcta del proyecto.

## Guias Relacionadas

- [Memoria](../02-memory/README.es.md) -- Contexto persistente con CLAUDE.md
- [Skills](../03-skills/README.es.md) -- Crear comandos personalizados reutilizables
- [Subagentes](../04-subagents/README.es.md) -- Asistentes de IA especializados para tareas complejas

## Recursos Adicionales

- [Documentacion Oficial del Modo Interactivo](https://code.claude.com/docs/en/interactive-mode)
- [Documentacion Oficial de Skills](https://code.claude.com/docs/en/skills)

---

*Parte de la serie de guias [Claude How To](../)*
