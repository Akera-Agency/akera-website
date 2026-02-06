import { Metadata } from "next";
import { CareersContent } from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers | Akera Agency",
  description:
    "Join the Akera Agency team. We're looking for talented individuals passionate about creating exceptional digital experiences.",
  openGraph: {
    title: "Careers | Akera Agency",
    description:
      "Join the Akera Agency team. We're looking for talented individuals passionate about creating exceptional digital experiences.",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
