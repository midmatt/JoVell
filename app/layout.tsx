import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jovellhg.com"),
  title: {
    default: "JoVell Hospitality Group — Travel in Style, Globally",
    template: "%s — JoVell Hospitality Group",
  },
  description:
    "JoVell Hospitality Group is a luxury travel, transportation and events company based in Fort Lauderdale, Florida. Curated journeys, global logistics and unforgettable affairs.",
  keywords: [
    "luxury travel",
    "Fort Lauderdale Florida",
    "private events",
    "hospitality",
    "group tours",
    "cruise reservations",
    "JoVell Hospitality",
  ],
  openGraph: {
    title: "JoVell Hospitality Group",
    description: "Travel in Style, Globally.",
    url: "https://jovellhg.com",
    siteName: "JoVell Hospitality Group",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-ink-900 font-sans text-ink-100 antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
