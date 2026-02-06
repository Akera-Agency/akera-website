"use client";

import { motion } from "framer-motion";

interface GlowProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Glow({ className = "", size = "md" }: GlowProps) {
  const sizes = {
    sm: "w-[200px] h-[200px]",
    md: "w-[400px] h-[400px]",
    lg: "w-[600px] h-[600px]",
  };

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Outer glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${sizes[size]} rounded-full blur-[70px]`}
      >
        <div className="w-full h-full rounded-full glow-effect opacity-80" />
      </motion.div>

      {/* Middle glow */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          size === "lg" ? "w-[400px] h-[400px]" : size === "md" ? "w-[280px] h-[280px]" : "w-[140px] h-[140px]"
        } rounded-full blur-[32px]`}
      >
        <div className="w-full h-full rounded-full glow-secondary" />
      </motion.div>

      {/* Inner glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          size === "lg" ? "w-[300px] h-[300px]" : size === "md" ? "w-[200px] h-[200px]" : "w-[100px] h-[100px]"
        } rounded-full blur-[32px] mix-blend-overlay`}
      >
        <div className="w-full h-full rounded-full glow-secondary" />
      </motion.div>
    </div>
  );
}
