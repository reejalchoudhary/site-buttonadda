import { useState } from "react";

export default function Navbar({
  currentPage,
  onNavigate,
  theme,
  onToggleTheme,
  onSearch,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Buttons", page: "explorer" },
    { label: "Installation", page: "installation" },
    { label: "Docs", page: "docs" },
  ];

  const handleSearch = (v) => {
    setSearchVal(v);
    onSearch(v);

    if (v.trim()) {
      onNavigate("explorer");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        borderBottom: "1px solid var(--border-color)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="w-full flex items-center h-16 gap-2 sm:gap-6 relative">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-1 flex-shrink-0 min-w-0 cursor-pointer"
          >
            <img
              src="/logoo.png"
              alt="ButtonAdda"
              className="w-10 h-8 object-contain flex-shrink-0"
            />

            <div className="flex items-baseline gap-1.5 sm:gap-2 min-w-0">
              <span
                className="font-display font-700 text-sm sm:text-base tracking-tight whitespace-nowrap"
                style={{ color: "var(--text-primary)" }}
              >
                BUTTON ADDA
              </span>

              <span
                className="font-mono text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded whitespace-nowrap max-[400px]:hidden"
                style={{
                  background: "rgba(255,122,61,0.12)",
                  color: "var(--brand)",
                  border: "1px solid rgba(255,122,61,0.2)",
                }}
              >
                v1.0.2
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1 mx-auto">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="nav-link px-4 py-2 rounded-lg text-sm font-display font-500 transition-all duration-200 cursor-pointer"
                style={{
                  color:
                    currentPage === page
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",

                  background:
                    currentPage === page
                      ? "var(--bg-card)"
                      : "transparent",

                  border:
                    currentPage === page
                      ? "1px solid var(--border-color)"
                      : "1px solid transparent",
                }}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1 max-[400px]:gap-0.5 sm:gap-2 ml-auto flex-shrink-0">
            {searchOpen ? (
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg absolute left-3 right-3 top-[calc(100%+8px)] md:static md:left-auto md:right-auto md:top-auto"
                style={{
                  border: "1px solid var(--brand)",
                  background: "var(--bg-surface)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--text-muted)"
                  strokeWidth="2"
                  className="flex-shrink-0"
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
                  autoFocus
                  type="text"
                  value={searchVal}
                  onChange={(e) => handleSearch(e.target.value)}
                  onBlur={() => {
                    if (!searchVal) {
                      setSearchOpen(false);
                    }
                  }}
                  placeholder="Search buttons..."
                  className="bg-transparent text-sm outline-none w-full md:w-44"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                />

                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchVal("");
                    onSearch("");
                  }}
                  className="cursor-pointer flex-shrink-0"
                  style={{ color: "var(--text-muted)" }}
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
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer flex-shrink-0"
                style={{
                  color: "var(--text-secondary)",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-color)",
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
                  <circle cx="11" cy="11" r="8" />
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                  />
                </svg>
              </button>
            )}

            <a
              href="https://github.com/reejalchoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg transition-colors flex-shrink-0"
              style={{
                color: "var(--text-secondary)",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <button
              onClick={onToggleTheme}
              className="p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer flex-shrink-0"
              style={{
                color: "var(--text-secondary)",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
              }}
            >
              {theme === "dark" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg cursor-pointer flex-shrink-0"
              style={{
                color: "var(--text-secondary)",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
              }}
            >
              {menuOpen ? (
                <svg
                  width="16"
                  height="16"
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
              ) : (
                <svg
                  width="16"
                  height="16"
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
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 z-50 px-0 pb-4 flex flex-col gap-1"
            style={{
              borderTop: "1px solid var(--border-color)",
              background: "color-mix(in srgb, var(--bg-base) 82%, transparent)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => {
                  onNavigate(page);
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-display font-500 transition-colors cursor-pointer"
                style={{
                  color:
                    currentPage === page
                      ? "var(--brand)"
                      : "var(--text-secondary)",

                  background:
                    currentPage === page
                      ? "var(--bg-card)"
                      : "transparent",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="11"
        height="11"
        rx="3"
        fill="#FF7A3D"
      />

      <rect
        x="15"
        y="2"
        width="11"
        height="11"
        rx="3"
        fill="rgba(255,122,61,0.35)"
      />

      <rect
        x="2"
        y="15"
        width="11"
        height="11"
        rx="3"
        fill="rgba(255,122,61,0.35)"
      />

      <rect
        x="15"
        y="15"
        width="11"
        height="11"
        rx="3"
        fill="#FF7A3D"
      />

      <rect
        x="10"
        y="10"
        width="8"
        height="8"
        rx="2"
        fill="var(--bg-base)"
      />
    </svg>
  );
}