"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <a href="/" className="group inline-flex items-center gap-2.5 sm:gap-3 shrink-0">
      <motion.svg
        width="28"
        height="32"
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-7 h-8 sm:w-9 sm:h-10"
      >
        <path
          d="M18 2L25.5 6.5V15.5L18 20L10.5 15.5V6.5L18 2Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-heading/60"
        />
        <path
          d="M10.5 15.5L18 20V29L10.5 33.5L3 29V20L10.5 15.5Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-heading/60"
        />
        <path
          d="M25.5 15.5L33 20V29L25.5 33.5L18 29V20L25.5 15.5Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-heading/60"
        />
        <motion.path
          d="M25.5 33.5C25.5 33.5 25.5 35 24.5 36.5C23.5 38 25.5 39.5 26.5 38C27.5 36.5 25.5 33.5 25.5 33.5Z"
          fill="#facc15"
          initial={{ scale: 1, opacity: 0.85 }}
          whileHover={{ scale: 1.3, opacity: 1 }}
          style={{ transformOrigin: "25.5px 33.5px" }}
        />
        <path
          d="M25.5 15.5L33 20V29L25.5 33.5L18 29V20L25.5 15.5Z"
          fill="rgba(250, 204, 21, 0.04)"
        />
      </motion.svg>

      <div className="flex flex-col leading-none">
        <span className="font-serif text-base sm:text-lg text-heading tracking-wide">
          Honey Badger
        </span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted mt-0.5">
          Consulting Ltd.
        </span>
      </div>
    </a>
  );
}
