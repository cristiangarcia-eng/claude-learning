# Computer Use

Deja que Claude vea y controle tu pantalla — haciendo clic en botones, llenando formularios y navegando apps tal como lo harías tú.

## ¿Qué es Computer Use?

Computer Use permite que Claude interactúe visualmente con tu computadora. En vez de solo leer archivos y ejecutar comandos, Claude puede:

- Ver lo que hay en tu pantalla
- Mover el mouse y hacer clic
- Escribir en cualquier aplicación
- Navegar sitios web y apps

Piensa en ello como darle a Claude la capacidad de sentarse junto a ti y usar tu computadora.

## Cuándo usarlo

| Tarea | Sin Computer Use | Con Computer Use |
|------|---------------------|-------------------|
| Actualizar un Google Doc | Copiar texto, pegar manualmente | Claude abre el doc y edita directamente |
| Llenar un formulario | Tú llenas cada campo | Claude llena el formulario por ti |
| Navegar un dashboard | Tú describes lo que ves | Claude lo ve y navega |
| Probar un sitio web | Tú haces clic manualmente | Claude hace clic y reporta problemas |

## Cómo empezar

```bash
claude --computer
```

Claude pedirá permiso para ver tu pantalla. Una vez aprobado, puede ver e interactuar con tu escritorio.

## Flujos de trabajo de ejemplo

### Actualizar contenido en una app web

```
Abre nuestro CMS en cms.empresa.com, encuentra el post del blog
titulado "Actualización Q3", y cambia la fecha de publicación al próximo lunes.
```

### Llenar una hoja de cálculo

```
Abre el Google Sheet "Presupuesto 2026", ve a la pestaña de Marketing,
y llena los datos reales de Q2 con esta información: [pegar datos]
```

### Navegar una herramienta que usas a diario

```
Ve a nuestro tablero de Jira, encuentra todos los tickets asignados a mí
que estén vencidos, y lístalos con sus fechas de vencimiento.
```

### Revisar un diseño en el navegador

```
Abre nuestro sitio de staging en staging.empresa.com y toma
capturas de pantalla de cada página. Señala cualquier problema de diseño.
```

## Notas importantes

- Claude pide permiso antes de cada interacción con la pantalla
- Puedes detener a Claude en cualquier momento con `Esc`
- Claude solo ve tu pantalla mientras la sesión está activa
- Funciona mejor con apps web y aplicaciones de escritorio estándar

> **Consejo**: Computer Use es especialmente poderoso para tareas repetitivas en apps que no tienen API — como llenar formularios, actualizar contenido en un CMS, o navegar herramientas internas.

**Siguiente paso**: [Conecta Claude directamente a tu navegador con la Integración de Chrome →](../15-chrome/README.es.md)
