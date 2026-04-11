# Ejercicio 6: Pipeline de contenido de principio a fin

**Tiempo:** 18 minutos | **Nivel:** Avanzado

## Objetivo

Ejecutarás un pipeline de contenido completo de principio a fin — investigación, esquema, borrador y revisión — y luego empaquetarás todo ese flujo de trabajo como un plugin que cualquier persona de tu equipo pueda instalar y reutilizar con un solo comando.

**Lo que aprenderás:**
- Cómo dividir un entregable grande en etapas discretas del pipeline
- Cómo cada etapa alimenta contexto a la siguiente
- Cómo convertir un flujo de trabajo repetible en un plugin que otros puedan instalar
- La estructura de un plugin: slash command, plantillas y manifiesto

## Escenario

Tu equipo de marketing en Nike está preparando el lanzamiento de un nuevo producto ficticio: el **Nike ZephyrKnit** — una zapatilla de running enfocada en sostenibilidad, fabricada con 80% de plásticos reciclados del océano. Te han pedido producir un paquete de contenido para el lanzamiento. Primero ejecutarás el pipeline manualmente, y luego lo empaquetarás para que cualquier compañero de equipo pueda generar paquetes similares para futuros lanzamientos.

## Lo que tienes

Un brief de producto en `sample-brief.md` — la entrada inicial para tu pipeline.

## Preparación

> Si aún no has descargado los materiales de los ejercicios, mira las instrucciones de preparación en el [Ejercicio 1](../02-messy-spreadsheet/).

Crea una carpeta `content-pipeline` dentro de `Escritorio/Claude/projects/`. Copia los archivos de `06-content-pipeline` de los materiales descargados. Luego abre la carpeta en Cursor (**File → Open Folder**) e inicia Claude Code en la terminal.

## Tu tarea

### Parte 1: Ejecutar el pipeline manualmente

Trabaja cada etapa en orden. Cada paso se construye sobre la salida del anterior.

**Etapa 1 — Investigación**

Pídele a Claude:
```
Basándote en el brief de sample-brief.md, haz una investigación para este
lanzamiento de producto. Cubre: perfil del público objetivo, panorama
competitivo (qué están haciendo otras marcas con materiales reciclados),
ángulos clave de mensajes y posibles riesgos u objeciones. Guarda el
resultado como 01-research-notes.md
```

**Etapa 2 — Esquema**

```
Usando la investigación en 01-research-notes.md, crea un esquema detallado
para un paquete de contenido de lanzamiento. Incluye secciones para:
comunicado de prensa, copy para redes sociales (3 plataformas), anuncio
por email y puntos de conversación para el equipo de ventas interno.
Señala dónde necesitamos datos reales vs. estimaciones.
Guarda como 02-content-outline.md
```

**Etapa 3 — Borrador completo**

```
Escribe el paquete de contenido completo basándote en 02-content-outline.md.
Hazlo profesional y alineado con la marca de una gran empresa deportiva.
Incluye todas las secciones del esquema. Usa tablas donde sea útil.
Guarda como 03-full-draft.md
```

**Etapa 4 — Revisión y resumen ejecutivo**

```
Revisa 03-full-draft.md en cuanto a consistencia de tono, claridad de
mensajes y completitud. Luego crea un resumen ejecutivo de una página con:
la recomendación de lanzamiento, 3-5 mensajes clave, una tabla de
cronograma y próximos pasos claros. Guarda el resumen como
04-executive-summary.md
```

**Punto de control:** Ahora deberías tener cuatro archivos que forman la salida completa del pipeline. Abre cada uno y confirma que cada etapa se construye claramente sobre la anterior.

### Parte 2: Empaquetar como plugin

Ahora convierte este flujo de trabajo repetible en un plugin que cualquier persona de tu equipo pueda instalar.

5. Pídele a Claude:
   ```
   Ayúdame a empaquetar este pipeline de contenido como un plugin siguiendo
   el formato del módulo 07-plugins. El plugin debe incluir:

   - Un slash command: /launch-content que tome un brief de producto como entrada
   - Una plantilla: executive-summary-template.md para formato consistente
   - Un manifiesto plugin.json con nombre, versión y descripción

   Crea la estructura completa del plugin en .claude-plugin/
   ```

6. **Prueba el plugin.** Pruébalo con un brief diferente para asegurarte de que funciona de forma independiente:
   ```
   /launch-content "Nuevo producto: Nike TerraGrip zapatilla de trail running.
   Público: entusiastas del outdoor de 25-45 años. Precio: $160.
   Característica clave: tecnología de suela con agarre adaptativo. Lanzamiento: Q4."
   ```

### Parte 3: Hacerlo distribuible

7. Sigue la guía de distribución de [07-plugins](../../07-plugins/):
   - Confirma que `plugin.json` tiene nombre, versión y descripción
   - Agrega un README dentro de `.claude-plugin/` explicando qué hace el plugin y cómo usarlo
   - Considera qué configuraciones deberían ser personalizables (formato de salida, número de plataformas, tono)

## Conexión con el Módulo 07 (Plugins)

| Concepto de Plugin | Cómo lo usas aquí |
|-------------------|-------------------|
| **Estructura del plugin** (`.claude-plugin/`) | Paquete completo con comandos y plantillas |
| **Slash command** | Punto de entrada `/launch-content` |
| **Plantillas** | Formato consistente para el resumen ejecutivo |
| **Manifiesto plugin.json** | Lo hace instalable por otros |
| **Configuraciones personalizables** | Tono, cantidad de plataformas, formato de salida |

## Criterios de éxito

- [ ] Se crearon cuatro archivos: investigación, esquema, borrador completo, resumen ejecutivo
- [ ] Cada paso se construye claramente sobre el anterior (el contexto se mantiene)
- [ ] Existe una estructura de plugin en `.claude-plugin/`
- [ ] El plugin incluye un slash command y al menos una plantilla
- [ ] Ejecutar `/launch-content` con un nuevo brief produce un entregable completo
- [ ] Un manifiesto `plugin.json` lo hace instalable por compañeros de equipo

## Lo que aprendiste

Los plugins son el nivel más alto de reutilización en Claude Code. Los slash commands ahorran un paso. Las skills automatizan una capacidad. Los plugins agrupan un flujo de trabajo completo en un paquete que cualquiera puede instalar y ejecutar. Cuando un proceso es lo suficientemente valioso como para que todo tu equipo deba seguir los mismos pasos cada vez, eso es un plugin.
