import type { Metadata } from "next";
import { Poppins, Caudex } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caudex = Caudex({
  variable: "--font-caudex",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GuardienAI - Making The Digital World Safer For Children",
  description:
    "A trusted partner for parents - protecting children while respecting privacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${caudex.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {children}
      </body>
    </html>
  );
}
