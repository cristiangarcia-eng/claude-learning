# Trabajar con Múltiples Agentes

## Por qué usar múltiples agentes?

Cuando le das a Claude una tarea compleja, la trabaja paso a paso — una cosa a la vez. Funciona, pero es lento para proyectos grandes.

Con múltiples agentes, puedes dividir el trabajo entre varias instancias de Claude ejecutándose **al mismo tiempo**. En vez de una tarea secuencial de 20 minutos, obtienes resultados en 8-12 minutos.

## Tres patrones para múltiples agentes

### 1. Ejecución paralela

Divide una tarea en partes independientes y ejecutalas simultáneamente.

**Ejemplo: Análisis competitivo**

En vez de:
```
Analiza los competidores A, B, C y D uno por uno
```

Haz esto:
```
Usa agentes paralelos para analizar estos competidores simultáneamente:
- Agente 1: Analizar Competidor A (precios, features, posicionamiento)
- Agente 2: Analizar Competidor B (precios, features, posicionamiento)
- Agente 3: Analizar Competidor C (precios, features, posicionamiento)
- Agente 4: Analizar Competidor D (precios, features, posicionamiento)
Luego combina los resultados en una tabla comparativa.
```

Los cuatro análisis ocurren al mismo tiempo en vez de uno detrás de otro.

### 2. Consenso (múltiples perspectivas)

Pide a múltiples agentes que resuelvan el mismo problema de forma independiente, y luego compara sus respuestas. Esto funciona porque las respuestas de IA son **estocásticas** — el mismo prompt produce resultados diferentes cada vez.

**Ejemplo: Nombrar un producto**

```
Necesito un nombre para nuestra nueva funcionalidad de analytics.
Usa 3 agentes paralelos para hacer brainstorming de forma independiente,
luego compara todas las sugerencias y elige las 5 mejores que
aparezcan en múltiples listas.
```

Cada agente trae ideas creativas diferentes. Los nombres que múltiples agentes sugieren independientemente suelen ser los más fuertes.

**Ejemplo: Evaluación de riesgos**

```
Usa 3 agentes para evaluar independientemente los riesgos de
lanzar en el mercado japones. Luego sintetiza: qué riesgos
identificaron los 3? Qué solo capturó 1? Ordena por consenso.
```

### 3. Pipeline (traspaso entre especialistas)

Pasa el trabajo a través de una cadena de especialistas, cada uno aportando su experiencia.

**Ejemplo: Produccion de contenido**

```
Usa un pipeline de agentes:
1. Agente investigador: recopilar datos de nuestro rendimiento Q3
2. Agente escritor: redactar un informe a partir de la investigacion
3. Agente editor: revisar claridad, tono y precision
```

Cada agente se enfoca en lo que mejor hace, produciendo mayor calidad que un solo agente haciendo todo.

### 4. Debate (abogado del diablo)

Haz que dos agentes argumenten **posiciones opuestas** sobre el mismo tema. Uno defiende, otro ataca. La fricción entre ellos saca a la luz riesgos y puntos ciegos que una sola perspectiva no vería.

**Ejemplo: Decisión de entrada a mercado**

```
Estoy considerando lanzar nuestro producto en Japón.
Usa 2 agentes en formato de debate:
- Agente 1: Argumenta por qué SÍ deberíamos entrar al mercado japonés
- Agente 2: Argumenta por qué NO deberíamos entrar al mercado japonés
Después de 2-3 rondas de debate, sintetiza los argumentos
más fuertes de cada lado en una recomendación final.
```

**Ejemplo: Decisión de inversión**

```
Estamos evaluando si adquirir CompanyX.
Ejecuta un debate adversarial:
- Agente 1: El caso A FAVOR de la adquisición
- Agente 2: El caso EN CONTRA de la adquisición
Incluye argumentos financieros, estratégicos y culturales.
Sintetiza en una recomendación balanceada.
```

El patrón de debate produce conclusiones más robustas que simplemente preguntar "deberíamos hacer X?" — porque cada agente está motivado a encontrar los argumentos más fuertes posibles para su lado.

## Cuándo usar cada patrón

| Patrón | Ideal para | Ejemplo |
|--------|-----------|---------|
| **Paralelo** | Misma tarea en diferentes inputs | Analizar 5 competidores, revisar 10 documentos |
| **Consenso** | Decisiones que necesitan múltiples perspectivas | Naming, estrategia, evaluación de riesgos |
| **Pipeline** | Flujos multi-paso con diferentes habilidades | Investigar > Escribir > Editar > Publicar |
| **Debate** | Decisiones con alto riesgo o incertidumbre | Entrada a mercado, adquisiciones, cambios de estrategia |

## Cómo lanzar múltiples agentes

Simplemente describe lo que quieres en tu prompt. Claude se encarga de la orquestación:

```
Usa subagentes para investigar estos 4 mercados en paralelo:
EEUU, UK, Alemania, Japon. Para cada uno, encuentra tamaño
de mercado, top 3 competidores y requisitos regulatorios.
Combina en un único informe comparativo.
```

## Aplicaciones del mundo real

- **Investigación de mercado**: Analizar múltiples mercados o competidores simultáneamente
- **Contenido a escala**: Generar variaciones de emails, copy publicitario o posts en paralelo
- **Due diligence**: Múltiples agentes revisando diferentes aspectos de un deal
- **Planificacion de eventos**: Agentes paralelos gestionando venues, catering y ponentes
- **Contratacion**: Analizar múltiples perfiles de candidatos a la vez

## Cuidado con los costos

Múltiples agentes consumen tokens más rápido — cada agente tiene su propia conversación. Ten en cuenta estos tips:

- **Empieza con 2-3 agentes**, no 10. Escala una vez que estés cómodo con los resultados y el costo.
- **Revisa tu gasto** con `/cost` después de ejecutar tareas multi-agente para calibrar expectativas.
- **No dejes agentes esperándote.** Si Claude está inactivo esperando tus instrucciones más del 20% del tiempo, tienes demasiadas sesiones paralelas abiertas. 3-4 agentes simultáneos es un límite práctico para la mayoría.
- **Para temprano si es necesario.** Si una tarea multi-agente va en la dirección equivocada, dile a Claude que pare — no dejes que siga gastando tokens en output malo.

## Consejos

- **La independencia importa**: Los agentes paralelos funcionan mejor cuando las tareas no dependen entre sí
- **Combina al final**: Siempre pide un paso de síntesis que fusione los resultados paralelos
- **Calidad sobre velocidad**: Para decisiones importantes, usa el patrón de consenso o debate — detectan puntos ciegos
- **Empieza simple**: Prueba paralelo con 2-3 agentes antes de escalar a equipos más grandes
