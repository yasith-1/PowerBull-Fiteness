import { motion } from 'framer-motion';

export const CardSkeleton = () => (
  <div className="bg-gray-200 dark:bg-dark-lighter p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 animate-pulse">
    <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-xl mb-6"></div>
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);

export const SectionHeaderSkeleton = () => (
  <div className="text-center max-w-3xl mx-auto mb-16 animate-pulse">
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mx-auto mb-2"></div>
    <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-6"></div>
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mx-auto"></div>
  </div>
);

export const TrainerSkeleton = () => (
  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-300 dark:bg-gray-700 animate-pulse">
    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
  </div>
);
