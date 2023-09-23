import { useEffect, useRef } from 'react';
import '../styles/HomeMainIcon.css';
import AutoCAD from '../assets/Home/AutoCAD.png';
import Bim from '../assets/Home/Bim.jpg';
import Matter from '../assets/Home/matter.png';
import MB from '../assets/Home/MB.jpg';
import Naviswork from '../assets/Home/Naviswork.png';
import P6 from '../assets/Home/images.png';
import Plan from '../assets/Home/plan.png';
import Revit from '../assets/Home/revit.png';
import Xactimate from '../assets/Home/xactimate.png';

const images = [
    AutoCAD,
    Bim,
    Matter,
    MB,
    Naviswork,
    P6,
    Plan,
    Revit,
    Xactimate,
];

const HomeMainIcon = () => {
    const sliderRef = useRef(null);
    let animationFrameId;
    let position = 0;
    let lastTimestamp = null;

    const animate = (timestamp) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;

        position -= 0.05 * deltaTime;
        if (-position >= sliderRef.current.offsetWidth / 1) {
            position = 0;
        }
        sliderRef.current.style.transform = `translateX(${position}px)`;

        lastTimestamp = timestamp;
        animationFrameId = requestAnimationFrame(animate);
    };

    useEffect(() => {
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="hmicon-slider-container">
            <h2 className="hmicon-header">Our Popular <span style={{color:'#ffb703'}}>Softwares</span></h2>
            <div ref={sliderRef} className="hmicon-slides">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index}`} className="hmicon-slide" />
                ))}
                {/* Duplicating images for a continuous effect */}
                {images.map((img, index) => (
                    <img key={index + images.length} src={img} alt={`Slide ${index}`} className="hmicon-slide" />
                ))}
            </div>
        </div>
    );
}

export default HomeMainIcon;