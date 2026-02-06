"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components";

export default function LegalPage() {
  return (
    <div className="pt-32">
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-12">
              Legal <span className="font-instrument italic">Information</span>
            </h1>

            <div className="space-y-12">
              {/* Terms of Service */}
              <section>
                <h2 className="text-2xl font-medium text-primary mb-6">
                  Terms of Service
                </h2>
                <div className="space-y-4 text-secondary">
                  <p>
                    By accessing and using the Akera Agency website and
                    services, you accept and agree to be bound by the terms and
                    provisions of this agreement.
                  </p>
                  <p>
                    All content provided on this site is for informational
                    purposes only. Akera Agency reserves the right to modify or
                    discontinue any aspect of the service at any time.
                  </p>
                  <p>
                    You agree to use our services only for lawful purposes and
                    in accordance with these Terms of Service.
                  </p>
                </div>
              </section>

              {/* Privacy Policy */}
              <section>
                <h2 className="text-2xl font-medium text-primary mb-6">
                  Privacy Policy
                </h2>
                <div className="space-y-4 text-secondary">
                  <p>
                    At Akera Agency, we take your privacy seriously. This policy
                    describes what personal information we collect and how we
                    use it.
                  </p>
                  <h3 className="text-lg font-medium text-primary mt-6 mb-2">
                    Information We Collect
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Contact information (name, email address) when you fill
                      out forms
                    </li>
                    <li>
                      Usage data collected through analytics tools
                    </li>
                    <li>
                      Communications when you contact us directly
                    </li>
                  </ul>
                  <h3 className="text-lg font-medium text-primary mt-6 mb-2">
                    How We Use Your Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To respond to your inquiries and requests</li>
                    <li>To improve our website and services</li>
                    <li>To send newsletters (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-medium text-primary mb-6">
                  Cookie Policy
                </h2>
                <div className="space-y-4 text-secondary">
                  <p>
                    We use cookies and similar tracking technologies to track
                    activity on our website and hold certain information.
                  </p>
                  <p>
                    Cookies are files with a small amount of data which may
                    include an anonymous unique identifier. You can instruct
                    your browser to refuse all cookies or to indicate when a
                    cookie is being sent.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-medium text-primary mb-6">
                  Contact Us
                </h2>
                <p className="text-secondary">
                  If you have any questions about these Terms, please contact us
                  at{" "}
                  <a
                    href="mailto:legal@akera.agency"
                    className="text-accent hover:underline"
                  >
                    legal@akera.agency
                  </a>
                </p>
              </section>

              {/* Last Updated */}
              <p className="text-muted text-sm pt-8 border-t border-border">
                Last updated: January 2025
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
