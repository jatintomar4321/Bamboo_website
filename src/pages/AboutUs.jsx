import React from 'react'
import AboutHome from '../components/AboutHome'
import ZoomImageSection from '../components/ZoomImageSection'
import Founder from '../components/Founder'
import Founder2 from '../components/Founder2'
import Character from '../components/Character';
import ScrollZoomAnimation from '../components/ScrollZoomAnimation'


const paragraph = 
    "2022:  The inception of Bamboo Digital with the mission to transform brands through creativity and strategy."
    const paragraph2 = 
    "2023: Expanding our services across industries, with a focus on luxury, sustainability, and emerging startups."
    const paragraph3 = 
    "2024: Achieved significant growth by working with global brands and implementing innovative, platform-specific campaigns."        
   

const AboutUs = () => {
  return (
    <div>
    <AboutHome/>
    <ZoomImageSection image="/team.jpg"/>
   

 
    <ScrollZoomAnimation/>
    <Character paragraph={paragraph}/>
    <Character paragraph={paragraph2}/>
    <Character paragraph={paragraph3}/>
    
    </div>
  )
}

export default AboutUs