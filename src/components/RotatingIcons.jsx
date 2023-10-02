import img1 from '../assets/About/icon1.png';
import img2 from '../assets/About/icon2.png';
import img3 from '../assets/About/icon3.png';
import img4 from '../assets/About/icon4.jpg';
import img5 from '../assets/About/icon5.png';
import img6 from '../assets/About/icon6.png';
import img7 from '../assets/About/icon7.png';
import img8 from '../assets/About/icon8.jpg';
import img9 from '../assets/About/icon9.png';
import img10 from '../assets/About/icon10.png';
import img11 from '../assets/About/icon11.png';
import img12 from '../assets/About/icon12.jpeg';
import '../styles/RotatingIcons.css';

export default function RotatingIcons() {
    return (
        <>
        <div className="atomContainer">
            <span className="nucleus">Explore <span style={{color:'#ffb703'}}>Our Tools,</span> That We Use</span>
            <div className="orbit orbit1"></div>
            <div className="orbit orbit2"></div>
            
            <img src={img1} alt="electron-type1" className="electron electronType1" />
            <img src={img2} alt="electron-type2" className="electron electronType2" />
            <img src={img3} alt="electron-type3" className="electron electronType3" />
            <img src={img4} alt="electron-type4" className="electron electronType4" />
            <img src={img5} alt="electron-type5" className="electron electronType5" />
            <img src={img6} alt="electron-type6" className="electron electronType6" />
            <img src={img7} alt="electron-type7" className="electron electronType7" />
            <img src={img8} alt="electron-type8" className="electron electronType8" />
            <img src={img9} alt="electron-type9" className="electron electronType9" />
            <img src={img10} alt="electron-type10" className="electron electronType10" />
            <img src={img11} alt="electron-type11" className="electron electronType11" />
            <img src={img12} alt="electron-type12" className="electron electronType12" />
        </div>
        </>
    );
}
