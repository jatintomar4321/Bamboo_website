import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.6,
        when: 'afterChildren',
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.6,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const menuItems = ['Work','Contact','about'];
  const socialItems = ['Instagram', 'Facebook','Linkedin', 'Youtube',];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
      className="fixed inset-0 bg-black z-50 overflow-hidden"
    >
      <div className="h-full flex flex-col justify-between p-8">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            Close
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-top">
          {menuItems.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              variants={itemVariants}
              className="py-2"
            >
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={onClose} // Close the sidebar after clicking
                className="text-white text-6xl md:text-7xl font-light hover:opacity-70 transition-opacity"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="space-y-2 pb-16">
          <motion.div
            variants={itemVariants}
            custom={menuItems.length + 1}
            className="text-white text-2xl font-light"
          >
            Social
          </motion.div>

          {socialItems.map((item, i) => (
            <motion.a
              key={item}
              href={`https://${item.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              custom={menuItems.length + 2 + i}
              variants={itemVariants}
              className="flex items-center justify-between text-white text-xl font-light  border-b border-white/20 group"
            >
              {item}
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
