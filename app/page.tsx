'use client'

import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import Partnerships from '@/components/Partnerships'
import TeamBlurb from '@/components/TeamBlurb'

export default function Home() {
  return (
    <div>
    <Header />
      <main className='relative h-[200vh] bg-[#FBFEFE]'>
        <Landing />
      </main>
      <section id="aboutSection" className='relative z-40 -mt-[100vh] min-h-screen bg-[#F6FEFD]'>
        <div className=''>

        <About />
        <Partnerships />
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
