import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className="text-white flex flex-col items-center m-5 gap-3">
      <div className="">
        <h2 className="text-4xl">Contact</h2>
      </div>
      <ul className="flex gap-5">
        <li>
          <a href="mailto:dave.j.judge@gmail.com" target="_blank">
            {" "}
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className="transform motion-safe:hover:scale-110"/>
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dave-judge-ba9a37247" target="_blank"
          >
            {" "}
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
              className="transform motion-safe:hover:scale-110"
            />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.github.com/lvl7wizard" target="_blank">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
              className="transform motion-safe:hover:scale-110"
            />{" "}
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
