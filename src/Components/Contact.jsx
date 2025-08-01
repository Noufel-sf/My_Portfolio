import React from 'react'
// Adjust the import paths and names as per your project structure
import Github from '../Assets/github.png'
import Linkedin from '../Assets/linkedin.png'
import { useTheme } from '../contexts/ThemeContext'

function Contact() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="p-6">
        <div id='Contact' className={`flex mx-auto items-center flex-col gap-12 my-40 w-full lg:w-[80%] p-12 ${isDarkMode ? 'bg-[#0D0C0C] text-white' : 'bg-gray-50 text-black'} app-impact-font rounded-lg`}>
            <h1 className='text-6xl capitalize tracking-[3px]' data-aos="fade-up">contact me </h1>
            <div className="flex items-center gap-12">
              <a href="https://www.linkedin.com/in/noufel-seif-el-islam-nasri/">
                <img src={Linkedin} alt="" className='w-[60px]' />
              </a>
              <a href="https://github.com/Noufel-sf">
                <img src={Github} alt="" className='w-[60px]' />
              </a>  
            </div>
            <h2 className='lg:text-3xl tracking-[1px]'>noufel_seif_el_islam.nasri@univ-constantine2.dz</h2>

            <h2 className='text-xl'>+213 796 52 88 94</h2>
            <h3 className='text-3xl capitalize '>algeria (mila)</h3>
        </div>
          <p className="text-gray-500 ml-4">&lt;/body&gt;</p>
        <p className="text-gray-500 text-3xl">&lt;/html&gt;</p>
   </div> 
  )
}

export default Contact;