import React from 'react';
import { motion } from 'framer-motion';
type RankKanyeHomeProps = {
  onProceed: () => void;
};
export const RankKanyeHome = ({
  onProceed
}: RankKanyeHomeProps) => {
  return <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center">
          {/* Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-6xl md:text-8xl font-black text-white mb-12 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            RankYe
          </motion.h1>

          {/* Kanye Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="mb-12 flex justify-center">
            <div className="relative w-64 h-96 md:w-80 md:h-[30rem] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-orange-500/30 to-pink-500/30 mix-blend-multiply" />
              <img src="/RankYeHome.jpg" alt="Kanye West" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 border-2 border-red-500/30 rounded-2xl" />
            </div>
          </motion.div>

          {/* Proceed Button */}
          <motion.button initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} onClick={onProceed} className="group relative px-12 py-5 text-xl font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-orange-600 to-red-500 transition-all duration-300 group-hover:scale-110" />
            
            {/* Button Text */}
            <span className="relative z-10 flex items-center gap-3">
              Start Ranking
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>;
};