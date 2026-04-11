# Optimizar Tokens

Claude Code usa tokens cada vez que envías un mensaje, y cada mensaje reprocesa toda la conversación anterior. Entender cómo funcionan los tokens te ayuda a gastar menos sin sacrificar calidad.

## Cómo se gastan los tokens

Cada vez que envías un mensaje, Claude no lee solo tu último mensaje — relee **toda** la conversación desde el principio. Esto significa:

| Turno | Lo que Claude procesa | Tokens gastados (aprox) |
|-------|----------------------|------------------------|
| Mensaje 1 | Tu mensaje | 500 |
| Mensaje 2 | Mensaje 1 + respuesta 1 + tu mensaje 2 | 2,000 |
| Mensaje 5 | Todo lo anterior + tu mensaje 5 | 8,000 |
| Mensaje 10 | Todo lo anterior + tu mensaje 10 | 25,000+ |

El gasto crece exponencialmente. Un chat de 10 turnos no cuesta 10x lo que un mensaje — cuesta mucho más.

## Técnica 1: `/clear` entre tareas

La técnica más simple y efectiva. Cada vez que cambias de tema, escribe `/clear`. Esto reinicia la conversación y Claude empieza limpio.

```
Tarea 1: "Resume este PDF"
→ Claude responde
→ /clear

Tarea 2: "Analiza este CSV"
→ Claude responde
→ /clear
```

Sin `/clear`, la tarea 2 arrastra todo el contexto de la tarea 1 — tokens desperdiciados en información que ya no necesitas.

> **Regla de oro**: si llevas más de 5-6 turnos en una conversación y vas a cambiar de tema, haz `/clear`.

## Técnica 2: Agrupa preguntas en un solo mensaje

Mucha gente cree que separar preguntas en mensajes distintos da mejores resultados. Casi siempre es al revés.

Tres mensajes separados = tres cargas de contexto completas. Un mensaje con tres preguntas = una sola carga.

En vez de esto:
```
Mensaje 1: "Resume este artículo"
Mensaje 2: "Ahora dame los puntos principales"
Mensaje 3: "Ahora sugiéreme un título"
```

Haz esto:
```
Resume este artículo, dame los puntos principales,
y sugiéreme un título.
```

Ahorras tokens dos veces: menos recargas de contexto, y te alejas del límite. Además, las respuestas suelen ser mejores porque Claude ve el panorama completo desde el principio.

## Técnica 3: Prompts específicos

Paradójicamente, un prompt más largo al principio **ahorra** tokens. Un prompt vago genera ida y vuelta:

**Prompt vago (5 turnos, ~15,000 tokens):**
```
Hazme un análisis de ventas
→ "¿De qué datos?"
Dame las ventas de Q3
→ "¿En qué formato?"
Una tabla comparativa por región
→ "¿Incluyo tendencias?"
Sí, con tendencias YoY
→ Resultado final
```

**Prompt específico (1 turno, ~3,000 tokens):**
```
Analiza sales-data.csv. Crea una tabla comparativa de ventas
por región para Q3, con tendencias year-over-year.
Formato: tabla markdown con columnas Región, Q3 actual,
Q3 anterior, y variación %.
```

El segundo prompt gasta **5x menos tokens** y obtiene el resultado que quieres a la primera.

## Técnica 4: Delegar a subagentes

Cuando Claude necesita procesar algo pesado — logs, búsquedas extensas, análisis de muchos archivos — toda esa salida inunda tu contexto y consume tokens rápidamente.

Si le pides que use un subagente, la salida pesada se queda en el contexto del subagente y solo un resumen vuelve a tu conversación principal. Tu ventana se mantiene limpia y barata.

Claude lo hace automáticamente muchas veces, pero puedes pedirlo explícitamente:

```
Usa un subagente para buscar en todos los archivos de log
y dame un resumen de los errores.
```

## Técnica 5: `/compact` para conversaciones largas

Si estás en medio de un trabajo que no quieres perder pero la conversación se está alargando, usa `/compact` en vez de `/clear`. Claude resumirá todo el historial en un resumen compacto, liberando tokens sin perder contexto.

Puedes incluso darle instrucciones sobre qué mantener:

```
/compact enfócate en las decisiones sobre la estructura del informe
```

## Técnica 6: Modo Caveman

Si las respuestas de Claude te parecen demasiado largas para lo que necesitas, prueba [Modo Caveman](https://github.com/JuliusBrussee/caveman) — un skill que hace que Claude responda de forma directa y sin relleno: sin artículos, sin formalismos, sin explicaciones innecesarias.

En benchmarks reales, una respuesta de 1,180 tokens baja a 159 — eso es un **~85% menos de tokens de salida**. Instálalo con:

```
/install-skill https://github.com/JuliusBrussee/caveman
```

No afecta a la calidad del trabajo de Claude — solo a cómo te comunica los resultados.

## Técnica 7: Elige el modelo adecuado

No todas las tareas necesitan el modelo más potente:

| Tarea | Modelo recomendado | Por qué |
|-------|-------------------|---------|
| Preguntas rápidas, buscar un dato | **Haiku** | Rápido y barato |
| Trabajo del día a día | **Sonnet** | Buen balance calidad/coste |
| Análisis complejo, documentos largos | **Opus** | Máxima calidad |

Cambia de modelo con `/model`. Para preguntas simples como "¿qué hay en este archivo?" no necesitas Opus.

## Monitorea tu gasto

Escribe `/cost` en cualquier momento para ver cuántos tokens has usado en la sesión actual. Si ves que una sesión se dispara, probablemente necesitas un `/clear` o `/compact`.

> **Consejo**: Puedes ver tu consumo mensual total en [claude.ai/settings](https://claude.ai/settings) bajo la sección de uso.

## Resumen rápido

| Técnica | Ahorro estimado | Cuándo usarla |
|---------|----------------|---------------|
| `/clear` entre tareas | 50-80% | Siempre que cambies de tema |
| Prompts específicos | 60-80% | En cada mensaje |
| Subagentes | 40-60% | Procesamiento pesado de archivos |
| `/compact` | 30-50% | Conversaciones largas que no quieres perder |
| Modo Caveman | ~85% en output | Cuando no necesitas respuestas detalladas |
| Modelo adecuado | Variable | Tareas simples con Haiku/Sonnet |
