"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SvgShuffleLoader from "./pages/SvgShuffleLoader"
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // 3 seconds for demonstration

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ x: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center bg-white"
          >
            <SvgShuffleLoader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <Router>
              <Nav />
              <Routes>
                <Route path="/" element={
                  <main>
                    <Hero />
                    <About />
                    <Work />
                  </main>
                } />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <Footer />
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

