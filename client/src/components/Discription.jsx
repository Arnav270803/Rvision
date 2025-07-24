import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"

const Discription = () => {
  return (
    <motion.div
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y:0}}
    viewPort={{once: true}}
     className=" flex flex-col items-center justify-center my-24 px-6 lg:px-28">
      <h1 className="text-4xl lg:text-5xl font-bold text-white">Create AI Images</h1>
      <p className="text-gray-300 mb-12 text-lg">Turn your ideas into visuals</p>

      <div className="flex flex-col gap-10 lg:flex-row items-center">
        <img src={assets.sample_img_1} alt="Sample AI Image" className="w-full max-w-md rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold text-white max-w-lg mb-6">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-300 mb-4">
            Easily bring your ideas to life with our free image generator. Whether you need stunning visuals or unique images, our tool transforms your text into eye-catching images with just a few clicks.
          </p>
          <p className="text-gray-300">
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Discription;