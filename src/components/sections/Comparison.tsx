"use client";

import { motion } from "framer-motion";
import { Container, Section, Badge, Logo, Glow } from "@/components";

const otherAgencies = [
  "They use moodboards to decide what looks best",
  "They take their time crafting an artistic vision",
  "They might overlook website performance, risking higher bounce rates",
  "They rely solely on subjective creativity for storytelling",
  "They miss audience connection in their messaging",
];

const akeraAgency = [
  "We use data dashboards to pinpoint what attracts customers",
  "We design, ship, and test to deliver results fast",
  "We make sure our websites load at record speed (< 0.5 seconds)",
  "We create tailored brand storytelling that resonates with audiences",
  "We leverage customer research as inspiration",
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M15 5L5 15M5 5l10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Comparison() {
  return (
    <Section id="comparison">
      <Container>
        <div className="text-center mb-16">
          <Badge className="mb-6">Comparison</Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            But, why would you want to work{" "}
            <span className="font-instrument italic">with us?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Other Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-lg"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-muted mb-8">
              Other Agencies
            </h3>
            <ul className="space-y-4 border border-border rounded-[12px] p-6 bg-card">
              {otherAgencies.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 text-secondary"
                >
                  <span className="text-muted mt-0.5">
                    <XIcon />
                  </span>
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Akera Agency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-lg relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <Logo showText />
            </div>
            <ul className="space-y-4 border border-border rounded-[12px] p-6 bg-card relative overflow-hidden">
              {/* Glow effect behind */}
              <div className="absolute -bottom-32 -right-32 z-0">
                <Glow size="md" />
              </div>
              
              {akeraAgency.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 text-primary relative z-10"
                >
                  <span className="text-accent mt-0.5">
                    <CheckIcon />
                  </span>
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
