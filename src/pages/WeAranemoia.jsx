import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const WeAranemoia = () => {

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
      header="Wearanemoia" 
      year="2024"
      client="Abeer Jogadia"  
      service="Brand Identity ,Production, Website "
      industry="Clothing  "
      />
      <ZoomImageSection image="/123.png" />
      <ConceptSection 
      pdp1="Fashion as art,every piece tells a story, and we made it digitally unforgettable."
      pdp2="Anemoia’s creativity isn’t just about clothes, it’s a vibe, a feeling that needed to shine online. We took their bold vision and transformed it into a website that brings their brainchild to life. Think of it like taking a Bollywood blockbuster and turning it into a seamless online experience. From chaotic sketches to curated perfection, our UI/UX revamp made sure each click felt like you were walking through a couture runway, not just browsing a site"
      d1="Visual Communication"
      d2=" UIUX and Website"
      d3=" Brand Identity"
      />
      <ZoomImageSection image="/w1.png" />
      <ZoomImageSection image="/w2.png" />
      <ZoomImageSection image="/w3.png" />
      <ZoomImageSection image="/w4.png" />
      <ZoomImageSection image="/w5.png" />
    
    </motion.div>
  )
}

export default WeAranemoia

