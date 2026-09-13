import { useState } from "react";
import CodeBlock from "./CodeBlock";

const sidebarSections = [
  {
    label: "Getting Started",
    items: [
      { id: "installation", label: "Installation" },
      { id: "quickstart", label: "Quick Start" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "explorer", label: "Button Explorer" },
      { id: "details", label: "Button Details" },
    ],
  },
  {
    label: "Customization",
    items: [
      { id: "props", label: "Props" },
      { id: "styling", label: "Styling" },
      { id: "events", label: "Events" },
    ],
  },
];

const content = {
  installation: {
    title: "Installation",
    body: (
      <div className="space-y-6">
        <p style={{ color: "var(--text-secondary)" }}>
          ButtonAdda is a zero-dependency React library of 49+ animated
          button components. Install it via your preferred package manager.
        </p>

        <CodeBlock
          code="npm install button-adda"
          language="sh"
        />

          <CodeBlock
            code={`import { AuroraButton } from "button-adda";

// Import all buttons
import * as ButtonAdda from "button-adda";`}
            language="jsx"
          />
      </div>
    ),
  },

  quickstart: {
    title: "Quick Start",
    body: (
      <div className="space-y-6">
        <p style={{ color: "var(--text-secondary)" }}>
          Import any component by name, then customize it with props.
        </p>

        <CodeBlock
          code={`import { AuroraButton } from "butto-nadda";

function App() {
  return (
    <AuroraButton color="#FF7A3D" width={280} height={64}
                  textColor="#FFFFFF" radius={14} intensity={1}>          
      Click Me
    </AuroraButton>
  );
}`}
          language="JSX"
        />

        <p style={{ color: "var(--text-secondary)" }}>
          All components are individually tree-shakeable — only the code you
          use is bundled.
        </p>
      </div>
    ),
  },

  explorer: {
    title: "Button Explorer",
    body: (
      <div className="space-y-4">
        <p style={{ color: "var(--text-secondary)" }}>
          The Button Explorer lets you browse all 49+ components by category
          or search by name.
        </p>

        <ul
          className="space-y-3 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          {[
            "Use the search bar to filter by button name or description.",
            "Filter by category: GLOW, INTERACTIVE, 3D, MAGNETIC, PLAYFUL, SPECIAL.",
            "Click any card to open the component detail page.",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2"
            >
              <span style={{ color: "var(--brand)" }}>
                →
              </span>

              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },

  details: {
    title: "Button Details",
    body: (
      <div className="space-y-4">
        <p style={{ color: "var(--text-secondary)" }}>
          Each component detail page contains a live preview, customization
          controls, generated code, and a full props reference.
        </p>

        <div
          className="space-y-2 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          {[
            {
              label: "Live Preview",
              desc: "See the component rendered with your chosen props.",
            },
            {
              label: "Customization Panel",
              desc: "Adjust color, size, radius, intensity, and more with sliders.",
            },
            {
              label: "Generated Code",
              desc: "Code updates in real time as you change props.",
            },
            {
              label: "Props Table",
              desc: "Full reference for every available prop.",
            },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="p-3 rounded-lg"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span
                className="font-mono text-xs"
                style={{ color: "var(--brand)" }}
              >
                {label}
              </span>

              <p className="mt-1">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  props: {
    title: "Props",
    body: (
      <div className="space-y-6">
        <p style={{ color: "var(--text-secondary)" }}>
          All ButtonAdda components share a common set of base props.
          Individual components may expose additional props.
        </p>

        <div
          className="rounded-xl overflow-hidden"
          style={{
            border: "1px solid var(--border-color)",
          }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr
                style={{
                  background: "var(--bg-surface)",
                  borderBottom:
                    "1px solid var(--border-color)",
                }}
              >
                {[
                  "PROP",
                  "TYPE",
                  "DEFAULT",
                  "DESCRIPTION",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="text-left px-4 py-3 font-mono text-xs"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                [
                  "color",
                  "string",
                  '"#FF7A3D"',
                  "Primary accent color",
                ],
                [
                  "width",
                  "number",
                  "320",
                  "Width in pixels",
                ],
                [
                  "height",
                  "number",
                  "78",
                  "Height in pixels",
                ],
                [
                  "radius",
                  "number",
                  "12",
                  "Border radius in pixels",
                ],
                [
                  "disabled",
                  "boolean",
                  "false",
                  "Disables interaction",
                ],
                [
                  "onClick",
                  "() => void",
                  "—",
                  "Click callback",
                ],
                [
                  "children",
                  "ReactNode",
                  "—",
                  "Button label or content",
                ],
              ].map(
                ([name, type, defaultValue, description], index, array) => (
                  <tr
                    key={name}
                    style={{
                      borderBottom:
                        index < array.length - 1
                          ? "1px solid var(--border-color)"
                          : "none",

                      background:
                        "var(--bg-card)",
                    }}
                  >
                    <td
                      className="px-4 py-3 font-mono text-xs"
                      style={{
                        color: "var(--brand)",
                      }}
                    >
                      {name}
                    </td>

                    <td
                      className="px-4 py-3 font-mono text-xs"
                      style={{
                        color: "#C084FC",
                      }}
                    >
                      {type}
                    </td>

                    <td
                      className="px-4 py-3 font-mono text-xs"
                      style={{
                        color: "#38BDF8",
                      }}
                    >
                      {defaultValue}
                    </td>

                    <td
                      className="px-4 py-3 text-xs"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {description}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  styling: {
    title: "Styling",
    body: (
      <div className="space-y-6">
        <p style={{ color: "var(--text-secondary)" }}>
          ButtonAdda components come with built-in styling and animations.
          Customize their appearance directly using component props.
        </p>

<CodeBlock
  code={`// Customize ButtonAdda components with props

color="#FF7A3D"
textColor="#FFFFFF"
width={280}
height={64}
radius={12}
intensity={1.2}

// No additional CSS required`}
  language="JSX"
  label="Styling"
/>

        <p style={{ color: "var(--text-secondary)" }}>
          Customize colors, sizes, radius, effects, and other visual properties
          directly through the component's props.
        </p>

        <div
          className="p-4 rounded-xl text-sm"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid rgba(255,122,61,0.2)",
            color: "var(--text-secondary)",
          }}
        >
          <span
            style={{ color: "var(--brand)" }}
            className="font-mono text-xs block mb-1"
          >
            NOTE
          </span>

          Do not override internal class names — they are considered private
          API and may change between minor versions.
        </div>
      </div>
    ),
  },

  events: {
    title: "Events",
    body: (
      <div className="space-y-6">
        <p style={{ color: "var(--text-secondary)" }}>
          Every ButtonAdda component forwards standard React event handlers.
          The most common are listed below.
        </p>

        <CodeBlock
          code={`<FireButton
  onClick={() => console.log("clicked")}
  onMouseEnter={() => console.log("hovered")}
  onFocus={() => console.log("focused")}
>
  Click Me
</FireButton>`}
          language="JSX"
        />

        <div className="space-y-2 text-sm">
          {[
            {
              name: "onClick",
              desc: "Fires when the user clicks or taps the button.",
            },
            {
              name: "onMouseEnter",
              desc: "Fires when the cursor enters the button region.",
            },
            {
              name: "onMouseLeave",
              desc: "Fires when the cursor leaves the button region.",
            },
            {
              name: "onFocus",
              desc: "Fires when the button receives keyboard focus.",
            },
            {
              name: "onBlur",
              desc: "Fires when the button loses focus.",
            },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className="flex items-start gap-3 p-3 rounded-lg"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span
                className="font-mono text-xs flex-shrink-0 mt-0.5"
                style={{
                  color: "var(--brand)",
                }}
              >
                {name}
              </span>

              <span
                className="text-xs"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export default function DocsPage({ onNavigate }) {
  const [activeSection, setActiveSection] =
    useState("installation");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const current = content[activeSection];

  return (
    <div
      className="min-h-screen flex"
      style={{
        background: "var(--bg-base)",
      }}
    >

      <button
        className="fixed bottom-6 right-6 z-50 md:hidden w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        style={{
          background: "var(--brand)",
          color: "#fff",
        }}
        onClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
          />
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
          />
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
          />
        </svg>
      </button>

      <aside
        className={`fixed md:sticky top-0 md:top-16 h-screen md:h-[calc(100vh-4rem)] z-40 md:z-auto transition-transform duration-300 flex-shrink-0 w-64 overflow-y-auto py-8 px-4 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
        style={{
          background: "var(--bg-surface)",
          borderRight:
            "1px solid var(--border-color)",
        }}
      >
        <div
          className="font-mono text-xs uppercase tracking-widest mb-6 px-2"
          style={{
            color: "var(--text-muted)",
          }}
        >
          Documentation
        </div>

        {sidebarSections.map((section) => (
          <div
            key={section.label}
            className="mb-6"
          >
            <div
              className="font-mono text-xs uppercase tracking-widest mb-2 px-2"
              style={{
                color: "var(--text-muted)",
                opacity: 0.5,
              }}
            >
              {section.label}
            </div>

            {section.items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer font-display"
                style={{
                  background:
                    activeSection === item.id
                      ? "var(--bg-card)"
                      : "transparent",

                  color:
                    activeSection === item.id
                      ? "var(--brand)"
                      : "var(--text-secondary)",

                  borderLeft:
                    activeSection === item.id
                      ? "2px solid var(--brand)"
                      : "2px solid transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <main className="flex-1 py-16 px-8 max-w-3xl">
        <div
          className="font-mono text-xs uppercase tracking-widest mb-3"
          style={{
            color: "var(--text-muted)",
          }}
        >
          {
            sidebarSections.find((section) =>
              section.items.some(
                (item) =>
                  item.id === activeSection
              )
            )?.label
          }
        </div>

        <h1
          className="font-display font-700 text-3xl md:text-4xl mb-8"
          style={{
            color: "var(--text-primary)",
          }}
        >
          {current.title}
        </h1>

        {current.body}
      </main>
    </div>
  );
}