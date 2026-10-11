"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

// Con "prefers-reduced-motion", Motion omite el desplazamiento y solo funde la opacidad.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, transform: "translateY(18px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
