"use client";

import { motion } from "framer-motion";

export default function RevealDivBottomToTopDelay({
  children,
  className,
  delay,
}: {
  children: any;
  className: any;
  delay: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
