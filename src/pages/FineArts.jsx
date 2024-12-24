import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const FineArts = () => {
  

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
      header="Fine Arts" 
      year="2023"
      client=""  
      service="UIUX, Website Development"
      industry="Jwellery"
      />
      <ZoomImageSection image="/fine.png" />
      <ConceptSection 
      pdp1="Transforming art into an online experience showcasing UAE’s finest creations with seamless design."
      pdp2="For Fine Arts, we brought a fresh digital perspective to the UAE-based art platform with a full website revamp and UI/UX redesign. The goal was to create a sophisticated, intuitive space where art lovers could explore and connect with the finest works. By enhancing the visual experience and optimizing usability, we’ve made the online gallery as captivating as the art it showcases."
      d1="Visual Identity "
      d2="UIUX"
      d3="Website Development"
      />
      <ZoomImageSection image="/fine1.png" />
      <ZoomImageSection image="/fine2.png" />
      <ZoomImageSection image="/fine3.png" />
      <ZoomImageSection image="/fine4.png" />
      <ZoomImageSection image="/fine5.png" />
    </motion.div>
  )
}

export default FineArts

