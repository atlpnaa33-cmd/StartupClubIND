import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

const testimonials = [
  { name: 'Priya Sharma', role: 'Founder & CEO, TechNova', text: 'Startup Club India was instrumental in our journey from a two-person team to a 50-member company. The mentorship and investor connections they provided were invaluable. We raised our Series A within 6 months of joining.', rating: 5, emoji: '👩‍💼' },
  { name: 'Rajesh Kumar', role: 'Co-founder, GreenFarms AI', text: 'The Accelerator Program transformed our approach to business. The structured mentorship, pitch practice sessions, and direct VC introductions helped us raise ₹8 crores. Highly recommend to every early-stage founder!', rating: 5, emoji: '👨‍💻' },
  { name: 'Anita Desai', role: 'CEO, EduLearn Platform', text: 'Being part of the Founder Circle has been a game-changer. The peer support, honest feedback, and collaborative spirit is unlike anything else. I found my co-founder and two key hires through this community.', rating: 5, emoji: '👩‍🏫' },
  { name: 'Vikram Patel', role: 'Founder, HealthStack', text: 'From day one, Startup Club India treated us like family. The workshops on product-market fit and go-to-market strategy saved us months of trial and error. Now we serve 100K+ users across India.', rating: 5, emoji: '👨‍⚕️' },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction > 0 ? 30 : -30,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction < 0 ? 30 : -30,
    scale: 0.8,
  }),
};

export function Testimonials() {
  const { ref, inView } = useInView();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const tilt = use3DTilt({ maxTilt: 6, scale: 1.01 });

  const next = () => { setDirection(1); setCurrent((p) => (p + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); };

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient" />
      
      {/* 3D decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-56 h-56 bg-orange-100/50 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-20 w-16 h-16 border border-orange-200 rounded-lg animate-spin-3d opacity-15" style={{ animationDuration: '22s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Loved By<span className="text-gradient-orange"> Founders</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto perspective-deep">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                <div
                  ref={tilt.ref}
                  onMouseMove={tilt.onMouseMove}
                  onMouseLeave={tilt.onMouseLeave}
                  className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-orange-100 border border-orange-100 relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-[100px]" />

                  <div style={{ transform: 'translateZ(20px)' }}>
                    <Quote className="w-12 h-12 text-orange-200 mb-6" />
                    
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic">
                      &ldquo;{testimonials[current].text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-4" style={{ transform: 'translateZ(30px)' }}>
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotateZ: 10 }}
                          className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                        >
                          {testimonials[current].emoji}
                        </motion.div>
                        <div>
                          <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                          <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                            transition={{ delay: 0.3 + j * 0.1, type: 'spring', stiffness: 200 }}
                          >
                            <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-xl border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-50 hover:border-orange-300 transition-all shadow-sm hover:shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    whileHover={{ scale: 1.3 }}
                    className={`h-3 rounded-full transition-all duration-500 ${
                      i === current ? 'bg-orange-500 w-8 shadow-sm shadow-orange-300' : 'bg-orange-200 hover:bg-orange-300 w-3'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-xl border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-50 hover:border-orange-300 transition-all shadow-sm hover:shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
