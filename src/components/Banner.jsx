import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profile from '../assets/profile1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-scroll";

import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    });
  }, []);

  return (
    <div data-aos="fade-up" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        
        <h1 data-aos="fade-right" className="text-5xl text-blue-500 font-semibold mb-8 leading-normal uppercase">Monica Barboza</h1>
        <p> A Junior Fullstack Developer coding my way through bugs and building a brighter tomorrow, one line of code at a time!</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="https://github.com/MonBoza" target="_blank"className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/monboza" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <img data-aos="zoom-in-up"src={profile} alt="picture of me on a swing" width={200} height={200} className="rounded border-2 p-1 border-fuchsia-500 img_glow" />
    </div>
  );
}

export default Banner;