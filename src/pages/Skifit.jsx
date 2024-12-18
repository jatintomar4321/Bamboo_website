import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Skifit = () => {

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
      header="Skifit" />
      <ZoomImageSection image="/skifit.png" />
      <ConceptSection />
      <ZoomImageSection image="/skifit12.png" />
      <ZoomImageSection image="/skifit1.png" />
      <ZoomImageSection image="/skifit3.png" />
      <ZoomImageSection image="/skifit4.png" />
    </motion.div>
  )
}

export default Skifit

