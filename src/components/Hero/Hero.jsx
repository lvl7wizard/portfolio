import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,</h1>
        <p className={styles.description}>
          I'm Dave, a Junior Software
          Developer based in Sheffield, UK. Welcome to my portfolio, here you can find information about
          me, my skills, and my latest projects.
        </p>
        <a href="#about" className={styles.contactBtn}>
          About⬇︎</a>
      </div>
    </section>
  );
};
