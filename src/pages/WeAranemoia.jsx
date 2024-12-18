import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const WeAranemoia = () => {

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
      header="Wearanemoia" />
      <ZoomImageSection image="/123.png" />
      <ConceptSection />
      <ZoomImageSection image="/w1.png" />
      <ZoomImageSection image="/w2.png" />
      <ZoomImageSection image="/w3.png" />
      <ZoomImageSection image="/w4.png" />
      <ZoomImageSection image="/w5.png" />
    
    </motion.div>
  )
}

export default WeAranemoia

