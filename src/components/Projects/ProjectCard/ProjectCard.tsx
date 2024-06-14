import { getImageUrl } from "../../../utils";

interface ProjectCardProps {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source: string;
  };
}

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source }
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-5xl font-bold text-white text-shadow-3d-white p-10 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl">
        <a href={demo} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <img
            src={getImageUrl(imageSrc)}
            alt={`image of ${title}`}
            className="w-full rounded-md max-w-lg"
          />
        </a>
        <div className="flex flex-col justify-center p-4">
          <h3 className="text-lg font-semibold">Description:</h3>
          <p className="text-md mt-2">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl mt-2">
        <div>
          <h3 className="text-lg font-semibold">Links:</h3>
          <div className="flex gap-4 justify-center mt-2">
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transform motion-safe:hover:scale-110"
              >
                Demo
              </button>
            </a>
            <a href={source} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-orange-400 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transform motion-safe:hover:scale-110"
              >
                Source
              </button>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-2 mt-2 justify-center">
            {skills.map((skill, id) => (
              <li key={id} className="bg-blue-700 rounded-full px-3 py-1 text-sm transform motion-safe:hover:scale-110">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};