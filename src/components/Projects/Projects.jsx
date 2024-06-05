import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="flex flex-col min-h-screen mx-5vw items-center justify-center text-center content-center text-lg text-white gap-8" id={"projects"}>
      <h2 className="text-8xl font-bold text-blue-400 text-shadow-3d-blue">Projects</h2>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}/>
        })}
        <a href="#">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg px-6 py-3 text-center mb-8"
          >
            To the top ↑
          </button>
        </a>
    </section>
  );
};
