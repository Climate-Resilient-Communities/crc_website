'use client'

import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Landing from '@/components/Landing'

export default function Home() {
  return (
    <div>
    <Header />
    <Landing />

      {/* <section id="about" className='relative z-40 -mt-[100vh] min-h-screen bg-[#F6FEFD]'> */}
        <About />
      {/* </section> */}
      <Footer />
    </div>
  )
}
