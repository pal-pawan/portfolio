import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const Skills = () => {
  return (
    <>
    <div className='w-full h-screen m-0 p-0 box-border flex flex-col align-middle justify-center'>
      <Navbar />
      <div className="w-full h-5/6 flex justify-center align-middle px-5 py-20">
        <div className=" w-5/6 h-full px-8 py-5 flex justify-center bg-gray-800 rounded-lg">
          <div className="w-full h-full flex flex-col justify-center align-middle px-5 py-20 mx-5 flex-wrap">
            <h3 className=' text-4xl text-orange-400'>My Skills</h3>
            <div className='px-5 py-9'>
              <ul className='flex justify-center align-middle font-thin text-7xl gap-10 flex-wrap'>
                <li className=' outline-white text-gray-400 outline transition-all duration-300 p-8 text-center hover:outline-orange-300 hover:outline-4 rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:text-yellow-300'><i class="ri-reactjs-line"></i>
                    <p className='text-lg font-medium text-center font-mono '>ReactJs</p>
                </li>
                <li className=' outline-white text-gray-400 outline transition-all duration-300 p-8 text-center hover:outline-orange-300 hover:outline-4 rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:text-yellow-300'><i class="ri-html5-line"></i>
                    <p className='text-lg font-medium text-center font-mono '>HTML5</p>
                </li>
                <li className=' outline-white text-gray-400 outline transition-all duration-300 p-8 text-center hover:outline-orange-300 hover:outline-4 rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:text-yellow-300'><i class="ri-javascript-line"></i>
                    <p className='text-lg font-medium text-center font-mono '>JavaScript</p>
                </li>
                <li className=' outline-white text-gray-400 outline transition-all duration-300 p-8 text-center hover:outline-orange-300 hover:outline-4 rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:text-yellow-300'><i class="ri-css3-line"></i>
                    <p className='text-lg font-medium text-center font-mono '>CSS3</p>
                </li>
                <li className=' outline-white text-gray-400 outline transition-all duration-300 p-8 text-center hover:outline-orange-300 hover:outline-4 rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:text-yellow-300'><i class="ri-github-line"></i>
                    <p className='text-lg font-medium text-center font-mono '>GitHub</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Skills