import Link from "next/link";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{ backgroundColor: "rgba(0, 21, 23, 0.50)" }}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo */}
        <Link href="/#" className="flex flex-col cursor-pointer">
          <img
            src="/Vector.svg"
            alt="Guardian AI Parental Control"
            width={180}
            height={40}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-14 font-light">
          <Link
            href="#mission"
            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300 ease-out relative group"
          >
            Mission
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#pricing"
            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300 ease-out relative group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#research"
            className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300 ease-out relative group"
          >
            Research
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 bg-white text-[#142E39] rounded-2xl hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out font-medium"
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
