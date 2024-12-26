import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const ScooBoo = () => {

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
      header="Scoo Boo" 
      year="2023"
      client=""  
      service="UIUX Revamp, Website Development "
      industry="Stationary "
      />
      <ZoomImageSection image="/scooboo.png" />
      <ConceptSection 
      pdp1="Stationary made desirable and accessible with faster UX "
      pdp2="Scooboo brings kids’ imagination to life through thoughtfully designed, safe, and fun products. We took their playful vision and translated it into a seamless digital experience. From browsing to checkout, the new website and UI/UX revamp create a space where parents and kids can easily explore and discover. The result? A joyful online playground that reflects the fun and innovation Scooboo stands for,making shopping as playful as their products!"      
      d1="UIUX Revamp"
      d2="Website Development"
     
      />
      <ZoomImageSection image="/sb1.png" />
      <ZoomImageSection image="/sb2.png" />
      <ZoomImageSection image="/sb3.png" />
      <ZoomImageSection image="/sb4.png" />
      <ZoomImageSection image="/sb5.png" />
      <ZoomImageSection image="/sb6.png" />

    </motion.div>
  )
}

export default ScooBoo

