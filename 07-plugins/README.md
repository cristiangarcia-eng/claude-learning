# Plugins
**The distribution layer**

You've built Skills, created Subagents, connected MCP servers. Powerful stuff — but sharing this setup with your team means sending files, explaining configuration, and hoping everyone sets things up the same way. What if you could package everything into a single install command?

> **A plugin is a Skill, a Subagent, an MCP config, and settings — all in one install.**

Plugins are pre-built bundles that add new capabilities to Claude Code with a single command. Think of them like apps on your phone: you find one that does what you need, install it, and start using it immediately.

## Why Use Plugins?

| Without Plugins | With Plugins |
|----------------|-------------|
| Find and configure each tool separately | One install command sets up everything |
| Copy settings between team members manually | Everyone installs the same plugin |
| No version tracking | Plugins update automatically |
| Setup can take 30+ minutes | Ready to use in under 2 minutes |

## Finding and Installing Plugins

### Browse Available Plugins

Inside Claude Code, use the plugin commands to discover what is available:

```bash
/plugin list
```

### Install a Plugin

```bash
/plugin install plugin-name
```

That is it. The plugin handles all configuration automatically.

### Other Plugin Commands

| Command | What It Does |
|---------|-------------|
| `/plugin list` | Browse available plugins |
| `/plugin install plugin-name` | Install a plugin |
| `/plugin info plugin-name` | See what a plugin includes before installing |
| `/plugin disable plugin-name` | Temporarily turn off a plugin |
| `/plugin enable plugin-name` | Turn a disabled plugin back on |
| `/plugin uninstall plugin-name` | Remove a plugin completely |
| `/plugin update plugin-name` | Update to the latest version |

## Plugin Examples

- **Content Review** -- Check documents for clarity, tone, and consistency
- **Meeting Assistant** -- Summarize notes, extract action items, draft follow-ups
- **Report Generator** -- Turn raw data into formatted reports and summaries
- **Sprint Planner** -- Analyze backlogs and suggest sprint plans
- **Status Reporter** -- Generate weekly status updates from your project tools
- **Brand Voice** -- Enforce brand guidelines when reviewing content
- **Accessibility Checker** -- Review content for accessibility issues

## Where Plugins Come From

| Source | Description |
|--------|-------------|
| **Official Marketplace** | Plugins maintained by Anthropic (the company behind Claude) |
| **Community** | Plugins created and shared by other users |
| **Your Organization** | Private plugins built by your company's team |

Your organization may have its own plugin marketplace with company-specific tools. Check with your team lead or IT department.

## Plugin Types

| Type | Best For |
|------|----------|
| **Official** | Widely useful, well-tested features |
| **Community** | Specialized workflows and niche needs |
| **Organization** | Company-specific processes and tools |
| **Personal** | Your own custom workflows |

## When to Use a Plugin vs. Other Features

| You Need | Use |
|----------|-----|
| A bundle of related capabilities | A plugin |
| A single quick shortcut | A slash command |
| A connection to a live service | An MCP server |
| To remember preferences | Memory (CLAUDE.md) |

## Tips

- **Check what your team uses.** Ask colleagues which plugins they have installed. Using the same plugins ensures consistent workflows.
- **Start small.** Install one or two plugins and learn them well before adding more.
- **Disable, do not uninstall.** If you are not sure about a plugin, disable it temporarily instead of removing it. You can re-enable it later without reconfiguring.

## Additional Resources

- [Official Plugins Documentation](https://code.claude.com/docs/en/plugins)
- [Discover Plugins](https://code.claude.com/docs/en/discover-plugins)

You've completed the full course! You now know everything you need to use Claude Code like a pro.

---

*Part of the [Claude How To](../) guide series*
