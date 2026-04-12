# Ejercicio 7: Construye un sistema de inteligencia competitiva

**Tiempo:** 20 minutos | **Nivel:** Avanzado

## Objetivo

Este es el ejercicio final. Construirás un **sistema completo de inteligencia competitiva** que tu equipo pueda reutilizar — no solo un reporte puntual, sino un sistema funcional que combina todo lo que aprendiste en el curso:

- **MCP** para obtener datos en vivo de la web
- **Plan Mode** para diseñar la estructura del análisis
- **Memory** para almacenar contexto del proyecto que persiste
- **Un Skill** para hacer todo el flujo de trabajo repetible

Al final, alguien de tu equipo podrá escribir "actualiza el análisis competitivo" y obtener un reporte actual y estructurado — automáticamente.

## Escenario

Estás en el equipo de inteligencia competitiva de Nike. Tienes un archivo local con tu análisis competitivo más reciente, pero tiene algunos meses de antigüedad. Tu gerente quiere dos cosas:
1. Un reporte actualizado **ahora** (con datos en vivo de los competidores desde la web)
2. Un sistema que tu equipo pueda **reutilizar** trimestralmente sin re-explicar el proceso

Este ejercicio entrega ambos.

## Lo que tienes

- `nike-competitive-snapshot.md` — tu análisis competitivo existente (datos locales, unos meses de antigüedad)
- `competitor-urls.md` — una lista de páginas de competidores para consultar

## Preparación

> Si aún no has descargado los materiales de los ejercicios, mira las instrucciones de preparación en el [Ejercicio 1](../02-messy-spreadsheet/).

Crea una carpeta `competitive-intelligence` dentro de `Escritorio/Claude/projects/`. Copia los archivos de `07-competitive-intelligence` de los materiales descargados. Luego abre la carpeta en Cursor (**File → Open Folder**) e inicia Claude Code en la terminal.

## Instrucciones paso a paso

### Parte 1: Configurar MCP para acceso web (5 minutos)

Si completaste la [lección de MCP](../../05-mcp/) y ya tienes Fetch instalado, ve a la Parte 2.

1. **Instala Fetch MCP** en tu terminal (fuera de Claude Code):
   ```bash
   claude mcp add fetch -s user -- npx -y @anthropic-ai/fetch-mcp
   ```

   > **Qué hace este comando:** `claude mcp add fetch` registra un servidor MCP llamado `fetch` en tu configuración de Claude Code. El flag `-s user` guarda la configuración a nivel de usuario (`~/.claude.json`) para que esté disponible en todos tus proyectos — si prefieres que solo viva en este proyecto usa `-s project`. Los dos guiones `--` separan los flags de `claude mcp add` del comando que lanza el servidor. `npx -y @anthropic-ai/fetch-mcp` descarga y ejecuta el paquete oficial de Fetch sin necesidad de instalarlo globalmente (`-y` acepta la confirmación automáticamente). Requisito: tener Node.js instalado.

2. **Reinicia Claude Code** para que detecte el nuevo servidor MCP.

3. **Verifica la conexión.** Dentro de Claude Code, escribe `/mcp` — deberías ver `fetch` listado como activo. Haz una prueba rápida:
   ```
   Usa Fetch para leer https://example.com y dime qué encuentras.
   ```

### Parte 2: Configurar la memoria del proyecto (5 minutos)

Antes de hacer el análisis, configura el contexto del proyecto para que Claude siempre sepa de qué se trata:

4. **Crea un CLAUDE.md del proyecto:**
   ```
   Create a CLAUDE.md file in this folder with the following context:

   # Nike Competitive Intelligence

   ## Project Context
   - This is a competitive intelligence project for Nike's strategy team
   - We track: Nike, Adidas, Puma, New Balance, On Running
   - Focus areas: sustainability claims, DTC strategy, product launches, pricing
   - Reports are written for VP-level audience (concise, data-backed, actionable)
   - Always cite sources: "[from local snapshot]" vs "[from web, fetched DATE]"

   ## Quality Standards
   - No vague claims ("strong brand" is not analysis)
   - Every comparison needs specific evidence
   - Scoring matrices need 1-sentence justifications per score
   - "So What?" sections must have actionable recommendations, not observations
   ```

Esta memoria informará cada análisis futuro en esta carpeta del proyecto.

### Parte 3: Planificar la estructura del análisis (10 minutos)

5. **Entra en Plan Mode** (`Shift+Tab` dos veces o `/plan`):

   ```
   /plan I need to produce an updated competitive analysis that combines
   our local data (nike-competitive-snapshot.md) with live web data.

   Plan the approach:
   - What should we fetch from each competitor's website?
     (Read competitor-urls.md for the list)
   - How should we structure the comparison? (Remember our quality
     standards in CLAUDE.md)
   - How do we clearly distinguish "old local data" from "fresh web data"
     in the final report?
   - What sections should the final report have?

   Don't execute yet. Show me the plan.
   ```

6. **Refina el plan.** Presiona por especificidad:
   ```
   Good structure. Make sure the plan includes:
   - A "Data Freshness" header at the top showing what was fetched and when
   - A comparison table with columns for each competitor
   - A "Changes Since Last Report" section highlighting what moved
   - A "Risks & Opportunities" section at the end
   Confirm the updated plan.
   ```

7. Aprueba el plan y sal de Plan Mode.

### Parte 4: Ejecutar — obtener datos en vivo y construir el reporte (15 minutos)

8. **Ejecuta el análisis:**

   ```
   Execute the plan:

   1. Read our local nike-competitive-snapshot.md
   2. Read competitor-urls.md for the URLs to check
   3. Use Fetch MCP to pull data from each competitor URL listed
      (if a URL fails, note it and move on — some sites block automated access)
   4. Combine the local snapshot data with the fresh web data
   5. Write the full updated report following the plan structure

   Save as updated-competitive-analysis.md

   Remember: cite every claim with its source — [local snapshot] or
   [web fetch, DATE].
   ```

9. **Revisa el resultado.** Lee el reporte. ¿Es calidad VP? Verifica:
   - ¿Las fuentes están citadas correctamente?
   - ¿Las comparaciones son específicas (números, no adjetivos)?
   - ¿La sección "Cambios Desde el Último Reporte" es realmente útil?

   Si algo está débil, presiona a Claude para mejorarlo — conoces el estándar de calidad del Ejercicio 3.

### Parte 5: Empaquetar como skill reutilizable (10 minutos)

10. **Crea el skill de inteligencia competitiva:**

    ```
    Create a skill at .claude/skills/competitive-intel/SKILL.md that
    packages the entire workflow we just did:

    The skill should:
    - Auto-trigger on: "update competitive analysis", "competitor update",
      "competitive intelligence", "quarterly competitor review"
    - Follow this process:
      1. Read local CLAUDE.md for project context and quality standards
      2. Read the most recent competitive analysis file
      3. Read competitor-urls.md for URLs to fetch
      4. Use Fetch MCP to pull live data from competitor websites
      5. Combine local + web data into updated analysis
      6. Include "Data Freshness" header, comparison table,
         "Changes Since Last Report", and "Risks & Opportunities"
      7. Cite all sources
    - If Fetch MCP is not available, warn the user and proceed with
      local data only
    ```

11. **Prueba el skill.** Inicia una conversación nueva (`/clear`) y prueba:

    ```
    Actualiza el análisis competitivo de nuestro proyecto de Nike.
    ```

    El skill debería activarse, leer la memoria, obtener datos web y producir un reporte estructurado — todo sin que tú re-expliques el proceso.

### Parte 6: Verificar el sistema completo (5 minutos)

12. **Comprueba que todas las piezas están conectadas:**

    ```
    List all the components of our competitive intelligence system:
    - What memory/context files exist?
    - What skills are set up?
    - What MCP servers are available?
    - What data files does the system reference?
    Show me a summary of how they connect.
    ```

Este es tu sistema terminado. Un compañero de equipo que abra esta carpeta del proyecto con Claude Code obtiene: contexto del proyecto (de Memory), un flujo de trabajo repetible (del Skill), y acceso web (de MCP).

## Consejos

- **Fetch no puede leer todos los sitios web.** Algunos sitios bloquean el acceso automatizado. Si una URL falla, sáltala y anota la brecha. La inteligencia competitiva real siempre tiene huecos — reconocerlos es más profesional que ocultarlos.
- **Los datos web no tienen estructura definida.** Pídele a Claude que se enfoque en secciones específicas (páginas de precios, declaraciones de sostenibilidad, lanzamientos de productos) en lugar de resumir páginas completas.
- **El skill debe ser resiliente.** Debería funcionar incluso si Fetch no está instalado (usando solo datos locales) o si algunas URLs no son alcanzables.

## Conexión con los módulos del curso

| Módulo | Cómo lo usas aquí |
|--------|-------------------|
| **02 — Memory** | CLAUDE.md almacena contexto del proyecto y estándares de calidad |
| **03 — Skills** | El skill empaqueta todo el flujo para que el equipo lo reutilice |
| **05 — MCP** | Fetch MCP obtiene datos de competidores en vivo desde la web |
| **09 — Plan Mode** | Diseñaste la estructura del análisis antes de ejecutar |
| **03 — Calidad iterativa** (Ejercicio 3) | Aplicaste estándar de calidad: sin claims vagos, fuentes citadas |

## Criterios de éxito

- [ ] Fetch MCP está instalado y funcionando
- [ ] `CLAUDE.md` existe con contexto del proyecto y estándares de calidad
- [ ] Usaste Plan Mode para diseñar la estructura del análisis antes de ejecutar
- [ ] `updated-competitive-analysis.md` existe con fuentes citadas (local vs. web)
- [ ] `.claude/skills/competitive-intel/SKILL.md` existe y se activa automáticamente
- [ ] El skill funciona en una conversación nueva sin re-explicar el proceso
- [ ] Puedes explicar cómo Memory, Skills, MCP y Plan Mode trabajan juntos

## Lo que aprendiste

**Las funcionalidades individuales de Claude Code son útiles. Combinadas, son un sistema.** Memory le da a Claude contexto sin que tú te repitas. Skills hacen los flujos de trabajo repetibles sin que tú re-expliques. MCP conecta a Claude con datos en vivo. Plan Mode asegura que el output esté estructurado antes de ejecutar. Este ejercicio las unió todas en algo que un equipo puede realmente usar — un sistema de inteligencia competitiva que se actualiza solo, mantiene estándares de calidad, y funciona para cualquiera que abra el proyecto. Esa es la diferencia entre usar una herramienta de IA y construir un flujo de trabajo potenciado por IA.
