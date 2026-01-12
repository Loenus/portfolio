import './App.css';
import Dock from "./components/Dock";
import Tooltip from "./components/Tooltip";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from './sections/Education';
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Menu from './components/Menu';

export default function App() {
  return (
    <>
      <Menu />
      <Dock />
      <Tooltip />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      education: università + certifications
      projects: youtube, telegram, proj github
      reviews? msg from youtube...
      <Contact />
      <Footer />

      ☰
      TODO: 1 aggiungere projects,
      2 sistemare il menu
      3 inserire i veri dati...
    </>
  )
}
