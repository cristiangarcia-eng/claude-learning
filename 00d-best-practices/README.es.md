# Mejores Prácticas

## Empieza con un plan

Antes de hacer cambios, siempre empieza en **Modo Plan**. Tienes dos formas de activarlo:

- **Atajo de teclado:** Presiona **Shift+Tab** dos veces — verás que el indicador de modo cambia en la parte inferior. Funciona en Mac, Windows y Linux.
- **En lenguaje natural:** Simplemente dile a Claude *"ponte en modo plan"* o *"switch to plan mode"*. Claude entiende la instrucción y cambia de modo.

En Modo Plan, Claude solo puede leer y analizar — no modificará ningún archivo. Esta es la mejor forma de empezar cualquier tarea porque Claude pensará en el enfoque antes de hacer nada.

Los datos lo confirman: **las tareas que empiezan con Modo Plan tienen éxito al primer intento el 77% de las veces**, comparado con solo el 40% cuando se salta directamente a los cambios. Planificar primero casi duplica tu tasa de éxito.

### Pruébalo: planifica un informe de mercado de Nike

Abre Claude Code en tu carpeta `nike-analysis` y activa el Modo Plan (con Shift+Tab dos veces, o dile *"ponte en modo plan"*). Luego escribe:

> `Quiero convertir este análisis competitivo en un informe de mercado completo. Planifica qué secciones agregar, qué datos del CSV incluir, y cómo estructurar el documento final.`

Claude leerá tus archivos y propondrá un plan detallado — sin cambiar nada. Puedes revisarlo, hacer preguntas y ajustar antes de que empiece cualquier trabajo.

Cuando el plan te parezca bien, Claude te ofrece varias opciones para continuar:

![Claude ofrece opciones después de planificar](./images/plan-mode-options.png)

Las opciones significan:

1. **Yes, auto-accept edits** — Claude ejecuta el plan y aplica todos los cambios sin pedirte permiso en cada paso. La opción más rápida.
2. **Yes, manually approve edits** — Claude ejecuta el plan pero te pide confirmación antes de cada cambio. Más control, más lento.
3. **No, refine with Ultraplan** — Claude refina el plan con más detalle antes de ejecutar. Útil si el plan es demasiado vago.
4. **Tell Claude what to change** — Te deja dar feedback sobre el plan antes de ejecutarlo. Ej: "quita la sección 3" o "empieza por el CSV".

Simplemente haz clic en la opción que prefieras y Claude empezará a trabajar.

Este enfoque de **planificar primero, ejecutar después** te da resultados mucho mejores que ir directamente a los cambios.

## Deja que Claude explore primero

Antes de pedir cambios, deja que Claude entienda el proyecto:

```
Lee el proyecto y explícame la estructura
como si fuera un product manager.
```

Luego:

```
Ahora que entiendes el proyecto, cambia los
nombres de los niveles de precio de Basic/Pro/Enterprise
a Starter/Growth/Scale.
```

Este enfoque de dos pasos da mucho mejores resultados que ir directamente a los cambios.

## La técnica de entrevista

Para tareas más grandes, deja que Claude te haga preguntas primero:

```
Quiero rediseñar nuestro flujo de onboarding. Entrevístame
sobre lo que tengo en mente — pregunta sobre objetivos, tipos de usuario
y restricciones antes de hacer cualquier cambio.
```

Claude hará preguntas inteligentes sobre cosas que quizás no habías considerado. Una vez alineados, puede ejecutar con mucha más precisión.

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

## Monitorea, no microgestiones

Cuando Claude está trabajando en una tarea grande, déjalo trabajar. No lo interrumpas cada 10 segundos con correcciones — esto rompe su flujo y gasta contexto.

En su lugar:
- **Observa la pestaña thinking** para ver qué está planeando Claude
- **Espera a que termine** antes de dar feedback
- **Da todas tus correcciones de una vez** en lugar de una por una

Piénsalo como delegar a un colega: le entregas la tarea, revisas cuando termina y das feedback en un solo lote. Las interrupciones constantes hacen a todos más lentos.

## Resumen: las reglas de oro

1. **Empieza con un plan** — Modo Plan antes de hacer cambios (77% de éxito vs 40%)
2. **Explora primero** — deja que Claude entienda el proyecto antes de pedirle cambios
3. **Un tema por sesión** — `/clear` al cambiar de tema, cada mensaje reprocesa todo
4. **Regla de las 2 correcciones** — si corriges dos veces lo mismo, `/clear` y reescribe el prompt
5. **Técnica de entrevista** — para tareas grandes, deja que Claude te haga preguntas primero
6. **No microgestiones** — deja que termine, luego da todo el feedback de una vez

