"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components";

const faqs = [
  {
    question: "How long does it take to complete a website project?",
    answer:
      "Most projects are completed within 2-4 weeks, depending on the scope and complexity. We work efficiently to deliver results without compromising quality.",
  },
  {
    question: "What is a funnel audit, and why is it important?",
    answer:
      "A funnel audit is a comprehensive analysis of your sales funnel to identify bottlenecks and opportunities for improvement. It's crucial because it helps us understand where potential customers drop off and how to optimize for better conversions.",
  },
  {
    question: "How do you ensure the websites you build are high-converting?",
    answer:
      "We use data-driven design principles, A/B testing, and proven conversion optimization techniques. Every design decision is backed by research and analytics to maximize your conversion rates.",
  },
  {
    question: "What if I need ongoing support after my website goes live?",
    answer:
      "We offer ongoing support and maintenance packages to ensure your website continues to perform at its best. This includes regular updates, performance monitoring, and continuous optimization.",
  },
  {
    question: "How do you handle revisions and feedback during the project?",
    answer:
      "We have a collaborative process with regular check-ins and feedback rounds. You'll have multiple opportunities to provide input, and we typically include 2-3 rounds of revisions in our projects.",
  },
  {
    question: "Can you help with integrating third-party tools?",
    answer:
      "Absolutely! We can integrate various third-party tools including analytics platforms, CRMs, email marketing tools, payment processors, and more to create a seamless workflow.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  const answerId = `faq-answer-${index}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-[12px] bg-card overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="text-primary font-medium text-lg pr-4">{question}</span>
        <div className="relative w-5 h-5 flex-shrink-0" aria-hidden="true">
          <motion.span
            animate={{ rotate: isOpen ? 0 : 0 }}
            className="absolute top-1/2 left-0 w-5 h-0.5 bg-primary -translate-y-1/2"
          />
          <motion.span
            animate={{ rotate: isOpen ? 0 : 90 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-0 w-5 h-0.5 bg-primary -translate-y-1/2"
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            id={answerId}
            role="region"
            aria-labelledby={`faq-question-${index}`}
          >
            <div className="px-6 pb-6 text-secondary">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
