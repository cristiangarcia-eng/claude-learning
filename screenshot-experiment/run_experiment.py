#!/usr/bin/env python3
"""
Screenshot vs Text Token Experiment

Sends the same error to Claude in two ways:
  1. As plain text
  2. As a screenshot (image)

Compares input_tokens reported by the API to measure the real cost difference.
"""
import anthropic
import base64
import json
import os
import subprocess
import sys
from pathlib import Path
from dotenv import load_dotenv

ROOT = Path(__file__).parent
load_dotenv(ROOT.parent / ".env.claude-mastery")
MODEL = "claude-3-haiku-20240307"
PROMPT = "What is the error here and how would you fix it? Be brief."

# A realistic 20-line Python stack trace
ERROR_TEXT = """\
Traceback (most recent call last):
  File "/app/server.py", line 142, in handle_request
    response = process_order(request.json)
  File "/app/services/orders.py", line 87, in process_order
    validated = validate_order_schema(data)
  File "/app/services/orders.py", line 34, in validate_order_schema
    check_inventory(item["sku"], item["quantity"])
  File "/app/services/inventory.py", line 56, in check_inventory
    stock = redis_client.get(f"inventory:{sku}")
  File "/app/lib/cache.py", line 23, in get
    return self._connection.execute("GET", key)
  File "/usr/lib/python3.12/site-packages/redis/client.py", line 538, in execute
    return self._send_command(conn, *args)
  File "/usr/lib/python3.12/site-packages/redis/client.py", line 412, in _send_command
    conn.send_command(*args)
  File "/usr/lib/python3.12/site-packages/redis/connection.py", line 291, in send_command
    self._sock.sendall(packed_command)
ConnectionRefusedError: [Errno 111] Connection refused

During handling of the above exception, another exception was raised:

  File "/app/server.py", line 145, in handle_request
    return jsonify({"error": "Internal server error"}), 500
  File "/app/lib/logging.py", line 12, in log_error
    logger.critical(f"Order processing failed: {e}", exc_info=True)
redis.exceptions.ConnectionError: Error 111 connecting to redis:6379. Connection refused."""


def create_screenshot(text: str, output_path: Path) -> Path:
    """Create a terminal-style screenshot of the error text using a Python image."""
    try:
        from PIL import Image, ImageDraw, ImageFont

        # Terminal-like appearance
        padding = 20
        line_height = 18
        lines = text.split("\n")
        width = 900
        height = padding * 2 + line_height * len(lines) + 10

        img = Image.new("RGB", (width, height), color=(30, 30, 30))
        draw = ImageDraw.Draw(img)

        # Try monospace font, fall back to default
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", 13)
        except (OSError, IOError):
            try:
                font = ImageFont.truetype("/System/Library/Fonts/SFMono-Regular.otf", 13)
            except (OSError, IOError):
                font = ImageFont.load_default()

        y = padding
        for line in lines:
            # Color: red for error lines, gray for paths, white for rest
            if "Error" in line or "refused" in line.lower():
                color = (255, 100, 100)
            elif line.startswith("  File"):
                color = (180, 180, 180)
            else:
                color = (220, 220, 220)
            draw.text((padding, y), line, fill=color, font=font)
            y += line_height

        img.save(output_path, "PNG")
        return output_path
    except ImportError:
        print("Pillow not installed. Installing...")
        subprocess.run([sys.executable, "-m", "pip", "install", "Pillow"], check=True)
        return create_screenshot(text, output_path)


def send_as_text(client: anthropic.Anthropic, text: str) -> dict:
    """Send error as plain text, return usage."""
    response = client.messages.create(
        model=MODEL,
        max_tokens=500,
        messages=[{
            "role": "user",
            "content": f"{PROMPT}\n\n```\n{text}\n```"
        }]
    )
    return {
        "method": "text",
        "input_tokens": response.usage.input_tokens,
        "output_tokens": response.usage.output_tokens,
        "response": response.content[0].text[:200],
    }


def send_as_image(client: anthropic.Anthropic, image_path: Path) -> dict:
    """Send error as screenshot, return usage."""
    image_data = base64.standard_b64encode(image_path.read_bytes()).decode("utf-8")
    response = client.messages.create(
        model=MODEL,
        max_tokens=500,
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": PROMPT},
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data,
                    }
                }
            ]
        }]
    )
    return {
        "method": "image",
        "input_tokens": response.usage.input_tokens,
        "output_tokens": response.usage.output_tokens,
        "response": response.content[0].text[:200],
    }


def create_screenshot_at_size(text: str, output_path: Path, target_width: int, target_height: int) -> Path:
    """Create a screenshot and resize to a specific resolution."""
    from PIL import Image
    # First create the natural-size screenshot
    temp_path = output_path.with_suffix(".tmp.png")
    create_screenshot(text, temp_path)
    img = Image.open(temp_path)
    # Resize to target (simulating a full-screen capture)
    img = img.resize((target_width, target_height), Image.LANCZOS)
    img.save(output_path, "PNG")
    temp_path.unlink()
    return output_path


def main():
    client = anthropic.Anthropic()  # uses ANTHROPIC_API_KEY env var

    # Test sizes: natural, 1080p, retina
    sizes = [
        ("Natural (~900x518)", None),           # natural size
        ("1080p (1920x1080)", (1920, 1080)),    # typical laptop screenshot
        ("Retina (3840x2160)", (3840, 2160)),   # retina/4K screenshot
    ]

    # Step 1: Get text baseline
    print("--- Sending as TEXT ---")
    text_result = send_as_text(client, ERROR_TEXT)
    print(f"Input tokens: {text_result['input_tokens']}\n")

    image_results = []

    for label, size in sizes:
        screenshot_path = ROOT / f"error_screenshot_{label.split()[0].lower()}.png"

        if size is None:
            print(f"--- {label} ---")
            create_screenshot(ERROR_TEXT, screenshot_path)
        else:
            print(f"--- {label} ---")
            create_screenshot_at_size(ERROR_TEXT, screenshot_path, size[0], size[1])

        from PIL import Image
        img = Image.open(screenshot_path)
        print(f"  Image size: {img.size[0]}x{img.size[1]}")
        expected = (img.size[0] * img.size[1]) / 750
        print(f"  Expected tokens (w*h/750): ~{expected:.0f}")

        result = send_as_image(client, screenshot_path)
        result["label"] = label
        result["dimensions"] = f"{img.size[0]}x{img.size[1]}"
        multiplier = result["input_tokens"] / text_result["input_tokens"]
        result["multiplier"] = round(multiplier, 2)
        print(f"  Actual input tokens: {result['input_tokens']}")
        print(f"  Ratio vs text: {multiplier:.1f}x\n")
        image_results.append(result)

    # Summary
    print("=" * 65)
    print("RESULTS SUMMARY")
    print("=" * 65)
    print(f"{'Method':<25} {'Input tokens':>14} {'vs Text':>10}")
    print("-" * 51)
    print(f"{'Text (baseline)':<25} {text_result['input_tokens']:>14,} {'1.0x':>10}")
    for r in image_results:
        print(f"{r['label']:<25} {r['input_tokens']:>14,} {r['multiplier']:.1f}x".rjust(51) if False else f"{r['label']:<25} {r['input_tokens']:>14,} {r['multiplier']:.1f}x")
    print("-" * 51)

    # Save results
    results = {
        "model": MODEL,
        "error_lines": len(ERROR_TEXT.strip().split("\n")),
        "error_chars": len(ERROR_TEXT),
        "text": text_result,
        "images": image_results,
    }
    results_path = ROOT / "results.json"
    results_path.write_text(json.dumps(results, indent=2))
    print(f"\nResults saved to {results_path}")


if __name__ == "__main__":
    main()
