import React from "react";
import profile from '../assets/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from "./Resume";


const About = () => {
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
  });
  return (

    <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={profile} alt="picture of me on a swing" width={200} height={200} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" />
      <div data-aos="fade-right" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-up" className="text-5xl font-semibold mb-8 leading-normal text-blue-500 uppercase">About ME</h1>
        <p data-aos="fade-left">Stuff and things or whatever Developer stuff Cool Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod cumque inventore delectus! Optio qui, odio quibusdam quam obcaecati minus officia modi perspiciatis quia minima eligendi fugiat ipsam repellat esse!</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button href='' className="neno-button shadow-xl hover:shadow-blue800/50 text-white border-2 hover:bg-fuchsia-800 border-blue-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                Resume</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default About;