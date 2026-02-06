"use client";

import { motion } from "framer-motion";
import { Container, Section, Button } from "@/components";

const openPositions = [
  {
    title: "Senior Web Designer",
    type: "Full-time",
    location: "Remote",
    description:
      "We're looking for an experienced web designer to create stunning, high-converting designs for our clients.",
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "Join our team to build blazing-fast websites using modern technologies like Next.js and Tailwind CSS.",
  },
  {
    title: "Conversion Specialist",
    type: "Full-time",
    location: "Remote",
    description:
      "Help our clients optimize their funnels and increase conversion rates through data-driven strategies.",
  },
];

export function CareersContent() {
  return (
    <div className="pt-32">
      <Section>
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
              Join our <span className="font-instrument italic">Team</span>
            </h1>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate
              about creating exceptional digital experiences.
            </p>
          </motion.div>

          {/* Open Positions */}
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-medium text-primary mb-8"
            >
              Open Positions
            </motion.h2>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="p-8 rounded-[24px] border border-border bg-card"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-primary">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-secondary text-sm">
                        <span>{position.type}</span>
                        <span aria-hidden="true">•</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <Button
                      href={`mailto:careers@akera.agency?subject=Application for ${position.title}`}
                      variant="secondary"
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-secondary">{position.description}</p>
                </motion.div>
              ))}
            </div>

            {/* No Positions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center mt-12 p-8 rounded-[24px] border border-border bg-card/50"
            >
              <h3 className="text-xl font-medium text-primary mb-4">
                Don&apos;t see a role that fits?
              </h3>
              <p className="text-secondary mb-6">
                We&apos;re always interested in meeting talented people. Send us your
                resume and tell us how you can contribute.
              </p>
              <Button
                href="mailto:careers@akera.agency?subject=General Application"
                variant="primary"
              >
                Send Your Resume
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
