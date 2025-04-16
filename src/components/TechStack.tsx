import { techStack } from '../constants/TechStack';

function TechStack() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-white font-semibold text-2xl">
        <p>TECH STACK</p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-10  ">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col bg-gray-900  items-center p-4 w-36 rounded-lg  shadow-md transition-transform hover:scale-105"
            >
              <Icon className="text-4xl" style={{ color: tech.color }} />
              <p className="mt-2 text-sm font-semibold text-white">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
