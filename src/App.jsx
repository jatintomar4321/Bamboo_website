import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ContactPage from './pages/ContactPage'
import DeepaGurnani from './pages/DeepaGurnani'
import HomePage from "./pages/HomePage"
import SvgShuffleLoader from "./pages/SvgShuffleLoader"
import WorkPage from './pages/WorkPage'
import RenuPage from './pages/RenuPage'
import Raf from './pages/Raf'
import AceBlend from './pages/AceBlend'
import Artist from "./pages/Artist"
import Atelier from "./pages/Atelier"
import SoQuod from "./pages/SoQuod"
import Soujanya from "./pages/Soujanya"
import WeAranemoia from "./pages/WeAranemoia"
import Skifit from "./pages/Skifit"
import ScooBoo from "./pages/ScooBoo"
import Kaya from "./pages/Kaya"
import HomesToLife from "./pages/HomesToLife"
import FeelWell from "./pages/FeelWell"
import DoItUp from "./pages/DoItUp"
import Shilputsi from "./pages/Shilputsi"
import FineArts from "./pages/FineArts"


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
                <Route path="/work/deepa-gurnani" element={<DeepaGurnani />} />
                <Route path="/work/renu-oberoi" element={<RenuPage />} />
                <Route path="/work/raf" element={<Raf />} />
                <Route path="/work/AceBlend" element={<AceBlend />} />
                <Route path="/work/Artist" element={<Artist/>} />
                <Route path="/work/Atelier" element={<Atelier />} />
                <Route path="/work/SoQuod" element={<SoQuod />} />
                <Route path="/work/Soujanya" element={<Soujanya />} />
                <Route path="/work/WeAranemoia" element={<WeAranemoia />} />
                <Route path="/work/ScooBoo" element={<ScooBoo />} />
                <Route path="/work/Kaya" element={<Kaya />} />
                <Route path="/work/homestolife" element={<HomesToLife />} />
                <Route path="/work/FeelWell" element={<FeelWell />} />
                <Route path="/work/DoIiUp" element={<DoItUp />} />
                <Route path="/work/Shilputsi" element={<Shilputsi />} />
                <Route path="/work/Finearts" element={<FineArts />} />

                



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
