import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
        <p>
          I picked up coding as a hobby in 2020. I loved the combination of making things 🎨, problem solving 🕹️, and learning 💡.
        </p>
        <p>
          In October 2023, I took the opportunity to take my coding to the next level by enrolling for a 3-month full-time Software Engineering bootcamp with a top-rated organisation called Northcoders. 
        </p>
        <p>Throughout this course I learnt the fundamentals of frontend and backend web development and gained hands on experience with popular industry practices and techniques.</p>
        <p>
          I'm now looking for a proffesional role where I can utilise my skills and continue learning from more experienced people in the field.  
        </p>
        <p>
          When I'm not coding I like to play music 🥁, go hiking ⛰️, and grow plants 🌱.
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
