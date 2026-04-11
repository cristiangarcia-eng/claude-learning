# Plugins de Claude Code

## ¿Qué son los Plugins?

Los plugins son paquetes prearmados que agregan nuevas capacidades a Claude Code con un solo comando de instalación. En lugar de configurar herramientas manualmente una por una, un plugin instala todo lo que necesitas en un solo paso -- comandos, integraciones y configuraciones, todo empaquetado junto.

Piensa en los plugins como aplicaciones en tu teléfono: encuentras una que hace lo que necesitas, la instalas y empiezas a usarla inmediatamente.

## ¿Por qué usar Plugins?

| Sin Plugins | Con Plugins |
|-------------|-------------|
| Encontrar y configurar cada herramienta por separado | Un comando de instalación configura todo |
| Copiar configuraciones entre miembros del equipo manualmente | Todos instalan el mismo plugin |
| Sin seguimiento de versiones | Los plugins se actualizan automáticamente |
| La configuración puede tomar 30+ minutos | Listo para usar en menos de 2 minutos |

## Encontrando e instalando Plugins

### Explorar Plugins disponibles

Dentro de Claude Code, usa los comandos de plugins para descubrir lo que está disponible:

```bash
/plugin list
```

### Instalar un Plugin

```bash
/plugin install plugin-name
```

Eso es todo. El plugin maneja toda la configuración automáticamente.

### Otros comandos de Plugins

| Comando | Qué hace |
|---------|---------|
| `/plugin list` | Explorar plugins disponibles |
| `/plugin install plugin-name` | Instalar un plugin |
| `/plugin info plugin-name` | Ver qué incluye un plugin antes de instalarlo |
| `/plugin disable plugin-name` | Desactivar temporalmente un plugin |
| `/plugin enable plugin-name` | Reactivar un plugin desactivado |
| `/plugin uninstall plugin-name` | Eliminar un plugin completamente |
| `/plugin update plugin-name` | Actualizar a la última versión |

## Ejemplos de Plugins

- **Content Review** -- Revisar documentos para claridad, tono y consistencia
- **Meeting Assistant** -- Resumir notas, extraer elementos de acción, redactar seguimientos
- **Report Generator** -- Convertir datos crudos en informes formateados y resúmenes
- **Sprint Planner** -- Analizar backlogs y sugerir planes de sprint
- **Status Reporter** -- Generar actualizaciones de estado semanales desde tus herramientas de proyecto
- **Brand Voice** -- Aplicar lineamientos de marca al revisar contenido
- **Accessibility Checker** -- Revisar contenido para problemas de accesibilidad

## De dónde vienen los Plugins

| Fuente | Descripción |
|--------|-------------|
| **Marketplace Oficial** | Plugins mantenidos por Anthropic (la empresa detrás de Claude) |
| **Comunidad** | Plugins creados y compartidos por otros usuarios |
| **Tu organización** | Plugins privados creados por el equipo de tu empresa |

Tu organización puede tener su propio marketplace de plugins con herramientas específicas de la empresa. Consulta con tu líder de equipo o departamento de TI.

## Tipos de Plugins

| Tipo | Mejor para |
|------|-----------|
| **Oficial** | Funcionalidades ampliamente útiles y bien probadas |
| **Comunidad** | Flujos de trabajo especializados y necesidades de nicho |
| **Organización** | Procesos y herramientas específicos de la empresa |
| **Personal** | Tus propios flujos de trabajo personalizados |

## Cuándo usar un Plugin vs. otras funcionalidades

| Necesitas | Usa |
|-----------|-----|
| Un paquete de capacidades relacionadas | Un plugin |
| Un solo atajo rápido | Un slash command |
| Una conexión a un servicio en vivo | Un servidor MCP |
| Recordar preferencias | Memoria (CLAUDE.md) |

## Consejos

- **Revisa lo que usa tu equipo.** Pregunta a tus colegas cuáles plugins tienen instalados. Usar los mismos plugins asegura flujos de trabajo consistentes.
- **Comienza con poco.** Instala uno o dos plugins y apréndelos bien antes de agregar más.
- **Desactiva, no desinstales.** Si no estás seguro sobre un plugin, desactívalo temporalmente en lugar de eliminarlo. Puedes reactivarlo después sin reconfigurar.

## Recursos adicionales

- [Documentación oficial de Plugins](https://code.claude.com/docs/en/plugins)
- [Descubrir Plugins](https://code.claude.com/docs/en/discover-plugins)

---

*Parte de la serie de guías [Claude How To](../)*
