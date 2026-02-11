import Link from "next/link";

export default function Header() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 py-4"
      style={{ backgroundColor: "rgba(0, 21, 23, 0.50)" }}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col">
          <img
            src="/Vector.svg"
            alt="Guardian AI Parental Control"
            width={180}
            height={40}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-14 font-light">
          <Link
            href="#mission"
            className="text-white/90 hover:text-white transition-colors"
          >
            Mission
          </Link>
          <Link
            href="#pricing"
            className="text-white/90 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#research"
            className="text-white/90 hover:text-white transition-colors"
          >
            Research
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 bg-white text-[#142E39] rounded-2xl hover:bg-white/90 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
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
        </button>
      </nav>
    </header>
  );
}
