"use client";

/**
 * Blurred dot-grid pattern overlay + thin vertical editorial lines.
 * Creates depth and a sophisticated "blueprint" feel without distraction.
 */
export default function GridLines() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden="true">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          filter: "blur(0.5px)",
        }}
      />
      {/* Vertical editorial lines */}
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex justify-between">
        <div className="w-px h-full bg-white/[0.025]" />
        <div className="w-px h-full bg-white/[0.025] hidden md:block" />
        <div className="w-px h-full bg-white/[0.025] hidden lg:block" />
        <div className="w-px h-full bg-white/[0.025] hidden lg:block" />
        <div className="w-px h-full bg-white/[0.025]" />
      </div>
    </div>
  );
}
