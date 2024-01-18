import Image from 'next/image'
import React from 'react'
import Partnerships from './Partnerships'

function About() {
  return (
    <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#F6FEFD]'>
        <div className='space-y-10 py-16'>
        <h1 className='text-center text-4xl font-medium tracking-wide
        md:text-5xl'>
            About Us
        </h1>
        <Partnerships />
        </div>
      </section>
  )
}

export default About