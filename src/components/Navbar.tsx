"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "The Path", href: "#path" },
  { name: "Services", href: "#services" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!menuOpen || e.key !== "Tab") return;
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Close on Escape
      const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [menuOpen, handleKeyDown]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between h-16 sm:h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] lg:text-[12px] uppercase tracking-[0.2em] text-muted hover:text-heading transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-accent/40 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[11px] lg:text-[12px] uppercase tracking-[0.2em] border border-accent/30 px-4 lg:px-6 py-2 lg:py-2.5 text-accent hover:bg-accent hover:text-dark transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-heading origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[1.5px] bg-heading"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-heading origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-serif text-2xl sm:text-3xl text-heading hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="mt-4 text-[12px] uppercase tracking-[0.2em] border border-accent/30 px-8 py-3 text-accent hover:bg-accent hover:text-dark transition-all duration-300"
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
