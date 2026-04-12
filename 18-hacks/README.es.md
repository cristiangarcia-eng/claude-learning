# Hacks

Trucos y ajustes pequeños que marcan una gran diferencia en tu día a día con Claude Code. No son funcionalidades nuevas — son formas de sacarle más partido a lo que ya tienes.

Esta lección irá creciendo con el tiempo. Ahora mismo contiene un único hack, pero es uno que recomendamos a todo el mundo.

## Nivel de esfuerzo: ponlo siempre al máximo

Claude tiene un ajuste de **nivel de esfuerzo** (`/effort`) que controla cuánto razona antes de responder. Por defecto, Claude tiende a ponerte en `medium` para consumir menos tokens — pero nosotros recomendamos tenerlo siempre en el máximo para obtener las mejores respuestas.

Tienes varias formas de ponerlo por defecto:

**Variable de entorno (la más fiable, persiste siempre):**

```bash
export CLAUDE_CODE_EFFORT_LEVEL=max
```

Añade esa línea a tu `.bashrc` o `.zshrc` para que se aplique en cada sesión.

**Archivo de settings:** Añade `"effortLevel": "max"` en tu archivo de configuración de Claude Code.

**Comando por sesión:** Escribe `/effort max` en Claude Code. Los niveles `low`, `medium` y `high` persisten entre sesiones, pero `max` no persiste entre sesiones excepto a través de la variable de entorno.

> **Nota:** `max` solo está disponible en Opus 4.6 — si usas Sonnet dará error.
