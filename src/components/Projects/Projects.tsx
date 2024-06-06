import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <section className="flex flex-col min-h-screen mx-auto p-4 max-w-4xl items-center justify-center text-center content-center text-md text-white gap-5 md:gap-10" id={"projects"}>
      <h2 className="text-7xl mt-5 md:mt-20 md:text-8xl font-bold text-blue-400 text-shadow-3d-blue">Projects</h2>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}/>
        })}
        <a href="#">
          <button
            type="button"
            className="text-white bg-gradient-to-r mt-5 from-yellow-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg px-6 py-3 text-center mb-8"
          >
            To the top ↑
          </button>
        </a>
    </section>
  );
};
