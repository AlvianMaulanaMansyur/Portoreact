import { projects } from '../constants/Projects';
import { techStack } from '../constants/TechStack';

const ProjectSection = () => {
  return (
    <section className="py-20 lg:py-10 px-5 text-white" id='projects'>
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 rounded-lg shadow-md overflow-hidden ">
            <img src={project.image} loading='lazy' alt={project.name} className="w-full h-auto object-cover rounded-4xl p-5" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-300  mt-2 text-justify">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((techName, idx) => {
                  const tech = techStack.find((t) => t.name === techName);
                  return (
                    <span key={idx} className="flex items-center px-3 py-1 bg-gray-900 rounded-lg text-sm font-medium text-blue-700  " >
                      {tech?.icon && <i className={`${tech.icon}`} />} {techName}
                    </span>
                  );
                })}
              </div>

              <div className="flex  gap-4 mt-3 items-center  justify-end">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-3 py-1 text-md font-semibold rounded-lg hover:bg-gray-300 hover:text-gray-700 transition">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="border-2 border-purple-500 text-purple-500  px-4 py-1 text-md font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
