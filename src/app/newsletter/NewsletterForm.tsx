"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Container, Section, Button } from "@/components";

interface NewsletterFormData {
  email: string;
}

async function submitNewsletterForm(data: NewsletterFormData): Promise<void> {
  // Simulate API call - replace with actual newsletter subscription endpoint
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // In production, this would send to your API endpoint
  // e.g., await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify(data) });
  if (!data.email) {
    throw new Error("Email is required");
  }
}

export function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitNewsletterForm(data);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      aria-label="Email address for newsletter subscription"
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
                      <p className="text-accent text-sm mt-2 text-left" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                    {submitError && (
                      <p className="text-accent text-sm mt-2 text-left" role="alert">
                        {submitError}
                      </p>
                    )}
                  </div>
                  <Button type="submit" variant="primary" className="px-8">
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
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
                    aria-hidden="true"
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
