import { motion } from 'framer-motion';
import { FiActivity, FiTarget, FiHeart, FiCoffee } from 'react-icons/fi';
import { ServiceCard } from './Cards';

export default function Services() {
  const services = [
    {
      icon: <FiActivity className="w-8 h-8" />,
      title: 'Weight Training',
      description: 'Build strength and muscle mass with our extensive range of free weights and resistance machines.'
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Cardio Programs',
      description: 'Improve your cardiovascular health with state-of-the-art treadmills, ellipticals, and stationary bikes.'
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Personal Training',
      description: 'Get personalized workout plans and one-on-one guidance from our certified fitness experts.'
    },
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: 'Nutrition Plans',
      description: 'Fuel your body right with custom meal plans designed to complement your fitness goals.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold tracking-wider uppercase mb-2"
          >
            Our Offerings
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-dark dark:text-light mb-6"
          >
            PREMIUM GYM SERVICES
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            From high-intensity interval training to relaxing yoga sessions, we offer a comprehensive range of services tailored to your fitness journey.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
