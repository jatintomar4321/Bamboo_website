import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Shilputsi = () => {
  

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
      header="Shilputsi" 
      year="2023"
      client=""  
      service="Website Revamp, SEO, UIUX & Development "
      industry="HR Solutions"
      />
      <ZoomImageSection image="/shilputsi.png" />
      <ConceptSection 
      pdp1="Bridging 45 years of expertise with a fresh, digital approach to modern HR solutions."
      pdp2="Shilputsi’s legacy of 45 years in revolutionizing HR solutions continues with a fresh, seamless digital experience. We redesigned their website with a user-focused UI/UX overhaul, making it easier for clients to access cutting-edge HR insights. Paired with strong SEO strategies, we’ve enhanced their digital presence to reflect the trust and expertise they’ve built over decades. The new website offers a sophisticated, intuitive space for clients, driving engagement and empowering businesses to navigate HR challenges with confidence and ease"
      d1="Digital Revamp"
      d2="UIUX Design"
      d3=""
      />
      <ZoomImageSection image="/shilp1.png" />
      <ZoomImageSection image="/shilp2.png" />
      <ZoomImageSection image="/shilp3.png" />
      <ZoomImageSection image="/shilp4.png" />


    </motion.div>
  )
}

export default Shilputsi

