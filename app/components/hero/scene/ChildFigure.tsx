"use client";

import { motion, type MotionValue } from "framer-motion";

/**
 * A child sitting cross-legged, absorbed in a tablet.
 *
 * Built from thick round-capped strokes that merge into one silhouette, rather
 * than outlines — outlined limbs read as a box with sticks attached at this
 * size, and any interior gap turns into negative space that the eye reads as
 * facial features. No face, no clothing, no skin tone: the point is that any
 * parent recognises their own child in it. The screen is the only colour in the
 * drawing, so the eye goes straight to what has the child's attention.
 */

type Props = {
  /** 1 → ~0.3. Screen glare, which fades as the parents arrive. */
  screenGlow?: MotionValue<number>;
  /** 0 → 11 (degrees). Head lifts off the screen toward the parents. */
  lookUp?: MotionValue<number>;
  className?: string;
};

const INK = "#DBE3E5";

export default function ChildFigure({ screenGlow, lookUp, className }: Props) {
  return (
    <svg
      viewBox="0 0 240 204"
      className={className}
      aria-hidden
      focusable="false"
    >
      <ellipse cx="120" cy="182" rx="56" ry="6.5" fill="#000000" opacity="0.42" />

      {/* the light the screen throws back onto the face */}
      <motion.ellipse
        cx="120"
        cy="124"
        rx="50"
        ry="38"
        fill="#93D4FF"
        style={{ mixBlendMode: "screen", opacity: screenGlow }}
        opacity="0.2"
      />

      <g
        fill={INK}
        stroke={INK}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* head — pivots at the neck as lookUp rises */}
        <motion.g
          style={{
            rotate: lookUp,
            transformBox: "view-box",
            transformOrigin: "120px 92px",
          }}
        >
          <g transform="rotate(-11 120 92)">
            <circle cx="120" cy="56" r="25" />
            <path d="M120 79 L120 92" strokeWidth="13" fill="none" />
          </g>
        </motion.g>

        <path d="M108 98 L132 98" strokeWidth="17" fill="none" />
        <path d="M120 98 L120 138" strokeWidth="26" fill="none" />

        {/* crossed legs */}
        <path
          d="M110 142 C90 148, 78 161, 92 168 C101 172, 113 169, 120 164"
          strokeWidth="15"
          fill="none"
        />
        <path
          d="M130 142 C150 148, 162 161, 148 168 C139 172, 127 169, 120 164"
          strokeWidth="15"
          fill="none"
        />

        {/* arms down into the lap */}
        <path d="M107 104 C94 115, 92 131, 100 143" strokeWidth="11" fill="none" />
        <path d="M133 104 C146 115, 148 131, 140 143" strokeWidth="11" fill="none" />
      </g>

      {/* tablet, drawn last so it sits in front of the lap */}
      <g transform="rotate(-7 120 148)">
        <rect
          x="93"
          y="130"
          width="54"
          height="37"
          rx="6"
          fill="#0B1E24"
          stroke={INK}
          strokeWidth="4"
        />
        <motion.rect
          x="98"
          y="135"
          width="44"
          height="27"
          rx="3"
          fill="#9FDCFF"
          style={{ opacity: screenGlow }}
        />
      </g>
    </svg>
  );
}
