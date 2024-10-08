import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const About = () => {
  return (
    <>
    <div className='w-full h-screen m-0 p-0 box-border flex flex-col align-middle justify-center'>
      <Navbar />
      <div className="w-full h-5/6 flex justify-center align-middle px-5 py-20">
        <div className=" w-5/6 px-8 py-20 flex justify-center bg-gray-800 rounded-lg">
          <div className="w-full flex flex-col justify-center align-middle px-5 py-10 mx-5">
            <h3 className=' text-4xl text-orange-400'>About Me</h3>
            <p className='font-semibold text-2xl text-gray-400 px-10 py-5'>As a web development student at Chameli Devi Institute, I'm driven by a deep passion for front-end design. Committed to creating immersive digital experiences, I eagerly embrace evolving design trends and technologies. With a keen eye for detail and a creative mindset, I'm poised to contribute innovative solutions and embark on a fulfilling career in front-end development.</p>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default About