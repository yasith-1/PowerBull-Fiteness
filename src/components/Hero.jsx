import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover scale-110"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-man-training-his-arms-at-the-gym-2342-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Layered Overlays for Cinematic Effect */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/30" />
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-primary/20 backdrop-blur-md text-primary border border-primary/30 font-black tracking-[0.2em] mb-8 uppercase text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Push Your Limits
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl lg:text-7xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9] drop-shadow-2xl"
          >
            <span className='tracking-wider'>Build Your Dream</span> <br />
            <span className="text-primary">physique  &nbsp; Body</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Unleash your inner strength at POWERBULL FITNESS. Elite coaching and world-class facilities designed for the extraordinary.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(221, 161, 27, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all uppercase tracking-widest"
            >
              Start Training Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-black text-lg backdrop-blur-md transition-all uppercase tracking-widest"
            >
              Explore Gym
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom fade for smoother section transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-1" />
    </section>
  );
}

