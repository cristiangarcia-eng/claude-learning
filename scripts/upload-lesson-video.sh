#!/usr/bin/env bash
set -euo pipefail

# Convert a lesson video to web-optimized mp4 and upload it to Vercel Blob.
#
# Usage:
#   scripts/upload-lesson-video.sh <lesson-slug> <input-video>
#
# Examples:
#   scripts/upload-lesson-video.sh cursor ~/Desktop/Cursor-basics.mov
#   scripts/upload-lesson-video.sh memory ~/Desktop/memory-intro.mp4
#
# The lesson slug matches the value in web/lib/lessons.ts (e.g. "cursor",
# "memory", "skills"). Any video format ffmpeg can read is accepted.

if [ $# -ne 2 ]; then
  echo "usage: $0 <lesson-slug> <input-video>" >&2
  exit 2
fi

LESSON_SLUG="$1"
INPUT="$2"

if [ ! -f "$INPUT" ]; then
  echo "error: input file not found: $INPUT" >&2
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "error: ffmpeg not found. Install with: brew install ffmpeg" >&2
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WEB_DIR="$REPO_ROOT/web"
ENV_FILE="$WEB_DIR/.env.local"

if [ ! -f "$ENV_FILE" ] || ! grep -q '^BLOB_READ_WRITE_TOKEN=' "$ENV_FILE"; then
  echo "error: BLOB_READ_WRITE_TOKEN missing from $ENV_FILE" >&2
  echo "run: cd web && vercel env pull .env.local" >&2
  exit 1
fi

BASENAME="$(basename "$INPUT")"
STEM="${BASENAME%.*}"
TMP_OUT="$(mktemp -t "${STEM}.XXXXXX").mp4"

echo "→ Converting $BASENAME to web-optimized mp4..."
ffmpeg -y -i "$INPUT" \
  -vcodec libx264 -crf 23 -preset medium \
  -acodec aac -b:a 128k \
  -movflags +faststart \
  "$TMP_OUT" 2>&1 | tail -1

SIZE=$(du -h "$TMP_OUT" | awk '{print $1}')
echo "✓ Converted ($SIZE)"
echo

echo "→ Uploading to Vercel Blob as lessons/${LESSON_SLUG}/${STEM}.mp4..."
cd "$WEB_DIR"
export "$(grep '^BLOB_READ_WRITE_TOKEN=' "$ENV_FILE" | xargs)"
UPLOAD_OUTPUT=$(vercel blob put "$TMP_OUT" --pathname="lessons/${LESSON_SLUG}/${STEM}.mp4" 2>&1)
URL=$(echo "$UPLOAD_OUTPUT" | grep -oE 'https://[^ ]+\.mp4' | head -1)

rm -f "$TMP_OUT"

if [ -z "$URL" ]; then
  echo "error: upload failed" >&2
  echo "$UPLOAD_OUTPUT" >&2
  exit 1
fi

echo "✓ Uploaded: $URL"
echo
echo "────────────────────────────────────────────────────────"
echo "Paste this into your lesson README.md (and translate for .es.md):"
echo "────────────────────────────────────────────────────────"
cat <<MARKDOWN

### A quick tour

Here's the rest of this lesson as a short video — feel free to watch first and then skim the steps below, or skip it and go straight to the written instructions.

<video src="$URL" controls playsinline preload="metadata" class="my-4 max-w-full rounded-lg"></video>

*PS: Feel free to watch me at 1.5x — I won't take it personally.*

MARKDOWN
