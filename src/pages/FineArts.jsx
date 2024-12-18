import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const FineArts = () => {
  

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
      header="Fine Arts" />
      <ZoomImageSection image="/fine.png" />
      <ConceptSection />
      <ZoomImageSection image="/fine1.png" />
      <ZoomImageSection image="/fine2.png" />
      <ZoomImageSection image="/fine3.png" />
      <ZoomImageSection image="/fine4.png" />
      <ZoomImageSection image="/fine5.png" />
    </motion.div>
  )
}

export default FineArts

