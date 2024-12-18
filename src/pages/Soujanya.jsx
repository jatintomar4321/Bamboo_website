import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Soujanya = () => {
  

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
      header="Soujanaya" />
      <ZoomImageSection image="/soj.png" />
      <ConceptSection />
      <ZoomImageSection image="/soj1.png" />
      <ZoomImageSection image="/soj2.png" />
      <ZoomImageSection image="/soj3.png" />
      <ZoomImageSection image="/soj4.png" />

    </motion.div>
  )
}

export default Soujanya

