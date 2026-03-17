"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Logo from "@/components/Logo";
import { products } from "@/data/products";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");
  const priceParam = searchParams.get("price");

  const selectedProduct = useMemo(
    () => products.find((p) => p.id === serviceId),
    [serviceId]
  );

  const price = priceParam ? parseInt(priceParam, 10) : selectedProduct?.price ?? 4500;
  const title = selectedProduct?.title ?? "Premium Consulting";
  const subtitle = selectedProduct?.category ?? "E2 Visa Package";
  const items = selectedProduct?.details ?? [
    "Full E2 Visa Application Strategy",
    "Custom Business Plan Development",
    "Financial Projections & Analysis",
    "Document Preparation & Review",
    "Consulate Interview Coaching",
    "Post-Approval Settlement Guidance",
    "60-Day Priority Email Support",
  ];

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Left — Order Summary */}
      <div
        className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-12 xl:p-16"
        style={{
          background:
            "linear-gradient(160deg, #0c0c0e 0%, #151518 40%, #0e0e10 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(250,204,21,0.02) 0%, transparent 60%)",
          }}
        />

        <div className="relative">
          <div className="mb-16">
            <Logo />
          </div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-accent mb-3">
            {subtitle}
          </p>
          <h1 className="font-serif text-3xl xl:text-4xl text-heading leading-tight mb-2">
            {title}
            <span className="block italic font-light text-heading/60">Engagement</span>
          </h1>

          <div className="w-10 h-px bg-accent/30 my-8" />

          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <svg
                  className="w-4 h-4 text-accent mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body text-[15px] tracking-wide">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative border-t border-white/[0.04] pt-6 mt-12">
          <div className="flex items-baseline justify-between">
            <span className="text-muted text-sm tracking-wide">Total due today</span>
            <span className="font-serif text-3xl text-heading">
              ${price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Right — Payment Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(255,255,255,0.008) 0%, transparent 60%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md relative"
        >
          {/* Mobile order summary */}
          <div className="lg:hidden mb-8">
            <Logo />
            <h1 className="font-serif text-2xl text-heading mt-6 mb-1">
              {title}{" "}
              <span className="italic font-light text-heading/60">Engagement</span>
            </h1>
            <p className="text-muted text-sm">
              {subtitle} — ${price.toLocaleString()}
            </p>
            <div className="w-10 h-px bg-accent/30 my-6" />
          </div>

          {/* Glassmorphism card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-8 md:p-10
              bg-white/[0.025] backdrop-blur-xl
              border border-white/[0.05]
              shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
          >
            <h2 className="font-serif text-2xl text-heading mb-6">Payment Details</h2>

            <div className="mb-5">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-muted mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent/25 transition-colors duration-300 text-[15px]"
              />
            </div>

            <div className="mb-5">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent/25 transition-colors duration-300 text-[15px]"
              />
            </div>

            <div className="mb-5">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-muted mb-2">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  maxLength={19}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent/25 transition-colors duration-300 text-[15px] tracking-wider"
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-5 text-muted/30" viewBox="0 0 32 20" fill="none">
                  <rect x="0.5" y="0.5" width="31" height="19" rx="3.5" stroke="currentColor" />
                  <rect x="4" y="12" width="8" height="2" rx="1" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-muted mb-2">
                  Expiry
                </label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  maxLength={7}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent/25 transition-colors duration-300 text-[15px] tracking-wider"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-muted mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  maxLength={4}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent/25 transition-colors duration-300 text-[15px] tracking-wider"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="relative w-full bg-accent text-dark text-[13px] uppercase tracking-[0.2em] font-medium py-4 rounded-lg hover:bg-accent-muted transition-colors duration-300 disabled:opacity-70"
              style={{
                boxShadow: "0 0 30px rgba(250, 204, 21, 0.12), 0 0 60px rgba(250, 204, 21, 0.04)",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full"
                  />
                  Processing...
                </span>
              ) : (
                `Pay $${price.toLocaleString()}`
              )}
            </motion.button>

            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-[10px] uppercase tracking-[0.15em] text-accent/40">SSL Secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-[10px] uppercase tracking-[0.15em] text-accent/40">Encrypted</span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-dark flex items-center justify-center">
          <div className="font-serif text-xl text-heading/50">Loading...</div>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
