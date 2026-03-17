"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 bg-dark border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />
        <p className="text-[11px] tracking-[0.15em] text-muted">
          &copy; {new Date().getFullYear()} Honey Badger Consulting Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
