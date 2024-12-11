'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

  const memoizedProjects = useMemo(() => projects, [])

  return (
    <section className="min-h-screen bg-white px-4 md:px-8 py-10 md:py-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-[2000px] mx-auto"
      >
        <div className="flex justify-between items-baseline border-b-2 mb-10">
          <motion.h2
            variants={itemVariants}
            className="text-[12rem] md:text-[13rem] font-[500]"
          >
            Work
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8"
          >
            <span className="text-sm">(2014-2024)</span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <a 
              href="/work"
              className="text-sm underline hover:opacity-70 transition-opacity"
            >
              View All
            </a>
          </motion.div>
        </div>

        <div className='flex justify-end mx-20'>
          <motion.p
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-[500] leading-tight mb-16 md:mb-24 max-w-2xl"
          >
            We help brands grow and tell their stories to the world
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memoizedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <a href={`/work/${project.id}`}>
                <div className="relative aspect-[16/9] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-light">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Work

