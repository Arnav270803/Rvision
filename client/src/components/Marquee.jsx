import React, { useContext } from 'react';
import { motion } from "motion/react";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Marquee() {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="w-screen py-8 bg-black overflow-hidden -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-24">
      <div className="border-t-2 border-b-2 border-purple-800 flex whitespace-nowrap">
        <motion.h1
        onClick={onClickHandler}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[6vw] sm:text-[8vw] md:text-[10vw] lg:text-[12vw] font-bold uppercase text-white pr-6 tracking-tight leading-tight cursor-pointer hover:text-purple-400 transition-colors duration-300"
        >
          Generate Image
        </motion.h1>
        <motion.h1
         onClick={onClickHandler}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[6vw] sm:text-[8vw] md:text-[10vw] lg:text-[12vw] font-bold uppercase text-purple-400 pr-6 tracking-tight leading-tight cursor-pointer hover:text-white transition-colors duration-300"
        >
          Generate Image
        </motion.h1>
        <motion.h1
         onClick={onClickHandler}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}          className="text-[6vw] sm:text-[8vw] md:text-[10vw] lg:text-[12vw] font-bold uppercase text-white pr-6 tracking-tight leading-tight cursor-pointer hover:text-purple-400 transition-colors duration-300"
        >
          Generate Image
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;