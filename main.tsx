import { useState, useCallback, createContext, useContext } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Events } from './components/Events';
import { Impact } from './components/Impact';
import { Mentors } from './components/Mentors';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingParticles } from './components/FloatingParticles';
import { PageTransition } from './components/PageTransition';

interface TransitionContextType {
  triggerTransition: (targetId: string) => void;
}

export const TransitionContext = createContext<TransitionContextType>({
  triggerTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetSection, setTargetSection] = useState('');

  const triggerTransition = useCallback((targetId: string) => {
    setTargetSection(targetId);
    setIsTransitioning(true);
  }, []);

  const handleTransitionComplete = useCallback(() => {
    if (targetSection) {
      const el = document.querySelector(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
    setIsTransitioning(false);
    setTargetSection('');
  }, [targetSection]);

  return (
    <TransitionContext.Provider value={{ triggerTransition }}>
      <div className="min-h-screen bg-white relative">
        <PageTransition isAnimating={isTransitioning} onComplete={handleTransitionComplete} />
        <FloatingParticles />
        <Navbar />
        <Hero />
        <Partners />
        <About />
        <Programs />
        <Events />
        <Impact />
        <Mentors />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </TransitionContext.Provider>
  );
}
