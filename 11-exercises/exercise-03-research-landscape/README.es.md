# Ejercicio 3: Investiga un panorama competitivo

**Tiempo:** 30 minutos | **Nivel:** Principiante
**Módulo:** [03-skills](../../03-skills/) -- Crear skills de activación automática
**Habilidad:** Construir un skill de investigación que se active automáticamente para análisis competitivos

## Objetivo

Aprenderás a construir un **skill de investigación** que se active automáticamente cada vez que tú o un compañero de equipo soliciten un análisis competitivo. En lugar de volver a explicar el formato de investigación cada vez, el skill lo maneja automáticamente.

Al finalizar, entenderás:
- Cómo usar Claude Code para investigación de mercado estructurada
- Cómo empaquetar un flujo de trabajo de investigación como skill reutilizable
- Cómo funcionan las palabras clave de activación automática en las descripciones de skills
- Cómo es un buen resultado de investigación (y cómo garantizarlo con plantillas)

## Escenario

Estás trabajando en el proyecto de análisis competitivo de Nike. Tu VP pregunta: "¿Puedes armar un panorama del mercado de calzado deportivo? Quiero ver dónde está Nike y quién está ganando terreno." Harás la investigación con Claude Code y luego construirás un skill para que la próxima vez que alguien de tu equipo necesite un panorama competitivo, el formato y el proceso sean consistentes.

## Lo que tienes

Un ejemplo de cómo se ve un buen resultado de investigación en `examples/example-output.md`. Revísalo antes de empezar -- este es el nivel de calidad al que apuntas.

## Instrucciones paso a paso

### Paso 1: Revisa el ejemplo de salida (3 minutos)

Lee `examples/example-output.md` para entender el formato objetivo:

```
Read examples/example-output.md and summarize the structure and
sections it uses.
```

Observa la estructura consistente: resumen ejecutivo, tabla comparativa, análisis detallado por competidor, matriz de puntuación y recomendación. Este es el formato que tu skill aplicará.

### Paso 2: Haz la investigación (10 minutos)

Pídele a Claude Code que investigue el mercado de calzado deportivo usando el proyecto de Nike como contexto:

```
Research the athletic footwear competitive landscape for our Nike
analysis project. Compare Nike against these competitors:
Orbit Sports, Velocity Gear, Apex Athletics, and Summit Run.

For each brand, cover:
- Market positioning and target audience
- Key strengths and weaknesses
- Recent strategic moves (product launches, partnerships, channel shifts)
- Estimated market share range

Then create a scoring matrix rating each brand 1-5 on:
- Brand strength
- Product innovation
- Digital/DTC presence
- Price competitiveness
- Growth momentum

End with a "So What?" section: what should Nike's competitive strategy
team pay attention to?

Save the full report as landscape-report.md
```

Revisa el resultado. ¿Tiene la misma calidad que el ejemplo? Si no, pídele a Claude que mejore secciones específicas.

### Paso 3: Construye el skill de investigación (10 minutos)

Ahora empaquétalo en un skill reutilizable:

```
Create a skill called "competitive-landscape" at
.claude/skills/competitive-landscape/SKILL.md

The skill should:
- Auto-trigger when someone says "competitive analysis",
  "landscape review", "compare competitors", "market comparison",
  or "who are the competitors"
- Follow this exact process every time:
  1. Identify the focal company and competitors
  2. Build an overview comparison table
  3. Do a deep dive on the top 3-4 competitors
  4. Create a scoring matrix with weighted criteria
  5. End with a "So What?" recommendation section
- Output a structured markdown report
- Always ask clarifying questions if the industry or competitors
  are not specified

Use the SKILL.md format from the 03-skills module.
```

### Paso 4: Crea una plantilla de reporte (5 minutos)

Agrega una plantilla para que cada reporte siga la misma estructura:

```
Create a report template at
.claude/skills/competitive-landscape/templates/report-template.md

It should have these sections with placeholder text:
- Executive Summary (3-5 bullet points)
- Competitor Overview Table (columns: Brand, Position, Target, Strength, Weakness)
- Deep Dive per competitor (2-3 paragraphs each)
- Scoring Matrix (criteria with 1-5 ratings)
- So What? (2-3 key takeaways and recommended actions)
```

### Paso 5: Prueba el skill (2 minutos)

Inicia una conversación nueva (`/clear`) y pregunta de forma natural:

```
Can you do a competitive analysis of the athletic footwear market
for our Nike project?
```

El skill debería activarse automáticamente y producir un reporte que siga la estructura de la plantilla.

## Ejemplo de resultado

Así se ve un reporte de investigación sólido (consulta `examples/example-output.md` para la versión completa):

**Sección de Resumen Ejecutivo:**
- Nike mantiene la posición líder con ~27% de participación en Norteamérica, pero el crecimiento se estancó en 1.2% interanual
- Orbit Sports es la mayor amenaza: creciendo 6-11% en todas las regiones con expansión agresiva en DTC
- Apex Athletics domina el segmento de 18-25 años a través de posicionamiento lifestyle y marketing social-first
- La industria está migrando de wholesale a DTC; las marcas lentas en adaptarse perderán margen

**Sección de Matriz de Puntuación:**

| Criterio (Peso) | Nike | Orbit Sports | Velocity Gear | Apex Athletics | Summit Run |
|------------------|------|-------------|---------------|----------------|------------|
| Fuerza de marca (25%) | 5 | 3 | 3 | 4 | 3 |
| Innovación de producto (20%) | 4 | 4 | 3 | 3 | 4 |
| Digital/DTC (20%) | 3 | 5 | 3 | 5 | 2 |
| Competitividad de precio (15%) | 2 | 4 | 4 | 3 | 1 |
| Impulso de crecimiento (20%) | 2 | 5 | 3 | 5 | 2 |
| **Puntuación ponderada** | **3.3** | **4.2** | **3.2** | **4.0** | **2.5** |

**Sección "So What?":**
- La combinación de crecimiento rápido y DTC sólido de Orbit Sports debería ser el foco competitivo principal de Nike
- La dependencia de Nike en wholesale (41% de ventas) es una desventaja estructural a medida que la industria migra a venta directa
- El dominio de Apex Athletics entre consumidores jóvenes es un riesgo de marca a largo plazo si Nike no responde

## Conexión con el Módulo 03 (Skills)

| Concepto de Skill | Cómo lo usas aquí |
|-------------------|-------------------|
| **Formato SKILL.md** | Creas la definición del skill con frontmatter |
| **Activación automática** | Palabras clave como "competitive analysis" lo activan |
| **Carpeta de plantillas** | Garantiza una estructura de reporte consistente |
| **Reutilización** | Funciona para cualquier industria, no solo calzado deportivo |

## Criterios de éxito

- [ ] Existe un `landscape-report.md` con análisis competitivo estructurado
- [ ] `.claude/skills/competitive-landscape/SKILL.md` existe con el formato correcto
- [ ] Existe una plantilla de reporte en `.claude/skills/competitive-landscape/templates/report-template.md`
- [ ] El skill se activa automáticamente cuando pides un "competitive analysis"
- [ ] El reporte incluye: tabla resumen, análisis detallado, matriz de puntuación y sección "So What?"

## Lo que aprendiste

Los skills de investigación son poderosos porque el análisis competitivo es algo que los equipos hacen repetidamente -- nuevos mercados, nuevos competidores, actualizaciones trimestrales. Al empaquetar el proceso como un skill con plantilla, te aseguras de que cada reporte sea consistente, completo y rápido. La matriz de puntuación es especialmente valiosa porque obliga a pensar de forma estructurada en lugar de dar opiniones vagas.
