import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <p className={styles.scrollable}>
        I picked up coding as a hobby in 2020. I love the combination of making
        things 🎨, problem solving 🕹️, and learning 💡. <br />
        <br />
        After facing a redunancy in October 2023, I took the opportunity to take
        coding to take my hobby to the next level by enrolling for a 3-month full-time Software
        Engineering bootcamp with a highly-rated organisation called
        Northcoders. <br />
        <br />
        This course helped me consolidate the fundamentals of frontend and
        backend web development and granted me hands on experience with popular
        industry practices and techniques. <br />
        <br />
        I'm now looking for a professional role where I can utilise my skills and continue
        learning.
      </p>
      <div className={styles.btnContainer}>
        <a href="#projects" className={styles.projectsBtn}>
          Projects ↓
        </a>
        <a href="#skills" className={styles.skillsBtn}>
          Skills ↓
        </a>
      </div>
    </section>
  );
};
