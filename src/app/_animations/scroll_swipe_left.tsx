"use client"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function ScrollSwipeLeft({ children }: { children: React.ReactNode }) {
  const offset = 300
  return (
    <motion.div
      initial={{ x:offset }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.5,
      }}
      variants={{
        visible: { x: 0 },
        hidden: { x: offset }
      }}
    >
      {children}
    </motion.div>
  );
}
