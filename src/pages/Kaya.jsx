import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Kaya = () => {
  

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
      header="Kaya Skincare" 
      year="2023"
      client=""  
      service="Production, Brand Identity, UIUX "
      industry="SkinCare"
      />
      <ZoomImageSection image="/kaya.png" />
      <ConceptSection 
      pdp1="The Kaya Bride reimagines bridal beauty, offering a flawless skincare journey for every bride"     
      pdp2="For The Kaya Bride, we focused on elevating the brand’s identity by bringing a refined digital experience to brides-to-be. From creating a stunning video shoot and visual communication strategy to revamping the website’s UI/UX, we crafted a seamless journey that showcases Kaya’s skincare expertise. The result? A digital transformation that brings luxury skincare closer to brides, making their experience feel as special as their big day."
      d1="Video Production"
      d2="Brand Identity"
      d3="UIUX"
      />
      <ZoomImageSection image="/Kaya1.png" />
      <ZoomImageSection image="/kaya2.png" />
      <ZoomImageSection image="/kaya3.png" />

    </motion.div>
  )
}

export default Kaya

