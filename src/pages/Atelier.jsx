import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Atelier = () => {

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
      header="Atelier" 
      year="2024"
      client="Renu Oberoi"  
      service="UIUX Revamp,Shopify Website Development,Visual Communication "
      industry="Decor"
      />
      <ZoomImageSection image="/atelier.png" />
      <ConceptSection 
      pdp1="Where luxury meets simplicity, crafting an online experience as refined as the designs"
      pdp2= "Bringing luxury into the digital space takes precision, and with Atelier Ashiesh Shah, we ensured every element reflected their design ethos. From the curated user flow to the seamless navigation, the website captures the atelier’s attention to detail while making the experience effortless for users. It’s not just a website; it’s a virtual extension of the ateliera space where craftsmanship and innovation come together beautifully."
      d1="UIUX"
      d2="Website Development"
      d3="Visual Communication"
      />
      <ZoomImageSection image="/at1.png" />
      <ZoomImageSection image="/at2.png" />
      <ZoomImageSection image="/at3.png" />
      <ZoomImageSection image="/at4.png" />

    </motion.div>
  )
}

export default Atelier

