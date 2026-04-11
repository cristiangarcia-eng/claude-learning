#!/usr/bin/env python3
"""
Generates a LinkedIn-ready PNG of the advisor tool cost comparison.

Editorial style: Helvetica Neue, muted modern palette, reference line
at Opus's price to visually dramatize the overshoot.
"""
from pathlib import Path

import matplotlib.pyplot as plt
from matplotlib import rcParams
from matplotlib.patches import FancyBboxPatch

# ----- Data (from the large taxonomy run, 253 entries) -----
# Order: villain on top, hero on bottom.
configs = [
    {
        "label": "Sonnet + advisor",
        "cost": 0.9849,
        "color": "#dc2626",      # red-600
        "caption": "1,78x más caro que Opus solo  ·  7,5x más caro que Sonnet solo",
        "caption_color": "#991b1b",  # red-800
    },
    {
        "label": "Opus solo",
        "cost": 0.5539,
        "color": "#f97316",      # orange-500
        "caption": "4,2x más caro que Sonnet solo",
        "caption_color": "#9a3412",  # orange-800
    },
    {
        "label": "Sonnet solo",
        "cost": 0.1316,
        "color": "#059669",      # emerald-600
        "caption": "~95% de la calidad de Opus por el 14% del coste",
        "caption_color": "#065f46",  # emerald-800
    },
]

# ----- Colors -----
INK_PRIMARY = "#0f172a"   # slate-900
INK_SECOND  = "#475569"   # slate-600
INK_MUTED   = "#94a3b8"   # slate-400
BG          = "#ffffff"
RULE        = "#e2e8f0"   # slate-200
ACCENT      = "#dc2626"   # red-600 (for eyebrow)

# ----- Typography -----
rcParams["font.family"] = "Helvetica Neue"
rcParams["font.size"] = 12

# ----- Figure -----
fig = plt.figure(figsize=(12, 6.75), dpi=150)
fig.patch.set_facecolor(BG)

# Axes for the bars — positioned to leave room for title above and footer below
ax = fig.add_axes([0.14, 0.16, 0.78, 0.52])
ax.set_facecolor(BG)

labels = [c["label"] for c in configs]
costs  = [c["cost"]  for c in configs]
colors = [c["color"] for c in configs]

# Horizontal bars
y_positions = list(range(len(configs)))
bars = ax.barh(
    y_positions,
    costs,
    color=colors,
    height=0.52,
    edgecolor="none",
    zorder=3,
)
ax.set_yticks(y_positions)
ax.set_yticklabels(labels)

# Reference line at Opus solo's price ("nivel esperado")
OPUS_PRICE = configs[1]["cost"]
ax.axvline(
    x=OPUS_PRICE,
    color=INK_SECOND,
    linestyle=(0, (3, 4)),
    linewidth=1.2,
    alpha=0.55,
    zorder=2,
)
ax.text(
    OPUS_PRICE - 0.008,
    -0.55,
    "nivel esperado (precio de Opus solo)  ",
    fontsize=9,
    color=INK_SECOND,
    style="italic",
    ha="right",
    va="center",
    alpha=0.9,
)

# Cost labels at the end of each bar
for i, (bar, cost) in enumerate(zip(bars, costs)):
    ax.text(
        bar.get_width() + 0.018,
        bar.get_y() + bar.get_height() / 2,
        f"${cost:.2f}",
        va="center",
        ha="left",
        fontsize=24,
        fontweight="bold",
        color=INK_PRIMARY,
        fontfamily="Helvetica Neue",
    )

# Captions UNDER each bar, aligned with the bar start
for i, c in enumerate(configs):
    ax.text(
        0.005,
        i + 0.44,
        c["caption"],
        fontsize=9.5,
        color=c["caption_color"],
        ha="left",
        va="top",
        fontstyle="italic",
    )

# Clean up axis
ax.set_xlim(-0.01, 1.22)
ax.set_ylim(-0.95, 2.75)
ax.set_xticks([])
ax.tick_params(axis="y", length=0, pad=14, labelsize=12)
for label in ax.get_yticklabels():
    label.set_color(INK_PRIMARY)
    label.set_fontweight("600")
for spine in ("top", "right", "bottom", "left"):
    ax.spines[spine].set_visible(False)
ax.invert_yaxis()

# ----- Title block -----
# Eyebrow (small caps accent)
fig.text(
    0.08, 0.90,
    "EXPERIMENTO  ·  ADVISOR TOOL",
    fontsize=11,
    fontweight="bold",
    color=ACCENT,
    ha="left",
)

# Main title, two lines
fig.text(
    0.08, 0.835,
    "Probé el \"advisor tool\" de Anthropic esperando ahorrar dinero.",
    fontsize=21,
    fontweight="bold",
    color=INK_PRIMARY,
    ha="left",
)
fig.text(
    0.08, 0.785,
    "Me costó el doble que usar Opus solo.",
    fontsize=18,
    fontweight="500",
    color=INK_SECOND,
    ha="left",
)

# Thin divider rule under the title
fig.add_artist(
    plt.Line2D(
        [0.08, 0.92],
        [0.745, 0.745],
        color=RULE,
        linewidth=1,
        transform=fig.transFigure,
    )
)

# ----- Footer -----
fig.add_artist(
    plt.Line2D(
        [0.08, 0.92],
        [0.105, 0.105],
        color=RULE,
        linewidth=1,
        transform=fig.transFigure,
    )
)
fig.text(
    0.08, 0.065,
    "253 industrias de una taxonomía sintética tipo ATS  ·  Misma tarea, mismo prompt, 1 ejecución por config",
    fontsize=9.5,
    color=INK_SECOND,
    ha="left",
)
fig.text(
    0.08, 0.035,
    "Claude Sonnet 4.6  ·  Claude Opus 4.6  ·  beta: advisor-tool-2026-03-01",
    fontsize=9.5,
    color=INK_MUTED,
    ha="left",
)

out = Path(__file__).parent / "advisor_cost_comparison.png"
plt.savefig(out, dpi=150, facecolor=BG)
print(f"Wrote {out}")
