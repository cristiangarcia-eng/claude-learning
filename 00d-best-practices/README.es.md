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

## Usa el Modo Plan para seguridad

Si te pone nervioso que Claude haga cambios, usa el **Modo Plan** (presiona **Shift+Tab** dos veces):

```
[Modo Plan] ¿Que archivos necesitarian cambiar si quisieramos
agregar un nuevo idioma al sitio web?
```

En Modo Plan, Claude solo puede leer y analizar — nunca modificar archivos. Perfecto para:
- Entender un codebase con el que no estas familiarizado
- Evaluar el alcance de un cambio antes de comprometerte
- Obtener una segunda opinion sobre como funciona algo

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

1. **Se específico** — di exactamente lo que quieres
2. **Explora primero** — deja que Claude entienda antes de cambiar
3. **Limpia seguido** — `/clear` entre diferentes temas
4. **Usa el Modo Plan** — cuando solo quieres entender, no cambiar
5. **Deja que Claude verifique** — dile como revisar su propio trabajo
6. **Corrige rápido** — Esc y redirige si va por mal camino
7. **Tecnica de entrevista** — para tareas grandes, deja que Claude haga preguntas primero
