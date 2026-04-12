# Organiza tu Espacio de Trabajo

Antes de crear más proyectos, configura una estructura de carpetas simple. Esto mantiene todo ordenado y ayuda a Claude a trabajar mejor — funciona mejor cuando cada proyecto tiene su propia carpeta enfocada.

## Paso 1: Crea la carpeta principal

Crea una carpeta llamada **`Claude`** en tu Escritorio:

- **Mac**: clic derecho en el Escritorio → Nueva carpeta → nómbrala `Claude`
- **Windows**: clic derecho en el Escritorio → Nuevo → Carpeta → nómbrala `Claude`

## Paso 2: Crea la estructura dentro

Abre la carpeta `Claude` y crea dos carpetas dentro de la misma forma (clic derecho → Nueva carpeta):

- `projects`
- `resources`

Luego mueve la carpeta `nike-analysis` de tu Escritorio a `projects/` (simplemente arrastra y suelta).

## Paso 3: Ábrelo en Cursor

Abre la carpeta `Claude` en Cursor (**File → Open Folder** → busca tu Escritorio → selecciona `Claude`). Verás todo organizado en la barra lateral.

## La estructura

Así debería verse tu espacio de trabajo con el tiempo:

```
~/Desktop/Claude/
├── projects/                    ← una carpeta por proyecto
│   ├── nike-analysis/
│   │   ├── competitive-analysis.md
│   │   ├── notes.txt
│   │   └── sales-data.csv
│   ├── q4-planning/
│   └── client-acme/
└── resources/                   ← compartido entre todos los proyectos
    ├── brand-guidelines.md
    └── competitor-list.csv
```

**`projects/`** es donde vive tu trabajo. Cada proyecto tiene su propia carpeta — pon tus archivos y los resultados de Claude juntos ahí.

**`resources/`** es para material de referencia que aplica a varios proyectos — guías de marca, listas de precios, datos de competidores. Cuando Claude necesite esta info, puedes decirle: "revisa la carpeta resources para nuestras guías de marca."

## Las reglas

1. **Una carpeta por proyecto** — Claude funciona mejor con contexto enfocado. No mezcles archivos de Nike con archivos de planificación de Q4.
2. **`resources/`** para material compartido — cosas que no pertenecen a un solo proyecto.

## Empezar un proyecto nuevo

Cada vez que empieces algo nuevo, crea una carpeta dentro de `projects/`. Simplemente usa Finder (Mac) o Explorador de Archivos (Windows):

1. Abre `Escritorio/Claude/projects/`
2. Crea una nueva carpeta con el nombre de tu proyecto (ej. `mi-nuevo-proyecto`)
3. Mete tus archivos dentro

Abre la carpeta del proyecto en Cursor (**File → Open Folder**), abre el panel de terminal (**Cmd+J** / **Ctrl+J**), escribe `claude`, y listo.

> **El beneficio se acumula.** Después de unas semanas, tendrás una biblioteca ordenada de proyectos. Puedes saltar entre cualquiera de ellos y Claude retoma justo donde lo dejaste.

> **Más adelante en el curso** aprenderás a darle memoria a cada proyecto para que Claude recuerde el contexto entre sesiones.

## ¿Qué sigue?
