"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function SvgShuffleLoader() {
  const [positions, setPositions] = useState([0, 1, 2, 3])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setPositions(prevPositions => {
        const newPositions = [...prevPositions]
        for (let i = newPositions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newPositions[i], newPositions[j]] = [newPositions[j], newPositions[i]]
        }
        return newPositions
      })
    }, 1000) // Shuffle every 1 second for faster animation

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prevProgress + 1
      })
    }, 50) // Update progress every 30ms to complete in 3 seconds

    return () => {
      clearInterval(shuffleInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center space-y-14 justify-center">
      <div className="flex items-center justify-center w-[74px] h-[74px] mb-4">
        <div className="relative w-full h-full">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: (position % 2) * (36 + 1), // 36px (image width) + 1px gap
                y: Math.floor(position / 2) * (36 + 1),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="absolute"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-4-jOv6HZc680rlBMUA7Kyh342hVTKxqC.svg"
                alt="Loader graphic"
                width={36}
                height={36}
                className="w-9 h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-[300px] h-1  bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </div>
  )
}

