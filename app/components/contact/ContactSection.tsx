"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in name, email, and message.");
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(
        "service_2g3mh9v",
        "template_n10v14p",
        {
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "YD2Gz2fqz2GrsaOIj",
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Emailjs error:", error);
      setStatus("error");
      alert("Failed to send message. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  const inputClass =
    "w-full pl-12 pr-5 py-3.5 rounded-xl text-[#001a2d] placeholder-[#001a2d]/35 bg-[#E4EDF4]/60 border border-[#001a2d]/10 focus:outline-none focus:ring-2 focus:ring-[#025794]/50 focus:border-transparent focus:bg-white transition-all text-sm";

  const iconWrapClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#001a2d]/40";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden bg-[#E4EDF4] py-16 md:py-24 px-4 md:px-8 lg:px-12"
    >
      <div
        className={`relative mx-auto max-w-6xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_40px_90px_-40px_rgba(0,26,45,0.45)] transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left — dark info panel */}
          <div className="relative lg:col-span-2 bg-[#001a2d] flex flex-col justify-center px-8 py-16 md:px-12 lg:px-10 overflow-hidden">
            {/* decorative glow */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: "#9fbfd6" }}
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-16 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#025794" }}
            />

            <div className="relative">
              <p className="eyebrow text-[#9FBFD6] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9FBFD6]" />
                Get In Touch
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-[2.75rem] text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-caudex)" }}
              >
                Let&apos;s Start a
                <br />
                Conversation
              </h2>
              <p className="text-white/55 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                Have questions about protecting your child online? We&apos;re
                here to help you find the right plan for your family.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-white/85 text-sm">
                  <span className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4.5 h-4.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9fbfd6"
                      strokeWidth={1.75}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5.5c0 8.5 6.9 15.5 15.5 15.5.9 0 1.5-.7 1.5-1.5v-3l-4.5-1.5-1.5 1.5c-2-1-4-3-5-5l1.5-1.5L9 5.5H6c-.8 0-1.5.7-1.5 1.5z"
                      />
                    </svg>
                  </span>
                  +91 8954578
                </div>
                <a
                  href="mailto:Contact@GuardienAI.Com"
                  className="flex items-center gap-4 text-white/85 hover:text-white text-sm transition-colors group"
                >
                  <span className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/14 transition-colors">
                    <svg
                      className="w-4.5 h-4.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9fbfd6"
                      strokeWidth={1.75}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6.5A1.5 1.5 0 015.5 5h13A1.5 1.5 0 0120 6.5v11a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 17.5v-11z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 6l7.5 6 7.5-6"
                      />
                    </svg>
                  </span>
                  Contact@GuardienAI.Com
                </a>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/10 text-white/60 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9fbfd6] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9fbfd6]" />
                </span>
                We typically respond within 24 hours
              </div>
            </div>
          </div>

          {/* Right — white form panel */}
          <div className="lg:col-span-3 bg-white flex items-center justify-center px-8 py-16 md:px-12 lg:px-16">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <div className="relative">
                <span className={iconWrapClass}>
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <span className={iconWrapClass}>
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A1.5 1.5 0 015.5 5h13A1.5 1.5 0 0120 6.5v11a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 17.5v-11z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6l7.5 6 7.5-6" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <span className={iconWrapClass}>
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5c0 8.5 6.9 15.5 15.5 15.5.9 0 1.5-.7 1.5-1.5v-3l-4.5-1.5-1.5 1.5c-2-1-4-3-5-5l1.5-1.5L9 5.5H6c-.8 0-1.5.7-1.5 1.5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <span className={`${iconWrapClass} !top-6`}>
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5h16v11a1.5 1.5 0 01-1.5 1.5H8l-4 3.5v-16z" />
                  </svg>
                </span>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} resize-none pt-3.5`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`btn-pill btn-pill-primary w-full ${
                    status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
