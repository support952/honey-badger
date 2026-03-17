"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo, memo } from "react";

interface AntiGravityTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
  delay?: number;
}

// GPU-only properties: transform (y, rotateZ, scale) + opacity
// No filter, no blur — these trigger paint layers
const charVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 25,
    },
  },
};

const AntiGravityText = memo(function AntiGravityText({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: AntiGravityTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const words = useMemo(
    () =>
      children.split(" ").filter(Boolean).map((word) => ({
        word,
        chars: word.split(""),
      })),
    [children]
  );

  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className}>
      <motion.span
        ref={ref}
        className="inline"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.02,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((wordObj, wIdx) => (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {wordObj.chars.map((char, cIdx) => (
              <motion.span
                key={`${wIdx}-${cIdx}`}
                className="inline-block"
                variants={charVariants}
                style={{ willChange: "transform, opacity" }}
              >
                {char}
              </motion.span>
            ))}
            {wIdx < words.length - 1 && (
              <span className="inline-block w-[0.3em]" />
            )}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
});

export default AntiGravityText;
