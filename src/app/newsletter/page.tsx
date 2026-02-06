import { Metadata } from "next";
import { NewsletterForm } from "./NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter | Akera Agency",
  description:
    "Subscribe to the Akera Agency newsletter for weekly insights on conversion optimization, web design trends, and actionable tips.",
  openGraph: {
    title: "Newsletter | Akera Agency",
    description:
      "Subscribe to the Akera Agency newsletter for weekly insights on conversion optimization, web design trends, and actionable tips.",
  },
};

export default function NewsletterPage() {
  return <NewsletterForm />;
}
