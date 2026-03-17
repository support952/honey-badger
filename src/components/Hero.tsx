"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import FloatingParticles from "./FloatingParticles";
import AntiGravityText from "./AntiGravityText";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = memo(function Hero() {
  const headlineParallax = useMouseParallax(0.4);
  const subtitleParallax = useMouseParallax(0.7);
  const ctaParallax = useMouseParallax(1);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-dark">
      {/* Optimized background with next/image */}
      <Image
        src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=75&fm=webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={75}
      />
      <div className="absolute inset-0 bg-black/85" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(250, 204, 21, 0.02) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark" />
      {/* Spotlight — top-right amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 80% 15%, rgba(250, 204, 21, 0.04) 0%, transparent 60%)",
        }}
      />

      {/* Particles hidden on mobile */}
      <div className="hidden md:block">
        <FloatingParticles />
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-0 w-px h-20 md:h-32 bg-white/[0.05] origin-top"
        style={{ willChange: "transform" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-12 text-center py-20 sm:py-28 md:py-32">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ x: subtitleParallax.x, y: subtitleParallax.y, willChange: "transform, opacity" }}
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-5 sm:mb-8"
        >
          E2 Visa Consulting
        </motion.p>

        <motion.div
          style={{ x: headlineParallax.x, y: headlineParallax.y, willChange: "transform" }}
          className="mb-5 sm:mb-8"
        >
          <AntiGravityText
            as="h1"
            className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-heading"
            delay={0.2}
          >
            Your American
          </AntiGravityText>
          <AntiGravityText
            as="h1"
            className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] italic font-light text-heading/70"
            delay={0.6}
          >
            Dream, Realized
          </AntiGravityText>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center mb-5 sm:mb-8"
        >
          <div className="w-12 sm:w-16 h-px bg-accent/30" />
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ x: subtitleParallax.x, y: subtitleParallax.y, willChange: "transform, opacity" }}
          className="text-base sm:text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 tracking-wide px-2"
        >
          We guide visionary entrepreneurs through the E2 investment visa
          process — with precision, discretion, and an unwavering
          commitment to your success.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ x: ctaParallax.x, y: ctaParallax.y, willChange: "transform, opacity" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-dark text-[12px] sm:text-[13px] uppercase tracking-[0.2em] px-8 sm:px-10 py-3.5 sm:py-4 font-medium hover:bg-accent-muted transition-colors duration-300"
          >
            Book a Consultation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#path"
            className="inline-flex items-center gap-3 text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-muted border-b border-white/[0.1] pb-1 hover:text-heading hover:border-accent/30 transition-all duration-300"
          >
            Explore the Path
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 bottom-0 w-px h-16 md:h-24 bg-white/[0.05] origin-bottom"
        style={{ willChange: "transform" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 sm:h-8 bg-accent/15"
          style={{ willChange: "transform" }}
        />
      </motion.div>
    </section>
  );
});

export default Hero;
