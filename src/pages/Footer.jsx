import '../styles/Footer.css';
// import Logo from '../assets/Home/Constructify.png';
import Logo from '../assets/About/Logo_2.png';
import Matter from '../assets/About/matterport1.png';

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
                    <h2 className="footer-section-title">Our Services</h2>
                    <ul className="footer-services-list">
                        <li className="footer-service-item">Service 1</li>
                        <li className="footer-service-item">Service 2</li>
                        <li className="footer-service-item">Service 3</li>
                        <li className="footer-service-item">Service 4</li>
                        <li className="footer-service-item">Service 5</li>
                        <li className="footer-service-item">Service 6</li>
                        <li className="footer-service-item">Service 7</li>
                        <li className="footer-service-item">Service 8</li>
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
                    <p className="footer-contact">Email: your-email@example.com</p>
                    <p className="footer-contact">Address: 123 Street, City, Country</p>
                    <p className="footer-contact">Phone: +123-456-7890</p>
                    <h3 className="footer-newsletter-title">Newsletter</h3>
                    <input type="email" placeholder="Enter your email" className="footer-newsletter-input" />
                    <button className="footer-newsletter-btn">Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
