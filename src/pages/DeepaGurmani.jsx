import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import DeepaGurmaniHeader from '../components/DeepaGurmaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'
import ConceptSection from '../components/ConceptSection'

const DeepaGurmani = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
      className="min-h-screen bg-white"
    >
      <DeepaGurmaniHeader projectId={id} />
      <ZoomImageSection />
      <ConceptSection />
      <ZoomImageSection />
      <ZoomImageSection />
      <ZoomImageSection />
      <ZoomImageSection />
    </motion.div>
  )
}

export default DeepaGurmani

