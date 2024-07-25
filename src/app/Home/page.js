import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className='w-full h-full m-0 p-0 box-border flex flex-col'>
        <Navbar />
        <div className="w-full flex justify-center items-center px-5 py-20">
          <div className="w-full lg:w-5/6 px-8 py-3 flex flex-col lg:flex-row justify-around items-center bg-gray-800 rounded-lg">
            <div className='w-full lg:w-3/5 flex flex-col items-center lg:items-start justify-center px-5'>
              <h2 className='px-5 font-semibold text-lg text-center lg:text-left'>Hi there, I am</h2>
              <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-orange-500 px-5 py-3 text-center lg:text-left'>Pawan Pal</h1>
              <p className='font-semibold text-lg sm:text-xl md:text-2xl text-gray-400 p-5 text-center lg:text-left'>
                &quot; A Front-End Web Developer and a Competitive Programmer passionate about creating interactive applications on the web and solving complex problems by the power of data structures and algorithms. &quot;
              </p>
            </div>
            <div className='w-full lg:w-2/5 shadow-white overflow-hidden px-10 py-10 flex justify-center'>
              <Image src="/pawan_img.jpg" alt="failed to load img" height={10} width={10} className='rounded-full h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
