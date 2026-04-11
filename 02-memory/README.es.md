# Memoria

> Sin memoria, cada conversación con Claude es una primera cita.

En la lección de Voz dijimos que lo más importante es dar buen contexto. La memoria es cómo haces ese contexto **permanente**.

Cada vez que inicias una conversación nueva, Claude empieza desde cero — no sabe quién eres, en qué trabajas, ni cómo te gustan las cosas. Sin memoria, tendrías que explicar todo de nuevo cada vez.

La memoria es un archivo de texto simple que Claude lee al inicio de **cada** conversación. Tú escribes lo que Claude debe saber, y lo recuerda — automáticamente, siempre.

## Dos tipos de memoria

Cuando escribes `/memory` en Claude Code, verás dos opciones:

![El menú de /memory en Claude Code](./images/claude-memory-menu.png)

### 1. User memory — sobre ti

**Dónde vive:** `~/.claude/CLAUDE.md` (en tu carpeta personal)

Te sigue a todas partes, en todos los proyectos. Pon aquí cosas que siempre son verdad sobre ti:

- Tu rol y a qué te dedicas
- Tu idioma preferido
- Cómo te gustan las respuestas formateadas
- Cosas que Claude siempre debe hacer (o nunca hacer)

### 2. Project memory — sobre el proyecto

**Dónde vive:** `./CLAUDE.md` (dentro de la carpeta del proyecto)

Solo aplica al proyecto actual. Se queda con la carpeta. Pon aquí cosas como:

- De qué trata el proyecto
- Archivos clave y qué contienen
- Terminología y nombres
- Reglas específicas de este proyecto

## Qué poner en la memoria

La mayoría de la gente solo pone lo básico: su rol y algunas preferencias. Pero los que sacan más valor de Claude añaden también **lecciones aprendidas** — cosas que descubrieron que funcionan o no funcionan:

```
Soy product manager en una empresa de SaaS B2B para RRHH.
Prefiero respuestas en español, con bullet points.
Mantén los resúmenes en menos de 200 palabras.

Lecciones:
- No uses tablas para comparaciones — el equipo prefiere listas con viñetas.
- Siempre incluye un resumen ejecutivo al principio de los informes.
- Cuando analices datos de ventas, compara siempre año contra año.
```

> **Piénsalo como entrenar a un nuevo empleado.** No solo le dirías qué hace la empresa — también le dirías tus preferencias y errores a evitar. Cuanto mejor sea el briefing, mejor trabaja desde el primer día.

## Configurando tu memoria

Vamos a configurar ambos tipos usando el proyecto de Nike con el que has estado trabajando.

### Paso 1: Configura tu User memory

En Claude Code, escribe el siguiente comando para abrir tu archivo de memoria personal:

```
! open ~/.claude/CLAUDE.md
```

Esto abre el archivo en Cursor donde puedes editarlo cómodamente. Agrega algo así:

```
Soy product manager.
Prefiero las respuestas en español.
Mantén los resúmenes en menos de 200 palabras.
Usa bullet points en vez de párrafos largos.
Siempre explica las cosas en lenguaje simple, no técnico.
```

Guarda el archivo (`Cmd+S` en Mac, `Ctrl+S` en Windows) y listo.

> **Nota:** También puedes usar `/memory` y seleccionar "Edit User memory", pero eso abre un editor de terminal (vim) que puede ser confuso. El comando `! open` es más simple porque abre el archivo directamente en Cursor.

### Paso 2: Configura tu Project memory

Para la memoria de proyecto, la mejor práctica es: **cada vez que empieces a trabajar en una carpeta de proyecto nueva, ejecuta `/init` como tu primer comando.** Claude escaneará tus archivos, entenderá el proyecto, y creará un `CLAUDE.md` automáticamente.

1. Abre Claude Code en tu carpeta de proyecto
2. Escribe `/init`
3. Claude lee tus archivos y genera un `CLAUDE.md` con el contexto del proyecto

Eso es todo. Claude descubre de qué trata el proyecto, cuáles son los archivos clave, y escribe la memoria por ti.

Puedes revisar y editar lo que Claude generó. Solo abre `CLAUDE.md` desde el explorador de archivos en Cursor (aparecerá en la barra lateral después de que Claude lo cree).

Por ejemplo, para el proyecto de Nike, Claude podría generar algo así:

```
Este es un proyecto de análisis competitivo de Nike.

Archivos clave:
- competitive-analysis.md — el informe principal con fortalezas, debilidades, oportunidades y amenazas
- sales-data.csv — ingresos trimestrales por región (North America, EMEA, Greater China, APLA)
- notes.txt — notas de reunión de la revisión de estrategia de marca del 15 de marzo

Contexto importante:
- Estamos evaluando la posición de Nike frente a Adidas y New Balance
- El enfoque está en la estrategia DTC y la transformación digital
- La recuperación en China es una preocupación clave del equipo
```

Revísalo, ajusta lo que falte, guarda y listo.

> **Hazlo un hábito.** Cada vez que abras una carpeta de proyecto nueva, ejecuta `/init` primero. Te toma 30 segundos y Claude empieza cada conversación sabiendo en qué estás trabajando.

## Adiciones rápidas a la memoria

No siempre necesitas abrir el archivo de memoria. Durante una conversación, puedes agregar notas rápidas con `#`:

> `# Al analizar datos de ventas, siempre comparar el crecimiento año contra año`

> `# Nuestro año fiscal empieza en junio, no en enero`

Claude las agregará a tu memoria de proyecto automáticamente.

## Consejos para una buena memoria

**Mantenla concisa.** Claude lee todo tu archivo de memoria al inicio de cada conversación. **Mantenla por debajo de 150-200 instrucciones** — más allá de eso, Claude empieza a ignorar reglas. Una memoria enfocada y bien organizada funciona mucho mejor que una larga.

**Actualízala regularmente.** A medida que tu proyecto evoluciona, actualiza la memoria. Elimina cosas que ya no son verdad. Agrega nuevo contexto conforme lo aprendes.

**Sé específico.** La misma regla que con la voz — la vaguedad es el enemigo:

| Buenas entradas de memoria | Entradas menos útiles |
|---|---|
| "Nuestra fecha límite de Q4 es el 30 de marzo" | "Tenemos una fecha límite" |
| "Compara todos los competidores contra Nike como referencia" | "Haz buen análisis" |
| "Las cifras de ingresos están en millones de USD" | "Ten cuidado con los números" |

## Cómo interactúan las dos capas

Cuando ambas memorias están configuradas, Claude las lee al inicio de cada conversación. Si hay un conflicto, **la memoria de proyecto gana sobre la de usuario** para ese proyecto.

| Capa | Ubicación | Alcance | Ejemplo |
|------|-----------|---------|---------|
| **User Memory** | `~/.claude/CLAUDE.md` | Todos tus proyectos | "Soy PM, usa viñetas" |
| **Project Memory** | `./CLAUDE.md` en la raíz del proyecto | Solo este proyecto | "Los competidores son Adidas, New Balance..." |

Por ejemplo: si tu User Memory dice "usa EUR para moneda" pero la Project Memory dice "usa USD", Claude usará USD para ese proyecto.

## El bucle de aprendizaje

La mayor diferencia entre los buenos y los excelentes usuarios de Claude Code es el **bucle de aprendizaje**. Después de cada proyecto o sesión:

1. **Anota qué funcionó** — qué prompts dieron buenos resultados a la primera?
2. **Anota qué no funcionó** — dónde fue Claude en la dirección equivocada?
3. **Actualiza tu CLAUDE.md** — añade las lecciones para que Claude no repita errores

```
Añade a mi memoria de proyecto: "Cuando crees informes, siempre
incluye un resumen ejecutivo arriba. El equipo se quejó la
última vez cuando estaba enterrado al final."
```

Con el tiempo, tu CLAUDE.md se convierte en un documento vivo que hace a Claude más inteligente con cada proyecto. Las personas que sacan más valor de Claude Code son las que iteran en sus archivos de memoria — no las que escriben los mejores prompts.

## Lo que la memoria NO es

La memoria **no** es un historial de conversaciones. Claude no recuerda de qué hablaste ayer. La memoria es un conjunto de instrucciones y contexto que Claude lee de nuevo cada vez.

Piensa en ella como un documento de briefing que le entregas a un nuevo miembro del equipo en su primer día — no ha estado en tus reuniones, pero si el briefing es bueno, puede ponerse al día rápidamente.
