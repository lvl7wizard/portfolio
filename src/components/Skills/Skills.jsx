import styles from "./Skills.module.css"
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
        <div className={styles.btnContainer}>
        <a href="#projects" className={styles.projectsBtn}>
          Projects ↓
        </a>
        </div>
    </section>
  );
};
