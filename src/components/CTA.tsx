"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AntiGravityText from "./AntiGravityText";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(255,255,255,0.012) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent mb-3 sm:mb-4">
            The Journey Begins
          </p>
          <div className="mb-4 sm:mb-6">
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1]"
            >
              Ready to Build
            </AntiGravityText>
            <AntiGravityText
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/60 leading-[1.1]"
              delay={0.3}
            >
              Something Exceptional?
            </AntiGravityText>
          </div>
          <div className="flex justify-center mb-5 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-accent/30" />
          </div>
          <p className="text-body leading-[1.8] tracking-wide text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            Every great venture begins with a conversation. Let&apos;s discuss
            your vision and chart a path toward measurable, lasting success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="mailto:hello@honeybadger.com"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-dark text-[12px] sm:text-[13px] uppercase tracking-[0.2em] px-8 sm:px-10 py-3.5 sm:py-4 font-medium hover:bg-accent-muted transition-colors duration-300"
            >
              Schedule a Call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <button
              onClick={() => navigator.clipboard.writeText("hello@honeybadger.com")}
              className="text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-muted border-b border-white/[0.08] pb-1 hover:text-heading hover:border-accent/30 transition-all duration-300 cursor-pointer"
              title="Click to copy email address"
            >
              hello@honeybadger.com
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
