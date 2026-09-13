import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function InstallationPage() {
  const [pkgManager, setPkgManager] = useState("npm");

  const installCmds = {
    npm: "npm install button-adda",
    pnpm: "pnpm add button-adda",
    yarn: "yarn add button-adda",
  };

const quickStart = `import { FireButton } from "button-adda";

function App() {
  return (
    <FireButton
      width={240}
      height={60}
      color="#ff6b00"
      textColor="#ffffff"
      backgroundColor="#180806"
      glowColor="#ffea00"
      secondaryColor="#ffb000"
      radius={12}
      borderWidth={1}
      intensity={1.2}
      glowOpacity={0.7}
    >
      Click Me
    </FireButton>
  );
}`;

const componentImport = `import { FireButton } from "button-adda";`;

  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{
        background: "var(--bg-base)",
      }}
    >
      <div className="max-w-3xl mx-auto">

        <div className="mb-12">
          <div
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Documentation
          </div>

          <h1
            className="font-display font-700 text-4xl md:text-5xl mb-4 leading-tight"
            style={{
              color: "var(--text-primary)",
            }}
          >
            GET STARTED
          </h1>

          <p
            className="text-lg"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Install ButtonAdda and start building expressive React interfaces.
          </p>
        </div>

        <div className="space-y-12">

          <section>
            <SectionLabel>
              01 — Install
            </SectionLabel>

            <div
              className="flex gap-1 mb-4 p-1 rounded-xl w-fit"
              style={{
                background: "var(--bg-surface)",
                border:
                  "1px solid var(--border-color)",
              }}
            >
              {["npm", "pnpm", "yarn"].map(
                (pm) => (
                  <button
                    key={pm}
                    onClick={() =>
                      setPkgManager(pm)
                    }
                    className="px-5 py-2 rounded-lg font-mono text-xs uppercase transition-all duration-200 cursor-pointer"
                    style={{
                      background:
                        pkgManager === pm
                          ? "var(--brand)"
                          : "transparent",

                      color:
                        pkgManager === pm
                          ? "#fff"
                          : "var(--text-secondary)",
                    }}
                  >
                    {pm}
                  </button>
                )
              )}
            </div>

            <CodeBlock
              code={installCmds[pkgManager]}
              language="sh"
            />
          </section>

          <section>
            <SectionLabel>
              02 — Choose Your Component
            </SectionLabel>

            <p
              className="text-sm mb-4"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Import any ButtonAdda component by name and use it directly in your React application.
            </p>

            <CodeBlock
              code={componentImport}
              language="jsx"
              label="App.jsx"
            />
          </section>

          <section>
            <SectionLabel>
              03 — Quick Start
            </SectionLabel>

            <p
              className="text-sm mb-4"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Customize your button with props like color, 
              size, radius, intensity, and more.
            </p>

            <CodeBlock
              code={quickStart}
              language="JSX"
              label="App.jsx"
            />
          </section>

          <section>
            <SectionLabel>
              Setup Checklist
            </SectionLabel>

            <div className="space-y-3">
              {[
                {
                  step: "1",
                  text: "Install ButtonAdda via npm, pnpm, or yarn",
                },
                {
                  step: "2",
                  text: "Import the ButtonAdda component you want to use",
                },
                {
                  step: "3",
                  text: "Add the component to your JSX",
                },
                {
                  step: "4",
                  text: "Customize the component using its props",
                },
                {
                  step: "5",
                  text: "Use it in your interface and build with animated interactions",
                },
                {
                  step: "6",
                  text: "Using multiple buttons? Import all components at once with import * as ButtonAdda from button-adda",
                },
              ].map(({ step, text }) => (
                <div
                  key={step}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "var(--bg-card)",
                    border:
                      "1px solid var(--border-color)",
                  }}
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-600"
                    style={{
                      background:
                        "rgba(255,122,61,0.12)",
                      color: "var(--brand)",
                      border:
                        "1px solid rgba(255,122,61,0.2)",
                    }}
                  >
                    {step}
                  </span>

                  <span
                    className="text-sm"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section
            className="rounded-xl p-6"
            style={{
              background: "var(--bg-surface)",
              border:
                "1px solid var(--border-color)",
            }}
          >
            <SectionLabel>
              Requirements
            </SectionLabel>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                {
                  label: "React",
                  value: "≥ 18.0",
                },
                {
                  label: "Node.js",
                  value: "≥ 18",
                },
                {
                  label: "Language",
                  value: "JavaScript / JSX",
                },
                {
                  label: "Package Manager",
                  value: "npm, pnpm, yarn",
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-2"
                  style={{
                    borderBottom:
                      "1px solid var(--border-color)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {label}
                  </span>

                  <span
                    className="font-mono text-xs"
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <h2
      className="font-display font-600 text-lg mb-4 flex items-center gap-3"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <span
        className="w-0.5 h-5 rounded-full"
        style={{
          background: "var(--brand)",
        }}
      />

      {children}
    </h2>
  );
}