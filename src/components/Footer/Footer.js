import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <>
    <footer className="flex justify-center align-middle pb-2 px-1 w-full bg-slate-200">
        <div className="w-full flex justify-between px-20 align-middle">
                        <ul className="text-gray-900 flex justify-between gap-20 align-middle px-2 py-2 text-2xl font-medium">
                            <li>
                                <a href="https://www.linkedin.com/in/pawanpaldev/" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-box-line" aria-label='LinkedIn Logo'></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/pawan_pal_ind/" target="_blank" rel="noopener noreferrer"><i class="ri-instagram-line" aria-label='Insta Logo'></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/pal-pawan" target="_blank" rel="noopener noreferrer"><i class="ri-github-line" aria-label='gitHubLogo'></i></a>
                            </li>
                        </ul>
                        <p className='text-gray-900 font-medium flex justify-between align-middle px-2 py-2 text-xl'>pawanpal2001@gmail.com</p>
 </div>
    </footer>
    </>
  )
}

export default Footer