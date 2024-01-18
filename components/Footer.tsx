import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-emerald-600 to-green-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Column 1: From our learning hub */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <h4 className="text-lg font-semibold mb-4">From our learning hub</h4>
          <p className='text-xs'>Parks and Recreation</p>
          <p className='text-xs'>Heat Islands</p>
          <p className='text-xs'>Community Amenities</p>
          <p className='text-xs'>Air and Noise Pollution</p>
          <p className='text-xs'>Policy and Practice</p>
        </div>

        {/* Column 2: Sign up for our newsletter */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <h4 className="text-lg font-semibold mb-4">Sign up for our newsletter</h4>
          {/* ... (rest of the content) */}
        </div>

        {/* Column 3: Social Media Links */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          {/* ... (rest of the content) */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;