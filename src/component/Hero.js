import React from 'react'
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid';
import bgimg from '../assets/images/pexels-mart-production.jpg'

const Hero = () => {
  return (
    <div namee='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid grid md:grid-cols-2 max-w-[1240px] m-auto'>

          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl  mb-4'>Unique sequencing & production</p>
            <h1 className='text-5xl md:text-7xl font-bold'>Cloud management</h1>
            <p className='text-2xl'>This is our brand</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
          </div>

          <div>
            <img className='w-full border-radius-2' src={bgimg} alt='' />
          </div>

          <div className='absolute flex flex-col py-4 px-2 md:min-w[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
            <p className='font-bold text-3xl '>data services</p>

            <div className='flex justify-between flex-wrap px-4'>
              <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'/>Icon, app security</p>
              <p className='flex px-4 py-2 text-slate-500' px-4 py-2><DatabaseIcon className='h-6 text-indigo-600' t/> Icon, Dashboard design</p>
              <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600'/>Icon, cloud data</p>
              <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/>Icon, Api</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Hero