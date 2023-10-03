import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Contact from "../assets/Expertise/Contact.png";
import "../styles/Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import videos from '../assets/Expertise/video1.mp4';


function ContactUs() {
  const [message, setMessage] = useState("");
  const messages = ["Leave us a message", "Get in touch with us!"];
  let [messageIndex, setMessageIndex] = useState(0);
  let [charIndex, setCharIndex] = useState(0);
  let [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 80; // for example, deleting speed is faster

    const typingEffect = setTimeout(() => {
      if (!isDeleting && charIndex < messages[messageIndex].length) {
        setMessage(
          (prevValue) => prevValue + messages[messageIndex][charIndex]
        );
        setCharIndex((prevValue) => prevValue + 1);
      } else if (isDeleting && charIndex > 0) {
        setMessage((prevValue) =>
          messages[messageIndex].substring(0, prevValue.length - 1)
        );
        setCharIndex((prevValue) => prevValue - 1);
      } else if (charIndex === 0) {
        setIsDeleting(false);
        setMessageIndex((prevValue) => (prevValue + 1) % messages.length);
      } else {
        setIsDeleting(true);
        setTimeout(() => typingEffect, 1000); // Wait for a second before starting to delete
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [message, charIndex, isDeleting, messageIndex, messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_hxhqwu7", "template_fn5dxhe", e.target, "HQGOsxvFXg98PetQw")
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();  // Reset the form fields
          toast.success("Message sent successfully!");  // Display success toast
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again later.");  // Display error toast
        }
      );
  };


  return (
    <div className="contactus-container">
       <video autoPlay muted loop id="video-background">
                <source src={videos} type="video/mp4" />
            </video>
       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="contactus-form-container">
        <h2 className="contactus-header">
          To Customise your own property & start work in 24 hours!{" "}
          <span style={{ color: "#ffb703" }}>{message}</span>
        </h2>
        <form className="contactus-user-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="contactus-input-name"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            className="contactus-input-email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            className="contactus-input-phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <label htmlFor="services">Services:</label>
          <select
            className="contactus-input-service"
            id="services"
            name="services"
          >
            <option value="General Querry">General Querry</option>
            <option value="3D Virtual Tour (Matterport)">3D Virtual Tour (Matterport)</option>
            <option value="Aerial Photo / Video">Aerial Photo / Video</option>
            <option value="3D Rendering (CGI)">3D Rendering (CGI)</option>
            <option value="Video Tours">Video Tours</option>
            <option value="Property Website">Property Website</option>
            <option value="Virtual Staging">Virtual Staging</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea
            className="contactus-input-message"
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <button className="contactus-send-button" type="submit">
            SEND
          </button>
        </form>
      </div>
      <div className="contactus-image-container">
        <img className="contactus-image" src={Contact} alt="Contact Us" />
      </div>
    </div>
  );
}

export default ContactUs;
