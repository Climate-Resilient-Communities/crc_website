import React from 'react';
import Contact from '../Contact';

const PartnershipFooter = () => {
  return (
    <footer className="bg-[#0d48b2] text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        {/* Column 1: Social Media Links */}
        <div className="w-full sm:w-1/3 lg:w-1/5 mb-6">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className='text-xs pb-2'>
            Let&#39;s Connect for Change!
          </p>
          <p className='text-xs pb-2'>
           Have questions, ideas, or just want
           to say hello? We&#39;d love to hear from you! Reach out to us 
           through the channels below and let&#39;s collaborate for a 
           resilient and just future.
           </p>
           <p className='text-xs'>
            Email: hello@crcgreen.com
           </p>
        </div>

            {/* Column 2: Contact Form */}
        <div className="w-full sm:w-1/2 lg:w-2/3">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <Contact />
        </div>
      </div>
    </footer>
  );
};

export default PartnershipFooter;