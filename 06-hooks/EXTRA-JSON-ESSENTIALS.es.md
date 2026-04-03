# Extra: Fundamentos de JSON

## ¿Qué es JSON?

JSON es un **formato para escribir configuraciones y ajustes**. Piensa en ello como una forma muy estricta de escribir una lista de opciones.

Ya entiendes el concepto de JSON — es como llenar un formulario:

| Formulario | JSON |
|------|------|
| Nombre: Maria | `"name": "Maria"` |
| Edad: 30 | `"age": 30` |
| Activo: Si | `"active": true` |

> Claude Code usa archivos JSON para almacenar configuraciones (hooks, conexiones MCP, permisos). No necesitas escribir JSON desde cero — principalmente copias ejemplos y ajustas valores. Pero conocer las reglas previene errores frustrantes.

## Las 5 reglas de JSON

### Regla 1: Todo vive dentro de llaves `{}`

Un archivo JSON siempre empieza y termina con `{ }`:

```json
{
  "name": "Maria",
  "role": "Product Manager"
}
```

Piensa en `{ }` como los **bordes del formulario**.

### Regla 2: Los datos vienen en pares — `"clave": valor`

Cada dato tiene un **nombre** (clave) y un **valor**, separados por dos puntos:

```json
{
  "key": "value"
}
```

La clave siempre va entre comillas. Siempre. Sin excepciones.

### Regla 3: Separa los pares con comas — pero NO después del último

```json
{
  "name": "Maria",
  "role": "Product Manager",
  "team": "Growth"
}
```

Nota: hay una coma después de `"Maria"` y después de `"Product Manager"`, pero **NO** después de `"Growth"`. Esta es la fuente de errores #1.

```
✅  "name": "Maria",       ← coma (siguen mas elementos)
✅  "role": "PM",           ← coma (siguen mas elementos)
✅  "team": "Growth"        ← SIN coma (ultimo elemento)
❌  "team": "Growth",       ← ¡MAL! La coma al final rompe todo
```

### Regla 4: El texto usa comillas dobles `""`, los numeros y booleanos no

```json
{
  "name": "Maria",
  "age": 30,
  "active": true
}
```

| Tipo | Ejemplo | ¿Comillas? |
|------|---------|---------|
| Texto (string) | `"Maria"` | Si, siempre comillas dobles `""` |
| Numero | `30` | No |
| Verdadero/Falso | `true` o `false` | No (¡y en minusculas!) |
| Vacio/Nada | `null` | No |

> **Importante**: JSON solo acepta comillas dobles `"así"`. Las comillas simples `'así'` no funcionan.

### Regla 5: Las listas usan `[]`, los objetos anidados usan `{}`

**Una lista de elementos** (array):

```json
{
  "fruits": ["apple", "banana", "orange"]
}
```

**Un grupo dentro de un grupo** (objeto anidado):

```json
{
  "user": {
    "name": "Maria",
    "email": "maria@example.com"
  }
}
```

**Ambos combinados** (comun en configuraciones de Claude Code):

```json
{
  "hooks": [
    {
      "event": "SessionStart",
      "command": "echo Welcome!"
    },
    {
      "event": "Stop",
      "command": "echo Done!"
    }
  ]
}
```

## Donde Claude Code usa JSON

Encontraras JSON en estos archivos:

| Archivo | Que configura | Cuando lo editaras |
|------|-------------------|-------------------|
| `~/.claude/settings.json` | Configuración personal, hooks, permisos | Lección 06 (Hooks) |
| `.claude/settings.json` | Configuración compartida del proyecto | Lección 06 (Hooks) |
| Configuraciones de servidores MCP | Conexiones a herramientas externas | Lección 05 (MCP) |

### Un archivo real de configuración de Claude Code

Así se ve un `settings.json` típico:

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep"
    ],
    "deny": [
      "Bash(rm -rf *)"
    ]
  },
  "hooks": {
    "SessionStart": [
      {
        "type": "command",
        "command": "echo 'Session started at $(date)'"
      }
    ]
  }
}
```

Desglosemoslo:

```
{                                           ← Inicio del archivo
  "permissions": {                          ← Una seccion llamada "permissions"
    "allow": [                              ← Una lista de herramientas permitidas
      "Read",                               ← Elemento 1 (coma: siguen mas)
      "Glob",                               ← Elemento 2 (coma: siguen mas)
      "Grep"                                ← Elemento 3 (SIN coma: ultimo)
    ],                                      ← Fin de lista (coma: hay mas secciones)
    "deny": [                               ← Una lista de acciones denegadas
      "Bash(rm -rf *)"                      ← Elemento 1 (SIN coma: ultimo)
    ]                                       ← Fin de lista (SIN coma: ultima seccion)
  },                                        ← Fin de permissions (coma: hay mas secciones)
  "hooks": {                                ← Una seccion llamada "hooks"
    "SessionStart": [                       ← Una lista de hooks para SessionStart
      {                                     ← Inicio del hook 1
        "type": "command",                  ← Tipo de hook
        "command": "echo 'Session started'" ← El comando a ejecutar
      }                                     ← Fin del hook 1 (SIN coma: ultimo)
    ]                                       ← Fin de lista
  }                                         ← Fin de hooks (SIN coma: ultima seccion)
}                                           ← Fin del archivo
```

## Los 5 errores más comunes (y como corregirlos)

### Error 1: Coma al final

```json
❌ ROTO:
{
  "name": "Maria",
  "role": "PM",
}

✅ CORREGIDO:
{
  "name": "Maria",
  "role": "PM"
}
```

**La solución**: Elimina la coma después del último elemento en cualquier lista u objeto.

### Error 2: Coma faltante

```json
❌ ROTO:
{
  "name": "Maria"
  "role": "PM"
}

✅ CORREGIDO:
{
  "name": "Maria",
  "role": "PM"
}
```

**La solución**: Agrega una coma entre elementos (excepto el último).

### Error 3: Comillas simples en lugar de dobles

```json
❌ ROTO:
{
  'name': 'Maria'
}

✅ CORREGIDO:
{
  "name": "Maria"
}
```

**La solución**: Siempre usa comillas dobles `"`, nunca comillas simples `'`.

### Error 4: Falta un corchete de cierre

```json
❌ ROTO:
{
  "tools": [
    "Read",
    "Write"

}

✅ CORREGIDO:
{
  "tools": [
    "Read",
    "Write"
  ]
}
```

**La solución**: Cada `{` necesita un `}`. Cada `[` necesita un `]`. Cuentalos.

### Error 5: Comentarios en JSON

```json
❌ ROTO:
{
  // Este es mi nombre
  "name": "Maria"
}

✅ CORREGIDO:
{
  "name": "Maria"
}
```

**La solución**: JSON no permite comentarios. Elimina cualquier línea que empiece con `//` o `#`.

> **Nota**: Algunos archivos de configuración de Claude Code usan JSONC (JSON con Comentarios), que si permite comentarios `//`. Pero el JSON estandar no. En caso de duda, elimina los comentarios.

## Como validar tu JSON

### Opción 1: Preguntale a Claude

Solo pega tu JSON en Claude Code y di:

```
¿Es este JSON valido? Corrige cualquier error:
{
  "name": "Maria",
  "tools": ["Read", "Write",]
}
```

Claude detectara la coma al final y lo corregira por ti.

### Opción 2: VS Code (recomendado)

Si estas usando VS Code:

1. Abre el archivo `.json`
2. VS Code automaticamente resalta errores con **subrayados rojos ondulados**
3. Pasa el cursor sobre el error para ver que está mal

Esta es la forma más fácil — los errores son visibles mientras escribes.

### Opción 3: Validador en línea

Busca "JSON validator" en tu navegador y pega tu JSON. Te dira exactamente donde está el error.

## Tarjeta de referencia rápida

```
HOJA DE REFERENCIA JSON
─────────────────────────────────────
Texto:       "hello"          (comillas dobles)
Numero:      42               (sin comillas)
Booleano:    true / false     (sin comillas, minusculas)
Nulo:        null             (sin comillas, minusculas)
Lista:       ["a", "b", "c"] (corchetes)
Objeto:      {"key": "val"}  (llaves)
─────────────────────────────────────
✅ Comas ENTRE elementos
❌ Sin coma despues del ULTIMO elemento
✅ Solo comillas dobles "unicamente"
❌ Sin comentarios (generalmente)
─────────────────────────────────────
```

**Siguiente paso**: [Volver a la lección de Hooks →](README.es.md)
