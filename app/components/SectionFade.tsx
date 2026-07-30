"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
} & Omit<HTMLMotionProps<"div">, "children">;

export function SectionFade({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
  ...rest
}: Props) {
  const MotionTag = motion[as] as typeof motion.div;
  const reduceMotion = useReducedMotion();

  // When the visitor asks for reduced motion, arrive already composed: no
  // rise, no fade, no delay. Content is present and legible immediately —
  // the state change is preserved, only the animation is dropped.
  return (
    <MotionTag
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
