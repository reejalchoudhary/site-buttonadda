import { useState } from "react";
import * as ButtonAdda from "button-adda";

const previewButtons = [
  { name: "AuroraButton", color: "#7B5EA7", tag: "GLOW" },
  { name: "FireButton", color: "#EF4444", tag: "PLAYFUL" },
  { name: "MagneticButton", color: "#6366F1", tag: "MAGNETIC" },
  { name: "NeonButton", color: "#FF7A3D", tag: "GLOW" },
  { name: "ThreeDButton", color: "#F97316", tag: "3D" },
  { name: "PuppyButton", color: "#F59E0B", tag: "PLAYFUL" },
];

export default function HomePage({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("npm install button-adda");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div style={{ background: "var(--bg-base)" }}>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.3,
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,122,61,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#10B981" }}
            />

            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Open Source • React Component Library
            </span>
          </div>

          <h1 className="font-display font-800 leading-none mb-4">
            <span
              className="block text-5xl md:text-7xl lg:text-8xl tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              BUTTONS THAT
            </span>

            <span
              className="block text-5xl md:text-7xl lg:text-8xl tracking-tight"
              style={{ color: "var(--brand)" }}
            >
              DO MORE.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-3 font-display"
            style={{ color: "var(--text-secondary)" }}
          >
            49+ animated, interactive and customizable buttons for React.
          </p>

          <p
            className="text-base mb-10"
            style={{
              color: "var(--text-muted)",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
            }}
          >
            Drop expressive interactions into your interface without building
            every animation from scratch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => onNavigate("explorer")}
            className="hero-action hero-action-primary px-8 py-3.5 rounded-xl font-display font-600 text-sm"
          >
            EXPLORE BUTTONS →
          </button>

            <button
              onClick={() => onNavigate("installation")}
              className="hero-action hero-action-secondary px-8 py-3.5 rounded-xl font-display font-600 text-sm"
            >
              GET STARTED
            </button>
          </div>

          <div
            className="inline-flex items-center gap-4 px-5 py-3 rounded-xl"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
            }}
          >
            <span
              className="font-mono text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              $
            </span>

            <span
              className="font-mono text-sm"
              style={{ color: "var(--text-primary)" }}
            >
              npm install button-adda
            </span>

            <button
              onClick={handleCopyInstall}
              className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md transition-all cursor-pointer"
              style={{
                background: copied
                  ? "rgba(16,185,129,0.15)"
                  : "var(--bg-card)",

                color: copied
                  ? "#10B981"
                  : "var(--text-muted)",

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
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>

                  COPIED
                </>
              ) : (
                <>
                  <svg
                    width="11"
                    height="11"
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
                    />

                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>

                  COPY
                </>
              )}
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto mt-16">
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
            }}
          >

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--brand), transparent)",
              }}
            />

            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--brand)" }}
              />

              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Live Component Preview
              </span>

              <span
                className="ml-auto font-mono text-xs px-2 py-1 rounded"
                style={{
                  background: "var(--bg-card)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border-color)",
                }}
              >
                49 components
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {previewButtons.map((btn) => {
                const PreviewComponent = ButtonAdda[btn.name];

                return (
                  <div
                    key={btn.name}
                    className="rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer group"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      minHeight: "160px",
                      overflow: "hidden",
                    }}
                    onClick={() => onNavigate("explorer")}
                  >
                    <div
                      className="relative flex items-center justify-center w-full"
                      style={{
                        minHeight: "82px",
                        overflow: "hidden",
                      }}
                    >
                      {PreviewComponent ? (
                        <div
                          className="flex items-center justify-center"
                          style={{
                            transform: "scale(0.72)",
                            transformOrigin: "center",
                          }}
                        >
                          <PreviewComponent>
                            Click Me
                          </PreviewComponent>
                        </div>
                      ) : (
                        <div
                          className="font-mono text-xs"
                          style={{
                            color: btn.color,
                          }}
                        >
                          Preview unavailable
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <div
                        className="font-mono text-xs font-500"
                        style={{
                          color: "var(--text-primary)",
                        }}
                      >
                        {btn.name}
                      </div>

                      <div
                        className="font-mono text-xs mt-0.5"
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        {btn.tag}
                      </div>
                    </div>

                    <div
                      className="font-mono text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: "rgba(255,122,61,0.1)",
                        color: "var(--brand)",
                      }}
                    >
                      LIVE COMPONENT
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="absolute bottom-4 right-6 font-mono text-xs"
              style={{
                color: "var(--text-muted)",
              }}
            >
              + 43 more →
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "49+", label: "Components" },
            { val: "0", label: "Dependencies" },
            { val: "MIT", label: "License" },
            { val: "React", label: "Built for" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div
                className="font-display font-700 text-3xl"
                style={{ color: "var(--brand)" }}
              >
                {val}
              </div>

              <div
                className="font-mono text-xs mt-1 uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ),
              title: "Drop-in Ready",
              desc: "Import, place, done. Each component handles its own animation and state internally.",
            },

            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />

                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                </svg>
              ),
              title: "Fully Customizable",
              desc: "Every component accepts props for color, size, radius, intensity, and more.",
            },

            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              ),
              title: "React Ready",
              desc: "Built for React with reusable, animated and customizable components.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl p-6 transition-all duration-300"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "rgba(255,122,61,0.1)",
                  color: "var(--brand)",
                }}
              >
                {icon}
              </div>

              <h3
                className="font-display font-600 text-base mb-2"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-20 px-6 text-center"
        style={{
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <div className="max-w-xl mx-auto">

          <div
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Start Building
          </div>

          <h2
            className="font-display font-700 text-3xl md:text-4xl mb-4 leading-tight"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Animated buttons for interfaces that want attention.
          </h2>

          <p
            className="mb-8 text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Find the right button. Customize it. Copy the code. Use it in your
            project.
          </p>

            <button
              onClick={() => onNavigate("explorer")}
              className="hero-action hero-action-primary px-8 py-3.5 rounded-xl font-display font-600 text-sm"
            >
              EXPLORE ALL 49 BUTTONS →
            </button>
        </div>
      </section>
    </div>
  );
}