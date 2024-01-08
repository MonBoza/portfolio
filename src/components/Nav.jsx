import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'



const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-700 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="/Home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
        </Link >
        <Link spy={true} smooth={true} to="/About">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
        </Link >
        <Link spy={true} smooth={true} to="/Projects">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
        </Link >
        <Link spy={true} smooth={true} to="/ContactMe">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact Me</li>
        </Link >
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-n border-slate-800 ">
        <div className="lg:flex md:flex lg: flex-q items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link onClick={handleClick} spy={true} smooth={true} to="Home">
                <li className="hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer">Home</li>
              </Link >
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer">About</li>
              </Link >
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer">Projects</li>
              </Link >
              <Link spy={true} smooth={true} to="ContactMe">
                <li className="hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer">Contact Me</li>
              </Link >
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
      
    </nav>
  )
}
export default Nav;