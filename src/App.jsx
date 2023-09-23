import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Home/>
      <About/>
      <Expertise/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
