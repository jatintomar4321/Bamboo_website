import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Raf = () => {
  const { id } = useParams()

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
      <DeepaGurnaniHeader projectId={id}
      header=" RAF Clothing" />
      <ZoomImageSection image="/3.png" />
      <ConceptSection />
      <ZoomImageSection image="/raf1.png" />
      <ZoomImageSection image="/raf2.png" />
      <ZoomImageSection image="/raf3.png" />
      <ZoomImageSection image="/raf4.png" />
      <ZoomImageSection image="/raf5.png" />
      <ZoomImageSection image="/raf6.png" />
      <ZoomImageSection image="/raf7.png" />
      <ZoomImageSection image="/raf8.png" />


    </motion.div>
  )
}

export default Raf

