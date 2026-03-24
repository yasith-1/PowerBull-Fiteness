import { useState } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import logo from '../assets/gym-logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
		<header className='fixed w-full z-50 transition-all duration-300'>
			{/* Top Info Bar */}
			<div className='hidden md:block bg-dark text-gray-300 py-2 border-b border-gray-800 text-sm'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
					<div className='flex flex-wrap gap-4'>
						<span>📍 Enderamulla, Western Province, Sri Lanka</span>
						<span>📞 (+94) 70-141-0113</span>
					</div>
					<div>
						<span>🕒 Mon-Sat: 5:00 AM - 12:00 PM | Sun: 8:00 AM - 8:00 PM</span>
					</div>
				</div>
			</div>

			<nav className='glass-effect border-b border-gray-200/20 dark:border-gray-800/50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-20'>
						{/* Logo */}
						<div class=' flex items-center'>
							<a href='#home' class='flex items-center gap-3'>
								<img src={logo} alt="Powerbull Fit Logo" class="w-12 h-12 object-contain rounded-full border-2 border-primary shadow-lg" />
								<span class='text-primary-dark dark:text-primary text-xl sm:text-2xl md:text-3xl font-heading font-black tracking-tighter whitespace-nowrap'>
									POWER<span class='text-dark dark:text-light'> BULL</span>
								</span>
							</a>
						</div>

						{/* Desktop Menu */}
						<div className='hidden md:flex items-center space-x-8'>
							<div className='hidden md:flex space-x-6'>
								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className='text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm lg:text-base'>
										{link.name}
									</a>
								))}
							</div>

							<div className='flex items-center space-x-4 pl-4 border-l border-gray-300 dark:border-gray-700'>
								<button
									onClick={toggleTheme}
									className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
									aria-label='Toggle Theme'>
									{theme === 'dark' ?
										<FiSun className='w-5 h-5' />
									:	<FiMoon className='w-5 h-5' />}
								</button>
								<a
									href='#pricing'
									className='bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 active:scale-95'>
									Join Now
								</a>
							</div>
						</div>

						{/* Mobile menu button */}
						<div className='md:hidden flex items-center gap-4'>
							<button
								onClick={toggleTheme}
								className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'>
								{theme === 'dark' ?
									<FiSun className='w-5 h-5' />
								:	<FiMoon className='w-5 h-5' />}
							</button>
							<button
								onClick={() => setIsOpen(!isOpen)}
								className='text-gray-800 dark:text-gray-200 hover:text-primary focus:outline-none'>
								{isOpen ?
									<FiX className='w-7 h-7' />
								:	<FiMenu className='w-7 h-7' />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className='md:hidden absolute top-20 left-0 w-full bg-light dark:bg-dark-lighter border-t border-gray-200 dark:border-gray-800 shadow-xl'>
						<div className='px-4 pt-2 pb-6 space-y-2'>
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className='block px-3 py-3 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'>
									{link.name}
								</a>
							))}
							<div className='pt-4 px-3'>
								<a
									href='#pricing'
									onClick={() => setIsOpen(false)}
									className='block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold'>
									Join Now
								</a>
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
