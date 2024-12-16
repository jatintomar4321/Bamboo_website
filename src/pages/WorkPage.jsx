import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
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
  {
    id: 5,
    title: "Digital Agency",
    category: "Web Design",
    image: "/4.jpg",
  },
  {
    id: 6,
    title: "Digital Agency",
    category: "Web Design",
    image: "/4.jpg",
  },
  {
    id: 7,
    title: "Digital Agency",
    category: "Web Design",
    image: "/4.jpg",
  },
  {
    id: 8,
    title: "Digital Agency",
    category: "Web Design",
    image: "/4.jpg",
  },
  {
    id: 9,
    title: "Digital Agency",
    category: "Web Design",
    image: "/4.jpg",
  },
  {
    id: 10,
    title: "Digital Agency",
    category: "Web Design",
    image: "/4.jpg",
  },
]

const WorkPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  return (
    <section className="min-h-screen bg-white px-4 md:px-8 pb-20 md:pb-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-[2000px] mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[9rem] md:text-[12rem] font-light pb-6 md:pb-52 pt-10 border-b-2"
        >
          Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <Link to={`/work/${project.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-light">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default WorkPage
