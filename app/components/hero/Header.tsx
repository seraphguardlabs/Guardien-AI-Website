"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header({
  forceLight = false,
}: {
  /** Pages without a dark hero behind the header (research, terms, etc.)
   *  should render the light bar from the start instead of the transparent
   *  glass bar, which is unreadable on a light page background. */
  forceLight?: boolean;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(forceLight);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Switch from a transparent glass bar over the hero photo to a light,
  // blurred bar once the page scrolls past the hero.
  useEffect(() => {
    if (forceLight) return;
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceLight]);

  const linkColor = "text-white/90";
  const linkHover = "hover:text-[#38BDF8]";
  const underline = "bg-[#38BDF8]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050d17]/85 backdrop-blur-md border-b border-white/10 shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/" || window.location.pathname === "") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 cursor-pointer z-50"
        >
          <img
            src="/guardien-ai-icon-512.png"
            alt=""
            className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0"
          />
          <img
            src="/guardien-ai-word-light.svg"
            alt="Guardien AI"
            className="w-24 sm:w-[130px] h-auto max-h-10"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/#mission"
            className={`${linkColor} ${linkHover} text-sm font-medium transition-all duration-300 ease-out relative group`}
          >
            Mission
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 ${underline} group-hover:w-full transition-all duration-300`}
            ></span>
          </Link>
          <Link
            href="/#pricing"
            className={`${linkColor} ${linkHover} text-sm font-medium transition-all duration-300 ease-out relative group`}
          >
            Pricing
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 ${underline} group-hover:w-full transition-all duration-300`}
            ></span>
          </Link>
          <Link
            href="/research"
            className={`${linkColor} ${linkHover} text-sm font-medium transition-all duration-300 ease-out relative group`}
          >
            Research
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 ${underline} group-hover:w-full transition-all duration-300`}
            ></span>
          </Link>
          <Link href="/#contact" className="chip-pop">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[110] relative p-2 transition-colors duration-300 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Sliding Panel Menu */}
      <div
        className={`fixed inset-0 h-dvh z-[105] transition-opacity duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Right Side Panel */}
        <div
          className={`absolute top-0 right-0 h-dvh w-[80%] max-w-sm bg-[#050d17] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col pt-24 px-8 pb-10 overflow-y-auto border-l border-white/10 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 text-lg font-medium">
            <Link
              href="/#mission"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#38BDF8] transition-colors border-b border-white/10 pb-4"
            >
              Mission
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#38BDF8] transition-colors border-b border-white/10 pb-4"
            >
              Pricing
            </Link>
            <Link
              href="/research"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#38BDF8] transition-colors border-b border-white/10 pb-4"
            >
              Research
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="chip-pop mt-4 text-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
