# Checkpoints

## ¿Qué son los checkpoints?

Cada vez que envías un mensaje a Claude, automáticamente guarda un **checkpoint** — una foto del estado de tu conversación y archivos en ese momento. Piensa en ello como un botón de "deshacer" ilimitado.

Si Claude hace un cambio que no te gusta, o quieres probar un enfoque diferente, puedes rebobinar a cualquier punto anterior y empezar de nuevo desde ahí.

## Cómo rebobinar

Presiona **Esc dos veces** (`Esc + Esc`) — o escribe `/rewind` — para abrir el menú de rebobinado. Verás una lista scrolleable con cada mensaje que enviaste en la sesión. Elige el punto al que quieres volver.

Lo que pasa después depende de si Claude ha editado alguno de tus archivos desde ese punto.

### El caso habitual: rebobinar la conversación

Si has estado mayormente conversando con Claude — haciendo preguntas, lluvia de ideas, revisando archivos sin editarlos — verás tres opciones al elegir un mensaje al que volver:

![El diálogo de rewind mostrando Restore conversation, Summarize from here y Never mind](./images/rewind-confirmation.png)

1. **Restore conversation** — saltar el chat de vuelta a ese punto. Todo lo que tú y Claude dijisteis después se descarta, y empiezas de cero desde ese momento.
2. **Summarize from here** — en vez de tirar los mensajes posteriores a la basura, Claude los comprime en un resumen compacto y sigue adelante con ese resumen como nuevo contexto. Bueno para liberar espacio en la conversación sin perder el sentido de lo que pasó.
3. **Never mind** — cancelar y volver a la lista de mensajes.

Un detalle bonito: después de elegir **Restore conversation** o **Summarize from here**, el texto original del mensaje seleccionado se vuelve a poner en tu campo de entrada — así puedes reenviarlo tal cual o editarlo primero.

### Cuando Claude ha editado tus archivos: dos opciones más

En el momento en que Claude ha editado archivos de tu proyecto — un informe, una hoja de cálculo, un documento, unas notas — el menú crece a **cinco opciones**. Las nuevas te dejan también deshacer los cambios en los archivos, no solo la conversación:

1. **Restore code and conversation** — revertir *tanto* tus archivos como la conversación a ese punto. Lo más parecido a un "deshacer" completo. (La palabra "code" en el botón es solo el nombre técnico que usa Claude Code — para ti significa "tus archivos": informes, CSVs, notas, lo que sea que Claude tocó.)
2. **Restore conversation** — igual que antes: rebobina el chat pero mantiene tus archivos actuales.
3. **Restore code** — revierte los archivos pero mantiene la conversación. Útil cuando quieres que Claude intente una edición diferente pero no quieres volver a explicarle el contexto.
4. **Summarize from here** — igual que antes. Tus archivos se quedan intactos.
5. **Never mind** — igual que antes.

Cuando Claude ha estado editando archivos por ti, **Restore code and conversation** suele ser la opción que quieres — un rebobinado completo y limpio a un estado donde todo iba bien.

## Qué no cubren los checkpoints

Los checkpoints son una red de seguridad estupenda, pero no son magia. Hay algunas cosas que *no* rastrean:

- **Archivos modificados con comandos de terminal.** Si Claude ejecuta algo como `rm file.txt` o `mv old.txt new.txt` desde la terminal, esos cambios **no** se guardan en el checkpoint y no se pueden deshacer con rewind. Solo se rastrean las ediciones que Claude hace directamente a archivos.
- **Archivos que editas tú** fuera de Claude Code.
- **Cambios de otras sesiones de Claude Code** corriendo al mismo tiempo.

Para estos casos, apóyate en tus redes de seguridad de siempre — copias de seguridad (Time Machine, iCloud, Dropbox) y, si estás en un proyecto con git, tu historial de commits. Piensa en los checkpoints como un **botón de deshacer a nivel de sesión**, no como un historial permanente.

## Cosas que debes saber

- **Los checkpoints son automáticos** — no necesitas crearlos manualmente
- **Se crean con cada mensaje** — así que puedes rebobinar a cualquier punto de tu conversación
- **Duran 30 días** — los checkpoints viejos se limpian automáticamente
- **Presiona Esc + Esc** — es todo lo que necesitas recordar

> **La idea clave:** Los checkpoints te permiten experimentar sin miedo. Prueba cosas, y si no funcionan, rebobina. Así de simple.

