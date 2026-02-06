"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-[12px] border border-border bg-card/40 backdrop-blur-[5px] text-primary text-sm font-medium ${className}`}
    >
      {children}
    </motion.div>
  );
}
