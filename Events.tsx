import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Target, Lightbulb, Handshake, Globe } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

export function About() {
  const { ref, inView } = useInView();
  const tilt = use3DTilt({ maxTilt: 10, scale: 1.02 });

  const features = [
    { icon: Target, title: 'Mission-Driven', desc: 'We are on a mission to build the largest startup ecosystem in India, enabling every aspiring entrepreneur to succeed.' },
    { icon: Lightbulb, title: 'Innovation First', desc: 'We foster a culture of innovation through workshops, hackathons, and access to cutting-edge technology resources.' },
    { icon: Handshake, title: 'Strong Network', desc: 'Connect with investors, mentors, industry leaders, and fellow founders who share your passion for building.' },
    { icon: Globe, title: 'Pan-India Reach', desc: 'With presence across 20+ cities, we bring the startup ecosystem to every corner of India.' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* 3D Background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-orange-100 rounded-xl animate-spin-3d opacity-20" style={{ animationDuration: '30s' }} />
      <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-orange-100/50 animate-morph-rotate opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Interactive 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -20 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-1 shadow-2xl shadow-orange-200 neon-orange">
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-[22px] p-8">
                  <div className="space-y-6">
                    <div className="flex gap-2 mb-6" style={{ transform: 'translateZ(40px)' }}>
                      <motion.div whileHover={{ scale: 1.5 }} className="w-3 h-3 rounded-full bg-red-400 cursor-pointer" />
                      <motion.div whileHover={{ scale: 1.5 }} className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer" />
                      <motion.div whileHover={{ scale: 1.5 }} className="w-3 h-3 rounded-full bg-green-400 cursor-pointer" />
                    </div>
                    
                    <div className="text-center space-y-4" style={{ transform: 'translateZ(30px)' }}>
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-lg shadow-orange-200 animate-pulse-glow"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <span className="text-4xl">🚀</span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800">Startup Club India</h3>
                      <p className="text-gray-500">Building India's Future, One Startup at a Time</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6" style={{ transform: 'translateZ(50px)' }}>
                      {[
                        { num: '20+', label: 'Cities' },
                        { num: '100+', label: 'Events/Year' },
                        { num: '500+', label: 'Startups' },
                        { num: '₹100Cr+', label: 'Funding' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                          animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                          transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                          whileHover={{ scale: 1.08, y: -5 }}
                          className="bg-white rounded-2xl p-4 text-center shadow-sm border border-orange-100 cursor-default hover:shadow-lg hover:shadow-orange-100 transition-shadow"
                        >
                          <div className="text-xl font-black text-gradient-orange">{item.num}</div>
                          <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotateZ: -10 }}
                animate={inView ? { opacity: 1, y: 0, rotateZ: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-6 py-3 shadow-xl border border-orange-100 animate-float-slow"
                style={{ transform: 'translateZ(60px)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇮🇳</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Made in India</p>
                    <p className="text-xs text-gray-500">For India</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content with staggered 3D reveals */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4"
              >
                About Us
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                India's Most Active
                <span className="text-gradient-orange"> Startup Community</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Startup Club India is a premier platform that connects entrepreneurs, investors, 
                and mentors to build a thriving startup ecosystem. We provide the tools, knowledge, 
                and network needed to transform ideas into successful businesses.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: 30 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -8, scale: 1.02, rotateY: 3 }}
                  className="group p-5 rounded-2xl border border-orange-100 hover:border-orange-300 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-white transition-all duration-500 cursor-default shadow-sm hover:shadow-xl hover:shadow-orange-100"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 shadow-md shadow-orange-200 group-hover:shadow-orange-300 transition-shadow"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
