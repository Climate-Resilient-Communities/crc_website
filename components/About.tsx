import React from 'react'

function About() {
  return (
<section id="aboutSection" className="px-2 py-4 bg-gray-100 text-center">
  <div className="max-w mx-auto grid grid-cols-2">
    {/* Column 1: Image */}
    <div className="">
      <img
        src="/puzzle.png"  // Replace with the path to your image
        alt="About Image"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Column 2: About Section */}
    <div className=" bg-[#B20D48] p-8 rounded-lg relative flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-white mb-4">About Our Organization</h2>
      <p className="text-white">
      We aim to bridge the gap between top-down climate plans and grassroots actions, 
      facilitating effective, data-informed climate resilience decision-making in 
      collaboration with communities
      </p>
      <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-green-500 transition duration-300 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200">
        Read More
      </button>
    </div>

    {/* Column 3: Contributor Section */}
    <div className="flex flex-col items-center bg-green-500 p-8 rounded-lg">
      <h2 className="text-3xl font-semibold text-white mb-4">Become a Contributor</h2>
      <p className="text-white">
      Welcome to our vibrant community of change-makers! As a Project Contributor, 
      you will contribute to the collective effort of building a resilient and just 
      future. Whether you&#39;re passionate about data analytics, software development, 
      community engagement and partnership, or cross-functional collaboration, your 
      role is integral to driving meaningful community impact
      </p>
      <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-green-500 transition duration-300 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200">
        Get Involved
      </button>
    </div>

            {/* Column 4: Image */}
            <div className="">
      <img
        src="/contributor.jpeg"  // Replace with the path to your image
        alt="About Image"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</section>
  )
}

export default About