import { useState } from 'react'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-[2000px] mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <a href="/" className="text-white text-xl md:text-2xl font-light">
            Luminous
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <span className="text-white text-sm">©2024</span>
            <div className="flex items-center gap-8">
              <a href="/work" className="text-white hover:opacity-80 transition-opacity">
                Work
              </a>
              <a href="/about" className="text-white hover:opacity-80 transition-opacity">
                About
              </a>
              <a href="/news" className="text-white hover:opacity-80 transition-opacity">
                News
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="/contact" className="hidden md:block text-white hover:opacity-80 transition-opacity">
              Contact
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Nav

