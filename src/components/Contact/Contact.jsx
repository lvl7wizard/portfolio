import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        {/* <p>Feel free to reach out!</p> */}
      </div>
      <ul className={styles.links}>
        <li>
          <a href="mailto:dave.j.judge@gmail.com" target="_blank" className={styles.link}>
            {" "}
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dave-judge-ba9a37247" target="_blank"
            className={styles.link}
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
          <a href="https://www.github.com/lvl7wizard" target="_blank" className={styles.link}>
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
