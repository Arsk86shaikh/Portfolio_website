import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
// import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import SkillsAbilities from "./Components/Skills&Abilities";
import Education from "./Components/Eductions";




function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <SkillsAbilities/>
           <Education/>
            {/* <ContactSection /> */}
          
          </>
        } />
      
      </Routes>
      <Footer />

    </>
  );
}

export default App;
