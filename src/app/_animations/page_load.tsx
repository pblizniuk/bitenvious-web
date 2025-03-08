'use client'
import { motion } from 'framer-motion'

type PageLoadProps = {
  children: React.ReactNode
  offset?: number
}

export default function PageLoad(props: PageLoadProps) {
  const { offset = 20 } = props
  return (
    <motion.div
      initial={{ y: offset, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        delayChildren: 0.5,
        staggerChildren: 0.1,
        duration: 0.75,
      }}
    >
      {props.children}
    </motion.div>
  )
}
