"use client";

import { motion } from "framer-motion";

export default function SlideInFromLeft({
  classes,
  children,
}: {
  classes: any;
  children: any;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -85 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={classes}
    >
      {children}
    </motion.div>
  );
}
