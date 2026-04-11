#!/usr/bin/env python3
"""Create a single-slide PPT with the comparison image as hero."""
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pathlib import Path

ROOT = Path(__file__).parent
IMAGE_PATH = ROOT / "linkedin_comparison.png"
OUTPUT_PATH = ROOT / "screenshot-vs-text.pptx"

prs = Presentation()
prs.slide_width = Inches(16)
prs.slide_height = Inches(9)

slide = prs.slides.add_slide(prs.slide_layouts[6])  # blank
slide.background.fill.solid()
slide.background.fill.fore_color.rgb = RGBColor(20, 20, 24)

# Image — large and centered
img_w = Inches(14)
img_h = Inches(7.8)
left = (prs.slide_width - img_w) // 2
top = (prs.slide_height - img_h) // 2
slide.shapes.add_picture(str(IMAGE_PATH), left, top, img_w, img_h)

prs.save(str(OUTPUT_PATH))
print(f"Saved: {OUTPUT_PATH}")
