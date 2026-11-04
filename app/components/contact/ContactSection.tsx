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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        organization: formData.phone,
        message: formData.message,
      };

      const res = await fetch("https://dev.seraphguardlabs.com/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        alert("Message sent successfully!");
      } else {
        setStatus("error");
        alert(data.errors?.join("\n") || data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Contact API Error:", error);
      setStatus("error");
      alert("Failed to send message. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3.5 rounded-2xl text-[#14181F] placeholder-[#14181F]/40 bg-[#FAF9F5] border border-[#14181F]/10 focus:outline-none focus:ring-4 focus:ring-[#2F6FED]/15 focus:border-[#2F6FED] focus:bg-white transition-all text-sm font-medium";

  const iconWrapClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#14181F]/40";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden bg-[#060f1a] py-20 md:py-28 px-4 md:px-8 lg:px-12"
    >
      {/* Background ambient decorative blobs */}
      <div className="blob top-1/4 -left-20 w-80 h-80 opacity-20" style={{ backgroundColor: "#2F6FED" }} />
      <div className="blob bottom-10 -right-20 w-80 h-80 opacity-15" style={{ backgroundColor: "#38BDF8" }} />

      <div
        className={`relative mx-auto max-w-6xl rounded-[2.5rem] overflow-hidden bg-white shadow-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* Left Column: Deep Navy / Vibrant Blue Brand Info Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1c2e] via-[#0d2338] to-[#2F6FED] p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden rounded-t-[2.5rem] lg:rounded-tr-none lg:rounded-l-[2.5rem] border-t border-l border-b border-white/15">
            {/* Decorative background glow */}
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#2F6FED]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#38BDF8]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <p className="eyebrow text-[#38BDF8] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                Get In Touch
              </p>
              <h2 className="headline-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Let&apos;s Start a Conversation
              </h2>
              <p className="hidden sm:block text-white/70 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                Have questions about protecting your child online? Our safety specialists are here to guide you to the perfect plan.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4 mb-10">
                <a
                  href="tel:+917306372698"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/08 border border-white/12 hover:bg-white/15 transition-all duration-300 group"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#2F6FED] flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.5c0 8.5 6.9 15.5 15.5 15.5.9 0 1.5-.7 1.5-1.5v-3l-4.5-1.5-1.5 1.5c-2-1-4-3-5-5l1.5-1.5L9 5.5H6c-.8 0-1.5.7-1.5 1.5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="block text-xs text-white/60 font-medium">Direct Phone Line</span>
                    <span className="text-sm font-semibold text-white">+91 73063 72698</span>
                  </div>
                </a>

                <a
                  href="mailto:support@guardienai.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/08 border border-white/12 hover:bg-white/15 transition-all duration-300 group"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#2F6FED] flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-white/60 font-medium">Email Support</span>
                    <span className="text-sm font-semibold text-white truncate block">support@guardienai.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex items-center gap-3 text-xs text-white/80 font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />
              </span>
              <span>Fast Response</span>
            </div>
          </div>

          {/* Right Column: Clean Light Form Panel with Dark Blue Stroke */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center rounded-b-[2.5rem] lg:rounded-bl-none lg:rounded-r-[2.5rem] border-t-2 border-r-2 border-b-2 border-[#0a1c2e] lg:border-l-0">
            <div className="mb-8">
              <h3 className="headline-bold text-2xl sm:text-3xl text-[#14181F] mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-[#14181F]/60">
                Fill out the form below and our team will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="relative">
                  <span className={iconWrapClass}>
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <span className={iconWrapClass}>
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <span className={iconWrapClass}>
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5.5c0 8.5 6.9 15.5 15.5 15.5.9 0 1.5-.7 1.5-1.5v-3l-4.5-1.5-1.5 1.5c-2-1-4-3-5-5l1.5-1.5L9 5.5H6c-.8 0-1.5.7-1.5 1.5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <span className={`${iconWrapClass} !top-6`}>
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z" />
                  </svg>
                </span>
                <textarea
                  name="message"
                  placeholder="How can we help protect your family?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClass} resize-none pt-3.5`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 px-8 rounded-2xl bg-[#2F6FED] hover:bg-[#2055ca] text-white font-semibold text-sm shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  status === "loading" ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

