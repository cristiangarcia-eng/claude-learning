# Modo Planificación

El Modo Planificación le dice a Claude que cree un plan paso a paso antes de hacer cualquier trabajo. Claude lee y analiza pero no hace ningún cambio hasta que apruebes el plan.

## Cuándo usarlo

- Dividir un proyecto grande en fases
- Evaluar el alcance de algo antes de comprometerte
- Entender un proyecto antes de hacer cambios
- Crear una estrategia o framework

## Cómo activarlo

Presiona **Shift+Tab** dos veces para entrar en Modo Plan. O escribe:

```
/plan Crea un análisis competitivo para nuestro lanzamiento de producto en Q3
```

Presiona `Ctrl+G` para abrir y editar el plan en tu editor de texto.

## Ejemplo

```
Tú: /plan Crea un plan de go-to-market para nuestra nueva funcionalidad

Claude:
## Fase 1: Investigación
1. Analizar posicionamiento de competidores
2. Revisar datos de feedback de clientes

## Fase 2: Mensajería
3. Redactar propuestas de valor
4. Crear declaraciones de posicionamiento

## Fase 3: Materiales
5. Esbozar contenido del deck de ventas
6. Redactar email de anuncio

¿Listo para proceder?
```

Puedes decir "sí" para ejecutar todo el plan, modificar pasos individuales, o rechazarlo por completo.

## Pensamiento Extendido

Para análisis complejos, dile a Claude que piense más profundamente:

```
/effort high
```

| Nivel de esfuerzo | Ideal para |
|-------------|----------|
| `low` | Preguntas rápidas, consultas simples |
| `medium` | Análisis y resúmenes estándar |
| `high` | Análisis complejos, decisiones estratégicas |

Activa/desactiva el pensamiento con `Option+T` (Mac) o `Alt+T` (Windows).

## Modo Auto

El Modo Auto permite que Claude trabaje sin pedir permiso para cada acción. Una verificación de seguridad en segundo plano bloquea cualquier cosa riesgosa.

Presiona **Shift+Tab** para alternar entre modos:

| Modo | Qué significa |
|------|--------------|
| **Normal** | Claude pide permiso antes de cada cambio |
| **Accept edits** | Claude edita libremente, pregunta antes de comandos |
| **Plan** | Solo lectura, sin cambios |
| **Auto** | Claude trabaja independientemente con verificaciones de seguridad |

> **Consejo**: Empieza en Modo Plan cuando explores algo nuevo. Cambia a Normal o Auto cuando estés listo para ejecutar.

**Siguiente paso**: [Controla Claude desde tu teléfono con voz y sesiones remotas →](../12-voice-and-remote/README.es.md)
