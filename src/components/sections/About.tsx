"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container, Section, Button } from "@/components";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, 10]);

  return (
    <Section id="about-us" className="min-h-screen flex items-center">
      <Container>
        <div ref={containerRef} className="max-w-4xl mx-auto text-center">
          <motion.p
            style={{
              opacity,
              filter: blur.get() > 0 ? `blur(${blur.get()}px)` : "none",
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-primary"
          >
            Here at Akera, we help creators and brands double their conversion
            rates with top-notch designs driven by data and analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12"
          >
            <Button
              href="https://calendly.com/chedly-ramez/30min"
              external
              variant="primary"
            >
              Book a 15-min call
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
