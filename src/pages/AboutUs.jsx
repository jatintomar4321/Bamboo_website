import React, { useState } from 'react';
import AboutHome from '../components/AboutHome';
import ZoomImageSection from '../components/ZoomImageSection';
import ScrollZoomAnimation from '../components/ScrollZoomAnimation';
import Character from '../components/Character';

const AboutUs = () => {
  const [key, setKey] = useState(0); // 🔄 Forces component to remount

  return (
    <div>
      <AboutHome />
      <ZoomImageSection image="/team.jpg" />

      {/* 🔄 Key forces re-render when changed */}
      <ScrollZoomAnimation key={key} />

      

      <Character paragraph="2022: The inception of Bamboo Digital with the mission to transform brands through creativity and strategy." />
      <Character paragraph="2023: Expanding our services across industries, with a focus on luxury, sustainability, and emerging startups." />
      <Character paragraph="2024: Achieved significant growth by working with global brands and implementing innovative, platform-specific campaigns." />
    </div>
  );
}

export default AboutUs;
