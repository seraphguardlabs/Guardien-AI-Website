"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "../components/hero/Header";
import { Footer } from "../components/footer";

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

const COUNTRIES: Country[] = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
  { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦" },
  { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪" },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
  { name: "Indonesia", code: "ID", dialCode: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "PH", dialCode: "+63", flag: "🇵🇭" },
  { name: "South Korea", code: "KR", dialCode: "+82", flag: "🇰🇷" },
  { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬" },
  { name: "Kenya", code: "KE", dialCode: "+254", flag: "🇰🇪" },
  { name: "Egypt", code: "EG", dialCode: "+20", flag: "🇪🇬" },
  { name: "Turkey", code: "TR", dialCode: "+90", flag: "🇹🇷" },
  { name: "Poland", code: "PL", dialCode: "+48", flag: "🇵🇱" },
  { name: "Norway", code: "NO", dialCode: "+47", flag: "🇳🇴" },
  { name: "Denmark", code: "DK", dialCode: "+45", flag: "🇩🇰" },
  { name: "Finland", code: "FI", dialCode: "+358", flag: "🇫🇮" },
  { name: "Belgium", code: "BE", dialCode: "+32", flag: "🇧🇪" },
  { name: "Austria", code: "AT", dialCode: "+43", flag: "🇦🇹" },
  { name: "Portugal", code: "PT", dialCode: "+351", flag: "🇵🇹" },
  { name: "Argentina", code: "AR", dialCode: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "CL", dialCode: "+56", flag: "🇨🇱" },
  { name: "Colombia", code: "CO", dialCode: "+57", flag: "🇨🇴" },
  { name: "Pakistan", code: "PK", dialCode: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩" },
  { name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲" },
  { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭" },
  { name: "Vietnam", code: "VN", dialCode: "+84", flag: "🇻🇳" },
  { name: "Thailand", code: "TH", dialCode: "+66", flag: "🇹🇭" },
  { name: "Israel", code: "IL", dialCode: "+972", flag: "🇮🇱" },
  { name: "Greece", code: "GR", dialCode: "+30", flag: "🇬🇷" },
  { name: "Czech Republic", code: "CZ", dialCode: "+420", flag: "🇨🇿" },
  { name: "Romania", code: "RO", dialCode: "+40", flag: "🇷🇴" },
  { name: "Hungary", code: "HU", dialCode: "+36", flag: "🇭🇺" },
];

function getCountryCodeFromTimezone(): string | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Kolkata") || tz.includes("Calcutta")) return "IN";
    if (tz.includes("London")) return "GB";
    if (
      tz.includes("New_York") ||
      tz.includes("Los_Angeles") ||
      tz.includes("Chicago") ||
      tz.includes("Denver")
    )
      return "US";
    if (
      tz.includes("Toronto") ||
      tz.includes("Vancouver") ||
      tz.includes("Montreal")
    )
      return "CA";
    if (
      tz.includes("Sydney") ||
      tz.includes("Melbourne") ||
      tz.includes("Brisbane")
    )
      return "AU";
    if (tz.includes("Berlin")) return "DE";
    if (tz.includes("Paris")) return "FR";
    if (tz.includes("Dubai")) return "AE";
    if (tz.includes("Singapore")) return "SG";
    if (tz.includes("Tokyo")) return "JP";
    if (tz.includes("Seoul")) return "KR";
    if (tz.includes("Zurich")) return "CH";
    if (tz.includes("Amsterdam")) return "NL";
  } catch {
    // Ignore timezone detection errors
  }
  return null;
}

export default function JoinMissionPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    deviceType: "",
  });

  const [isDeviceDropdownOpen, setIsDeviceDropdownOpen] = useState(false);
  const deviceDropdownRef = useRef<HTMLDivElement>(null);

  const DEVICE_OPTIONS = [
    { label: "Android", value: "Android" },
    { label: "iOS", value: "iOS" },
  ];

  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Autoselect country based on Internet / IP & timezone on mount
  useEffect(() => {
    // 1. Immediate local timezone check
    const tzCountryCode = getCountryCodeFromTimezone();
    if (tzCountryCode) {
      const match = COUNTRIES.find((c) => c.code === tzCountryCode);
      if (match) setSelectedCountry(match);
    }

    // 2. Network IP detection
    const detectCountryFromIP = async () => {
      try {
        const res = await fetch("https://api.country.is/");
        if (!res.ok) throw new Error("Primary geo IP lookup failed");
        const data = await res.json();
        if (data && data.country) {
          const match = COUNTRIES.find(
            (c) => c.code.toUpperCase() === String(data.country).toUpperCase(),
          );
          if (match) {
            setSelectedCountry(match);
            return;
          }
        }
      } catch {
        // Fallback to secondary geo service
        try {
          const res2 = await fetch("https://ipwho.is/");
          if (!res2.ok) return;
          const data2 = await res2.json();
          if (data2 && data2.country_code) {
            const match = COUNTRIES.find(
              (c) =>
                c.code.toUpperCase() ===
                String(data2.country_code).toUpperCase(),
            );
            if (match) {
              setSelectedCountry(match);
            }
          }
        } catch {
          // Keep current fallback selection
        }
      }
    };

    detectCountryFromIP();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
      if (
        deviceDropdownRef.current &&
        !deviceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDeviceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isCountryDropdownOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isCountryDropdownOpen]);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.deviceType) {
      setErrorMessage("Please select your child's device type.");
      return;
    }

    setStatus("loading");

    try {
      const fullPhone = formData.phone.trim()
        ? `${selectedCountry.dialCode} ${formData.phone.trim()}`
        : "Not provided";

      const PRIMARY_KEY = "94142d17-70b4-4d93-a905-d0cb4624bf8b";
      const FALLBACK_KEY = "34670fe8-9954-4fbb-95aa-299d46e30876";

      const sendToWeb3Forms = async (accessKey: string) => {
        const submissionData = new FormData();
        submissionData.append("access_key", accessKey);
        submissionData.append("name", formData.name.trim());
        submissionData.append("email", formData.email.trim());
        submissionData.append("phone", fullPhone);
        submissionData.append("device_type", formData.deviceType);
        submissionData.append("subject", "New Join Mission Wishlist Submission");
        submissionData.append("from_name", "Guardien AI - Join Mission");
        submissionData.append(
          "message",
          `New Wishlist Registration:
Full Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Country: ${selectedCountry.name} (${selectedCountry.dialCode})
Phone: ${fullPhone}
Child's Device: ${formData.deviceType}`,
        );

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: submissionData,
        });
        return res.json();
      };

      let data: any = null;
      try {
        data = await sendToWeb3Forms(PRIMARY_KEY);
      } catch (primaryErr) {
        console.warn("Primary Web3Forms submission failed, attempting fallback key:", primaryErr);
      }

      // If primary submission was unsuccessful (e.g. limit exceeded, error response, or network failure), retry with fallback key
      if (!data || !data.success) {
        console.warn("Primary Web3Forms key failed or quota exceeded. Retrying with fallback key...");
        try {
          data = await sendToWeb3Forms(FALLBACK_KEY);
        } catch (fallbackErr) {
          console.error("Fallback Web3Forms submission also failed:", fallbackErr);
        }
      }

      if (data && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data?.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatus("error");
      setErrorMessage("An error occurred while submitting. Please try again.");
    }
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3.5 rounded-2xl text-[#14181F] placeholder-[#14181F]/40 bg-[#FAF9F5] border border-[#14181F]/10 focus:outline-none focus:ring-4 focus:ring-[#2F6FED]/15 focus:border-[#2F6FED] focus:bg-white transition-all text-sm font-medium";

  const iconWrapClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#14181F]/40";

  return (
    <main className="min-h-screen bg-[#060f1a] text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="blob top-10 left-10 w-96 h-96 opacity-25"
        style={{ backgroundColor: "#2F6FED" }}
      />
      <div
        className="blob top-1/3 -right-24 w-96 h-96 opacity-20"
        style={{ backgroundColor: "#38BDF8" }}
      />
      <div
        className="blob bottom-20 left-1/4 w-80 h-80 opacity-15"
        style={{ backgroundColor: "#2F6FED" }}
      />

      {/* Header */}
      <div className="relative z-50">
        <Header forceLight={false} />
      </div>

      {/* Main Content Area */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 flex-1 flex items-center">
        <div className="container-wide w-full">
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-white/60 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Unified Two-Column Card */}
          <div className="relative mx-auto max-w-6xl rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
              {/* Left Column: Deep Navy Brand & Mission Story Panel */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1c2e] via-[#0d2338] to-[#2F6FED] p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden rounded-t-[2.5rem] lg:rounded-tr-none lg:rounded-l-[2.5rem]">
                {/* Glow effects */}
                <div className="absolute -top-14 -right-14 w-52 h-52 bg-[#38BDF8]/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#2F6FED]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold tracking-wider uppercase mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    Early Access Wishlist
                  </div>

                  <h1
                    className="headline-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-white leading-[1.1] mb-5"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Join Our Mission For A Safer Digital Childhood
                  </h1>

                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
                    Children are the world's most valuable assets, and their
                    digital safety deserves the highest priority. We're engineering
                    ethical, privacy-first AI to empower parents and protect
                    children without invasive surveillance.
                  </p>

                  {/* Wishlist Perks */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#38BDF8]">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Priority Beta Access
                        </h4>
                        <p className="text-xs text-white/70">
                          Be the first to protect your family devices with our
                          next-gen AI.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#38BDF8]">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Building a Safer Digital Future
                        </h4>
                        <p className="text-xs text-white/70">
                          Help us build a safer digital world. Share your feedback to shape better child-safety feature
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean White Form Panel */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center rounded-b-[2.5rem] lg:rounded-bl-none lg:rounded-r-[2.5rem]">
                {status === "success" ? (
                  <div className="py-8 text-center flex flex-col items-center animate-fadeIn">
                    <div className="w-20 h-20 rounded-full bg-[#2F6FED]/10 border-2 border-[#2F6FED] flex items-center justify-center text-[#2F6FED] mb-6 shadow-lg shadow-[#2F6FED]/15">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="inline-block px-4 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
                      Priority Reserved
                    </span>

                    <h2 className="headline-bold text-3xl sm:text-4xl text-[#14181F] mb-3">
                      You&apos;re On The Wishlist!
                    </h2>

                    <p className="text-[#14181F]/70 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you,{" "}
                      <span className="text-[#14181F] font-semibold">
                        {formData.name}
                      </span>
                      ! We&apos;ve reserved your priority spot in our mission.
                      We&apos;ll notify you at{" "}
                      <span className="text-[#2F6FED] font-semibold">
                        {formData.email}
                      </span>{" "}
                      as soon as our private beta launches.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xs">
                      <Link
                        href="/"
                        className="chip-pop w-full py-3.5 text-center text-sm font-semibold shadow-md shadow-[#2F6FED]/25"
                      >
                        Return to Homepage
                      </Link>
                      <Link
                        href="/research"
                        className="btn-pill bg-[#FAF9F5] border border-[#14181F]/15 text-[#14181F] hover:bg-[#14181F]/5 w-full py-3.5 text-center text-sm font-medium"
                      >
                        Read Our Research
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8">
                      <h2 className="headline-bold text-2xl sm:text-3xl text-[#14181F] mb-2">
                        Reserve Your Early Spot
                      </h2>
                      <p className="text-sm text-[#14181F]/60">
                        Fill in your details below to secure your family&apos;s
                        priority place on our early wishlist.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-3">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="join-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#14181F]/70 mb-2"
                        >
                          Your Full Name{" "}
                          <span className="text-[#2F6FED]">*</span>
                        </label>
                        <div className="relative">
                          <span className={iconWrapClass}>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.75}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </span>
                          <input
                            id="join-name"
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className={inputClass}
                            autoComplete="name"
                          />
                        </div>
                      </div>

                      {/* Phone with Country Code Selector (Optional) */}
                      <div>
                        <label
                          htmlFor="join-phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#14181F]/70 mb-2"
                        >
                          Phone Number{" "}
                          <span className="text-[#14181F]/40 text-xs font-normal normal-case ml-1">
                            (Optional)
                          </span>
                        </label>
                        <div className="flex gap-2.5 items-center">
                          {/* Country Code Picker Dropdown */}
                          <div className="relative" ref={dropdownRef}>
                            <button
                              type="button"
                              onClick={() => {
                                setIsCountryDropdownOpen(
                                  !isCountryDropdownOpen,
                                );
                                setCountrySearch("");
                              }}
                              className="h-[50px] px-3.5 rounded-2xl bg-[#FAF9F5] border border-[#14181F]/10 hover:border-[#14181F]/25 focus:outline-none focus:ring-4 focus:ring-[#2F6FED]/15 focus:border-[#2F6FED] flex items-center gap-2 text-[#14181F] transition-all text-sm font-medium cursor-pointer"
                              aria-haspopup="listbox"
                              aria-expanded={isCountryDropdownOpen}
                            >
                              <span className="text-lg leading-none">
                                {selectedCountry.flag}
                              </span>
                              <span className="text-xs font-semibold text-[#14181F]">
                                {selectedCountry.dialCode}
                              </span>
                              <svg
                                className={`w-3.5 h-3.5 text-[#14181F]/40 transition-transform duration-200 ${
                                  isCountryDropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isCountryDropdownOpen && (
                              <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 max-h-72 bg-white border border-[#14181F]/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col">
                                {/* Search input inside dropdown */}
                                <div className="p-2.5 border-b border-[#14181F]/08 bg-[#FAF9F5]">
                                  <div className="relative">
                                    <input
                                      ref={searchInputRef}
                                      type="text"
                                      placeholder="Search country or code..."
                                      value={countrySearch}
                                      onChange={(e) =>
                                        setCountrySearch(e.target.value)
                                      }
                                      className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white text-[#14181F] placeholder-[#14181F]/40 text-xs border border-[#14181F]/10 focus:outline-none focus:ring-1 focus:ring-[#2F6FED]"
                                    />
                                    <svg
                                      className="w-3.5 h-3.5 text-[#14181F]/40 absolute left-2.5 top-1/2 -translate-y-1/2"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      />
                                    </svg>
                                  </div>
                                </div>

                                {/* List of countries */}
                                <div className="overflow-y-auto flex-1 p-1 max-h-56 scrollbar-hide">
                                  {filteredCountries.length === 0 ? (
                                    <div className="p-4 text-center text-xs text-[#14181F]/50">
                                      No matching country found
                                    </div>
                                  ) : (
                                    filteredCountries.map((c) => (
                                      <button
                                        key={c.code + c.dialCode}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setIsCountryDropdownOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                                          selectedCountry.code === c.code &&
                                          selectedCountry.dialCode ===
                                            c.dialCode
                                            ? "bg-[#2F6FED] text-white"
                                            : "text-[#14181F] hover:bg-[#FAF9F5]"
                                        }`}
                                      >
                                        <div className="flex items-center gap-2.5 truncate mr-2">
                                          <span className="text-base">
                                            {c.flag}
                                          </span>
                                          <span className="truncate">
                                            {c.name}
                                          </span>
                                        </div>
                                        <span
                                          className={`font-semibold flex-shrink-0 text-[11px] ${
                                            selectedCountry.code === c.code &&
                                            selectedCountry.dialCode ===
                                              c.dialCode
                                              ? "text-white"
                                              : "text-[#14181F]/60"
                                          }`}
                                        >
                                          {c.dialCode}
                                        </span>
                                      </button>
                                    ))
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* National Phone Input */}
                          <div className="relative flex-1">
                            <span className={iconWrapClass}>
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.75}
                                  d="M3 5.5c0 8.5 6.9 15.5 15.5 15.5.9 0 1.5-.7 1.5-1.5v-3l-4.5-1.5-1.5 1.5c-2-1-4-3-5-5l1.5-1.5L9 5.5H6c-.8 0-1.5.7-1.5 1.5z"
                                />
                              </svg>
                            </span>
                            <input
                              id="join-phone"
                              type="tel"
                              name="phone"
                              placeholder="Phone number (optional)"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className={inputClass}
                              autoComplete="tel-national"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Mail ID / Email Field */}
                      <div>
                        <label
                          htmlFor="join-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#14181F]/70 mb-2"
                        >
                          Mail ID <span className="text-[#2F6FED]">*</span>
                        </label>
                        <div className="relative">
                          <span className={iconWrapClass}>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.75}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </span>
                          <input
                            id="join-email"
                            type="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className={inputClass}
                            autoComplete="email"
                          />
                        </div>
                      </div>

                      {/* Child's Device Type Field */}
                      <div>
                        <label
                          htmlFor="join-device-type"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#14181F]/70 mb-2"
                        >
                          Child's Device Type{" "}
                          <span className="text-[#2F6FED]">*</span>
                        </label>
                        <div className="relative" ref={deviceDropdownRef}>
                          <button
                            type="button"
                            onClick={() => {
                              setIsDeviceDropdownOpen(
                                !isDeviceDropdownOpen,
                              );
                            }}
                            className="h-[50px] px-4 rounded-2xl bg-[#FAF9F5] border border-[#14181F]/10 hover:border-[#14181F]/25 focus:outline-none focus:ring-4 focus:ring-[#2F6FED]/15 focus:border-[#2F6FED] flex items-center gap-2 text-[#14181F] transition-all text-sm font-medium cursor-pointer w-full justify-between"
                            aria-haspopup="listbox"
                            aria-expanded={isDeviceDropdownOpen}
                          >
                            <div className="flex items-center gap-2">
                              {formData.deviceType === "Android" ? (
                                <span className="flex items-center gap-1 text-[#689F38] text-sm font-medium">
                                  <svg
                                    viewBox="0 0 640 640"
                                    className="w-4 h-4"
                                    fill="currentColor"
                                  >
                                    <path d="M131.2 125.9C136.5 125.4 141.8 126.5 146.5 128.9C151.2 131.3 155.1 135.1 157.8 139.7C174.8 169.2 192 198.6 209 228.1C212.5 226.7 216 225.4 219.5 224.2C250.8 213.3 283.7 207.6 316.9 207.3C317.9 207.3 319 207.3 320.1 207.3C358.2 207.3 396.3 214.3 431.7 228.4L483 139.7C484.8 136.5 487.3 133.7 490.2 131.5C493.1 129.3 496.4 127.6 500 126.7C503.1 125.9 506.4 125.6 509.6 125.9C513.8 126.3 517.9 127.6 521.5 129.7C525.5 132.1 528.8 135.4 531.2 139.4C533.2 142.8 534.5 146.6 535 150.6C535.5 154.6 535.1 158.6 533.8 162.3C533.2 164.2 532.4 166 531.4 167.8L481.7 253.6C501.2 265.8 519.3 280.1 535.6 296.4C547.9 308.6 559.1 321.8 569.1 335.9C577.3 347.4 584.7 359.5 591.3 372.1C608.8 405.7 619.9 442.6 624 480.2L16 480.2C20.1 442.5 31.2 405.7 48.7 372.1C63.2 344.2 82.1 318.6 104.4 296.4C120.9 280 139.1 265.5 158.9 253.3L109.4 167.9C105.7 161.5 104.7 153.8 106.6 146.7C108.5 139.6 113 133.6 119.3 129.9C122.9 127.7 127 126.4 131.2 126.1zM198.5 341.7C186.3 333.6 168.4 339.2 158.4 354.2C148.4 369.2 150.2 388 162.3 396.1C174.4 404.2 192.4 398.6 202.4 383.6C212.4 368.6 210.6 349.8 198.5 341.7zM482.1 354.2C472.1 339.2 454.2 333.6 442 341.7C429.8 349.8 428.1 368.6 438.1 383.6C448.1 398.6 466 404.2 478.2 396.1C490.4 388 492.1 369.2 482.1 354.2z" />
                                  </svg>
                                  Android
                                </span>
                              ) : formData.deviceType === "iOS" ? (
                                <span className="flex items-center gap-1 text-black text-sm font-medium">
                                  <svg
                                    viewBox="0 0 640 640"
                                    className="w-4 h-4"
                                    fill="currentColor"
                                  >
                                    <path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" />
                                  </svg>
                                  iOS
                                </span>
                              ) : (
                                <span className="text-[#14181F] text-sm font-medium">
                                  Select device type
                                </span>
                              )}
                            </div>
                            <svg
                              className={`w-3.5 h-3.5 text-[#14181F]/40 transition-transform duration-200 ${
                                isDeviceDropdownOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {/* Dropdown Menu */}
                          {isDeviceDropdownOpen && (
                            <div className="absolute left-0 top-full mt-2 w-full sm:w-60 max-h-48 bg-white border border-[#14181F]/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col">
                              {DEVICE_OPTIONS.map((opt) => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      deviceType: opt.value,
                                    });
                                    setIsDeviceDropdownOpen(false);
                                  }}
                                  className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm transition-colors cursor-pointer ${
                                    formData.deviceType === opt.value
                                      ? "bg-[#2F6FED] text-white"
                                      : "text-[#14181F] hover:bg-[#FAF9F5]"
                                  }`}
                                >
                                <span className="flex items-center gap-1">
                                  {opt.value === "Android" ? (
                                    <>
                                      <svg
                                        viewBox="0 0 640 640"
                                        className="w-3 h-3"
                                        fill="currentColor"
                                      >
                                        <path d="M131.2 125.9C136.5 125.4 141.8 126.5 146.5 128.9C151.2 131.3 155.1 135.1 157.8 139.7C174.8 169.2 192 198.6 209 228.1C212.5 226.7 216 225.4 219.5 224.2C250.8 213.3 283.7 207.6 316.9 207.3C317.9 207.3 319 207.3 320.1 207.3C358.2 207.3 396.3 214.3 431.7 228.4L483 139.7C484.8 136.5 487.3 133.7 490.2 131.5C493.1 129.3 496.4 127.6 500 126.7C503.1 125.9 506.4 125.6 509.6 125.9C513.8 126.3 517.9 127.6 521.5 129.7C525.5 132.1 528.8 135.4 531.2 139.4C533.2 142.8 534.5 146.6 535 150.6C535.5 154.6 535.1 158.6 533.8 162.3C533.2 164.2 532.4 166 531.4 167.8L481.7 253.6C501.2 265.8 519.3 280.1 535.6 296.4C547.9 308.6 559.1 321.8 569.1 335.9C577.3 347.4 584.7 359.5 591.3 372.1C608.8 405.7 619.9 442.6 624 480.2L16 480.2C20.1 442.5 31.2 405.7 48.7 372.1C63.2 344.2 82.1 318.6 104.4 296.4C120.9 280 139.1 265.5 158.9 253.3L109.4 167.9C105.7 161.5 104.7 153.8 106.6 146.7C108.5 139.6 113 133.6 119.3 129.9C122.9 127.7 127 126.4 131.2 126.1zM198.5 341.7C186.3 333.6 168.4 339.2 158.4 354.2C148.4 369.2 150.2 388 162.3 396.1C174.4 404.2 192.4 398.6 202.4 383.6C212.4 368.6 210.6 349.8 198.5 341.7zM482.1 354.2C472.1 339.2 454.2 333.6 442 341.7C429.8 349.8 428.1 368.6 438.1 383.6C448.1 398.6 466 404.2 478.2 396.1C490.4 388 492.1 369.2 482.1 354.2z" />
                                      </svg>
                                      <span className="text-sm">Android</span>
                                    </>
                                  ) : (
                                    <>
                                      <svg
                                        viewBox="0 0 640 640"
                                        className="w-3 h-3"
                                        fill="currentColor"
                                      >
                                        <path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" />
                                      </svg>
                                      <span className="text-sm">iOS</span>
                                    </>
                                  )}
                                </span>
                                  {formData.deviceType === opt.value && (
                                    <svg
                                      className="w-4 h-4 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Submit Button: Join the Wishlist */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="chip-pop w-full py-4 text-base font-semibold shadow-lg shadow-[#2F6FED]/25 hover:shadow-[#2F6FED]/40 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Securing Your Place...
                          </>
                        ) : (
                          <>
                            <span>Join the Wishlist</span>
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
