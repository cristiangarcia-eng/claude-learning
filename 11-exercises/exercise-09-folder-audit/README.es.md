# Ejercicio 9: Auditoría de carpetas con el modo Print de CLI

**Tiempo:** 30 minutos | **Nivel:** Avanzado
**Módulo:** [10-cli](../../10-cli/) -- Modo print, piping y automatización por CLI
**Habilidad:** Usar `claude -p` (modo print) para operaciones en lote desde la terminal

## Objetivo

Aprenderás a usar el **modo print** de Claude Code (`claude -p`) para analizar archivos de forma no interactiva desde la línea de comandos. En lugar de abrir una sesión interactiva, ejecutarás comandos puntuales que leen archivos, los analizan y producen resultados -- el tipo de flujo de trabajo que puedes repetir con cualquier carpeta de documentos.

Esta es una habilidad clave para cualquier persona que necesite auditar, revisar o verificar la calidad de un conjunto de archivos rápidamente.

## Escenario

Eres Project Manager en **Orbit Task Manager** y tu equipo acaba de terminar la Fase 1 de un lanzamiento de producto. La carpeta del proyecto (`docs/`) contiene los documentos clave que se produjeron: un brief del proyecto, un documento de requisitos, un checklist de lanzamiento, notas de reuniones y un informe de estado. Antes del inicio de la Fase 2, tu director te pidió auditar estos documentos para verificar que estén completos y tengan buena calidad.

Usarás `claude -p` para analizar cada documento sin abrir una sesión interactiva -- rápido, repetible y automatizable.

## Lo que aprenderás

- Cómo funciona `claude -p` (modo print) y cuándo usarlo en lugar del modo interactivo
- Cómo enviar el contenido de archivos a Claude mediante piping
- Cómo ejecutar análisis en lote sobre múltiples archivos
- Cómo obtener salida estructurada (JSON) para automatización

## Instrucciones paso a paso

### Parte 1: Conceptos básicos del modo print

1. Abre tu terminal y navega a la carpeta de este ejercicio:

   ```bash
   cd 11-exercises/exercise-09-folder-audit
   ```

2. **Ejecuta tu primer comando en modo print.** Esto envía un prompt a Claude e imprime la respuesta -- sin sesión interactiva:

   ```bash
   claude -p "Lista todos los archivos en la carpeta docs/ y describe qué parece ser cada uno según su nombre de archivo."
   ```

3. **Envía un archivo a Claude para análisis mediante piping:**

   ```bash
   cat docs/project-brief.md | claude -p "Revisa este brief de proyecto. Califícalo del 1 al 5 en: claridad de objetivos, completitud del alcance e identificación de stakeholders. Explica cada calificación."
   ```

4. **Analiza otro archivo:**

   ```bash
   cat docs/launch-checklist.md | claude -p "Revisa este checklist de lanzamiento. ¿Faltan pasos obvios? ¿El orden es lógico? ¿Qué agregarías?"
   ```

### Parte 2: Análisis en lote de todos los documentos

5. **Ejecuta una verificación de calidad en cada documento.** Usa un bucle para analizar cada archivo:

   ```bash
   for file in docs/*.md; do
     echo "=== Analizando: $file ==="
     cat "$file" | claude -p "Revisa este documento en cuanto a completitud y calidad. Califícalo del 1 al 10 y lista los 3 principales problemas o vacíos. Sé específico. Comienza tu respuesta con la calificación como número."
     echo ""
   done
   ```

6. **Genera un informe de auditoría combinado.** Envía todos los documentos juntos mediante piping:

   ```bash
   cat docs/*.md | claude -p "Estos son todos los documentos del proyecto para un lanzamiento de producto. Audítalos como conjunto:
   - ¿Falta algo que un proyecto completo debería tener?
   - ¿Hay contradicciones entre los documentos?
   - ¿Qué documento necesita más mejoras y por qué?
   - Puntuación general de preparación del 1 al 10.
   Escribe tu respuesta como un breve informe de auditoría."
   ```

### Parte 3: Salida estructurada

7. **Obtén salida en JSON** para resultados legibles por máquina:

   ```bash
   cat docs/requirements.md | claude -p "Analiza este documento de requisitos. Devuelve un objeto JSON con: total_requirements (número), unclear_requirements (array de strings), missing_sections (array de strings), quality_score (1-10)" --output-format json
   ```

8. **Combínalo con otras herramientas de línea de comandos:**

   ```bash
   cat docs/status-report.md | claude -p "Lista todos los riesgos mencionados en este informe de estado como un array JSON de objetos con campos 'risk' y 'severity' (high/medium/low)" --output-format json | jq '.[] | select(.severity == "high")'
   ```

### Parte 4: Crea un comando de auditoría reutilizable

9. **Construye un comando de una línea que puedas reutilizar en cualquier carpeta:**

   ```bash
   ls docs/*.md | while read file; do echo "## $file"; cat "$file" | claude -p "Califica este documento del 1 al 10 en completitud. Un párrafo resumiendo los vacíos."; echo ""; done > audit_report.md
   ```

10. Abre `audit_report.md` y revisa los resultados.

## Cuándo usar el modo Print vs el modo Interactivo

| Usa el modo Print (`claude -p`) cuando... | Usa el modo Interactivo cuando... |
|-------------------------------------------|-----------------------------------|
| Tienes una pregunta específica y puntual | Necesitas una conversación de ida y vuelta |
| Quieres crear scripts o automatizar | Quieres explorar e iterar |
| Estás procesando múltiples archivos | Necesitas que Claude recuerde el contexto |
| Quieres comandos repetibles | La tarea requiere decisiones de criterio |

## Conexión con el Módulo 10 (CLI)

| Concepto de CLI | Cómo lo usaste |
|----------------|----------------|
| **Modo print** (`claude -p`) | Análisis no interactivo de un solo uso |
| **Piping** (`cat file \| claude -p`) | Enviaste contenido de documentos a Claude |
| **Bucles** | Procesaste múltiples archivos en lote |
| **Salida JSON** (`--output-format json`) | Obtuviste resultados legibles por máquina |
| **Combinación de herramientas** (`jq`) | Filtraste y procesaste la salida de Claude |

## Criterios de éxito

- [ ] Ejecutaste al menos 3 comandos `claude -p` exitosamente
- [ ] Enviaste contenido de archivos a Claude mediante piping
- [ ] Analizaste múltiples archivos usando un bucle
- [ ] Generaste salida JSON estructurada de al menos un comando
- [ ] Un informe de auditoría fue guardado como archivo markdown

## Lo que aprendiste

**El modo print convierte a Claude Code en un bloque de construcción para automatización.** El modo interactivo es para explorar y conversar; el modo print es para scripts, pipelines y flujos de trabajo repetibles. Cualquier análisis que puedas hacer de forma interactiva, puedes automatizarlo con `claude -p` y ejecutarlo en cualquier carpeta, cualquier conjunto de datos, en cualquier momento.
