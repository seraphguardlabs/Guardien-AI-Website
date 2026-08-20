"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { INTRO_REVEAL_EVENT } from "../../intro/introConfig";
import ChildFigure from "./ChildFigure";
import ParentFigure from "./ParentFigure";

/**
 * The homepage opening: a child alone with a screen, and two parents who
 * close the distance as you scroll.
 *
 * The pinning is done with a tall stage wrapping a `position: sticky` panel —
 * NOT by intercepting wheel or touch events. The page scrolls normally the
 * whole time; the panel just stays put while its scroll range is consumed, and
 * releases on its own once the parents have arrived. That keeps the scrollbar
 * honest and keeps keyboard, trackpad, touch and screen readers working, none
 * of which survive a preventDefault-based scroll hijack.
 */

/** Total stage height. The pinned stretch is this minus one viewport. */
const STAGE_VH = 260;

/** How far off-screen the parents start, as a share of viewport width. */
const TRAVEL_VW = 0.75;

export default function ScrollScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const still = !!prefersReduced;

  const [revealed, setRevealed] = useState(false);
  const [travel, setTravel] = useState(900);

  // Hold the opening until the intro curtain lifts, so the scene is revealed
  // rather than already sitting there. Mirrors the old HeroContent gate.
  useEffect(() => {
    if (document.documentElement.getAttribute("data-intro") === null) {
      setRevealed(true);
      return;
    }
    let fired = false;
    const go = () => {
      if (fired) return;
      fired = true;
      setRevealed(true);
    };
    window.addEventListener(INTRO_REVEAL_EVENT, go, { once: true });
    const safety = setTimeout(go, 4500);
    return () => {
      window.removeEventListener(INTRO_REVEAL_EVENT, go);
      clearTimeout(safety);
    };
  }, []);

  // Travel distance in pixels. Plain numbers interpolate predictably, where
  // unit-bearing strings like "-75vw" do not always.
  useEffect(() => {
    const measure = () => setTravel(window.innerWidth * TRAVEL_VW + 260);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // Parents close in over the middle of the stage.
  const leftX = useTransform(scrollYProgress, [0.1, 0.7], [-travel, 0]);
  const rightX = useTransform(scrollYProgress, [0.1, 0.7], [travel, 0]);
  const parentFade = useTransform(scrollYProgress, [0.08, 0.26], [0, 1]);

  // As they arrive the screen loses its hold and the child looks up.
  const screenGlow = useTransform(scrollYProgress, [0.5, 0.88], [1, 0.32]);
  // counter-rotates the head's resting -11deg, so it ends upright
  const lookUp = useTransform(scrollYProgress, [0.58, 0.9], [0, 11]);
  const warmth = useTransform(scrollYProgress, [0.55, 0.92], [0, 0.16]);
  const ambient = useTransform(scrollYProgress, [0.45, 0.95], [0.12, 0.5]);

  // The opening line is only earned once they are together.
  const copyOpacity = useTransform(scrollYProgress, [0.74, 0.94], [0, 1]);
  const copyY = useTransform(scrollYProgress, [0.74, 0.94], [26, 0]);

  // The "alone" caption fades the moment help is on the way.
  const aloneOpacity = useTransform(scrollYProgress, [0.02, 0.24], [1, 0]);

  /** Drops the scroll binding entirely when motion is reduced. */
  const mv = <T,>(v: T): T | undefined => (still ? undefined : v);

  return (
    <div
      ref={stageRef}
      className="relative"
      style={{ height: still ? "100vh" : `${STAGE_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ambient ground */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 78%, #00343B 0%, #001A1E 52%, #001315 100%)",
          }}
        />
        {/* pool of light that grows as the family comes together */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(46% 40% at 50% 74%, rgba(147,212,255,0.55) 0%, rgba(119,201,255,0.14) 45%, transparent 78%)",
            opacity: mv(ambient) ?? 0.5,
          }}
        />

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* copy */}
          <div className="absolute inset-x-0 top-[16%] flex flex-col items-center px-6 text-center">
            <motion.p
              className="mb-5 text-sm font-light tracking-[0.24em] text-white/55 uppercase"
              style={{ opacity: mv(aloneOpacity) ?? 0 }}
            >
              Alone in a world you cannot see
            </motion.p>

            <motion.div
              className="flex flex-col items-center"
              style={{
                opacity: mv(copyOpacity) ?? 1,
                y: mv(copyY) ?? 0,
              }}
            >
              <h1
                className="max-w-3xl text-3xl leading-tight font-light text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-caudex)" }}
              >
                Making The Digital World
                <br />
                Safer For Children
              </h1>
              <p className="mt-5 max-w-xl text-base font-light text-white/85 md:text-lg">
                A trusted partner for parents — protecting children while
                respecting privacy.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="rounded-2xl bg-orange-600 px-8 py-4 text-center text-white transition-colors hover:bg-orange-700"
                >
                  Request Early Access
                </Link>
                <Link
                  href="/coming-soon"
                  className="rounded-2xl border border-white/50 bg-white px-6 py-4 text-center text-[#222] backdrop-blur-sm transition-colors hover:bg-white/50"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>

          {/* the figures, all on one ground line */}
          <div className="absolute inset-x-0 bottom-[14%] flex items-end justify-center gap-[clamp(0px,1.2vw,20px)]">
            <motion.div
              className="shrink-0"
              style={{
                x: mv(leftX) ?? 0,
                opacity: mv(parentFade) ?? 1,
              }}
            >
              <ParentFigure
                scale={1}
                warmth={still ? undefined : warmth}
                className="h-[clamp(168px,30vh,300px)] w-auto"
              />
            </motion.div>

            <div className="shrink-0">
              <ChildFigure
                screenGlow={still ? undefined : screenGlow}
                lookUp={still ? undefined : lookUp}
                className="h-[clamp(122px,22vh,208px)] w-auto"
              />
            </div>

            <motion.div
              className="shrink-0"
              style={{
                x: mv(rightX) ?? 0,
                opacity: mv(parentFade) ?? 1,
              }}
            >
              <ParentFigure
                flip
                scale={0.94}
                warmth={still ? undefined : warmth}
                className="h-[clamp(168px,30vh,300px)] w-auto"
              />
            </motion.div>
          </div>

          {/* scroll affordance — the scene needs to invite the scroll */}
          {!still && (
            <motion.div
              className="absolute inset-x-0 bottom-7 flex flex-col items-center gap-2"
              style={{ opacity: mv(aloneOpacity) ?? 0 }}
            >
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                Scroll
              </span>
              <span className="h-9 w-px bg-gradient-to-b from-white/45 to-transparent" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
