import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

// Satoshi font from Fontshare (loaded locally)
const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// Instrument Serif from Google Fonts
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akera Agency - Double Your Conversion Rate",
  description:
    "We develop a winning formula combined with data-driven designs to increase your new customer conversion rate, and optimize your funnels.",
  keywords: [
    "web design",
    "conversion optimization",
    "landing page",
    "funnel optimization",
    "digital agency",
  ],
  openGraph: {
    title: "Akera Agency - Double Your Conversion Rate",
    description:
      "We develop a winning formula combined with data-driven designs to increase your new customer conversion rate, and optimize your funnels.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${instrumentSerif.variable}`}>
      <body className="font-satoshi antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
