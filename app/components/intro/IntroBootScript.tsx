/**
 * Server component. Renders a parser-blocking inline script into <head>.
 *
 * This runs before <body> is parsed, so `data-intro` is already on <html> when
 * the overlay markup is styled — the correct thing paints on the very first
 * frame, with no flash in either direction (no intro flashing at returning
 * visitors, no homepage flashing before the intro covers it). sessionStorage is
 * unreadable during SSR, so this is the only place the decision can be made
 * early enough.
 *
 * Deliberately NOT `next/script`: `strategy="beforeInteractive"` is designed for
 * src-based site-wide libraries and routes through Next's own injection path
 * with no guarantee it beats first paint. React 19 also does not hoist inline
 * scripts (only <title>/<meta>/<link>/<script async src>), so this must be
 * rendered inside an explicit <head> in the root layout.
 *
 * Modes stamped on <html data-intro>:
 *   "on"      play the full sequence
 *   "reduced" play the static cross-fade (prefers-reduced-motion)
 *   "off"     no intro; CSS keeps the overlay display:none
 *
 * Escape hatches: ?intro=1 forces it on (QA/demo), ?intro=0 forces it off.
 * `navigator.webdriver` suppresses it so Lighthouse/PageSpeed/Playwright
 * measure the real homepage rather than a 4s opaque overlay.
 */
const BOOT = `(function(){var d=document.documentElement;try{
var q=location.search,mode;
if(q.indexOf("intro=1")>-1){mode="on"}
else if(q.indexOf("intro=0")>-1||location.pathname!=="/"){mode="off"}
else if(sessionStorage.getItem("sgl:intro:v1")==="1"){mode="off"}
else if(navigator.webdriver){mode="off"}
else if(matchMedia("(prefers-reduced-motion: reduce)").matches){mode="reduced"}
else{mode="on"}
d.setAttribute("data-intro",mode);
if(mode!=="off"){try{history.scrollRestoration="manual"}catch(e){}
if(window.scrollY)window.scrollTo(0,0)}
}catch(e){d.setAttribute("data-intro","off")}})();`;

export default function IntroBootScript() {
  return <script id="sgl-intro-boot" dangerouslySetInnerHTML={{ __html: BOOT }} />;
}
