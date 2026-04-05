# Ejercicio 1: Ingeniería de Contexto

**Tiempo:** 20 minutos | **Nivel:** Principiante
**Módulo:** [02-memory](../../02-memory/) -- CLAUDE.md y contexto persistente
**Habilidad:** Configurar User Memory y Project Memory para que Claude Code entienda tu trabajo

## Objetivo

Aprenderás a configurar las dos capas de memoria de Claude Code -- **User Memory** y **Project Memory** -- para que deje de dar respuestas genéricas y empiece a responder como un compañero de equipo que conoce tu proyecto, tu rol y tus preferencias.

Al finalizar, entenderás:
- Qué es User Memory y dónde se almacena
- Qué es Project Memory (CLAUDE.md) y por qué es importante
- Cómo funciona la jerarquía de memoria (usuario vs. proyecto)
- Cómo escribir entradas de memoria efectivas

## Escenario

Eres un **Product Manager** trabajando en el proyecto de análisis competitivo de Nike. Tu equipo está haciendo seguimiento del posicionamiento de Nike frente a sus competidores en el mercado de calzado deportivo. Hay una carpeta de proyecto con archivos de datos, pero Claude Code no sabe nada sobre el proyecto, tu rol ni cómo trabaja tu equipo.

Tu tarea: configurar ambas capas de memoria para que Claude se convierta en un compañero de equipo con contexto.

## Lo que tienes

Una carpeta de proyecto en `sample-project/` que simula el análisis competitivo de Nike:

```
sample-project/
  data/
    market-share.csv        -- Cuota de mercado del Q1 por marca
    retail-channels.csv     -- Desglose por canal de distribución
  reports/
    q1-landscape.txt        -- Resumen del panorama competitivo del Q1
  config.json               -- Configuración del proyecto
```

## Preparación

Este ejercicio usa archivos de datos incluidos en el repositorio del curso. Si aún no lo has hecho, clona el repo y navega a este ejercicio:

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
cd ~/Desktop/claude-learning/11-exercises/01-context-engineering
```

Si ya clonaste el repo, solo navega a la carpeta del ejercicio:

```bash
cd ~/Desktop/claude-learning/11-exercises/01-context-engineering
```

## Instrucciones paso a paso

### Paso 1: Observa el problema (2 minutos)

Abre Claude Code en la carpeta `sample-project/` y pregunta:

```
What does this project do and what should I focus on this quarter?
```

Fíjate en lo genérica que es la respuesta. Claude no tiene idea de quién eres, qué te importa ni cómo opera el equipo. Guarda o recuerda esta respuesta -- la compararás más adelante.

### Paso 2: Configura User Memory (5 minutos)

User Memory se almacena en `~/.claude/CLAUDE.md` y aplica a **todos tus proyectos**. Guarda tu identidad personal y preferencias.

Pídele a Claude Code:

```
Create a file at ~/.claude/CLAUDE.md with my personal preferences.
Here is what to include:

- My name is [tu nombre]
- My role is Product Manager
- I work on competitive strategy and market positioning
- When I ask for analysis, default to bullet points, not paragraphs
- Always use USD for currency unless I say otherwise
- When comparing competitors, always include market share percentage
- I prefer concise summaries with a "So What?" section at the end
```

Después de que Claude lo cree, revísalo pidiéndole a Claude:

```
Read the file at ~/.claude/CLAUDE.md and show me what it says
```

O ábrelo directamente en tu terminal:

```bash
cat ~/.claude/CLAUDE.md
```

Esta es tu **User Memory** -- te acompaña en todos los proyectos.

### Paso 3: Configura Project Memory (8 minutos)

Project Memory se almacena en `CLAUDE.md` en la raíz del proyecto y aplica solo a **este proyecto**. Guarda el contexto específico del proyecto.

Pídele a Claude Code:

```
Read through all the files in the sample-project/ folder. Then create
a CLAUDE.md in the sample-project/ root that describes:

- Project name: Nike Competitive Analysis
- Purpose: Track Nike's positioning vs. competitors in athletic footwear
- Key competitors: Orbit Sports, Velocity Gear, Apex Athletics, Summit Run
  (these are the fictional brands in our data)
- Data files: what each CSV contains and how they relate
- How to read the Q1 report
- Team conventions:
  - Market share should always be shown as percentages
  - Reports follow the format: Summary > Data > So What?
  - Competitor names must match exactly what is in the CSVs
  - Q1 = Jan-Mar, Q2 = Apr-Jun, Q3 = Jul-Sep, Q4 = Oct-Dec
```

### Paso 4: Comprueba la diferencia (3 minutos)

Inicia una conversación nueva (`/clear`) y haz la **misma pregunta exacta** del Paso 1:

```
What does this project do and what should I focus on this quarter?
```

Compara las dos respuestas. La segunda debería mencionar a Nike, los competidores, los archivos de datos, tu rol como PM y usar tu formato preferido.

### Paso 5: Entiende la jerarquía (2 minutos)

Ahora que ambas capas de memoria están configuradas, entiende cómo interactúan:

| Capa | Ubicación | Alcance | Ejemplo |
|------|-----------|---------|---------|
| **User Memory** | `~/.claude/CLAUDE.md` | Todos tus proyectos | "Soy PM, usa viñetas" |
| **Project Memory** | `./CLAUDE.md` en la raíz del proyecto | Solo este proyecto | "Los competidores son Orbit Sports, Velocity Gear..." |

Regla clave: **Project Memory tiene prioridad sobre User Memory** cuando hay conflicto. Si tu User Memory dice "usa EUR" pero Project Memory dice "usa USD", Claude usará USD para ese proyecto.

## Ejemplos de entradas de memoria

Así se ve una buena User Memory:

```markdown
# User Preferences

- Role: Product Manager, competitive strategy team
- Default format: bullet points with headers, not long paragraphs
- Currency: USD unless otherwise specified
- When showing competitor data, always include market share %
- End every analysis with a "So What?" section summarizing the key takeaway
- I am non-technical -- explain things in business terms, not code terms
```

Así se ve una buena Project Memory:

```markdown
# Nike Competitive Analysis

## What This Project Is
Ongoing competitive analysis tracking Nike's market position against four
key competitors in the athletic footwear category.

## Competitors
- Orbit Sports (budget segment, fastest growing)
- Velocity Gear (performance running, direct competitor)
- Apex Athletics (lifestyle crossover, strong in 18-25 demo)
- Summit Run (premium trail/outdoor, smallest but highest margins)

## Data Files
- data/market-share.csv -- quarterly market share % by brand and region
- data/retail-channels.csv -- sales split by channel (DTC, wholesale, online)
- reports/q1-landscape.txt -- narrative summary of Q1 competitive moves

## Conventions
- Market share is always shown as percentages (e.g., 27.3%)
- Quarter definitions: Q1=Jan-Mar, Q2=Apr-Jun, Q3=Jul-Sep, Q4=Oct-Dec
- Report format: Summary > Data Tables > So What?
- Competitor names must match CSV spelling exactly
```

## Criterios de éxito

- [ ] `~/.claude/CLAUDE.md` existe con tus preferencias personales (User Memory)
- [ ] `sample-project/CLAUDE.md` existe con el contexto del proyecto (Project Memory)
- [ ] Hacer la misma pregunta con y sin memoria produce resultados notablemente diferentes
- [ ] Puedes explicar la diferencia entre User Memory y Project Memory

## Lo que aprendiste

La ingeniería de contexto a través de la configuración de memoria es lo más impactante que puedes hacer con Claude Code. Todas las demás funciones -- skills, slash commands, subagentes -- funcionan mejor cuando Claude ya conoce tu proyecto, tu rol y tus preferencias. Configura la memoria primero, siempre.
