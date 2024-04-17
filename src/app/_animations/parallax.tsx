"use client"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function Parallax({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const transforms = useTransform(scrollY, [0, 1000], [0, -300]);
  const offset = useSpring(transforms, {
    stiffness: 150,
    damping: 50
  });


  return (
    <motion.div
      style={{ y:offset }}
    >
      {children}
    </motion.div>
  )
}