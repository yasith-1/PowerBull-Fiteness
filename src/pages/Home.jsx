import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Trainers from '../components/Trainers';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { SectionHeaderSkeleton, CardSkeleton, TrainerSkeleton } from '../components/Skeleton';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-light dark:bg-dark">
      {/* Primary Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] bg-primary/5 dark:bg-primary/[0.03] rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-primary/10 dark:bg-primary/5 rounded-full blur-[180px]"
      />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <BackgroundAnimation />
      <Navbar />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent"
          >
            <main className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeaderSkeleton />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
              <SectionHeaderSkeleton />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <TrainerSkeleton />
                <TrainerSkeleton />
                <TrainerSkeleton />
                <TrainerSkeleton />
              </div>
            </main>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <About />
            <Services />
            <Trainers />
            <Pricing />
            <ContactForm />
          </motion.main>
        )}
      </AnimatePresence>

      {!isLoading && <Footer />}
    </div>
  );
}

