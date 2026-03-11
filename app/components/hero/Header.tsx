"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{ backgroundColor: "rgba(0, 21, 23, 0.50)" }}
    >
      <nav className="flex items-center justify-between w-screen md:max-w-screen  px-4 sm:px-6 lg:px-42">
        {/* Logo */}
        <Link href="/#" className="flex flex-col cursor-pointer z-50">
          <img
            src="/Vector.svg"
            alt="GuardienAI"
            className="relative z-50 w-32 sm:w-[180px] h-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-14 font-light">
          <Link
            href="/#mission"
            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300 ease-out relative group"
          >
            Mission
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#pricing"
            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300 ease-out relative group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/research"
            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300 ease-out relative group"
          >
            Research
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-2 bg-white text-[#142E39] rounded-2xl hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 relative p-2"
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
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Overlay Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Right Side Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#001517] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col pt-24 px-8 border-l border-white/10 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8 font-light text-xl">
            <Link
              href="/#mission"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4"
            >
              Mission
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4"
            >
              Pricing
            </Link>
            <Link
              href="/research"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4"
            >
              Research
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-2 py-4 bg-white text-[#142E39] rounded-2xl hover:bg-white/90 transition-colors font-medium text-center shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
