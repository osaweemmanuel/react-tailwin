import React from "react";
import { FaFacebook,FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-slate-300 mt-24 py-8 px-4'>
      <div className='max-w-[1240px] grid-cols-2 mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div className=''>
          <h6 className='font-bold uppercase pt-2'>Solution</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytic</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase pt-2'>Support</h6>
          <ul>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Guides</li>
            <li className='py-1'>Api status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>Press</li>
            <li className='py-1'>Partners</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Polices</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 pt-2 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsLetter</p>
          <p className='py-4'>
            The latest news,articles and resources,send to your inbox weekly
          </p>
          <form className='flex flex-col sm:flex-row' action=''>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder="Enter Email" />
            <button className='p-2 mb-4 '>Submit</button>
          </form>
        </div>
      </div>
      <div className='flex max-w-[1240px] mx-auto justify-between sm:flex-row text-center px-2 py-8 text-gray-500 '>
        <p>&copy;2022 workflow,LLC,All right reserved</p>
        <div className='flex justify-between items-center sm:w-[300px] mx-auto pt-4 text-2xl'>
          <FaFacebook className='mr-5' />
          <FaInstagram className='mr-5' />
          <FaGithub className='mr-5' />
          <FaTwitter className='mr-5' />
          <FaTwitch className='mr-5' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
