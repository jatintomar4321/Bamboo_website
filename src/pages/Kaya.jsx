import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Kaya = () => {
  

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
      header="Kaya" />
      <ZoomImageSection image="/kaya.png" />
      <ConceptSection />
      <ZoomImageSection image="/Kaya1.png" />
      <ZoomImageSection image="/kaya2.png" />
      <ZoomImageSection image="/kaya3.png" />

    </motion.div>
  )
}

export default Kaya

