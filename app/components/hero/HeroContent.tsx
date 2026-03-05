"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Making The Digital World Safer For Children";
  const typingSpeed = 80; // milliseconds per character
  const erasingSpeed = 50; // milliseconds per character when erasing
  const pauseDuration = 2000; // pause at end before erasing

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    let isTyping = true;

    const startTyping = () => {
      const typeInterval = setInterval(() => {
        if (isTyping) {
          // Typing phase
          if (currentIndex <= fullText.length) {
            setTypedText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            // Finished typing, pause then start erasing
            clearInterval(typeInterval);
            setTimeout(() => {
              isTyping = false;
              currentIndex = fullText.length;
              startErasing();
            }, pauseDuration);
          }
        }
      }, typingSpeed);
    };

    const startErasing = () => {
      const eraseInterval = setInterval(() => {
        if (currentIndex >= 0) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex--;
        } else {
          // Finished erasing, start typing again
          clearInterval(eraseInterval);
          isTyping = true;
          currentIndex = 0;
          setTimeout(startTyping, 500);
        }
      }, erasingSpeed);
    };

    const initialTimeout = setTimeout(() => {
      startTyping();
    }, 500);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, [isVisible]);

  return (
    <div className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center min-h-screen">
        <div
          className={`max-w-2xl py-20 transition-all duration-1000 ease-out flex flex-col items-center text-center md:items-start md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/Vector 92.svg"
              alt="Lightning icon"
              className="w-5 h-auto"
            />
            <span className="text-white font-light tracking-wide">
              BOOST CHILD SAFETY
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ fontFamily: "var(--font-caudex)", minHeight: "8rem" }}
          >
            {typedText.split(" ").map((word, index, array) => {
              // Insert line break after "Digital"
              if (word === "Digital") {
                return (
                  <span key={index}>
                    {word} <br />
                  </span>
                );
              }
              return (
                <span key={index}>
                  {word}
                  {index < array.length - 1 ? " " : ""}
                </span>
              );
            })}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light transition-all duration-1000 delay-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            A trusted partner for parents - protecting{" "}
            <br className="hidden md:block" />
            children while respecting privacy.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-1000 delay-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 items-center justify-center md:items-start md:justify-start transition-all duration-1000 delay-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Link
                href="#early-access"
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl transition-colors text-center self-center sm:self-auto"
              >
                Request Early Access
              </Link>

              <Link
                href="#demo"
                className="px-6 py-4 bg-white hover:bg-white/50 text-[#222] rounded-2xl backdrop-blur-sm border border-white/50 transition-colors text-center self-center sm:self-auto"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
