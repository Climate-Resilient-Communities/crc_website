import React from 'react'

function Hero() {
  return (
    <div>
    <main className="flex-grow flex-col items-center justify-between p-12">
    {/* Space behind Navbar */}
    <div className="z-10 h-20 max-w-5xl w-full"></div>

    <div className="w-full grid text-center ">
    {/* About Section */}
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
            
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
    {/* Why What How Section */}
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-400 hover:border-gray-300 hover:bg-gray-400/90 hover:dark:border-neutral-700 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Why: 
            <span className='text-2xl font-normal'> Goals/Mission</span>
          </h2>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            What: 
            <span className='text-2xl font-normal'> Expected Results</span>
          </h2>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            How: 
            <span className='text-2xl font-normal'> Our Approach</span>
          </h2>
        </a>
    {/* Contributors Section */}
        <a
          href="/contributor"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contributors{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Help champion the future of climate resilience!
          </p>
        </a>

    </div>
    </main>
    </div>
  )
}

export default Hero