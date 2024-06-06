import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className="flex flex-col min-h-screen mx-auto max-w-xl p-4 items-center justify-center text-center content-center text-md text-white gap-5 md:gap-10" id="skills">
      <h2 className="text-8xl font-bold text-blue-400 text-shadow-3d-blue">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="flex flex-col items-center transform motion-safe:hover:scale-110">
                  <img src={getImageUrl(skill.imageSrc)} className="h-16 w-16"  alt={skill.title} />
                <p>{skill.title}</p>
              </div>
            );
          })}
      </div>
      <a href="#projects">
      <button type="button" className="text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 transform motion-safe:hover:scale-110">Projects ↓</button>
      </a>
    </section>
  );
};
