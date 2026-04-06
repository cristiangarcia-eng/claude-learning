# Ejercicio 6: Verificar contenido de IA contra lineamientos de marca

**Tiempo:** 40 minutos | **Nivel:** Intermedio
**Módulo:** [06-hooks](../../06-hooks/) — Automatización basada en eventos
**Habilidad:** Crear un hook sencillo que verifica automáticamente la calidad del contenido

## Objetivo

Aprenderás cómo funcionan los **hooks** en Claude Code — pequeños scripts que se ejecutan automáticamente cuando ocurren ciertos eventos. Los hooks son como controles de calidad: verifican el trabajo automáticamente para que no tengas que acordarte de revisarlo manualmente cada vez.

En este ejercicio, primero evaluarás contenido a mano, y luego construirás un hook sencillo que haga la verificación por ti. Los hooks son una de las funcionalidades más avanzadas de Claude Code, pero este ejercicio los mantiene accesibles guiándote paso a paso.

## Escenario

Eres Coordinador/a de Marketing en **Orbit Task Manager**, una herramienta ficticia de gestión de proyectos. Tu equipo usa IA para redactar publicaciones en redes sociales, correos electrónicos e introducciones de blog. La mayoría de las veces los borradores son buenos, pero a veces violan los lineamientos de marca — el tono es demasiado agresivo, hay demasiados emojis, se cuelan frases prohibidas o faltan elementos obligatorios.

Tu Brand Manager te ha pedido configurar un control de calidad para que cada pieza de contenido generada por IA sea revisada contra los lineamientos antes de publicarse.

## Lo que tienes

Un archivo JSON en `data/ai_outputs.json` con 20 borradores de contenido generados por IA. Cada entrada incluye:
- **type** — qué tipo de contenido es (social_media_post, email_subject_line, blog_intro, customer_email)
- **platform** — dónde se publicará
- **draft** — el texto del contenido
- **brand_guidelines** — las reglas que debe seguir (tono, límite de emojis, frases prohibidas, longitud máxima, elementos obligatorios)

Algunos borradores siguen los lineamientos perfectamente. Otros tienen violaciones intencionales para que las detectes.

## Preparación

> **Este es el mismo flujo de trabajo que usarás en proyectos reales.** Crea un proyecto, copia tus datos, y trabaja desde ahí.

**Descarga los archivos del curso** (solo la primera vez):

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
```

**Crea tu proyecto:**

```bash
mkdir -p ~/Desktop/Claude/projects/evaluate-ai-output/data
mkdir ~/Desktop/Claude/projects/evaluate-ai-output/output
```

**Copia los datos del ejercicio:**

```bash
cp ~/Desktop/claude-learning/11-exercises/06-evaluate-ai-output/data/ai_outputs.json ~/Desktop/Claude/projects/evaluate-ai-output/data/
```

**Abre el proyecto:**

```bash
cd ~/Desktop/Claude/projects/evaluate-ai-output
```

Inicia Claude Code aquí (`claude`). Tu proyecto se ve así:

```
evaluate-ai-output/
├── data/
│   └── ai_outputs.json
└── output/          ← Claude guarda los resultados aquí
```

## Instrucciones paso a paso

### Parte 1: Evaluación manual (15 minutos)

Antes de automatizar nada, entiende cómo se ve lo "bueno" y lo "malo".

**Paso 1.** Pídele a Claude que lea los datos y cree una lista de verificación:

```
Read data/ai_outputs.json. For each entry, the brand_guidelines
field defines the rules. Create a quality checklist that covers
all the rule types across all entries: tone, emoji count,
forbidden phrases, length limits, and required elements.
```

**Paso 2.** Pídele a Claude que evalúe cada borrador:

```
Evaluate all 20 content drafts against their brand guidelines.
For each one, give me:
- Pass or Fail
- Which specific rules were violated (if any)
- Severity: Critical (would damage the brand), Medium (noticeable
  issue), or Low (minor nitpick)

Show results as a markdown table. Save it as output/evaluation_results.md
```

**Paso 3.** Pídele a Claude que encuentre patrones:

```
Based on the evaluation:
- What's the overall pass rate?
- Which types of content fail most often?
- Which rule violations are most common?
- What recommendations would you give to the AI content
  generation team?
Add this analysis to output/evaluation_results.md
```

### Parte 2: Construir un hook de verificación de calidad (15 minutos)

Ahora automatiza la verificación de calidad como un hook. Un hook es un script que Claude Code ejecuta automáticamente cuando ocurre un evento específico — en este caso, después de que se escribe un archivo.

**Paso 4.** Pídele a Claude que te ayude a crear el hook:

```
Help me create a hook that checks brand guideline compliance.
Following the format from the 06-hooks module, I want:

- A script that checks any written file for common brand issues:
  * More than 2 emojis
  * ALL CAPS words (shouting)
  * Forbidden marketing phrases like "URGENT", "ACT NOW",
    "crushing it", "game-changing", "limited time"
  * Unresolved placeholders like {{firstName}} or [First Name]
- The script should output warnings listing what it found
- It should be a simple shell script (no coding experience needed)

Create the hook script at hooks/brand-check.sh
and show me the settings.json configuration that would
make this run after Claude writes any file.
```

**Paso 5.** Revisa el script del hook que Claude creó. Pídele que te explique cada parte:

```
Walk me through the brand-check.sh script line by line.
Explain what each part does in plain English.
I'm not a developer, so keep it simple.
```

**Paso 6.** Prueba el hook pidiéndole a Claude que genere contenido que lo active:

```
Write a promotional social media post about Orbit's new feature
and save it as output/test_post.txt. Make it enthusiastic but don't
worry about brand guidelines — I want to see if the hook catches
any issues.
```

Si el hook está bien configurado, debería detectar automáticamente cualquier problema con los lineamientos de marca en el contenido generado.

### Parte 3: Comprender y mejorar (10 minutos)

**Paso 7.** Reflexiona sobre lo que hace el hook y dónde encaja:

```
Explain the difference between:
- A PreToolUse hook (runs BEFORE Claude does something)
- A PostToolUse hook (runs AFTER Claude does something)

For brand guideline checking, which makes more sense and why?
```

**Paso 8.** Piensa en otros hooks que podrían ayudar a tu flujo de trabajo. Por ejemplo:
- Un hook que verifique si los archivos guardados contienen datos sensibles (correos de clientes, números de teléfono)
- Un hook que asegure que cada archivo markdown tenga un título como encabezado
- Un hook que avise si un archivo se está volviendo demasiado largo

No necesitas construirlos — solo piensa en qué controles de calidad automáticos ayudarían a tu trabajo.

## Lo que los hooks te permiten hacer aquí

| Concepto de hook | Cómo lo usaste |
|---|---|
| **Disparador de evento** | El hook se activa cuando se escribe un archivo |
| **Script del hook** | Un script de shell que verifica violaciones de marca |
| **Ejecución automática** | La verificación se ejecuta sin que tengas que acordarte de pedirla |
| **Advertencias** | Los problemas se detectan de inmediato, no se descubren después |
| **Configuración en settings** | El hook se registra en settings.json |

## Una nota sobre hooks para no desarrolladores

Los hooks involucran un poco de scripting, pero no necesitas escribir los scripts tú mismo — Claude Code los escribe por ti. Tu trabajo es:
1. Saber qué quieres verificar (los lineamientos de marca)
2. Pedirle a Claude que construya el hook
3. Entender qué hace el hook a nivel general
4. Probarlo y refinar las reglas

Piensa en los hooks como filtros de correo electrónico: configuras las reglas una vez y se ejecutan automáticamente desde ese momento.

## Lista de verificación

- [ ] Los 20 borradores de contenido están evaluados con aprobado/reprobado y justificación
- [ ] Un informe `output/evaluation_results.md` identifica patrones y recomendaciones
- [ ] Existe un script `hooks/brand-check.sh` que verifica violaciones comunes
- [ ] Entiendes la configuración de settings.json para el hook
- [ ] Puedes explicar lo que hace el hook en lenguaje sencillo

## Lo que aprendiste

Los hooks son controles de calidad que se ejecutan sin que tengas que pensar en ellos. En lugar de revisar manualmente cada pieza de contenido generada por IA, codificas tus criterios de calidad en un hook que se activa automáticamente. Esta es la diferencia entre "verificar la calidad cuando me acuerdo" y "la calidad siempre se verifica". Para equipos de marketing y contenido, esto significa consistencia de marca a escala.
