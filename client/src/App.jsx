import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Result from './pages/Result';
import Home from './pages/Home';
import Buycredit from './pages/BuyCredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppContext } from './context/AppContext';

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="  min-h-screen bg-black text-white flex flex-col px-4 sm:px-6 md:px-12 lg:px-24"> {/* Made relative */}
     <ToastContainer position='bottom-right'/>
      <Navbar />
      {showLogin && <Login />}
      <main className="flex-1" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<Buycredit />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;