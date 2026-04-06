# Ejercicio 4: Construye una taxonomía a partir del caos

**Tiempo:** 40 minutos | **Nivel:** Intermedio
**Módulo:** [08-checkpoints](../../08-checkpoints/) — Experimentación segura con rewind
**Habilidad:** Usar checkpoints para probar distintos enfoques, compararlos y volver al mejor

## Objetivo

Aprenderás a usar la función de **checkpoints** de Claude Code para experimentar de forma segura con múltiples enfoques para un mismo problema. Los checkpoints te permiten probar algo, retroceder si no funciona e intentar una dirección diferente — sin perder el trabajo anterior. Esto es esencial para cualquier tarea donde la "respuesta correcta" no es obvia desde el inicio.

## Escenario

Eres Product Manager en **Orbit Task Manager**, una herramienta ficticia de gestión de proyectos. Tu equipo ha recopilado 200 entradas de feedback de producto provenientes de reseñas en app stores, tickets de soporte, encuestas in-app y formularios de solicitud de funcionalidades. El feedback es desordenado y sin estructura — algunas entradas son reportes de errores, otras son elogios, otras son solicitudes de funcionalidades y otras son quejas.

Tu VP de Producto quiere que conviertas este caos en una **taxonomía organizada** para que el equipo pueda priorizar el roadmap de producto. Pero no hay una única forma "correcta" de categorizar este feedback — diferentes estrategias de agrupación revelan diferentes insights. Usarás checkpoints para probar 3 enfoques y elegir el mejor.

## Lo que tienes

Un archivo CSV en `data/raw_entries.csv` con 200 entradas de feedback. Cada fila tiene:
- **feedback_id** — identificador único
- **feedback_text** — el feedback real (texto libre, desordenado, inconsistente)
- **source** — de dónde proviene (app_store_review, support_ticket, in_app_survey, feature_request_form)
- **date_submitted** — cuándo se envió

## Preparación

> **Este es el mismo flujo de trabajo que usarás en proyectos reales.** Crea un proyecto, copia tus datos, y trabaja desde ahí.

**Descarga los archivos del curso** (solo la primera vez):

```bash
git clone https://github.com/cristiangarcia-eng/claude-learning.git ~/Desktop/claude-learning
```

**Crea tu proyecto:**

```bash
mkdir -p ~/Desktop/Claude/projects/taxonomy-from-chaos/data
mkdir ~/Desktop/Claude/projects/taxonomy-from-chaos/output
```

**Copia los datos del ejercicio:**

```bash
cp ~/Desktop/claude-learning/11-exercises/04-taxonomy-from-chaos/data/raw_entries.csv ~/Desktop/Claude/projects/taxonomy-from-chaos/data/
```

**Abre el proyecto:**

```bash
cd ~/Desktop/Claude/projects/taxonomy-from-chaos
```

Inicia Claude Code aquí (`claude`). Tu proyecto se ve así:

```
taxonomy-from-chaos/
├── data/
│   └── raw_entries.csv
└── output/          ← Claude guarda los resultados aquí
```

## Instrucciones paso a paso

### Parte 1: Explora los datos (10 minutos)

**Paso 1.** Abre Claude Code en la carpeta de tu proyecto y pídele que lea y resuma los datos:

```
Read data/raw_entries.csv and give me a summary:
- How many entries are there?
- What sources are represented and how many from each?
- What are the main themes you see?
- How messy is this data — are there duplicates or near-duplicates?
```

Tómate un momento para revisar el resumen. Esto te da una comprensión base antes de empezar a organizar.

### Parte 2: Prueba 3 enfoques usando checkpoints (20 minutos)

Aquí es donde los checkpoints brillan. Probarás tres formas distintas de categorizar el feedback, y podrás retroceder entre cada una.

**Paso 2.** Prueba el Enfoque A — categorizar por **tipo de feedback**:

```
Propose a taxonomy that groups this feedback by type of feedback:
bug reports, feature requests, praise, complaints, and questions.
Map every entry to one category.
Save the result as output/taxonomy_by_type.md with a summary table
showing how many entries fall into each category.
```

**Paso 3.** Antes de probar el siguiente enfoque, ten en cuenta que Claude Code ha creado automáticamente un checkpoint. Siempre puedes volver a este punto más tarde.

> Consejo: Puedes retroceder presionando `Esc` dos veces, o escribiendo `/rewind` para ver una lista de checkpoints a los que puedes volver.

**Paso 4.** Prueba el Enfoque B — categorizar por **área de producto**:

```
Now try a completely different approach. Group the feedback by
product area: mobile app, performance, integrations, UI/UX,
notifications, collaboration, reporting, and anything else that
emerges from the data. Map every entry to one area.
Save as output/taxonomy_by_area.md with the same summary format.
```

**Paso 5.** Prueba el Enfoque C — categorizar por **acción necesaria del equipo**:

```
One more approach. Group feedback by what action the team should take:
fix now (bugs/crashes), build next (most-requested features),
improve existing (enhancements to current features),
no action (praise/positive feedback), and investigate (unclear issues).
Map every entry. Save as output/taxonomy_by_action.md.
```

### Parte 3: Compara y elige (10 minutos)

**Paso 6.** Ahora pídele a Claude que compare los tres enfoques lado a lado:

```
Compare the 3 taxonomy approaches I just created:
- How many categories does each have?
- Which approach makes it easiest to decide what to build next?
- Which has the fewest "hard to classify" entries?
- If you were presenting to a VP of Product, which taxonomy
  would be most useful for roadmap planning?
Recommend the best approach and explain your reasoning.
```

**Paso 7.** Si quieres volver atrás y refinar uno de los enfoques, usa `/rewind` para saltar a ese checkpoint. Por ejemplo, si el Enfoque B estuvo cerca pero quieres ajustar las categorías, retrocede hasta justo antes del Enfoque B e intenta una versión modificada. Este es el poder de los checkpoints — no pierdes el trabajo de los enfoques anteriores.

**Paso 8.** Una vez que hayas elegido el mejor enfoque, pídele a Claude que cree un resumen final:

```
Using the best taxonomy approach, create a final report called
output/feedback_analysis.md that includes:
- The taxonomy with category names and descriptions
- A count of entries per category
- The top 3 most common pieces of feedback in each category
- A recommended priority order for the product team
```

## Lo que los checkpoints te permiten hacer aquí

| Concepto de Checkpoint | Cómo lo usaste |
|---|---|
| **Checkpoints automáticos** | Cada prompt crea uno — tienes un checkpoint antes de cada enfoque |
| **Rewind** (`/rewind` o Esc+Esc) | Vuelve atrás para probar una taxonomía diferente sin empezar de cero |
| **Comparar enfoques** | Conserva los 3 archivos de taxonomía y míralos lado a lado |
| **Experimentación segura** | Prueba estrategias de categorización atrevidas sabiendo que siempre puedes volver atrás |

## Lista de verificación de éxito

- [ ] Exploraste los datos e identificaste los temas principales
- [ ] Probaste al menos 2 enfoques de taxonomía diferentes
- [ ] Usaste `/rewind` o checkpoints para navegar entre enfoques
- [ ] Comparaste los enfoques y elegiste el mejor con justificación
- [ ] Existe un reporte final `output/feedback_analysis.md` con categorías priorizadas

## Lo que aprendiste

Los checkpoints te permiten tratar el análisis como caminos que se bifurcan — prueba el Enfoque A, checkpoint, prueba el Enfoque B, compara, quédate con el mejor. Sin checkpoints, tendrías que deshacer el trabajo manualmente o reiniciar la conversación por completo. Cada vez que enfrentes un problema con múltiples soluciones posibles, los checkpoints te permiten explorar libremente y sin riesgo.
