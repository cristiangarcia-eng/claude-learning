# Working with Multiple Agents

## Why use multiple agents?

When you give Claude a complex task, it works through it step by step — one thing at a time. That works, but it's slow for big projects.

With multiple agents, you can split work across several Claude instances running **at the same time**. Instead of a 20-minute sequential task, you get results in 8-12 minutes.

## Four patterns for multiple agents

### 1. Parallel execution

Break a task into independent parts and run them simultaneously.

**Example: Competitive analysis**

Instead of:
```
Analyze competitors A, B, C, and D one by one
```

Do this:
```
Use parallel agents to analyze these competitors simultaneously:
- Agent 1: Analyze Competitor A (pricing, features, positioning)
- Agent 2: Analyze Competitor B (pricing, features, positioning)  
- Agent 3: Analyze Competitor C (pricing, features, positioning)
- Agent 4: Analyze Competitor D (pricing, features, positioning)
Then combine the results into a comparison table.
```

The four analyses happen at the same time instead of one after another.

### 2. Consensus (multiple perspectives)

Ask multiple agents to solve the same problem independently, then compare their answers. This works because AI responses are **stochastic** — the same prompt produces different results each time.

**Example: Product naming**

```
I need a name for our new analytics feature. Use 3 parallel agents
to brainstorm independently, then compare all suggestions and
pick the top 5 that appear across multiple lists.
```

Each agent brings different creative ideas. The names that multiple agents independently suggest are usually the strongest.

**Example: Risk assessment**

```
Use 3 agents to independently assess the risks of launching
in the Japanese market. Then synthesize: what risks did all 3
identify? What did only 1 catch? Rank by consensus.
```

### 3. Pipeline (specialist handoff)

Pass work through a chain of specialists, each adding their expertise.

**Example: Content production**

```
Use a pipeline of agents:
1. Research agent: gather data on our Q3 performance
2. Writer agent: draft a report from the research
3. Editor agent: review for clarity, tone, and accuracy
```

Each agent focuses on what it does best, producing higher quality than one agent doing everything.

### 4. Debate (devil's advocate)

Have two agents argue **opposing positions** on the same topic. One defends, one attacks. The friction between them surfaces risks and blind spots that a single perspective would miss.

**Example: Market entry decision**

```
I'm considering launching our product in Japan.
Use 2 agents in a debate format:
- Agent 1: Argue why we SHOULD enter the Japanese market
- Agent 2: Argue why we should NOT enter the Japanese market
After 2-3 rounds of debate, synthesize the strongest
arguments from each side into a final recommendation.
```

**Example: Investment decision**

```
We're evaluating whether to acquire CompanyX.
Run an adversarial debate:
- Agent 1: The case FOR the acquisition
- Agent 2: The case AGAINST the acquisition
Include financial, strategic, and cultural arguments.
Synthesize into a balanced recommendation.
```

The debate pattern produces more robust conclusions than simply asking "should we do X?" — because each agent is motivated to find the strongest possible arguments for its side.

## When to use each pattern

| Pattern | Best for | Example |
|---------|----------|---------|
| **Parallel** | Same task on different inputs | Analyze 5 competitors, review 10 documents |
| **Consensus** | Decisions that need multiple perspectives | Naming, strategy, risk assessment |
| **Pipeline** | Multi-step workflows with different skills | Research > Write > Edit > Publish |
| **Debate** | Decisions with high stakes or uncertainty | Market entry, acquisitions, strategy shifts |

## How to trigger multiple agents

Just describe what you want in your prompt. Claude handles the orchestration:

```
Use subagents to research these 4 markets in parallel:
US, UK, Germany, Japan. For each, find market size,
top 3 competitors, and regulatory requirements.
Combine into a single comparison report.
```

## Real-world applications

- **Market research**: Analyze multiple markets or competitors simultaneously
- **Content at scale**: Generate variations of emails, ad copy, or social posts in parallel
- **Due diligence**: Multiple agents reviewing different aspects of a deal
- **Event planning**: Parallel agents handling venue research, catering options, and speaker outreach
- **Hiring**: Analyze multiple candidate profiles at once

## Cost awareness

Multiple agents consume tokens faster — each agent has its own conversation. Keep these tips in mind:

- **Start with 2-3 agents**, not 10. Scale up once you're comfortable with the results and cost.
- **Check your spend** with `/cost` after running multi-agent tasks to calibrate expectations.
- **Don't let agents wait for you.** If Claude is idle waiting for your instructions more than 20% of the time, you have too many parallel sessions open. 3-4 simultaneous agents is a practical limit for most people.
- **Stop early if needed.** If a multi-agent task is going in the wrong direction, tell Claude to stop — don't let it keep burning tokens on bad output.

## Tips

- **Independence matters**: Parallel agents work best when tasks don't depend on each other
- **Combine at the end**: Always ask for a synthesis step that merges the parallel results
- **Quality over speed**: For important decisions, use the consensus or debate pattern — they catch blind spots
- **Start simple**: Try parallel with 2-3 agents before scaling to larger teams
