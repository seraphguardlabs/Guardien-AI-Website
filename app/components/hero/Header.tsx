"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = isScrolled ? "text-[#001A2D]/80" : "text-white/90";
  const linkHover = isScrolled ? "hover:text-[#001A2D]" : "hover:text-white";
  const underline = isScrolled ? "bg-[#001A2D]" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_24px_rgba(0,26,45,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/#" className="flex items-center cursor-pointer z-50">
          {isScrolled ? (
            <img
              src="/guardien-ai-word-dark.svg"
              alt="Guardien AI"
              className="w-28 sm:w-[150px] h-auto max-h-10"
            />
          ) : (
            <img
              src="/guardien-ai-word-light.svg"
              alt="Guardien AI"
              className="w-28 sm:w-[150px] h-auto max-h-10"
            />
          )}
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
          <Link href="/#contact" className="btn-pill btn-pill-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-[110] relative p-2 transition-colors duration-300 ${
            isScrolled ? "text-[#001A2D]" : "text-white"
          }`}
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
        className={`fixed inset-0 z-[105] transition-opacity duration-300 ease-in-out md:hidden ${
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
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col pt-24 px-8 border-l border-[#001A2D]/10 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 text-lg font-medium">
            <Link
              href="/#mission"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#001A2D]/80 hover:text-[#001A2D] transition-colors border-b border-[#001A2D]/10 pb-4"
            >
              Mission
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#001A2D]/80 hover:text-[#001A2D] transition-colors border-b border-[#001A2D]/10 pb-4"
            >
              Pricing
            </Link>
            <Link
              href="/research"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#001A2D]/80 hover:text-[#001A2D] transition-colors border-b border-[#001A2D]/10 pb-4"
            >
              Research
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-pill btn-pill-primary mt-4 text-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
