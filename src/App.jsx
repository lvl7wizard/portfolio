import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import { useState } from "react";
import LoadingScreen from "./components/Loading/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
    <ParticleBackground isLoading={isLoading} setIsLoading={setIsLoading}/>
    {isLoading ? <LoadingScreen/>:
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </div> }
    </div>
  );
}

export default App;