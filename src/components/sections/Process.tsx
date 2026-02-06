"use client";

import { motion } from "framer-motion";
import { Container, Section, Badge } from "@/components";

const steps = [
  {
    number: "01",
    title: "Funnel Audit",
    description:
      "We'll start by analysing your sales funnel and seeing what's holding you back.",
  },
  {
    number: "02",
    title: "Design & Develop",
    description:
      "We create and launch a custom landing page that combines stunning design with optimal performance.",
  },
  {
    number: "03",
    title: "Track & Optimize",
    description:
      "We implement custom analytics systems to continuously track performance and optimize for maximum results.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <Container>
        <div className="text-center mb-16">
          <Badge className="mb-6">Process</Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Our simple 3-step process to{" "}
            <span className="font-instrument italic">skyrocket</span> your
            business.
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            We design, develop and optimize landing pages built to convert.
            Every step is data-driven to ensure fast results and scalable growth
            for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 rounded-[24px] border border-border bg-card/50 backdrop-blur-[5px]"
            >
              <div className="text-6xl font-bold text-muted/20 mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-medium text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
