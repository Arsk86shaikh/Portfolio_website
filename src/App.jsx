import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import SkillsAbilities from "./Components/Skills&Abilities";
import Education from "./Components/Eductions";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";




function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <SkillsAbilities />
            <Education />
            <Projects />
            <Certificates />
            <ContactSection />
          </>
        } />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
