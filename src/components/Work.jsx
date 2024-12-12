'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: "Shaun Park Website",
    category: "Visual Identity",
    image: "/1.jpg",
  },
  {
    id: 2,
    title: "Jimmy Wood Portfolio",
    category: "Visual Identity",
    image: "/2.jpg",
  },
  {
    id: 3,
    title: "Creative Studio",
    category: "Brand Strategy",
    image: "/3.jpg",
  },
  {
    id: 4,
    title: "Digital Agency",
    category: "Web Design",
    image: "/4.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const controls = useAnimation()
  const [isFirstRowLoaded, setIsFirstRowLoaded] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      setTimeout(() => setIsFirstRowLoaded(true), 1000) // Delay second row animation
    }
  }, [inView, controls])

  const firstRowProjects = projects.slice(0, 2)
  const secondRowProjects = projects.slice(2)

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-8 py-10 md:py-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-[2000px] mx-auto"
      >
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b-2 mb-6 sm:mb-10 pb-4 sm:pb-6">
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-[500] mb-2 sm:mb-0"
          >
            Work
          </motion.h2>
          <div className="flex flex-col sm:flex-row w-1/2 justify-between items-start sm:items-center gap-2 sm:gap-8">
            <motion.span
              variants={itemVariants}
              className="text-sm sm:text-lg"
            >
              (2014-2024)
            </motion.span>
            <motion.div variants={itemVariants}>
            <Link 
              to="/work"
              className="text-sm underline hover:opacity-70 transition-opacity"
            >
              View All
            </Link>
            </motion.div>
          </div>
        </div>

        <div className='flex justify-start sm:justify-end mx-0 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20 mb-8 sm:mb-12 md:mb-16'>
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[500] leading-tight max-w-2xl"
          >
            We help brands grow and tell their stories to the world
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {firstRowProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <a href={`/work/${project.id}`}>
                <div className="relative aspect-[16/9] overflow-hidden mb-2 sm:mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-light">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{project.category}</p>
              </a>
            </motion.div>
          ))}
        </div>

        {isFirstRowLoaded && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6"
          >
            {secondRowProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <a href={`/work/${project.id}`}>
                  <div className="relative aspect-[16/9] overflow-hidden mb-2 sm:mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{project.category}</p>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Work

