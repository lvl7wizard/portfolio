import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import LoadingScreen from "./components/Loading/LoadingScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects} from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { useState } from "react";

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