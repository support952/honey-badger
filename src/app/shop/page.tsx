"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, categories, sortOptions, sortProducts } from "@/data/products";
import type { Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Logo from "@/components/Logo";
import AntiGravityText from "@/components/AntiGravityText";
import GridLines from "@/components/GridLines";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Services");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    const base =
      activeCategory === "All Services"
        ? products
        : products.filter((p) => p.category === activeCategory);
    return sortProducts(base, sortBy);
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-dark relative">
      <GridLines />

      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 20%, rgba(250, 204, 21, 0.015) 0%, transparent 60%)",
        }}
      />

      {/* Navigation bar */}
      <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between h-16 sm:h-20">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-[12px] uppercase tracking-[0.2em] text-muted hover:text-heading transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/shop"
              className="text-[12px] uppercase tracking-[0.2em] text-heading relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-accent/40"
            >
              Services
            </a>
            <a
              href="/checkout"
              className="text-[12px] uppercase tracking-[0.2em] text-muted hover:text-heading transition-colors duration-300"
            >
              Checkout
            </a>
          </div>
        </div>
      </nav>

      {/* Hero header */}
      <section className="pt-20 sm:pt-24 pb-10 sm:pb-16 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.35em] text-accent mb-4"
        >
          Our Services
        </motion.p>
        <AntiGravityText
          as="h1"
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] mb-4"
        >
          Strategic Solutions
        </AntiGravityText>
        <AntiGravityText
          as="h1"
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-light text-heading/60 leading-[1.1] mb-5 sm:mb-8"
          delay={0.3}
        >
          For Every Stage
        </AntiGravityText>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-body text-lg tracking-wide max-w-xl"
        >
          From initial assessment to full-scale execution — select the
          services that match your ambition.
        </motion.p>
      </section>

      {/* Thin divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      </div>

      {/* Filter + Sort bar */}
      <section className="py-8 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.15em] px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-accent/30 bg-accent/10 text-accent"
                    : "border-white/[0.06] text-muted hover:text-heading hover:border-white/[0.1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-surface/50 border border-white/[0.06] text-heading text-[13px] tracking-wide px-3 py-2 rounded-sm focus:outline-none focus:border-accent/20 transition-colors duration-300 appearance-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result count */}
        <p className="text-[12px] text-muted tracking-wide mt-4">
          Showing {filtered.length} of {products.length} services
        </p>
      </section>

      {/* Product Grid */}
      <section className="pb-16 sm:pb-24 md:pb-32 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-heading/60 mb-2">No services found</p>
            <p className="text-muted text-sm">Try adjusting your filters.</p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/15 to-transparent mb-16" />
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent mb-3">
            Need Something Custom?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-heading mb-4">
            Let&apos;s Build Your Package
          </h2>
          <p className="text-body tracking-wide max-w-lg mx-auto mb-8">
            Every business is unique. Contact us for a tailored engagement
            that addresses your specific E2 visa requirements.
          </p>
          <a
            href="/#contact"
            className="group inline-flex items-center gap-3 bg-accent text-dark text-[12px] uppercase tracking-[0.2em] px-8 py-3.5 font-medium hover:bg-accent-muted transition-colors duration-300"
          >
            Get in Touch
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-[11px] tracking-[0.15em] text-muted">
            &copy; {new Date().getFullYear()} Honey Badger Consulting Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
