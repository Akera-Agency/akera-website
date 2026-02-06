"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Container, Section, Button } from "@/components";
import { CALENDLY_URL } from "@/lib/constants";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

async function submitContactForm(data: ContactFormData): Promise<void> {
  // Simulate API call - replace with actual form submission endpoint
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // In production, this would send to your API endpoint
  // e.g., await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  if (!data.email) {
    throw new Error("Email is required");
  }
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitContactForm(data);
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
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
                Get in <span className="font-instrument italic">Touch</span>
              </h1>
              <p className="text-secondary text-lg">
                Ready to start your project? Fill out the form below or book a
                call directly.
              </p>
            </motion.div>

            {/* Calendly Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center mb-12"
            >
              <Button
                href={CALENDLY_URL}
                external
                variant="primary"
              >
                Book a 30-min call on Calendly
              </Button>
            </motion.div>

            <div className="text-center text-secondary mb-8">or</div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {isSubmitted ? (
                <div className="text-center p-12 rounded-[24px] border border-border bg-card">
                  <h3 className="text-2xl font-medium text-primary mb-4">
                    Thank you!
                  </h3>
                  <p className="text-secondary">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 p-8 rounded-[24px] border border-border bg-card"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-primary font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-[12px] bg-dark border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-accent text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-primary font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-[12px] bg-dark border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-accent text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-primary font-medium mb-2"
                    >
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register("company")}
                      className="w-full px-4 py-3 rounded-[12px] bg-dark border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-primary font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="w-full px-4 py-3 rounded-[12px] bg-dark border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-accent text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-accent text-sm" role="alert">
                      {submitError}
                    </p>
                  )}

                  <Button type="submit" variant="primary" className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
