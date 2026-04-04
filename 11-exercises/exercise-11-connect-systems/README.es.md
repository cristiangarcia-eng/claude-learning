# Ejercicio 11: Conectar sistemas con MCP

**Tiempo:** 30 minutos | **Nivel:** Avanzado
**Módulo:** [05-mcp](../../05-mcp/) — Conectar Claude Code a datos externos
**Habilidad:** Configurar el servidor Fetch MCP y combinar datos web en vivo con archivos locales

## Objetivo

Instalarás el servidor Fetch MCP (el mismo que se enseña en la lección de MCP), lo usarás para obtener información de la competencia desde la web y lo combinarás con tus archivos locales de análisis competitivo de Nike para producir un informe actualizado.

**Lo que aprenderás:**
- Cómo instalar y configurar el servidor Fetch MCP
- Cómo verificar que una conexión MCP está funcionando
- Cómo usar Fetch MCP para leer páginas web en vivo
- Cómo combinar datos externos de la web con archivos locales del proyecto
- Cómo funciona la configuración MCP a nivel de proyecto vs. a nivel de usuario

## Escenario

Estás en el equipo de inteligencia competitiva de Nike. Tienes un archivo local con tu análisis competitivo más reciente, pero tiene algunos meses de antigüedad. Tu gerente quiere una vista actualizada que incluya lo que los competidores están promocionando actualmente en sus sitios web. Usarás Fetch MCP para obtener datos en vivo de los competidores y combinarlos con tu análisis local existente.

## Lo que tienes

La carpeta de este ejercicio contiene:
- `nike-competitive-snapshot.md` — tu análisis competitivo existente (datos locales)
- `competitor-urls.md` — una lista de páginas de competidores para consultar

## Configuración

1. Navega a la carpeta de este ejercicio:
   ```
   cd 11-exercises/exercise-11-connect-systems
   ```
2. Lee ambos archivos para entender con qué estás empezando.

## Tu tarea

### Parte 1: Instalar el servidor Fetch MCP

Esta es la misma configuración de la [lección de MCP](../../05-mcp/). Si ya tienes Fetch instalado, ve directamente a la Parte 2.

1. **Instala Fetch MCP.** En tu terminal (fuera de Claude Code), ejecuta:
   ```bash
   claude mcp add fetch -s user -- npx -y @anthropic-ai/fetch-mcp
   ```

   Esto le dice a Claude Code: "Quiero que puedas leer páginas web." La bandera `-s user` hace que esté disponible en todos tus proyectos, no solo en este.

2. **Reinicia Claude Code** para que detecte el nuevo servidor MCP. Cierra tu sesión actual y abre una nueva.

### Parte 2: Verificar la conexión

3. **Comprueba que Fetch MCP esté activo.** Dentro de Claude Code, escribe:
   ```
   /mcp
   ```
   Deberías ver `fetch` listado como un servidor conectado. Si muestra un error, regresa al Paso 1 y asegúrate de que el comando de instalación se ejecutó sin problemas.

4. **Haz una prueba rápida** para confirmar que funciona:
   ```
   Usa Fetch MCP para leer https://example.com y dime
   qué encuentras en la página.
   ```
   Si Claude lee la página exitosamente y describe su contenido, tu MCP está funcionando.

### Parte 3: Obtener datos de competidores y combinarlos con el análisis local

5. **Consulta una página de un competidor y compara.** Pídele a Claude:
   ```
   Lee nuestro snapshot competitivo local en nike-competitive-snapshot.md.
   Luego usa Fetch para ir a nike.com/sustainability y leer lo que Nike
   está diciendo actualmente sobre sostenibilidad. Compara lo que dice su
   sitio web ahora vs. lo que tiene nuestro snapshot. Anota cualquier
   diferencia o actualización. Guarda la comparación como
   sustainability-update.md
   ```

6. **Revisa otro competidor.** Prueba:
   ```
   Usa Fetch para leer adidas.com y observar su línea actual de zapatillas
   de running. Compara su posicionamiento con las fortalezas y debilidades
   en nuestro nike-competitive-snapshot.md. ¿Qué ha cambiado desde nuestro
   último análisis? Guarda como competitor-update-adidas.md
   ```

7. **Crea un informe actualizado combinado:**
   ```
   Usando nuestro nike-competitive-snapshot.md original más los dos archivos
   de actualización que acabas de crear, escribe un análisis competitivo
   actualizado que combine los datos locales con los datos frescos de la web.
   Marca claramente qué información proviene de nuestros archivos existentes
   vs. cuál proviene de consultas web en vivo. Guarda como
   updated-competitive-analysis.md
   ```

### Parte 4: Entender los alcances de configuración MCP

8. **Aprende dónde vive tu configuración.** Pídele a Claude:
   ```
   Explica la diferencia entre la configuración MCP a nivel de proyecto
   (.mcp.json en una carpeta de proyecto) y la configuración a nivel de
   usuario (~/.claude.json). ¿Cuál usamos para Fetch y por qué?
   ```

9. **Revisa tu configuración:**
   ```bash
   claude mcp list
   ```
   Esto muestra todas tus conexiones MCP activas y si son a nivel de proyecto o a nivel de usuario.

## Consejos

- **Fetch no puede leer todos los sitios web.** Algunos sitios bloquean el acceso automatizado. Si una URL no funciona, prueba con una página diferente del mismo sitio o con otro competidor.
- **Los datos web no tienen estructura definida.** Cuando Claude lee una página web, obtiene todo el contenido de texto. Pídele a Claude que se enfoque en secciones específicas (precios, descripciones de productos, declaraciones de sostenibilidad) en lugar de resumir la página completa.
- **Menos es más con los MCPs.** Como se cubrió en la lección, mantén solo 2-3 servidores MCP conectados a la vez. Fetch solo es suficiente para este ejercicio.

## Conexión con el Módulo 05 (MCP)

| Concepto de MCP | Cómo lo usas aquí |
|----------------|-------------------|
| **`claude mcp add`** | Instalar el servidor Fetch MCP |
| **Alcance `-s user`** | Hacer que Fetch esté disponible en todos los proyectos |
| **Verificación de estado `/mcp`** | Verificar que tu conexión esté activa |
| **Fetch MCP** | Leer páginas web de competidores en vivo |
| **Combinar fuentes** | Fusionar datos web con archivos locales |
| **Alcances de conexión** | Entender configuración a nivel de proyecto vs. usuario |

## Criterios de éxito

- [ ] Fetch MCP está instalado y `/mcp` lo muestra como activo
- [ ] Usaste Fetch exitosamente para leer al menos una página web en vivo
- [ ] Combinaste datos web con tu `nike-competitive-snapshot.md` local
- [ ] Produjiste un análisis competitivo actualizado con información claramente identificada por fuente
- [ ] Entiendes la diferencia entre configuración MCP a nivel de proyecto y a nivel de usuario

## Lo que aprendiste

MCP transforma a Claude Code de una herramienta que solo conoce archivos locales a una que puede acceder a la web y otros sistemas. Fetch MCP es el punto de partida más simple — sin claves de API, sin cuentas, solo la capacidad de leer cualquier página web. El verdadero poder viene de combinar lo que Claude encuentra en línea con los archivos del proyecto que ya tienes, dándote un análisis que es tanto actual como fundamentado en tu trabajo existente.
