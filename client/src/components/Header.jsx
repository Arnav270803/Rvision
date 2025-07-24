
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {


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
    <motion.div className=" flex flex-col justify-center items-center text-center my-20 px-6"
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
      <motion.div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-6 py-2 rounded-full border border-gray-700"
       initial={{opacity:0, y:-20}}
       animate={{opacity:1, y:0}}
       transition={{delay: 0.2 , duration:0.8}}
      >
        <p>Best text to image generator</p>
        <lord-icon
          src="https://cdn.lordicon.com/cvwrvyjv.json"
          trigger="hover"
          colors="primary:#ffffff,secondary:#e5d1fa"
        ></lord-icon>
      </motion.div>

      <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white max-w-[600px] mx-auto mt-10"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 0.4, duration: 2}}
      >
        Turn text into <span className="text-purple-400">image</span>
      </motion.h1>

      <motion.p className="text-center text-gray-300 max-w-2xl mx-auto mt-5 text-lg"
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.6, duration: 0.8}}
    
      >
        Unleash the full potential of your creative vision by turning your stunning image ideas into beautifully crafted, lifelike images with advanced AI.
      </motion.p>

      <motion.button  
      onClick={onClickHandler}
      className="mt-8 px-8 py-3 flex items-center gap-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all text-lg font-semibold"
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity:0}}
      animate={{opacity: 1}}
      transition={{default:{duration: 0.5}, opacity:{delay:0.8, duration: 1 }}}
      >
        Generate Images
        <lord-icon
          src="https://cdn.lordicon.com/vgwutnhw.json"
          trigger="hover"
          stroke="bold"
          colors="primary:#ffffff,secondary:#7166ee"
        ></lord-icon>
      </motion.button>

      <motion.div className="flex flex-wrap justify-center mt-16 gap-4"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 1, duration:1}}

      >
        {Array(6).fill('').map((item, index) => (
          <motion.img
          whileHover={{scale:1.05, duration:0.1}}
            className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-16 w-20"
            src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
            alt={`Sample ${index + 1}`}
            key={index}
          />
        ))}
      </motion.div>

      <motion.p className="mt-4 text-gray-500 text-sm"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2, duration:0.8}}
      >Generated images from VisionAI</motion.p>
    </motion.div>
  );
};

export default Header;























