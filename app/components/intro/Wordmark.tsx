"use client";

import { motion, type Variants } from "framer-motion";
import {
  COLOR,
  EASE,
  T,
  T_REDUCED,
  WORDMARK_H,
  WORDMARK_SRC,
  WORDMARK_W,
} from "./introConfig";

type Props = {
  reduced?: boolean;
};

/**
 * The "SeraphGuard Labs" lockup, cut from the brand logo.
 *
 * The source artwork is navy, drawn for light backgrounds, so it is knocked to
 * white here — `brightness(0)` flattens it to black and `invert(1)` lifts it to
 * white, preserving the exact letterforms and antialiasing. A faint accent glow
 * ties it to the shield above.
 */
export default function Wordmark({ reduced = false }: Props) {
  const v: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        play: {
          opacity: 1,
          transition: { duration: 0.5, delay: T_REDUCED.in },
        },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        play: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: T.wordmark, ease: EASE.reveal },
        },
      };

  return (
    <motion.img
      variants={v}
      src={WORDMARK_SRC}
      alt=""
      aria-hidden
      draggable={false}
      width={WORDMARK_W}
      height={WORDMARK_H}
      className="h-auto w-[clamp(160px,30vw,320px)] select-none"
      style={{
        filter: `brightness(0) invert(1) drop-shadow(0 0 16px ${COLOR.accent}47)`,
      }}
    />
  );
}
