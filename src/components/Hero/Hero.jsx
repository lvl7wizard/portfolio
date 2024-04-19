import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Dave Judge</h1>
        <p className={styles.description}>
          Hi, welcome to my portfolio. I'm Dave an aspiring Software
          Developer based in Sheffield, UK. Here you can find information about
          me, my learning journey, and the projects that I've developed along the way.
        </p>
        <a href="#about" className={styles.contactBtn}>
          About ↓
        </a>
      </div>
      <img
        src={getImageUrl("hero/bwavatar.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
