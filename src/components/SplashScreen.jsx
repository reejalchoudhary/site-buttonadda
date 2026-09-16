import { useEffect, useState } from "react";

const logoImg = "/logoo.png";

const LOGO_PX = 110;
const C = LOGO_PX / 2;

const STAGES = [
  { label: "LOADING COMPONENTS...", minPct: 0 },
  { label: "INITIALIZING ANIMATIONS...", minPct: 26 },
  { label: "PREPARING BUTTONS...", minPct: 52 },
  { label: "BUILDING INTERACTION SYSTEM...", minPct: 74 },
  { label: "LAUNCHING...", minPct: 92 },
  { label: "READY.", minPct: 100 },
];

const MINI_BTNS = [
  {
    label: "HOVER",
    color: "#818CF8",
    ox: -230,
    oy: -118,
    dur: "3.2s",
    delay: "0s",
  },
  {
    label: "CLICK",
    color: "#A78BFA",
    ox: 208,
    oy: -90,
    dur: "2.8s",
    delay: "0.5s",
  },
  {
    label: "AURA",
    color: "#F472B6",
    ox: 244,
    oy: 36,
    dur: "3.6s",
    delay: "0.3s",
  },
  {
    label: "GLITCH",
    color: "#60A5FA",
    ox: -208,
    oy: 126,
    dur: "3.0s",
    delay: "0.8s",
  },
  {
    label: "MAGNET",
    color: "#34D399",
    ox: 178,
    oy: 154,
    dur: "2.6s",
    delay: "1.1s",
  },
  {
    label: "RIPPLE",
    color: "#FB923C",
    ox: -220,
    oy: 14,
    dur: "3.4s",
    delay: "0.6s",
  },
];

const PARTICLES = [
  {
    ox: 70,
    oy: -44,
    sz: 2,
    color: "#818CF8",
    dur: "3.1s",
    delay: "0s",
  },
  {
    ox: -66,
    oy: -56,
    sz: 1.5,
    color: "#A78BFA",
    dur: "2.6s",
    delay: "0.4s",
  },
  {
    ox: 84,
    oy: 28,
    sz: 1.5,
    color: "#F472B6",
    dur: "3.6s",
    delay: "0.8s",
  },
  {
    ox: -78,
    oy: 36,
    sz: 2,
    color: "#FF7A3D",
    dur: "2.9s",
    delay: "0.2s",
  },
  {
    ox: 22,
    oy: 90,
    sz: 1,
    color: "#818CF8",
    dur: "3.3s",
    delay: "0.6s",
  },
  {
    ox: -22,
    oy: -90,
    sz: 1,
    color: "#A78BFA",
    dur: "4s",
    delay: "1s",
  },
  {
    ox: 92,
    oy: -16,
    sz: 1.5,
    color: "#34D399",
    dur: "2.7s",
    delay: "0.3s",
  },
  {
    ox: -88,
    oy: -6,
    sz: 1,
    color: "#F472B6",
    dur: "3.8s",
    delay: "0.7s",
  },
  {
    ox: 30,
    oy: -94,
    sz: 2,
    color: "#60A5FA",
    dur: "3.4s",
    delay: "0.5s",
  },
  {
    ox: -32,
    oy: 92,
    sz: 1.5,
    color: "#818CF8",
    dur: "2.9s",
    delay: "0.9s",
  },
];

const CODE_FRAGS = [
  { text: "<Button />", top: "16%", left: "7%" },
  { text: "onClick={...}", top: "20%", left: "73%" },
  { text: "animate()", top: "64%", left: "6%" },
  { text: "hover:scale", top: "70%", left: "79%" },
  { text: "transition", top: "37%", left: "70%" },
  { text: "useState()", top: "43%", left: "12%" },
  { text: "variants={}", top: "79%", left: "55%" },
  { text: "useMotion()", top: "11%", left: "39%" },
];

export default function SplashScreen({ onComplete }) {
  const [ph, setPh] = useState({
    bg: false,
    logo: false,
    brand: false,
    mini: false,
    hud: false,
    bar: false,
  });

  const [pct, setPct] = useState(0);
  const [flash, setFlash] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setPh((s) => ({ ...s, bg: true }));
      }, 30),

      setTimeout(() => {
        setPh((s) => ({ ...s, logo: true }));
      }, 120),

      setTimeout(() => {
        setPh((s) => ({ ...s, brand: true }));
      }, 410),

      setTimeout(() => {
        setPh((s) => ({ ...s, mini: true }));
      }, 620),

      setTimeout(() => {
        setPh((s) => ({
          ...s,
          hud: true,
          bar: true,
        }));
      }, 820),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (!ph.bar) return;

    let startTime = null;
    let animationFrame = null;
    let lastPct = -1;

    const duration = 2600;

    const animate = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const nextPct = Math.round(eased * 100);

      if (nextPct !== lastPct) {
        lastPct = nextPct;
        setPct(nextPct);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [ph.bar]);

  useEffect(() => {
    if (pct !== 100) return;

    const flashTimer = setTimeout(() => {
      setFlash(true);
    }, 120);

    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 1000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [pct, onComplete]);

  const completedStages = STAGES.filter(
    (stage) => pct >= stage.minPct
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#030712",
        overflow: "hidden",
        opacity: exit ? 0 : 1,
        transition:
          "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(37,45,58,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(37,45,58,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: ph.bg ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "4%",
          left: "-14%",
          width: "54vw",
          height: "54vw",
          maxWidth: 680,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(99,102,241,0.09) 0%,transparent 65%)",
          filter: "blur(55px)",
          pointerEvents: "none",
          opacity: ph.bg ? 1 : 0,
          transition: "opacity 1s ease",
          willChange: "opacity",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "4%",
          right: "-12%",
          width: "50vw",
          height: "50vw",
          maxWidth: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          opacity: ph.bg ? 1 : 0,
          transition: "opacity 1.2s ease",
          willChange: "opacity",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "26%",
          left: "26%",
          width: "34vw",
          height: "34vw",
          maxWidth: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(236,72,153,0.045) 0%,transparent 65%)",
          filter: "blur(65px)",
          pointerEvents: "none",
          opacity: ph.bg ? 1 : 0,
          transition: "opacity 1.4s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(105deg,transparent 22%,rgba(99,102,241,0.025) 50%,transparent 78%)",
          animation: "sweep 7s ease-in-out infinite",
          opacity: ph.logo ? 1 : 0,
          transition: "opacity 0.8s ease",
          willChange: "transform",
        }}
      />

      {CODE_FRAGS.map((f, i) => (
        <div
          key={i}
          className="splash-code-frag"
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "#818CF8",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            opacity: ph.logo ? 0.04 : 0,
            transition: `opacity ${0.7 + i * 0.05}s ease`,
          }}
        >
          {f.text}
        </div>
      ))}

      <div
        className="splash-hud-left"
        style={{
          position: "absolute",
          top: 22,
          left: 24,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "8.5px",
          color: "#5E6673",
          lineHeight: 1.7,
          opacity: ph.hud ? 0.7 : 0,
          transition: "opacity 0.5s ease",
          userSelect: "none",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          BUTTON ENGINE
        </div>

        <div
          style={{
            opacity: 0.5,
            letterSpacing: "0.12em",
          }}
        >
          v1.0.2
        </div>
      </div>

      <div
        className="splash-hud-right"
        style={{
          position: "absolute",
          top: 22,
          right: 24,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "8.5px",
          color: "#5E6673",
          letterSpacing: "0.14em",
          opacity: ph.hud ? 0.6 : 0,
          transition: "opacity 0.5s ease",
          userSelect: "none",
        }}
      >
        REACT COMPONENT LIBRARY
      </div>

      <div
        className="splash-hud-bottom-left"
        style={{
          position: "absolute",
          bottom: 22,
          left: 24,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "8.5px",
          color: "#5E6673",
          letterSpacing: "0.12em",
          opacity: ph.hud ? 0.55 : 0,
          transition: "opacity 0.5s ease",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#34D399",
            display: "inline-block",
            animation: "dotPulse 2s ease-in-out infinite",
          }}
        />

        BUILDING INTERACTION SYSTEM
      </div>

      <div
        className="splash-hud-bottom-right"
        style={{
          position: "absolute",
          bottom: 22,
          right: 24,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "8.5px",
          color: "#5E6673",
          letterSpacing: "0.14em",
          opacity: ph.hud ? 0.55 : 0,
          transition: "opacity 0.5s ease",
          userSelect: "none",
        }}
      >
        49+ COMPONENTS
      </div>

      <div
        className="splash-center"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 0,
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            width: LOGO_PX,
            height: LOGO_PX,
          }}
        >
          {[148, 124, 102].map((r, i) => (
            <div
              key={r}
              style={{
                position: "absolute",
                left: C - r,
                top: C - r,
                width: r * 2,
                height: r * 2,
                borderRadius: "50%",
                border: `1px solid rgba(99,102,241,${
                  0.08 - i * 0.018
                })`,
                opacity: ph.logo ? 1 : 0,
                transition: `opacity ${
                  0.7 + i * 0.15
                }s ease`,
                animation: `ringBreath ${
                  4 + i * 0.8
                }s ease-in-out infinite ${i * 0.5}s`,
                pointerEvents: "none",
                willChange: "transform, opacity",
              }}
            />
          ))}

          <div
            style={{
              position: "absolute",
              left: C - 82,
              top: C - 82,
              width: 164,
              height: 164,
              borderRadius: "50%",
              border: "1px solid rgba(139,92,246,0.18)",
              opacity: ph.logo ? 1 : 0,
              transition: "opacity 0.8s ease",
              pointerEvents: "none",
            }}
          />

          {PARTICLES.map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: C + p.ox - p.sz / 2,
                top: C + p.oy - p.sz / 2,
                width: p.sz,
                height: p.sz,
                borderRadius: "50%",
                background: p.color,
                boxShadow: `0 0 3px ${p.color}`,
                pointerEvents: "none",
                animation: ph.logo
                  ? `ptPulse ${p.dur} ease-in-out infinite ${p.delay}`
                  : "none",
                willChange: "opacity",
              }}
            />
          ))}

          <div
            style={{
              position: "absolute",
              left: C - 78,
              top: C - 78,
              width: 156,
              height: 156,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(255,122,61,0.18) 0%,rgba(255,122,61,0.055) 45%,transparent 72%)",
              filter: "blur(16px)",
              animation: "centerGlow 4s ease-in-out infinite",
              pointerEvents: "none",
              willChange: "opacity, transform",
            }}
          />

          {flash && (
            <div
              style={{
                position: "absolute",
                left: C - 70,
                top: C - 70,
                width: 140,
                height: 140,
                borderRadius: "50%",
                border: "2px solid rgba(255,122,61,0.7)",
                boxShadow:
                  "0 0 18px rgba(255,122,61,0.6)",
                pointerEvents: "none",
                zIndex: 8,
                animation:
                  "logoFlashRing 0.55s ease-out forwards",
              }}
            />
          )}

          {MINI_BTNS.map((btn) => (
            <div
              key={btn.label}
              className="splash-mini-btn"
              style={{
                position: "absolute",
                left: C + btn.ox,
                top: C + btn.oy,
                transform: "translate(-50%, -50%)",
                opacity: ph.mini ? 1 : 0,
                transition: "opacity 0.45s ease",
                zIndex: 4,
              }}
            >
              <div
                style={{
                  animation: ph.mini
                    ? `miniFloat ${btn.dur} ease-in-out infinite ${btn.delay}`
                    : "none",
                  willChange: "transform",
                }}
              >
                <div
                  style={{
                    padding: "5px 12px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.035)",
                    border: `1px solid ${btn.color}44`,
                    boxShadow: `0 0 12px ${btn.color}20`,
                    fontFamily:
                      "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    fontWeight: 600,
                    color: btn.color,
                    letterSpacing: "0.1em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {btn.label}
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              opacity: ph.logo ? 1 : 0,
              transform: flash
                ? "scale(1.1)"
                : ph.logo
                ? "scale(1)"
                : "scale(0.75)",
              transition: flash
                ? "transform 0.35s cubic-bezier(0.22,1,0.36,1)"
                : "opacity 0.55s cubic-bezier(0.34,1.1,0.64,1), transform 0.55s cubic-bezier(0.34,1.1,0.64,1)",
              zIndex: 9,
              willChange: "opacity, transform",
            }}
          >
            <div
              style={{
                animation: ph.logo
                  ? "logoFloat 4s ease-in-out infinite"
                  : "none",
                willChange: "transform",
              }}
            >
              <div
                style={{
                  filter: flash
                    ? "drop-shadow(0 0 20px rgba(255,122,61,0.85)) drop-shadow(0 0 38px rgba(255,122,61,0.45))"
                    : "drop-shadow(0 0 16px rgba(255,122,61,0.42))",
                  transition: "filter 0.35s ease-out",
                }}
              >
                <img
                  src={logoImg}
                  alt="ButtonAdda"
                  style={{
                    width: LOGO_PX,
                    height: LOGO_PX,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(20px, 3.2vw, 30px)",
              letterSpacing: "0.22em",
              color: "#FF7A3D",
              marginBottom: 8,
              opacity: ph.brand ? 1 : 0,
              transform: ph.brand
                ? "translateY(0)"
                : "translateY(10px)",
              transition:
                "opacity 0.44s ease, transform 0.44s cubic-bezier(0.22,1,0.36,1)",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            BUTTON ADDA
          </div>

          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(12px, 1.5vw, 14px)",
              letterSpacing: "0.05em",
              color: "#FF9A66",
              marginBottom: 28,
              opacity: ph.mini ? 1 : 0,
              transition: "opacity 0.42s ease",
              textAlign: "center",
            }}
          >
            Buttons That Do More.
          </div>

          <div
            style={{
              width: "min(290px, 76vw)",
              marginBottom: 14,
              opacity: ph.bar ? 1 : 0,
              transition: "opacity 0.3s ease",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {completedStages.map((stage) => (
              <div
                key={stage.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: 1,
                  animation: "stageAppear 0.3s ease-out",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    minWidth: 0,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      minWidth: 5,
                      borderRadius: "50%",
                      background: "#FF7A3D",
                      boxShadow:
                        "0 0 6px rgba(255,122,61,0.7)",
                    }}
                  />

                  <span
                    style={{
                      fontFamily:
                        "'JetBrains Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      color: "#FF7A3D",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stage.label}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily:
                      "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#FF7A3D",
                    marginLeft: 8,
                  }}
                >
                  ✓
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              width: "min(290px, 76vw)",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                color: "#FF7A3D",
                letterSpacing: "0.04em",
              }}
            >
              {String(pct).padStart(2, "0")}%
            </span>
          </div>

          <div
            style={{
              width: "min(290px, 76vw)",
              height: "2px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.05)",
              position: "relative",
              overflow: "visible",
              opacity: ph.bar ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: `${pct}%`,
                borderRadius: "9999px",
                background:
                  "linear-gradient(90deg,#6366F1 0%,#8B5CF6 50%,#A78BFA 80%,#C084FC 100%)",
                boxShadow:
                  "0 0 7px rgba(99,102,241,0.75), 0 0 14px rgba(139,92,246,0.35)",
                transition: "width 0.04s linear",
                willChange: "width",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -2,
                  top: -2,
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#DDD6FE",
                  boxShadow:
                    "0 0 6px rgba(221,214,254,0.8)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes centerGlow {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }

        @keyframes ringBreath {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 0.75;
            transform: scale(1.025);
          }
        }

        @keyframes miniFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes ptPulse {
          0%, 100% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.65;
          }
        }

        @keyframes sweep {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(220%);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes stageAppear {
          from {
            opacity: 0;
            transform: translateY(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoFlashRing {
          0% {
            opacity: 0.9;
            transform: scale(0.72);
          }

          45% {
            opacity: 0.65;
          }

          100% {
            opacity: 0;
            transform: scale(1.65);
          }
        }

        .splash-center {
          min-width: 0;
        }

        @media (max-width: 640px) {
          .splash-center {
            transform: scale(0.76);
            transform-origin: center center;
          }

          .splash-mini-btn {
            display: none !important;
          }

          .splash-code-frag {
            display: none !important;
          }

          .splash-hud-left,
          .splash-hud-right,
          .splash-hud-bottom-left,
          .splash-hud-bottom-right {
            transform: scale(0.82);
          }

          .splash-hud-left {
            top: 14px !important;
            left: 14px !important;
            transform-origin: top left;
          }

          .splash-hud-right {
            top: 14px !important;
            right: 14px !important;
            transform-origin: top right;
          }

          .splash-hud-bottom-left {
            bottom: 14px !important;
            left: 14px !important;
            transform-origin: bottom left;
          }

          .splash-hud-bottom-right {
            bottom: 14px !important;
            right: 14px !important;
            transform-origin: bottom right;
          }
        }

        @media (max-width: 420px) {
          .splash-center {
            transform: scale(0.68);
          }

          .splash-hud-right {
            max-width: 120px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .splash-hud-bottom-left {
            max-width: 155px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        @media (max-height: 700px) and (max-width: 640px) {
          .splash-center {
            transform: scale(0.62);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}