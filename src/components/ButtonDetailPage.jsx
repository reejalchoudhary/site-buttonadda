import { useEffect, useMemo, useState } from "react";
import { buttons, categoryColors } from "../data/buttons";
import CodeBlock from "./CodeBlock";
import ComponentCard from "./ComponentCard";

import * as ButtonAdda from "button-adda";
export default function ButtonDetailPage({
  button,
  onBack,
  onSelect,
}) {

  const [color, setColor] = useState(
    button?.color || "#8b5cf6"
  );

  const [width, setWidth] = useState(180);
  const [height, setHeight] = useState(52);
  const [radius, setRadius] = useState(14);
  const [intensity, setIntensity] = useState(1);

  const [disabled, setDisabled] = useState(false);
  const [activeTab, setActiveTab] = useState("default");

  useEffect(() => {
    setColor(button?.color || "#8b5cf6");
    setWidth(180);
    setHeight(52);
    setRadius(14);
    setIntensity(1);
    setDisabled(false);
    setActiveTab("default");
  }, [button?.id]);

  const catColor =
    categoryColors[button?.category] || "#FF7A3D";

  const ButtonComponent = useMemo(() => {
    if (!button?.name) {
      return null;
    }

    return ButtonAdda[button.name] || null;
  }, [button?.name]);

  const hasProp = (propName) => {
    return (
      Array.isArray(button?.props) &&
      button.props.some((prop) => prop.name === propName)
    );
  };

  const hasColor = hasProp("color");
  const hasWidth = hasProp("width");
  const hasHeight = hasProp("height");
  const hasSize = hasProp("size");
  const hasRadius = hasProp("radius");
  const hasIntensity = hasProp("intensity");
  const hasDisabled = hasProp("disabled");
  const hasSpeed = hasProp("speed");
  const hasColors = hasProp("colors");

  const previewProps = useMemo(() => {
    const props = {};

    if (hasColor) {
      props.color = color;
    }

    if (hasSize) {
      props.size = width;
    }

    if (hasWidth) {
      props.width = width;
    }

    if (hasHeight) {
      props.height = height;
    }

    if (hasRadius) {
      props.radius = radius;
    }

    if (hasIntensity) {
      props.intensity = intensity;
    }

    if (hasDisabled) {
      props.disabled =
        activeTab === "disabled" || disabled;
    }

    if (hasSpeed) {
      props.speed = 1;
    }

    if (hasColors) {
      props.colors = [color];
    }

    return props;
  }, [
    color,
    width,
    height,
    radius,
    intensity,
    disabled,
    activeTab,
    hasColor,
    hasWidth,
    hasHeight,
    hasSize,
    hasRadius,
    hasIntensity,
    hasDisabled,
    hasSpeed,
    hasColors,
  ]);

  const generateCode = () => {
    const props = [];

    if (
      hasColor &&
      color !== (button?.color || "#8b5cf6")
    ) {
      props.push(`  color="${color}"`);
    }

    if (hasSize && width !== 180) {
      props.push(`  size={${width}}`);
    }

    if (hasWidth && width !== 180) {
      props.push(`  width={${width}}`);
    }

    if (hasHeight && height !== 52) {
      props.push(`  height={${height}}`);
    }

    if (hasRadius && radius !== 14) {
      props.push(`  radius={${radius}}`);
    }

    if (hasIntensity && intensity !== 1) {
      props.push(
        `  intensity={${intensity.toFixed(1)}}`
      );
    }

    if (disabled && hasDisabled) {
      props.push(`  disabled`);
    }

    const innerProps =
      props.length > 0
        ? `\n${props.join("\n")}\n`
        : "";

    return `import { ${button.name} } from "button-adda";

function App() {
  return (
    <${button.name}${innerProps}>
      Click Me
    </${button.name}>
  );
}`;
  };

  const related = buttons
    .filter(
      (item) =>
        item.category === button.category &&
        item.id !== button.id
    )
    .slice(0, 4);

  if (!button) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{
          background: "var(--bg-base)",
          color: "var(--text-primary)",
        }}
      >
        <div className="text-center">
          <h2 className="font-mono text-lg mb-3">
            Button not found
          </h2>

          <button
            onClick={onBack}
            className="font-mono text-sm"
            style={{
              color: "var(--brand)",
            }}
          >
            ← BACK TO BUTTONS
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-12 px-6"
      style={{
        background: "var(--bg-base)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 mb-8 font-mono text-sm transition-colors cursor-pointer"
          style={{
            color: "var(--text-muted)",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.color =
              "var(--text-primary)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.color =
              "var(--text-muted)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>

          BACK TO BUTTONS
        </button>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">

              <h1
                className="font-display font-700 text-3xl md:text-4xl"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {button.name}
              </h1>

              <span
                className="font-mono text-xs px-2 py-1 rounded"
                style={{
                  background: `${catColor}15`,
                  color: catColor,
                  border: `1px solid ${catColor}25`,
                }}
              >
                {button.category}
              </span>

            </div>

            <p
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {button.description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          <div className="lg:col-span-3 flex flex-col gap-6">

            <div
              className="rounded-xl overflow-hidden"
              style={{
                border:
                  "1px solid var(--border-color)",
              }}
            >

              <div
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
                style={{
                  borderBottom:
                    "1px solid var(--border-color)",
                  background:
                    "var(--bg-surface)",
                }}
              >

                <div className="flex items-center gap-2">

                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#10B981",
                    }}
                  />

                  <span
                    className="font-mono text-xs uppercase tracking-wider"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    Live Preview
                  </span>

                </div>

                <div className="flex gap-1 flex-wrap">

                  {[
                    "default",
                    "customized",
                    "hover",
                    "disabled",
                  ].map((tab) => (
                    <button
                      type="button"
                      key={tab}
                      onClick={() =>
                        setActiveTab(tab)
                      }
                      className="font-mono text-xs px-2.5 py-1 rounded transition-all cursor-pointer capitalize"
                      style={{
                        background:
                          activeTab === tab
                            ? "var(--bg-card)"
                            : "transparent",

                        color:
                          activeTab === tab
                            ? "var(--text-primary)"
                            : "var(--text-muted)",

                        border:
                          activeTab === tab
                            ? "1px solid var(--border-color)"
                            : "1px solid transparent",
                      }}
                    >
                      {tab}
                    </button>
                  ))}

                </div>

              </div>

              <div
                className="flex items-center justify-center relative"
                style={{
                  minHeight: "250px",
                  background: "var(--bg-base)",
                  backgroundImage:
                    "radial-gradient(circle, var(--border-color) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  padding: "40px 20px",
                  overflow: "hidden",
                }}
              >

                <div
                  className="relative flex items-center justify-center w-full"
                  style={{
                    minWidth: 0,
                    overflow: "visible",
                  }}
                >

                  {ButtonComponent ? (
                    <ButtonComponent
                      {...previewProps}
                    >
                      Click Me
                    </ButtonComponent>
                  ) : (
                    <div
                      className="font-mono text-sm px-4 py-3 rounded-lg text-center"
                      style={{
                        color: "var(--text-muted)",
                        border:
                          "1px solid var(--border-color)",
                        background:
                          "var(--bg-card)",
                      }}
                    >
                      Component "{button.name}" was
                      not found in button-adda.
                    </div>
                  )}

                </div>

              </div>
            </div>

            <div>

              <div
                className="font-mono text-xs uppercase tracking-widest mb-3"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Use This Component
              </div>

              <CodeBlock
                code={generateCode()}
                label={`${button.name}.jsx`}
              />

            </div>

            <div>

              <div
                className="font-mono text-xs uppercase tracking-widest mb-3"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Props
              </div>

              <div
                className="rounded-xl overflow-hidden"
                style={{
                  border:
                    "1px solid var(--border-color)",
                }}
              >

                <div className="overflow-x-auto">

                  <table className="w-full text-sm">

                    <thead>

                      <tr
                        style={{
                          background:
                            "var(--bg-surface)",
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
                              color:
                                "var(--text-muted)",
                            }}
                          >
                            {heading}
                          </th>
                        ))}

                      </tr>

                    </thead>

                    <tbody>

                      {Array.isArray(button.props) &&
                        button.props.map(
                          (prop, index) => (
                            <tr
                              key={`${prop.name}-${index}`}
                              style={{
                                borderBottom:
                                  index <
                                  button.props.length - 1
                                    ? "1px solid var(--border-color)"
                                    : "none",

                                background:
                                  "var(--bg-card)",
                              }}
                            >

                              <td
                                className="px-4 py-3 font-mono text-xs"
                                style={{
                                  color:
                                    "var(--brand)",
                                }}
                              >
                                {prop.name}
                              </td>

                              <td
                                className="px-4 py-3 font-mono text-xs"
                                style={{
                                  color: "#C084FC",
                                }}
                              >
                                {prop.type}
                              </td>

                              <td
                                className="px-4 py-3 font-mono text-xs"
                                style={{
                                  color: "#38BDF8",
                                }}
                              >
                                {prop.default}
                              </td>

                              <td
                                className="px-4 py-3 text-xs"
                                style={{
                                  color:
                                    "var(--text-secondary)",
                                }}
                              >
                                {prop.description}
                              </td>

                            </tr>
                          )
                        )}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

            <div
              className="rounded-xl p-5"
              style={{
                background: "var(--bg-surface)",
                border:
                  "1px solid var(--border-color)",
              }}
            >

              <div
                className="font-mono text-xs uppercase tracking-widest mb-3"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Usage Notes
              </div>

              <ul
                className="text-sm space-y-2"
                style={{
                  color: "var(--text-secondary)",
                }}
              >

                <li className="flex items-start gap-2">
                  <span
                    style={{
                      color: "var(--brand)",
                    }}
                  >
                    →
                  </span>
                   Choose a button based on the interaction you want.
                </li>

                <li className="flex items-start gap-2">
                  <span
                    style={{
                      color: "var(--brand)",
                    }}
                  >
                    →
                  </span>

                  Use props to customize colors, dimensions, radius, and effects.
                </li>

                <li className="flex items-start gap-2">
                  <span
                    style={{
                      color: "var(--brand)",
                    }}
                  >
                    →
                  </span>

                  Add onClick and other React handlers for custom actions.
                </li>
                <li className="flex items-start gap-2">

                  <span
                    style={{
                      color: "var(--brand)",
                    }}
                  >
                    →
                  </span>

                  Combine multiple buttons to create richer interfaces.
                </li>

              </ul>

            </div>

          </div>

          <div className="lg:col-span-2">

            <div
              className="sticky top-24 rounded-xl overflow-hidden"
              style={{
                border:
                  "1px solid var(--border-color)",
              }}
            >

              <div
                className="px-5 py-4"
                style={{
                  borderBottom:
                    "1px solid var(--border-color)",
                  background:
                    "var(--bg-surface)",
                }}
              >

                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Customization
                </span>

              </div>

              <div
                className="p-5 space-y-6"
                style={{
                  background: "var(--bg-card)",
                }}
              >

                {hasColor && (
                  <div>

                    <div className="flex items-center justify-between mb-2">

                      <label
                        className="font-mono text-xs uppercase tracking-wide"
                        style={{
                          color:
                            "var(--text-muted)",
                        }}
                      >
                        Color
                      </label>

                      <span
                        className="font-mono text-xs"
                        style={{
                          color:
                            "var(--text-secondary)",
                        }}
                      >
                        {color}
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <input
                        type="color"
                        value={color}
                        onChange={(event) =>
                          setColor(
                            event.target.value
                          )
                        }
                        className="w-10 h-10 rounded-lg cursor-pointer border-0"
                        style={{
                          background: "none",
                        }}
                      />

                      <input
                        type="text"
                        value={color}
                        onChange={(event) =>
                          setColor(
                            event.target.value
                          )
                        }
                        className="flex-1 px-3 py-2 rounded-lg font-mono text-xs outline-none"
                        style={{
                          background:
                            "var(--bg-surface)",
                          border:
                            "1px solid var(--border-color)",
                          color:
                            "var(--text-primary)",
                        }}
                      />

                    </div>

                  </div>
                )}

                {(hasWidth || hasSize) && (
                  <Slider
                    label={
                      hasSize && !hasWidth
                        ? "Size"
                        : "Width"
                    }
                    value={width}
                    min={80}
                    max={480}
                    unit="px"
                    onChange={setWidth}
                  />
                )}

                {hasHeight && (
                  <Slider
                    label="Height"
                    value={height}
                    min={36}
                    max={120}
                    unit="px"
                    onChange={setHeight}
                  />
                )}

                {hasRadius && (
                  <Slider
                    label="Radius"
                    value={radius}
                    min={0}
                    max={40}
                    unit="px"
                    onChange={setRadius}
                  />
                )}

                {hasIntensity && (
                  <Slider
                    label="Intensity"
                    value={Math.round(
                      intensity * 100
                    )}
                    min={0}
                    max={100}
                    unit="%"
                    onChange={(value) =>
                      setIntensity(value / 100)
                    }
                  />
                )}

                {hasDisabled && (
                  <div className="flex items-center justify-between">

                    <label
                      className="font-mono text-xs uppercase tracking-wide"
                      style={{
                        color:
                          "var(--text-muted)",
                      }}
                    >
                      Disabled
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        setDisabled(
                          (previous) => !previous
                        )
                      }
                      className="relative w-10 h-5 rounded-full transition-all duration-200 cursor-pointer"
                      style={{
                        background: disabled
                          ? "var(--brand)"
                          : "var(--bg-surface)",

                        border:
                          "1px solid var(--border-color)",
                      }}
                    >

                      <span
                        className="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-200"
                        style={{
                          background: "#fff",
                          left: disabled
                            ? "calc(100% - 18px)"
                            : "2px",
                        }}
                      />

                    </button>

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

        {related.length > 0 && (
          <div className="mt-16">

            <div
              className="font-mono text-xs uppercase tracking-widest mb-6"
              style={{
                color: "var(--text-muted)",
              }}
            >
              More in{" "}

              <span
                style={{
                  color: catColor,
                }}
              >
                {button.category}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {related.map((relatedButton) => (
                <ComponentCard
                  key={relatedButton.id}
                  button={relatedButton}
                  onClick={onSelect}
                />
              ))}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}) {
  const percentage =
    ((value - min) / (max - min)) * 100;

  return (
    <div>

      <div className="flex items-center justify-between mb-2">

        <label
          className="font-mono text-xs uppercase tracking-wide"
          style={{
            color: "var(--text-muted)",
          }}
        >
          {label}
        </label>

        <span
          className="font-mono text-xs"
          style={{
            color:
              "var(--text-secondary)",
          }}
        >
          {value}
          {unit}
        </span>

      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) =>
          onChange(
            Number(event.target.value)
          )
        }
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          accentColor: "var(--brand)",

          background: `linear-gradient(
            to right,
            var(--brand) 0%,
            var(--brand) ${percentage}%,
            var(--border-color) ${percentage}%,
            var(--border-color) 100%
          )`,
        }}
      />

    </div>
  );
}