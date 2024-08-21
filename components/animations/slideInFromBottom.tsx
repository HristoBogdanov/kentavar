"use client";

import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  classes: string;
}

export default function SlideInFromBottom({ children, classes }: Props) {
  const { ref, inView } = useInView(0.5);

  return (
    <motion.div
      style={{
        transform: inView ? "none" : "translateY(200px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      }}
      ref={ref}
      className={classes}
    >
      {children}
    </motion.div>
  );
}
