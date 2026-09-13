import { useState } from "react";

export default function CodeBlock({
  code,
  language = "JSX",
  label,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      style={{
        background: "var(--bg-base)",
        border: "1px solid var(--border-color)",
      }}
      className="rounded-xl overflow-hidden"
    >
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="flex items-center gap-3">

          <div className="flex gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: "#FF5F57",
              }}
            />

            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: "#FFBD2E",
              }}
            />

            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: "#28CA41",
              }}
            />
          </div>

          {label && (
            <span
              className="font-mono text-xs"
              style={{
                color: "var(--text-muted)",
              }}
            >
              {label}
            </span>
          )}

          <span
            className="font-mono text-xs uppercase tracking-widest px-1.5 py-0.5 rounded"
            style={{
              background: "var(--bg-surface)",
              color: "var(--text-muted)",
            }}
          >
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer"
          style={{
            background: copied
              ? "rgba(16,185,129,0.15)"
              : "var(--bg-surface)",

            color: copied
              ? "#10B981"
              : "var(--text-secondary)",

            border: `1px solid ${
              copied
                ? "rgba(16,185,129,0.3)"
                : "var(--border-color)"
            }`,
          }}
        >
          {copied ? (
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>

              COPIED
            </>
          ) : (
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="9"
                  y="9"
                  width="13"
                  height="13"
                  rx="2"
                  ry="2"
                />

                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>

              COPY
            </>
          )}
        </button>
      </div>

      <pre
        className="p-5 overflow-x-auto text-sm leading-relaxed font-mono"
        style={{
          color: "var(--text-primary)",
        }}
      >
        <code
          dangerouslySetInnerHTML={{
            __html: highlightCode(code),
          }}
        />
      </pre>
    </div>
  );
}

function highlightCode(code) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(?:[^"\\]|\\.)*")/g,
      '<span style="color:#FF9A5C">$1</span>'
    )
    .replace(
      /\b(import|from|export|default|function|return|const|let|var)\b/g,
      '<span style="color:#C084FC">$1</span>'
    )
    .replace(
      /(&lt;\/?[A-Z][A-Za-z]*)/g,
      '<span style="color:#38BDF8">$1</span>'
    )
    .replace(
      /(\s\w+=\{)/g,
      '<span style="color:#A3E635">$1</span>'
    )
    .replace(
      /(\/\/.*$)/gm,
      '<span style="color:var(--text-muted)">$1</span>'
    );
}