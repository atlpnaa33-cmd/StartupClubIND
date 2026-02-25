import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Linkedin, Twitter } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

const mentors = [
  { name: 'Arun Mehta', role: 'Ex-CEO, TechCorp India', expertise: 'Strategy & Scaling', emoji: '👨‍💼' },
  { name: 'Dr. Kavita Rao', role: 'Partner, VC Fund Alpha', expertise: 'Fundraising & Finance', emoji: '👩‍💼' },
  { name: 'Sanjay Gupta', role: 'Founder, 3 Exits', expertise: 'Product & Growth', emoji: '👨‍🚀' },
  { name: 'Meera Iyer', role: 'CMO, Global SaaS Co.', expertise: 'Marketing & Branding', emoji: '👩‍🎨' },
  { name: 'Rahul Verma', role: 'CTO, Unicorn Startup', expertise: 'Technology & AI', emoji: '👨‍💻' },
  { name: 'Nisha Patel', role: 'Angel Investor', expertise: 'D2C & E-commerce', emoji: '👩‍🏫' },
  { name: 'Deepak Singh', role: 'Serial Entrepreneur', expertise: 'B2B Sales', emoji: '🧑‍💼' },
  { name: 'Sneha Reddy', role: 'Head of Innovation, MNC', expertise: 'Corporate Innovation', emoji: '👩‍🔬' },
];

function MentorCard({ mentor, index, inView }: { mentor: typeof mentors[0]; index: number; inView: boolean }) {
  const tilt = use3DTilt({ maxTilt: 18, scale: 1.05 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 40, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
      transition={{ delay: 0.08 * index, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group bg-white rounded-3xl p-6 border border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 text-center relative overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Gradient background reveal */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl" />

        <div style={{ transform: 'translateZ(25px)' }}>
          <motion.div
            whileHover={{ scale: 1.15, rotateZ: 5 }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-sm group-hover:shadow-lg group-hover:shadow-orange-200 transition-shadow"
          >
            {mentor.emoji}
          </motion.div>
          <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{mentor.name}</h3>
          <p className="text-xs text-gray-500 mt-1">{mentor.role}</p>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="inline-block mt-3 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-lg border border-orange-100 group-hover:bg-orange-100 transition-colors cursor-default"
          >
            {mentor.expertise}
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0"
            style={{ transform: 'translateZ(40px)' }}
          >
            <motion.button whileHover={{ scale: 1.2, rotateZ: 10 }} className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
              <Linkedin className="w-4 h-4" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.2, rotateZ: -10 }} className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
              <Twitter className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Mentors() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      
      {/* 3D decorations */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-orange-200 rounded-lg animate-spin-3d opacity-15" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-50 animate-morph-rotate opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">Our Mentors</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Learn From The<span className="text-gradient-orange"> Best In Industry</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">Our mentors are seasoned entrepreneurs, investors, and industry leaders who have walked the path.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mentors.map((mentor, i) => (
            <MentorCard key={i} mentor={mentor} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
