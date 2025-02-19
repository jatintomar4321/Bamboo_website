"use client"

import { useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function Founder() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 }
  const rotateX = useSpring(mouseY, springConfig)
  const rotateY = useSpring(mouseX, springConfig)
  const translateX = useTransform(rotateY, [-25, 25], [-15, 15])
  const translateY = useTransform(rotateX, [-25, 25], [-15, 15])

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()

      const centerX = rect.left + rect.width / 1
      const centerY = rect.top + rect.height / 1

      mouseX.set(((event.clientX - centerX) / rect.width) * 30)
      mouseY.set(-((event.clientY - centerY) / rect.height) * 30)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-8 bg-black text-white min-h-screen relative overflow-hidden"
    >
      <motion.div
        className="flex flex-col justify-center px-8 md:px-16 py-12 md:py-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          className="font-['Playfair_Display'] text-5xl md:text-6xl mb-4 italic"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Rishabh Suman Kapoor
        </motion.h1>

        <motion.h2
          className="text-sm tracking-[0.2em] mb-8 text-gray-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          FOUNDER & CEO
        </motion.h2>

        <motion.p
          className="text-gray-200 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Alexander is a visionary leader with over 15 years of experience in entrepreneurship and digital innovation.
          His passion for creating cutting-edge solutions has helped shape the industry, driving his company towards
          success with a focus on creativity and technology.
        </motion.p>
      </motion.div>

      <motion.div className="relative flex justify-center items-center w-full h-auto md:min-h-[500px]">
        <motion.div
          className="w-[60%] md:w-[50%] h-auto mx-auto max-h-[550px]"
          style={{
            rotateX,
            rotateY,
            translateX,
            translateY,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
            alt="Founder Portrait"
            className="object-cover w-full h-auto rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent rounded-lg pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  )
}

