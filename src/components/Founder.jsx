import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Founder() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth parallax effect
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);
  const translateX = useTransform(rotateY, [-25, 25], [-15, 15]);
  const translateY = useTransform(rotateX, [-25, 25], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 1.5;
      const centerY = rect.top + rect.height / 1.5;

      mouseX.set(((event.clientX - centerX) / rect.width) * 40);
      mouseY.set(-((event.clientY - centerY) / rect.height) * 40);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="grid mt-40 grid-cols-1 md:grid-cols-2 gap-8 bg-black text-white min-h-screen relative overflow-hidden"
    >
      {/* Image Section with Reduced Size */}
      <motion.div className="relative flex justify-center items-center w-full h-auto md:min-h-[500px]">
        <motion.div
          className="w-[50%] md:w-[50%] h-auto mx-auto max-h-[600px]"
          style={{
            rotateX,
            rotateY,
            translateX,
            translateY,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Creative Director portrait"
            className="object-cover w-full h-auto rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent rounded-lg pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col justify-center px-8 md:px-16 py-12 md:py-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          className="font-['Playfair_Display'] text-5xl md:text-6xl mb-4 italic"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Shruti Mohan
        </motion.h1>

        <motion.h2
          className="text-sm tracking-[0.2em] mb-8 text-gray-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          CREATIVE DIRECTOR
        </motion.h2>

        <motion.p
          className="text-gray-200 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          With over a decade of experience in the creative industry, Krista has a keen eye for high-end design
          aesthetics and a passion for storytelling through visuals. She has successfully built a reputation for
          crafting unique brand identities and digital experiences that are both strategic and captivating.
        </motion.p>
      </motion.div>
    </div>
  );
}
