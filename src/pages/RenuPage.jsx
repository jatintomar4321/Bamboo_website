import { motion } from 'framer-motion'
import { useEffect } from 'react'

import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const RenuPage = () => {
 

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
      header="Renu Oberoi" />
      <ZoomImageSection image="/1.png" />
      <ConceptSection />
      <ZoomImageSection image="/Renu1.png" />
      <ZoomImageSection image="/renu2.png" />
      <ZoomImageSection image="/renu3.png" />
      <ZoomImageSection image="/renu4.png" />
    

    </motion.div>
  )
}

export default RenuPage

