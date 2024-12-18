import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverWhite, setIsOverWhite] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkLogo, setIsDarkLogo] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOverWhite(true)
        } else {
          setIsOverWhite(false)
        }
      },
      { threshold: 0.1 }
    )

    if (navRef.current) {
      observer.observe(navRef.current)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    setIsDarkLogo((isOverWhite && !isHomePage) || (isHomePage && isScrolled))
  }, [isOverWhite, isHomePage, isScrolled])

  const navItemClass = `transition-colors duration-300 ${
    isDarkLogo ? 'text-black' : 'text-white'
  } hover:opacity-80`

  return (
    <>
      <nav 
        ref={navRef} 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[2000px] mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <Link to="/" className={`text-xl md:text-2xl font-light ${navItemClass}`}>
            <img
              src={isDarkLogo ? "/darkLogo.svg" : "/whiteLogo.svg"}
              alt="Logo"
              className="h-10 object-contain w-44 transition-all duration-300"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <span className={navItemClass}>©2024</span>
            <div className="flex items-center gap-8">
              <Link to="/work" className={navItemClass}>
                Work
              </Link>
              <Link to="/about" className={navItemClass}>
                About
              </Link>
              <Link to="/news" className={navItemClass}>
                News
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className={`hidden md:block ${navItemClass}`}>
              Contact
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`md:hidden ${navItemClass}`}
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

