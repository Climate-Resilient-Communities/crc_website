import React from 'react'
<meta name='viewport' content='width=device-width, initial-scale=1.0' />

function Landing() {
  return (
    <section className='sticky top-0 mx-auto flex h-screen w-full items-center
    justify-between px-8 bg-cover'
    style={{ backgroundImage: 'url("/landing_image.jpeg")', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      <div className='space-y-8 mx-auto text-center z-10'>
        <h1 className='space-y-3 text-3xl font-semibold tracking-wide lg:text-4xl xl:text-5xl text-white'>
          <span className='block pb-2'>
            From Data to Action: Creating Climate Resilient Communities for All
          </span>
        </h1>

        <div className='space-x-8 mx-auto'>
          <a
            href="#aboutSection"
            className="inline-block rounded px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-green-600 to-green-500 border-green-700 text-white"
          >
            Learn More
          </a>
        </div>
    </div>
    </section>
  )
}

export default Landing

// import Image from 'next/image'
// import React from 'react'

// function Landing() {
//   return (
//     <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center
//     justify-between px-8'>
//         <div className='space-y-8'>
//             <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
//                 <span className='block bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent pb-2'>
//                     Join the Fight Against
//                 </span>
//                 <span className='font-medium space-y-3 text-3xl xl:text-4xl'>Climate Change</span>
//             </h1>

//             <div className='space-x-8'>
//             <a href="#aboutSection" className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-green-600 to-green-500 border-green-700 text-white">
//             <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
//             <span className="relative">Learn More</span>
//             </a>
//             </div>
//         </div>

//         <div className='relative hidden h-[450px] w-[450px] transition-all duration-500
//         sm:inline md:inline lg:h-[650px] lg:w-[600px]'>
//             <Image src="/LandingImage.png" layout="fill" objectFit="contain" alt=""/>
//         </div>
//     </section>
//   )
// }

// export default Landing