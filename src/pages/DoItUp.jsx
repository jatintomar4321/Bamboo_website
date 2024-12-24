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
      client=""  
      service="Visual Identity, Digital Revamp "
      industry="Decor + Event"
      />
      <ZoomImageSection image="/doitup.png" />
      <ConceptSection 
      pdp1="Where bold design and New York-inspired fashion meet creating a dynamic online experience."
      pdp2="Revamping Quod by Ikshit Pande’s digital presence was all about capturing the essence of contemporary style. We reimagined the UI/UX, creating a website that’s as fresh and unique as the brand itself. The transformation ensured an effortless shopping experience, showcasing the bold, artistic designs in a user-friendly format."      
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

