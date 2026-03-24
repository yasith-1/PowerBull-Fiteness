import { motion } from 'framer-motion';
import { TrainerCard } from './Cards';

export default function Trainers() {
  const trainers = [
    {
      name: 'John Cina',
      specialty: 'Head Coach & Strength',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Roman Range',
      specialty: 'HIIT & Cardio Expert',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2000&auto=format&fit=crop'
    },
    {
      name: 'David Chen',
      specialty: 'Yoga & Mobility',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Mona Lisa',
      specialty: 'Nutritionist',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
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
    <section id="trainers" className="py-24 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary font-bold tracking-wider uppercase mb-2"
            >
              Elite Team
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-dark dark:text-light"
            >
              MEET OUR EXPERT TRAINERS
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
              View All Trainers
              <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              image={trainer.image}
              name={trainer.name}
              specialty={trainer.specialty}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
