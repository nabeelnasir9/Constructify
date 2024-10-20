import '../styles/Footer.css';
// import Logo from '../assets/Home/Constructify.png';
import Logo from '../assets/About/Logo_2.png';
import Matter from '../assets/About/matterport1.png';
import { GoDotFill } from "react-icons/go";


const Footer = () => {
    return (
        <footer className="reveal-footer">
            <div className="footer-container">
                <div className="footer-logo-section">
                    <img src={Logo} alt="Logo" className="footer-logo-img" />
                    <img src={Matter} alt="Logo" className="footer-description" />

                    {/* <p className="footer-description">Description about your website...</p> */}
                </div>

                <div className="footer-services-section">
                    <h2 className="footer-section-title"> <span></span>Our Services</h2>
                    <ul className="footer-services-list">
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>Matterport 3D Tour</li>
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>360 Virtual Tour</li>
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>Virtual Staging (CGI)</li>
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>3D Rendering - 360 Tour</li>
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>Video Tours</li>
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>Property Websites</li>
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>Virtual Walk-through CGI</li>
                        <li className="footer-service-item"><span style={{marginRight:'5px'}}><GoDotFill color='#ffb703'/></span>Commercial Photography</li>
                    </ul>
                </div>

                <div className="footer-support-section">
                    <h2 className="footer-section-title">Support</h2>
                    <ul className="footer-support-list">
                        <li className="footer-support-item">Help</li>
                        <li className="footer-support-item">Terms of Service</li>
                        <li className="footer-support-item">Legal</li>
                        <li className="footer-support-item">Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-reachus-section">
                    <h2 className="footer-section-title">Reach Us</h2>
                    <p className="footer-contact">Email: constructifeye@gmail.com</p>
                    <p className="footer-contact">Address: Winnipeg,Canada</p>
                    <p className="footer-contact">Phone: +92 320 2367 367</p>
                    <p className="footer-contact">Support: +92 318 4111 969</p>

                    <h3 className="footer-newsletter-title">Newsletter</h3>
                    <input type="email" placeholder="Enter your email" className="footer-newsletter-input" />
                    <button className="footer-newsletter-btn">Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
