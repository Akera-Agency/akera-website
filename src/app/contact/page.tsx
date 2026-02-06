import { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Akera Agency",
  description:
    "Get in touch with Akera Agency. Book a call or fill out our contact form to start your project.",
  openGraph: {
    title: "Contact Us | Akera Agency",
    description:
      "Get in touch with Akera Agency. Book a call or fill out our contact form to start your project.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
