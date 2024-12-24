import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const FeelWell = () => {

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
      header="Feel Well" 
      year="2024"
      client="Deepa Gurnani"  
      service="UIUX Revamp, Website Development  "
      industry="Jwellery"
      />
      <ZoomImageSection image="/feelwell.png" />
      <ConceptSection 
      pdp1="Jewelry that tells a story,crafted with precision, now made effortlessly accessible online"
      pdp2="Feelwell Garments specializes in jewelry that combines craftsmanship and elegance. We helped bring their exquisite designs to the digital world by revamping their website with a seamless UI/UX experience. With a focus on accessibility and elegance, the site now showcases their stunning collections in a way that enhances every customer’s journey from browsing to purchase."
      d1="Visual Identity "
      d2="UIUX Revamp"
      d3="Website Development"
      />
      <ZoomImageSection image="/feel1.png" />
      <ZoomImageSection image="/feel2.png" />
      <ZoomImageSection image="/feel3.png" />
      <ZoomImageSection image="/feel4.png" />


    </motion.div>
  )
}

export default FeelWell

