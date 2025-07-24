import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { user,setShowLogin , logout , credit} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-20 w-full py-4 flex justify-between items-center px-6 lg:px-16">
      <div className="flex items-center gap-2">
        <lord-icon src="https://cdn.lordicon.com/rpvomrgr.json" trigger="hover"></lord-icon>
        <Link to="/">
          <button className="text-2xl font-bold font-sans bg-gradient-to-r from-blue-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
            Vision <span className="font-normal">AI</span>
          </button>
        </Link>
      </div> 

      <div className="flex items-center gap-x-6">
        {user ? (
          <div className="flex items-center gap-x-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center bg-gray-800/80 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all"
            >
              <lord-icon
                src="https://cdn.lordicon.com/vgwutnhw.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#7166ee"
              ></lord-icon>
              <p className="ml-2 text-sm text-white">Credits left: {credit}</p>
            </button>
            <p className="text-white text-sm max-sm:hidden">{user.name}</p>
            <div className="relative group">
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#f49cc8"
              ></lord-icon>
              <div className="absolute hidden group-hover:block top-full right-0 z-10 bg-gray-800 text-white shadow-lg rounded pt-2 w-32">
                <ul className="list-none m-0 p-2 rounded-md text-sm">
                  <li onClick={logout} className="py-1 px-2 hover:bg-gray-700 cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <p onClick={() => navigate('/buy')} className="text-white cursor-pointer hover:text-gray-300">Pricing</p>
            <button 
            onClick={()=>setShowLogin(true)}
            className="text-white px-4 py-2 rounded-full border border-gray-500 hover:bg-gray-800/80 transition-all">Log in</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

