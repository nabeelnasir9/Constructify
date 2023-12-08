import '../styles/OurTeam.css'
import Timage from '../assets/Ourteam/ourteam.png';
// import { FaLocationDot } from "react-icons/fa6";

const Ourteams = () => {
  return (
    <div className="ourteam-wrapper">
      <div className="ourteam-container">
        <div className="ourteam-mainheading">
          <h1 className='ourteam-head-heading'>Meet <span style={{color:'#ffb703'}}> Our Team</span></h1>
          <p className="ourteam-mainpara">Dive into the essence of our team—a collective of passionate individuals fueled by innovation and united by a common purpose. Meet the faces behind the brilliance, each contributing a unique skill set to our shared journey of success. Our team is more than just professionals; we are a tight-knit community dedicated to excellence and collaboration. Discover the driving force that propels us forward—Meet Our Team.</p>
        </div>
      <div>
        <img src={Timage} alt="" className='ourteam-mainImage'/>
      </div>
      </div>
    </div>
  )
}

export default Ourteams