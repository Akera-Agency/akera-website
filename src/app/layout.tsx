import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";

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
    <html lang="en">
      <body className="font-satoshi antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
