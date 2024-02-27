import React from 'react'

function Landing() {
  return (
    <section className='sticky top-0 mx-auto flex h-screen w-full items-center
    justify-between px-8 bg-no-repeat bg-center bg-cover'
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
            href="/#about"
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
