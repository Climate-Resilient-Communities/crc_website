"use client";
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState(''); //#ced6d0
    const [linkColor, setLinkColor] = useState(''); //#1f2937

    const handleNav = () => {
        setNav(!nav);
      };

      // useEffect(() => {
      //   const handleShadow = () => {
      //     if (window.scrollY >= 5) {
      //       setShadow(true);
      //     } else {
      //       setShadow(false);
      //     }
      //   };
      //   window.addEventListener('scroll', handleShadow);
      // }, []);

  return (
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 z-[100]' : 'fixed w-full h-20 z-[100]'}>

        <div className='flex justify-between items-center w-full h-full px-5 2xl:px-16'>
          <Link href="/" passHref>
            <h1 className="link ml-5 cursor-pointer hover:scale-105 text-xl font-cd-medium md:text-2xl  lg:text-2xl  dark:text-white">
              Climate Resilience
            </h1>
          </Link>

        <div>
            <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                <Link href='/'>
                    <li className='rounded-lg bg-green-700 p-2 ml-0 text-sm text-white uppercase opacity-75 transition hover:opacity-100'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='rounded-lg bg-green-700 p-2 ml-3 text-sm text-white uppercase opacity-75 transition hover:opacity-100'>Tool/Learning</li>
                </Link>
                <Link href='/contributor'>
                    <li className='rounded-lg bg-green-700 p-2 ml-3 text-sm text-white uppercase opacity-75 transition hover:opacity-100'>Contributors</li>
                </Link>
              <Link href=''>
                    <li className='rounded-lg bg-green-700 p-2 ml-3 text-sm text-white uppercase opacity-75 transition hover:opacity-100'>Partnerships</li>
                </Link>
                <Link href='/#contact'>
                    <li className='rounded-lg bg-green-700 p-2 ml-3 text-sm text-white uppercase opacity-75 transition hover:opacity-100'>Our Team</li>
                </Link>
                <Link href='/#contact'>
                    <li className='rounded-lg bg-green-700 p-2 ml-3 text-sm text-white uppercase opacity-75 transition hover:opacity-100'>Contact</li>
                </Link>
            </ul>
            {/* hamburger menu */}
            <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden cursor-pointer mr-5'
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
    </div>   

      {/* Mobile Menu */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[70%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-auto'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>

            <Link href="/">
              <h1 onClick={() => setNav(false)} className="link cursor-pointer hover:scale-105 text-3xl font-cd-medium md:text-3xl  lg:text-2xl  dark:text-white">
                Climate Resilience
              </h1>
            </Link>

              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build a sustainable future together!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Tool/Learning
                </li>
              </Link>
              <Link href='/contributor'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contributors
                </li>
              </Link>
              <Link href='/music'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Partnerships
                </li>
                </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Our Team
                </li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#004225]'>
                Stay Connected
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/pirashan-ravikumaran/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Pirashan'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar