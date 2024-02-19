'use client'

import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Landing from '@/components/Landing'

export default function Home() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Header />
      <main className='relative h-[200vh] bg-[#FBFEFE]'>
        <Landing />
      </main>
      <section id="aboutSection" className='relative z-40 -mt-[100vh] min-h-screen bg-[#F6FEFD]'>
        <About />
      </section>
      <Footer />
    </div>
  )
}
