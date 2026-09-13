import { useEffect, useRef, useState } from "react";
import {
  AuroraButton,
  BlackHoleButton,
  CableSendButton,
  ColorBurstButton,
  ControlPanelButton,
  CopyButton,
  CyberButton,
  DialButton,
  DiceButton,
  DNAButton,
  ElectricButton,
  FireButton,
  FuseGlowButton,
  GamepadButton,
  GhostButton,
  GlassButton,
  GlowButton,
  GradientButton,
  HologramButton,
  IceBreakButton,
  InkButton,
  KeycapButton,
  LiquidButton,
  LiquidGlassButton,
  LoadingButton,
  MagneticButton,
  MagneticGlowButton,
  MagneticTextButton,
  MoodButton,
  MorphButton,
  NeonButton,
  OrbitButton,
  ParticleButton,
  PlasmaButton,
  PortalButton,
  PressHoldButton,
  ProgressButton,
  PuppyButton,
  RainbowButton,
  RippleButton,
  RippleWaveButton,
  ShimmerButton,
  SplitButton,
  SpotlightButton,
  StarfieldButton,
  SwipeActionButton,
  ThreeDButton,
  TiltCardButton,
  ToggleButton,
} from "button-adda";

import { categoryColors } from "../data/buttons";

const buttonComponents = {
  AuroraButton,
  BlackHoleButton,
  CableSendButton,
  ColorBurstButton,
  ControlPanelButton,
  CopyButton,
  CyberButton,
  DialButton,
  DiceButton,
  DNAButton,
  ElectricButton,
  FireButton,
  FuseGlowButton,
  GamepadButton,
  GhostButton,
  GlassButton,
  GlowButton,
  GradientButton,
  HologramButton,
  IceBreakButton,
  InkButton,
  KeycapButton,
  LiquidButton,
  LiquidGlassButton,
  LoadingButton,
  MagneticButton,
  MagneticGlowButton,
  MagneticTextButton,
  MoodButton,
  MorphButton,
  NeonButton,
  OrbitButton,
  ParticleButton,
  PlasmaButton,
  PortalButton,
  PressHoldButton,
  ProgressButton,
  PuppyButton,
  RainbowButton,
  RippleButton,
  RippleWaveButton,
  ShimmerButton,
  SplitButton,
  SpotlightButton,
  StarfieldButton,
  SwipeActionButton,
  ThreeDButton,
  TiltCardButton,
  ToggleButton,
};

export default function ComponentCard({ button, onClick }) {
  const catColor = categoryColors[button.category];
  const previewRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      rootMargin: "200px",
    }
  );

  if (previewRef.current) {
    observer.observe(previewRef.current);
  }

  return () => observer.disconnect();
}, []);

  const ButtonComponent = buttonComponents[button.name];

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(button);
    }
  };

  return (
    <div
      onClick={() => onClick(button)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="group w-full text-left rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-card-hover)";
        e.currentTarget.style.borderColor =
          "rgba(255,122,61,0.3)";
        e.currentTarget.style.boxShadow =
          "0 0 0 1px rgba(255,122,61,0.1), 0 8px 24px rgba(0,0,0,0.3)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >

      <div
        className="relative flex items-center justify-center h-32"
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border-color) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.4,
          }}
        />

<div
  ref={previewRef}
  className="relative flex items-center justify-center w-full h-full"
  style={{
    overflow: "hidden",
  }}
>
  {ButtonComponent && isVisible ? (
    <ButtonComponent>
      Click Me
    </ButtonComponent>
  ) : (
    <div
      className="w-24 h-12 rounded-xl"
      style={{
        background: `${button.color}18`,
        border: `1px solid ${button.color}30`,
        opacity: 0.5,
      }}
    />
  )}
</div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-md whitespace-nowrap"
            style={{
              background: "var(--bg-card)",
              color: "var(--text-muted)",
              border: "1px solid var(--border-color)",
            }}
          >
            LIVE COMPONENT
          </span>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(
              ellipse at center,
              ${button.color}08 0%,
              transparent 70%
            )`,
          }}
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">

          <span
            className="font-mono text-sm font-500"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {button.name}
          </span>

          <span
            className="font-mono text-xs px-1.5 py-0.5 rounded flex-shrink-0"
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
          className="text-xs mb-3 leading-relaxed"
          style={{
            color: "var(--text-muted)",
          }}
        >
          {button.description}
        </p>

        <div
          className="flex items-center gap-1 text-xs font-mono transition-all duration-200"
          style={{
            color: "var(--text-muted)",
          }}
        >
          <span className="group-hover:text-[var(--brand)] transition-colors">
            VIEW DETAILS
          </span>

          <span
            className="translate-x-0 group-hover:translate-x-1 transition-transform"
            style={{
              color: "var(--brand)",
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}