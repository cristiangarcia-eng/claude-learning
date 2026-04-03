# Mejores Practicas

## Cómo hablarle a Claude de manera efectiva

Claude Code es como un colega muy inteligente. Cuanto más claro te comuniques, mejores resultados obtendras.

## Se específico, no vago

El consejo más importante: **di exactamente lo que quieres**.

| En lugar de... | Prueba... |
|--------------|--------|
| "Arregla la página de inicio" | "Cambia el titulo principal de la página de inicio a 'Bienvenido a Nova'" |
| "Hazlo ver mejor" | "Aumenta el tamaño de fuente de los encabezados y agrega más espacio entre secciones" |
| "Hay un bug" | "Los usuarios ven una pantalla en blanco después de hacer clic en el botón de login" |
| "Actualiza la documentación" | "Agrega una sección sobre nuestra politica de reembolsos a la página de FAQ" |

## Dale a Claude una forma de verificar su trabajo

Cuando sea posible, dile a Claude como verificar el resultado:

```
Cambia el email de la empresa a hello@nova.com en todas partes.
Despues de hacer los cambios, busca en el codebase para confirmar
que no quedan referencias al email anterior.
```

```
Actualiza los precios en el sitio web. Despues del cambio,
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

### Pruébalo: planifica un informe de mercado de Nike

Abre Claude Code en tu carpeta `nike-analysis` y activa el Modo Plan (Shift+Tab dos veces). Luego escribe:

> `Quiero convertir este análisis competitivo en un informe de mercado completo. Planifica qué secciones agregar, qué datos del CSV incluir, y cómo estructurar el documento final.`

Claude leerá tus archivos y propondrá un plan detallado — sin cambiar nada. Puedes revisarlo, hacer preguntas y ajustar antes de que empiece cualquier trabajo.

Cuando el plan te parezca bien, sal del Modo Plan (presiona **Shift+Tab** para volver al modo normal) y dile a Claude:

> `Adelante, ejecuta el plan.`

Ahora Claude empezará a hacer los cambios reales. Este enfoque de **planificar primero, ejecutar después** te da resultados mucho mejores que ir directamente a los cambios.

## Manten las conversaciones enfocadas

Cada conversación tiene un límite de memoria. Cuando se llena, Claude empieza a olvidar.

**Haz esto:**
- Un tema por sesión
- Escribe `/clear` al cambiar de tema
- Manten tus solicitudes enfocadas

**Evita esto:**
- Preguntar sobre autenticación, luego precios, luego diseño, luego bugs — todo en una sesión
- Sesiones muy largas sin limpiar

## Corrige el rumbo temprano

Si Claude empieza a ir en la direccion equivocada:

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

Claude hara preguntas inteligentes sobre cosas que quizás no habias considerado. Una vez alineados, puede ejecutar con mucha más precision.

## Resumen: las reglas de oro

1. **Empieza con un plan** — siempre usa el Modo Plan antes de hacer cambios
2. **Sé específico** — di exactamente lo que quieres
3. **Explora primero** — deja que Claude entienda antes de cambiar
4. **Limpia seguido** — `/clear` entre diferentes temas
5. **Deja que Claude verifique** — dile cómo revisar su propio trabajo
6. **Corrige rápido** — Esc y redirige si va por mal camino
7. **Técnica de entrevista** — para tareas grandes, deja que Claude haga preguntas primero
