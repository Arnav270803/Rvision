import React from 'react';
import { testimonialsData, assets } from '../assets/assets';
import { motion } from "motion/react"
const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y:0}}
    viewPort={{once: true}}
    className="flex flex-col items-center justify-center my-20 py-12 px-6">
      <h1 className="text-4xl lg:text-5xl font-bold text-white">Customer Testimonials</h1>
      <p className="text-gray-300 mb-12 text-lg">What our users are saying</p>

      <div className="flex flex-wrap gap-8 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 w-full max-w-sm hover:bg-gray-800 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <img src={testimonial.image} alt={`${testimonial.name}'s profile`} className="rounded-full w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold text-white">{testimonial.name}</h2>
              <p className="text-gray-400 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                  <img key={starIndex} src={assets.rating_star} alt="Star" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 text-sm">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;