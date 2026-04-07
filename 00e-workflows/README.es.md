# Flujos de Trabajo Prácticos

Tareas reales que puedes hacer con Claude Code — sin necesidad de experiencia en programación.

## Para Product Managers

### Entender que construyo el equipo

```
Explica las funcionalidades de este proyecto como si estuvieras
escribiendo notas de lanzamiento para los clientes.
```

```
¿Que cambio en los ultimos 10 commits? Resume cada
cambio en una oracion que un PM entenderia.
```

```
Lista todos los endpoints de la API y que hace cada uno,
en formato de tabla.
```

### Evaluar el alcance de una funcionalidad

```
Quiero agregar un toggle de "modo oscuro". ¿Que archivos
necesitarian cambiar? ¿Que tan complejo es en una escala del 1 al 10?
```

```
Necesitamos agregar traducciones al español en la app.
Analiza el codebase actual y dime:
1. ¿Como se maneja el texto actualmente?
2. ¿Cual es el esfuerzo para agregar soporte multi-idioma?
3. ¿Cuales son los riesgos?
```

### Escribir especificaciones desde el codebase

```
Lee el flujo de autenticacion de usuarios y escribe un documento
de especificacion tecnica que describa como funciona, incluyendo
un diagrama. Escribelo para una audiencia no tecnica.
```

### Rastrear deuda técnica

```
Encuentra todos los comentarios TODO y FIXME en el codebase.
Organizalos por prioridad y crea un resumen
que pueda compartir con el equipo de ingenieria.
```

---

## Para Diseñadores

### Entender la UI actual

```
Encuentra todos los valores de color CSS usados en este proyecto
y listalos. ¿Hay inconsistencias?
```

```
¿Que fuentes se estan usando? Lista cada declaracion de
font-family y donde aparece.
```

```
Encuentra todos los estilos de botones en el proyecto. ¿Cuantas
variantes diferentes de botones existen?
```

### Hacer cambios visuales

```
Cambia el color primario de marca de #3B82F6 a #8B5CF6
en todo el proyecto.
```

```
Actualiza la fuente de Inter a Plus Jakarta Sans
en todo el proyecto.
```

```
Agrega 24px mas de espacio entre secciones en la
landing page.
```

### Auditar consistencia

```
Encuentra todos los diferentes valores de border-radius usados
en el proyecto. Sugiere un conjunto consistente de valores
en los que deberiamos estandarizar.
```

```
Lista todos los valores de z-index usados en el CSS. ¿Hay
posibles conflictos de capas?
```

### Verificar accesibilidad

```
Audita la pagina de inicio en busca de problemas de accesibilidad.
Revisa contraste de colores, texto alternativo en imagenes,
y jerarquia adecuada de encabezados.
```

---

## Para Ventas y Marketing

### Actualizar texto del sitio web

```
Cambia el eslogan en la pagina de inicio de
"Build faster" a "Ship with confidence".
```

```
Agrega un nuevo testimonio a la landing page:
"Nova saved us 20 hours per week" — Sarah Chen, CTO at Acme
```

```
Actualiza la pagina de precios: renombra el plan "Pro"
a "Growth" y cambia el precio de $49 a $59.
```

### Encontrar y actualizar contenido

```
Encuentra cada lugar donde mencionamos "free trial"
y cambialo a "14-day free trial".
```

```
Lista todas las meta descriptions y titulos de pagina
del sitio web. ¿Cuales faltan?
```

### Analizar la competencia

```
Lee nuestra landing page y comparala con esta
pagina de la competencia: [pega URL o contenido].
¿Que nos falta?
```

### Tareas de SEO

```
Encuentra todas las imagenes sin texto alternativo en el proyecto.
Sugiere texto alternativo descriptivo para cada una.
```

```
Lista todas las paginas y sus URLs. ¿Cuales
no tienen meta tags adecuados?
```

---

## Para Todos

### Buscar en archivos

```
Encuentra cada mencion de "Acme Corp" en el proyecto.
```

```
¿Donde esta definido el email de contacto? Necesito actualizarlo.
```

### Generar documentación

```
Crea un archivo README que explique que es este proyecto,
como configurarlo, y a quien contactar para obtener ayuda.
Escribelo para una audiencia no tecnica.
```

### Analizar archivos de datos

```
Lee el archivo CSV en data/users.csv y dime:
- ¿Cuantos registros hay?
- ¿Cuales son las columnas?
- ¿Algun problema obvio de calidad de datos?
```

### Crear reportes desde el código

```
¿Cuantas paginas tiene este sitio web? Lista cada
pagina con su ruta URL y una descripcion de una linea.
```

---

## Consejos para todos los flujos de trabajo

### Empieza entendiendo
Siempre empieza pidiendo a Claude que explique lo que existe antes de hacer cambios.

### Usa el Modo Plan primero
Presiona **Shift+Tab** dos veces para entrar al Modo Plan cuando estés explorando. Claude solo leera, nunca escribira.

### Referencia archivos con @
En lugar de describir donde está un archivo, usa `@` para referenciarlo directamente:

```
Explica que hace @src/pages/pricing.tsx
```

### Pide un resumen después de los cambios
Después de que Claude haga cambios, pidele que resuma lo que hizo:

```
Resume todos los cambios que acabas de hacer en una lista de viñetas
que pueda compartir con el equipo en Slack.
```
