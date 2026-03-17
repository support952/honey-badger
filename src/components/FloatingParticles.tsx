"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";

interface Particle {
  id: number;
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  drift: number;
  shape: "ring" | "line" | "dot";
  opacity: number;
  intensity: number;
}

// Reduced from 10 to 6 particles for performance
const particles: Particle[] = [
  { id: 1, size: 2.5, x: "12%", y: "20%", delay: 0, duration: 8, drift: 15, shape: "dot", opacity: 0.15, intensity: 1.5 },
  { id: 2, size: 50, x: "85%", y: "15%", delay: 1.2, duration: 10, drift: 20, shape: "ring", opacity: 0.03, intensity: 2 },
  { id: 3, size: 2, x: "75%", y: "70%", delay: 0.5, duration: 7, drift: 12, shape: "dot", opacity: 0.2, intensity: 1.8 },
  { id: 5, size: 70, x: "90%", y: "50%", delay: 0.8, duration: 14, drift: 25, shape: "line", opacity: 0.03, intensity: 1.2 },
  { id: 6, size: 2, x: "30%", y: "80%", delay: 1.5, duration: 9, drift: 10, shape: "dot", opacity: 0.18, intensity: 2 },
  { id: 9, size: 80, x: "20%", y: "45%", delay: 2.5, duration: 16, drift: 30, shape: "line", opacity: 0.025, intensity: 1 },
];

const ParticleElement = memo(function ParticleElement({ particle }: { particle: Particle }) {
  const { x, y } = useMouseParallax(particle.intensity);

  const shapeStyles = useMemo(() => {
    switch (particle.shape) {
      case "dot":
        return {
          width: particle.size,
          height: particle.size,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        };
      case "ring":
        return {
          width: particle.size,
          height: particle.size,
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        };
      case "line":
        return {
          width: 1,
          height: particle.size,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
        };
    }
  }, [particle.shape, particle.size]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: particle.x,
        top: particle.y,
        willChange: "transform, opacity",
        x,
        y,
        ...shapeStyles,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: particle.opacity,
        scale: 1,
        y: [0, -particle.drift, 0, particle.drift * 0.6, 0],
      }}
      transition={{
        opacity: { duration: 2, delay: particle.delay },
        scale: { duration: 2, delay: particle.delay },
        y: {
          duration: particle.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: particle.delay,
        },
      }}
    />
  );
});

const FloatingParticles = memo(function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <ParticleElement key={p.id} particle={p} />
      ))}
    </div>
  );
});

export default FloatingParticles;
