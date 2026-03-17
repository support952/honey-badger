"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import AntiGravityText from "./AntiGravityText";

const services = [
  {
    title: "Business Planning",
    description:
      "Comprehensive plans meticulously aligned with your strategic goals — from market entry to long-term scalability.",
  },
  {
    title: "Digital Strategy",
    description:
      "Implementing technology solutions that drive operational efficiency, streamline processes, and unlock new growth channels.",
  },
  {
    title: "Financial Advisory",
    description:
      "Optimizing capital allocation, cash flow management, and financial architecture to fuel sustainable growth.",
  },
];

function ServiceCard({
  service, index,
}: {
  service: (typeof services)[0]; index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const cardParallax = useMouseParallax(0.8 + index * 0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ x: cardParallax.x, y: cardParallax.y }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 25 } }}
      className="group relative p-6 sm:p-8 md:p-10 rounded-lg
        bg-dark-surface/50 backdrop-blur-md
        border border-white/[0.04]
        hover:border-accent/10
        transition-all duration-500"
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(250, 204, 21, 0.03) 0%, transparent 70%)",
          boxShadow:
            "0 0 40px rgba(250, 204, 21, 0.03), 0 25px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      />

      <div className="relative">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-6 sm:w-8 h-px bg-accent/40 mt-3 shrink-0" />
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-heading leading-tight">
            {service.title}
          </h3>
        </div>
        <p className="text-body leading-[1.8] tracking-wide text-sm sm:text-[15px] ml-9 sm:ml-12 group-hover:text-heading/70 transition-colors duration-500">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const headlineParallax = useMouseParallax(0.4);

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(255,255,255,0.012) 0%, transparent 60%)",
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
            What We Offer
          </p>
          <motion.div style={{ x: headlineParallax.x, y: headlineParallax.y }}>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] max-w-3xl"
            >
              Expertise That
            </AntiGravityText>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/60 leading-[1.1]"
              delay={0.3}
            >
              Moves the Needle
            </AntiGravityText>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
