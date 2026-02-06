"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Container, Section, Button } from "@/components";

interface NewsletterFormData {
  email: string;
}

export default function NewsletterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32">
      <Section className="min-h-[70vh] flex items-center">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
                Join our{" "}
                <span className="font-instrument italic">Newsletter</span>
              </h1>
              <p className="text-secondary text-lg mb-10">
                Get weekly insights on conversion optimization, web design
                trends, and actionable tips to grow your business.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {isSubmitted ? (
                <div className="p-8 rounded-[24px] border border-border bg-card">
                  <h3 className="text-2xl font-medium text-primary mb-4">
                    You&apos;re in! 🎉
                  </h3>
                  <p className="text-secondary">
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      className="w-full px-6 py-4 rounded-[12px] bg-card border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-accent text-sm mt-2 text-left">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" variant="primary" className="px-8">
                    Subscribe
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
            >
              {[
                "Weekly tips & insights",
                "Exclusive resources",
                "No spam, ever",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-secondary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
