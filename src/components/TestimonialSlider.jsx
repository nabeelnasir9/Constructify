// TestimonialSlider.jsx
import { useState, useEffect} from 'react';
import '../styles/TestimonialSlider.css';
import Image_1 from '../assets/About/Image_1.png';
import Image_2 from '../assets/About/Image_2.png';
import Image_3 from '../assets/About/Image_3.png';



const testimonials = [
    { 
        name: 'Farhan Aslam', 
        message: 'From the onset, the Constructify team exhibited impeccable management skills. Their seamless communication and coordination made our collaboration effortless and productive. Kudos to a team that genuinely understands the essence of great work!',
        imageUrl: Image_1
    },
    {
        name: 'Faheem Aslam',
        message: 'Constructify management and team have impressed me beyond measure. Their attention to detail and unwavering commitment to our project ensured its success. In a field where teamwork is paramount, their team demonstrated excellence every step of the way.',
        imageUrl: Image_2
    },
    {
        name: 'Amir Saeed',
        message: 'Constructify 3D scanning and estimation services are truly top-notch. The precision and clarity of the scans saved us both time and resources. Their accurate estimations gave us the confidence to proceed with our project. They are definitely leading the way in innovative construction solutions.',
        imageUrl: Image_3
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationPhase, setAnimationPhase] = useState('fadeIn'); 

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationPhase('fadeOut');
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    const onAnimationEnd = () => {
        if (animationPhase === 'fadeOut') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setAnimationPhase('fadeIn');
        }
    };

    const handleNext = () => {
        setAnimationPhase('fadeOut');
    };

    const handlePrev = () => {
        setAnimationPhase('fadeOut');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="ts-slider-container" onAnimationEnd={onAnimationEnd}>
            <div className={`ts-content ${animationPhase}`}>
                <h2 className="ts-name">{testimonials[currentIndex].name}</h2>
                <p className="ts-message">{testimonials[currentIndex].message}</p>
                <div className="ts-pagination">
                    <button className="ts-prev-btn" onClick={handlePrev}>&lt;</button>
                    <button className="ts-next-btn" onClick={handleNext}>&gt;</button>
                </div>
            </div>
            <div className={`ts-image-container ${animationPhase}`}>
                <img className="ts-image" src={testimonials[currentIndex].imageUrl} alt={testimonials[currentIndex].name} />
            </div>
        </div>
    );
}


export default TestimonialSlider;
