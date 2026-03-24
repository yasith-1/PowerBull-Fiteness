import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function PlanModal({ isOpen, onClose, selectedPlan }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    // Append the selected plan name to the data being sent
    const submissionData = {
      ...data,
      plan_name: selectedPlan
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          age: data.age,
          address: data.address,
          experience: data.experience,
          location: data.location,
          plan_name: selectedPlan
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email successfully sent!', response);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error('Email failed with details:', error);
      alert('Failed to send details: ' + (error.text || error.message || 'Unknown error') + '. Please ensure your EmailJS credentials are set correctly in the .env file.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop (Clicking here no longer closes the modal) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white dark:bg-dark-lighter w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5"
        >
          {/* Header */}
          <div className="bg-primary p-8 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-primary transition-all duration-300 border border-white/20 hover:border-white shadow-lg"
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6" />
            </button>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Complete Registration</h3>
            <p className="text-white/80 font-medium">You've selected the <span className="text-dark font-black">{selectedPlan}</span></p>
          </div>

          <div className="p-8 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-dark dark:text-light mb-2 uppercase">DETAILS SUBMITTED!</h4>
                <p className="text-gray-600 dark:text-gray-400">Our team will contact you shortly to finalize your membership.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-dark border-2 border-transparent focus:border-primary focus:outline-none dark:text-light transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-dark border-2 border-transparent focus:border-primary focus:outline-none dark:text-light transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-dark border-2 border-transparent focus:border-primary focus:outline-none dark:text-light transition-all"
                        placeholder="+94 70 000 0000"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Age</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                      <input
                        type="number"
                        {...register('age', { required: 'Age is required' })}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-dark border-2 border-transparent focus:border-primary focus:outline-none dark:text-light transition-all"
                        placeholder="e.g. 25"
                      />
                    </div>
                    {errors.age && <p className="text-red-500 text-xs mt-1 ml-1">{errors.age.message}</p>}
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Residential Address</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-4 text-primary" />
                    <textarea
                      {...register('address', { required: 'Address is required' })}
                      rows="2"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-dark border-2 border-transparent focus:border-primary focus:outline-none dark:text-light transition-all resize-none"
                      placeholder="Street, City, Province"
                    ></textarea>
                  </div>
                  {errors.address && <p className="text-red-500 text-xs mt-1 ml-1">{errors.address.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Absolute Beginner */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Experience Level</label>
                    <select
                      {...register('experience', { required: 'Please select an option' })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-dark border-2 border-transparent focus:border-primary focus:outline-none dark:text-light transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Level</option>
                      <option value="absolute_beginner">Absolute Beginner</option>
                      <option value="some_experience">Some Experience</option>
                      <option value="advanced">Advanced Athlete</option>
                    </select>
                    {errors.experience && <p className="text-red-500 text-xs mt-1 ml-1">{errors.experience.message}</p>}
                  </div>

                  {/* Location preference */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Preferred Location</label>
                    <input
                      {...register('location', { required: 'Location is required' })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-dark border-2 border-transparent focus:border-primary focus:outline-none dark:text-light transition-all"
                      placeholder="Enderamulla / Nearest Branch"
                    />
                    {errors.location && <p className="text-red-500 text-xs mt-1 ml-1">{errors.location.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] shadow-xl shadow-primary/20"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Confirm Selection <FiArrowRight /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
