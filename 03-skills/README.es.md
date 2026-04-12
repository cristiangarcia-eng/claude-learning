# Skills
**Enséñale a Claude un flujo una vez — lo ejecutará igual, para siempre.**

Álvaro es un tech recruiter en Valencia. Escribe ~30 mensajes de outreach a la semana — cada uno para un candidato distinto, para un rol distinto, y cada uno necesita la misma estructura de 4 párrafos: intro, rol, por qué encaja, siguiente paso. Antes de crear un Skill, se pasaba 8 minutos por mensaje escribiendo la misma estructura de siempre antes de llegar a lo que de verdad importaba: *por qué esta persona para este rol*.

**4 horas a la semana escribiendo la misma plantilla una y otra vez.**

Entonces lo escribió una vez — la estructura, el tono, las reglas sobre lo que nunca decir — y lo guardó como Skill. Ahora pega el perfil del candidato y el rol, Claude produce el borrador con la estructura lista, y Álvaro dedica su tiempo a lo que debe hacer un humano: el pitch. Mismo resultado, misma voz, en una fracción del tiempo.

Eso son los Skills. La memoria recuerda *quién eres y en qué trabajas*. Los Skills recuerdan *cómo haces las cosas*.

> **La memoria es quién eres. Los Skills son lo que sabes hacer.**

Piensa en un skill como una receta. Escribes los pasos una vez, y Claude los sigue siempre — produciendo resultados consistentes.

| Beneficio | Ejemplo |
|---------|---------|
| **Ahorra tiempo** | Deja de re-escribir "formatea mis notas de reunión así" en cada sesión |
| **Mantén consistencia** | Cada informe de estado sigue la misma plantilla |
| **Comparte con tu equipo** | Todos usan las mismas guías de voz de marca |
| **Claude los activa automáticamente** | Claude detecta cuándo un skill es relevante y lo usa |

## Dónde viven tus skills

Los skills siguen el **mismo patrón de dos capas** que ya conoces de la [lección de Memoria](/es/lessons/memory) — una capa para *ti*, otra para *cada proyecto*:

```
~/Desktop/Claude/                  ← tu workspace (visible en Finder)
├── projects/
│   ├── nike-analysis/
│   │   ├── competitive-analysis.md
│   │   ├── sales-data.csv
│   │   ├── CLAUDE.md              ← memoria de proyecto
│   │   └── .claude/
│   │       └── skills/            ← skills solo para este proyecto (opcional)
│   │           └── nike-report-style/
│   │               └── SKILL.md
│   └── q4-planning/
└── resources/

~/.claude/                         ← config de Claude Code (oculta)
├── CLAUDE.md                      ← tu User memory
└── skills/                        ← tus skills personales
    ├── meeting-notes/
    │   └── SKILL.md
    └── weekly-report-format/
        └── SKILL.md
```

Dos cosas que vale la pena notar:

- **Tus skills personales viven en `~/.claude/skills/`** — la misma carpeta oculta de configuración donde vive tu User memory. Todo lo que dejes aquí está disponible en **todos los proyectos, en todas las conversaciones**. Aquí es donde van a vivir la mayoría de tus skills: tus reglas de formato, tu tono de voz, los workflows que repites con cada cliente.
- **Los skills de proyecto viven dentro de la carpeta del proyecto**, bajo `.claude/skills/`. Usa esto solo para cosas que tengan sentido en *un único* proyecto — la voz de marca de un cliente específico, una plantilla de informe única para una cuenta concreta.

**Por defecto, personales.** La mayoría de la gente acaba con 10–20 skills personales y apenas un par específicos de proyecto. Haz un skill solo-de-proyecto únicamente si de verdad no tiene sentido en ningún otro sitio.

> **No tienes que crear estas carpetas a mano.** Cuando tú (o Claude) guardéis vuestro primer skill, Claude Code crea la estructura de carpetas automáticamente — exactamente igual que hizo con tus archivos de memoria.

## Explora el Marketplace de Skills

Antes de crear tus propios skills, explora lo que ya existe. La comunidad ha creado cientos de skills listos para usar:

**[skills.sh](https://skills.sh/)**

Es como una tienda de aplicaciones para capacidades de Claude Code — navega por categoría, ve los más populares, e instala con un solo comando.

### Skills que vale la pena probar

Aquí hay algunos para empezar:

| Skill | Qué hace | Ideal para |
|-------|----------|-----------|
| **frontend-design** | Crea interfaces web pulidas y landing pages | PMs que quieren mockups rápidos |
| **pdf-generator** | Crea y rellena documentos PDF | Propuestas de venta, informes |
| **data-analyst** | Analiza datasets, encuentra patrones y crea visualizaciones | Sales ops, finanzas, cualquiera con CSVs |
| **simplify** | Revisa código por calidad y lo simplifica | Cualquiera revisando el output de Claude |

### Cómo instalar un skill

1. Ve a [skills.sh](https://skills.sh/) y encuentra un skill que te guste
2. Copia el comando de instalación (se muestra en la página del skill)

    ![Comando de instalación del skill](images/skills-install-command.png)

3. Pégalo en tu terminal (fuera de Claude Code, o con `!` delante si estás dentro)

    ![Selector de agentes al instalar un skill](images/skills-agent-picker.png)

4. Te va a preguntar con qué agentes instalarlo: selecciona **Claude Code**. Aquí el ratón no funciona — muévete con las flechas ↑↓, marca con la barra espaciadora y confirma con Enter
5. Cuando pregunte el alcance, elige **global** (para que esté disponible en todos tus proyectos) y el método **Symlink**
6. Abre una sesión nueva de Claude Code — las skills se cargan al iniciar la sesión, así que las que instales mientras Claude ya está corriendo no aparecerán hasta que reinicies

### Pruébalo ahora

Instala un skill del marketplace y pruébalo. Por ejemplo, después de instalar **frontend-design**, podrías pedirle a Claude:

> `Crea una landing page sencilla para una campaña DTC de Nike dirigida a corredores Gen Z`

Claude usará las instrucciones del skill para producir un resultado pulido — mucho mejor que preguntar sin el skill.

Por cierto, a mí me quedó guapísima 👇

![Landing de Nike creada con el skill frontend-design](images/nike-landing-example.png)

## Crea tus propios Skills

Una vez que hayas visto cómo son los skills, puedes crear los tuyos. Los skills son archivos de texto simples almacenados en `.claude/skills/`.

### Pídele a Claude que cree uno

La forma más fácil:

```
Crea un skill llamado "meeting-notes" que formatee notas de reunión en:
1. Resumen de la reunión (fecha, asistentes)
2. Decisiones clave
3. Puntos de acción (tarea, responsable, fecha límite)
4. Preguntas abiertas
```

Claude creará el archivo por ti en la ubicación correcta — por defecto en `~/.claude/skills/` para que esté disponible en todos tus proyectos. Si en cambio lo quieres limitado a un solo proyecto, díselo a Claude en tu petición (por ejemplo *"créalo como skill de proyecto"*).

### Usando tus skills

Una vez creado, puedes usar un skill de tres formas:

- **Escribe el slash command**: `/meeting-notes` y luego pega tus notas
- **Menciónalo en tu prompt**: "Crea una landing page para la campaña DTC de Nike **usando el skill de frontend-design**" — esto asegura que Claude use el skill en vez de hacerlo por libre
- **Solo pídelo naturalmente**: "Aquí están mis notas de reunión de hoy, por favor organízalas" — Claude puede reconocer la solicitud y activar el skill automáticamente

> **Importante:** Claude no siempre activa los skills por su cuenta. Si instalas un skill como **frontend-design** y solo pides "crea una landing page," Claude podría hacerlo sin usar el skill — y el resultado no será tan bueno. Para asegurarte, **menciona el skill en tu prompt** o usa el slash command.

### Haz que un skill esté siempre activo en un proyecto

Si quieres que Claude **siempre** use un skill específico en un proyecto, añádelo a tu memoria de proyecto (`CLAUDE.md`). Abre el archivo desde Cursor o escribe en Claude Code:

```
! open CLAUDE.md
```

Añade una línea como:

```
Cuando crees cualquier interfaz frontend, usa siempre el skill frontend-design.
Cuando formatees notas de reunión, usa siempre el skill meeting-notes.
```

Así no tienes que acordarte de mencionar el skill cada vez — Claude lo usará automáticamente en cada conversación de ese proyecto.

## Ejemplo real: Skill de emails de venta

Este es un skill real usado por el equipo de ventas de una empresa de recruiting. Estandariza cómo el equipo escribe emails de outreach — tono consistente, siempre con datos, siempre con un cierre suave.

Así se ve el archivo `SKILL.md` (acortado para claridad):

```markdown
# Sales Emails Skill

## Cómo usar
Cuando necesites escribir un email de venta:
1. Identifica el tipo de email del catálogo (pregunta si no está claro)
2. Recopila los inputs necesarios para ese tipo
3. Identifica el idioma (según conversaciones previas; español por defecto)
4. Redacta el email siguiendo la estructura y tono de ese tipo

## Principios universales de tono
1. **Cálido y personal** — Primera persona del singular. Usa el nombre del
   contacto. Referencia la última conversación o contexto compartido.
2. **Basado en datos** — Siempre incluye números específicos: horas ahorradas,
   coste por proceso, oportunidad total. Los números generan credibilidad.
3. **Estructurado para lectores ocupados** — Empieza con contexto, usa
   resúmenes en viñetas, mantenlo escaneable.
4. **Cierre suave, nunca agresivo** — Propone un siguiente paso, no lo exijas.
5. **Seguro pero no arrogante** — Di claramente lo que puedes hacer.
   Ancla las afirmaciones en los datos del cliente, no en lenguaje de marketing.

## Tipos de email

### Tipo 1: Follow-up de Business Case
Cuando: Después de presentar un business case. Objetivo: enviar un resumen
que puedan circular internamente.

Inputs necesarios:
- Nombre del contacto y empresa
- Qué se discutió/acordó
- Números clave (horas ahorradas, coste/hora, tamaño del equipo, oportunidad total)
- Alcance del piloto propuesto (típico: 10-20% del volumen)

Estructura:
Subject: Business Case [Empresa] x [Tu Empresa]
- Saludo referenciando la reunión
- Viñetas de resumen con cálculos (horas x coste = ahorro)
- Propuesta de piloto (enmarcado colaborativo)
- CTA suave

### Tipo 2: Follow-up post-reunión
[...]

### Tipo 3: Propuesta de piloto
[...]

### Tipo 4: Intro en frío
[...]

## Checklist
Antes de entregar cualquier borrador:
- Es el saludo cálido y personal?
- Son todos los números específicos y los cálculos visibles?
- Es el CTA suave y claro (un solo siguiente paso)?
- Está en el idioma correcto?
- Suena personal, no como una plantilla?
```

Fíjate en lo que hace este skill efectivo:

- **Trigger claro** — le dice a Claude exactamente cuándo activarse
- **Principios universales** — reglas de tono que aplican a todos los tipos de email
- **Plantillas estructuradas** — cada tipo tiene inputs, estructura y guías
- **Un checklist** — control de calidad antes de entregar el resultado
- **Reglas de idioma** — maneja equipos bilingües de forma natural

El equipo de ventas no necesita explicar sus estandares de email cada vez. Solo dicen "escribe un email de follow-up a Maria de Acme sobre el piloto" y Claude produce un borrador que coincide con su voz, incluye los datos correctos, y sigue su formato.

## Consejos

| Haz | Evita |
|----|-------|
| Explora el marketplace antes de crear desde cero | Reinventar skills que ya existen |
| Mantén un skill enfocado en una sola tarea | Hacer un skill que intente hacer todo |
| Incluye ejemplos del resultado esperado en tu skill | Dejar que Claude adivine el formato |
| Comparte skills útiles con tu equipo | Guardarte flujos de trabajo útiles |

