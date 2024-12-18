import { motion } from 'framer-motion'
import { useEffect } from 'react'

import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const AceBlend = () => {
 

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
      header="Ace Blend" />
      <ZoomImageSection image="/4.png" />
      <ConceptSection />
      <ZoomImageSection image="/ace1.png" />
      <ZoomImageSection image="/ace2.png" />
      <ZoomImageSection image="/ace3.png" />
      <ZoomImageSection image="/ace4.png" />
      <ZoomImageSection image="/ace5.png" />
      <ZoomImageSection image="/ace6.png" />

    </motion.div>
  )
}

export default AceBlend

