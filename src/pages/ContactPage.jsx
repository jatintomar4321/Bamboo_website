import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Tiktok', url: 'https://tiktok.com' },
    { name: 'Youtube', url: 'https://youtube.com' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="min-h-screen bg-white">
    <motion.h1
        variants={itemVariants}
        className="text-[7rem] md:text-[9rem] lg:text-[13rem] font-[500] border-b-2 px-2  pb-8 md:pb-10 lg:pb-40"
      >
        Contact
      </motion.h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2"
      >

      


        {/* Left Column - Contact Information */}
        <motion.div 
          variants={itemVariants}
          className=" md:p-6 lg:p-10 space-y-16"
        >
          {/* Social Links */}
          <div className=" flex justify-between border-b-2 pb-10 w-[25rem] content-center">
            <h3 className="text-xl">Social</h3>
            <div className="space-y-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between  px-8 -mx-3 rounded-lg group transition-colors duration-300 hover:bg-black"
                >
                  <span className="text-lg group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="flex  border-b-2 pb-10 w-[25rem] justify-between">
            <h3 className="text-xl">Address</h3>
            <div>
              <p>40 Queen Street</p>
              <p>London</p>
              <p>W13 6MQ</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex border-b-2 pb-10 w-[25rem] justify-between">
            <h3 className="text-xl">Say hi</h3>
            <a 
              href="mailto:Hello@Luminous.com"
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Hello@Luminous.com
            </a>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <div className='bg-white p-10'>
        <motion.div 
          variants={itemVariants}
          className="bg-black text-white p-8 md:p-16 lg:p-24"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16">
              Let's collaborate and make wonderful stuff together!
            </h2>
            
            <div className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-block text-lg border-b border-white pb-1 hover:opacity-70 transition-opacity"
            >
              Submit your message
            </button>
          </form>
        </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactPage

