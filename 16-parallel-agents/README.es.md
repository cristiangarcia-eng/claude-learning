# Trabajar con Multiples Agentes

## Por que usar multiples agentes?

Cuando le das a Claude una tarea compleja, la trabaja paso a paso — una cosa a la vez. Funciona, pero es lento para proyectos grandes.

Con multiples agentes, puedes dividir el trabajo entre varias instancias de Claude ejecutandose **al mismo tiempo**. En vez de una tarea secuencial de 20 minutos, obtienes resultados en 8-12 minutos.

## Tres patrones para multiples agentes

### 1. Ejecucion paralela

Divide una tarea en partes independientes y ejecutalas simultaneamente.

**Ejemplo: Analisis competitivo**

En vez de:
```
Analiza los competidores A, B, C y D uno por uno
```

Haz esto:
```
Usa agentes paralelos para analizar estos competidores simultaneamente:
- Agente 1: Analizar Competidor A (precios, features, posicionamiento)
- Agente 2: Analizar Competidor B (precios, features, posicionamiento)
- Agente 3: Analizar Competidor C (precios, features, posicionamiento)
- Agente 4: Analizar Competidor D (precios, features, posicionamiento)
Luego combina los resultados en una tabla comparativa.
```

Los cuatro analisis ocurren al mismo tiempo en vez de uno detras de otro.

### 2. Consenso (multiples perspectivas)

Pide a multiples agentes que resuelvan el mismo problema de forma independiente, y luego compara sus respuestas. Esto funciona porque las respuestas de IA son **estocasticas** — el mismo prompt produce resultados diferentes cada vez.

**Ejemplo: Nombrar un producto**

```
Necesito un nombre para nuestra nueva funcionalidad de analytics.
Usa 3 agentes paralelos para hacer brainstorming de forma independiente,
luego compara todas las sugerencias y elige las 5 mejores que
aparezcan en multiples listas.
```

Cada agente trae ideas creativas diferentes. Los nombres que multiples agentes sugieren independientemente suelen ser los mas fuertes.

**Ejemplo: Evaluacion de riesgos**

```
Usa 3 agentes para evaluar independientemente los riesgos de
lanzar en el mercado japones. Luego sintetiza: que riesgos
identificaron los 3? Que solo capturo 1? Ordena por consenso.
```

### 3. Pipeline (traspaso entre especialistas)

Pasa el trabajo a traves de una cadena de especialistas, cada uno aportando su experiencia.

**Ejemplo: Produccion de contenido**

```
Usa un pipeline de agentes:
1. Agente investigador: recopilar datos de nuestro rendimiento Q3
2. Agente escritor: redactar un informe a partir de la investigacion
3. Agente editor: revisar claridad, tono y precision
```

Cada agente se enfoca en lo que mejor hace, produciendo mayor calidad que un solo agente haciendo todo.

## Cuando usar cada patron

| Patron | Ideal para | Ejemplo |
|--------|-----------|---------|
| **Paralelo** | Misma tarea en diferentes inputs | Analizar 5 competidores, revisar 10 documentos |
| **Consenso** | Decisiones que necesitan multiples perspectivas | Naming, estrategia, evaluacion de riesgos |
| **Pipeline** | Flujos multi-paso con diferentes habilidades | Investigar > Escribir > Editar > Publicar |

## Como lanzar multiples agentes

Simplemente describe lo que quieres en tu prompt. Claude se encarga de la orquestacion:

```
Usa subagentes para investigar estos 4 mercados en paralelo:
EEUU, UK, Alemania, Japon. Para cada uno, encuentra tamano
de mercado, top 3 competidores y requisitos regulatorios.
Combina en un unico informe comparativo.
```

## Aplicaciones del mundo real

- **Investigacion de mercado**: Analizar multiples mercados o competidores simultaneamente
- **Contenido a escala**: Generar variaciones de emails, copy publicitario o posts en paralelo
- **Due diligence**: Multiples agentes revisando diferentes aspectos de un deal
- **Planificacion de eventos**: Agentes paralelos gestionando venues, catering y ponentes
- **Contratacion**: Analizar multiples perfiles de candidatos a la vez

## Consejos

- **La independencia importa**: Los agentes paralelos funcionan mejor cuando las tareas no dependen entre si
- **Combina al final**: Siempre pide un paso de sintesis que fusione los resultados paralelos
- **Calidad sobre velocidad**: Para decisiones importantes, usa el patron de consenso — detecta puntos ciegos
- **Empieza simple**: Prueba paralelo con 2-3 agentes antes de escalar a equipos mas grandes
