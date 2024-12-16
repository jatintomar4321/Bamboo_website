import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import SvgShuffleLoader from "./pages/SvgShuffleLoader"
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from "./pages/HomePage"
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import DeepaGurmani from './pages/DeepaGurmani'

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000)

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
            <Nav />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/work/:id" element={<DeepaGurmani />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
