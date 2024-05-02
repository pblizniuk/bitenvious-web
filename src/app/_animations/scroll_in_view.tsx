"use client"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function ScrollInView({ children }) {
  const offset = 100
  return (
    <motion.div
    initial={{ y:offset, opacity: 0 }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        delayChildren: 0.5,
        staggerChildren: 0.3,
        duration: 0.5
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: offset }
      }}
    >
      {children}
    </motion.div>
  );
}
