import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const ScooBoo = () => {

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
      header="Scoo Boo" />
      <ZoomImageSection image="/scooboo.png" />
      <ConceptSection />
      <ZoomImageSection image="/sb1.png" />
      <ZoomImageSection image="/sb2.png" />
      <ZoomImageSection image="/sb3.png" />
      <ZoomImageSection image="/sb4.png" />
      <ZoomImageSection image="/sb5.png" />
      <ZoomImageSection image="/sb6.png" />

    </motion.div>
  )
}

export default ScooBoo

