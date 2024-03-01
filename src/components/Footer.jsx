import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
          <div className="flex mt-4 gap-2">
            <p className="text-base text-yellow-500">Email: monboza@gmail.com</p>
          </div>
          <div className="flex mt-4 gap-2">
            <a className="text-base text-black" href="https://github.com/MonBoza/portfolio.git" target="_blank">GitHub Repo</a>
            </div>
        </div>

        <div className="col-span-3 md:text-right flex flex-col justify-center">
          <h2 className="text-xl font-semibold uppercase text-blue-600 mb-2">Follow Me:</h2>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://github.com/MonBoza" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/monboza" target="_blank" className="text-yellow-500 hover:text-yellow-400 rounded-full glow p-2">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;