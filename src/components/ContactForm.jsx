import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Email failed:', error);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      details: "(+94) 70-141-0113",
      subDetails: "Daily (5am - 10pm)"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@powerbull.com",
      subDetails: "24/7 Online Support"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Visit Gym",
      details: "Enderamulla, Western Province",
      subDetails: "Sri Lanka"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Hours",
      details: "5:00 AM - 10:00 PM",
      subDetails: "Daily Operations"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Connect With Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black text-dark dark:text-light mb-6 tracking-tighter"
          >
            HAVE QUESTIONS? <span className="text-primary italic">GET IN TOUCH.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium"
          >
            Join the POWER-BULL community today. Our experts are ready to help you smash your fitness goals and transform your life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white dark:bg-dark-lighter border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{info.title}</h4>
                    <p className="text-lg font-bold text-dark dark:text-light">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.subDetails}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Proof / Call to Action in Sidebar */}
            
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg overflow-hidden relative group"
            >
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Join Our Newsletter</h4>
                <p className="text-white/80 text-sm mb-4">Get the latest fitness tips and exclusive membership deals directly in your inbox.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  />
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
                    Join
                  </button>
                </div>
              </div>
              {/* Decorative circle */}
              {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div> */} 
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 bg-white dark:bg-dark-lighter p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray-100 dark:border-white/5 relative"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/40 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <FiCheckCircle className="w-12 h-12" />
                </div>
                <h4 className="text-3xl font-black text-dark dark:text-light mb-4 tracking-tight">MESSAGE SENT!</h4>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-sm">
                  We've received your data. A fitness consultant will reach out within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Your Full Name</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-dark/50 border-2 focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 font-medium ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-transparent focus:border-primary text-dark dark:text-light'}`}
                      placeholder="e.g. John Wick"
                      {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name is too short' } })}
                    />
                    {errors.name && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-dark/50 border-2 focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 font-medium ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-transparent focus:border-primary text-dark dark:text-light'}`}
                      placeholder="john@fitness.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="subject" className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">How Can We Help?</label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-dark/50 border-2 focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 font-medium ${errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-transparent focus:border-primary text-dark dark:text-light'}`}
                    placeholder="Membership Inquiry / PT Request"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Detailed Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-dark/50 border-2 focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 font-medium resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-transparent focus:border-primary text-dark dark:text-light'}`}
                    placeholder="Tell us about your fitness background and goals..."
                    {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Secure Transmission <FiSend className="text-xl" />
                    </>
                  )}
                </button>
              </form>
            )}
            
            {/* Corner decoration in form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
