import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export function ServiceCard({ icon, title, description }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-dark-lighter p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary group transition-all duration-300"
    >
      <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-dark dark:text-light">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
        {description}
      </p>
    </motion.div>
  );
}

export function TrainerCard({ image, name, specialty }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
    >
      {/* Using a placeholder if image fails or isn't provided, but normally uses `image` prop */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-primary font-medium">{specialty}</p>
      </div>
    </motion.div>
  );
}

export function PricingCard({ plan, price, features, isPopular = false, onChoose }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: isPopular ? -15 : -10, scale: 1.02 }}
      className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
        isPopular 
          ? 'bg-dark text-white border-primary/30 shadow-2xl z-10 scale-105' 
          : 'bg-white dark:bg-dark-lighter border-gray-100 dark:border-white/5 text-dark dark:text-light shadow-xl hover:shadow-primary/5 hover:border-primary/20'
      }`}
    >
      {/* Decorative background glow for popular card */}
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-primary/20 blur-3xl pointer-events-none rounded-full" />
      )}

      {isPopular && (
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
          Best Value
        </div>
      )}

      <div className="mb-10">
        <h3 className={`text-xl font-black uppercase tracking-widest mb-4 ${isPopular ? 'text-primary' : 'text-gray-400'}`}>
          {plan}
        </h3>
        <div className="flex items-baseline">
          <span className="text-5xl font-black font-heading tracking-tighter">Rs.{price}</span>
          <span className={`ml-2 text-sm font-bold uppercase tracking-widest opacity-60`}>
            /month
          </span>
        </div>
      </div>

      <div className="space-y-5 mb-12">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 group"
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isPopular ? 'bg-primary/20 text-primary' : 'bg-gray-100 dark:bg-dark text-primary'}`}>
              <FiCheck className="w-4 h-4" />
            </div>
            <span className={`text-sm font-medium transition-colors ${
              isPopular ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white'
            }`}>
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={() => onChoose && onChoose(plan)}
        className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-xl overflow-hidden relative group ${
          isPopular 
            ? 'bg-primary text-white hover:bg-primary-dark shadow-primary/20' 
            : 'bg-dark dark:bg-white text-white dark:text-dark hover:scale-[1.02]'
        }`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Choose Plan <FiCheck className="text-lg" />
        </span>
        {/* Button hover effect */}
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </motion.button>
    </motion.div>
  );
}
