# Integración con Chrome

Conecta Claude Code a tu navegador Chrome para que pueda leer, interactuar y extraer datos de páginas web.

## Qué hace

Claude puede abrir pestañas en Chrome y:

- Leer el contenido de cualquier página web
- Extraer datos de tablas, listas y dashboards
- Interactuar con apps web (hacer clic en botones, llenar formularios)
- Tomar capturas de pantalla para revisión visual
- Trabajar con apps autenticadas (ya tienes la sesión iniciada)

## Cómo empezar

```bash
claude --chrome
```

O durante una sesión:

```
/chrome
```

Claude se conecta a tu navegador Chrome y puede interactuar con tus pestañas abiertas.

## Flujos de trabajo de ejemplo

### Extraer datos de un dashboard

```
Abre nuestro dashboard de analytics y extrae las métricas clave
de este mes: visitantes, registros y tasa de conversión.
```

### Leer y resumir un documento

```
Ve a este Google Doc [URL] y resume los puntos principales
en 5 bullet points.
```

### Comparar páginas de competidores

```
Abre estas tres páginas de precios de competidores y crea
una tabla comparativa de funcionalidades y precios.
```

### Revisar tu sitio web en busca de problemas

```
Visita nuestro sitio web y revisa cada página en busca de
imágenes rotas, texto faltante o problemas de diseño. Toma
capturas de pantalla de cualquier problema que encuentres.
```

### Trabajar con herramientas autenticadas

Como Claude usa tu Chrome (donde ya tienes la sesión iniciada), puede acceder a:

- **Gmail** — leer y redactar emails
- **Google Docs** — leer y resumir documentos
- **Notion** — navegar tu workspace
- **Dashboards internos** — extraer datos

## Seguridad

- Claude solo accede a sitios que tú permites explícitamente
- Ves cada acción que Claude realiza en tiempo real
- Presiona `Esc` para detenerlo en cualquier momento
- Claude nunca guarda tus contraseñas o credenciales

> **Consejo**: La Integración con Chrome funciona genial con Computer Use — Claude puede ver el navegador e interactuar con él naturalmente, tal como lo harías tú.

**Siguiente paso**: [Potencia Claude con paquetes de plugins preconfigurados →](../07-plugins/README.es.md)
