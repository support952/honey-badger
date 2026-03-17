"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AntiGravityText from "./AntiGravityText";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with an in-depth consultation to understand your business vision, investment capacity, and personal goals for relocating to the United States.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our team crafts a tailored E2 visa strategy — identifying the optimal business structure, investment approach, and documentation framework.",
  },
  {
    number: "03",
    title: "Preparation",
    description:
      "We meticulously prepare your application, business plan, and supporting documents to meet the highest standards of the U.S. consulate.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "From filing to interview preparation, we guide you through every stage — ensuring nothing is left to chance on your path to approval.",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="border-t border-white/[0.04] pt-6 sm:pt-8">
        <span className="text-[10px] sm:text-[11px] tracking-[0.3em] text-accent font-medium">
          {step.number}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-heading mt-3 sm:mt-4 mb-3 sm:mb-4">
          {step.title}
        </h3>
        <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function PathSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="path" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 70% 50%, rgba(255,255,255,0.01) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 md:mb-20"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            The Process
          </p>
          <AntiGravityText
            as="h2"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
          >
            Your E2 Path
          </AntiGravityText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
