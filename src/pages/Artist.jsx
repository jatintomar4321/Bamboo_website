import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ConceptSection from '../components/ConceptSection'
import DeepaGurnaniHeader from '../components/DeepaGurnaniHeader'
import ZoomImageSection from '../components/ZoomImageSection'

const Artist = () => {

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
      header="The Artist" 
      year="2024"
      client=" "  
      service="Visual Identity "
      industry="Decor"
      />
      <ZoomImageSection image="/artist.png" />
      <ConceptSection 
      pdp1="Handcrafted luxury, now online—elevating tradition with a modern touch  "
      pdp2="The Artisan Anukedia’s timeless jewelry now shines in the digital space. With a complete website and UI/UX revamp, we’ve created an effortless shopping experience that mirrors the elegance of their handcrafted designs. Customers can explore a seamless blend of luxury and simplicity, with every detail reflecting the meticulous craftsmanship behind each piece."
      d1="Visual Identity "
      d2="UIUX Design"
      d3="Website Development"
      />
      <ZoomImageSection image="/Artist1.png" />
      <ZoomImageSection image="/artist2.png" />
      <ZoomImageSection image="/deepa3.png" />
      <ZoomImageSection image="/deepa4.png" />
      <ZoomImageSection image="/deepa5.png" />
      <ZoomImageSection image="/deepa6.png" />
      <ZoomImageSection image="/deepa7.png" />

    </motion.div>
  )
}

export default Artist

