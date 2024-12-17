import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: "Renu Oberoi",
    category: "Visual Identity",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Deepa Gurnani",
    category: "Visual Identity",
    image: "/2.png",
  },
  {
    id: 3,
    title: "RAF Clothing",
    category: "Brand Strategy",
    image: "/3.png",
  },
  {
    id: 4,
    title: "Ace Blend",
    category: "Web Design",
    image: "/4.png",
  },
  {
    id: 5,
    title: "Wearanemoia",
    category: "Web Design",
    image: "/123.png",
  },
  {
    id: 6,
    title: "Soujanya",
    category: "Web Design",
    image: "/soj.png",
  },
  {
    id: 7,
    title: "Fine Arts",
    category: "Web Design",
    image: "/fine.png",
  },
  {
    id: 8,
    title: "So Quod",
    category: "Web Design",
    image: "/SO.png",
  },
  {
    id: 9,
    title: "Skift ",
    category: "Web Design",
    image: "/skifit.png",
  },
  {
    id: 10,
    title: "Atelier",
    category: "Web Design",
    image: "/atelier.png",
  },
  {
    id: 11,
    title: "The Artist ",
    category: "Web Design",
    image: "/artist.png",
  },
  {
    id: 12,
    title: "Scoo Boo ",
    category: "Web Design",
    image: "/scooboo.png",
  },
  {
    id: 13,
    title: "Kaya Skincare ",
    category: "Web Design",
    image: "/kaya.png",
  },
  {
    id: 14,
    title: "Homes to Life ",
    category: "Web Design",
    image: "/homes.png",
  },
  {
    id: 15,
    title: "Feel Well ",
    category: "Web Design",
    image: "/feelwell.png",
  },
  {
    id: 16,
    title: "Do it Up ",
    category: "Web Design",
    image: "/doitup.png",
  },
  {
    id: 17,
    title: "Shilputsi ",
    category: "Web Design",
    image: "/4.png",
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
                <div className="relative overflow-hidden mb-4">
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
