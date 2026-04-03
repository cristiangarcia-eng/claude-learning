<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../resources/logos/claude-howto-logo-dark.svg">
  <img alt="Claude How To" src="../resources/logos/claude-howto-logo.svg">
</picture>

# Checkpoints y Rewind

Los checkpoints te permiten guardar el estado de la conversacion y retroceder a puntos anteriores en tu sesion de Claude Code. Esto es invaluable para explorar diferentes enfoques, recuperarte de errores o comparar soluciones alternativas.

## Descripcion general

Los checkpoints te permiten guardar el estado de la conversacion y retroceder a puntos anteriores, permitiendo la experimentacion segura y la exploracion de multiples enfoques. Son capturas del estado de tu conversacion, incluyendo:
- Todos los mensajes intercambiados
- Modificaciones de archivos realizadas
- Historial de uso de herramientas
- Contexto de la sesion

Los checkpoints son invaluables cuando exploras diferentes enfoques, te recuperas de errores o comparas soluciones alternativas.

## Conceptos clave

| Concepto | Descripcion |
|----------|-------------|
| **Checkpoint** | Captura del estado de la conversacion incluyendo mensajes, archivos y contexto |
| **Rewind** | Retornar a un checkpoint anterior, descartando los cambios subsecuentes |
| **Punto de bifurcacion** | Checkpoint desde el cual se exploran multiples enfoques |

## Accediendo a los Checkpoints

Puedes acceder y administrar checkpoints de dos maneras principales:

### Usando el atajo de teclado
Presiona `Esc` dos veces (`Esc` + `Esc`) para abrir la interfaz de checkpoints y explorar los checkpoints guardados.

### Usando Slash Command
Usa el comando `/rewind` (alias: `/checkpoint`) para acceso rapido:

```bash
# Abrir interfaz de rewind
/rewind

# O usa el alias
/checkpoint
```

## Opciones de Rewind

Cuando haces rewind, se te presenta un menu con cinco opciones:

1. **Restaurar codigo y conversacion** -- Revertir tanto archivos como mensajes a ese checkpoint
2. **Restaurar conversacion** -- Retroceder solo mensajes, mantener tu codigo actual tal cual
3. **Restaurar codigo** -- Revertir cambios de archivos solamente, mantener el historial completo de conversacion
4. **Resumir desde aqui** -- Comprimir la conversacion desde este punto en adelante en un resumen generado por IA en lugar de descartarla. Los mensajes originales se preservan en la transcripcion. Opcionalmente puedes proporcionar instrucciones para enfocar el resumen en temas especificos.
5. **No importa** -- Cancelar y regresar al estado actual

## Checkpoints automaticos

Claude Code crea checkpoints automaticamente para ti:

- **Cada prompt del usuario** - Se crea un nuevo checkpoint con cada entrada del usuario
- **Persistentes** - Los checkpoints persisten entre sesiones
- **Auto-limpieza** - Los checkpoints se limpian automaticamente despues de 30 dias

Esto significa que siempre puedes retroceder a cualquier punto anterior en tu conversacion, desde hace unos minutos hasta dias atras.

## Casos de uso

| Escenario | Flujo de trabajo |
|-----------|-----------------|
| **Explorar enfoques** | Guardar → Probar A → Guardar → Rewind → Probar B → Comparar |
| **Refactorizacion segura** | Guardar → Refactorizar → Probar → Si falla: Rewind |
| **Pruebas A/B** | Guardar → Diseno A → Guardar → Rewind → Diseno B → Comparar |
| **Recuperacion de errores** | Notar problema → Rewind al ultimo estado bueno |

## Usando Checkpoints

### Ver y hacer Rewind

Presiona `Esc` dos veces o usa `/rewind` para abrir el explorador de checkpoints. Veras una lista de todos los checkpoints disponibles con marcas de tiempo. Selecciona cualquier checkpoint para retroceder a ese estado.

### Detalles del Checkpoint

Cada checkpoint muestra:
- Marca de tiempo de cuando se creo
- Archivos que fueron modificados
- Numero de mensajes en la conversacion
- Herramientas que se usaron

## Ejemplos practicos

### Ejemplo 1: Explorando diferentes enfoques

```
User: Let's add a caching layer to the API

Claude: I'll add Redis caching to your API endpoints...
[Makes changes at checkpoint A]

User: Actually, let's try in-memory caching instead

Claude: I'll rewind to explore a different approach...
[User presses Esc+Esc and rewinds to checkpoint A]
[Implements in-memory caching at checkpoint B]

User: Now I can compare both approaches
```

### Ejemplo 2: Recuperandose de errores

```
User: Refactor the authentication module to use JWT

Claude: I'll refactor the authentication module...
[Makes extensive changes]

User: Wait, that broke the OAuth integration. Let's go back.

Claude: I'll help you rewind to before the refactoring...
[User presses Esc+Esc and selects the checkpoint before the refactor]

User: Let's try a more conservative approach this time
```

### Ejemplo 3: Experimentacion segura

```
User: Let's try rewriting this in a functional style
[Creates checkpoint before experiment]

Claude: [Makes experimental changes]

User: The tests are failing. Let's rewind.
[User presses Esc+Esc and rewinds to the checkpoint]

Claude: I've rewound the changes. Let's try a different approach.
```

### Ejemplo 4: Bifurcacion de enfoques

```
User: I want to compare two database designs
[Takes note of checkpoint - call it "Start"]

Claude: I'll create the first design...
[Implements Schema A]

User: Now let me go back and try the second approach
[User presses Esc+Esc and rewinds to "Start"]

Claude: Now I'll implement Schema B...
[Implements Schema B]

User: Great! Now I have both schemas to choose from
```

## Retencion de Checkpoints

Claude Code administra tus checkpoints automaticamente:

- Los checkpoints se crean automaticamente con cada prompt del usuario
- Los checkpoints antiguos se retienen hasta por 30 dias
- Los checkpoints se limpian automaticamente para prevenir crecimiento ilimitado de almacenamiento

## Patrones de flujo de trabajo

### Estrategia de bifurcacion para exploracion

Cuando exploras multiples enfoques:

```
1. Comenzar con implementacion inicial → Checkpoint A
2. Probar Enfoque 1 → Checkpoint B
3. Rewind al Checkpoint A
4. Probar Enfoque 2 → Checkpoint C
5. Comparar resultados de B y C
6. Elegir el mejor enfoque y continuar
```

### Patron de refactorizacion segura

Cuando haces cambios significativos:

```
1. Estado actual → Checkpoint (auto)
2. Comenzar refactorizacion
3. Ejecutar pruebas
4. Si las pruebas pasan → Continuar trabajando
5. Si las pruebas fallan → Rewind e intentar enfoque diferente
```

## Mejores practicas

Como los checkpoints se crean automaticamente, puedes enfocarte en tu trabajo sin preocuparte por guardar estado manualmente. Sin embargo, ten en cuenta estas practicas:

### Usando Checkpoints efectivamente

✅ **Hacer:**
- Revisar checkpoints disponibles antes de hacer rewind
- Usar rewind cuando quieras explorar diferentes direcciones
- Mantener checkpoints para comparar diferentes enfoques
- Entender que hace cada opcion de rewind (restaurar codigo y conversacion, restaurar conversacion, restaurar codigo o resumir)

❌ **No hacer:**
- Depender solo de checkpoints para la preservacion de codigo
- Esperar que los checkpoints rastreen cambios externos del sistema de archivos
- Usar checkpoints como sustituto de commits de git

## Configuracion

Puedes activar o desactivar los checkpoints automaticos en tu configuracion:

```json
{
  "autoCheckpoint": true
}
```

- `autoCheckpoint`: Habilitar o deshabilitar la creacion automatica de checkpoints en cada prompt del usuario (por defecto: `true`)

## Limitaciones

Los checkpoints tienen las siguientes limitaciones:

- **Cambios por comandos Bash NO rastreados** - Operaciones como `rm`, `mv`, `cp` en el sistema de archivos no se capturan en checkpoints
- **Cambios externos NO rastreados** - Cambios hechos fuera de Claude Code (en tu editor, terminal, etc.) no se capturan
- **No es un reemplazo del control de versiones** - Usa git para cambios permanentes y auditables en tu codigo

## Solucion de problemas

### Checkpoints faltantes

**Problema**: Checkpoint esperado no encontrado

**Solucion**:
- Verifica si los checkpoints fueron limpiados
- Confirma que `autoCheckpoint` esta habilitado en tu configuracion
- Verifica el espacio en disco

### Rewind fallido

**Problema**: No se puede hacer rewind a un checkpoint

**Solucion**:
- Asegurate de que no haya cambios sin commit en conflicto
- Verifica si el checkpoint esta corrupto
- Intenta hacer rewind a un checkpoint diferente

## Integracion con Git

Los checkpoints complementan (pero no reemplazan) a git:

| Caracteristica | Git | Checkpoints |
|---------------|-----|-------------|
| Alcance | Sistema de archivos | Conversacion + archivos |
| Persistencia | Permanente | Basado en sesion |
| Granularidad | Commits | Cualquier punto |
| Velocidad | Mas lento | Instantaneo |
| Compartir | Si | Limitado |

Usa ambos juntos:
1. Usa checkpoints para experimentacion rapida
2. Usa commits de git para cambios finalizados
3. Crea un checkpoint antes de operaciones de git
4. Haz commit de estados exitosos de checkpoints a git

## Guia de inicio rapido

### Flujo de trabajo basico

1. **Trabaja normalmente** - Claude Code crea checkpoints automaticamente
2. **¿Quieres volver atras?** - Presiona `Esc` dos veces o usa `/rewind`
3. **Elige un checkpoint** - Selecciona de la lista para retroceder
4. **Selecciona que restaurar** - Elige entre restaurar codigo y conversacion, restaurar conversacion, restaurar codigo, resumir desde aqui o cancelar
5. **Continua trabajando** - Estas de vuelta en ese punto

### Atajos de teclado

- **`Esc` + `Esc`** - Abrir explorador de checkpoints
- **`/rewind`** - Forma alternativa de acceder a checkpoints
- **`/checkpoint`** - Alias para `/rewind`

## Saber cuando hacer Rewind: Monitoreo de contexto

Los checkpoints te permiten retroceder -- pero ¿como sabes *cuando* deberias hacerlo? A medida que tu conversacion crece, la ventana de contexto de Claude se llena y la calidad del modelo se degrada silenciosamente. Podrias estar trabajando con un modelo medio ciego sin darte cuenta.

**[cc-context-stats](https://github.com/luongnv89/cc-context-stats)** resuelve esto agregando **zonas de contexto** en tiempo real a tu barra de estado de Claude Code. Rastrea donde estas en la ventana de contexto -- desde **Plan** (verde, seguro para planificar y codificar) pasando por **Code** (amarillo, evita iniciar nuevos planes) hasta **Dump** (naranja, termina y haz rewind). Cuando ves que la zona cambia, sabes que es momento de hacer checkpoint y empezar de nuevo en lugar de seguir adelante con resultados degradados.

## Conceptos relacionados

- **[Funcionalidades avanzadas](../09-advanced-features/README.es.md)** - Modo de planificacion y otras capacidades avanzadas
- **[Gestion de memoria](../02-memory/README.es.md)** - Administrar historial de conversacion y contexto
- **[Slash Commands](../01-slash-commands/)** - Atajos invocados por el usuario
- **[Hooks](../06-hooks/README.es.md)** - Automatizacion basada en eventos
- **[Plugins](../07-plugins/README.es.md)** - Paquetes de extensiones empaquetados

## Ejercicio practico

> **[Ejercicio 4: Construir una Taxonomia del Caos](../11-exercises/exercise-04-taxonomy-from-chaos/)** — Prueba 3 enfoques diferentes de taxonomia en 200 entradas desordenadas, usa checkpoints para navegar entre ellos, compara resultados y queda con el mejor. Practicaras la creacion de checkpoints, rewind y comparacion segura de enfoques.
>
> **Tiempo:** 40 min | **Datos:** CSV de 200 filas con titulos de trabajo desordenados en 5+ idiomas

## Recursos adicionales

- [Documentacion oficial de Checkpointing](https://code.claude.com/docs/en/checkpointing)
- [Guia de funcionalidades avanzadas](../09-advanced-features/README.es.md) - Extended thinking y otras capacidades

## Resumen

Los checkpoints son una funcionalidad automatica en Claude Code que te permite explorar diferentes enfoques de forma segura sin miedo a perder trabajo. Cada prompt del usuario crea un nuevo checkpoint automaticamente, asi que puedes retroceder a cualquier punto anterior en tu sesion.

Beneficios clave:
- Experimenta sin miedo con multiples enfoques
- Recuperate rapidamente de errores
- Compara diferentes soluciones lado a lado
- Integra de forma segura con sistemas de control de versiones

Recuerda: los checkpoints no son un reemplazo de git. Usa checkpoints para experimentacion rapida y git para cambios permanentes de codigo.
