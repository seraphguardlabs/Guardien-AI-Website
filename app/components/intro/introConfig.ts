/**
 * Timings, easings and geometry for the Seraph Guard Labs intro sequence.
 *
 * The whole storyboard reads off the `T` table below — every delay in the
 * animation is expressed as an offset from sequence start, so the timeline in
 * the plan and the code stay in sync.
 */

/** sessionStorage key. Bump the version suffix to force the intro to replay. */
export const INTRO_STORAGE_KEY = "sgl:intro:v1";

/** Fired on `window` when the curtain starts lifting, so the hero can enter under it. */
export const INTRO_REVEAL_EVENT = "sgl:intro-reveal";

/** Perspective depth of the camera. Apparent scale at z is PERSPECTIVE / (PERSPECTIVE - z). */
export const PERSPECTIVE = 1200;

/** translateZ target for the dolly — 7.5x apparent scale at PERSPECTIVE 1200. */
export const DOLLY_Z = 1040;

export const EASE = {
  reveal: [0.16, 1, 0.3, 1] as const, // expo-out: authoritative arrival
  glide: [0.65, 0, 0.35, 1] as const, // symmetric in-out for the rotation
  sweep: [0.4, 0, 0.2, 1] as const, // fast middle, soft ends
  dolly: [0.45, 0, 0.9, 0.6] as const, // ease-IN: camera accelerates forward
  curtain: [0.33, 1, 0.68, 1] as const, // cubic-out on the backdrop fade
};

/** Sequence offsets in seconds. */
export const T = {
  shieldIn: 0.15,
  skip: 0.4,
  rotate: 0.9,
  sweep: 1.2,
  wordmark: 1.9,
  pulse: 2.45,
  dolly: 2.9,
  curtain: 3.25,
  unmount: 4.05,
};

/** Reduced-motion sequence: a 1.3s cross-fade, no rotation/sweep/pulse/dolly. */
export const T_REDUCED = {
  in: 0.1,
  reveal: 0.9,
  curtain: 0.8,
  unmount: 1.3,
};

/** Milliseconds the curtain may wait on a late hero image. Bounded, once. */
export const IMAGE_GRACE_MS = 400;

/** Fade duration when the visitor skips, in seconds. */
export const SKIP_FADE = 0.25;

// --- Brand assets ----------------------------------------------------------
// Trimmed and re-encoded from the cut-out PNGs at the repo root
// (logo-removebg-preview.png / Seraph_wording-removebg-preview.png).
// The shield's own alpha doubles as the CSS mask for the light sweep and pulse,
// so the stage's aspect ratio must stay pinned to these dimensions.

export const SHIELD_SRC = "/seraph-shield.webp";
export const SHIELD_W = 307;
export const SHIELD_H = 356;

export const WORDMARK_SRC = "/seraph-wordmark.webp";
export const WORDMARK_W = 659;
export const WORDMARK_H = 172;

// --- Palette (drawn from the existing site hex usage) ----------------------

export const COLOR = {
  ink: "#001517", // near-black teal — the backdrop
  plateTop: "#002227",
  plateBottom: "#001315",
  faceLight: "#005C67",
  faceMid: "#003D45",
  faceDark: "#00181B",
  accent: "#93D4FF", // primary accent blue
  cyan: "#77C9FF",
  paper: "#DBE3E5", // off-white
};
