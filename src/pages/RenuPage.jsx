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
      header="Renu Oberoi" 
      year="2024"
      client="Renu Oberoi"  
      service="Visual Identity. "
      industry=" Jewellery"
      />
      <ZoomImageSection image="/1.png" />
      <ConceptSection 
      pdp1="Glamour reimagined online—turning timeless jewelry into a truly sparkling digital experience."
      pdp2="For Renu Oberoi, it wasn’t just about having a website; it was about creating a space where luxury could shine. We brought the brilliance of their collections to life with rich visuals, fluid videos, and a design language that exudes sophistication. From prêt to classics, every piece is celebrated in a way that feels effortless yet extraordinary. The content flows with grace, and the custom development ensures every interaction is as polished as the jewelry. It’s not just a website; it’s a luxury experience tailored for the modern shopper."
      d1="Enhanced Visual Communication "
      d2="UIUX Design"
      d3="Website Development"
      />
      <ZoomImageSection image="/Renu1.png" />
      <ZoomImageSection image="/renu2.png" />
      <ZoomImageSection image="/renu3.png" />
      <ZoomImageSection image="/renu4.png" />
    

    </motion.div>
  )
}

export default RenuPage

