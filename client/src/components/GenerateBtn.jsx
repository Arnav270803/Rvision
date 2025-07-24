
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';
import {useNavigate} from 'react-router-dom'

const GenerateBtn = () => {

  const {user} = useContext(AppContext)
  const {setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
     setShowLogin(true)
    }
}

  return (
    <motion.div 
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y:0}}
    viewPort={{once: true}}
    className="pb-16 px-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white py-8 md:py-16 text-center">
        See the magic. Try now
      </h1>
      <button 
      onClick={onClickHandler}
      className="px-8 py-3 flex items-center gap-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all text-lg font-semibold">
        Generate Images
        <lord-icon
          src="https://cdn.lordicon.com/vgwutnhw.json"
          trigger="hover"
          stroke="bold"
          colors="primary:#ffffff,secondary:#7166ee"
        ></lord-icon>
      </button>
    </motion.div>
  );
};

export default GenerateBtn;