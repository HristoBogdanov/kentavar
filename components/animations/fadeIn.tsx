"use client";

import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  classes?: string;
}

export default function FadeIn({ children, classes = "" }: Props) {
  const { ref, inView } = useInView(0.5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 2.0, ease: [0.17, 0.55, 0.55, 1] }}
      ref={ref}
      className={classes}
    >
      {children}
    </motion.div>
  );
}
