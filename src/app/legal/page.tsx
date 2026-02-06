import { Metadata } from "next";
import { LegalContent } from "./LegalContent";

export const metadata: Metadata = {
  title: "Legal Information | Akera Agency",
  description:
    "Terms of Service, Privacy Policy, and Cookie Policy for Akera Agency.",
  openGraph: {
    title: "Legal Information | Akera Agency",
    description:
      "Terms of Service, Privacy Policy, and Cookie Policy for Akera Agency.",
  },
};

export default function LegalPage() {
  return <LegalContent />;
}
