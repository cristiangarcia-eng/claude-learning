#!/usr/bin/env python3
"""Fix missing accents/tildes in Spanish translation files."""
import re
import glob
import os

# Accent fixes: pattern → replacement
# These are applied ONLY outside code blocks
ACCENT_FIXES = [
    # Question words (with ¿)
    (r'¿Que ', '¿Qué '),
    (r'¿Que\?', '¿Qué?'),
    (r'¿Como ', '¿Cómo '),
    (r'¿Como\?', '¿Cómo?'),
    (r'¿Donde ', '¿Dónde '),
    (r'¿Donde\?', '¿Dónde?'),
    (r'¿Cuando ', '¿Cuándo '),
    (r'¿Cuando\?', '¿Cuándo?'),
    (r'¿Cuales ', '¿Cuáles '),
    (r'¿Cuales\?', '¿Cuáles?'),
    (r'¿Cual ', '¿Cuál '),
    (r'¿Cual\?', '¿Cuál?'),
    (r'¿Quien ', '¿Quién '),
    (r'¿Algun ', '¿Algún '),

    # Question words in headings (## ¿Que → ## ¿Qué)
    (r'Que es ', 'Qué es '),
    (r'Que son ', 'Qué son '),
    (r'Que hace', 'Qué hace'),
    (r'Que puede', 'Qué puede'),
    (r'Que archivos', 'Qué archivos'),
    (r'Que significa', 'Qué significa'),
    (r'Que cambio', 'Qué cambió'),
    (r'Que sigue', 'Qué sigue'),
    (r'Que escribir', 'Qué escribir'),
    (r'Que eventos', 'Qué eventos'),
    (r'Que fuentes', 'Qué fuentes'),
    (r'Como Funciona', 'Cómo Funciona'),
    (r'Como funciona', 'Cómo funciona'),
    (r'Como hablarle', 'Cómo hablarle'),
    (r'Como manejarla', 'Cómo manejarla'),
    (r'Como ver', 'Cómo ver'),
    (r'Por que ', 'Por qué '),
    (r'Donde esta', 'Dónde está'),
    (r'Donde se', 'Dónde se'),
    (r'Cuantas', 'Cuántas'),
    (r'Cuantos', 'Cuántos'),

    # Common words with missing accents (whole word boundaries)
    (r'\btambien\b', 'también'),
    (r'\bbasico\b', 'básico'),
    (r'\bbasica\b', 'básica'),
    (r'\bBasico\b', 'Básico'),
    (r'\bBasica\b', 'Básica'),
    (r'\bBasicos\b', 'Básicos'),
    (r'\bbasicos\b', 'básicos'),
    (r'\bfacil\b', 'fácil'),
    (r'\bFacil\b', 'Fácil'),
    (r'\brapido\b', 'rápido'),
    (r'\brapida\b', 'rápida'),
    (r'\bRapido\b', 'Rápido'),
    (r'\bRapida\b', 'Rápida'),
    (r'\bdescripcion\b', 'descripción'),
    (r'\bDescripcion\b', 'Descripción'),
    (r'\bautomatico\b', 'automático'),
    (r'\bautomatica\b', 'automática'),
    (r'\bAutomatico\b', 'Automático'),
    (r'\bAutomatica\b', 'Automática'),
    (r'\bconfiguracion\b', 'configuración'),
    (r'\bConfiguracion\b', 'Configuración'),
    (r'\bsesion\b', 'sesión'),
    (r'\binformacion\b', 'información'),
    (r'\bInformacion\b', 'Información'),
    (r'\binstalacion\b', 'instalación'),
    (r'\bInstalacion\b', 'Instalación'),
    (r'\bdocumentacion\b', 'documentación'),
    (r'\bDocumentacion\b', 'Documentación'),
    (r'\bsolucion\b', 'solución'),
    (r'\bSolucion\b', 'Solución'),
    (r'\bnavegacion\b', 'navegación'),
    (r'\bNavegacion\b', 'Navegación'),
    (r'\bintegracion\b', 'integración'),
    (r'\bIntegracion\b', 'Integración'),
    (r'\bautenticacion\b', 'autenticación'),
    (r'\bAutenticacion\b', 'Autenticación'),
    (r'\bprogramacion\b', 'programación'),
    (r'\bProgramacion\b', 'Programación'),
    (r'\baccion\b', 'acción'),
    (r'\bAccion\b', 'Acción'),
    (r'\bopcion\b', 'opción'),
    (r'\bOpcion\b', 'Opción'),
    (r'\bconversacion\b', 'conversación'),
    (r'\bConversacion\b', 'Conversación'),
    (r'\bverificacion\b', 'verificación'),
    (r'\bVerificacion\b', 'Verificación'),
    (r'\bimportacion\b', 'importación'),
    (r'\boperacion\b', 'operación'),
    (r'\boracion\b', 'oración'),
    (r'\bextension\b', 'extensión'),
    (r'\bExtension\b', 'Extensión'),
    (r'\bprecaucion\b', 'precaución'),
    (r'\bterminologia\b', 'terminología'),
    (r'\bTerminologia\b', 'Terminología'),
    (r'\bleccion\b', 'lección'),
    (r'\bLeccion\b', 'Lección'),
    (r'\bfuncion\b', 'función'),
    (r'\bFuncion\b', 'Función'),
    (r'\bseccion\b', 'sección'),
    (r'\bSeccion\b', 'Sección'),
    (r'\brelacion\b', 'relación'),
    (r'\bRelacion\b', 'Relación'),

    # Verbs with missing accents
    (r'\besta\b(?!\s+es\b)', 'está'),  # careful: "esta" (this) vs "está" (is)
    (r'\bestan\b', 'están'),
    (r'\bpodrias\b', 'podrías'),
    (r'\bPodrias\b', 'Podrías'),
    (r'\bveras\b', 'verás'),
    (r'\bVeras\b', 'Verás'),
    (r'\bpedira\b', 'pedirá'),
    (r'\bdara\b', 'dará'),
    (r'\busaras\b', 'usarás'),
    (r'\bnecesitaras\b', 'necesitarás'),
    (r'\bcompletara\b', 'completará'),
    (r'\bGuardara\b', 'Guardará'),
    (r'\bnecesitarian\b', 'necesitarían'),
    (r'\breferia\b', 'refería'),
    (r'\benvia\b', 'envía'),
    (r'\bMuestrame\b', 'Muéstrame'),
    (r'\bInstalalo\b', 'Instálalo'),
    (r'\bOrganizalos\b', 'Organízalos'),
    (r'\bEnsenale\b', 'Enséñale'),
    (r'\bcomparala\b', 'compárala'),
    (r'\bexplicame\b', 'explícame'),
    (r'\bAsegurate\b', 'Asegúrate'),
    (r'\basegurate\b', 'asegúrate'),

    # Other common words
    (r'\blimite\b', 'límite'),
    (r'\bultimo\b', 'último'),
    (r'\bultima\b', 'última'),
    (r'\bUltima\b', 'Última'),
    (r'\bmayoria\b', 'mayoría'),
    (r'\bdetras\b', 'detrás'),
    (r'\bdespues\b', 'después'),
    (r'\bDespues\b', 'Después'),
    (r'\bmas\b', 'más'),
    (r'\baquii\b', 'aquí'),  # just in case
    (r'\baqui\b', 'aquí'),
    (r'\basi\b', 'así'),
    (r'\bAsi\b', 'Así'),
    (r'\bespecifico\b', 'específico'),
    (r'\bespecifica\b', 'específica'),
    (r'\btipico\b', 'típico'),
    (r'\bcodigo\b', 'código'),
    (r'\bCodigo\b', 'Código'),
    (r'\blinea\b', 'línea'),
    (r'\bpagina\b', 'página'),
    (r'\bPagina\b', 'Página'),
    (r'\bbusqueda\b', 'búsqueda'),
    (r'\bBusqueda\b', 'Búsqueda'),
    (r'\btecnico\b', 'técnico'),
    (r'\btecnica\b', 'técnica'),
    (r'\bcomunmente\b', 'comúnmente'),
    (r'\bboton\b', 'botón'),
    (r'\bmenu\b', 'menú'),
    (r'\bMenu\b', 'Menú'),
    (r'\bimagenes\b', 'imágenes'),
    (r'\bjerarquia\b', 'jerarquía'),
    (r'\bJerarquia\b', 'Jerarquía'),
    (r'\bpanico\b', 'pánico'),
    (r'\bsegun\b', 'según'),
    (r'\butiles\b', 'útiles'),
    (r'\bvalido\b', 'válido'),
    (r'\barea\b', 'área'),
    (r'\bproximo\b', 'próximo'),
    (r'\bproxima\b', 'próxima'),
    (r'\bproximas\b', 'próximas'),
    (r'\bproximos\b', 'próximos'),
    (r'\bquizas\b', 'quizás'),
    (r'\barticulosy\b', 'artículos'),
    (r'\barticulos\b', 'artículos'),
    (r'\bmaquina\b', 'máquina'),
    (r'\bestes\b', 'estés'),
    (r'\bautoevaluacion\b', 'autoevaluación'),
    (r'\bguia\b', 'guía'),
    (r'\bGuia\b', 'Guía'),
    (r'\bSenal\b', 'Señal'),
    (r'\bensenan\b', 'enseñan'),
    (r'\bProposito\b', 'Propósito'),
    (r'\bproposito\b', 'propósito'),
    (r'\bPractica\b', 'Práctica'),
    (r'\bpractica\b', 'práctica'),
    (r'\bPracticos\b', 'Prácticos'),
    (r'\bpracticos\b', 'prácticos'),
    (r'\bFilosofia\b', 'Filosofía'),
    (r'\bfilosofia\b', 'filosofía'),
    (r'\bDepuracion\b', 'Depuración'),
    (r'\bRetroalimentacion\b', 'Retroalimentación'),
    (r'\bPrecision\b', 'Precisión'),
    (r'\bComparacion\b', 'Comparación'),
    (r'\bUbicacion\b', 'Ubicación'),
    (r'\bubicacion\b', 'ubicación'),
    (r'\bRazon\b', 'Razón'),
    (r'\brazon\b', 'razón'),
    (r'\bCategoria\b', 'Categoría'),
    (r'\bcategoria\b', 'categoría'),
    (r'\bMetodo\b', 'Método'),
    (r'\bmetodo\b', 'método'),
    (r'\bPatron\b', 'Patrón'),
    (r'\bpatron\b', 'patrón'),
    (r'\bConexion\b', 'Conexión'),
    (r'\bconexion\b', 'conexión'),
]


def split_code_blocks(content):
    """Split content into code and non-code sections."""
    parts = re.split(r'(```[\s\S]*?```)', content)
    return parts


def fix_accents(content):
    """Apply accent fixes only to non-code sections."""
    parts = split_code_blocks(content)
    result = []
    for i, part in enumerate(parts):
        if part.startswith('```'):
            # Code block - don't touch
            result.append(part)
        else:
            # Non-code - apply fixes
            for pattern, replacement in ACCENT_FIXES:
                part = re.sub(pattern, replacement, part)
            result.append(part)
    return ''.join(result)


def process_file(filepath):
    """Process a single .es.md file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()

    fixed = fix_accents(original)

    if fixed != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        # Count changes
        changes = 0
        for orig_line, fix_line in zip(original.split('\n'), fixed.split('\n')):
            if orig_line != fix_line:
                changes += 1
        return changes
    return 0


def main():
    base = '/home/user/claude-learning'
    files = sorted(glob.glob(os.path.join(base, '**/*.es.md'), recursive=True))

    # Also check root level
    files += sorted(glob.glob(os.path.join(base, '*.es.md')))

    # Deduplicate
    files = sorted(set(files))

    total_changes = 0
    for f in files:
        changes = process_file(f)
        if changes > 0:
            rel = os.path.relpath(f, base)
            print(f"  ✅ {rel}: {changes} líneas corregidas")
            total_changes += changes
        else:
            rel = os.path.relpath(f, base)
            print(f"  ⏭️  {rel}: sin cambios")

    print(f"\nTotal: {total_changes} líneas corregidas en {len(files)} archivos")


if __name__ == '__main__':
    main()
