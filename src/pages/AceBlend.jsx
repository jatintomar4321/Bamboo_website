import { motion } from 'framer-motion'
import { useEffect } from 'react'

import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const AceBlend = () => {
 

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
      header="Ace Blend" 
      year="2024"
      client="Shivam Hingorani"  
      service="UIUX,Website on Shopify,Content "
      industry=" Health, Fitness & Food "
      />
      <ZoomImageSection image="/4.png" />
      <ConceptSection 
      pdp1="Wellness made easy—find your balance with India’s most loved health platform"
      pdp2="From daily nutrition to fitness essentials, the website provides a seamless journey that’s both inspiring and practical. AceBlend is now more than just a store,it’s a digital destination for health and wellness, embodying the balance of innovation and simplicity."
      d1="Enhanced Visual Communication "
      d2="UIUX Design"
      d3="Website Development"
      />
      <ZoomImageSection image="/ace1.png" />
      <ZoomImageSection image="/ace2.png" />
      <ZoomImageSection image="/ace3.png" />
      <ZoomImageSection image="/ace4.png" />
      <ZoomImageSection image="/ace5.png" />
      <ZoomImageSection image="/ace6.png" />

    </motion.div>
  )
}

export default AceBlend

