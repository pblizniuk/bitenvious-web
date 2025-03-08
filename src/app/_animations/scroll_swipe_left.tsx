'use client'
import {
  cubicBezier,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

export default function ScrollSwipeLeft({
  children,
}: {
  children: React.ReactNode
}) {
  const offset = 150
  return (
    <motion.div
      initial={{ x: offset }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        ease: cubicBezier(0.5, 1, 0.89, 1),
        duration: 1.5,
        delay: 0.5,
      }}
      variants={{
        visible: { x: 0 },
        hidden: { x: offset },
      }}
    >
      {children}
    </motion.div>
  )
}
