import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ConceptSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
    hidden: { opacity: 0, y: 20 },
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
    <section className="min-h-screen bg-white px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-[2000px] mx-auto py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-[450]  leading-tight mb-32 lg:max-w-[50%]"
        >
          Award-Winning Concept that would appeal to target audience and elevate brand image
        </motion.h2>

        <div className="grid grid-cols-1 border-t-2 lg:grid-cols-2 gap-8 lg:gap-32">
          <motion.div variants={itemVariants} className="space-y-3 ">
            <div className="flex  items-center gap-4">
              <span className="text-lg">Deliverable</span>
            </div>
            <div className="flex justify-between border-t w-80 items-center gap-4">
                
              <span className="text-lg">Strategy</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </div>
            <div className="flex justify-between border-t w-80 items-center gap-4">
            
              <span className="text-lg">Web Design</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </div>
            <div className="flex justify-between border-t w-80 items-center gap-4">
             
              <span className="text-lg">Art Direction</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg leading-relaxed">
              A good website is one that is well-designed and user-friendly, offering a pleasant and seamless experience for visitors. It effectively communicates its purpose or content, provides valuable and relevant information, and is visually appealing. A good website often has clear navigation menus, intuitive layout, and fast loading times. It also ensures accessibility for users with disabilities and is compatible with different devices and browsers. Additionally, a good website incorporates proper SEO practices to improve its visibility and ranking in search engine results
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ConceptSection

