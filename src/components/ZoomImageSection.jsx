'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const ZoomImageSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const [imageAspectRatio, setImageAspectRatio] = useState(1)
  const isInView = useInView(sectionRef, { amount: 0.1, once: false })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1.3])

  useEffect(() => {
    const img = new Image()
    img.src = '/zoom1.webp'
    img.onload = () => {
      setImageAspectRatio(img.width / img.height)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="max-h-screen relative overflow-hidden py-4 px-2"
    >
      <div className="w-full h-full overflow-hidden">
        <motion.div
          ref={imageRef}
          className="w-full h-full"
          initial={{ scale: 2 }}
          style={{ 
            scale: isInView ? scale : 2,
            height: `calc(100vw / ${imageAspectRatio})`,
            maxHeight: '100vh',
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full">
            <img
              src="/zoom1.webp"
              alt="Watercolor landscape painting showing a serene beach scene"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ZoomImageSection

