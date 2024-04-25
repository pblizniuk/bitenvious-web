'use client'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Cursor = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothingOptions = { damping: 30, stiffness: 200, mass: 0.1 }

  const smoothMouse = {
    x: useSpring(mouse.x, smoothingOptions),
    y: useSpring(mouse.y, smoothingOptions)
  }

  const [isHovering, setIsHovering] = useState(false)
  const cursorSize = !isHovering ? 28 : 96

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
    // console.log('mounting')
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    return () => {
      // console.log('unmounting')
      document.removeEventListener('mousemove', onMouseMove)
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [cursorSize, isHovering])

  return (
    <motion.div className='cursor hidden lg:block fixed bg-white top-1/2 left-1/2 z-50 mix-blend-difference rounded-full pointer-events-none h-7 w-7' animate={{ width: cursorSize, height: cursorSize }} style={{ left: smoothMouse.x, top: smoothMouse.y }} />
  )
}

export default Cursor