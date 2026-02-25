import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Globe, Star } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

export function Hero() {
  const tilt = use3DTilt({ maxTilt: 8, scale: 1.01 });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 noise-bg">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-700 via-orange-500 to-red-600 animate-gradient-flow opacity-80" />

      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 animate-morph-rotate backdrop-blur-sm border border-white/10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full animate-float-slow backdrop-blur-sm border border-white/10" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-400/20 animate-morph-rotate backdrop-blur-sm border border-white/10" style={{ animationDelay: '3s', animationDirection: 'reverse' }} />

        {/* 3D rotating wireframe cube */}
        <div className="absolute top-1/4 right-10 w-32 h-32 perspective-deep hidden lg:block">
          <div className="w-full h-full animate-spin-3d" style={{ transformStyle: 'preserve-3d', animationDuration: '25s' }}>
            <div className="absolute inset-0 border-2 border-white/10 rounded-lg" style={{ transform: 'translateZ(64px)' }} />
            <div className="absolute inset-0 border-2 border-white/10 rounded-lg" style={{ transform: 'translateZ(-64px)' }} />
            <div className="absolute inset-0 border-2 border-white/10 rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
            <div className="absolute inset-0 border-2 border-white/10 rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(-64px)' }} />
          </div>
        </div>

        {/* Rising particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '0%',
              animation: `particleUp ${8 + i * 2}s ease-in ${i * 1.5}s infinite`,
            }}
          />
        ))}

        {/* Orbiting particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit"><div className="w-4 h-4 bg-white/30 rounded-full shadow-lg shadow-white/20" /></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit2"><div className="w-3 h-3 bg-orange-300/40 rounded-full" /></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit3"><div className="w-2 h-2 bg-white/50 rounded-full" /></div>
        </div>

        {/* 3D Grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
            height: '200%',
          }}
        />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">India's Leading Startup Ecosystem</span>
              <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight text-3d"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Empowering{' '}
              </motion.span>
              <span className="relative inline-block">
                <motion.span
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Startups
                </motion.span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-2 left-0 h-4 bg-yellow-400/30 rounded"
                />
              </span>
              <br />
              <motion.span
                className="text-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                To Build The
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="inline-block"
              >
                Future
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="inline-block ml-2"
              >
                🚀
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/80 max-w-lg leading-relaxed"
            >
              Join India's most vibrant startup community. Get mentorship, funding connections, 
              resources, and a network of fellow entrepreneurs who are building the next big thing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-2xl shadow-orange-900/30 hover:shadow-orange-900/50 transition-all duration-300 relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="relative z-10">Explore Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats bar with 3D lift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                { value: '500+', label: 'Startups', icon: '🏢' },
                { value: '₹100Cr+', label: 'Funding Raised', icon: '💰' },
                { value: '50+', label: 'Mentors', icon: '🎯' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.2, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center cursor-default group"
                >
                  <div className="text-sm mb-1 group-hover:scale-125 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right 3D Visual - Interactive Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:block"
          >
            <div
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main 3D Card */}
              <div className="relative animate-float-rotate-3d" style={{ transformStyle: 'preserve-3d', animationDuration: '12s' }}>
                <div className="w-full aspect-square max-w-md mx-auto glass-card rounded-3xl p-8 shadow-2xl neon-orange" style={{ transform: 'translateZ(0px)' }}>
                  <div className="space-y-6" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <TrendingUp className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Growth Hub</h3>
                        <p className="text-white/60 text-sm">Scale your startup</p>
                      </div>
                    </div>
                    
                    {/* 3D Chart */}
                    <div className="flex items-end gap-2 h-40" style={{ transform: 'translateZ(20px)' }}>
                      {[40, 60, 35, 80, 55, 90, 70, 95, 85, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0, rotateX: 90 }}
                          animate={{ height: `${h}%`, rotateX: 0 }}
                          transition={{ duration: 1, delay: 1 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                          whileHover={{ scaleY: 1.1 }}
                          className="flex-1 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-lg opacity-80 cursor-pointer hover:opacity-100 transition-all relative group"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                            {h}%
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-3" style={{ transform: 'translateZ(40px)' }}>
                      {[
                        { icon: Users, label: 'Network', color: 'from-blue-400/20 to-blue-500/20' },
                        { icon: Zap, label: 'Funding', color: 'from-yellow-400/20 to-yellow-500/20' },
                        { icon: Globe, label: 'Global', color: 'from-green-400/20 to-green-500/20' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.1, translateZ: 20 }}
                          className={`bg-gradient-to-br ${item.color} rounded-xl p-3 text-center border border-white/10 cursor-pointer backdrop-blur-sm`}
                        >
                          <item.icon className="w-5 h-5 text-orange-300 mx-auto mb-1" />
                          <span className="text-white/70 text-xs">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification cards with 3D depth */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="absolute -right-8 top-10 bg-white rounded-2xl p-4 shadow-2xl shadow-orange-200/50 animate-float-slow"
                style={{ transform: 'translateZ(60px)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Funding Secured!</p>
                    <p className="text-xs text-gray-500">Series A - ₹5Cr</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="absolute -left-8 bottom-20 bg-white rounded-2xl p-4 shadow-2xl shadow-orange-200/50 animate-float-reverse"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">+25 Members</p>
                    <p className="text-xs text-gray-500">Joined this week</p>
                  </div>
                </div>
              </motion.div>

              {/* New floating element */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.1 }}
                className="absolute -right-4 bottom-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-3 shadow-2xl animate-float-diagonal text-white"
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold">10K+ Community</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
