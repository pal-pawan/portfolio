import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between align-middle py-4 px-2 text-grey-300 font-bold w-full bg-slate-200">
    <div className="font-bold text-3xl align-middle px-3"><h1 className='bg-black text-white rounded-full shadow p-3 cursor-pointer hover:scale-110 hover:shadow-lg transition-all delay-300 hover:text-slate-900 hover:bg-yellow-50'>PP</h1></div>
    <div className=" flex justify-between gap-8 align-middle px-8 py-2">
        <Link href="/Home" className='text-gray-700 transition-all duration-300 no-underline font-medium text-lg hover:text-gray-900 hover:shadow-lg hover:-translate-y-1 rounded-lg px-3 py-1 '>Home</Link>
        <Link href="/About" className='text-gray-700 transition-all duration-300 no-underline font-medium text-lg hover:text-gray-900 hover:shadow-lg hover:-translate-y-1 rounded-lg px-3 py-1 '>About</Link>
        <Link href="/Skills" className='text-gray-700 transition-all duration-300 no-underline font-medium text-lg hover:text-gray-900 hover:shadow-lg hover:-translate-y-1 rounded-lg px-3 py-1 '>Skills</Link>
        <a href='resume.pdf' target='_blank' className='bg-slate-900 text-white text-middle shadow-md transition-all duration-300 rounded-lg px-3 py-2 font-medium text-lg hover:-translate-y-1 hover:shadow-lg'>Resume</a>
    </div>
    </nav>
    </>
  )
}

export default Navbar