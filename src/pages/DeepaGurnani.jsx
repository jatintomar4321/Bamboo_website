import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const DeepaGurnani = () => {
  

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
      header="Deepa Gurnani" 
      year="2024"
      client="Deepa Gurnani"  
      service="Visual Identity "
      industry="Jwellery"
      />
      <ZoomImageSection image="/2.png" />
      <ConceptSection 
      pdp1=" Redefining elegance in the digital space, here craftsmanship meets modern transformation"
      pdp2="This transformation goes beyond aesthetics  it’s a platform that celebrates craftsmanship while ensuring effortless discoverability. With a perfect blend of artistry and functionality, the website positions Deepa Gurnani as a global beacon for Indian craftsmanship in the luxury accessories space."
      d1="Visual Identity "
      d2="UIUX Design"
      d3="Website Development"
      />
      <ZoomImageSection image="/deepa1.png" />
      <ZoomImageSection image="/deepa2.png" />
      <ZoomImageSection image="/deepa3.png" />
      <ZoomImageSection image="/deepa4.png" />
      <ZoomImageSection image="/deepa5.png" />
      <ZoomImageSection image="/deepa6.png" />
      <ZoomImageSection image="/deepa7.png" />

    </motion.div>
  )
}

export default DeepaGurnani

