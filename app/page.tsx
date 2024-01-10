"use client";
import HeroSection from "@/components/home/hero-section/hero-section";
import ValueSection from "@/components/home/value-section";
import HighlightCards from "@/components/home/highlight-cards/highlight-cards";
import StackSection from "@/components/home/stack-section/stack-section";
import DemoPreview from "@/components/home/demo-preview";
import PaymentCards from "@/components/home/payment-cards/payment-cards";
import FaqAccordian from "@/components/home/faq/faq-accordian";
import DisclaimerChip from "@/components/home/disclaimer/disclaimer-chip";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const valueRef = useRef(null);
  const valueInView = useInView(valueRef, { once: true });

  const highlightRef = useRef(null);
  const highlightInView = useInView(highlightRef, { once: true });

  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, { once: true });

  const demoRef = useRef(null);
  const demoInView = useInView(demoRef, { once: true });

  const paymentRef = useRef(null);
  const paymentInView = useInView(paymentRef, { once: true });

  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true });

  return (
    <div className="mt-56 mb-56">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
        }}
        ref={heroRef}
      >
        <div className="mb-24">
          <DisclaimerChip />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
        }}
        ref={heroRef}
      >
        <div className="mb-56">
          <HeroSection />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={valueInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        ref={valueRef}
      >
        <div className="mb-12">
          <ValueSection />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={highlightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2, ease: [0.17, 0.55, 0.55, 1] }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        ref={highlightRef}
      >
        <div className="mb-56">
          <HighlightCards />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={stackInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        ref={stackRef}
      >
        <div className="mb-56">
          <StackSection />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={demoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        ref={demoRef}
      >
        <div className="mb-56">
          <DemoPreview />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={paymentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        ref={paymentRef}
      >
        <div className="mb-56">
          <PaymentCards />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={faqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        ref={faqRef}
      >
        <div className="mb-56">
          <FaqAccordian />
        </div>
      </motion.div>
    </div>
  );
}
