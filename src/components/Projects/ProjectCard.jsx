import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="p-6 flex flex-col items-center lg:items-start lg:flex-row lg:flex-wrap lg:justify-center">
      <h3 className="text-6xl font-bold text-white text-shadow-3d-white p-10 w-full lg:text-center">
        {title}
      </h3>
      <div className="lg:w-1/2 lg:pr-6">
        <a href={demo}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`image of ${title}`}
            className="h-auto rounded-md w-full max-w-screen-sm"
          />
        </a>
      </div>
      <div className="mt-4 lg:w-1/2 lg:pl-6 lg: self-center">
        <h3 className="text-lg font-semibold mb-2">Description:</h3>
        <p className="text-sm mb-4">{description}</p>
      </div>
      <div className="mt-4 lg:w-1/2 lg:pr-6">
        <h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
        <ul className="flex flex-wrap gap-2 mb-4 justify-center">
          {skills.map((skill, id) => (
            <li key={id} className="bg-blue-700 rounded-full px-3 py-1 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 lg:w-1/2 lg:pl-6">
        <h3 className="text-lg font-semibold mb-2">Links:</h3>
        <div className="flex gap-4 justify-center">
          <a href={demo} className="bg-red-600 rounded-full px-3 py-1 text-sm hover:underline">
            Demo
          </a>
          <a href={source} className="bg-red-600 rounded-full px-3 py-1 text-sm hover:underline">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};