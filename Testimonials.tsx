import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { GraduationCap, Rocket, DollarSign, Users, ArrowUpRight, Briefcase, Award } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

const programs = [
  { icon: GraduationCap, title: 'Incubation Program', desc: 'A 6-month intensive program for early-stage startups. Get mentorship, workspace, and seed funding support to validate and scale your idea.', features: ['Mentor Access', 'Co-working Space', 'Seed Funding'], color: 'from-orange-500 to-red-500' },
  { icon: Rocket, title: 'Accelerator Program', desc: 'Fast-track your growth with our 3-month accelerator. Connect with VCs, refine your pitch, and prepare for fundraising.', features: ['VC Network', 'Pitch Training', 'Market Access'], color: 'from-orange-400 to-orange-600' },
  { icon: DollarSign, title: 'Funding Connect', desc: 'Direct access to angel investors, VCs, and government grants. We help you find the right funding partner for your stage.', features: ['Angel Investors', 'VC Meetings', 'Govt Grants'], color: 'from-orange-600 to-orange-800' },
  { icon: Users, title: 'Founder Circle', desc: 'Exclusive peer-to-peer network of 200+ founders. Share experiences, collaborate, and learn from those who have been there.', features: ['Peer Network', 'Masterclasses', 'Retreats'], color: 'from-orange-500 to-amber-500' },
  { icon: Briefcase, title: 'Corporate Connect', desc: 'Bridge the gap between startups and corporates. Pilot programs, enterprise sales support, and strategic partnerships.', features: ['Pilot Programs', 'Enterprise Sales', 'Partnerships'], color: 'from-orange-600 to-red-600' },
  { icon: Award, title: 'Startup Awards', desc: 'Annual recognition of outstanding startups across categories. Winners get funding, media coverage, and investor connects.', features: ['Recognition', 'Prize Money', 'Media Coverage'], color: 'from-amber-500 to-orange-600' },
];

function ProgramCard({ program, index, inView }: { program: typeof programs[0]; index: number; inView: boolean }) {
  const tilt = use3DTilt({ maxTilt: 12, scale: 1.03 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 30 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group bg-white rounded-3xl p-7 border border-orange-100 hover:border-orange-300 shadow-lg hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 h-full relative overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Background glow */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${program.color} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

        <div style={{ transform: 'translateZ(30px)' }}>
          <motion.div
            whileHover={{ rotateY: 360, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-5 shadow-md`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <program.icon className="w-7 h-7 text-white" />
          </motion.div>

          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {program.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{program.desc}</p>

          <div className="flex flex-wrap gap-2 mb-5" style={{ transform: 'translateZ(20px)' }}>
            {program.features.map((f, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 + j * 0.1, type: 'spring', stiffness: 200 }}
                className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-lg border border-orange-100 group-hover:bg-orange-100 transition-colors"
              >
                {f}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-all"
          >
            Learn More
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Programs() {
  const { ref, inView } = useInView();

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden" ref={ref}>
      {/* 3D Background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-orange-100 rounded-3xl animate-spin-3d opacity-20" style={{ animationDuration: '25s' }} />
      <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-orange-200 rounded-full animate-float opacity-20" />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-orange-100/40 animate-morph-rotate opacity-30" />

      {/* Floating 3D wireframe */}
      <div className="absolute top-40 left-1/3 perspective-deep hidden lg:block opacity-10">
        <div className="w-20 h-20 animate-spin-3d" style={{ transformStyle: 'preserve-3d', animationDuration: '20s' }}>
          <div className="absolute inset-0 border border-orange-300 rounded" style={{ transform: 'translateZ(40px)' }} />
          <div className="absolute inset-0 border border-orange-300 rounded" style={{ transform: 'translateZ(-40px)' }} />
          <div className="absolute inset-0 border border-orange-300 rounded" style={{ transform: 'rotateY(90deg) translateZ(40px)' }} />
          <div className="absolute inset-0 border border-orange-300 rounded" style={{ transform: 'rotateY(90deg) translateZ(-40px)' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4"
          >
            Our Programs
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Programs That
            <span className="text-gradient-orange"> Accelerate Growth</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From ideation to IPO, we have programs designed for every stage of your startup journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={i} program={program} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
