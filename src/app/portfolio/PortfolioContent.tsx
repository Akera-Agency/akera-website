"use client";

import { motion } from "framer-motion";
import { Container, Section, Button } from "@/components";
import { CALENDLY_URL } from "@/lib/constants";

const projects = [
  {
    title: "E-commerce Redesign",
    category: "Web Design",
    description: "Complete funnel redesign resulting in 150% increase in conversions.",
    image: "/projects/project1.jpg",
  },
  {
    title: "SaaS Landing Page",
    category: "Landing Page",
    description: "High-converting landing page with optimized user journey.",
    image: "/projects/project2.jpg",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Full brand identity redesign for a tech startup.",
    image: "/projects/project3.jpg",
  },
  {
    title: "Marketing Funnel",
    category: "Funnel Design",
    description: "Multi-step marketing funnel with 2x conversion improvement.",
    image: "/projects/project4.jpg",
  },
];

export function PortfolioContent() {
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
              Our <span className="font-instrument italic">Work</span>
            </h1>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Explore our portfolio of high-converting websites and landing pages
              that have helped businesses scale their growth.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-[4/3] rounded-[24px] border border-border bg-card overflow-hidden"
              >
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" aria-hidden="true" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-dark/90 via-dark/50 to-transparent">
                  <span className="text-accent text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-medium text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-secondary text-lg mb-6">
              Ready to see your project here?
            </p>
            <Button
              href={CALENDLY_URL}
              external
              variant="primary"
            >
              Book a call
            </Button>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
