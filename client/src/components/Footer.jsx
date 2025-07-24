import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-6 mt-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
      <img src={assets.logo} width={150} alt="Company Logo" />
      <p className="flex-1 text-gray-400 text-sm max-sm:hidden">
        Copyright © VisionAI | All rights reserved.
      </p>
      <div className="flex gap-4">
        <img src={assets.facebook_icon} width={30} alt="Facebook" className="hover:opacity-80 transition-all" />
        <img src={assets.twitter_icon} width={30} alt="Twitter" className="hover:opacity-80 transition-all" />
        <img src={assets.instagram_icon} width={30} alt="Instagram" className="hover:opacity-80 transition-all" />
      </div>
    </div>
  );
};

export default Footer;