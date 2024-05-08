import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css"
import { ProjectCarousel } from "./Carousel";
import { useState, useEffect } from "react";

export const Projects = () => {
  // Carousel media query applied within this component as ProjectCarousel has built in styling which causes issues with CSS conditional rendering
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 831);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 831);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.container} id={"projects"}>
      <div>
      <h2 className={styles.title}>Projects</h2>
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}/>
        })}
      </div>
      {isLargeScreen && <ProjectCarousel className={styles.carousel}/>}
      <div className={styles.btnContainer}>
        <a href="#" className={styles.toTheTopBtn}>
          To the top ↑
        </a>
        </div>
    </section>
  );
};
