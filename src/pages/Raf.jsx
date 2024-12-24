import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Raf = () => {
  const { id } = useParams()

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
      header="RAF Clothing" 
      year="2024"
      client="Rafat Kazi"  
      service="Website on Shopify"
      industry="Clothing"
      />
      <ZoomImageSection image="/3.png" />
      <ConceptSection 
      pdp1="Style and sophistication, now just a click away—meet RAF Clothing’s online charm"     
      pdp2="By blending clean, modern design with intuitive functionality, the website now reflects RAF Clothing’s commitment to quality and style. It’s more than an online store,it’s a digital runway that captures the essence of their brand for a global audience."      
      d1="UIUX Design"
      d2="Visual Identity"
      d3="Website Development"
      />
      <ZoomImageSection image="/raf1.png" />
      <ZoomImageSection image="/raf2.png" />
      <ZoomImageSection image="/raf3.png" />
      <ZoomImageSection image="/raf4.png" />
      <ZoomImageSection image="/raf5.png" />
      <ZoomImageSection image="/raf6.png" />
      <ZoomImageSection image="/raf7.png" />
      <ZoomImageSection image="/raf8.png" />


    </motion.div>
  )
}

export default Raf

