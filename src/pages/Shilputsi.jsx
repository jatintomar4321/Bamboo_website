import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Shilputsi = () => {
  

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
      header="Shilputsi" />
      <ZoomImageSection image="/shilputsi.png" />
      <ConceptSection />
      <ZoomImageSection image="/shilp1.png" />
      <ZoomImageSection image="/shilp2.png" />
      <ZoomImageSection image="/shilp3.png" />
      <ZoomImageSection image="/shilp4.png" />


    </motion.div>
  )
}

export default Shilputsi

