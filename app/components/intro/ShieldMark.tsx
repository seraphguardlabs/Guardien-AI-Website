"use client";

import { motion, type Variants } from "framer-motion";
import {
  COLOR,
  EASE,
  SHIELD_H,
  SHIELD_SRC,
  SHIELD_W,
  T,
  T_REDUCED,
} from "./introConfig";

/**
 * The SeraphGuard Labs shield.
 *
 * The artwork is a raster cut from the brand logo, so the depth has to come
 * from stacking rather than from geometry: each visual element is its own plane
 * inside a `transform-style: preserve-3d` stage, separated on Z. When the stage
 * rotates on Y the perspective projection shifts each plane by a different
 * amount, so the dark backing plate slides out from behind the shield and the
 * highlight slides across it — real parallax, not a sheared bitmap.
 *
 * The shield's own alpha channel doubles as the CSS mask for the light sweep
 * and the pulse, so both are clipped to the exact silhouette of the artwork.
 *
 * Plane gaps are kept >= 4px: iOS Safari z-fights coplanar layers.
 */

type Props = {
  /** Static cross-fade instead of the full storyboard. */
  reduced?: boolean;
};

function Plane({
  z,
  scale = 1,
  children,
  className = "",
}: {
  z: number;
  scale?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        transform: `translateZ(${z}px)${scale !== 1 ? ` scale(${scale})` : ""}`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

/** Clips its children to the shield silhouette. */
const maskToShield = {
  maskImage: `url("${SHIELD_SRC}")`,
  WebkitMaskImage: `url("${SHIELD_SRC}")`,
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskPosition: "center",
} as const;

export default function ShieldMark({ reduced = false }: Props) {
  const haloV: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        play: { opacity: 0.45, transition: { duration: 0.5, delay: T_REDUCED.in } },
      }
    : {
        hidden: { opacity: 0 },
        play: {
          opacity: [0, 0.5, 0.5, 0.95, 0.45],
          transition: {
            duration: T.pulse + 0.5 - T.shieldIn,
            delay: T.shieldIn,
            times: [0, 0.52, 0.78, 0.88, 1],
            ease: EASE.reveal,
          },
        },
      };

  const bodyV: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        play: { opacity: 1, transition: { duration: 0.5, delay: T_REDUCED.in } },
      }
    : {
        hidden: { opacity: 0 },
        play: {
          opacity: 1,
          transition: { duration: 1, delay: T.shieldIn, ease: EASE.reveal },
        },
      };

  const sweepV: Variants = reduced
    ? { hidden: { x: "260%" }, play: { x: "260%" } }
    : {
        hidden: { x: "-160%" },
        play: {
          x: "260%",
          transition: { duration: 0.9, delay: T.sweep, ease: EASE.sweep },
        },
      };

  const pulseV: Variants = reduced
    ? { hidden: { opacity: 0 }, play: { opacity: 0 } }
    : {
        hidden: { scale: 0.98, opacity: 0 },
        play: {
          scale: [0.98, 1.45],
          opacity: [0.85, 0],
          transition: { duration: 0.55, delay: T.pulse, ease: EASE.reveal },
        },
      };

  return (
    <>
      {/* L0 — halo. Cyan-steel, picked to sit under the globe in the artwork. */}
      <Plane z={-70} scale={1.75}>
        <motion.div
          variants={haloV}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(closest-side, ${COLOR.accent}55 0%, ${COLOR.faceLight}2e 52%, transparent 100%)`,
          }}
        />
      </Plane>

      {/* L1 — backing plate: a darkened, softened copy of the shield. Slides
          out from behind the silhouette as the stage turns, reading as depth. */}
      <Plane z={-24} scale={1.05}>
        <motion.img
          variants={bodyV}
          src={SHIELD_SRC}
          alt=""
          width={SHIELD_W}
          height={SHIELD_H}
          aria-hidden
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
          style={{ filter: "brightness(0.16) blur(1.5px)" }}
        />
      </Plane>

      {/* L2 — the shield itself */}
      <Plane z={0}>
        <motion.img
          variants={bodyV}
          src={SHIELD_SRC}
          alt=""
          width={SHIELD_W}
          height={SHIELD_H}
          fetchPriority="high"
          decoding="sync"
          draggable={false}
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain"
          style={{
            filter: `drop-shadow(0 0 26px ${COLOR.accent}3d)`,
          }}
        />
      </Plane>

      {/* L3 — light sweep, clipped to the shield's own alpha */}
      <Plane z={16}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ ...maskToShield, mixBlendMode: "screen" }}
        >
          {/* Static tilt on the wrapper so the animated x never clobbers it. */}
          <div
            className="absolute inset-0"
            style={{ transform: "rotate(-16deg) scale(1.6)" }}
          >
            <motion.div
              variants={sweepV}
              className="absolute inset-y-0 w-[38%]"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${COLOR.accent}b3 42%, #ffffff 52%, ${COLOR.cyan}99 62%, transparent 100%)`,
                filter: "blur(3px)",
                willChange: "transform",
              }}
            />
          </div>
        </div>
      </Plane>

      {/* L4 — the pulse: the silhouette blooming outward, not a hard ring */}
      <Plane z={22}>
        <motion.div
          variants={pulseV}
          className="absolute inset-0"
          style={{
            ...maskToShield,
            backgroundColor: COLOR.accent,
            filter: "blur(7px)",
            mixBlendMode: "screen",
          }}
        />
      </Plane>
    </>
  );
}
