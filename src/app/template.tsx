// "use client"
//import { motion } from "framer-motion"

// const variants = {
// hidden: { opacity: 0, x: -200, y: 0 },
// enter: { opacity: 1, x: 0, y: 0 },
// }

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
    // <motion.main
    //   initial={{ y:20, opacity: 0 }}
    //   animate={{ y:0, opacity: 1 }}
    //   transition={{ ease: "easeInOut", duration: 0.75}}
    // >
    //   {children}
    // </motion.main>
    // <motion.main
    //   variants={variants}
    //   initial="hidden"
    //   animate="enter"
    //   transition={{ type: "linear" }}
    // >
    //   {children}
    // </motion.main>
  )
}
