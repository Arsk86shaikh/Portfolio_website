import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import MenuSection from './Components/MenuSection';
// import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import VisitUs from './Components/VisitUs';
import MenuPage from "./Menusection/page";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <Gallery />
            <MenuSection />
            {/* <ContactSection /> */}
            <VisitUs />
          </>
        } />
        <Route path="/menusection" element={<MenuPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
