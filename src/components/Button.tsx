"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-[12px] font-medium text-base tracking-tight transition-all duration-200";

  const variants = {
    primary:
      "bg-accent text-primary shadow-[0px_4px_10px_-2px_rgba(0,0,0,0.05),0px_2px_2px_-1px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(255,69,51,0.12)] hover:opacity-90",
    secondary:
      "bg-dark/50 text-primary backdrop-blur-[10px] shadow-[0px_4px_10px_-2px_rgba(0,0,0,0.1),0px_2px_2px_-1px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(255,255,255,0.08)] hover:bg-dark/70",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionComponent = motion.create("span");

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link href={href} className={combinedStyles} {...linkProps}>
        <MotionComponent
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2"
        >
          {children}
        </MotionComponent>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
