import Link from 'next/link'
import React from 'react'

function About() {
  return (
<section className="relative px-2 py-4 bg-gray-100 text-center">
  <div className="max-w mx-auto grid grid-cols-1 lg:grid-cols-2">
    {/* Column 1: Image */}
    <div id="about" className="scroll-mt-20 order-1 lg:order-none">
      <img
        src="/puzzle.png"
        alt="About Image"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Column 2: About Section */}
    <div className=" bg-[#B20D48] p-8 rounded-lg relative flex flex-col items-center justify-center order-2 lg:order-none">
      <h2 className="text-3xl font-semibold text-white mb-4">About Our Organization</h2>
      <p className="text-white">
      We aim to bridge the gap between top-down climate plans and grassroots actions, 
      facilitating effective, data-informed climate resilience decision-making in 
      collaboration with communities
      </p>
      <Link href="/about#aboutpagetop" passHref>
      <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#B20D48] transition duration-300 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200">
        Read More
      </button>
      </Link>
    </div>

    {/* Column 3: Contributor Section */}
    <div className="flex flex-col items-center justify-center bg-[#3e9a0b] p-8 rounded-lg order-4 lg:order-none">
      <h2 className="text-3xl font-semibold text-white mb-4">Become a Contributor</h2>
      <p className="text-white">
      Welcome to our vibrant community of change-makers! As a Project Contributor, 
      you will contribute to the collective effort of building a resilient and just 
      future. Whether you&#39;re passionate about data analytics, software development, 
      community engagement and partnership, or cross-functional collaboration, your 
      role is integral to driving meaningful community impact
      </p>
      <Link href="/contributor" passHref>
      <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#3e9a0b] transition duration-300 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200">
        Get Involved
      </button>
      </Link>
    </div>

      {/* Column 4: Image */}
      <div id="contributor" className="scroll-mt-20 order-3 lg:order-none">
      <img
        src="/contributor.jpeg"
        alt="About Image"
        className="w-full h-auto rounded-lg"
      />
    </div>

        {/* Column 5: Image */}
        <div id="collaborators" className="scroll-mt-20 order-5 lg:order-none">
      <img
        src="/collaborator.jpeg"  // Replace with the path to your image
        alt="Collaborator Image"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Column 6: Partnership Section */}
    <div className=" bg-[#240DB2] p-8 rounded-lg relative flex flex-col items-center justify-center order-6 lg:order-none">
      <h2 className="text-3xl font-semibold text-white mb-4">Collaborate for Impact</h2>
      <p className="text-white">
      Whether you are NPOs, government agencies, academic groups or community groups, 
      partner with us to amplify our collective impact on climate resilience. Let&#39;s join 
      forces and create lasting change together!
      </p>
      <Link href="/partnership" passHref>
      <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#240DB2] transition duration-300 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200">
        Learn More
      </button>
      </Link>
    </div>

    {/* Column 3: The Team Section */}
    <div className="flex flex-col items-center justify-center bg-[#B2770D] p-8 rounded-lg order-8 lg:order-none">
      <h2 className="text-3xl font-semibold text-white mb-4">The Team</h2>
      <p className="text-white">
      At the core of CRC lies a passionate team committed to driving positive 
      change in the face of climate challenges. We are a diverse group of 
      professionals, activists, and community leaders are united by a shared 
      vision of creating resilient urban communities. 
      </p>
      <Link href="/ourteam" passHref>
      <button className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#B2770D] transition duration-300 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200">
        Get to Know Us
      </button>
      </Link>
    </div>

      {/* Column 4: Image */}
      <div id="team" className="scroll-mt-20 order-7 lg:order-none">
      <img
        src="/ourteam.jpg"  // Replace with the path to your image
        alt="About Image"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</section>
  )
}

export default About