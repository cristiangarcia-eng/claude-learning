# Mejores Practicas

## Como hablarle a Claude de manera efectiva

Claude Code es como un colega muy inteligente. Cuanto mas claro te comuniques, mejores resultados obtendras.

## Se especifico, no vago

El consejo mas importante: **di exactamente lo que quieres**.

| En lugar de... | Prueba... |
|--------------|--------|
| "Arregla la pagina de inicio" | "Cambia el titulo principal de la pagina de inicio a 'Bienvenido a Nova'" |
| "Hazlo ver mejor" | "Aumenta el tamaño de fuente de los encabezados y agrega mas espacio entre secciones" |
| "Hay un bug" | "Los usuarios ven una pantalla en blanco despues de hacer clic en el boton de login" |
| "Actualiza la documentacion" | "Agrega una seccion sobre nuestra politica de reembolsos a la pagina de FAQ" |

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

Cada conversacion tiene un limite de memoria. Cuando se llena, Claude empieza a olvidar.

**Haz esto:**
- Un tema por sesion
- Escribe `/clear` al cambiar de tema
- Manten tus solicitudes enfocadas

**Evita esto:**
- Preguntar sobre autenticacion, luego precios, luego diseño, luego bugs — todo en una sesion
- Sesiones muy largas sin limpiar

## Corrige el rumbo temprano

Si Claude empieza a ir en la direccion equivocada:

- Presiona **Esc** para detenerlo inmediatamente
- Di "No, me referia a..." y redirige
- Si esta realmente confundido, escribe `/clear` y empieza de nuevo con un mejor prompt

> Despues de dos correcciones sobre el mismo tema, es mas rapido hacer `/clear` y escribir un mejor prompt inicial que seguir corrigiendo.

## La tecnica de entrevista

Para tareas mas grandes, deja que Claude te haga preguntas primero:

```
Quiero rediseñar nuestro flujo de onboarding. Entrevistame
sobre lo que tengo en mente — pregunta sobre objetivos, tipos de usuario
y restricciones antes de hacer cualquier cambio.
```

Claude hara preguntas inteligentes sobre cosas que quizas no habias considerado. Una vez alineados, puede ejecutar con mucha mas precision.

## Resumen: las reglas de oro

1. **Se especifico** — di exactamente lo que quieres
2. **Explora primero** — deja que Claude entienda antes de cambiar
3. **Limpia seguido** — `/clear` entre diferentes temas
4. **Usa el Modo Plan** — cuando solo quieres entender, no cambiar
5. **Deja que Claude verifique** — dile como revisar su propio trabajo
6. **Corrige rapido** — Esc y redirige si va por mal camino
7. **Tecnica de entrevista** — para tareas grandes, deja que Claude haga preguntas primero
