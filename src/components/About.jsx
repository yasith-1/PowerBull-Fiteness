import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiClock } from 'react-icons/fi';

export default function About() {
  const stats = [
    { icon: <FiUsers />, value: '5000+', label: 'Happy Members' },
    { icon: <FiAward />, value: '50+', label: 'Expert Trainers' },
    { icon: <FiClock />, value: 'Timely', label: 'Gym Access' },
  ];

  return (
    <section id="about" className="py-24 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                alt="Gym interior space"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-3xl z-0 hidden md:block"></div>
            {/* Floating badge */}
            <div className="absolute -top-8 -left-8 bg-dark p-6 rounded-2xl shadow-xl z-20 hidden md:block animate-pulse">
              <div className="text-primary font-black text-4xl mb-1">10+</div>
              <div className="text-white text-sm font-bold uppercase tracking-wider">Years of<br/>Experience</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-dark dark:text-light">
              MORE THAN JUST A GYM,
              <br /> WE ARE A COMMUNITY
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At POWERBULL FITNESS, we believe that everyone has the potential for greatness. Our facility is designed to provide you with the best equipment, atmosphere, and guidance to help you reach your goals, whether you are a beginner or an elite athlete.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              We're not just about lifting weights; we're about lifting each other up. Join a community that celebrates your victories and pushes you through your plateaus.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center text-primary text-3xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-dark dark:text-light mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
