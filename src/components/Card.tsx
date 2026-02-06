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
    <div
      className={`rounded-[12px] p-6 ${variants[variant]} ${className} animate-fade-in-up`}
    >
      {children}
    </div>
  );
}
