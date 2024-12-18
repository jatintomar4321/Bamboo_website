import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const FeelWell = () => {

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
      header="Feel Well" />
      <ZoomImageSection image="/feelwell.png" />
      <ConceptSection />
      <ZoomImageSection image="/feel1.png" />
      <ZoomImageSection image="/feel2.png" />
      <ZoomImageSection image="/feel3.png" />
      <ZoomImageSection image="/feel4.png" />


    </motion.div>
  )
}

export default FeelWell

