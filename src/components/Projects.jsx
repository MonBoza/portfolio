import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'

const projectsData = [
  { img: img1, repoLink: 'https://github.com/MonBoza/parkerspizza' },
  { img: img2, repoLink: 'https://github.com/MonBoza/roboger' },
  { img: img3, repoLink: 'https://github.com/MonBoza/currency-exchange'},
  { img: img4, repoLink: 'https://github.com/MonBoza/ice-cream-shop-Redux' },
  {img: img5, repoLink: 'https://github.com/kimmykokonut/sound-check.git'},
  {img: img6, repoLink: 'https://github.com/MonBoza/Astrology.git'},
  {img: img7, repoLink: 'https://github.com/MonBoza/VendorTracker.Solution.git'},
  {img: img8, repoLink: 'https://github.com/MonBoza/HairSalon.Solution.git'}
];

const Projects = () => {
  return (
    <div data-aos="fade-right" id='Projects' className="p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple-800">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        {projectsData.map((project, index) => (
          <a key={index} href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <img
              height={350}
              width={250}
              src={project.img}
              alt={`Project ${index + 1}`}
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
              className="text-[26px] flex items-center justify-center font-semibold text-purple-500 rounded-3xl h-36 w-44 border-2 border-blue-500 b_glow gap-10"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;