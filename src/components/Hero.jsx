import React, { useState, useEffect, useRef } from 'react'
import Nav from './Nav'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [animationStarted, setAnimationStarted] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true)
        setTimeout(() => setAnimationStarted(true), 500) // Delay the start of text animations
      })
    }
  }, [])

  const getAnimationClass = (delay) => {
    return `transition-all duration-1000 ease-out ${
      animationStarted
        ? 'translate-y-2 opacity-100'
        : 'translate-y-6 opacity-0'
    } ${delay}`
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      
      {/* Navigation */}
      <Nav />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="max-w-[2000px] mx-auto px-4 md:px-8 pt-24">
          <h1 className={`text-white text-[12vw] md:text-[9.3vw] leading-none font-[500] max-w-[100%] md:max-w-[100%] ${getAnimationClass('delay-300')}`}>
            Unleashing the Power of Your Brand
          </h1>
        </div>
        
        <div className="max-w-[2000px] px-4 md:px-8 pb-8 md:pb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0">
          <span className={`text-white text-base md:text-lg ${getAnimationClass('delay-500')}`}>
            London / UK
          </span>
          <p className={`text-white mr-96 max-w-md text-base md:text-lg ${getAnimationClass('delay-700')}`}>
            A strategic social media and marketing studio with a common vision of using social media to connect clients with their audiences
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

