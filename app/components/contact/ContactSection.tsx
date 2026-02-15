"use client";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 overflow-hidden"
      style={{ backgroundColor: "#002D34" }}
    >
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="/green-aurora-with-aurora-borealis-visible-background 1.svg"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl text-white text-center mb-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-caudex)" }}
        >
          Contact us
        </h2>

        {/* Description */}
        <p
          className={`text-white/70 text-center mb-12 text-sm md:text-base transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim aliquam massa id pulvinar. Fusce eleifend arcu metus, eget
          maximus purus vestibulum vel.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-4 transition-all duration-1000 delay-400 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name..."
            value={formData.name}
            onChange={handleChange}
            className="w-full px-6 py-4 text-[#002D34] placeholder-[#002D34]/50 focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all"
            style={{
              fontFamily: "var(--font-poppins)",
              borderRadius: "30px 0",
              border: "1px solid rgba(0, 1, 46, 0.05)",
              background: "#DBE3E5",
            }}
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 text-[#002D34] placeholder-[#002D34]/50 focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all"
            style={{
              fontFamily: "var(--font-poppins)",
              borderRadius: "30px 0",
              border: "1px solid rgba(0, 1, 46, 0.05)",
              background: "#DBE3E5",
            }}
          />

          {/* Phone Input */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone..."
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-4 text-[#002D34] placeholder-[#002D34]/50 focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all"
            style={{
              fontFamily: "var(--font-poppins)",
              borderRadius: "30px 0",
              border: "1px solid rgba(0, 1, 46, 0.05)",
              background: "#DBE3E5",
            }}
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-6 py-4 text-[#002D34] placeholder-[#002D34]/50 focus:outline-none focus:ring-2 focus:ring-orange-600/50 resize-none transition-all"
            style={{
              fontFamily: "var(--font-poppins)",
              borderRadius: "30px 0",
              border: "1px solid rgba(0, 1, 46, 0.05)",
              background: "#DBE3E5",
            }}
          />

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-24 py-2 rounded-2xl text-white hover:bg-orange-700 hover:shadow-lg transition-all duration-300 font-light transform hover:scale-105"
              style={{
                backgroundColor: "#FE763C",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
