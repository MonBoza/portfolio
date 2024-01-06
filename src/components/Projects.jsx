// import imagines for projects


const Projects = () => {
  return (
    <div data-aos="fade-right" id='Projects' className="p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple-800">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <img height={350} width={250} src="" alt="" data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-3xl h-36 w-44 border-2 border-blue-500 b_glow" />
        <img height={350} width={250} src="" alt="" data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-3xl h-36 w-44 border-2 border-blue-500 b_glow gap-10" />
        <img height={350} width={250} src="" alt="" data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-3xl h-36 w-44 border-2 border-blue-500 b_glow gap-10" />
        <img height={350} width={250} src="" alt="" data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-3xl h-36 w-44 border-2 border-blue-500 b_glow gap-10" />
      </div>
    </div>
  );
};

export default Projects;