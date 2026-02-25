import { motion } from 'framer-motion';
import { useInView } from './useInView';

const partners = [
  { name: 'NASSCOM', emoji: '🏛️' },
  { name: 'Startup India', emoji: '🇮🇳' },
  { name: 'Google for Startups', emoji: '🔍' },
  { name: 'AWS Activate', emoji: '☁️' },
  { name: 'Microsoft BizSpark', emoji: '💻' },
  { name: 'DPIIT', emoji: '🏢' },
  { name: 'TiE Global', emoji: '🌍' },
  { name: 'YCombinator', emoji: '🚀' },
];

export function Partners() {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Subtle 3D background */}
      <div className="absolute top-5 right-10 w-12 h-12 border border-orange-100 rounded animate-spin-3d opacity-10" style={{ animationDuration: '20s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10"
        >
          Trusted & Supported By
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: 30, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, scale: 1.05, rotateY: 5 }}
              className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-500 cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span
                whileHover={{ scale: 1.3, rotateZ: 15 }}
                className="text-2xl"
              >
                {p.emoji}
              </motion.span>
              <span className="text-sm font-semibold text-gray-600 group-hover:text-orange-600 transition-colors">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
