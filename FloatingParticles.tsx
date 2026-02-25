import { motion } from 'framer-motion';
import { Rocket, Heart, ArrowUp } from 'lucide-react';
import { useInView } from './useInView';

export function Footer() {
  const { ref, inView } = useInView(0.05);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      
      {/* 3D decoration */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-orange-800/30 rounded-lg animate-spin-3d opacity-20" style={{ animationDuration: '30s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="md:col-span-1 space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Rocket className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <span className="text-xl font-bold">Startup<span className="text-orange-500">Club</span></span>
                <span className="block text-[10px] font-medium tracking-widest uppercase text-orange-400">India</span>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">India's most active startup community. Empowering entrepreneurs to build the future.</p>
            <div className="flex gap-3">
              {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.15, y: -3, rotateZ: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <span className="text-sm font-bold">{icon}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Programs', 'Events', 'Impact', 'Contact'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    whileHover={{ x: 5, color: '#fb923c' }}
                    className="text-gray-400 transition-colors text-sm inline-block"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">Programs</h4>
            <ul className="space-y-3">
              {['Incubation', 'Accelerator', 'Funding Connect', 'Founder Circle', 'Corporate Connect', 'Startup Awards'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.05 }}
                >
                  <motion.a
                    href="#programs"
                    whileHover={{ x: 5, color: '#fb923c' }}
                    className="text-gray-400 transition-colors text-sm inline-block"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Get weekly startup insights and event updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm hover:border-orange-500/30 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all text-sm shadow-lg shadow-orange-500/20"
              >
                Join
              </motion.button>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/20 transition-colors cursor-default"
            >
              <p className="text-xs text-gray-400">
                🏆 <span className="text-orange-400 font-semibold">Recognized by</span><br />
                DPIIT, Startup India, NASSCOM
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © 2025 Startup Club India. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> in India
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <motion.a whileHover={{ color: '#fb923c' }} href="#" className="transition-colors">Privacy Policy</motion.a>
            <motion.a whileHover={{ color: '#fb923c' }} href="#" className="transition-colors">Terms of Service</motion.a>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
