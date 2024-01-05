import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import profile from '../assets/profile.jpeg';
const Banner = () => {
  return (
    <div className="lg: px-56 px-10 lg:py-0 py020 text-center gap-5 lg-text-start- flex lg:flex0row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-gull lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52] font-semibold mb-8 leading-normal">Welcome To <span className="text-fuchsia-500">My Portfolio</span></h1>
        <p>Stuff and things or whatever Developer stuff Cool Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod cumque inventore delectus! Optio qui, odio quibusdam quam obcaecati minus officia modi perspiciatis quia minima eligendi fugiat ipsam repellat esse!</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
            
            </div>
          </div>
        </div>
      </div>
      <img src={profile} alt="picture of me on a swing" width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" />
    </div>
  )
}
export default Banner;
