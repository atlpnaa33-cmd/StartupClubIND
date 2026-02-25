import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { useTransition } from '../App';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { triggerTransition } = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(l => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    triggerTransition(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg shadow-orange-100/50 border-b border-orange-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with 3D effect */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative">
              <motion.div 
                className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 group-hover:shadow-orange-300 transition-shadow"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Rocket className="w-5 h-5 text-white" />
              </motion.div>
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
              {/* Pulse ring */}
              <div className="absolute -inset-2 border-2 border-orange-500/30 rounded-2xl animate-pulse-ring opacity-0 group-hover:opacity-100" />
            </div>
            <div style={{ transform: 'translateZ(20px)' }}>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Startup<span className="text-orange-500">Club</span>
              </span>
              <span className={`block text-[10px] font-medium tracking-widest uppercase transition-colors duration-500 ${scrolled ? 'text-orange-600' : 'text-orange-300'}`}>
                India
              </span>
            </div>
          </motion.a>

          {/* Desktop Links with enhanced animations */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? scrolled ? 'text-orange-600' : 'text-white'
                    : scrolled ? 'text-gray-600 hover:text-orange-600' : 'text-white/70 hover:text-white'
                }`}
              >
                {/* Hover background with 3D feel */}
                <AnimatePresence>
                  {hoveredLink === link.href && (
                    <motion.span
                      layoutId="navHover"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className={`absolute inset-0 rounded-xl ${
                        scrolled ? 'bg-orange-50 shadow-sm shadow-orange-100' : 'bg-white/10'
                      }`}
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{link.label}</span>

                {/* Active indicator - 3D dot */}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <span className="absolute inset-0 rounded-full bg-orange-500 animate-pulse-ring" />
                  </motion.span>
                )}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 relative overflow-hidden group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="relative z-10">Join Now</span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>

          {/* Mobile Toggle with 3D rotation */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9, rotateZ: 90 }}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with 3D stagger */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, rotateX: -15 }}
            animate={{ opacity: 1, height: 'auto', rotateX: 0 }}
            exit={{ opacity: 0, height: 0, rotateX: 15 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-orange-100 origin-top"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileOpen(false);
                  }}
                  initial={{ opacity: 0, x: -30, rotateY: -20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                    activeSection === link.href
                      ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-500'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  setMobileOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="block px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center rounded-xl font-semibold mt-3 shadow-lg shadow-orange-200"
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
