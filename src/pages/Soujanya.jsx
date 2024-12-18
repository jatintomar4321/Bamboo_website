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
      <ZoomImageSection image="/2.png" />
      <ConceptSection />
      <ZoomImageSection image="/deepa1.png" />
      <ZoomImageSection image="/deepa2.png" />
      <ZoomImageSection image="/deepa3.png" />
      <ZoomImageSection image="/deepa4.png" />
      <ZoomImageSection image="/deepa5.png" />
      <ZoomImageSection image="/deepa6.png" />
      <ZoomImageSection image="/deepa7.png" />

    </motion.div>
  )
}

export default Soujanya

