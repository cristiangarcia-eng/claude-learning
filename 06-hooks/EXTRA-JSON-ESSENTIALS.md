# Extra: JSON Essentials

## What is JSON?

JSON is a **format for writing settings and configuration**. Think of it as a very strict way to write a list of options.

You already understand JSON's concept — it's like filling out a form:

| Form | JSON |
|------|------|
| Name: Maria | `"name": "Maria"` |
| Age: 30 | `"age": 30` |
| Active: Yes | `"active": true` |

> Claude Code uses JSON files to store settings (hooks, MCP connections, permissions). You don't need to write JSON from scratch — you mostly copy examples and adjust values. But knowing the rules prevents frustrating errors.

## The 5 rules of JSON

### Rule 1: Everything lives inside curly braces `{}`

A JSON file always starts and ends with `{ }`:

```json
{
  "name": "Maria",
  "role": "Product Manager"
}
```

Think of `{ }` as the **borders of the form**.

### Rule 2: Data comes in pairs — `"key": value`

Every piece of data has a **name** (key) and a **value**, separated by a colon:

```json
{
  "key": "value"
}
```

The key is always in quotes. Always. No exceptions.

### Rule 3: Separate pairs with commas — but NOT after the last one

```json
{
  "name": "Maria",
  "role": "Product Manager",
  "team": "Growth"
}
```

Notice: there's a comma after `"Maria"` and after `"Product Manager"`, but **NOT** after `"Growth"`. This is the #1 source of errors.

```
✅  "name": "Maria",       ← comma (more items follow)
✅  "role": "PM",           ← comma (more items follow)
✅  "team": "Growth"        ← NO comma (last item)
❌  "team": "Growth",       ← WRONG! Trailing comma breaks everything
```

### Rule 4: Text uses double quotes `""`, numbers and booleans don't

```json
{
  "name": "Maria",
  "age": 30,
  "active": true
}
```

| Type | Example | Quotes? |
|------|---------|---------|
| Text (string) | `"Maria"` | Yes, always double quotes `""` |
| Number | `30` | No |
| True/False | `true` or `false` | No (and lowercase!) |
| Empty/Nothing | `null` | No |

> **Important**: JSON only accepts double quotes `"like this"`. Single quotes `'like this'` don't work.

### Rule 5: Lists use `[]`, nested objects use `{}`

**A list of items** (array):

```json
{
  "fruits": ["apple", "banana", "orange"]
}
```

**A group inside a group** (nested object):

```json
{
  "user": {
    "name": "Maria",
    "email": "maria@example.com"
  }
}
```

**Both combined** (common in Claude Code settings):

```json
{
  "hooks": [
    {
      "event": "SessionStart",
      "command": "echo Welcome!"
    },
    {
      "event": "Stop",
      "command": "echo Done!"
    }
  ]
}
```

## Where Claude Code uses JSON

You'll encounter JSON in these files:

| File | What it configures | When you'll edit it |
|------|-------------------|-------------------|
| `~/.claude/settings.json` | Personal settings, hooks, permissions | Lesson 06 (Hooks) |
| `.claude/settings.json` | Project-shared settings | Lesson 06 (Hooks) |
| MCP server configs | External tool connections | Lesson 05 (MCP) |

### A real Claude Code settings file

Here's what a typical `settings.json` looks like:

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep"
    ],
    "deny": [
      "Bash(rm -rf *)"
    ]
  },
  "hooks": {
    "SessionStart": [
      {
        "type": "command",
        "command": "echo 'Session started at $(date)'"
      }
    ]
  }
}
```

Let's break it down:

```
{                                           ← Start of file
  "permissions": {                          ← A section called "permissions"
    "allow": [                              ← A list of allowed tools
      "Read",                               ← Item 1 (comma: more follow)
      "Glob",                               ← Item 2 (comma: more follow)
      "Grep"                                ← Item 3 (NO comma: last item)
    ],                                      ← End of list (comma: more sections)
    "deny": [                               ← A list of denied actions
      "Bash(rm -rf *)"                      ← Item 1 (NO comma: last item)
    ]                                       ← End of list (NO comma: last section)
  },                                        ← End of permissions (comma: more sections)
  "hooks": {                                ← A section called "hooks"
    "SessionStart": [                       ← A list of hooks for SessionStart
      {                                     ← Start of hook 1
        "type": "command",                  ← Hook type
        "command": "echo 'Session started'" ← The command to run
      }                                     ← End of hook 1 (NO comma: last item)
    ]                                       ← End of list
  }                                         ← End of hooks (NO comma: last section)
}                                           ← End of file
```

## The 5 most common errors (and how to fix them)

### Error 1: Trailing comma

```json
❌ BROKEN:
{
  "name": "Maria",
  "role": "PM",
}

✅ FIXED:
{
  "name": "Maria",
  "role": "PM"
}
```

**The fix**: Remove the comma after the last item in any list or object.

### Error 2: Missing comma

```json
❌ BROKEN:
{
  "name": "Maria"
  "role": "PM"
}

✅ FIXED:
{
  "name": "Maria",
  "role": "PM"
}
```

**The fix**: Add a comma between items (except the last one).

### Error 3: Single quotes instead of double quotes

```json
❌ BROKEN:
{
  'name': 'Maria'
}

✅ FIXED:
{
  "name": "Maria"
}
```

**The fix**: Always use double quotes `"`, never single quotes `'`.

### Error 4: Missing closing bracket

```json
❌ BROKEN:
{
  "tools": [
    "Read",
    "Write"

}

✅ FIXED:
{
  "tools": [
    "Read",
    "Write"
  ]
}
```

**The fix**: Every `{` needs a `}`. Every `[` needs a `]`. Count them.

### Error 5: Comments in JSON

```json
❌ BROKEN:
{
  // This is my name
  "name": "Maria"
}

✅ FIXED:
{
  "name": "Maria"
}
```

**The fix**: JSON does not allow comments. Remove any lines starting with `//` or `#`.

> **Note**: Some Claude Code config files use JSONC (JSON with Comments), which does allow `//` comments. But standard JSON does not. When in doubt, remove comments.

## How to validate your JSON

### Option 1: Ask Claude

Just paste your JSON into Claude Code and say:

```
Is this valid JSON? Fix any errors:
{
  "name": "Maria",
  "tools": ["Read", "Write",]
}
```

Claude will spot the trailing comma and fix it for you.

### Option 2: Cursor (recommended)

If you're using Cursor:

1. Open the `.json` file
2. Cursor automatically highlights errors with **red squiggly underlines**
3. Hover over the error to see what's wrong

This is the easiest way — errors are visible as you type.

### Option 3: Online validator

Search for "JSON validator" in your browser and paste your JSON. It will tell you exactly where the error is.

## Quick reference card

```
JSON CHEAT SHEET
─────────────────────────────────────
Text:       "hello"          (double quotes)
Number:     42               (no quotes)
Boolean:    true / false     (no quotes, lowercase)
Null:       null             (no quotes, lowercase)
List:       ["a", "b", "c"] (square brackets)
Object:     {"key": "val"}  (curly braces)
─────────────────────────────────────
✅ Commas BETWEEN items
❌ No comma after LAST item
✅ Double quotes "only"
❌ No comments (usually)
─────────────────────────────────────
```

**Next step**: [Back to the Hooks lesson →](README.md)
