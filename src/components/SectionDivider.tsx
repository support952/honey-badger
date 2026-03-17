"use client";

/**
 * Thin gold accent line between sections — apostilosco.au-inspired precision.
 */
export default function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </div>
  );
}
