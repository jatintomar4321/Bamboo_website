import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Soujanya = () => {
  

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
      header="Soujanya" 
      year="2024"
      client="Jashan Soujanya"  
      service="Production, UIUX, Website (MERN Stack)"
      industry="Pignments & Colours "
      />
      <ZoomImageSection image="/soj.png" />
      <ConceptSection 
      pdp1="Bold pigments, vibrant solutions, delivering the world’s best colours to industries that demand excellence"
      pdp2="Soujanya is the powerhouse behind the pigments and colours that fuel industries across the globe. Based in Mexico and Brazil, we’re the leaders in providing top-tier colour solutions, trusted by manufacturers and creators alike. Our revamped website and UI/UX design now reflect our boldness, making it easier for B2B clients to explore our vast range of products, connect with us, and access the quality they expect. It’s business, but with a bold, colourful twist—just the way we like it."
      d1="Visual Identy"
      d2="UIUX Design"
      d3="Website Development"
      />
      <ZoomImageSection image="/soj1.png" />
      <ZoomImageSection image="/soj2.png" />
      <ZoomImageSection image="/soj3.png" />
      <ZoomImageSection image="/soj4.png" />

    </motion.div>
  )
}

export default Soujanya

