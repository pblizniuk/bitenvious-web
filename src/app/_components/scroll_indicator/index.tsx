import { motion, useScroll, useSpring } from "framer-motion";

type ScrollIndicatorProps = {
  showScrollIndicator: boolean
}

const ScrollIndicator = (props:ScrollIndicatorProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if(!props.showScrollIndicator) return null
  return (
    <>
      {/* <div className="scroll-indicator h-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 w-0" id="myBar"></div> */}
      <motion.div className="progress-bar fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-fuchsia-600 to-pink-600 z-50" style={{ scaleX }} />
    </>
  )
}

export default ScrollIndicator