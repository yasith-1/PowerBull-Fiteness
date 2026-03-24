import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiArrowRight, FiMail } from 'react-icons/fi';
import logo from '../assets/gym-logo.jpg';

export default function Footer() {
  return (
    <footer className='bg-dark text-light-darker relative border-t border-white/5 pt-20 pb-10 overflow-hidden'>
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-20'>
          {/* Brand Info - Spans 4 columns */}
          <div className='md:col-span-4'>
            <a href='#home' className='flex items-center gap-3 mb-8 group'>
              <div className="relative">
                <img src={logo} alt="Powerbull Fit Logo" className="w-12 h-12 object-contain rounded-xl border-2 border-primary/50 shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className='text-primary text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tighter'>
                POWERBULL<span className='text-white'>-FIT</span>
              </span>
            </a>
            <p className='text-gray-400 mb-8 max-w-sm text-lg leading-relaxed'>
              Join the elite. We provide the atmosphere, the equipment, and the community to help you achieve the extraordinary.
            </p>
            <div className='flex space-x-3'>
              {[
                { icon: <FiFacebook />, href: '#' },
                { icon: <FiInstagram />, href: '#' },
                { icon: <FiTwitter />, href: '#' },
                { icon: <FiYoutube />, href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className='w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className='md:col-span-2'>
            <h3 className='text-white font-black mb-8 text-xl tracking-tight uppercase'>Explore</h3>
            <ul className='space-y-4'>
              {['Home', 'About Us', 'Classes', 'Trainers', 'Pricing'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className='text-gray-400 hover:text-primary flex items-center gap-2 group transition-colors'>
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Spans 2 columns */}
          <div className='md:col-span-2'>
            <h3 className='text-white font-black mb-8 text-xl tracking-tight uppercase'>Programs</h3>
            <ul className='space-y-4'>
              {['Personal Training', 'Weight Lifting', 'Cardio Fitness', 'Yoga & Pilates', 'Nutrition Plans'].map((service) => (
                <li key={service} className='text-gray-400 flex items-center gap-2'>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact - Spans 4 columns */}
          <div className='md:col-span-4 bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm self-start'>
            <h3 className='text-white font-black mb-4 text-xl tracking-tight uppercase'>Stay Updated</h3>
            <p className='text-gray-400 mb-6 text-sm'>Subscribe to get the latest workouts and nutrition guides.</p>
            <div className='flex flex-col gap-4'>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <button className='w-full bg-primary hover:bg-primary-dark text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 group uppercase tracking-widest text-sm'>
                Subscribe <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6'>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className='text-gray-500 text-sm'>
              &copy; {new Date().getFullYear()} <span className="text-white font-bold tracking-tight uppercase tracking-widest">POWERBULL FITNESS.</span> All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <a href='#' className='text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors'>Privacy Policy</a>
              <a href='#' className='text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors'>Terms of Service</a>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm italic">
            "Push harder than yesterday if you want a different tomorrow."
          </div>
        </div>
      </div>
    </footer>
  );
}

