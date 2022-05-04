import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div  name='pricing' className='w-full my-24 text-white'>
      <div className='w-full h-[800px] bg-slate-900 mix-blend-overlay absolute'></div>
      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl my-4 uppercase '>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>
            The right price for your research
          </h3>
          <p className='text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            laboriosam commodi distinctio, ullam unde vitae quaerat sit incidunt
            amet omnis dolores debitis dignissimos facilis aut odio reiciendis
            at? Atque, aspernatur!
          </p>
        </div>

        <div className='grid md:grid-cols-2'>
          <div className='bg-white m-4 text-slate-900 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 font-bold py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>
              standard
            </span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>
                $49
                <span className='text-xl text-slate-500 flex flex-col justify-end'>
                  /mo
                </span>
              </p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>
              Lorem ipsum dolor sit.
            </p>
            <div className='text-2xl relative'>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <button className='w-full py-4 my-4'>Get started</button>
            </div>
          </div>

          <div className='bg-white m-4 text-slate-900 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 font-bold py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>
             premium
            </span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>
                $99
                <span className='text-xl text-slate-500 flex flex-col justify-end'>
                  /mo
                </span>
              </p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>
              Lorem ipsum dolor sit.
            </p>
            <div className='text-2xl relative'>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <p className='flex py-4'>
                <CheckIcon className='w-6 mr-5 text-white-900' />
                Lorem ipsum dolor sit.
              </p>
              <button className='w-full py-4 my-4'>Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

{
  /* <div className='w-full text-white my-32'>
      <div className='w-full h-[800px] bg-slate-900 mix-blend-overlay absolute'></div>

      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='text-slate-300'>
          <h3 className='text-4xl upper'>Pricing</h3>
          <h2 className='font-bold text-white text-5xl py-8'>
            The right price for your research
          </h2>
          <p className='text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem
            harum in illo quae perferendis dolores quidem, atque sed
            repudiandae.
          </p>
        </div>
        <div className='grid md:grid-cols-2 '>
          <div className=' bg-white text-indigo-600 m-4 p-8 rounded-xl shadow-2xl'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
              standard
            </span>

            <p>
              $49 <span>/mo</span>
            </p>
            <button>Get started</button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere
            fugiat nobis exercitationem dicta fugit doloremque dignissimos
            cumque illo est?
          </p>

          <div>
            <p>
              <CheckIcon className='w-7 mr-5 text-green-600' />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
              nulla.
            </p>
            <p>
              <CheckIcon className='w-7 mr-5 text-green-600' />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
              nulla.
            </p>
            <p>
              <CheckIcon className='w-7 mr-5 text-green-600' text-green-600 />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
              nulla.
            </p>
            <p>
              <CheckIcon className='w-7 mr-5 text-green-600' />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
              nulla.
            </p>
            <p>
              <CheckIcon className='w-7 mr-5 text-green-600' />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
              nulla.
            </p>
          </div>
        </div>
      </div> */
}
