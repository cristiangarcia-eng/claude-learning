# Checkpoints

## ¿Qué son los checkpoints?

Cada vez que envías un mensaje a Claude, automáticamente guarda un **checkpoint** — una foto del estado de tu conversación y archivos en ese momento. Piensa en ello como un botón de "deshacer" ilimitado.

Si Claude hace un cambio que no te gusta, o quieres probar un enfoque diferente, puedes rebobinar a cualquier punto anterior y empezar de nuevo desde ahí.

## Cómo rebobinar

Presiona **Esc dos veces** (Esc + Esc) para abrir el navegador de checkpoints. Verás una lista de todos tus checkpoints con marcas de tiempo.

Selecciona cualquier checkpoint y verás estas opciones:

1. **Restore code and conversation** — volver a ese punto exacto (archivos + conversación)
2. **Restore conversation** — rebobinar el chat pero mantener tus archivos actuales
3. **Restore code** — revertir los archivos pero mantener la conversación
4. **Never mind** — cancelar y quedarte donde estás

La mayoría de las veces, querrás la opción 1 — un rebobinado completo.

## Cuándo usar checkpoints

### No te gusta lo que hizo Claude

Le pediste a Claude que reescribiera una sección de tu informe y fue en la dirección equivocada. En vez de intentar arreglarlo, simplemente rebobina:

1. Presiona **Esc + Esc**
2. Selecciona el checkpoint antes del cambio
3. Elige **Restore code and conversation**
4. Pídele a Claude de nuevo con una instrucción más clara

### Quieres probar dos enfoques

No estás seguro de cómo estructurar tu análisis. Prueba ambos:

1. Pídele a Claude el enfoque A
2. Revisa el resultado
3. Presiona **Esc + Esc** y rebobina a antes del enfoque A
4. Pídele a Claude el enfoque B
5. Compara y quédate con el que prefieras

### Algo salió mal

Claude hizo varios cambios y ahora las cosas están desordenadas. No hay problema — rebobina al último punto donde todo estaba bien.

> **Por qué existen los checkpoints — una historia real:**
>
> En octubre de 2025, un desarrollador ejecutó Claude Code con `--dangerously-skip-permissions` (el infame "YOLO mode") en un proyecto de firmware. Claude ejecutó `rm -rf /` y borró todos los archivos del usuario. Otro caso en diciembre: un usuario pidió "limpiar paquetes" y Claude generó un comando que eliminó todo su directorio home. @dejavucoder lo resumió mejor: *"Claude Cowork es como darle un AK-47 a un mono."*
>
> Los checkpoints son tu red de seguridad. Úsalos.
>
> ![Claude Code Take The Wheel](https://programmerhumor.io/wp-content/uploads/2025/claude-code-take-the-wheel.jpg)
>
> *"Claude Code Take The Wheel" — un developer reclinado mientras la IA refactoriza.* ([ProgrammerHumor](https://programmerhumor.io/memes/claude) — 325K views)

## Cosas que debes saber

- **Los checkpoints son automáticos** — no necesitas crearlos manualmente
- **Se crean con cada mensaje** — así que puedes rebobinar a cualquier punto de tu conversación
- **Duran 30 días** — los checkpoints viejos se limpian automáticamente
- **Presiona Esc + Esc** — es todo lo que necesitas recordar

> **La idea clave:** Los checkpoints te permiten experimentar sin miedo. Prueba cosas, y si no funcionan, rebobina. Así de simple.

