import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Skifit = () => {

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
      header="SkiFit" 
      year="2023"
      client=""  
      service="Brand Identity, Website Development, UIUX and Production"
      industry="Skin Care"
      />
      <ZoomImageSection image="/skifit.png" />
      <ConceptSection 
      pdp1="Empowering athletes with skincare solutions through a seamless digital experience."
      pdp2="Beyond the website, we knew Skiftcare’s digital presence needed to extend into the world of social media in a way that felt just as dynamic. So, we created stunning 3D videos that brought their brand to life, strategically rolling them out across YouTube and social platforms. These videos weren’t just about showcasing their services,they were about telling the story of how Skiftcare is revolutionizing healthcare, one click at a time. With this approach, we connected the brand with its audience in a meaningful, visually engaging way."
      d1="Video Production"
      d2="Brand Identity"
      d3="Website Design"
      />
      <ZoomImageSection image="/skifit12.png" />
      <ZoomImageSection image="/skifit1.png" />
      <ZoomImageSection image="/skifit3.png" />
      <ZoomImageSection image="/skifit4.png" />
    </motion.div>
  )
}

export default Skifit

