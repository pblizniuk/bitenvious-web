import { motion, useScroll, useSpring } from 'framer-motion'

type ScrollIndicatorProps = {
  showScrollIndicator: boolean
}

const ScrollIndicator = (props: ScrollIndicatorProps) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (!props.showScrollIndicator) return null
  return (
    <>
      <motion.div
        className="progress-bar fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-fuchsia-600"
        style={{ scaleX }}
      />
    </>
  )
}

export default ScrollIndicator
