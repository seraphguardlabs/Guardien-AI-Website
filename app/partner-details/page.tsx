import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer/Footer";

export default function PartnerDetailsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#E4EDF4" }}>
      {/* Header */}
      <header
        className="py-4"
        style={{ backgroundColor: "rgba(0, 26, 45, 0.50)" }}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6">
          {/* Logo */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/guardien-ai-icon-512.png"
                alt=""
                className="h-8 w-8 flex-shrink-0"
              />
              <img
                src="/guardien-ai-word-light-solid.svg"
                alt="Guardien AI"
                width={130}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-14 font-light">
            <Link
              href="/#mission"
              className="text-white/90 hover:text-white transition-colors"
            >
              Mission
            </Link>
            <Link
              href="/#pricing"
              className="text-white/90 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/research"
              className="text-white/90 hover:text-white transition-colors"
            >
              Research
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2 bg-white text-[#001a2d] rounded-2xl hover:bg-white/90 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Image Section */}
      <section className="pt-12 pb-8" style={{ background: "#E4EDF4" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/Group 1000002418.png"
              alt="Team collaboration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12" style={{ background: "#E4EDF4" }}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-center mb-8"
            style={{
              fontFamily: "var(--font-caudex)",
              color: "#001a2d",
            }}
          >
            Every Threat, One Shield
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-center mb-12"
            style={{
              fontFamily: "var(--font-poppins)",
              color: "#001a2d",
            }}
          >
            A trusted partner for parents protecting children while
          </p>

          {/* Body Content - Multiple Paragraphs */}
          <div
            className="space-y-6 text-sm md:text-base"
            style={{
              fontFamily: "var(--font-poppins)",
              color: "#001a2d",
              lineHeight: "1.8",
            }}
          >
            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>

            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra,
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
