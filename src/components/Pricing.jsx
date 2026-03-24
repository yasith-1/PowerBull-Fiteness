import { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from './Cards';
import PlanModal from './PlanModal';

export default function Pricing() {
	const [selectedPlan, setSelectedPlan] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [billingCycle, setBillingCycle] = useState('monthly');

	const plans = [
		{
			plan: 'Basic Plan',
			price: '5000.00',
			features: [
				'Access to gym machines',
				'Locker room access',
				'1 Free consultation',
				'Standard support',
			],
			isPopular: false,
		},
		{
			plan: 'Pro Plan',
			price: '10000.00',
			features: [
				'All Basic features',
				'Group class access',
				'Personalized meal plan',
				'Access to sauna & pool',
				'Priority support',
			],
			isPopular: true,
		},
		{
			plan: 'Premium Plan',
			price: '15000.00',
			features: [
				'All Pro features',
				'2 PT sessions per week',
				'Exclusive VIP lounge',
				'Free branded apparel',
				'24/7 Premium support',
			],
			isPopular: false,
		},
	];

	const handleChoosePlan = (planName) => {
		setSelectedPlan(planName);
		setIsModalOpen(true);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<section id='pricing' className='py-24 bg-white dark:bg-dark-lighter relative overflow-hidden'>
			{/* Ambient Background Globs */}
			<div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
			<div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20"
					>
						<span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Flexible Memberships</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='text-4xl md:text-6xl font-black text-dark dark:text-light mb-6 tracking-tighter'>
						CHOOSE YOUR <span className="text-primary italic">LEVEL.</span>
					</motion.h2>
					
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='text-lg text-gray-600 dark:text-gray-400 font-medium mb-10'>
						Premium fitness shouldn’t be complicated. Select the plan that fits your lifestyle and start your transformation today.
					</motion.p>

					{/* Pricing Toggle */}
					<div className="flex items-center justify-center gap-4 mb-8">
						<span className={`text-sm font-bold uppercase tracking-widest ${billingCycle === 'monthly' ? 'text-primary' : 'text-gray-400'}`}>Monthly</span>
						<button 
							onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
							className="w-16 h-8 bg-gray-200 dark:bg-dark p-1 rounded-full relative transition-colors duration-300 border border-gray-300 dark:border-white/10"
						>
							<motion.div 
								animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
								className="w-6 h-6 bg-primary rounded-full shadow-lg"
							/>
						</button>
						<span className={`text-sm font-bold uppercase tracking-widest ${billingCycle === 'yearly' ? 'text-primary' : 'text-gray-400'}`}>Yearly <span className="ml-1 text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span></span>
					</div>
				</div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
					className='grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto'>
					{plans.map((plan, index) => (
						<PricingCard
							key={index}
							plan={plan.plan}
							price={billingCycle === 'yearly' ? (parseFloat(plan.price) * 0.8).toFixed(2) : plan.price}
							features={plan.features}
							isPopular={plan.isPopular}
							onChoose={handleChoosePlan}
						/>
					))}
				</motion.div>
				
				<motion.p 
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="text-center mt-12 text-gray-500 text-sm font-medium"
				>
					* All plans include 15-day money-back guarantee. No questions asked.
				</motion.p>
			</div>

			{/* Registration Modal */}
			<PlanModal 
				isOpen={isModalOpen} 
				onClose={() => setIsModalOpen(false)} 
				selectedPlan={selectedPlan} 
			/>
		</section>
	);
}
