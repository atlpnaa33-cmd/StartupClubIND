import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

export function Contact() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const tilt = use3DTilt({ maxTilt: 5, scale: 1.01 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden noise-bg" ref={ref}>
      {/* 3D Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 animate-morph-rotate border border-white/10" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full animate-float-slow border border-white/10" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-400/30 animate-float-reverse" style={{ transform: 'rotate(45deg)' }} />
        
        {/* 3D perspective grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'perspective(400px) rotateX(60deg)',
            transformOrigin: 'center bottom',
          }}
        />

        {/* Rising particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '0%',
              animation: `particleUp ${10 + i * 2}s ease-in ${i * 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-block px-4 py-1.5 glass text-white text-sm font-semibold rounded-full mb-4"
              >
                Get In Touch
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Ready To Start<br /><span className="text-orange-200">Your Journey?</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Whether you're a first-time founder or a serial entrepreneur, we'd love to hear from you. 
                Join our community and let's build something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'hello@startupclubindia.com' },
                { icon: Phone, label: '+91 98765 43210' },
                { icon: MapPin, label: 'Bangalore, Mumbai, Delhi, & 20+ cities' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30, rotateY: -20 }}
                  animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-white/90 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {['🧑', '👩', '👨', '👩‍🦰', '🧑‍🦱'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.2, y: -5, zIndex: 10 }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-sm cursor-default relative"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <p className="text-white/80 text-sm">
                <span className="font-bold text-white">10,000+</span> founders already joined
              </p>
            </motion.div>
          </motion.div>

          {/* Right - 3D Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-[60px]" />

              <div style={{ transform: 'translateZ(20px)' }}>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4"
                    >
                      <span className="text-4xl">🎉</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Startup Club India</h3>
                    <p className="text-gray-500 text-sm mb-6">Fill in your details and we'll reach out to you.</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:border-orange-300" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:border-orange-300" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:border-orange-300" placeholder="john@startup.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Startup Stage</label>
                      <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:border-orange-300">
                        <option value="">Select your stage</option>
                        <option>Idea Stage</option>
                        <option>MVP / Prototype</option>
                        <option>Early Revenue</option>
                        <option>Growth Stage</option>
                        <option>Scaling / Series A+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                      <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none hover:border-orange-300" placeholder="Tell us about your startup..." />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Application
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
