import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className='w-full h-screen m-0 p-0 box-border flex flex-col align-middle justify-center'>
      <Navbar/>
      <div className="w-full h-5/6 flex justify-center align-middle px-5 py-20">
        <div className=" w-5/6 px-8 py-3 flex justify-around align-middle bg-gray-800 rounded-lg">
          <div className='w-3/5 flex flex-col align-middle justify-center px-5'>
            <h2 className='px-5 font-semibold text-lg'>Hi there, I am</h2>
            <h1 className='text-7xl text-wrap font-medium text-orange-500 px-5 py-3'>Pawan Pal</h1>
            <p className=' font-semibold text-2xl text-gray-400 p-5'> &quot; A Front-End Web Developer and a Competitive Programmer passionate about creating interactive applications on the web and solving complex problems by the power of data structures and algorithms.&quot;</p>
          </div>
          <div className='w-2/5 shadow-white overflow-hidden px-10 py-10'>
          <Image src={'/pawan_img.jpg'} alt='failed to load image' className='rounded-full' width={600} height={600}/>
            {/* <img src="pawan_img.jpg" alt="failed to load img" className='rounded-full'/> */}
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Home
