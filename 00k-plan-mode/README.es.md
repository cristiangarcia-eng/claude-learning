# Modo Plan

Una de las cosas que hacen que Claude Code se sienta seguro es que **siempre tienes el control**. Claude pregunta antes de hacer cambios, te muestra lo que está a punto de hacer, y nunca toca nada sin tu aprobación. Pero hay un modo aún más seguro — **el modo Plan** — que encierra a Claude en modo solo-lectura para que pueda analizar y planificar sin ningún riesgo de cambiar un solo archivo.

Esta lección recorre los tres modos que ofrece Claude Code, y por qué el modo Plan en particular es el arma secreta para aprender y explorar sin romper nada.

## Los tres modos

Claude Code tiene tres modos de permisos:

| Modo | Qué puede hacer Claude | Cuándo usarlo |
|------|------------------------|---------------|
| **Normal** (predeterminado) | Leer, editar y ejecutar comandos — pero pide permiso cada vez | Trabajo del día a día |
| **Auto-aceptar** | Leer, editar y ejecutar comandos sin preguntar | Solo cuando confías totalmente en la tarea y quieres velocidad |
| **Modo plan** | **Solo lectura.** Claude puede analizar, pensar y proponer — pero no puede cambiar nada | Explorar, aprender, decisiones importantes |

La mayoría de la gente debería empezar en modo **Normal** y quedarse ahí. Las peticiones de permiso se vuelven naturales tras unos minutos, y te mantienen al tanto.

## Cómo cambiar de modo

Cambias entre modos con un solo atajo de teclado:

**Pulsa `Shift + Tab`** para ciclar entre Normal → Auto-aceptar → Plan → Normal.

Si no tienes claro cuáles son esas teclas, aquí las tienes en un teclado estándar — `Shift` en el lado izquierdo, `Tab` justo encima:

![Las teclas Shift y Tab resaltadas en un teclado de laptop](./images/shift-tab-keyboard.png)

Mantén pulsada `Shift` y toca `Tab` a la vez. Cada pulsación te lleva al siguiente modo. Verás el modo actual indicado en la interfaz de Claude Code, así siempre sabes dónde estás.

## Modo Plan: explorar sin romper nada

El modo Plan es especial. Cuando está activo, Claude **físicamente no puede modificar tus archivos ni ejecutar comandos**. Solo puede leer. Suena limitante, pero desbloquea una forma de trabajar muy potente:

- **Pide a Claude que analice** todo tu proyecto sin preocuparte de que pueda cambiar algo sin querer.
- **Deja que Claude proponga un plan** — "¿cómo reestructurarías estas carpetas?" — y obtienes un informe completo sin ningún cambio real.
- **Explora archivos desconocidos** sin riesgo. Claude puede leerlos y explicártelos todo lo que quiera.
- **Prueba un prompt del que no estás seguro** — si te preocupa que Claude pueda tomar un rumbo equivocado y empezar a editar cosas, el modo Plan elimina ese riesgo por completo.

> **El modo Plan es genial para aprender.** Cuando eres nuevo en Claude Code, ponlo en modo Plan y pídele que analice tu proyecto. Obtienes todo el beneficio de la comprensión de Claude con cero riesgo de que algo salga mal. Una vez ves su plan, puedes volver al modo Normal y ejecutarlo de verdad.

## Auto-aceptar: usar con precaución

El modo Auto-aceptar es lo opuesto al modo Plan — Claude hace cambios sin pedir permiso. Es rápido, pero también es el modo donde la gente envía accidentalmente cosas que no pretendía.

**Usa Auto-aceptar solo cuando:**

- Has definido claramente la tarea en tu prompt
- Confías en que Claude tiene suficiente contexto para hacerla bien
- Los cambios son fácilmente reversibles (estás en control de versiones, tienes copias de seguridad, etc.)
- Estás haciendo muchas ediciones repetitivas y las peticiones de permiso te están ralentizando

Si alguna de esas cosas no se cumple, quédate en modo Normal.

## El modelo mental

Piénsalo como un dial:

```
Modo Plan  ◄─── Normal ───►  Auto-aceptar
(el más seguro)              (el más rápido)
```

- Desliza a la izquierda cuando quieras **pensar y explorar** sin ningún riesgo.
- Quédate en el medio para **trabajo normal** — Claude actúa, tú apruebas.
- Desliza a la derecha cuando quieras **velocidad** y ya hayas hecho el razonamiento por adelantado.

La mayoría de la gente vive en el medio. La gente inteligente usa el modo Plan más de lo que cree que debería.

## Puntos clave

1. **Claude Code tiene tres modos** — Normal, Auto-aceptar y Plan.
2. **`Shift + Tab`** cicla entre ellos.
3. **El modo Plan es solo-lectura** — Claude puede analizar y proponer, pero no puede cambiar nada.
4. **El modo Plan es perfecto para aprender** y para decisiones importantes donde quieres una propuesta antes de cualquier acción.
5. **Usa Auto-aceptar con moderación** — solo para tareas que has definido bien y puedes deshacer fácilmente.
