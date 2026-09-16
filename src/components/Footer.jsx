export default function Footer({ onNavigate }) {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/logoo.png"
                alt="ButtonAdda"
                className="w-9 h-9 object-contain"
              />

              <span
                className="font-display font-700 text-sm tracking-tight"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Button Adda
              </span>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--text-muted)",
                maxWidth: "240px",
              }}
            >
              Animated React buttons for interfaces that deserve interaction.
            </p>
          </div>

          <div>
            <div
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Links
            </div>

            <div className="flex flex-col gap-2">

              <a
                href="https://github.com/reejalchoudhary/button-adda"
                  target="_blank"
                  rel="noopener noreferrer"
                className="footer-link text-sm flex items-center gap-1.5"
              >
                GitHub

                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href="https://www.npmjs.com/package/button-adda"
                  target="_blank"
                  rel="noopener noreferrer"
                className="footer-link text-sm flex items-center gap-1.5"
              >
                NPM Package

                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />

                  <polyline points="15 3 21 3 21 9" />

                  <line
                    x1="10"
                    y1="14"
                    x2="21"
                    y2="3"
                  />
                </svg>
              </a>

              <button
                onClick={() => onNavigate("docs")}
                className="footer-link text-sm text-left cursor-pointer"
              >
                Documentation
              </button>

              <button
                onClick={() =>
                  onNavigate("installation")
                }
                className="footer-link text-sm text-left cursor-pointer"
              >
                Installation
              </button>
            </div>
          </div>

          <div>
            <div
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Categories
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "GLOW",
                "INTERACTIVE",
                "3D",
                "MAGNETIC",
                "PLAYFUL",
                "SPECIAL",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    onNavigate("explorer")
                  }
                  className="footer-category font-mono text-xs px-2.5 py-1 rounded cursor-pointer"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8"
          style={{
            borderTop:
              "1px solid var(--border-color)",
          }}
        >
          <div
            className="flex items-center gap-4 font-mono text-xs"
            style={{
              color: "var(--text-muted)",
            }}
          >
            <span>MIT License</span>

            <span style={{ opacity: 0.4 }}>
              •
            </span>

            <span>Open Source</span>

            <span style={{ opacity: 0.4 }}>
              •
            </span>

            <span>v1.0.2</span>
          </div>

          <p
            className="font-mono text-xs"
            style={{
              color: "var(--text-muted)",
            }}
          >
           Made for developers who love good UI.
          </p>
        </div>
      </div>
    </footer>
  );
}