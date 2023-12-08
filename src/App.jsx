import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home-section">
        <Home />
      </Element>

      <Element name="about-section">
        <About />
      </Element>

      <Element name="expertise-section">
        <Expertise />
      </Element>
      <Element name="team-section">
        <OurTeam />
      </Element>
      <Element name="contact-section">
        <Contact />
      </Element>
      
      <Footer />
    </>
  );
}

export default App;
