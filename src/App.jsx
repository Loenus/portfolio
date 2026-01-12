import './App.css';
import Dock from "./components/Dock";
import Tooltip from "./components/Tooltip";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from './sections/Education';
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Dock />
      <Tooltip />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      education: università + certifications
      projects: youtube, telegram, proj github
      reviews? msg from youtube...
      <Contact />
      <Footer />
    </>
  )
}
