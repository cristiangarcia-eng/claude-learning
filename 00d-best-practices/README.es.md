# Mejores Prácticas

## Cómo hablarle a Claude de manera efectiva

Claude Code es como un colega muy inteligente. Cuanto más claro te comuniques, mejores resultados obtendrás.

## Sé específico, no vago (y ahórrate los formalismos)

El consejo más importante: **di exactamente lo que quieres**.

"¡Hola Claude! Espero que estés bien, me preguntaba si podrías ayudarme con..." está quemando tokens en palabras sin valor. Escribe como si pagaras por palabra — porque así es.

| En lugar de... | Prueba... |
|--------------|--------|
| "Arregla la página de inicio" | "Cambia el título principal de la página de inicio a 'Bienvenido a Nova'" |
| "Hazlo ver mejor" | "Aumenta el tamaño de fuente de los encabezados y agrega más espacio entre secciones" |
| "Hay un bug" | "Los usuarios ven una pantalla en blanco después de hacer clic en el botón de login" |
| "Actualiza la documentación" | "Agrega una sección sobre nuestra política de reembolsos a la página de FAQ" |

## Dale a Claude una forma de verificar su trabajo

Cuando sea posible, dile a Claude cómo verificar el resultado:

```
Cambia el email de la empresa a hello@nova.com en todas partes.
Después de hacer los cambios, busca en el codebase para confirmar
que no quedan referencias al email anterior.
```

```
Actualiza los precios en el sitio web. Después del cambio,
toma una captura de pantalla para que pueda verificar que se ve bien.
```

## Deja que Claude explore primero

Antes de pedir cambios, deja que Claude entienda el proyecto:

```
Lee el proyecto y explicame la estructura
como si fuera un product manager.
```

Luego:

```
Ahora que entiendes el proyecto, cambia los
nombres de los niveles de precio de Basic/Pro/Enterprise
a Starter/Growth/Scale.
```

Este enfoque de dos pasos da mucho mejores resultados que ir directamente a los cambios.

## Empieza con un plan

Antes de hacer cambios, siempre empieza en **Modo Plan**. Presiona **Shift+Tab** dos veces para activarlo — verás que el indicador de modo cambia en la parte inferior.

En Modo Plan, Claude solo puede leer y analizar — no modificará ningún archivo. Esta es la mejor forma de empezar cualquier tarea porque Claude pensará en el enfoque antes de hacer nada.

Los datos lo confirman: **las tareas que empiezan con Modo Plan tienen éxito al primer intento el 77% de las veces**, comparado con solo el 40% cuando se salta directamente a los cambios. Planificar primero casi duplica tu tasa de éxito.

### Pruébalo: planifica un informe de mercado de Nike

Abre Claude Code en tu carpeta `nike-analysis` y activa el Modo Plan (Shift+Tab dos veces). Luego escribe:

> `Quiero convertir este análisis competitivo en un informe de mercado completo. Planifica qué secciones agregar, qué datos del CSV incluir, y cómo estructurar el documento final.`

Claude leerá tus archivos y propondrá un plan detallado — sin cambiar nada. Puedes revisarlo, hacer preguntas y ajustar antes de que empiece cualquier trabajo.

Cuando el plan te parezca bien, sal del Modo Plan (presiona **Shift+Tab** para volver al modo normal) y dile a Claude:

> `Adelante, ejecuta el plan.`

Ahora Claude empezará a hacer los cambios reales. Este enfoque de **planificar primero, ejecutar después** te da resultados mucho mejores que ir directamente a los cambios.

## Mantén las conversaciones enfocadas (esto te ahorra dinero real)

Cada mensaje que envías reprocesa TODA la conversación anterior. Un chat de 10 turnos multiplica tu gasto de tokens x10 silenciosamente. Este es el coste oculto número uno para la mayoría de usuarios.

**Haz esto:**
- Un tema por sesión
- Escribe `/clear` al cambiar de tema
- Mantén tus solicitudes enfocadas
- Usa `/cost` para ver el uso de tokens de tu sesión actual

**Evita esto:**
- Preguntar sobre autenticación, luego precios, luego diseño, luego bugs — todo en una sesión
- Sesiones muy largas sin limpiar
- Continuar una conversación "porque sí" cuando ya has pasado a otra tarea

## La regla de las 2 correcciones

Si corriges a Claude dos veces sobre el mismo tema y sigue sin entenderlo, **deja de corregir y empieza de nuevo**. Escribe `/clear` y reescribe tu prompt desde cero — esta vez siendo más específico sobre lo que quieres.

Seguir corrigiendo a un Claude confundido pierde tiempo. Un prompt nuevo y bien escrito da mejores resultados más rápido que una cadena de correcciones.

## Corrige el rumbo temprano

Si Claude empieza a ir en la dirección equivocada:

- Presiona **Esc** para detenerlo inmediatamente
- Di "No, me refería a..." y redirige
- Si está realmente confundido, escribe `/clear` y empieza de nuevo con un mejor prompt

> Después de dos correcciones sobre el mismo tema, es más rápido hacer `/clear` y escribir un mejor prompt inicial que seguir corrigiendo.

## La técnica de entrevista

Para tareas más grandes, deja que Claude te haga preguntas primero:

```
Quiero rediseñar nuestro flujo de onboarding. Entrevistame
sobre lo que tengo en mente — pregunta sobre objetivos, tipos de usuario
y restricciones antes de hacer cualquier cambio.
```

Claude hará preguntas inteligentes sobre cosas que quizás no habías considerado. Una vez alineados, puede ejecutar con mucha más precisión.

## El bucle de aprendizaje

La mayor diferencia entre los buenos y los excelentes usuarios de Claude Code es el **bucle de aprendizaje**. Después de cada proyecto o sesión:

1. **Anota qué funcionó** — qué prompts dieron buenos resultados a la primera?
2. **Anota qué no funcionó** — donde fue Claude en la dirección equivocada?
3. **Actualiza tu CLAUDE.md** — añade las lecciones para que Claude no repita errores

```
Añade a mi memoria de proyecto: "Cuando crees informes, siempre
incluye un resumen ejecutivo arriba. El equipo se quejó la
última vez cuando estaba enterrado al final."
```

Con el tiempo, tu CLAUDE.md se convierte en un documento vivo que hace a Claude más inteligente con cada proyecto. Las personas que sacan más valor de Claude Code son las que iteran en sus archivos de memoria — no las que escriben los mejores prompts.

## Comprime imágenes antes de subirlas

Si le pasas a Claude una captura de pantalla, un mockup de diseño o cualquier imagen, asegúrate de que pese menos de **5 MB**. Las imágenes grandes consumen tu presupuesto de tokens rápidamente — una captura de 20 MB puede usar tantos tokens como una conversación entera.

Usa una herramienta gratuita como [iLoveIMG](https://www.iloveimg.com/compress-image) para reducir imágenes antes de pasárselas a Claude. Esto ahorra tokens y hace que Claude procese la imagen más rápido.

Dato importante: añadir o quitar imágenes entre mensajes puede romper el caché interno de prompts de Claude. Si estás trabajando en una tarea de UI con capturas de pantalla, intenta incluir todas las imágenes que necesites desde el principio en vez de ir añadiéndolas una por una en diferentes mensajes.

## Usa el Modo Caveman para reducir tokens de salida

Si las respuestas de Claude te parecen demasiado largas para lo que necesitas, prueba a instalar [Modo Caveman](https://github.com/JuliusBrussee/caveman) — un skill que hace que Claude responda en un estilo comprimido y directo: sin artículos, sin relleno, sin formalismos, pero con total precisión técnica.

En benchmarks reales, una respuesta de 1,180 tokens baja a 159 — eso es un ~65% menos de tokens de salida. Instálalo con:

```
/install-skill https://github.com/JuliusBrussee/caveman
```

## Delega tareas pesadas a subagentes

Cuando Claude necesita ejecutar tests, procesar logs o buscar en documentación extensa, toda esa salida pesada inunda el contexto de tu conversación — consumiendo tokens rápidamente.

En su lugar, deja que Claude delegue estas tareas a subagentes. La salida pesada se queda en el contexto del subagente, y solo un resumen conciso vuelve a tu conversación principal. Tu ventana principal se mantiene limpia y barata.

No necesitas hacer nada especial — Claude Code usa subagentes automáticamente cuando tiene sentido. Pero si ves que tu contexto crece rápido, puedes pedirlo explícitamente:

```
Usa un subagente para buscar en todos los archivos de log
y dame un resumen de los errores.
```

## Monitorea, no microgestiones

Cuando Claude está trabajando en una tarea grande, déjalo trabajar. No lo interrumpas cada 10 segundos con correcciones — esto rompe su flujo y gasta contexto.

En su lugar:
- **Observa la pestaña thinking** para ver qué está planeando Claude
- **Espera a que termine** antes de dar feedback
- **Da todas tus correcciones de una vez** en lugar de una por una

Piénsalo como delegar a un colega: le entregas la tarea, revisas cuando termina y das feedback en un solo lote. Las interrupciones constantes hacen a todos más lentos.

## Resumen: las reglas de oro

1. **Empieza con un plan** — siempre usa el Modo Plan antes de hacer cambios
2. **Sé específico** — di exactamente lo que quieres, ahórrate los formalismos
3. **Explora primero** — deja que Claude entienda antes de cambiar
4. **Limpia seguido** — `/clear` entre diferentes temas (cada mensaje reprocesa todo)
5. **Deja que Claude verifique** — dile cómo revisar su propio trabajo
6. **Corrige rápido** — Esc y redirige si va por mal camino
7. **Técnica de entrevista** — para tareas grandes, deja que Claude haga preguntas primero
8. **Comprime imágenes** — reduce antes de subir, evita añadirlas a mitad de conversación
9. **Delega lo pesado** — deja que los subagentes manejen las tareas verbosas
10. **Monitorea tu gasto** — usa `/cost` para ver el consumo de tokens por sesión

