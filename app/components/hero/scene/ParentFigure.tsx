"use client";

import { motion, type MotionValue } from "framer-motion";

/**
 * A parent walking in, one arm already reaching out.
 *
 * Drawn facing right; the parent arriving from the other side is the same
 * figure mirrored, so both read as moving toward the child. The two are told
 * apart by height and stride alone — no gendered visual cues. Earlier passes
 * gave them distinct hairstyles, but in a single-colour silhouette any gap
 * between the hair and the skull becomes negative space that reads as eyes.
 */

type Props = {
  /** Mirrors the figure so it faces left. */
  flip?: boolean;
  /** Slight height difference so the two parents aren't identical. */
  scale?: number;
  /** 0 → ~0.16. Soft rim light that warms as they close the distance. */
  warmth?: MotionValue<number>;
  className?: string;
};

const INK = "#DBE3E5";

export default function ParentFigure({
  flip = false,
  scale = 1,
  warmth,
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 150 240"
      className={className}
      aria-hidden
      focusable="false"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <ellipse cx="70" cy="214" rx="34" ry="6" fill="#000000" opacity="0.4" />

      {/* leaning very slightly into the walk */}
      <g
        transform={`rotate(4 70 210) translate(70 240) scale(${scale}) translate(-70 -240)`}
        fill={INK}
        stroke={INK}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.ellipse
          cx="70"
          cy="120"
          rx="54"
          ry="100"
          fill="#93D4FF"
          style={{ mixBlendMode: "screen", opacity: warmth }}
          opacity="0"
        />

        <circle cx="70" cy="34" r="18" />
        <path d="M70 52 L70 62" strokeWidth="10" fill="none" />

        {/* shoulders wider than the waist */}
        <path d="M56 68 L84 68" strokeWidth="15" fill="none" />
        <path d="M70 68 L70 116" strokeWidth="20" fill="none" />

        {/* stride — set apart so the legs never fuse with the torso */}
        <path d="M60 116 C55 144, 51 176, 50 202" strokeWidth="14" fill="none" />
        <path d="M81 116 C87 144, 92 176, 94 201" strokeWidth="14" fill="none" />
        <path d="M50 205 C44 209, 42 212, 49 212" strokeWidth="9" fill="none" />
        <path d="M94 204 C100 208, 102 211, 95 211" strokeWidth="9" fill="none" />

        {/* trailing arm */}
        <path d="M58 74 C45 93, 38 116, 36 138" strokeWidth="11" fill="none" />
        {/* reaching arm, dipping toward the child rather than jutting straight out */}
        <path d="M83 72 C102 78, 118 88, 130 102" strokeWidth="11" fill="none" />
        <circle cx="132" cy="105" r="5.5" />
      </g>
    </svg>
  );
}
