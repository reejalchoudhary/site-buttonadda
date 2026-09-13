import { useState, useMemo, useEffect } from "react";
import { buttons, categories } from "../data/buttons";
import ComponentCard from "./ComponentCard";

export default function ExplorerPage({
  initialSearch = "",
  onSelectButton,
}) {
  const [search, setSearch] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState("ALL");
  useEffect(() => {
  setSearch(initialSearch);
  }, [initialSearch]);

  const filtered = useMemo(() => {
    return buttons.filter((button) => {
      const matchCat =
        activeCategory === "ALL" ||
        button.category === activeCategory;

      const searchValue = search.toLowerCase();

      const matchSearch =
        !search.trim() ||
        button.name
          .toLowerCase()
          .includes(searchValue) ||
        button.description
          .toLowerCase()
          .includes(searchValue);

      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{
        background: "var(--bg-base)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <div
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Component Library
          </div>

          <h1
            className="font-display font-700 text-3xl md:text-4xl mb-3 leading-tight"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Explore the collection
          </h1>

          <p
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Find the right interaction for your interface.
          </p>
        </div>

        <div className="relative mb-6">

          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-muted)"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />

            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search 49+ buttons..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all"
            style={{
              background: "var(--bg-surface)",
              border:
                "1px solid var(--border-color)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
            }}
            onFocus={(e) => {
              e.target.style.borderColor =
                "rgba(255,122,61,0.5)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor =
                "var(--border-color)";
            }}
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                color: "var(--text-muted)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                />

                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className="px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wide transition-all duration-200 cursor-pointer"
              style={{
                background:
                  activeCategory === category
                    ? "var(--brand)"
                    : "var(--bg-surface)",

                color:
                  activeCategory === category
                    ? "#fff"
                    : "var(--text-secondary)",

                border:
                  activeCategory === category
                    ? "1px solid var(--brand)"
                    : "1px solid var(--border-color)",
              }}
            >
              {category}

              {category === "ALL" && (
                <span className="ml-1.5 opacity-60">
                  {buttons.length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">

          <span
            className="font-mono text-xs"
            style={{
              color: "var(--text-muted)",
            }}
          >
            {filtered.length} component
            {filtered.length !== 1 ? "s" : ""}

            {search && (
              <span>
                {" "}
                matching "
                <span
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  {search}
                </span>
                "
              </span>
            )}
          </span>

          <div className="flex items-center gap-2">

            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#10B981",
              }}
            />

            <span
              className="font-mono text-xs"
              style={{
                color: "var(--text-muted)",
              }}
            >
              All live
            </span>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((button) => (
              <ComponentCard
                key={button.id}
                button={button}
                onClick={onSelectButton}
              />
            ))}
          </div>
        ) : (

          <div
            className="flex flex-col items-center justify-center py-24"
            style={{
              color: "var(--text-muted)",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mb-4"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
              />

              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
              />
            </svg>

            <p className="font-mono text-sm">
              No buttons found for "

              <span
                style={{
                  color:
                    "var(--text-secondary)",
                }}
              >
                {search}
              </span>

              "
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-3 font-mono text-xs cursor-pointer"
              style={{
                color: "var(--brand)",
              }}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}