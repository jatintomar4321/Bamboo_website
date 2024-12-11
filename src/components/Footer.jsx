import { ArrowUpRight } from 'lucide-react'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-start">
        {/* Logo */}
        <div>
          <Link to="/" className="text-xl font-serif">
            Luminous
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4 text-4xl font-medium">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-medium">Social</h3>
          <div className="flex flex-col space-y-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
              Instagram
              <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
              Facebook
              <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
              Tiktok
              <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
              Youtube
              <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Let's Chat Section */}
      <div className="container mx-auto px-4 py-16">
        <p className="text-lg">Interested in working with us?</p>
        <Link to="/contact" className="block text-[8rem] font-medium hover:opacity-80 transition-opacity">
          Let's Chat
        </Link>
      </div>

      {/* Bottom Links */}
      <div className="container mx-auto px-4 py-4 border-t flex justify-between items-center text-sm">
        <Link to="/template">More Template</Link>
        <div className="flex space-x-6">
          <Link to="/licenses">Licenses</Link>
          <Link to="/changelog">Changelog</Link>
          <Link to="/style-guide">Style Guide</Link>
          <Link to="/webflow">Webflow</Link>
        </div>
        <span>©2024</span>
      </div>
    </footer>
  )
}

