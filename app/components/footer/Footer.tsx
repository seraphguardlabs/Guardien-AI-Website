export default function Footer() {
  return (
    <footer
      className="w-full pt-14 pb-6 relative"
      style={{
        background: "#2F6FED",
      }}
    >
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 justify-between mb-10">
          {/* Contact Info */}
          <div>
            <h3
              className="text-[#04101f] text-sm font-semibold mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contact us
            </h3>
            <div className="space-y-1">
              <p
                className="text-[#04101f]/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                +91 8954578
              </p>
              <a
                href="mailto:Contact@GuardienAI.Com"
                className="text-[#04101f]/70 text-xs hover:text-[#04101f] transition-colors block"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Contact@GuardienAI.Com
              </a>
            </div>
          </div>

          {/* North America */}
          <div>
            <h3
              className="text-[#04101f] text-sm font-semibold mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              North America:
            </h3>
            <div className="space-y-1">
              <p
                className="text-[#04101f]/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                United States
              </p>
              <p
                className="text-[#04101f]/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Canada
              </p>
            </div>
          </div>

          {/* Europe */}
          <div>
            <h3
              className="text-[#04101f] text-sm font-semibold mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Europe:
            </h3>
            <div className="space-y-1">
              <p
                className="text-[#04101f]/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                United Kingdom
              </p>
              <p
                className="text-[#04101f]/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Portugal
              </p>
            </div>
          </div>

          {/* Latin America */}
          <div>
            <h3
              className="text-[#04101f] text-sm font-semibold mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Latin America:
            </h3>
            <div className="space-y-1">
              <p
                className="text-[#04101f]/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Argentina
              </p>
            </div>
          </div>

          {/* Asia */}
          <div>
            <h3
              className="text-[#04101f] text-sm font-semibold mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Asia:
            </h3>
            <div className="space-y-1">
              <p
                className="text-[#04101f]/70 text-xs"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                India
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-6 border-t border-[#04101f]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[#04101f]/70 text-xs"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Copyright © 2026 GuardienAI® All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/terms"
              className="text-[#04101f]/70 text-xs hover:text-[#04101f] transition-colors"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Terms &amp; Conditions
            </a>
            <a
              href="/delete-account"
              className="text-[#04101f]/70 text-xs hover:text-[#04101f] transition-colors"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Delete Account
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
