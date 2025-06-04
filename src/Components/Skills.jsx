import React from 'react'
import FrontTech from './FrontTech'







function Skills() {

    return (

   <div id='Skills' className="">    
            <FrontTech />
        <div className='flex items-center gap-12 flex-col p-12'>
        <h1 className='capitalize text-5xl  lg:text-6xl tracking-[3px]'>my skills</h1>

        <div className="flex items-center justify-around gap-12 flex-wrap w-full">
                <div className="flex items-center gap-8 flex-col" data-aos="fade-up">
                    <h2 className='text-3xl lg:text-5xl capitalize tracking-[3px]'>soft skills</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='capitalize  text-2xl'>leader ship</li>
                        <li className='capitalize  text-2xl'>team work</li>
                        <li className='capitalize  text-2xl'>communication</li>
                    </ul>
                </div>
                <div className="flex items-center gap-8 flex-col" data-aos="fade-up">
                    <h2 className=' text-3xl lg:text-5xl capitalize tracking-[3px]'>project managment</h2>
                    <ul className='flex flex-col gap-4'>
                    <li className='capitalize  text-2xl'>jira (agile)</li>
                    <li className='capitalize  text-2xl'>git hub</li>
                    <li className='capitalize  text-2xl'>notion</li>
                    </ul>
                </div>
                    <div className="flex items-center gap-8 flex-col" data-aos="fade-up">
                    <h2 className='text-3xl lg:text-5xl capitalize tracking-[3px]'>development tools</h2>
                    <ul className='flex flex-col gap-4'>
                    <li className='capitalize  text-2xl'>vs code</li>
                    <li className='capitalize  text-2xl'>linux</li>
                    <li className='capitalize  text-2xl'>cursor</li>
                    </ul>
                </div>
        </div> 
        </div>
    </div>
  )
}

export default Skills