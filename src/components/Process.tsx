"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import AntiGravityText from "./AntiGravityText";

const phases = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We conduct a thorough landscape analysis of your business, industry, and competitive environment — setting clear objectives and identifying untapped opportunities.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "A tailored strategy is developed with actionable milestones, defined KPIs, and a realistic roadmap designed to align your resources with your ambitions.",
  },
  {
    number: "03",
    title: "Execution & Growth",
    description:
      "We stay embedded in your operations — monitoring progress, making real-time adjustments, and ensuring every initiative drives measurable results.",
  },
];

function PhaseCard({ phase, index }: { phase: (typeof phases)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const cardParallax = useMouseParallax(0.6 + index * 0.25);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ x: cardParallax.x, y: cardParallax.y }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 200, damping: 20 } }}
      className="relative p-6 sm:p-8 md:p-10 group rounded-lg
        bg-dark-surface/50 backdrop-blur-md
        border border-white/[0.04]
        hover:border-accent/10
        transition-all duration-500"
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(250, 204, 21, 0.02) 0%, transparent 70%)",
          boxShadow: "inset 0 1px 0 rgba(250, 204, 21, 0.06), 0 30px 70px -20px rgba(0, 0, 0, 0.4)",
        }}
      />
      <div className="relative">
        <span className="text-accent text-[10px] sm:text-[11px] tracking-[0.3em] font-medium">
          {phase.number}
        </span>
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 mb-3 sm:mb-4 leading-tight text-heading">
          {phase.title}
        </h3>
        <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] group-hover:text-heading/70 transition-colors duration-500">
          {phase.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const headlineParallax = useMouseParallax(0.4);
  const decorCircle1 = useMouseParallax(1.8);
  const decorCircle2 = useMouseParallax(2.2);

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-elevated relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 60% 45%, rgba(255,255,255,0.01) 0%, transparent 65%)",
        }}
      />

      <div className="hidden md:block">
        <motion.div
          className="absolute top-20 left-[15%] w-32 h-32 rounded-full border border-white/[0.02] pointer-events-none"
          style={{ x: decorCircle1.x, y: decorCircle1.y }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-[8%] w-2 h-2 rounded-full bg-accent/12 pointer-events-none"
          style={{ x: decorCircle2.x, y: decorCircle2.y }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 md:mb-20"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            How We Do It
          </p>
          <motion.div style={{ x: headlineParallax.x, y: headlineParallax.y }}>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading"
            >
              Three Phases to
            </AntiGravityText>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light leading-[1.1] text-heading/60"
              delay={0.3}
            >
              Lasting Impact
            </AntiGravityText>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
