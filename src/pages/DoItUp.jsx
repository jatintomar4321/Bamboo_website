import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const DoItUp = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{  x: "100%" }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      <DeepaGurnaniHeader 
      header="Do it Up" />
      <ZoomImageSection image="/doitup.png" />
      <ConceptSection />
      <ZoomImageSection image="/do1.png" />
      <ZoomImageSection image="/do2.png" />
      <ZoomImageSection image="/do3.png" />

    </motion.div>
  )
}

export default DoItUp

