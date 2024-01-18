'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Landing from '@/components/Landing'
import Navbar from '@/components/NavBar'
import Partnerships from '@/components/Partnerships'
import TeamBlurb from '@/components/TeamBlurb'
import TableComponent from '@/components/TableComponent'

export default function Home() {
  return (
    <div>
    <Header />
      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Landing />
      </main>
      <section id="aboutSection" className='relative z-40 -mt-[100vh] min-h-screen bg-[#F6FEFD]'>
        <div className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide
                        md:text-5xl'>
            About Us
          </h1>
        <Partnerships />
        <div className='flex px-12'><TableComponent /></div>
        <TeamBlurb />
        </div>
      </section>
      <Footer />
    </div>

    // <div>
    // <Navbar />
    // <Hero />
    // <Partnerships />
    // <TeamBlurb />
    // <Footer />
    // </div>
  )
}
