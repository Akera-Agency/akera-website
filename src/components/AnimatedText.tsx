"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const words = children.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 60,
        stiffness: 320,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10,
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface AnimatedHeadlineProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedHeadline({ children, className = "" }: AnimatedHeadlineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring" as const,
        damping: 60,
        stiffness: 320,
        delay: 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
