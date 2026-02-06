"use client";

import { motion } from "framer-motion";
import { Container, Button, Badge, StarIcon, Glow } from "@/components";
import { CALENDLY_URL } from "@/lib/constants";

export function Hero() {
  const words = ["Ready", "to", "double", "your", "website", "conversion?"];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
        <Glow size="lg" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled />
                ))}
              </div>
              <span className="text-muted">20+ businesses scaled</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tight leading-[1.1] mb-6">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  type: "spring",
                  damping: 60,
                  stiffness: 320,
                  delay: 0.1 + index * 0.05,
                }}
                className={`inline-block mr-[0.25em] ${
                  word === "double"
                    ? "font-instrument italic"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              type: "spring",
              damping: 60,
              stiffness: 320,
              delay: 0.5,
            }}
            className="text-secondary text-lg md:text-xl max-w-2xl mb-10"
          >
            We develop a winning formula combined with data-driven designs to
            increase your new customer conversion rate, and optimize your
            funnels.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 60,
              stiffness: 320,
              delay: 0.7,
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              href={CALENDLY_URL}
              external
              variant="primary"
            >
              Book a call
            </Button>
            <Button href="/portfolio" variant="secondary">
              Our work
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
