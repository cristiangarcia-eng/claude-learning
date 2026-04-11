#!/usr/bin/env python3
"""Create a simple, non-technical comparison image for LinkedIn."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).parent


def load_font(size, bold=False):
    paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNS.ttf",
    ]
    for p in paths:
        try:
            f = ImageFont.truetype(p, size)
            return f
        except (OSError, IOError):
            continue
    return ImageFont.load_default()


def load_mono(size):
    for p in ["/System/Library/Fonts/Menlo.ttc", "/System/Library/Fonts/SFMono-Regular.otf"]:
        try:
            return ImageFont.truetype(p, size)
        except (OSError, IOError):
            continue
    return ImageFont.load_default()


def center_text(draw, text, font, y, x_center, fill):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text((x_center - tw // 2, y), text, fill=fill, font=font)


def draw_camera(draw, cx, cy, color):
    """Draw a simple camera icon centered at (cx, cy)."""
    s = 18  # half-size
    # Body
    draw.rounded_rectangle([cx - s, cy - s + 6, cx + s, cy + s], radius=4, outline=color, width=3)
    # Lens
    draw.ellipse([cx - 10, cy - 6, cx + 10, cy + 14], outline=color, width=3)
    # Flash bump
    draw.polygon([(cx - 6, cy - s + 6), (cx - 2, cy - s - 4), (cx + 6, cy - s - 4), (cx + 10, cy - s + 6)], outline=color, width=2)


def draw_clipboard(draw, cx, cy, color):
    """Draw a simple clipboard icon centered at (cx, cy)."""
    s = 16
    # Board
    draw.rounded_rectangle([cx - s, cy - s + 4, cx + s, cy + s + 4], radius=4, outline=color, width=3)
    # Clip at top
    draw.rounded_rectangle([cx - 8, cy - s - 2, cx + 8, cy - s + 10], radius=3, outline=color, width=3, fill=(255, 255, 255))
    # Lines on clipboard
    for i in range(3):
        ly = cy + i * 9 - 2
        draw.line([(cx - 10, ly), (cx + 10, ly)], fill=color, width=2)


def create():
    W, H = 1200, 670
    img = Image.new("RGB", (W, H), (255, 255, 255))
    draw = ImageDraw.Draw(img)

    # Fonts
    title_font = load_font(30)
    subtitle_font = load_font(18)
    label_font = load_font(24)
    big_number_font = load_font(48)
    unit_font = load_font(20)
    desc_font = load_font(16)
    badge_font = load_font(18)
    icon_font = load_font(50)
    detail_font = load_font(14)

    # Colors
    RED = (220, 53, 69)
    RED_LIGHT = (255, 240, 240)
    GREEN = (34, 154, 72)
    GREEN_LIGHT = (235, 255, 240)
    DARK = (30, 30, 30)
    GRAY = (120, 120, 120)
    LIGHT_GRAY = (245, 245, 245)

    # ── Title ──
    center_text(draw, "Mismo mensaje. Dos formas de mandárselo a tu AI.", title_font, 28, W // 2, DARK)
    center_text(draw, "¿Cuál usas tú?", subtitle_font, 68, W // 2, GRAY)

    # ── Layout ──
    panel_w = 480
    gap = 60
    mx = (W - panel_w * 2 - gap) // 2
    top = 120
    panel_h = 400

    # ═══════════════════════════════════
    # LEFT: Screenshot (the expensive way)
    # ═══════════════════════════════════
    lx = mx
    cx_left = lx + panel_w // 2

    # Panel background
    draw.rounded_rectangle([lx, top, lx + panel_w, top + panel_h], radius=16, fill=RED_LIGHT, outline=RED, width=2)

    # Camera icon (drawn)
    draw_camera(draw, cx_left, top + 52, RED)

    # Label
    center_text(draw, "Mandar un screenshot", label_font, top + 95, cx_left, DARK)

    # Big number
    center_text(draw, "1,585", big_number_font, top + 155, cx_left, RED)
    center_text(draw, "tokens", unit_font, top + 215, cx_left, RED)

    # Explanation lines
    explanations_left = [
        "La AI tiene que 'leer' la imagen",
        "Puede confundir caracteres",
        "No puede buscar el texto en tu código",
    ]
    y = top + 270
    for line in explanations_left:
        # Red dot + text
        bbox = draw.textbbox((0, 0), f"     {line}", font=desc_font)
        tw = bbox[2] - bbox[0]
        tx = cx_left - tw // 2
        draw.ellipse([tx, y + 5, tx + 8, y + 13], fill=RED)
        draw.text((tx + 14, y), line, fill=(150, 50, 50), font=desc_font)
        y += 28

    # ═══════════════════════════════════
    # RIGHT: Copy-paste (the smart way)
    # ═══════════════════════════════════
    rx = mx + panel_w + gap
    cx_right = rx + panel_w // 2

    # Panel background
    draw.rounded_rectangle([rx, top, rx + panel_w, top + panel_h], radius=16, fill=GREEN_LIGHT, outline=GREEN, width=2)

    # Clipboard icon (drawn)
    draw_clipboard(draw, cx_right, top + 52, GREEN)

    # Label
    center_text(draw, "Copiar y pegar el texto", label_font, top + 95, cx_right, DARK)

    # Big number
    center_text(draw, "458", big_number_font, top + 155, cx_right, GREEN)
    center_text(draw, "tokens", unit_font, top + 215, cx_right, GREEN)

    # Explanation lines
    explanations_right = [
        "La AI lee cada carácter perfecto",
        "Cero confusiones",
        "Puede buscar directamente en tu código",
    ]
    y = top + 270
    for line in explanations_right:
        bbox = draw.textbbox((0, 0), f"     {line}", font=desc_font)
        tw = bbox[2] - bbox[0]
        tx = cx_right - tw // 2
        draw.ellipse([tx, y + 5, tx + 8, y + 13], fill=GREEN)
        draw.text((tx + 14, y), line, fill=(20, 100, 40), font=desc_font)
        y += 28

    # ── Badge at bottom center ──
    badge = "El screenshot cuesta 3.5x más"
    bbox = draw.textbbox((0, 0), badge, font=badge_font)
    bw = bbox[2] - bbox[0]
    bh = bbox[3] - bbox[1]
    bx = W // 2 - bw // 2 - 20
    by = top + panel_h + 24
    draw.rounded_rectangle([bx, by, bx + bw + 40, by + bh + 22], radius=20, fill=RED)
    draw.text((bx + 20, by + 10), badge, fill=(255, 255, 255), font=badge_font)

    # ── Footer ──
    center_text(draw, "Medido con la API de Claude  ·  Mismo prompt, mismo modelo", detail_font, H - 35, W // 2, GRAY)

    # Save
    out = ROOT / "linkedin_comparison.png"
    img.save(out, "PNG", quality=95)
    print(f"Saved: {out} ({W}x{H})")


if __name__ == "__main__":
    create()
