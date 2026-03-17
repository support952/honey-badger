"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { Product } from "@/data/products";
import ProductIllustration from "./ProductIllustration";

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col rounded-lg
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.05]
        hover:border-accent/12
        transition-all duration-500
        overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(250, 204, 21, 0.03) 0%, transparent 60%)",
        }}
      />

      {/* Illustration area */}
      <div className="relative h-32 sm:h-40 flex items-center justify-center overflow-hidden">
        {/* Background depth */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.015) 0%, transparent 70%)",
          }}
        />
        {/* Grid underlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0.5px, transparent 0.5px)",
            backgroundSize: "16px 16px",
          }}
        />
        {/* SVG Illustration */}
        <div className="relative z-10">
          <ProductIllustration productId={product.id} />
        </div>
        {/* Bottom edge */}
        <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-6 pb-0 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted truncate">
            {product.category}
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-accent/70 border border-accent/15 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
            {product.tag}
          </span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-heading leading-tight mb-2">
          {product.title}
        </h3>

        <div className="flex items-baseline gap-1 mb-3 sm:mb-4">
          <span className="text-[10px] sm:text-[11px] text-muted uppercase tracking-wider">From</span>
          <span className="font-serif text-xl sm:text-2xl text-heading">
            ${product.price.toLocaleString()}
          </span>
        </div>

        <p className="text-body text-[13px] sm:text-[14px] leading-[1.7] tracking-wide mb-3 sm:mb-4">
          {product.description}
        </p>

        <div className="flex-1">
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3 sm:pb-4 pt-1 space-y-1.5 sm:space-y-2">
              {product.details.map((detail) => (
                <div key={detail} className="flex items-start gap-2 sm:gap-2.5">
                  <svg
                    className="w-3 h-3 text-accent/60 mt-0.5 sm:mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body text-[12px] sm:text-[13px] tracking-wide">{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted hover:text-heading transition-colors duration-300 mb-3 sm:mb-4"
          >
            {expanded ? "Hide Details" : "View Details"}
            <span
              className="ml-1 inline-block transition-transform duration-200"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ↓
            </span>
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-4 sm:p-6 pt-0 mt-auto">
        <div className="h-px w-full bg-white/[0.04] mb-4 sm:mb-5" />
        <a
          href={`/checkout?service=${product.id}&price=${product.price}`}
          className="group/btn flex items-center justify-center gap-2 w-full py-3 sm:py-3.5
            border border-accent/25 text-accent text-[11px] sm:text-[12px] uppercase tracking-[0.2em]
            hover:bg-accent hover:text-dark
            transition-all duration-300 rounded-sm"
        >
          Select Service
          <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Featured badge */}
      {product.featured && (
        <div className="absolute -top-px -right-px">
          <div className="bg-accent text-dark text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-bl-lg rounded-tr-lg">
            Featured
          </div>
        </div>
      )}
    </motion.div>
  );
}
