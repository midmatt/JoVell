"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "article" | "header";
};

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  as = "div",
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (prefersReduced) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={{
        hidden: { opacity: 0, y },
        visible: (d: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            delay: d,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      }}
    >
      {children}
    </MotionTag>
  );
}

export { baseVariants };
