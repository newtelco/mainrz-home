import React from 'react'
import Image from 'next/image'

const Hero = ({ content }) => {
  const { Title, Description, ctaButtonLabel } = content
  return (
    <main className='font-montserrat'>
      <div className='container flex flex-col items-center mx-auto px-5 py-24 md:flex-row'>
        <div className='flex flex-col items-center mb-16 text-center md:items-start md:mb-0 md:pr-16 md:w-1/2 md:text-left lg:flex-grow lg:pr-24'>
          <p className='text-newtelco-900 inline-block mb-8 px-3 py-1 text-xs font-medium tracking-wider bg-newtelco-500 rounded-full uppercase'>
            Powered by NewTelco
          </p>
          <Image
            src='/img/mainrz-logo.png'
            width='500'
            height='94'
            alt={Title}
          />
          <ul className='hero-markers space-y flex flex-col items-start justify-center mt-8 w-full text-gray-400 font-mono text-sm font-light tracking-tight list-inside list-disc'>
            <li>
              Located just upstream from the internationally renowned telecom
              hub
            </li>
            <li>Meeting Tier 4/VK 4 requirements for power and connectivity</li>
            <li>
              Top-quality connectivity for local businesses and global players
            </li>
            <li>Integrating green efficiencies into every aspect</li>
          </ul>
          <div className='flex items-end justify-center mt-8 w-full md:justify-start'>
            <a
              alt='Mail MainRZ Marketing'
              href='mailto:marketing@mainrz.de'
              target='_blank'
              rel='noopener noreferer noreferrer'
              className='rounded focus:outline-none outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-4'
            >
              <button
                tabIndex='-1'
                className='inline-flex px-10 py-2 text-white text-lg bg-newtelco-500 hover:bg-newtelco-600 border-0 rounded transition-colors duration-500 ease-in-out'
              >
                {ctaButtonLabel}
              </button>
            </a>
          </div>
          <p className='mb-8 mt-2 w-full text-gray-500 font-mono text-sm font-extralight tracking-tight'>
            {Description}
          </p>
        </div>
        <div className='w-5/6 md:w-1/2 lg:w-full lg:max-w-lg'>
          <img
            className='rounded object-cover object-center'
            alt='hero'
            src='/img/absurd_2.png'
          />
        </div>
      </div>
      <div className='flex justify-center mt-12'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 text-newtelco-500 cursor-pointer'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </main>
  )
}

export default Hero
