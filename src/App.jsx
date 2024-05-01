import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import { useState } from "react";
import LoadingScreen from "./components/Loading/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.App}>
    <ParticleBackground className = {styles.background} isLoading={isLoading} setIsLoading={setIsLoading}/>
    {isLoading ? <LoadingScreen/>:
    <div className={styles.content}>
      <Navbar />
      <Hero />
      <div className={styles.aboutSkillsContainer}>
      <About />
      <Skills/>
      </div>
      <Projects />
      <Contact />
    </div> }
    </div>
  );
}

export default App;