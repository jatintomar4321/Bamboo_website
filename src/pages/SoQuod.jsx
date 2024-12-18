import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const SoQuod = () => {

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
      header="So Quod" />
      <ZoomImageSection image="/SO.png" />
      <ConceptSection />
      <ZoomImageSection image="/so1.png" />
      <ZoomImageSection image="/so2.png" />
      <ZoomImageSection image="/so3.png" />
      <ZoomImageSection image="/so4.png" />


     

    </motion.div>
  )
}

export default SoQuod

