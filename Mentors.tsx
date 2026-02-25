import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

const events = [
  { title: 'Startup Summit 2025', date: 'March 15-16, 2025', time: '9:00 AM - 6:00 PM', location: 'Bangalore, India', attendees: '2000+', type: 'Summit', description: "India's biggest startup gathering with keynotes from unicorn founders, investor panels, and networking.", image: '🏔️' },
  { title: 'Pitch Night - Delhi', date: 'February 28, 2025', time: '5:00 PM - 9:00 PM', location: 'New Delhi, India', attendees: '300+', type: 'Pitch Event', description: 'Present your startup to a panel of top angel investors and VCs. Win funding on the spot!', image: '🎤' },
  { title: 'AI & Startup Workshop', date: 'April 5, 2025', time: '10:00 AM - 4:00 PM', location: 'Mumbai, India', attendees: '500+', type: 'Workshop', description: 'Hands-on workshop on leveraging AI for your startup. Learn from industry leaders and practitioners.', image: '🤖' },
  { title: 'Founder Networking Mixer', date: 'Every Last Friday', time: '6:00 PM - 9:00 PM', location: 'Pan-India (20 cities)', attendees: '100+', type: 'Networking', description: 'Casual monthly mixer to connect with fellow founders. Share stories, challenges, and celebrate wins.', image: '🤝' },
];

function EventCard({ event, index, inView }: { event: typeof events[0]; index: number; inView: boolean }) {
  const tilt = use3DTilt({ maxTilt: 10, scale: 1.02 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20, rotateY: index % 2 === 0 ? -10 : 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0 } : {}}
      transition={{ delay: 0.15 * index, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group glass-card rounded-3xl p-6 hover:border-orange-500/30 hover:bg-white/15 transition-all duration-500 relative overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.2) 0%, transparent 50%, rgba(249,115,22,0.2) 100%)' }} />

        <div className="relative" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.2, rotateY: 180 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center text-3xl border border-orange-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {event.image}
              </motion.div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="px-2.5 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-md cursor-default"
                >
                  {event.type}
                </motion.span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors mb-2">{event.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-orange-500" />{event.date}</div>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-orange-500" />{event.time}</div>
                <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-500" />{event.location}</div>
                <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-orange-500" />{event.attendees} Expected</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5">
            <motion.a
              href="#contact"
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-all"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Events() {
  const { ref, inView } = useInView();

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" ref={ref}>
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(249,115,22,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      {/* 3D wireframe sphere */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-10 hidden lg:block">
        <div className="w-full h-full rounded-full border border-orange-400 animate-spin-slow" />
        <div className="absolute inset-0 rounded-full border border-orange-400 animate-spin-slow" style={{ transform: 'rotateY(60deg)' }} />
        <div className="absolute inset-0 rounded-full border border-orange-400 animate-spin-slow" style={{ transform: 'rotateY(120deg)' }} />
        <div className="absolute inset-0 rounded-full border border-orange-400 animate-spin-slow" style={{ transform: 'rotateX(90deg)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
            animate={inView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-4 border border-orange-500/30"
          >
            Upcoming Events
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Where Ideas
            <span className="text-orange-400 neon-text-orange"> Come Alive</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">Join our events to learn, connect, pitch, and grow. Something exciting happening every week!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <EventCard key={i} event={event} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
