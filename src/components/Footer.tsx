"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";

const pageLinks = [
  { href: "/#about-us", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/careers", label: "Careers" },
];

const infoLinks = [
  { href: "/#faq", label: "FAQ" },
  { href: "/legal", label: "Legal" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark/90 backdrop-blur-[5px]">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-lg font-medium text-primary">
              Ready? Set, Grow!
            </p>
            <p className="mt-2 text-secondary max-w-md">
              We develop a winning formula combined with data-driven designs to
              increase your new customer conversion rate, and optimize your
              funnels.
            </p>
            <p className="mt-6 text-secondary text-sm">
              ©2025 Akera Agency - Made with 🧡 from all around the world
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-primary font-medium mb-4">Pages</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-primary font-medium mb-4">Information</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
