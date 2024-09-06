"use client";

import { motion } from "framer-motion";

export default function SlideInFromBottom({ children, classes, style }: any) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0 }}
      className={classes}
      style={style}
    >
      {children}
    </motion.div>
  );
}
