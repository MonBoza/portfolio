import React from "react";
import profile from '../assets/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResumePDF from "../assets/Resume.pdf";
import { useState } from "react";

const About = () => {
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={profile} alt="picture of me on a swing" width={200} height={200} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" />
      <div data-aos="fade-right" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-up" className="text-5xl font-semibold mb-8 leading-normal text-blue-500 uppercase">About ME</h1>
        <p data-aos="fade-left">
          In the hospitality industry, I developed strong troubleshooting and interpersonal skills. Now, during a career change, I'm upskilling in React, JavaScript, and C# through Epicodus. Immersed in dynamic technologies and collaborative development, I aim to contribute to innovative projects and make a meaningful impact. My passion lies at the intersection of client relations and technology, forming the foundation for my evolving career path. Excited about future opportunities, I bring a unique blend of hospitality experience and technical expertise to my endeavors.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button onClick={handleOpenModal} className="neno-button shadow-xl hover:shadow-blue800/50 text-white border-2 hover:bg-fuchsia-800 border-blue-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              Close
            </button>
            <iframe src={ResumePDF} title="Resume" className="w-full h-full" />
            <a href={ResumePDF} download="Monica_Barboza_Resume.pdf" className="block text-center mt-4 text-blue-500 hover:underline">
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;