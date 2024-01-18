import React from 'react'

function TeamBlurb() {
  return (

    <div id="ourTeam" className="flex-grow flex-col items-center p-12 w-full grid text-center">
    {/* Team section with headshots and blurbs */}
        <div className='grid grid-cols-3 justify-center'>
          <div>
            <img
            src="headshot.jpg"
            alt="John Maeda"
            className="rounded-full mx-auto mt-8"
            width="100"
            />
            <h2 className='rounded-lg border border-transparent px-5 py-4 transition-colors'>John Maeda</h2>
            <p className='text-xs text-gray-700 px-6 pb-4'>The average rule of the digital transformation something is that you'll never have the resources
            to design experiences like Apple. But you can always close most usability gaps with an awesome something experience.</p>
          </div>

          <div>
            <img
            src="headshot.jpg"
            alt="John Maeda"
            className="rounded-full mx-auto mt-8 grayscale"
            width="100"
            />
            <h2 className='rounded-lg border border-transparent px-5 py-4 transition-colors'>Sebastian Ramirez</h2>
            <p className='text-xs text-gray-700 px-6 pb-4'>One of the things pepople like the most about something, something and something is the docuentation. I have put a lot of effort into making it
            easy to study and fast to understand. And a key component of that is the something of easy.</p>
          </div>

          <div>
            <img
            src="headshot.jpg"
            alt="John Maeda"
            className="rounded-full mx-auto mt-8"
            width="100"
            />
            <h2 className='rounded-lg border border-transparent px-5 py-4 transition-colors'>Michael Feng</h2>
            <p className='text-xs text-gray-700 px-6'>Something foundation depends on material for docs for our official website and documentation at something.org. We find it ideal for a 
              complex documentation site because of the flecible navigation and layout options and built-in search.
            </p>
          </div>
        </div>

    </div>
  )
}

export default TeamBlurb