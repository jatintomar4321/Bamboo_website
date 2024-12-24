import { motion } from 'framer-motion'
import { header } from 'framer-motion/client'

const DeepaGurnaniHeader = ({header,year,client,service,industry}) => {
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
    <header className=" lg:min-h-[70vh] flex flex-col justify-between px-3 md:px-2 lg:px-4 pb-10  pt-6 md:pt-4 lg:pt-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className=""
      >
        <motion.h1 
          variants={itemVariants}
          className="text-[5rem] md:text-[8rem] lg:text-[10rem] leading-tighter font-[550]"
        >
          {header}
        </motion.h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col-4 md:flex-col-2 justify-between  sm:text-md   pt-16 border-b pb-4"
      >
        <motion.div variants={itemVariants} className=" text-xl sm:text-2xl md:4xl lg:4xl">
          
          <p>{year}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1 leading-tight text-md sm:text-md lg:xl">
          <p className=" text-gray-500">Client</p>
          <p>{client}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1 leading-tight text-md sm:text-md lg:xl">
          <p className=" text-gray-500">Service</p>
          <p>{service}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1 leading-tight text-md sm:text-md lg:xl">
          <p className=" text-gray-500">Industry</p>
          <p>{industry}</p>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default DeepaGurnaniHeader

