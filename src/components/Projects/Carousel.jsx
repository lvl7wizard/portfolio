import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 831 },
    items: 1,
    slidesToSlide: 1,
  }
};

export const ProjectCarousel = () => {
  return (
    <Carousel responsive={responsive} showDots={false} infinite={true}> 
      {projects.map((project, id) => {
        return <ProjectCard key={id} project={project}/>
      })}
    </Carousel>
  );
};
