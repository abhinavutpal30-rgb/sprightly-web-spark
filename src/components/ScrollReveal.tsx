import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}

const getVariants = (direction: string, duration: number): Variants => {
  const hidden = {
    opacity: 0,
    ...(direction === "up" && { y: 40 }),
    ...(direction === "left" && { x: -40 }),
    ...(direction === "right" && { x: 40 }),
    ...(direction === "none" && { scale: 0.97 }),
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
  };

  return { hidden, visible };
};

const ScrollReveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={getVariants(direction, duration)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
