import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';

const Result = () => {

const [image,setImage] = useState(assets.sample_img_1)
const [isImageLoaded, setIsImageLoaded]= useState(true)
const [loading, setLoading] =useState(false)
const [input, setInput] = useState('')

const {generateImage} = useContext(AppContext)

const onSubmitHandler =async (e) =>{
e.preventDefault()
setLoading(true)

if(input){
  const image = await generateImage(input)
  if(image){
    setIsImageLoaded(true)
    setImage(image)
  }
}
setLoading(false)
}

  return (
    <motion.form
    initial={{opacity: 0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y:0}}
    viewPort={{once: true}}
    onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center pt-20 px-6">
      <div className="relative">
        <img src={image} alt="Generated Result" className="max-w-sm rounded-lg shadow-md" />
        <span className={`absolute bottom-0 left-0 h-1 bg-purple-500 
          ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}/>
      </div>
      <p className={!loading ? 'hidden' :'' }>Loading...</p>
    {!isImageLoaded && 
      <div className="flex w-full max-w-xl bg-gray-900/90 border border-gray-800 rounded-full shadow-xl mt-10 overflow-hidden">
        <input
        onChange={e=> setInput(e.target.value)} value={input}
          type="text"
          placeholder="Describe what you want to generate"
          className="flex-1 bg-transparent text-white placeholder-gray-500 px-6 py-4 outline-none focus:ring-2 focus:ring-purple-600 transition-all"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 transition-all duration-300 font-semibold"
        >
          Generate
        </button>
      </div>
      }

      {isImageLoaded && 
      <div className="flex gap-4 flex-wrap justify-center mt-10">
        <p
          onClick={()=>{setIsImageLoaded(false)}}
          type="button" // Prevents form submission
          className="bg-transparent cursor-pointer border border-gray-700 text-white
           px-8 py-3 rounded-full hover:bg-gray-800 hover:border-gray-600
            transition-all duration-300 font-medium"
        >
          Generate Another
        </p>
        <a
          href={image} // Links to the image for download
          download
          className="bg-zinc-900 text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-all duration-300 font-medium"
        >
          Download
        </a>
      </div>
      }
    </motion.form>
  );
};

export default Result;