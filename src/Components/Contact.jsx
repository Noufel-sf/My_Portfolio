import React from 'react'
// Adjust the import paths and names as per your project structure
import Github from '../Assets/github.png'
import Linkedin from '../Assets/linkedin.png'

function Contact() {
  return (
    <div className="p-22">
        <div id='Contact' className='flex mx-auto items-center flex-col gap-12 my-40 w-full lg:w-[80%] p-12 bg-[#0D0C0C] text-white app-impact-font rounded-lg'>
            <h1 className='text-6xl capitalize tracking-[3px]' data-aos="fade-up">contact me </h1>
            <div className="flex items-center gap-12">
              <a href="https://www.linkedin.com/in/noufel-seif-el-islam-nasri/">
                <img src={Linkedin} alt="" className='w-[60px]' />
              </a>
              <a href="https://github.com/Noufel-sf">
                <img src={Github} alt="" className='w-[60px]' />
              </a>  
            </div>
            <h2 className='lg:text-3xl text-2xl'>noufel_seif_el_islam.nasri@univ-constantine2.dz</h2>

            <h2 className='text-3xl'>+213 796 52 88 94</h2>
            <h3 className='text-3xl capitalize '>algeria (mila)</h3>
        </div>
          <p className="text-gray-500 ml-4">&lt;/body&gt;</p>
        <p className="text-gray-500 text-3xl">&lt;/html&gt;</p>
   </div> 
  )
}

export default Contact;