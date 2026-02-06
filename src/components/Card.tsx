"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "highlight";
}

export function Card({ children, className = "", variant = "default" }: CardProps) {
  const variants = {
    default: "bg-card border border-border",
    highlight: "bg-card border border-border relative overflow-hidden",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-[12px] p-6 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
