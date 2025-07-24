
{/*import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setstate] = useState('Login')
  const {setShowLogin, backendUrl,setToken, setUser } = useContext(AppContext)

  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')


  const onSubmitHandler = async (e) =>{
    e.preventDefault();

    try {
      
      if(state === 'Login'){
      const {data}=  await axios.post(backendUrl + '/api/user/login' , {email, password})

      if(data.success){
        setToken(data.token)
        setUser(data.user)
        localStorage.setItem('token' , data.token)
        setShowLogin(false)
      }else{
        toast.error(data.message)
      }

      }else{
           const {data} =  await axios.post(backendUrl + '/api/user/register' , {name,email, password})

      if(data.success){
        setToken(data.token)
        setUser(data.user)
        localStorage.setItem('token' , data.token)
        setShowLogin(false)
      }else{
        toast.error(data.message)
      }
      }

    } catch (error) {
        toast.error(error.message)

    }
  }


  useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return ()=>{
          document.body.style.overflow ='unset'; 
        }
  },[])

  return (
    <div className="  fixed top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form onSubmit={onSubmitHandler}
          initial={{opacity: 0.2, y:50}}
          transition={{duration:0.3}}
          whileInView={{opacity: 1, y:0}}
          viewPort={{once: true}}
      className="relative bg-white p-10 rounded-xl text-slate-500">
        <img
        onClick={()=>setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-4 right-4 w-4 h-4 hover:scale-125 cursor-pointer transition-all duration-300"/>

        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-4">
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              colors="primary:#848484,secondary:#ee66aa"
            ></lord-icon>
            <input onChange={e => setName(e.target.value)} value={name} type="text" className="outline-none text-sm" placeholder="Full Name" required></input>
          </div>
        )}

        <div className="border px-6 py-2 flex flex-center gap=2 rounded-full mt-4">
          <lord-icon
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="in"
            delay="1500"
            state="in-assembly"
            colors="primary:#545454,secondary:#e8308c"
          ></lord-icon>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="outline-none text-sm" placeholder="Email id" required></input>
        </div>

        <div className="border px-6 py-2 flex flex-center gap=2 rounded-full mt-4">
          <lord-icon
            src="https://cdn.lordicon.com/fgxwhgfp.json"
            trigger="hover"
            colors="primary:#848484,secondary:#f49cc8"
          ></lord-icon>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" className="outline-none text-sm" placeholder="Password" required></input>
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">{state === 'Login' ? 'login' : 'create account'}</p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full">create account</button>

        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setstate('Sign Up')}>
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setstate('Login')}>
              Login
            </span>
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Login;*/}


// use above code , that is the original and fully working code 


import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login') // Fixed: consistent naming
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false) // Added loading state

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
          toast.success('Login successful!')
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
          toast.success('Registration successful!')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset'; // FIXED: Was 'upset'
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // FIXED: was viewPort
        className="relative bg-white p-10 rounded-xl text-slate-500 max-w-md w-full mx-4"
      >
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-4 right-4 w-4 h-4 hover:scale-125 cursor-pointer transition-all duration-300"
        />

        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm text-center mb-6">Welcome back! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4"> {/* FIXED: flex-center and gap */}
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              colors="primary:#848484,secondary:#ee66aa"
            ></lord-icon>
            <input 
              onChange={e => setName(e.target.value)} 
              value={name} 
              type="text" 
              className="outline-none text-sm flex-1" 
              placeholder="Full Name" 
              required
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4"> {/* FIXED: gap-2 */}
          <lord-icon
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="in"
            delay="1500"
            state="in-assembly"
            colors="primary:#545454,secondary:#e8308c"
          ></lord-icon>
          <input 
            onChange={e => setEmail(e.target.value)} 
            value={email} 
            type="email" 
            className="outline-none text-sm flex-1" 
            placeholder="Email id" 
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4"> {/* FIXED: gap-2 */}
          <lord-icon
            src="https://cdn.lordicon.com/fgxwhgfp.json"
            trigger="hover"
            colors="primary:#848484,secondary:#f49cc8"
          ></lord-icon>
          <input 
            onChange={e => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            className="outline-none text-sm flex-1" 
            placeholder="Password" 
            required
          />
        </div>

        {state === 'Login' && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer hover:underline">Forgot Password?</p>
        )}

        <button 
          disabled={loading}
          className="bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Please wait...' : (state === 'Login' ? 'Login' : 'Create Account')} {/* FIXED: Dynamic text */}
        </button>

        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setState('Sign Up')}>
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setState('Login')}>
              Login
            </span>
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Login;