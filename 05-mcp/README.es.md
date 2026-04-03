# MCP (Model Context Protocol) -- Conectandote a tus Herramientas de Trabajo

## ¿Qué es MCP?

MCP (Model Context Protocol) es como Claude Code se conecta a herramientas y servicios externos que ya usas en el trabajo. Piensa en ello como darle a Claude un conjunto de "adaptadores" para que pueda leer tus mensajes de Slack, revisar tus tableros de proyectos, buscar documentos y más -- todo desde un solo lugar.

Sin MCP, Claude solo sabe lo que tu le dices. Con MCP, Claude puede obtener datos en vivo de tus herramientas y realizar acciones en tu nombre.

## Cómo funciona MCP

El concepto es simple:

1. Le dices a Claude Code a cuales herramientas conectarse (llamadas "servidores MCP")
2. Claude Code se conecta a esas herramientas
3. Ahora puedes hacerle preguntas a Claude que involucren tus datos reales

```
Tu  -->  Claude Code  -->  Servidor MCP  -->  Tu Herramienta (Slack, Notion, etc.)
                          (el adaptador)
```

Por ejemplo, después de conectar Slack, podrías decir: "Resume lo que paso en el canal #marketing hoy" -- y Claude obtendra los mensajes reales y los resumira.

## El ecosistema MCP

Claude Code puede conectarse a muchas herramientas de negocio a traves de MCP:

| Herramienta | Qué puede hacer Claude |
|-------------|----------------------|
| **Slack** | Leer canales, enviar mensajes, buscar conversaciones |
| **Google Docs** | Leer y editar documentos, acceder a Google Drive |
| **Notion** | Explorar paginas, buscar en tu workspace, leer bases de datos |
| **Asana** | Ver tareas, actualizar estado, crear nuevas tareas |
| **Jira** | Revisar issues, actualizar tickets, ver tableros de sprint |
| **Linear** | Rastrear issues, gestionar proyectos, ver carga de trabajo del equipo |
| **Google Calendar** | Revisar tu agenda, ver próximas reuniones |
| **Gmail** | Buscar correos, leer mensajes, redactar respuestas |

## Agregando un servidor MCP

Agregas herramientas a Claude Code usando el comando `claude mcp add`. Aqui hay ejemplos prácticos:

### Conectandose a Notion

```bash
claude mcp add --transport http notion https://mcp.notion.com/mcp
```

Después de ejecutar esto, Claude Code te guiara a traves de la autenticación. Una vez conectado, puedes preguntar cosas como:

- "Encuentra el plan de marketing Q3 en Notion"
- "¿Qué tareas tengo asignadas en Notion?"
- "Resume la página del roadmap del producto"

### Conectandose a Slack

```bash
claude mcp add --transport http slack https://mcp.slack.com/mcp
```

Ahora puedes preguntar:

- "¿Cuáles son los ultimos mensajes en #sales?"
- "Envia un mensaje a #team-updates diciendo que el informe está listo"
- "Busca en Slack conversaciones sobre el lanzamiento del producto"

### Conectandose a Linear

```bash
claude mcp add --transport http linear https://mcp.linear.app/mcp
```

Luego pregunta:

- "¿Qué issues tengo asignados en este sprint?"
- "Crea un reporte de bug para el problema de la página de login"
- "Muéstrame el estado del proyecto Alpha"

## Administrando tus conexiones

Una vez que tengas servidores MCP configurados, puedes administrarlos facilmente:

| Comando | Qué hace |
|---------|---------|
| `claude mcp list` | Ver todas tus herramientas conectadas |
| `claude mcp get notion` | Revisar detalles de una conexión específica |
| `claude mcp remove notion` | Desconectar una herramienta |
| `/mcp` (dentro de Claude Code) | Explorar y administrar conexiones interactivamente |

## Verificando tus conexiones

Dentro de Claude Code, escribe `/mcp` para ver todas tus herramientas conectadas y su estado. Esta es la forma más rápida de verificar que todo está funcionando.

## Usando multiples herramientas juntas

El verdadero poder de MCP es combinar herramientas. Por ejemplo:

```
Tu: "Revisa mi calendario para las reuniones de manana, encuentra los
     documentos de Notion relacionados con cada una, y publica un resumen
     de preparacion en #my-prep en Slack."
```

Claude:
1. Leera tu calendario via Google Calendar MCP
2. Buscara en Notion los documentos relevantes
3. Compondra y enviara un resumen a Slack

## Alcances de conexión

Tus conexiones MCP pueden almacenarse en diferentes niveles:

| Alcance | Quien puede usarlo | Como configurar |
|---------|-------------------|----------------|
| **Personal** (por defecto) | Solo tu | `claude mcp add ...` |
| **Compartido** | Todo tu equipo | Agregar a `.mcp.json` en una carpeta compartida |

Para herramientas personales, el valor por defecto está bien. Para herramientas de todo el equipo, consulta con tu lider de equipo sobre las configuraciones compartidas.

## Consejos para comenzar

- **Comienza con una herramienta.** Conecta la herramienta que más usas (Slack, Notion o tu rastreador de proyectos) y familiarizate antes de agregar más.
- **Pregunta naturalmente.** No necesitas sintaxis especial. Simplemente pidele a Claude lo que necesitas: "¿Cuáles son mis tickets abiertos en Jira?" funciona perfectamente.
- **Verifica el estado.** Si algo no funciona, escribe `/mcp` dentro de Claude Code para ver si la conexión está activa.
- **Manten las credenciales seguras.** Cuando una herramienta pida una API key o token, guardalo en una variable de entorno en lugar de escribirlo directamente en archivos de configuración.

## Solución de problemas

| Problema | Solución |
|----------|----------|
| "MCP server not found" | Vuelve a ejecutar el comando `claude mcp add` |
| "Authentication failed" | Verifica que tu API key o token siga siendo válido |
| La herramienta no responde | Escribe `/mcp` para verificar el estado de la conexión |
| "Connection timeout" | Verifica tu conexión a internet e intenta de nuevo |

## Ejercicio practico

> **[Ejercicio 11: Conectar Sistemas](../11-exercises/exercise-11-connect-systems/)** — Configura un servidor MCP real (filesystem, GitHub o base de datos) y construye un flujo de trabajo entre sistemas. Practicaras configuración de MCP, alcances de conexión y gestion de credenciales.
>
> **Tiempo:** 30 min | **Configuración:** Elige entre filesystem (sin API key), GitHub o base de datos

## Recursos adicionales

- [Documentación oficial de MCP](https://code.claude.com/docs/en/mcp)
- [Servidores MCP disponibles](https://github.com/modelcontextprotocol/servers)

---

*Parte de la serie de guias [Claude How To](../)*
