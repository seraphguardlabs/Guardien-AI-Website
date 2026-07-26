"use client";

import { motion, type Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import ShieldMark from "./ShieldMark";
import Wordmark from "./Wordmark";
import {
  COLOR,
  DOLLY_Z,
  EASE,
  IMAGE_GRACE_MS,
  INTRO_REVEAL_EVENT,
  INTRO_STORAGE_KEY,
  PERSPECTIVE,
  SHIELD_H,
  SHIELD_W,
  SKIP_FADE,
  T,
  T_REDUCED,
} from "./introConfig";

type Phase = "boot" | "playing" | "reduced" | "done";

/**
 * The Seraph Guard Labs intro.
 *
 * Always mounted by app/page.tsx (never conditionally rendered by a parent —
 * that would kill exit animations); it returns null from its own render once
 * it has finished. Visibility on the first paint is decided entirely by CSS
 * keyed off `html[data-intro]`, which IntroBootScript stamps before body parse.
 * The initial React render is therefore identical on server and client, so
 * there is no hydration mismatch.
 */
export default function IntroOverlay() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [skipping, setSkipping] = useState(false);

  const skipRef = useRef<HTMLButtonElement>(null);
  const revealedRef = useRef(false);
  const finishedRef = useRef(false);
  const skippingRef = useRef(false);

  const reduced = phase === "reduced";
  const running = phase === "playing" || phase === "reduced";

  /** Let the homepage start its entrance underneath the still-fading curtain. */
  const reveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    window.dispatchEvent(new CustomEvent(INTRO_REVEAL_EVENT));
  }, []);

  /** Teardown. Idempotent — StrictMode's double-mount must not double-run this. */
  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    reveal();
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      /* private mode / storage disabled — the intro just replays next load */
    }

    // Removing the attribute releases the CSS scroll lock and tells HeroContent
    // that no intro is running.
    document.documentElement.removeAttribute("data-intro");

    const main = document.getElementById("site-main");
    main?.removeAttribute("inert");

    // Move focus off the skip button before it is removed, so the next Tab
    // does not restart from the top of the document.
    const logo = main?.querySelector<HTMLElement>("header a");
    logo?.focus({ preventScroll: true });

    setPhase("done");
  }, [reveal]);

  const skip = useCallback(() => {
    if (finishedRef.current || skippingRef.current) return;
    skippingRef.current = true;
    reveal(); // fire immediately so the hero animates in rather than snapping
    setSkipping(true);
    // Same reasoning as the curtain: never let teardown depend on rAF.
    setTimeout(finish, SKIP_FADE * 1000);
  }, [reveal, finish]);

  // --- Decide what to do, once, after hydration ----------------------------
  useEffect(() => {
    const mode = document.documentElement.getAttribute("data-intro");
    if (mode === "on") setPhase("playing");
    else if (mode === "reduced") setPhase("reduced");
    else setPhase("done");
  }, []);

  // --- Drive the sequence --------------------------------------------------
  useEffect(() => {
    if (!running) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => {
      if (cancelled) return;
      timers.push(
        setTimeout(() => {
          if (!cancelled) fn();
        }, ms),
      );
    };

    // Re-applied on every effect run so StrictMode's cleanup cannot strand it.
    const main = document.getElementById("site-main");
    main?.setAttribute("inert", "");

    skipRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        skip();
      }
    };
    window.addEventListener("keydown", onKey, { capture: true });

    const curtainMs = (reduced ? 0.4 : 0.8) * 1000;

    const openCurtain = () => {
      reveal();
      setCurtainOpen(true);
      // Teardown is timer-driven, not animation-driven. requestAnimationFrame
      // is throttled or stopped entirely in a backgrounded tab, so relying on
      // onAnimationComplete alone would leave a visitor who tabs away mid-intro
      // staring at a permanently black overlay. onAnimationComplete stays as a
      // fast path; finish() is idempotent, so whichever lands first wins.
      at(curtainMs, finish);
    };

    if (reduced) {
      at(T_REDUCED.reveal * 1000, openCurtain);
    } else {
      // Never block on the hero image — that would make the intro's length a
      // function of network conditions. But if it is a hair late, hold the
      // curtain by a bounded 400ms once, which is invisible in the common case.
      at((T.curtain - 0.15) * 1000, () => {
        const img = document.querySelector<HTMLImageElement>("#site-main img");
        if (img && !img.complete) at(IMAGE_GRACE_MS, openCurtain);
        else at(150, openCurtain);
      });
    }

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", onKey, { capture: true });
    };
  }, [running, reduced, reveal, skip, finish]);

  if (phase === "done") return null;

  // --- Variants ------------------------------------------------------------

  const stageV: Variants = reduced
    ? {
        hidden: { rotateY: 0, rotateX: 0, scale: 1, filter: "blur(0px)" },
        play: { rotateY: 0, rotateX: 0, scale: 1, filter: "blur(0px)" },
      }
    : {
        hidden: { rotateY: -28, rotateX: 4, scale: 0.82, filter: "blur(8px)" },
        play: {
          rotateY: [-8, 14, 0],
          rotateX: [4, 0, 0],
          scale: 1,
          filter: "blur(0px)",
          transition: {
            scale: { duration: 1, delay: T.shieldIn, ease: EASE.reveal },
            filter: { duration: 0.9, delay: T.shieldIn, ease: EASE.reveal },
            rotateY: {
              duration: 1.4,
              delay: T.rotate,
              ease: EASE.glide,
              times: [0, 0.55, 1],
            },
            rotateX: {
              duration: 1.4,
              delay: T.rotate,
              ease: EASE.glide,
              times: [0, 0.55, 1],
            },
          },
        },
      };

  // A perspective dolly, not a scale. The perspective divide is non-linear, so
  // growth accelerates on its own and near planes grow faster than far ones —
  // that widening parallax is what the eye reads as "camera moved" rather than
  // "the thing got bigger".
  const dollyV: Variants = reduced
    ? { hidden: { z: 0 }, play: { z: 0 } }
    : {
        hidden: { z: 0 },
        play: {
          z: DOLLY_Z,
          transition: { duration: 0.95, delay: T.dolly, ease: EASE.dolly },
        },
      };

  const wordDollyV: Variants = reduced
    ? { hidden: { z: 0, opacity: 1 }, play: { z: 0, opacity: 1 } }
    : {
        hidden: { z: 0, opacity: 1 },
        play: {
          z: 520,
          opacity: 0,
          transition: {
            z: { duration: 0.85, delay: T.dolly + 0.1, ease: EASE.dolly },
            opacity: { duration: 0.5, delay: T.dolly + 0.1, ease: "linear" },
          },
        },
      };

  // Opacity lives on the perspective wrapper, never on a preserve-3d element:
  // a grouping property applied to a preserve-3d node forces it to flatten,
  // which would collapse the parallax between planes (notably on iOS Safari).
  const frustumV: Variants = reduced
    ? { hidden: { opacity: 1 }, play: { opacity: 1 } }
    : {
        hidden: { opacity: 1 },
        play: {
          opacity: 0,
          transition: { duration: 0.55, delay: T.dolly + 0.4, ease: "linear" },
        },
      };

  const skipV: Variants = {
    hidden: { opacity: 0 },
    play: {
      opacity: 0.55,
      transition: { duration: 0.4, delay: reduced ? 0 : T.skip },
    },
  };

  const label = running ? "play" : "hidden";

  return (
    <motion.div
      id="sgl-intro"
      role="presentation"
      className="fixed inset-0 z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: skipping ? 0 : 1 }}
      transition={{ duration: skipping ? SKIP_FADE : 0, ease: "linear" }}
      onAnimationComplete={() => {
        if (skipping) finish();
      }}
      onPointerDown={skip}
    >
      {/* Backdrop. Fades last, so the homepage is revealed rather than loaded. */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: COLOR.ink }}
        initial={{ opacity: 1 }}
        animate={{ opacity: curtainOpen ? 0 : 1 }}
        transition={{
          duration: curtainOpen ? (reduced ? 0.4 : 0.8) : 0,
          ease: EASE.curtain,
        }}
        onAnimationComplete={() => {
          if (curtainOpen && !skipping) finish();
        }}
      />

      {/* Perspective frustum. Establishes the camera; not itself preserve-3d. */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-[clamp(1.5rem,4vh,2.75rem)]"
        style={{
          perspective: `${PERSPECTIVE}px`,
          perspectiveOrigin: "50% 45%",
        }}
        variants={frustumV}
        initial="hidden"
        animate={label}
      >
        <motion.div
          variants={dollyV}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <motion.div
            variants={stageV}
            className="relative"
            style={{
              // Derived from the asset rather than written as a Tailwind
              // arbitrary value: the ratio must match the artwork exactly, or
              // object-contain letterboxes the image while the CSS mask
              // stretches to the box and the light sweep slides off the
              // silhouette. Inline, it cannot go stale or fail to compile.
              aspectRatio: `${SHIELD_W} / ${SHIELD_H}`,
              width: "clamp(132px, 24vw, 232px)",
              transformStyle: "preserve-3d",
            }}
          >
            <ShieldMark reduced={reduced} />
          </motion.div>
        </motion.div>

        <motion.div variants={wordDollyV} style={{ transformStyle: "preserve-3d" }}>
          <Wordmark reduced={reduced} />
        </motion.div>
      </motion.div>

      <motion.button
        ref={skipRef}
        type="button"
        variants={skipV}
        initial="hidden"
        animate={label}
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="absolute bottom-6 right-6 rounded-full px-4 py-2 text-xs tracking-[0.18em] uppercase transition-opacity hover:!opacity-100 focus-visible:!opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          color: COLOR.paper,
          outlineColor: COLOR.accent,
          fontFamily: "var(--font-poppins)",
        }}
      >
        Skip intro
      </motion.button>

      <p className="sr-only" role="status">
        SeraphGuard Labs
      </p>
    </motion.div>
  );
}
