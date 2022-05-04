import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className='w-screen h=[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h2 className='flex items-center font-bold mr-2 sm:text-3xl'>
            Brand
          </h2>
          <ul className='hidden md:flex '>
            <li>
              <Link to='home' smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to='support' smooth={true} offset={50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to='platform' smooth={true} offset={50} duration={500}>
                platform
              </Link>
            </li>
            <li> <Link to='pricing' smooth={true} offset={50} duration={500}>
                Pricing
              </Link></li>
          </ul>
        </div>

        <div className='hidden md:flex pr-6'>
          <button className='border-none bg-transparent text-black mr-6'>
            Sign In
          </button>
          <button className='px-5 py-2'>Sign up</button>
        </div>

        {/*hamburger*/}
        <div className='md:hidden mr-4 bg:text-slate-600' onClick={handleNav}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'> About</li>
        <li className='border-b-2 border-zinc-300 w-full'>support</li>
        <li className='border-b-2 border-zinc-300 w-full'>platform</li>
        <li className='border-b-2 border-zinc-300 w-full'>pricing</li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8  py-3 mb-4'>
            sign in
          </button>
          <button className='px-8 py-3'>sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
