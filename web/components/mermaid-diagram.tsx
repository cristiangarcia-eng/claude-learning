"use client";

import { useEffect, useRef, useId } from "react";

export function MermaidDiagram({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "-");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const { default: mermaid } = await import("mermaid");
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        fontFamily: "Inter, sans-serif",
      });

      if (cancelled || !ref.current) return;

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, code);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch {
        if (ref.current) {
          ref.current.textContent = "Failed to render diagram";
        }
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [code, id]);

  return (
    <div
      ref={ref}
      className="my-6 flex justify-center overflow-x-auto rounded-lg bg-card p-4"
    />
  );
}
