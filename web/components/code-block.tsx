"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const lang = className?.replace("language-", "") || "";

  async function handleCopy() {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative my-4">
      {lang && (
        <span className="absolute top-2 left-3 text-xs text-muted-foreground font-mono">
          {lang}
        </span>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-brand-green" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      <pre className="overflow-x-auto rounded-lg bg-card border border-border p-4 pt-8">
        <code className={`text-sm font-mono ${className || ""}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}
