

import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"

const Buycredit = () => {
  const { user } = useContext(AppContext);

  // Matte color palette with no green
  const cardColors = {
    Basic: 'bg-gray-800',        // Matte dark gray
    Advanced: 'bg-indigo-900',   // Matte deep indigo (replacing teal)
    Business: 'bg-zinc-800',     // Matte muted zinc
  };

  return (
    <motion.div 
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y:0}}
    viewPort={{once: true}}
    className="min-h-[80vh] text-center pt-16 pb-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 px-12 py-2.5 rounded-full mb-8 hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-md">
        Our Plans
      </button>
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-100 mb-8 sm:mb-12 tracking-wide">
        Choose Your Plan
      </h1>

      <div className="flex flex-wrap justify-center gap-8 text-left max-w-6xl mx-auto">
        {plans.map((item, index) => (
          <div
            key={index}
            className={`${cardColors[item.id]} border border-gray-700/50 rounded-xl py-14 px-10 text-gray-200 hover:shadow-lg hover:border-gray-600/70 transition-all duration-300 shadow-sm relative overflow-hidden`}
          >
            {/* Gradient border overlay */}
            <div className="absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r from-gray-700 via-indigo-900 to-zinc-800 opacity-20 pointer-events-none"></div>

            {/* Most Popular badge for Advanced */}
            {item.id === 'Advanced' && (
              <span className="absolute top-3 right-3 bg-indigo-700 text-gray-100 px-3 py-1 rounded-full text-sm font-medium shadow-inner">
                Most Popular
              </span>
            )}
            <img
              width={48}
              src={assets.logo_icon}
              alt={`${item.id} Icon`}
              className="mb-6 filter brightness-150"
            />
            <p className="mt-4 mb-2 font-semibold text-2xl uppercase tracking-tight">{item.id}</p>
            <p className="text-base leading-relaxed">{item.desc}</p>
            <p className="mt-8">
              <span className="text-4xl font-bold text-indigo-400">${item.price}</span>
              <span className="text-sm text-gray-400"> / {item.credits} credits</span>
            </p>
            <button
              className="w-full bg-indigo-700 text-gray-100 mt-10 text-base font-medium rounded-md py-3.5 min-w-56 hover:bg-indigo-600 hover:shadow-md transition-all duration-300"
            >
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Buycredit;