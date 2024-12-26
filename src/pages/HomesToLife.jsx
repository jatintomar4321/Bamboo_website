import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const HomesToLife = () => {

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
      header="Homes To Life" 
      year="2023"
      client="Shubham Dandwate "  
      service="Production,Marketing Communication "
      industry="Decor"
      />
      <ZoomImageSection image="/homes.png" />
      <ConceptSection 
      pdp1="Bringing Singapore’s luxury home brand to India with impactful performance marketing and creative strategy."     
      pdp2="Homes to Life’s journey from Singapore to India was driven by more than just stunning visuals. We combined video production with a targeted performance marketing strategy, creating a powerful entry into the Indian market. The result? A 7x return on ad spend, making their digital presence a key player in expanding the brand’s reach and success."
      d1="Visual Identity "
      d2="UIUX"
      d3="Website Development"
      />
      <ZoomImageSection image="/homes1.png" />
      <ZoomImageSection image="/homes2.png" />
      <ZoomImageSection image="/homes3.png" />
      <ZoomImageSection image="/homes4.png" />
      <ZoomImageSection image="/homes5.png" />
      <ZoomImageSection image="/homes6.png" />

    </motion.div>
  )
}

export default HomesToLife

