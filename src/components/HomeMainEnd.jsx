import { useState, useEffect } from "react";
import "../styles/HomeMainEnd.css";
import Boy from "../assets/Home/Boy.png";
const HomeMainEnd = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (firstNumber < 59) setFirstNumber((prev) => prev + 2);
      else clearInterval(interval1);
    }, 50);

    const interval2 = setInterval(() => {
      if (secondNumber < 400) setSecondNumber((prev) => prev + 10);
      else clearInterval(interval2);
    }, 50);

    const interval3 = setInterval(() => {
      if (thirdNumber < 650) setThirdNumber((prev) => prev + 20);
      else clearInterval(interval3);
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [firstNumber, secondNumber, thirdNumber]);

  return (
    <>
      <div className="homeMainEnd-container">
      <div className="homeMainEnd-container_wrapper">

        <div className="homeMainEnd-left">
          <h1 style={{borderBottom:'2px solid #ffb703'}}>
            What <span style={{ color: "#ffb703" }}>We Do:</span>
          </h1>
          <p>
            Step into the future of online property showcasing with our diverse
            array of services. We specialize in delivering captivating 3D
            virtual tours, breathtaking drone captures, and precise 3D
            visualizations. Each offering is meticulously crafted to provide a
            seamless and engaging user experience. Additionally, our immersive
            virtual staging sets a new standard in the industry. This unique
            approach ensures that potential buyers or viewers can visualize
            properties in their optimal state, thereby enhancing their
            connection and interest. Above all, our Digital Showroom is the
            crown jewel. Designed with state-of-the-art technology, it offers an
            unparalleled viewing experience. In today&apos;s competitive market,
            standing out is imperative. By choosing our services, you&apos;re not
            only elevating your online presence but also positioning yourself as
            a leader, distinct from the crowd.
          </p>
        </div>
        <div className="homeMainEnd-right">
          <img src={Boy} alt="Description" className="homeMainEnd-image" />
        </div>
        </div>
      </div>
      <div className="homeMainEnd-bottomLine"></div>
      <div className="homeMainEnd-numbers">
        <div style={{borderTop:'6px solid #ffb703'}}>
          <h2 className="homeMainEnd-headingNum">Visits</h2>
          <span className="homeMainEnd-headingNum_1">{firstNumber}<span style={{color:'#ffb703'}}>+</span></span>
        </div>
        <div style={{borderTop:'6px solid #ffb703'}}>
          <h2 className="homeMainEnd-headingNum">Tours</h2>
          <span className="homeMainEnd-headingNum_1">{secondNumber}<span style={{color:'#ffb703'}}>+</span></span>
        </div>
        <div style={{borderTop:'6px solid #ffb703'}}>
          <h2 className="homeMainEnd-headingNum">Impressions</h2>
          <span className="homeMainEnd-headingNum_1">{thirdNumber}<span style={{color:'#ffb703'}}>+</span></span>
        </div>
      </div>
    </>
  );
};

export default HomeMainEnd;
