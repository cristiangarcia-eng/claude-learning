# Memoria

**Ponle a Claude el contexto una vez — y se acuerda de tu proyecto, tu estilo y tus lecciones para siempre.**

Inés es estratega de marca en Barcelona y lleva 4 clientes. Cada lunes se pasaba 18 minutos pegando el mismo contexto en Claude para cada uno — sector, competidores, tono de voz, las campañas del mes pasado. El martes, lo mismo. 72 minutos a la semana volviendo a presentarle Claude a proyectos en los que le había ayudado el día anterior.

Hasta que descubrió la memoria.

> Sin memoria, cada conversación con Claude es una primera cita.

La memoria es cómo haces que el contexto sea **permanente**. Cada vez que inicias una conversación nueva, Claude empieza desde cero — no sabe quién eres, en qué trabajas, ni cómo te gustan las cosas. Con memoria, Claude lee un archivo de texto al inicio de **cada** conversación con todo lo que le hayas contado sobre ti y tu proyecto — automáticamente, siempre.

## Dónde guarda las cosas Claude Code

Antes de entrar en la memoria en concreto, vale la pena saber dónde guarda Claude Code tus cosas en general. Piensa en Claude Code como cualquier otra app de tu computadora (Word, Spotify, Chrome). Guarda algunos archivos en tu máquina para recordar tus cosas entre sesiones. Hay tres cosas que vale la pena conocer:

- **Tus conversaciones** — se guardan en tu propia computadora, no en la nube. Si cierras Claude hoy y vuelves mañana, tu historial de chat sigue ahí esperándote.
- **Tus preferencias globales y tu memoria** — cosas que aplican a *todos* tus proyectos. Viven en una carpeta oculta llamada `.claude` dentro de tu carpeta de usuario — la carpeta principal de tu Mac o PC que tiene tu nombre. Tu User memory (la que estamos a punto de configurar) vive aquí.
- **Tu configuración y memoria específica del proyecto** — reglas que solo aplican a *este* proyecto. Viven dentro del proyecto mismo, así cada proyecto puede tener su propia personalidad. Tu Project memory vive aquí.

> **No tienes que crear nada de esto.** Claude arma estas carpetas automáticamente la primera vez que hacen falta — nunca las tendrás que crear a mano.

**¿Y la privacidad?** Lo único que sale de tu computadora es el mensaje que le escribes a Claude — exactamente igual que cuando chateas con ChatGPT. Tus archivos, tu configuración, tu memoria y tu historial de conversaciones se quedan todos en tu máquina.

Con esa imagen en mente, veamos los dos tipos de memoria.

## Dos tipos de memoria

Cuando escribes `/memory` en Claude Code, verás un menú. Ignora la tercera opción (*"Open auto-memory folder"*) por ahora — es solo un atajo. Las dos que importan son **User memory** y **Project memory**:

![El menú de /memory en Claude Code](./images/claude-memory-menu.png)

### 1. User memory — sobre ti

**Piénsalo como:** una nota adhesiva que Claude lleva siempre consigo, sin importar en qué proyecto estés trabajando. Es un solo archivo, guardado dentro de tu carpeta de usuario — la carpeta principal de tu Mac o PC que tiene tu nombre — y todos los proyectos leen de él.

Te sigue a todas partes, en todos los proyectos. Pon aquí cosas que siempre son verdad sobre ti:

- Tu rol y a qué te dedicas
- Tu idioma preferido
- Cómo te gustan las respuestas formateadas
- Cosas que Claude siempre debe hacer (o nunca hacer)

### 2. Project memory — sobre el proyecto

**Piénsalo como:** un documento de briefing que vive dentro de una carpeta de proyecto específica. Claude solo lo lee cuando estás trabajando en esa carpeta — en cualquier otro proyecto, es invisible.

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

![El comando ! open en el modo bash de Claude Code](./images/bash-mode-open.png)

El `!` al principio es importante — le dice a Claude Code que quieres ejecutar un comando de terminal en lugar de chatear con Claude. Verás que el prompt se vuelve rosa y aparece abajo la etiqueta *"! for bash mode"*, igual que en la captura. Pulsa Enter y el archivo se abrirá en Cursor donde puedes editarlo cómodamente.

Sí, escribir algo así es aburridísimo — para eso está exactamente el [input por voz](/es/lessons/voice-input) que configuramos en la lección anterior. Pulsa el atajo de voz y simplemente *habla* tu contexto en voz alta: quién eres, en qué trabajas, cómo te gustan las cosas, las manías que le importan a tu equipo. Diez segundos hablando le ganan a dos minutos escribiendo, y el resultado suele ser más rico porque piensas en voz alta en lugar de ir editando sobre la marcha.

Aquí tienes una plantilla aproximada de a lo que quieres llegar:

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

Así se ve cuando corre — en este caso sobre una carpeta `nike-analysis`:

![Claude Code ejecutando /init sobre la carpeta nike-analysis, leyendo archivos y escribiendo CLAUDE.md](./images/init-output.png)

Fíjate lo que está pasando en la captura: Claude lee los archivos, escribe un borrador de `CLAUDE.md` en unos 40 segundos, e incluso señala que esta es una carpeta de referencia suelta (no un repo de código real) para no inventarse sistemas de build o herramientas que no existen. Se adapta al tipo de carpeta en la que estés.

Cuando termina, aparece un `CLAUDE.md` nuevo justo dentro de tu carpeta de proyecto — puedes abrir Finder y verlo al lado del resto de tus archivos:

![La carpeta nike-analysis en Finder mostrando el nuevo archivo CLAUDE.md junto a competitive-analysis.md, notes.txt y sales-data.csv](./images/claude-md-in-finder.png)

Esa es tu memoria de proyecto. A partir de ahora, cada vez que abras Claude Code en esta carpeta, leerá ese archivo primero.

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
