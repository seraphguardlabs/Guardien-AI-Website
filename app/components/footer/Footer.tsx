export default function Footer() {
  return (
    <footer
      className="w-full py-4 relative"
      style={{
        background: "linear-gradient(66deg, #001315 25.78%, #00676D 69.36%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 justify-between mb-8">
          {/* Contact Info */}
          <div>
            <h3
              className="text-white text-sm mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contact us
            </h3>
            <div className="space-y-1">
              <p
                className="text-white/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                +91 8954578
              </p>
              <a
                href="mailto:Contact@GuardianAI.Com"
                className="text-white/70 text-xs hover:text-white transition-colors block"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Contact@GuardianAI.Com
              </a>
            </div>
          </div>

          {/* North America */}
          <div>
            <h3
              className="text-white text-sm mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              North America:
            </h3>
            <div className="space-y-1">
              <p
                className="text-white/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                United States
              </p>
              <p
                className="text-white/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Canada
              </p>
            </div>
          </div>

          {/* Europe */}
          <div>
            <h3
              className="text-white text-sm mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Europe:
            </h3>
            <div className="space-y-1">
              <p
                className="text-white/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                United Kingdom
              </p>
              <p
                className="text-white/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Portugal
              </p>
            </div>
          </div>

          {/* Latin America */}
          <div>
            <h3
              className="text-white text-sm mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Latin America:
            </h3>
            <div className="space-y-1">
              <p
                className="text-white/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Argentina
              </p>
            </div>
          </div>

          {/* Asia */}
          <div>
            <h3
              className="text-white text-sm mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Asia:
            </h3>
            <div className="space-y-1">
              <p
                className="text-white/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10">
          <p
            className="text-white/70 text-xs"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Copyright © 2026 GuardianAI® All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
