"use client";

import { motion } from "framer-motion";
import { Container, Section, Button, Glow } from "@/components";

export function CTA() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            damping: 60,
            stiffness: 320,
          }}
          className="relative rounded-[24px] border border-border bg-card/50 backdrop-blur-[5px] p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 z-0">
            <Glow size="lg" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
            >
              Ready to scale your brand to{" "}
              <span className="font-instrument italic">new heights?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-secondary text-lg max-w-2xl mx-auto mb-10"
            >
              If you want to achieve ground-breaking growth with increased sales
              and conversions through high-performing web design, you&apos;re in the
              right place. We build websites that turn visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                href="https://calendly.com/chedly-ramez/30min"
                external
                variant="primary"
              >
                Book a call
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
