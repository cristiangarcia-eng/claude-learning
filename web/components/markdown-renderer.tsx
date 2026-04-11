"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import type { Components } from "react-markdown";
import { MermaidDiagram } from "./mermaid-diagram";
import { CodeBlock } from "./code-block";

const components: Components = {
  code({ className, children, ...props }) {
    const lang = className?.replace("language-", "") || "";
    const content = String(children).replace(/\n$/, "");

    // Inline code
    if (!className && !content.includes("\n")) {
      return (
        <code
          className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-brand-green"
          {...props}
        >
          {children}
        </code>
      );
    }

    // Mermaid diagrams
    if (lang === "mermaid") {
      return <MermaidDiagram code={content} />;
    }

    // Code blocks
    return <CodeBlock className={className}>{content}</CodeBlock>;
  },
  pre({ children }) {
    // Let code component handle rendering
    return <>{children}</>;
  },
  table({ children }) {
    return (
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">{children}</table>
      </div>
    );
  },
  thead({ children }) {
    return <thead className="bg-muted/50">{children}</thead>;
  },
  th({ children }) {
    return (
      <th className="px-4 py-2 text-left font-semibold border-b border-border">
        {children}
      </th>
    );
  },
  td({ children }) {
    return (
      <td className="px-4 py-2 border-b border-border/50">{children}</td>
    );
  },
  a({ href, children }) {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-brand-green hover:underline"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  h1({ children }) {
    return (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">
        {children}
      </h1>
    );
  },
  h2({ children }) {
    return (
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-foreground border-b border-border pb-2">
        {children}
      </h2>
    );
  },
  h3({ children }) {
    return (
      <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">
        {children}
      </h3>
    );
  },
  h4({ children }) {
    return (
      <h4 className="text-lg font-medium mt-4 mb-2 text-foreground">
        {children}
      </h4>
    );
  },
  blockquote({ children }) {
    return (
      <blockquote className="my-4 border-l-4 border-brand-green/50 pl-4 text-muted-foreground italic">
        {children}
      </blockquote>
    );
  },
  ul({ children }) {
    return <ul className="my-3 ml-6 list-disc space-y-1">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="my-3 ml-6 list-decimal space-y-1">{children}</ol>;
  },
  li({ children }) {
    return <li className="leading-relaxed">{children}</li>;
  },
  p({ children }) {
    return <p className="my-3 leading-relaxed">{children}</p>;
  },
  hr() {
    return <hr className="my-8 border-border" />;
  },
  img({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt || ""}
        className="my-4 max-w-full rounded-lg"
      />
    );
  },
};

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
