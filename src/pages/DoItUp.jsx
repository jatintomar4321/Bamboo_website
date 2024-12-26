import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const DoItUp = () => {

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
      header="Do It Up" 
      year="2024"
      client="Taral Jadhav"  
      service="Visual Identity, Digital Revamp "
      industry="Decor, Event"
      />
      <ZoomImageSection image="/doitup.png" />
      <ConceptSection 
      pdp1="From local flair to luxury vibes, we gave Do It Up’s events a digital glow-up"
      pdp2="At Bamboo Digital, we helped Do It Up take their event expertise online with flair. From bridal showers to dazzling soirées, we revamped their website to match their vision—simple, stylish, and as organized as their events. With our UI/UX wizardry and sleek functionality, finding decor solutions is now as effortless as saying, Let’s celebrate!"      
      d1="Visual Identity "
      d2="UIUX Revamp"
      d3="Website Development"
      />
      <ZoomImageSection image="/do1.png" />
      <ZoomImageSection image="/do2.png" />
      <ZoomImageSection image="/do3.png" />

    </motion.div>
  )
}

export default DoItUp

