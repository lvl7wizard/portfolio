import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h3 className={styles.title}>{title}</h3>
        <a href={demo}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`image of ${title}`}
          className={styles.image}
        />
        </a>
      </div>
      <div className={styles.rightColumn}>
        <h3>Description: </h3>
        <p className={styles.description}>{description}</p>
        <h3>Tech Stack: </h3>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <h3>Links:</h3>
        <div className={styles.links}>
          <a href={demo} className={styles.link}>
            Demo
          </a>
          <a href={source} className={styles.link}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
