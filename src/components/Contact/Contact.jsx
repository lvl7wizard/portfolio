import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className="text-white flex flex-col items-center m-5 gap-3">
      <div className="">
        <h2 className="text-4xl">Contact</h2>
      </div>
      <ul className="flex gap-5">
        <li>
          <a href="mailto:dave.j.judge@gmail.com" target="_blank" className="">
            {" "}
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dave-judge-ba9a37247" target="_blank"
            className=""
          >
            {" "}
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.github.com/lvl7wizard" target="_blank" className="">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
            />{" "}
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
