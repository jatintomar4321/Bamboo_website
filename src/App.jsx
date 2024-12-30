import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SvgShuffleLoader from "./pages/SvgShuffleLoader";

// Lazy loading for pages
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DeepaGurnani = lazy(() => import("./pages/DeepaGurnani"));
const HomePage = lazy(() => import("./pages/HomePage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const RenuPage = lazy(() => import("./pages/RenuPage"));
const Raf = lazy(() => import("./pages/Raf"));
const AceBlend = lazy(() => import("./pages/AceBlend"));
const Artist = lazy(() => import("./pages/Artist"));
const Atelier = lazy(() => import("./pages/Atelier"));
const SoQuod = lazy(() => import("./pages/SoQuod"));
const Soujanya = lazy(() => import("./pages/Soujanya"));
const WeAranemoia = lazy(() => import("./pages/WeAranemoia"));
const Skifit = lazy(() => import("./pages/Skifit"));
const ScooBoo = lazy(() => import("./pages/ScooBoo"));
const Kaya = lazy(() => import("./pages/Kaya"));
const HomesToLife = lazy(() => import("./pages/HomesToLife"));
const FeelWell = lazy(() => import("./pages/FeelWell"));
const DoItUp = lazy(() => import("./pages/DoItUp"));
const Shilputsi = lazy(() => import("./pages/Shilputsi"));
const FineArts = lazy(() => import("./pages/FineArts"));

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center bg-white z-50"
          >
            <SvgShuffleLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content section */}
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
        style={{ display: isLoading ? "none" : "block" }} // Hide content during loading
      >
        <Nav />
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work/deepa-gurnani" element={<DeepaGurnani />} />
            <Route path="/work/renu-oberoi" element={<RenuPage />} />
            <Route path="/work/raf" element={<Raf />} />
            <Route path="/work/aceblend" element={<AceBlend />} />
            <Route path="/work/artist" element={<Artist />} />
            <Route path="/work/atelier" element={<Atelier />} />
            <Route path="/work/soquod" element={<SoQuod />} />
            <Route path="/work/soujanya" element={<Soujanya />} />
            <Route path="/work/wearenemoia" element={<WeAranemoia />} />
            <Route path="/work/scooboo" element={<ScooBoo />} />
            <Route path="/work/kaya" element={<Kaya />} />
            <Route path="/work/homestolife" element={<HomesToLife />} />
            <Route path="/work/feelwell" element={<FeelWell />} />
            <Route path="/work/doitup" element={<DoItUp />} />
            <Route path="/work/shilputsi" element={<Shilputsi />} />
            <Route path="/work/finearts" element={<FineArts />} />
            <Route path="/work/skifit" element={<Skifit />} />
          </Routes>
        </Suspense>
        <Footer />
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
