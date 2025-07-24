
import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from "motion/react"


const Steps = () => {
  return (
    <motion.div 
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y:0}}
    viewPort={{once: true}}
    className="flex flex-col items-center justify-center my-32 px-6">
      <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">How It Works</h1>
      <p className="text-lg text-gray-300 mb-12">Transform words into stunning images</p>

      <div className="space-y-6 w-full max-w-4xl">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <img width={50} src={item.icon} alt={`${item.title} icon`} className="text-white" />
            <div>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;