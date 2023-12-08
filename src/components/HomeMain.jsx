/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "../styles/HomeMain.css";
import Logo from "../assets/About/Logo_2.png";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image1 from "../assets/Expertise/image1.jpg";
import Image2 from "../assets/Expertise/Image2.jpg";
import Image3 from "../assets/Expertise/Image3.jpg";
import Image4 from "../assets/Expertise/Image4.png";
import Image5 from "../assets/Expertise/Image5.jpg";
import Image6 from "../assets/Expertise/Image6.png";
import Image7 from "../assets/Expertise/Image7.jpg";
import Image8 from "../assets/Expertise/Image8.jpeg";

const services = [
  { img: Image1, text: "Matter Port 3D Tour" },
  { img: Image2, text: "360° Virtual Tours" },
  { img: Image3, text: "Virtual Staging (CGI)" },
  { img: Image4, text: "3D rendering- 360° Virtual Tour" },
  { img: Image5, text: "Video Tours" },
  { img: Image6, text: "Property Websites" },
  { img: Image7, text: "Virtual Walk-Through (Realtime CGI)" },
  { img: Image8, text: "Commercial Photography" },

];

const tasks = ["Scheduling A Demo", "Pricing Information", "Scheduling A 3D Capture", "Speaking With A Constructifeye Specialist" , "A Partnership / Reseller Agreement", "Joining the Constructifeye Team" , "Others"];

const HomeMain = () => {
  const matterportURL =
    "https://my.matterport.com/show/?m=NiUQg1pist6&play=1&tour=3&ts=3&hl=0&pin=0";

  const [currentText, setCurrentText] = useState("Virtual World");
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    task: "",
    areaSize: "",
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const resetForm = () => {
    setFormData({
      service: "",
      task: "",
      areaSize: "",
      name: "",
      email: "",
      phone: "",
      location: "",
    });
    setFormStep(1);
  };

  const SERVICE_ID = "service_873k13g";
  const TEMPLATE_ID = "template_4sb5pwg";
  const USER_ID = "UAsngTjxzGxFPZM5M";

  const submitForm = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (response) => {
        toast.success("Email sent successfully!");
        resetForm(); // Reset the form
        setModalOpen(false); // Close the modal
      },
      (error) => {
        toast.error("Error sending email.");
      }
    );
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNextStep = () => {
    if (formStep < 8) setFormStep(formStep + 1);
    else submitForm(); // Once we're past the last step, submit the form
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="step-logo-container">
            <img src={Logo} alt="Company Logo" className="company-logo" />
            <p className="company-description">Schedule A Demo, Speak With A Constructifeye Specialist, or Schedule A 3D Capture We will reach out to you ASAP to assist</p>
            <p className="company-description_1">Form will take only few minutes of you.</p>

            <button className="next-button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="step-service-container">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                onClick={() => {
                  setFormData({ ...formData, service: service.text });
                  handleNextStep();
                }}
              >
                <img
                  src={service.img}
                  alt={service.text}
                  className="service-img"
                />
                <p className="para_service_text">{service.text}</p>
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="step-task-container">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="task-card"
                onClick={() => {
                  setFormData({ ...formData, task });
                  handleNextStep();
                }}
              >
                {task}
              </div>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="step-area-container">
            <label className="area-label">
              Size of the area:
              <input
                type="text"
                name="areaSize"
                className="area-input"
                onChange={handleInputChange}
                value={formData.areaSize} // Explicitly setting the value
                required
              />
            </label>
            <button className="next-button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        );
      case 5:
        return (
          <div className="step-name-container">
            <label className="name-label">
              Your Name:
              <input
                type="text"
                name="name"
                className="name-input"
                onChange={handleInputChange}
                value={formData.name} // Explicitly setting the value
                required
              />
            </label>
            <button className="next-button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        );
      case 6:
        return (
          <div className="step-email-container">
            <h2 style={{color:'#fff'}}>Hi {formData.name}</h2>
            <label className="email-label">
              Your Email:
              <input
                type="email"
                name="email"
                className="email-input"
                onChange={handleInputChange}
                required
              />
            </label>
            <button className="next-button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        );
      case 7:
        return (
          <div className="step-phone-container">
            <label className="phone-label">
              Your Phone:
              <input
                type="tel"
                name="phone"
                className="phone-input"
                onChange={handleInputChange}
                value={formData.phone} // Explicitly setting the value
                required
              />
            </label>
            <button className="next-button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        );
      case 8:
        return (
          <div className="step-location-container">
            <label className="location-label">
              Where are your spaces located?
              <input
                type="text"
                name="location"
                className="location-input"
                onChange={handleInputChange}
                value={formData.location} // Explicitly setting the value
                required
              />
            </label>
            <button className="submit-button" onClick={submitForm}>
              Submit
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const texts = ["Virtual World", "Construction World", "MetaVerse"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
        setAnimate(false); // Reset animation state after changing text
      }, 3000); // This delay should match the CSS transition duration for smooth effect
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-main-container">
      <iframe
        className="home-background-iframe"
        src={matterportURL}
        frameBorder="0"
        title="3D Tour"
      ></iframe>

      <div className="overlay-content">
        <p>
          Build Your{" "}
          <span
            className={`animated-text ${animate ? "animate" : ""}`}
            style={{ color: "#ffb703" }}
          >
            {currentText}
          </span>
        </p>
        <button
          className="overlay-action-button"
          onClick={() => setModalOpen(true)}
        >
          Book a tour
        </button>
      </div>
      {isModalOpen && (
        <div className="custom-modal">
          <ToastContainer autoClose={3000} hideProgressBar={true} />
          <button
            className="close-modal-button"
            onClick={() => {
              setModalOpen(false);
              resetForm();
            }}
          >
            Close
          </button>
          {formStep > 1 && formStep < 8 && (
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${((formStep - 1) / 7) * 100}%` }}
              ></div>
            </div>
          )}

          {renderFormStep()}
        </div>
      )}
    </div>
  );
};

export default HomeMain;
