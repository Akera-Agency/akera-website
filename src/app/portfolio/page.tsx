import { Metadata } from "next";
import { PortfolioContent } from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Our Work | Akera Agency",
  description:
    "Explore our portfolio of high-converting websites and landing pages that have helped businesses scale their growth.",
  openGraph: {
    title: "Our Work | Akera Agency",
    description:
      "Explore our portfolio of high-converting websites and landing pages that have helped businesses scale their growth.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
