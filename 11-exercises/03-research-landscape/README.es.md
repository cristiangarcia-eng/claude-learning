# Ejercicio 3: Investiga un panorama competitivo

**Tiempo:** 40 minutos | **Nivel:** Intermedio
**Módulo:** [03-skills](../../03-skills/) -- Crear skills de activación automática
**Habilidad:** Investigación iterativa — hacer análisis, criticar tu propio resultado y mejorarlo antes de empaquetarlo

## Objetivo

El Ejercicio 2 te enseñó a empaquetar un flujo de **limpieza de datos** como skill. Este ejercicio enseña algo más difícil: cómo producir **investigación de alta calidad** iterando sobre el output de Claude antes de aceptarlo.

La mayoría de las personas hacen una pregunta a Claude y aceptan la primera respuesta. Aprenderás a:
- Criticar resultados de investigación contra un estándar de calidad
- Identificar análisis superficial y presionar por profundidad
- Probar tu enfoque de investigación en una industria diferente para verificar que funciona
- *Después* empaquetar el flujo probado como skill (el skill es la recompensa, no el objetivo)

## Escenario

Tu VP pregunta: "¿Puedes armar un panorama del mercado de calzado deportivo? Quiero ver dónde está Nike y quién está ganando terreno." Producirás un reporte de investigación — pero a diferencia de la mayoría, no aceptarás el primer borrador.

## Lo que tienes

Un ejemplo de referencia que muestra cómo se ve un buen resultado de investigación — `data/example-output.md`. No son datos de entrada; es tu estándar de calidad. Le pedirás a Claude que lo lea en la Parte 1.

## Preparación

> **Este es el mismo flujo de trabajo que usarás en proyectos reales.** Crea un proyecto, copia tus datos, y trabaja desde ahí.

**Descarga los archivos del curso** (solo la primera vez):

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
```

**Crea tu proyecto:**

```bash
mkdir -p ~/Desktop/Claude/projects/research-landscape/data
mkdir ~/Desktop/Claude/projects/research-landscape/output
```

**Copia los datos del ejercicio:**

```bash
cp ~/Desktop/claude-learning/11-exercises/03-research-landscape/data/example-output.md ~/Desktop/Claude/projects/research-landscape/data/
```

**Abre el proyecto:**

```bash
cd ~/Desktop/Claude/projects/research-landscape
```

Inicia Claude Code aquí (`claude`). Tu proyecto se ve así:

```
research-landscape/
├── data/
│   └── example-output.md    ← ejemplo de referencia (tu estándar de calidad)
└── output/                  ← Claude guarda los reportes aquí
```

## Instrucciones paso a paso

### Parte 1: Establece el estándar de calidad (3 minutos)

Lee `data/example-output.md`:

```
Read data/example-output.md and tell me: what makes this report
actually useful vs. generic? Point out specific things it does well.
```

Observa: el ejemplo tiene números específicos (no "participación de mercado significativa"), comparaciones directas (no "cada marca tiene fortalezas"), y una matriz de puntuación que fuerza juicios con ranking. Estas son las marcas de investigación útil vs. relleno.

### Parte 2: Primer borrador — y critícalo (12 minutos)

Pídele a Claude que investigue el panorama:

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

Save the full report as output/landscape-report-v1.md
```

Ahora **critica el resultado tú mismo.** Léelo de forma crítica. Luego pídele a Claude que evalúe su propio trabajo:

```
Read output/landscape-report-v1.md and compare it against data/example-output.md.
Be brutally honest:
- Where is the analysis vague or generic? ("strong brand presence" means nothing)
- Where are specific numbers or evidence missing?
- Does the scoring matrix feel justified or arbitrary?
- Is the "So What?" section actionable or obvious?
List every weakness you find.
```

### Parte 3: Mejora el reporte (10 minutos)

Usa la crítica para producir una versión mejor:

```
Rewrite the report as output/landscape-report-v2.md, fixing every weakness
you identified. Specifically:
- Replace vague claims with specific numbers or evidence
- Make each scoring matrix rating include a 1-sentence justification
- Ensure the "So What?" section has recommendations a VP could actually
  act on (not "Nike should innovate more" but specific strategic moves)
- Add a "Risks to Watch" subsection with 2-3 emerging threats
```

Compara v1 y v2. La diferencia debería ser obvia.

### Parte 4: Prueba de estrés en otra industria (8 minutos)

Un buen enfoque de investigación funciona más allá de una industria. Pruébalo:

```
Using the exact same structure and quality standards from
output/landscape-report-v2.md, produce a competitive landscape for
the project management software market. Compare Asana, Monday.com,
ClickUp, Notion, and Linear. Save as output/landscape-report-pm-tools.md
```

Revisa el resultado. ¿La estructura se transfiere bien? Si el reporte de herramientas PM es significativamente más débil que el de calzado, tu enfoque tiene un punto ciego — la estructura solo funciona cuando Claude tiene buenos datos de entrenamiento sobre el dominio.

### Parte 5: Empaqueta como skill (5 minutos)

Ahora que tienes un proceso de investigación **probado y testeado**, empaquétalo:

```
Create a skill called "competitive-landscape" at
.claude/skills/competitive-landscape/SKILL.md

Base it on the actual process we followed (not the first attempt):
1. First draft with specific structure
2. Self-critique against quality bar (no vague claims, justified scores)
3. Revised draft addressing all weaknesses
4. Include a report template based on the structure from v2

Auto-trigger on: "competitive analysis", "landscape review",
"compare competitors", "market comparison"
```

## Ejemplo de resultado

Así se ve un reporte de investigación sólido (consulta `data/example-output.md` para la versión completa):

**Matriz de puntuación con justificaciones (calidad v2):**

| Criterio (Peso) | Nike | Orbit Sports | Velocity Gear | Apex Athletics | Summit Run |
|------------------|------|-------------|---------------|----------------|------------|
| Fuerza de marca (25%) | 5 — ícono global, 96% reconocimiento | 3 — creciendo pero regional | 3 — conocido en nicho running | 4 — estatus cultural con Gen Z | 3 — premium pero pequeño |
| Innovación de producto (20%) | 4 — Flyknit, tecnología Air | 4 — I+D agresivo en materiales | 3 — iterativo, no disruptivo | 3 — lifestyle sobre rendimiento | 4 — pionero en placa de carbono |
| Digital/DTC (20%) | 3 — app SNKRS fuerte, mucho wholesale | 5 — 78% ventas directas | 3 — DTC creciendo | 5 — nació digital, sin wholesale | 2 — dependiente de retail |
| Competitividad de precio (15%) | 2 — promedio $150+, solo premium | 4 — rango $80-120 | 4 — posicionamiento de valor | 3 — $100-140 | 1 — $200+ ultra-premium |
| Impulso de crecimiento (20%) | 2 — 1.2% YoY, estancado | 5 — 11% YoY, todas las regiones | 3 — estable 3% | 5 — 8% YoY, crecimiento viral | 2 — plano, techo de nicho |
| **Puntuación ponderada** | **3.3** | **4.2** | **3.2** | **4.0** | **2.5** |

Observa: cada puntuación tiene una razón. Esta es la diferencia entre análisis útil y una tabla de adivinanzas.

## Conexión con el Módulo 03 (Skills)

| Concepto de Skill | Cómo lo usas aquí |
|-------------------|-------------------|
| **Calidad iterativa** | Criticas y mejoras antes de aceptar el output |
| **Prueba de estrés** | Verificas que el enfoque funciona en otro dominio |
| **Formato SKILL.md** | Empaquetas un proceso probado, no un primer intento |
| **Activación automática** | Palabras clave como "competitive analysis" activan el skill |
| **Plantillas** | La plantilla codifica estándares de calidad, no solo estructura |

## Criterios de éxito

- [ ] `output/landscape-report-v1.md` existe (primer borrador)
- [ ] Identificaste debilidades específicas en v1 (no "está bien")
- [ ] `output/landscape-report-v2.md` existe con mejoras claras sobre v1
- [ ] `output/landscape-report-pm-tools.md` existe (prueba de estrés en otra industria)
- [ ] `.claude/skills/competitive-landscape/SKILL.md` existe e incluye el paso de crítica
- [ ] El skill se activa automáticamente cuando pides un "competitive analysis"

## Lo que aprendiste

**El mayor error con investigación de IA es aceptar el primer output.** El primer borrador de Claude siempre suena plausible pero a menudo es vago. El paso de auto-crítica — "¿dónde es genérico? ¿dónde faltan números?" — es lo que separa la investigación útil del relleno. Al hacer la prueba de estrés en una segunda industria, demostraste que el enfoque funciona de forma amplia. El skill que construiste codifica este estándar de calidad, para que cada análisis futuro arranque con calidad v2, no v1.
