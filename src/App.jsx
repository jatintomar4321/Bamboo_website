import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import Nav from './components/Nav'

function App() {
  return (
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
  )
}

export default App

