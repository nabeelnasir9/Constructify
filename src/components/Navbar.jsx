import { useState } from "react";
import Logo from '../assets/Home/Constructify.png';
import '../styles/Navbar.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <img src={Logo} alt="Logo" className="navbar-logo" />
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <a href="#home" className="navbar-item">Home</a>
                <a href="#about" className="navbar-item">About</a>
                <a href="#expertise" className="navbar-item">Expertise</a>
                <a href="#contact" className="navbar-item">Contact</a>
                <button className="quote-button">Get a Quote</button>
            </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar