'use client'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Cursor = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothingOptions = { damping: 30, stiffness: 200, mass: 0.1 }

  const smoothMouse = {
    x: useSpring(mouse.x, smoothingOptions),
    y: useSpring(mouse.y, smoothingOptions),
  }

  const [isHovering, setIsHovering] = useState(false)
  const cursorSize = !isHovering ? 28 : 96
  const pathname = usePathname()

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      mouse.x.set(clientX - cursorSize / 2)
      mouse.y.set(clientY - cursorSize / 2)
    }

    const onMouseEnter = (event: MouseEvent) => {
      setIsHovering(true)
    }

    const onMouseLeave = (event: MouseEvent) => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [cursorSize, isHovering, mouse.x, mouse.y])

  useEffect(() => {
    setIsHovering(false)
  }, [pathname])

  return (
    <motion.div
      className="cursor pointer-events-none fixed left-1/2 top-1/2 z-50 hidden h-7 w-7 rounded-full bg-white mix-blend-difference lg:block"
      animate={{ width: cursorSize, height: cursorSize }}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    />
  )
}

export default Cursor
