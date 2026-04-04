# MCP — Conectando Claude a Datos Externos

## ¿Qué es MCP?

MCP (Model Context Protocol) es cómo Claude Code se conecta al mundo exterior. Sin MCP, Claude solo sabe lo que hay en los archivos de tu proyecto. Con MCP, Claude puede leer páginas web, acceder a tus mensajes de Slack, revisar tus Google Docs, y mucho más.

Piensa en los servidores MCP como "adaptadores" — cada uno le da a Claude acceso a una herramienta o fuente de datos específica.

```
Tú  →  Claude Code  →  Servidor MCP  →  El mundo exterior
                       (el adaptador)
```

## Pruébalo: Instala el Fetch MCP

La mejor forma de entender MCP es usar uno. **Fetch** es el servidor MCP más simple — le permite a Claude leer cualquier página web. Sin API key, sin cuenta, sin configuración.

### Paso 1: Instálalo

En tu terminal de VS Code (fuera de Claude Code), ejecuta:

```bash
claude mcp add fetch -s user -- npx -y @anthropic-ai/fetch-mcp
```

Esto le dice a Claude Code: "Quiero que puedas leer páginas web."

### Paso 2: Úsalo con tu proyecto de Nike

Abre Claude Code en tu carpeta `nike-analysis` y prueba:

> `Ve a adidas.com y analiza su línea de zapatillas de running. Compara su posicionamiento con las fortalezas de Nike de nuestro análisis competitivo.`

Claude buscará el sitio web de Adidas, lo leerá, y lo comparará con tus archivos locales de Nike. Este es el poder de MCP — combinar datos externos en vivo con tu proyecto.

Más cosas que puedes hacer con Fetch:

> `Lee https://www.nike.com/sustainability y agrega una sección de sostenibilidad a nuestro análisis competitivo basándote en lo que encuentres`

> `Revisa qué está haciendo New Balance en newbalance.com y actualiza la sección de amenazas`

## El ecosistema MCP

Fetch es solo el principio. Hay servidores MCP para la mayoría de herramientas de trabajo:

| Herramienta | Qué puede hacer Claude |
|------|-------------------|
| **Fetch** | Leer cualquier página web |
| **Slack** | Leer canales, enviar mensajes, buscar conversaciones |
| **Google Docs** | Leer y editar documentos |
| **Notion** | Navegar páginas, buscar en tu workspace |
| **Linear** | Rastrear issues, gestionar proyectos |
| **Gmail** | Buscar emails, leer mensajes, redactar respuestas |

Agregas cualquier servidor MCP de la misma forma — con `claude mcp add`. Cada herramienta puede necesitar una API key o autenticación.

## Gestionar tus conexiones

| Comando | Qué hace |
|---------|----------|
| `claude mcp list` | Ver todos los servidores MCP conectados |
| `claude mcp remove fetch` | Desconectar un servidor |
| `/mcp` (dentro de Claude Code) | Navegar y gestionar conexiones interactivamente |

## Importante: Los MCPs consumen tu ventana de contexto

Cada servidor MCP que tienes conectado ocupa espacio en la ventana de contexto de Claude — incluso si no lo estás usando. Claude necesita "conocer" las capacidades de cada servidor al inicio de cada conversación.

**Esto significa:**

- Si tienes 10 servidores MCP conectados pero solo usas 2, los otros 8 están desperdiciando espacio de contexto
- Menos espacio de contexto = Claude olvida cosas más rápido y produce peores resultados
- Más servidores MCP = inicio más lento en cada conversación

### Cómo gestionar esto

**Solo mantén conectados los MCPs que estés usando activamente.** Elimina el resto:

```bash
claude mcp list          # ver qué está conectado
claude mcp remove slack  # desconectar lo que no estés usando
```

Siempre puedes reconectarlos después cuando los necesites. Piensa en ello como pestañas del navegador — cierra las que no estés usando.

> **Regla general:** 2-3 servidores MCP conectados a la vez es lo ideal. Más de 5 y empezarás a notar respuestas más lentas y menos enfocadas de Claude.

## Consejos

- **Empieza con Fetch** — es gratis, no requiere nada, y es inmediatamente útil
- **Agrega uno a la vez** — conecta un nuevo MCP, pruébalo, asegúrate de que funciona antes de agregar el siguiente
- **Desconecta cuando termines** — elimina MCPs que no estés usando activamente para ahorrar espacio de contexto
- **Revisa con `/mcp`** — escribe esto dentro de Claude Code para ver qué está conectado y si funciona

